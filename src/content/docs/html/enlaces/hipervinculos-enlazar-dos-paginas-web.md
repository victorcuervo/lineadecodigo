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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC6Z3SQU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T144729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTv%2Bsp9l4v7wBo8LYDvHpZ2psQr6yuzDHD9qXmfffAKAiEAjnbyQ1FOoTYVfRdjkbiwQQFY58LtXP3pcFj1lMipoxQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL64jcYNeiLRbq7VXyrcAyGNKqHjIJ67yLM4ict0xuPLOd4BS1xX2POHH5NMesLSN8bIll2XjFTamn2pvTnBOrzQoQHkypd%2Bz1%2BhFTNBlsyz2Tsv2NquXUnB8qXvC5jmcF0pTnnJi4MyJSEraYKk9NP3gaEoK5GQvDgVn6e4kI%2BS52TEmqC6wyyoIjcW8JQUr%2F3AeZtxriuxgsWrxgUgsTd15cWp11DfoM86zCbUJQTQTlCYlr2GOpyvSUsq%2BbzOva4yga92NoMLxRAXPmvIOsOAmKfI%2FQekBGB08GbwgNtb7hCJ9oGgSLTfQqYeuxzizKaxsgcNEWzUYy1xpQbukI11%2BgAgo5qnVc3iJnuAjfujuqmea6mlGj8igQ996iAdBMpg%2By9lQvrm3dY13KW5itx0pE3Bqacf3jTgKIe7DRj5ESJFNF4jdtRkrpzPuoSGEEe93EcA%2F1QxwJjy6WZLfyhshbO6VOLkqoybAiJD3MrYBNMByARpgueOw%2Fs5D4mKWIBoaQSgcM4wQ0lLlvyw4n7Jx%2FaLGshF7LljlQ1MW88pnYMH%2BywFNe1oT7JKeli3cek2jinaJNOUTSVwREV0ZFQu1kekMiHgyXGRMhIw9EnFOwnIgB5PrV9P638uto2TmEAmPxuAHLpOFv%2FTMM%2FB28kGOqUB9xWvWDHnaHPHXFG6std7aeapH5Bae0JH9JEeCg1gvlp7hlskvk1xV2hJQmcVvjNxgNwWQq6vVBCPBUi0yE8R1fmAbYCFkf88OzHZ7SCJjQQHDrWFHu39BSXqCHLCUiCSGxrYwAxvJHG%2FHwRK3FAs%2BHmP3sW02MeAdh2SCjd7YryXAKpQ7F92Gnj%2BvYds2sCAjftuKukJwFPqQ8%2BM%2Fh71JHxgvGWE&X-Amz-Signature=120566324b42ce92e880b84a4e9b8ed6fa293c51b2576a9f2fab3aa0d84636c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

