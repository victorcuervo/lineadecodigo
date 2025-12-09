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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56UY7BQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T212328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcT1XXBIWXhQeh2UDcgN%2BsZMK4EuHqfknUnZtnO3LlDAiA1lkiU3hZzbti8cx3vx6Dj3MnqD9GfE7jbGlJBnmWZYyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSsUFFlIxf42ptklyKtwD2uSF2Crkk3LK9JHlAsp1JyRQ%2BQLxIyC5Th0n8zy7Lzlx5NyATiKFs%2Fjvg7CRBVt2BV5WIksXGF5FdEdSc8xVcHN4sDy3Ji7XeOYUaieW%2BrDMlTU9W%2BIl8YOMSUjj1EDqh1oY7cmsrQaqrM%2BpJsyrwFR0Gi%2FZ8bLbquKzSd26xts68j3KyKXS7uJy2E%2F8m%2Bd8GoPBGdRoybLFvRS4I40apEVC1oIorKtdN80sq9g4rObLV%2BmW%2FJ5RLK14Sy%2FO4xqx2ynAw32aT0%2B0f2jHdNrP1LaU6fy38LbEijnGTObViFcECRVc4kPdhh0vO5r4Qn5DPKadmTwA1D2vYIuxbYnpcsEseXp2oPLVbBaL8AbBMyIcw2VLjsnNf51OmFyHbJUGblqMJOwmFVYL7wY3EwGI5OIEPtXLshxdJJ8WR4ci7oFdeKAXVmuI6Pn7s2wZW8PuVv0f%2F8cEdJs1LcPvRAyDjTRxQxJ6zcXQsRM65Hg6X4H6pCasfxYkKzq6fT9tN4vhfpnVI3dXfWzTxKe3kuJ1wToiBL56a3WogXZ7ayUAd327Rk1kAUB8f8Cu1rRO%2FuVnaUZZM7EtNq82%2F34hLgVj%2FssFiEgqX6ovFGlT8QTCQKPkh%2BsfCqk0p9RRRuMwjp%2FiyQY6pgFifDUyMjsSea6Db48g1cjqg%2FrYZYDfIHlEk3TflTWiPA%2B1ZhMZsnMu89pXqnGgKy6Z2i0ev9h9aipOiCLIkkaFV3kD06pEavv6fZAoZSC05CKQWqxGJ1DCXzD8EaSkhEznDOZoJKTfmbkOI2fh1izt4tqkGjipbD1C2uzgHJkoT13DaixaAs5wHKcdURhT6BSWlfxJQJ87foEb64og8%2BJZtp5CLry7&X-Amz-Signature=f619243df050264049b7338cf2797f06110f093de36ccc7694df5e7df77b20b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

