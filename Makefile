SITE?=gdvoisins
PORT?=8088

serve:
	echo "Usage : make serve SITE=$(SITE)"
	-rm .tmp.pythonid .tmp.pugid
	echo "Watching index.$(SITE).pug for publication on http://0.0.0.0:$(PORT)/index.$(SITE).html"
	pug -O .pug.options.json -w index.$(SITE).pug & echo "$$!" > .tmp.pugid
	python -m http.server $(PORT) & echo "$$!" > .tmp.pythonid
	firefox http://0.0.0.0:$(PORT)/index.$(SITE).html
	kill `cat .tmp.pythonid`
	kill `cat .tmp.pugid`
	rm .tmp.pythonid .tmp.pugid site.webmanifest
	echo "All done"

print:
	echo "Usage : make print SITE=$(SITE)"
	pug -O .pug.options.json index.$(SITE).pug
	echo "Generated index.$(SITE).html from index.$(SITE).pug"

check:
	python -m http.server $(PORT) & echo "$$!" > .tmp.pythonid
	cat .tmp.pythonid
	kill `cat .tmp.pythonid`
	rm `cat .tmp.pythonid`

all:
	make print SITE=gdvoisins
	make print SITE=gdv1
	make print SITE=l14s
	git commit -am "Génération HTML"
	git push

gitpull:
	cd ../$(SITE); \
	git pull 
	-cd ../$(SITE); \
	rm index.html site.webmanifest; \
	ln -s index.$(SITE).html index.html; \
	ln -s site.$(SITE).webmanifest site.webmanifest

gitall:
	make gitpull SITE=gdvoisins
	make gitpull SITE=gdv1
	make gitpull SITE=l14s