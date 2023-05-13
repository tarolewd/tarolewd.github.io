# Settings
$width=100
$height=100

Get-ChildItem .\* -Include *.mp4, *.mov, *.mkv |
ForEach-Object {
   & ffmpeg -i $_.FullName -vf "scale=$($width):$($height):flags=lanczos" ".\$($_.BaseName)_scaled$($_.Extension)"
}
