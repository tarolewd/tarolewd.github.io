# Settings
$width=400
$height=-2

Get-ChildItem .\* -Include *.mp4, *.mov, *.mkv | 
ForEach-Object {
   & ffmpeg -i $_.FullName -vframes 1 -vf "scale=$($width):$($height):flags=lanczos" ".\poster\$($_.BaseName).webp"
}
