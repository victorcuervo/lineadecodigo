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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TYHMVPX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5IONRVce1o1%2FmjPiln3gV2TmRdU1fndYim5NzLOAp9AiAwnRrN%2BSQJ6c1aKQ1kqF1CD8ajXoaXVELYx7QB2yOM3SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYRZFKxqAsU1Lve5XKtwDv3cVwHg8FNLbwgO34V%2FbSJZrJyfEg4jc7hcaEC2kY6AHFSxgl%2BGHoy4vPtxLoDXo9Nf2e1RPRdTprYuIjM8Pj8ccKD%2BHQo2v9O%2F1Qybk1b66uiSp3eLP2OxsBV2AoVS0LpA7NaI8vh%2BBN2GYRgxFhWAeH769dzPDFBWMurVlb%2FJ4awkTMY4%2FLth2jhR9TGbL%2BH%2BpMWAiPX4BPXaiaCNvneGhW6yjgdtnRR86UFSBGR5zki%2FtpjLMM9lVorCbny5CeJQXVQR86IF68rUapOWN5%2FDo3ECOeLUeyNsi%2FQrB%2FCXlEzokxdaGGQuzwtIoMa176eG3nEbpHqZHrEYDOwksJOR0o3izQAMUulASPxuxMoq1kXOFuQbET00hCrsUlJPvNPuavyNpkH0msI%2Fyv4%2FCShbgL5DEKrdd2u05CGRK7zsjE5eGp5aeYzMP7%2Fb3GCYpi6RliK77r%2BxK0rrZUKe5HNad%2BvdWN3nBJihuhJ6NHSyFtA9yZ4VVf%2F91tDgVOQgcLUyzxTiEVPue%2BsfOEO6HhvJBaPtG3gP%2FjFJ1ZsTKsCAPt8UpRSVF%2BkItkPzAxXnZNz4cqFzQOHcQWKd%2BUQXmzHsdrBHsaKjUjkpYJ3ciBTuE8khFKrSiRw53z%2F8wv5nVyQY6pgFY0K8rfkcmzCJWNoIG8TYjNg0t%2B1DiojWS6Z3W0gsqP2bPtPn8oEmJzJWkQ4pS0Jp%2BMFxa07IsqAXMwSY11ThqSumHsuaeMh6m0b2tElCbiX825e2%2BKQfsjJt63%2Fs2aZwaw6Yx76VnXHJwAmpiWVbZ3x8bBjWFi2xMFoc5fUhmTVgqt2flv3D1OzGpYlD8OpPT8bqmJzWWFtKW9m8ngCAa81JtR6Jj&X-Amz-Signature=4803a5d802a3695827779340a8afb2d182941c53bc2fb8e4e26582a8d1e6821f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

