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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOBUD6DK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPXH4HOmrqEok9Y07Fq7TH9ODPDgvTCD0GBRC1UgfBzAiEAwwJf5WIMhfc3Rigry3ic0ZrhK%2Fh3UWt4OX%2B5HyZcWoYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcSxBZeTc4EvKSRPCrcA5scan0b9DLvg8G5QR4h526Gm9%2BuvES4wkB1DosDyX7p0V7akiJvsxJwg%2BdcwVZ4JnkT%2Fjs%2BQE%2B0efn3u2%2Forz8h7V%2FaJxibl8hg%2FY81ZXtUESOnvqHIfDMFg1ZUleu1BYG4EapN%2FcgxflFvNHdAi8r5L06DEy134uDi%2F%2F6N6WzQdqQRXQaSSpCVlHKKUT4PfSQGvOduSXZ6MMafphBMOv2b8g%2FdJwsGlpKDSo1tkTDfBYsTKoRZc7SmGcYqBy%2F6FhxJahiZYDLpwro0evzfYgzYvttEzix%2BnE9FPv59QV6LYhnrYfFSXIk2w%2Bm8c0U5fR2y8EygzyiaTL7yERQ3koTQdILCbpeW5fzyScdF9iG%2FDnLGloOCNKV7VB5SkQfKWWkFBHPz6F39cglt7gOV8yFpUG%2FkUiydLoQeqfs8BldcRgvT7p2NJFPq5yBApKd3Q1%2FxCj69iM9D3Dh3OYklSQOPPnk2Hc0rWrsSf3nCx7Ub2cx5negNWVMIvEfHJbt4B29onSaGyEa9OpdSpAMKmlT549bauVtCRBH5TBufj0Z%2Bv%2BOuJIuAOzwlK9J9eVjXhGhF5GTiDd2Ry58wE8ypOpWXB0jzzrY9eLAlXwvVhFLUcZJcyJra8G9kA%2BrSMMzl28kGOqUBJZKwpxA2rsKWNi43PPOGo2tPd5HyH8e1xLdSJrHTdBMMffh7ApwLr0UZrhD6YSSNavNFv%2B7m9NoQ5csi8lp79bn6ItsHocmsfhiC8x4QVSKU2uZOLz6WBH5VVPbrRCl4iPc7e8hlliet11DFqAnLHQLAUCUN%2BIfBSdKpFaLBoMXo%2FqgJLDVJWyfBAS2HxWxVBpxWyYPMUBxW02U65f%2Bdr2ivyqNk&X-Amz-Signature=77c76b19d31ba2353cb73c6922c521d3fef14a17cf7c66832a33fac3ade444c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

