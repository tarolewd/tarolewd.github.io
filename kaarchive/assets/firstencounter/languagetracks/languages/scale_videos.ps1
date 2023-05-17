Get-ChildItem .\* -Include *.mp3 |
ForEach-Object {
   & ffmpeg -i $_.FullName -c:a aac -b:a 124k ".\$($_.BaseName).m4a"
}
