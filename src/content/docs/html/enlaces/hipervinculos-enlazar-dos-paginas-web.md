---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
slug: /html/hipervinculos-enlazar-dos-paginas-web/
author: victor_cuervo
---

Uno de los principios sobre los que se sustenta la WWW es el enlazado de documentos. Así que vamos a aprender a enlazar dos páginas web. Esto se basa en el concepto de Hipertexto, que viene a decir algo así como presentar documentos que puedan bifurcarse o ejecutarse cuando sea solicitado. Esta definición se data en 1963 por **el sociólogo Theodore Holm Nelson**, mucho antes de que naciese la WWW.


Una de las formas del hipertexto son los _hipervínculos_ o _hiperenlaces_ o enlaces (forma vulgar más conocida de las tres).


Así que si queremos hacer páginas web utilizando [HTML](https://www.manualweb.net/html), lo primero que tenemos que aprender, o una de las primeras cosas, es [cómo hacer enlaces](https://lineadecodigo.com/tag/html-enlaces/).


Para ello nos tenemos que apoyar en [el elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que viene del ingles _"anchor"_ (ancla) y que es uno de los elementos base del lenguaje [HTML](http://www.manualweb.net/html).


### Atributos del elemento a para enlazar dos páginas web


Los atributos [del elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que tenemos que conocer para generar los enlaces son los siguientes:

- [`href`](https://w3api.com/HTML/a/href/), donde habrá que especificar la página (o recurso) de destino. Este podrá ser con la dirección absoluta o relativa al enlace que queremos poner.
- [`target`](https://w3api.com/HTML/a/target/), donde indicaremos el frame destino de la página. Si queremos que el enlace se abra sobre la misma página, lo dejamos vacío.
- [`title`](https://w3api.com/HTML/title/), título del enlace. Será útil para que se interprete por los clientes qué significa el enlace que se muestra. Suele ser útil en temas de SEO.
- [`type`](https://w3api.com/HTML/a/type/), que especifica el tipo MIME del recurso enlazado, es decir, si es una página, si es una image, un archivo de vídeo,…, ayudando al [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) a determinar cómo manejar el contenido al que se está enlazando. Este atributo es especialmente útil cuando se enlaza a recursos que no son páginas web estándar.

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYWIJCWR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE57UZB0tLVCjLrXsYnNmQxb7jRAzeySxDfolUrV25BjAiA0WD4oUtQnyWSurtzhuPhQRP1uqnsSiG7mEzOpqtiObSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHSewm7Clfd1v6H0XKtwD2BaGKcJmXRCxszdZ20zrFU0ZGT%2FAxwNaosZet9wJGRrywGWogzGhXUwQ8ofkmB3u6nxiiFBjpcp3BvsFsgvH15CJqd5Tg3CjhSCW3FdT4VjeH1iKj5C2qS%2FDqzE1q9k%2Fwv5N8mRrDMyB5knPFF0QTxGT8iF9LrY6Vgu5Q8h4FaUv%2BQpkozwZnX9l3G%2BKhsU5QcfaApyapwqMdXv%2B8XCDl4XisJ96YIO1J5dZOdg1yxfFZw3NY0O%2FxmJlfpiChcnDiJOzkzK2NTWo8w76fQzgSKppPAx%2Fp9UcUj%2B%2BslRcJCFkY%2Bfvzb%2FwvxhG4KBFqS2T2QG2LVVnHr1L1GafHnQUGBt%2Fr71Zz7%2FdmwisoCXAp%2BeAXroW5W2zvP4c4BcD544MIkEGZVncIadrHayaJVyI74yLMx%2BLMOl5TJWJe6EW7uKonUSGBc7m4RUZhhAqGPitzi0OGOaUCIUi5IEkWVcl0Tw1mkUBszoVPVN2hGuSPXMaLFIXYoUUPQpGPv4ze5nx88MuHhPiEHYWbi1PAqJSeVsui672IbGWHxlM%2BkYpyl8ROEiFZzG8Kn%2BFTMEtP6aVC%2FxwjTBbooAs1bA%2BzLNStsVBrx7PajEbP3VDNNx1ib7Y6lEjx0E7jYcun%2BYw6f3SyQY6pgF6K7cKtT62PYLYihsnYaxcoq9FzNd3LRRflXIiCoh9iq67zbAJbVmfFKL1xt8hXfKiGWyd5C5l1mIF8M6M7wD7cK%2B6hNsv7PXOlY9WmdQTSN8vQjBsV4hWZunuEWIA2zBuHWdsf22TB6WVblIGuc54o38I%2Bg8jQjJLYd0SVWbwKynl3pi8MY2KE5%2FwUVXSC%2Fla3K7QSuoOeKztwiz6GmY9XUHVpEwg&X-Amz-Signature=f649dced141455eb4c1fadc6b24cd0b9cd3b4dbe9c80763ec3867eb15a0633ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

