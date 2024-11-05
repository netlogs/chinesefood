#!/bin/bash

# ===== 在这里定义所有需要替换的变量 =====
SITE="https://your-custom-domain.com"
SITE_MAP="https://your-custom-domain.com/sitemap-index.xml"  # 完整的站点地图 URL
FOOTER_TEXT="YourCompanyName"
# ... 可以继续添加其他变量 ...

# ===== 执行替换操作 =====

# 替换 SITE
sed -i "s|site: \".*\"|site: \"$SITE\"|" astro.config.mjs
echo "已更新 astro.config.mjs 中的 SITE:"
grep "site:" astro.config.mjs

# 替换 Sitemap URL
sed -i "s|Sitemap: http.*xml|Sitemap: $SITE_MAP|" public/robots.txt
echo -e "\n已更新 public/robots.txt 中的 Sitemap:"
grep "Sitemap:" public/robots.txt




# 检查替换是否成功
if [ $? -eq 0 ]; then
    echo -e "\n所有配置已成功更新！"
else
    echo -e "\n更新失败，请检查文件权限或文件是否存在"
    exit 1
fi
