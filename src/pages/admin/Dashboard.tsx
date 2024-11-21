import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { User, Order } from '../../types/user';

// Données simulées pour la démonstration
const mockUsers: User[] = [
  {
    id: '1',
    email: 'john@example.com',
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '0555123456',
    address: {
      street: '123 Rue Didouche Mourad',
      city: 'Alger',
      wilaya: 'Alger',
      postalCode: '16000'
    },
    orderHistory: [
      {
        id: 'ord1',
        userId: '1',
        products: [
          {
            productId: 'bike1',
            quantity: 1,
            price: 45000,
            color: 'blue'
          }
        ],
        totalAmount: 45000,
        status: 'delivered',
        shippingAddress: {
          street: '123 Rue Didouche Mourad',
          city: 'Alger',
          wilaya: 'Alger',
          postalCode: '16000'
        },
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-01-16')
      }
    ],
    wishlist: ['bike1', 'bike2'],
    createdAt: new Date('2024-01-01')
  },
  {
    id: '2',
    email: 'sarah@example.com',
    firstName: 'Sarah',
    lastName: 'Smith',
    phoneNumber: '0555789012',
    address: {
      street: '456 Boulevard Mohamed V',
      city: 'Oran',
      wilaya: 'Oran',
      postalCode: '31000'
    },
    orderHistory: [
      {
        id: 'ord2',
        userId: '2',
        products: [
          {
            productId: 'bike3',
            quantity: 2,
            price: 35000,
            color: 'red'
          }
        ],
        totalAmount: 70000,
        status: 'pending',
        shippingAddress: {
          street: '456 Boulevard Mohamed V',
          city: 'Oran',
          wilaya: 'Oran',
          postalCode: '31000'
        },
        createdAt: new Date('2024-01-18'),
        updatedAt: new Date('2024-01-18')
      }
    ],
    wishlist: ['bike3'],
    createdAt: new Date('2024-01-10')
  }
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'users' | 'orders'>('users');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const { user } = useAuth();

  // Vérifier si l'utilisateur est administrateur (à implémenter avec un vrai système d'authentification)
  if (!user || user.id !== '1') {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Accès refusé</h2>
          <p className="text-gray-600">Vous n'avez pas les droits d'accès à cette page.</p>
        </div>
      </div>
    );
  }

  const allOrders = mockUsers.flatMap(user => 
    user.orderHistory.map(order => ({
      ...order,
      customerName: `${user.firstName} ${user.lastName}`,
      customerEmail: user.email
    }))
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Tableau de bord administrateur</h1>

          {/* Onglets */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('users')}
                className={`${
                  activeTab === 'users'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
              >
                Utilisateurs
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`${
                  activeTab === 'orders'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
              >
                Commandes
              </button>
            </nav>
          </div>

          {/* Contenu des onglets */}
          {activeTab === 'users' ? (
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {mockUsers.map((user) => (
                  <li key={user.id}>
                    <div className="px-4 py-4 sm:px-6 hover:bg-gray-50 cursor-pointer"
                         onClick={() => setSelectedUser(selectedUser?.id === user.id ? null : user)}>
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-indigo-600 truncate">
                            {user.firstName} {user.lastName}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            {user.email}
                          </p>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <p className="text-sm text-gray-500">
                            {user.orderHistory.length} commande(s)
                          </p>
                        </div>
                      </div>

                      {/* Détails de l'utilisateur */}
                      {selectedUser?.id === user.id && (
                        <div className="mt-4 border-t border-gray-200 pt-4">
                          <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                            <div>
                              <dt className="text-sm font-medium text-gray-500">Téléphone</dt>
                              <dd className="mt-1 text-sm text-gray-900">{user.phoneNumber}</dd>
                            </div>
                            <div>
                              <dt className="text-sm font-medium text-gray-500">Adresse</dt>
                              <dd className="mt-1 text-sm text-gray-900">
                                {user.address?.street}<br />
                                {user.address?.city}, {user.address?.wilaya} {user.address?.postalCode}
                              </dd>
                            </div>
                            <div className="sm:col-span-2">
                              <dt className="text-sm font-medium text-gray-500">Historique des commandes</dt>
                              <dd className="mt-1">
                                <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                  {user.orderHistory.map((order) => (
                                    <li key={order.id} className="p-4">
                                      <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-indigo-600">
                                          Commande #{order.id}
                                        </p>
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                                          ${order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                                          order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                          'bg-gray-100 text-gray-800'}`}>
                                          {order.status}
                                        </span>
                                      </div>
                                      <p className="mt-2 text-sm text-gray-500">
                                        {new Date(order.createdAt).toLocaleDateString()} - {order.totalAmount.toFixed(2)} DA
                                      </p>
                                    </li>
                                  ))}
                                </ul>
                              </dd>
                            </div>
                          </dl>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Commande
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Client
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Montant
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Statut
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {allOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #{order.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{order.customerName}</div>
                        <div className="text-sm text-gray-500">{order.customerEmail}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.totalAmount.toFixed(2)} DA
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                          ${order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                          order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'}`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
