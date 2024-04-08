Set-Location D:\git\react-google-recaptcha
Remove-Item package -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item 9swampy-react-google-recaptcha-v0.0.0-beta0.tgz -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item 9swampy-react-google-recaptcha-v0.0.0-beta0.tar -Recurse -Force -ErrorAction SilentlyContinue
npm run build
npm pack
& 'C:\Program Files\7-Zip\7z.exe' x 9swampy-react-google-recaptcha-v0.0.0-beta0.tgz
& 'C:\Program Files\7-Zip\7z.exe' l 9swampy-react-google-recaptcha-v0.0.0-beta0.tar
Remove-Item package -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item 9swampy-react-google-recaptcha-v0.0.0-beta0.tgz -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item 9swampy-react-google-recaptcha-v0.0.0-beta0.tar -Recurse -Force -ErrorAction SilentlyContinue
