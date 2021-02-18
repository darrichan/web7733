npm install&&hexo cl&&hexo g&&git clone "https://github.com/darrichan/darrichan.github.io" deploy_git&&xcopy .\deploy_git\.git .\public\.git /i/s&&copy ..\CNAME\CNAME .\public&&cd .\public&&git add .&&git commit -m'1'&&git push --force --quiet "https://dc8dd9e1f2995e39b5ad59ac9897e515bca4cc47@github.com/darrichan/darrichan.github.io.git" main:main&&cd ..&&git add . &&git commit -m'1'&& git push --force --quiet "https://dc8dd9e1f2995e39b5ad59ac9897e515bca4cc47@github.com/darrichan/web7733.git" main:main&&pause


@REM rd /s/q deploy_git&&