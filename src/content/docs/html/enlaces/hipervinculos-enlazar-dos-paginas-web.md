---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCCPSFQJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFgYtP7%2BrWDDYOBpMN7I46LNTkMnnu0HRsEGcZuB8MIAiEA%2BGzLtQRlAlTfl7%2BLPe7UVX1rgLJqTdmTVhAGMeQ7NoEq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDAgglBujgV2W3W0ONSrcA01uET%2BSacJQHrmI98iouF5r7rp6lTZr193bh3%2FxaLE18hKkY7EM7vZmt0KnTaCCZa1ugAXJ%2BIr53N0oCruEfhQRyPnL%2FP2YX6ckj24jnW9rtaRWLNszOsOFNdKvPexCEOmPYlhb00KkDdUaaPWEFl%2F6qA03Sj5QW5rtK5apL6p%2FOBM43Ddhl%2FWlmckCu7S06JbMmRqu3P3KclP68xrXzMHZC%2ByIJPDTr%2F1MvXn1nLCxx3UwoLlwGjaPzU1%2B1YhklWgeF1gXPX5oIWp94JSyaGX09HV%2B%2FBJkBd53ZTjdfalbSG9faonNfvljFdsGhz%2Bn7G5yyMKcnyQfowXumH%2BQkR02R7b9fC92hb7jCvCZ6IGDf9Q2OpgY2UnHwvut2AqNnCq3evOtaG6YnR%2BAI1TIg6f8LioAtBC2fqsZzUX9%2BAwxHeyOtexz0zVTFVBQxer6mlQVe58Z9uybiU2APZpDwykGvOUtiHUmkMpghzJ1hCTBpILfOPnBFcRUtG2CyluDWTOpHIVWouuUq2BDbS6fm99%2F4FoTNqHPXy1GMyqC01TvO0blCwy7mjdicjfQOG6PVFPHtC51q9pGNOmy8vR1sSG1hKwWN8FJDm1vXLtrFiQHTejJIng26cmFrXwFMNbbxskGOqUBRCGKevd2Qpxenq6K0UKMO8LqbBAW%2FAdSW9uNfRtEm4ZZQ1TWCs3wiYZSZ9n1kAUrbaMIrSXmGiAET7M7juwHjaSiH5CMYNE1Pj%2Fo6nEaafKs%2FqLi7gNiq%2FxKr9sRx8n4X5Uopeq5Rgz2K%2Foir7dQLUnugCgr33rLTBtGcNEAnQEbR3VcreJsz%2FHuoWiDdAUY5O9AMVK1YYnYAZ1xlxyVqzO0DyFe&X-Amz-Signature=c3bf489915b277a25bbea752681997931b7d3091d0b0cbfad5f370ec4b6720eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

