Get-ChildItem "$src\*" -Include *.jpg, *.png, *.bmp | 
ForEach-Object {
  & ffmpeg -i $_.FullName -vf "scale=500:-1" -qscale 80 "$src\$($_.BaseName).webp"
}