serve:
	pug -O .pug.options.json index.pug; python -m http.server 8080 

print:
	pug -O .pug.options.json index.pug
# 	pug index.pug