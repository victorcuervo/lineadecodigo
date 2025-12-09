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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL27AJXZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T202206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHL09gWDsevhlXFNZpUCuft0SNC8gjjM4qudH%2Ffyo%2FitAiEA6YZ3kw1uogvN3jI36awT3lEf4CMMHhULQEH0Xb3a6W4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg2tHCnWPE7uDH4eyrcA1O7Ph8aub08qngtNLJZ7To2woXfnFOpQaymEDOfQR0vHSoP30P4Cfyj2g%2Fgh5%2BTkf5ZYNjYzw%2Buz72XxnFCgP1S7vBtPmBshf0Bow7xAUtfdkkhpv1YohQfu9o7qXQuyNSxCNXnjpOoSCcRCAie62kYLm66%2BQGRmINRE%2FbH%2F%2FBQoagZ8cYZzTstZKGfGZQuH5ip3VNITB%2FMOJoN6DGd4zsXBGDWv7NuINe%2BXE0X%2FTTUZfZZFaVhHWPTisO1c1yBo%2BgsyCY%2Bpy882jg0Q4cFEwO6bgvFOysw5EHC8angr4K1smk8bSt%2FcVLpDFnj09fi%2FhfuldPGkiBs57s%2FvEatbxiX2kRNNgEfeMyMKkEyDD%2BrNJcnBzSqEOi7oke8S82gh1CALymLW4oOPa%2B7RNnrOb%2FouOwlCD8pQOJTg%2FgjA2psBh7xrY%2BHfiAyyzCWc75WPF6Hzsy9W2kxWTyuKoBUaN8oBxVfH3VArWGhsKTJrgkml8zJD%2FFhPti6avzxwfgmQk%2FaGLh50ZM42aB%2FWlad7ODNFQfEPROcEUE%2Fxzx6QsyRh%2BoQoUHu8ExoVQDr%2BCFQOt5876KmKvTdrIe6eHvQVZqsF6lF%2BZUFbeN5JwYaN5KXsdJul3gluIKVgEz7MLP%2B4ckGOqUBymDkP335jHO8jPHnvt84AMRWuiITJsPX9LLQsAPHobCMAsjjQrrZdiLslfoANHGViXRYODVow7yUOipd8IM9q28e9cfgFHhpfkTGCLQw3hfpJHOmbWVGUAuf2Q3clLuDwzkplXAc8cIY202hJA844mP2RLKAQNpqAd66CZKoIL6BmyM6wD1159WeEfRAwfbDmt5inevihi1h1K7MZP88FeWhYzhh&X-Amz-Signature=8c1753604af1acbf0dcc1a58ef87c75255be4e877d37d210f9f7657e94d192bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

