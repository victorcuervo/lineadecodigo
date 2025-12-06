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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C7EKRZD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvYNu0XdJH43RwQ%2FTGlVtavYc1p01SSnQF%2FygjVhERcgIgBE5F5FsdEyCOJl0QQpHbRWorBPuCZHHSprL9hVZCcJMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKpwrlkkYovAN7ZWQircA076kttaQ2Bsb36sI3lwsuHSArHx1beLBiNMr0zTi4qNQH2BGM%2Bvulg1OWlxh17KX2mC5l1J%2FVUQaqpLM4zlSn9z0BU7Gco24463Z0JNp5N%2BkXXMVoF4gQdzeETdyUx4UCmDx6R0M%2BebMemmVQ6LREB5tY%2BLfBsp3aXSWzDKXGEISUrbbfB%2FCulIcayawzBJZnprc1bHhTKf8Ohlk8uramKaqFa907CTwSfsmABrfgiC3K6%2BLGYcIMKRsBAgzwHQejMtfwn%2B6HXqwPLnxVEqvG8MtB%2FPeNTuzQO85HEGynV419uBMvMqvFMnikO%2FQpMJwhY%2BAsA1CUQp%2FaKi9q4I%2BFmI9J59al0vInrBoZ8hWNlr74quWtj2oQSvUbV3Bc8AhSEp5D04BR4tS7BCewuB3jDlI56PeAK%2BFQfYfd7VUiOYmREdU3JoKYOfPFPrrwSZ5LplN6wB53TiC8vrqXfu%2B0CsHTzCI9DGCaf%2Fij8WFfLBnFu7VPcHjQkznUUkxsOfsxXJAOJ405oL6o83PlcueltcqgYQ56gWsP%2Fde8NvOwKQJ183hXSjUua2YGaxJ6MYmxR0%2B32RE%2FoRCwiz39x7VQeiGPnblcLYyiDMjSIPHV7l%2Fj2nfp2f4RHIE7yhMJS8z8kGOqUBht%2BrVTN8nftuSJAymDLbjeZVrORn0evuvMbDBUjZPfsBZkOFLEUutBpfJdoyBvXxBpJRPG1LyI%2BCjjY5%2FWM7VPenvg29e%2BztD32ltyOLTETO0y1jQnRP%2FvMha3SNuTUg%2FzSMT6djyqYWzi39y%2BUxjrB5jBV2msiJEVmjQVcKIAsqbXSZ1nYC7iyDKehtYh8LSscZMeGnvWEtPnAKR0fc8ivdxCjJ&X-Amz-Signature=5030236a49fed3b682fe6fb6c6b0587defbc29260b3c5acb4b9a32661e50fc08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

