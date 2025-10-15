

serve:
	pug -O .pug.options.json index.pug; python -m http.server 8080 

print:
	pug -O .pug.options.json index.pug
# 	pug index.pug

l14s:
	cp index.l14s.pug index.pug
	make print
	rm index.pug
	cp site.l14s.webmanifest site.webmanifest

gdvoisins:
	cp index.gdvoisins.pug index.pug
	make print
	rm index.pug
	cp site.gdvoisins.webmanifest site.webmanifest