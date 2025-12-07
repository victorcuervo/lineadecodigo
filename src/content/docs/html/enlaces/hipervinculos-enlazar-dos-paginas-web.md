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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z33KLHP5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T122340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8JNmgzkoN%2FPCRrTD%2B0HwyFDi1TMLSkjF3iSgGKwoa7gIhAMbXNZW9U%2FdV5L90UrZvSewUYG42GbUR7902xnT%2FnXr9KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwikU5ZLxLR%2BPzPnJIq3APP2hqB5w6KTsXwwOqCe7EA9toq1AsX%2B7ZFIKD5m1oki7AEftSYykMtQ78vGPWnbarC5VRtHyyhdHyyqapEVZeoaSXdCA8prCaVwf1ooZ%2B53jjizMyUcwCocCmJtfgLiJB%2Bpam6NENML5g8U6NDIoX95VQ%2BueG%2FdtDuvUjbiETIjrdTCdhGQE3Oy0M8CCWUq1OcCfSNZBX8qIDQfal9NwwfpGuXeEuv450SmFBDaaMkR5hP%2BMVd8wEESMjHRlU6nv%2F3fUUX4KvkaSj%2B0HhMrzFP0oZgQFpO4zPC5yHVN1qSoHSI1zwHz9ROalWnuA8QE4KQCocMzalFVhnsThoZIQFa4Nf1jXOIiKNq6hoQcgALdWNNbq55YN%2B6Nnm69V3r1GPjF5fRvgaqDn8qirfXr2qQo4f%2FLmFFY1ujqkGXa%2B5rgrcr8rnuFXHb8K4bBmlFilig1Y0jwAaFsQZO6ZTr55XsGZ5UWZtBVQ4iRLLjB1MqRWdkqVpCiCnSzsTcDCrFa2bOyYobGmj5qhha6gKz%2F81jHkBx0So4vjnc%2BsHIAflUDHXZTYBph%2FmLrbbg%2BPB1KjoHzmP9Tv71zGaAjT8%2ByiBxkppmPtfC9BK4kDvxZ6q5XbDxk6LDKRxQuMGuLDCtmtXJBjqkAcPrN7G1Ed1zvcX9R9sGHe3Xk7uDxcXiU9PxkCU%2BmYeolo332VKi%2BdLOXeA5gpulLuW8YoSZAS3MCclHgyWwwJP3a8uCR9CKuqNhgvHYbG3J7z8cAEnUhuMS%2BRz6M9mgAQTvbJ8i%2FJMPyGN5SY50nYEbH2aAmR0itVCucCtfZ7wnawdd%2BWkIw6GJNBBgJua3CSfbb%2BdgrvOVFva%2BJakuRZkMscZc&X-Amz-Signature=b370201c0db33a649ddefaf5979d77a254b447cce5be6b3aaf234c330dd3aa1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

