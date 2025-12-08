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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WECB6KFP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv%2FkcLn%2FiHy%2FETV3srM5lxrkffafx9NfpBtLVOnUd2XgIhAMQHTRWD2Dnn%2F1oEPKlGKDBKZOOtUkAK%2BOG6HZSOx9SlKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwg7a%2Fh9oh%2F7p1vabMq3AOh7AzQIaLD8VCS6O7erab5cOrb82osb78Gek2L5iUG61jrTZIfByao31sBy6BdJ2bYHdjOhsJWim7Jik6f60DWgqB3U43A5%2Bl%2B%2FcpetIfE%2B%2Fv6trSl%2B2LkmqTlN6wqE%2B7Rjo3FGUVh%2FGa1ZoUumz6qhp3KruHe9TCBF9cep0GMu7BDy0Xw%2B6W4YDaBS1OQNwVCVlZnGtK82uXLjFZeotbrkN708ZiWWEDI1VtV4WepN%2F%2BbjfRKRP5wT8XycHecgbpsiZNo7hubhZWpycbs9MpcL0%2FXZ5n853%2FP45DAd5ZgQxdYGt4tv3QOkolrIn7%2BItVHzjuv00ezBdhZ%2BnKxmz7E0HTHC99FgbH4ntQMGnvYfwyOFIC9mL%2BIGVTvNztgEfU2B%2BXLP3Ko69rmnGS%2FuS6hElkrGSBkF66SmmukEzJJ326QJon2pENC5%2BWXBO%2BuCILJ8lLsYlHq%2F4%2BadcU7hYTlLXIbPsJ4fnTsdW4xkHj1ixkU1AJssizq5KsjRwwyI%2ByzT2vVIqHDP43Wv3SrExkXv9C5sEX8uK8F12rhwjo%2FsbmX%2FaxjP8vQuvuEzebW9e2rba3fgR6I7O%2FopSwel26MhO8Tt5yEpeOMunq1kilGj6JcIbbzb6LUbOsy%2FjDDlNnJBjqkAbbkZTCx1KRqLZsTb4OP8LIGtiTOIxiM68QRKEoJbqZZ4Iu5cYpNoPnB6gtcbdqFEVvFbQjJN5QUI5gsL%2BaxNypmjAj6qUX5faeanjvmylRkxTpsW5P4SU8oDFj4riPLoRW0fnYJAR8dDuJHsNUAqm1NKUkc8kGM4ebD2%2BL62TVDpCyK7KxAYlhsRDLpEJQNrCAfVGNNceSvU4exH3sKvL456C9x&X-Amz-Signature=6f5522c63c898bb5d5976119a2f685d3aa4ab46b3175826d712aaafcda5356af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

