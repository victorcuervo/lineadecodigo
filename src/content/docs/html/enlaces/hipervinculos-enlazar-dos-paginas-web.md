---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHRZ3V4O%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T221052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkraDkDEW8ZnVhnLy%2FoaPNIZhTGx1l15CLk8RzMDm2cAIgNqFe4BTEaCpGWJaI0pCqoenC9ByvTA5nUwOOVqI1CGsqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAS0zmik4Df7yoAvESrcA0rauXaAtq93nDa3SzImhooulpXjs3k%2B9UtmT4PxFQW%2FNyTGnFIsuglX%2Br4jGVSfX8roqHHzyTTUvtmJJ5uybLIISAnmr9V50rH1WJjIvG7lK74W6R6vyu%2FjHDlvo22Na0NOpyYHjAaPpo6XcAsvLI4ghoxbWPU3BwzuuIIpgKOyCcNMMN22Aw5jhOw%2FkUg30GRctzIXg3wKJcYvFSGAt7K9um7mBQFa64Q1AsV4w0W3Xn%2BvIQ4%2BHDwJ3e%2BdPP70GmBxnREYDtZyQ1fQcsWU9erLk8KcJ71XNFe98kniwsFoHWAlifUy08nQek8e%2FthWmqQ7xKLXmgtBkrhUvYHsO8nK5pFHJDDqjK9QqKZcfUvF8Zia7hqHf4tY%2Fp3otBffWN30FaHtvTVtb9ilj9T%2BV3TCNQZ9gts9cbMGZeBRUqRSeLVMozCp858lnmrZgRdMBxM7Ye6ZWvaJ2E%2FlKc6DL%2FaduuoCSCs8fi56Qdvw%2BifOZjWwDNc80FAo7ouNw963DFcF0FBUzdf9XgMDTgch0xt2Akfv5e4AUiQVMtB%2FPggmkWvaANfLQqQWlpF5TPs0nHsBaTQwVlPKWfTzSsRYchBQvqrb%2BH5XG3Mo2a5maqI7gEE8af7uWpuevjyiMPOe4skGOqUB5P%2F8dy7b7PPhct3ycntSfFcvBF9jH7tYs1ziwh44GozuO%2FKrCGFtMtHxOb5fgc%2FO8oGVrtxpEUReqRxBX42IfeJzObshciXjjAR%2BFo6cig6bDsv%2Bu%2BQRJwqDWBcIZQC60ckgDopJuFq%2FsadVr8gDAc234Sn8Iz%2BWl4XQGDY6hGXuezz4SQxEM1Loy4seq%2BOU1dUvU8pI%2FdliVT36ofxR0MY7lj2S&X-Amz-Signature=1c3b66a8038df1bf8ca40617ceef61f60cc50dbb2eac46af82edf9dfb608d996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

