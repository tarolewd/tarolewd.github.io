Get-ChildItem .\* -Include *.jpg, *.png, *.bmp | 
ForEach-Object {
 & ffmpeg -i $_.FullName -vf "scale=200:-1" -qscale 85 ".\$($_.BaseName).webp"
}
