Get-ChildItem .\* -Include *.jpg, *.png, *.bmp | 
ForEach-Object {
 & ffmpeg -i $_.FullName -qscale 90 ".\$($_.BaseName).webp"
}
