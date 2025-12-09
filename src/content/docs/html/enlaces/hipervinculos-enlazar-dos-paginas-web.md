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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5E6TLX6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T224452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8WEOTdM9WcOZbWrKdgu4GOGKezTAHYlEyWd1X5GLn8AiEA3IKAWErA5CQP1SN7Grif7hnWH9ikVLKC3LuWewJCHA4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8FhkJqqYcS6xo7KSrcA8HtI3XYV9DHw25rECNz9sEXKSeY%2FRgIhuxEdUsaAna%2B%2Bi%2Ffz9MV0VJ4gtaWXRlP3gOrY6ZxnqRjFuZhotdDVeq1E4Z2MiZh1XzFvGVnTOK4ZyQbdQJEcQytvoKJlr41r3MHN8V69rNFWhDRImQkIVfgNmvagn8GFV9d6FyDac0RvtEgrjFSuArI%2FvV3w%2FFcMRChFfbTzYcI4V7aMCFocBdRcaMkZX2NayuLbhA9solgzlJWtLClscKJCU%2Br9NH0%2BPmWTmhfwu4Nmw6o3BYTFY06zFIskU2H4kI5ytQOhPK%2Fgck%2BcNJJA0m%2BdmQXIUZC5SievPTdGUl3HXu5FkGuif7x%2BWwKv0J2%2FAKZfcg3HhJNkEpdvuNxTsDRC8AOkBaTKGqT4gVJeTevTu%2BVvcNWNjIpAuPVqwOn3fr2WaXUxsGk5k0JkPK0Lpi0qDykuwPIWjcb85dIVQXF1cZKD%2FV6Ibc9a8F6Zflp7hp0M04wqd1oAI5vYIUpItkQ1aMkrT2NNynxRHfyEUqRTPfRrOEmwz8exK682IGAjU%2BcXJEBG0G9%2BUOvGkvgbC6Q7IVaVB9hMaMk%2BV1hbFFHIsv4%2FvYOk5V%2BJSR5QT91mvvKDZSVvLqmB%2BRkXsESEo%2FsfMstMOvD4skGOqUBHIggp2ImRsOcEV6Qd4PaL03bPSEpz1IGrLCP2eeMPie3fhUK%2F%2FL20gB1%2BrfifZeUFZlMk%2B2VTRNcLL%2BbOvCMphlHKPzSOkLbuk08tNsalZ4qbuy77MCEsY1PY0wJxnRAwG2tAwVPHkgcbtcn95WhN4bA9gaqjdwRZ7pCxcmBCu5JX8SAlwIRUrLRRWPuIZfDHgqDA1vO6IXams0a7HRNgp7XBuZK&X-Amz-Signature=d4eef0bf31e7b7c5a6b061bc0f8f3fc4ec1f18c13f2993db89c41acb00ae37e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

