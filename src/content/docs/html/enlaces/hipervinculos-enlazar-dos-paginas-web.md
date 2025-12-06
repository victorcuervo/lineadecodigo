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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLHX4N7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRV3RVHedreR6YK9iAl0TrHkKhZKvTGVpi%2F4jLaPIZsAiAaZ2MyiRDN1IUSOHFX3LhjtdgQ8xG8%2BZRVsv6PXy9H6Sr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMV5RsJpCcQpzM0gvMKtwDTuQPzCBVokomcKXiOVGXB7aaGlHlgrq%2FBH3b%2F%2Ff06ge5ydNCw3tRw%2Bguo%2FlwzJZnQdLkJ%2FD2ZC5Ox9nlADV7octM5oncRyv2eRVRRU%2B4o%2B3y9tlZcIpS2TY6M4xcH41OLlr2WSbbgwzvJoTZMbqpWhE7llcT4zM0bFqsTd4fdt2xLWvW8unUuCutWzyPKsZz2xMviwPwoJ0qzkIpdOFhxI%2BNTeAunSCR8rM%2BhGt38yedZnHTk1yUaNeKG3rzNWYWJAQOPbXiKvPTVUPG5atobascQZIqkb%2F78j5VVv7ctP9KBXJk4SaT5AsbIkFh7C6fCtOCvYUbsSTaO3sxK%2Fzvz1KVh%2FzNFymmnUEuoF3laOUvNXURRZ4jtUAvTCke0fQGy4Gohtt8BRaMwomzcuqX1l6LbEVZEEx27Q8XJQraNeDW8E2cu7LOHiy7ZSNLprWUJbZKAGPwglwIAV8VcwepSj%2Bi2yRM0S56WForszOxSUe0H3JdGbNwaTwdeKJSfziO1mtoGpfeeH6dOYv95UCDYCIn3cIUKMSc5mDISxZ9wxaJueeUt8gkbUJuQf%2Bkl84FkbDXDhCBr84MufmVqXP%2BJVZecAbGww7PG54%2FnHMlxCihr2Ou7PQFsef0d9sww97OyQY6pgHCRsdkW5H0EqcVQmett8Jt6nEzDWPm%2FAXdiqAjfC%2B9RE3Jh%2FRx4stASaeP88RXfXfkfPKPd0fXSQpWppBXSiS00W%2B2LumFVRip4aTjdZf066o3FMLSpqRSnOt%2F2PpJChwXV3IUTd%2FfUCero7qwr5lDG6PJ6v95VAJoZ4rskjFqd6OV9d1S9aj%2BqOFBDK20SHC0MhNOz4M1BJ41Sk4GcTZ2t4sMJ%2FEB&X-Amz-Signature=52ea8fec8107287d697735b0b29c012dc1a6680c906e2dbdd8bd55f2ced5ecf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

