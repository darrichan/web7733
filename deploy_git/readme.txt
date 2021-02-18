基础搭建+主题选择：https://github.com/honjun/hexo-theme-sakura.git



#博客根目录


hexo cl && hexo g #生成静态博客文件
rm -rf deploy_git
git clone "https://github.com/darrichan/darrichan.github.io" deploy_git
mv ./deploy_git/.git ./public/
cd ./public
#git config user.name "yourname"
#git config user.email "youremail"
git add .
git commit -m "1"
git push --force --quiet "https://dc8dd9e1f2995e39b5ad59ac9897e515bca4cc47@github.com/darrichan/darrichan.github.io.git" main:main
cd ..