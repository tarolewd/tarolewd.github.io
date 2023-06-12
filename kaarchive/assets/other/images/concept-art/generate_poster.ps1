Get-ChildItem .\* -Include *.jpg, *.jpeg, *.png, *.bmp | 
ForEach-Object {
 & ffmpeg -i $_.FullName -qscale 80 ".\$($_.BaseName).webp"
}
