Add-Type -AssemblyName System.Drawing

New-Item -ItemType Directory -Force -Path "public\favicons" | Out-Null
New-Item -ItemType Directory -Force -Path "public\logos" | Out-Null

$themes = @(
    @{
        id = "plasma"
        file = "colour1-clean.png"
        logoRect = New-Object System.Drawing.Rectangle(40, 310, 1770, 1060)
        favRect  = New-Object System.Drawing.Rectangle(2180, 550, 620, 620)
        # In logo coordinates (offset X=40, Y=310):
        # Clear area containing BRAND LOGO and top-left watermark
        clearW   = 1280
        clearH   = 135
    },
    @{
        id = "aurora"
        file = "colour 2-clean.png"
        logoRect = New-Object System.Drawing.Rectangle(40, 320, 1640, 1100)
        favRect  = New-Object System.Drawing.Rectangle(2000, 580, 620, 620)
        clearW   = 1180
        clearH   = 105
    },
    @{
        id = "nebula"
        file = "colour 3-clean.png"
        logoRect = New-Object System.Drawing.Rectangle(40, 320, 1640, 1100)
        favRect  = New-Object System.Drawing.Rectangle(2000, 580, 620, 620)
        clearW   = 1180
        clearH   = 105
    },
    @{
        id = "ember"
        file = "colour 4-clean.png"
        logoRect = New-Object System.Drawing.Rectangle(40, 320, 1640, 1100)
        favRect  = New-Object System.Drawing.Rectangle(2000, 580, 620, 620)
        clearW   = 1180
        clearH   = 105
    },
    @{
        id = "fusion"
        file = "colour 5-clean.png"
        logoRect = New-Object System.Drawing.Rectangle(40, 320, 1640, 1100)
        favRect  = New-Object System.Drawing.Rectangle(2000, 580, 620, 620)
        clearW   = 1180
        clearH   = 105
    },
    @{
        id = "daylight"
        file = "colour 6-clean.png"
        logoRect = New-Object System.Drawing.Rectangle(40, 320, 1640, 1100)
        favRect  = New-Object System.Drawing.Rectangle(2000, 580, 620, 620)
        clearW   = 1180
        clearH   = 105
    }
)

foreach ($t in $themes) {
    $src = [System.Drawing.Bitmap]::FromFile("Fav_Icon and Logo\$($t.file)")
    
    # 1. Favicon: 512x512
    $favTargetSize = 512
    $favBmp = New-Object System.Drawing.Bitmap($favTargetSize, $favTargetSize)
    $gFav = [System.Drawing.Graphics]::FromImage($favBmp)
    $gFav.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $gFav.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $gFav.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $gFav.DrawImage($src, (New-Object System.Drawing.Rectangle(0, 0, $favTargetSize, $favTargetSize)), $t.favRect, [System.Drawing.GraphicsUnit]::Pixel)
    $gFav.Dispose()
    
    $favPath = "public\favicons\favicon-$($t.id).png"
    $favBmp.Save($favPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $favBmp.Dispose()
    
    # Also save as icon
    Copy-Item $favPath "public\logos\icon-$($t.id).png" -Force
    
    # 2. Brand Logo: Clean crop without "BRAND LOGO" text
    $logoRect = $t.logoRect
    $logoBmp = New-Object System.Drawing.Bitmap($logoRect.Width, $logoRect.Height)
    $gLogo = [System.Drawing.Graphics]::FromImage($logoBmp)
    $gLogo.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $gLogo.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $gLogo.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $gLogo.DrawImage($src, (New-Object System.Drawing.Rectangle(0, 0, $logoRect.Width, $logoRect.Height)), $logoRect, [System.Drawing.GraphicsUnit]::Pixel)
    
    # Clear "BRAND LOGO" text and watermark
    $bgCol = $src.GetPixel(10, 350)
    $brush = New-Object System.Drawing.SolidBrush($bgCol)
    $gLogo.FillRectangle($brush, 0, 0, $t.clearW, $t.clearH)
    $brush.Dispose()
    $gLogo.Dispose()
    
    $logoBmp.Save("public\logos\logo-$($t.id).png", [System.Drawing.Imaging.ImageFormat]::Png)
    $logoBmp.Dispose()
    
    $src.Dispose()
    Write-Output "Successfully generated assets for $($t.id)"
}

# Copy default favicon
Copy-Item "public\favicons\favicon-plasma.png" "public\favicon.png" -Force
Copy-Item "public\favicons\favicon-plasma.png" "public\favicon.ico" -Force
Write-Output "All brand assets generated in public/favicons and public/logos!"
