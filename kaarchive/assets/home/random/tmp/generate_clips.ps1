# Settings
$width=400
$height=-2

Get-ChildItem .\* -Include *.mp4, *.mov, *.mkv |
ForEach-Object {
   & ffmpeg -i $_.FullName -c:v libx264 -pix_fmt yuv420p -profile:v baseline -level 3.0 -crf 20 -preset veryslow -vf "scale=$($width):$($height):flags=lanczos" -movflags +faststart -an ".\clips\$($_.BaseName)_scaled$($_.Extension)"
}
