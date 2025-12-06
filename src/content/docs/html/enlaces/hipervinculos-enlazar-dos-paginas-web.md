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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS7BXNXU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4%2FQ4mDl%2BHAsL3JYDwYwhasKo6MP%2FXZkWKs%2F41g1EI4wIhAN4iNnIPFnxsLyIbPd4o1qaPL4TIxjL4Jp03bYbrJ3K5Kv8DCHUQABoMNjM3NDIzMTgzODA1Igy0tiNUYewBlHpW99Uq3APNfIujanuo2aFb%2B5jJGN9EkGhVjrCJrOgcJXKTUpMxMiLnkEl6%2FCmF3f%2BLi7XwsOV%2BsubLkySkgjfyAyMrfQR6PAqtPF%2Fehviul5pGaYq%2BOMadKVjPjmH%2F9yH8h3BcFO4xq4csxefmPZMZ73o5ioHFBtmwjbwgxmQoPDixF3d%2BgLI718cms%2BX0anJtM6gmO85hV%2F6pS3ecx1%2BKfHAqhmjeE1MumLEvyUSJRRtyGlzPDtgjB65p2oJx3Mkek59ldSUZ7cuhVIapwWMtknefvNyQ5dGThkpcZrFSuhmvoLO2fvr1mD08OpRRSJGlqNcYNWXnnYFtwJOlVSozqenWUcX3DjtORi3Tiwwd1%2F4EUmCZXispuo0apskN6Pqs4dkFJkiDM7LlJfluxMoASqMIqMHEQrmLU1R3SB7e6VP1a%2BFekpvWDM2WVDANYUs9KVouNecm7iRc01sguBtpWtxLxgzer03uNNL%2FW%2BtsY66XWyGKazLvqq1b2Plkl8bvSzxjlwRwM3uH%2FoSQO7IH8atNPOVBIHCL8nCh1pXiuGxHAxOV2MP82qgTpxaGRFnfn9IoH2cT%2BUYBb9haoZU0DA1ZsK0u4KFz3P4AxWhZYf1Yq4OeK%2FDkO9iloJePcB769DD4ptDJBjqkAbW8WX7WduDO2jSISKPyE2CbY0F9D70yL2gVgDlajrBuh4GE0ReW0qD30WhjXFJejuy0ayR32fSqaMuuJNBIaPjcvHXspehG0jWA5XwNnckH8zG67cEZjtLLgiZFam7nl8eEzpv0bT%2BpMTXWJ8dRBH1TmSWo1M2d74BdPDbX0n5Ge%2FNUbF%2FGW1u9i5bOuUXlk5Q7Vv04aQA0%2FptYUEGtvH%2BmOy82&X-Amz-Signature=19a568cf1e5c29d6e009bf894fe3286db76c78674914985800b864a28db9babf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

