Add-Type -AssemblyName System.Drawing

$files = Get-ChildItem -Path "Fav_Icon and Logo\*.png"
foreach ($f in $files) {
    $bmp = [System.Drawing.Bitmap]::FromFile($f.FullName)
    # Check corner pixels to see background color
    $c00 = $bmp.GetPixel(0, 0)
    $cMid = $bmp.GetPixel([int]($bmp.Width/2), [int]($bmp.Height/2))
    Write-Output "$($f.Name):"
    Write-Output "   Corner (0,0): A=$($c00.A) R=$($c00.R) G=$($c00.G) B=$($c00.B)"
    Write-Output "   Center: A=$($cMid.A) R=$($cMid.R) G=$($cMid.G) B=$($cMid.B)"
    $bmp.Dispose()
}
