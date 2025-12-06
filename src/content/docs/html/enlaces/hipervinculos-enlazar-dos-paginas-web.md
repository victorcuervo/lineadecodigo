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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWVNTEUF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl9ZEawVctc%2B2dCcoJjAdI1KvdJd9nbrdsZFgiaZE%2FigIhAPV1HltZiFx9hDljyvHREwplFQlQ5k6QreWBHuUaH1pGKv8DCHoQABoMNjM3NDIzMTgzODA1Igw7WO78kcCKFI6%2FJNsq3ANRGQllUlaHT9jpxamp7T3dcaonsDhBUeJrfnA5GArDV12qz1sPKAq%2BVuZnJiFdhaXAGotim3LZUgB0xkWvXnYxVYYTVhsVw0vnPPWlIEhQq8Yz9JQupsXrX8poDY4a7058cvGMV9C8mPXRklEU%2BsxPnIP%2B3AWpegX2OeaYRtNJe2cc23Y731KapooXDtvs21PbQBcSD0%2BBDxAEviyoLUQJ%2F%2Behb7%2BCsRDiI1HkgLWlYQI0D8acE%2FUT8sQI16d%2F4NIkPoTzivRwaXOUDAQiaC1Buc18pJsxI%2BEmECeU%2FBvPDtde%2FmW7SsbZi%2FjAW92tJiAaC0BxVn9X%2FqrU7Ia7hiejVYDF2AAYa132Y4OTGYdshkF5C%2BUyoZBQiwH3tIkkHuZLCHDNbUbByVW7lYLtI9cBem8AwoTC%2BFPDB%2BYRsbcOqTtJWE8WIaflvGBXZLVF%2F4%2Bm5Df9jj4MQ0tjROjJ9kcOg%2BG5BY%2B%2Bq1Ckz3bXUcmc1ucadauqHME%2ByYLmUmj5qgAxFIYwDdZWLO3Tqqtem1tqYjSgQ4f4lj9Xq1wqZsYg0UH9qLLOtgtY4uZAmjslaHzb%2FjUZgYLss0EwCGKlWR5kxOrXoIIiqgzsIBusbHu1whtgJ8dXPROcp%2Fn5jDC%2Fx9HJBjqkAbmEC9%2BslOiSWXm9UfNAIkPWZwbBMH1FSz02wm0fYe%2FiPVgNyCcdspReSB2J8aJZzDWxS7fJkprv1BDKl1boTLh9DrSjtsiDviSEePrkX2iF4IfJX%2BEx7Qf1K%2Fgd5bwoGnhlJaJpJxmqHIMQXNSHr4xS8I9s6JoM3huEqXoo89miUlp8WUTES0M04fGYG51NqCMtOKU8IFF1mnzGxnglZCCeao2R&X-Amz-Signature=80af671869293ce1d0607b84f79b6e7c997b0f800a2df340eca39a2bf5af09b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

