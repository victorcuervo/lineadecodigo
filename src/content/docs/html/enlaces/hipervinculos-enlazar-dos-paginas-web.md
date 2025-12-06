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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V4S6TJX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC812ZW2S3fpx1x6mSgOQcCLOTERdlat41PymIVUCjS2gIgJFJQX15P8YWa8It1gPq3CW%2B5itEIWAj25CShm8yRAaoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOJOqFLyXlRRz%2Fn5cyrcA6RMPFzcUVZZiK2l6hyCHPeBrShtsZsNGqNnW9qY40d0AFTlIGAe8n9n145W9rWpgoO8GeYPMWs2Xp9nxFUGFxtNd2jXGW2svfi%2B2FavMOGc%2BCbEq4SrwZAGhj1HheeVRBkBcxiUzodC2SndhR0R%2FeJAc5PpFt%2BB5Et8xz9Dq4Xum3VRqWhZSSBWupU5mON2foHqyaGraUQObo6NXvQtFFZ8JQp1JqKtCKoySLChT9UNAmqyWZoWri48tEP8%2Bz4KGPfkNB2b6rEnmY4jErxk8G1eqKE%2BW1C50ZrT0a1m9mDI%2BbyrvWG8QNf1o07mSrGdk7iU3P2Ia%2FYBMmY2KBj6RWZVMcfeWG51aKdw0s49cQH5fD6EQEVpfZGeNHji1li%2BZ9wr2%2FtwejzEs5eHaMxrVT0ozqH9T9DqB%2BSfZX2ZBAAafAjOW9mqQJ%2FBiTy6NGDzAlLLGIUvTDgcyXPcN7BVolyU5rG3zeZLgOwxUd8pcNN1ozo%2B3EDrX5uOFbtJilExXB7NpTHVZZh2Tpj6NqfSdfJVfASbMCwNJEtdzRp86CtLdsjXqhaPLxNw9XBlZmXMGOAQ4SVsPDGfl3W715clMdYLoXzKQgy30i37yG2VSU0Uw5UoFFaBa9tizS1PMILF0ckGOqUBHqM%2FKn4At8PsyJ6GdV%2B93NfrbBnxxyiGOv%2FOzyCxCX45OXa0ddlXHsgPlLy4ZuqgYQaNz1paoEYPBp5VQh%2BhA53X5gkzMXqOXGFupl3fd4pQrZ1hjRAfzvkvju6xD54sap%2BahoU%2BlTXx5kIJI706iNhuq0yQ4huICiIWsEy1wbx2hGvVGZoiLS1FaRVb0bDqgMk2H5fLJOykxhC4YgDiOlZo8K%2Fs&X-Amz-Signature=786d4943fde9e88a25d7f7f69866f38fa626d71e393867387ceae553a0f2e551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

