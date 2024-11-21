$imageUrls = @{
    # Images de la page d'accueil
    "hero-bike.jpg" = "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?auto=format&fit=crop&q=80&w=1920";
    
    # Images des catégories
    "category-bikes.jpg" = "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=1600";
    "category-ebikes.jpg" = "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&q=80&w=1600";
    "category-accessories.jpg" = "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&q=80&w=1600";
    "category-helmets.jpg" = "https://images.unsplash.com/photo-1557803175-06934eec7be9?auto=format&fit=crop&q=80&w=1600";
    
    # Images des produits
    "vtt-sport.jpg" = "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&q=80&w=1600";
    "route-pro.jpg" = "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=1600";
    "urban-city.jpg" = "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80&w=1600";
    "bmx-freestyle.jpg" = "https://images.unsplash.com/photo-1583108607572-56a954424d2f?auto=format&fit=crop&q=80&w=1600";
    "electric-urban.jpg" = "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&q=80&w=1600";
    "electric-vtt.jpg" = "https://images.unsplash.com/photo-1559348349-86f1f65817fe?auto=format&fit=crop&q=80&w=1600";
    
    # Images par défaut
    "default-product.jpg" = "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=1600";
    "default-category.jpg" = "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=1600";
    "default-avatar.jpg" = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150"
}

# Créer le dossier images s'il n'existe pas
$imagesPath = "public\images"
if (-not (Test-Path $imagesPath)) {
    New-Item -ItemType Directory -Path $imagesPath -Force
}

# Télécharger chaque image
foreach ($image in $imageUrls.GetEnumerator()) {
    $outputPath = Join-Path $imagesPath $image.Key
    Write-Host "Téléchargement de $($image.Key)..."
    Invoke-WebRequest -Uri $image.Value -OutFile $outputPath
}
