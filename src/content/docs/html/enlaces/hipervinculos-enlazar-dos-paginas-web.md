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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5D2FY7U%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T222328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGo7Pu9THdKqE3hkz%2Bfj04Y%2FPlDZfu4bI98jNv3%2FtIhAiBq%2FQsk3XvBqULvXI%2B8rYOQi2VM1XO6fSznP126bazspSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFso1l%2BxuIWWtM0QXKtwD2jKyK%2BROpYQ1J1ou%2FGscpUbYj5nDbLVMtZgTzEiuoeojCBe4Y7TK26rD6ZnqgRABpF58kpyxBwH2kCQGMyFInQf6Pwc9o6GkzCYZkYp7IrKqSqS7WKyX74V6LwipuyXW7ruUvhvJr2670%2FOmjTroLnpdpHVu9JHdsoXegah9ja5KMJskW2MPHN5Xbg5FMMlfcO7Wux75%2Bb0WLac3LnYmJewVJkndSNeAudZdgx9%2FGWEczqg7a04HX71iLgBox91Vhf1LvqLt%2F%2BM7vNyi8wQBUHpHla6rXMlG9Fn5cF%2BRcyvxLais2W00K6vMAWbaZ8JG1cjUsCd0mWRioAUe0bVjhT2uTsMKY2pyOigGb7FhiRzEClDXrVtCY%2FI%2FncmeYfUamb98O1zipF0BdKmpvjE0PzIljda%2BTq9CSvETehZjc9Zc1IEaMYyicJQjgMAHq%2Fn6KDZLOTDVgTjqOWhlGuiXl5YOfez9liwpUY3T4wegBxcEK1Zaa53gXYneBbeLG2ZmFvkrcPXCRx%2BAGMFh%2Bv%2FDknPhPqbTfHmM48AZ05zitRNB7sigV4Ylj2E5Y%2BII1iAO3LoM97j56r4%2FJSYsmG8t4tVfTWDzF9zeQgw7iluvXqF%2B4rdJpO03qHleQRkw7J%2FiyQY6pgGi4srm7ix8iWom0eolQuml4iUOjO%2BmgLDHhKCb2kt%2Fgl5Qclf8rnb%2FkjxFuKm54HQA%2F4Z1unq1reLXcq7%2BbtP4bzCYyJS6SLgqSIyk3pdP5ysonvGbCKlFzm3a7JnrQfsi7pSPVMCdcWOqUShBmesD14vHEh5OS0yf%2FgQdq5gAvE%2Fb69diqjN77%2BY3yk%2B6KcTZ%2FnFHm1uZEKmEbAygMCNfRfWgtjnd&X-Amz-Signature=91f1534d4ce6df8e7b57414b16f8bd6efaededc7b8ed3d5d42256728aea9985c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

