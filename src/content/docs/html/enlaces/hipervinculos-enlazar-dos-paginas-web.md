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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS6SI26E%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T191324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENljTSTdIo2hKwSVgr9S2zekES3VTJ6cFhsqlvIRe4EAiAFcUP4n4YjV%2FopHyjgXfBpaQTSnrh6icDN2%2FPHmipDjCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPLfOgnUQJ56WZYczKtwDLDMk%2BkLsymWsgJ%2FlSCo53hZtdSOgow8EqVymPqGqil%2BzUzhleS%2BTQSXKV86rclL3IygJEGKTrqmxdiPLCSeIOu1G7W6%2BwPt4sljj3MasGlCvy0CeKRPd908td6Hdu1m97OzhLr9quOHgRJc%2FoprIg1JhXAcuvpZ3DpC9bV81VtfN1FvPCdzdmMxLnpVoiZT6yoQndqirLjdA0Gl%2FjWtv%2BL%2BQbdJhl3BpZRVW9QViyE5MmtDFzfjPUgxFwSeQX%2BnE1J8QjfCrRa5AiTlRCIqyDWLcg%2ByXj4cOVfjYJpDK99ykv4n%2FhUr7K8X6UV03NZTMobzkIB7zfwhSj14KAUanWDWOPcOHN8AalTPOuYpDJPXervK3amUp257YCsCyf%2BK0EDIXA%2BCl5n4wWoGZA%2Bf%2BjQVP0qcjNUkv3G1K3J33Gam5mCACSGmm%2FVosSzz1H0O9NLeRvJwvnlLmmy7TyEH01ArTlqsmmRRyYXPx4seZUjyWNut8oWbixvbx2RsreB%2BDBMLGAEoOkoEABudH8ivcGzJq3bx3P0d7za%2BBszNENmJmrx%2FYCmhyzDSOT%2Fnnf%2BaLOODujWe9cT%2FY6dCoEigEKOgkciCRn4Pwhg1mpjLmUAipB8LEtZIAsTxsZukwu9%2FhyQY6pgEUYlnd36q9B72k82euAsvTPqdDRF3qM2WWet8CmU6iBtEiYjkQnXxnq7YZ58hiGg%2Ba1W0zG2iBrSob%2B2j7f631N9jViOjuwmRVTnlT%2F6d8gz45jmjoROtKGTaBwqlukS9URc6257%2FoWrzTC68uCML21lwiQ1HiLhEaS%2F7vORPbVJ5tTiv%2B4jNjiPiNZilpBawCa0RszmM6rlZQnzm4ocBByyMZ1VHD&X-Amz-Signature=84d027ffeb4dc6b1171019b92e198073e92af5a981c1c2aa6a41ced1308e9be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

