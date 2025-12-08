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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYEW6H7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJMi3WY2hFP1cehuecvQM5ePYUWE9Je6zNDkRRZCkl6AiEAwZPCsO7y0Mqup2r53S72fvzCEgY4FO6NnDpGOBsd6D4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDec2t4nHOwYR7CRyrcAwx4i6Jdo9ZmeePWzYx5Xy6LTA%2BUt0oQTvdU0lWnoR%2B9Cv1x%2BwS3c0oSzk5fjgMJWouFZejvVrMIhSYsI%2FVFPoHSwXE0FK5Kz8%2FY6KfpNrE%2FKerfF9IGnin01ixb2PRfZ5BpMP9yRkQ4pCmhsCzdTq3vjTutsPY7MPv0yPe%2Bfpm7fP8lRQw89PWRRzNZvDMur5iNTpfORNbdWo19%2BefqGkmFbGb6pum17vQYt1mhcyTGPi9pUoxAVf2nnaZ%2BzAmh8fmm8d8d2LDLrggRXQeZM6bU93tNDjl1%2FwK5MKIqOKwyV059rICH5HwU19L3MvnKyobl93R9aXc54HxytOndFhT8CpE8T2LJHXhoAAHwvln4r9k21rS0aOMdj8oag5Lyo5f0B0d6xmJj%2BFl3Ae895nKrj0LASpBMtJ5KUfQYsyIEEMxXQnNgQ2C88sUomPgoGqErKEO268HSIo6wEzUVqQf73aSqyXGSVwuSPw8cIMd1xebY3CktcjtYwwWu4iP7c5G5p1ozC5umMnbbXcp7ktf2qVbPRVCT76Osoqkic%2BgQ57EyJ2vpsqQqs0O2cVKs0vw14BGrIi0S%2B%2B%2FFwFGg1sQKM5BKwUM6ptFHhLtX1%2FxoJ9UaTM0QWge3R7h7MOmz2ckGOqUBGF712XWdXU9Uwc9Bn2ejpRrN%2BJ%2FC%2Fx4VHl%2BBBeCs6A09HEvgMkj5n7RtASp5lFdSq2RZM9h9We0F7O48TaSVHu37tHHHUW8AmrwR%2FPoOX57mn0qNb04ItCoAtQNYqNdxEaBG2Tc7zSK4FzoyN7PtyDmzoH7THU%2FhFA7C%2BE2R2ynzYYep5nexw2OcHzLkAd6MBYyQhM4yJDJU6Gr%2F9SsROZcyLpzm&X-Amz-Signature=1244334f29070776248c7d9892da0415fffcfb5913e00f1abaebeb9d559cb10c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

