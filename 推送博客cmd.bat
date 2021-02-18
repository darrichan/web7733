call git clone https://github.com/darrichan/CNAME.git
call hexo cl
call hexo g
call rd /s/q deploy_git
call git clone "https://github.com/darrichan/darrichan.github.io" deploy_git
call xcopy .\deploy_git\.git .\public\.git /i/s
call copy .\CNAME\CNAME .\public&&cd .\public
call git add .&&git commit -m'1'&&git push --force --quiet "https://dc8dd9e1f2995e39b5ad59ac9897e515bca4cc47@github.com/darrichan/darrichan.github.io.git" main:main
call cd ..&&git add . &&git commit -m'1'&& git push --force --quiet "https://dc8dd9e1f2995e39b5ad59ac9897e515bca4cc47@github.com/darrichan/web7733.git" main:main