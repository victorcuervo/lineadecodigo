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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ2R5ROP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBo8NdfAXzdNBSSwqNqCJfBkl5FvVV2FihJ44YoMAjlgIhAIf5KPppGzToLHOFmSD6q1%2FdeDmxNB66yKt6xDd2CoqEKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0y2muc%2BnbbdUhxDoq3AMkHUxcBRENwLWEsr7RH0eY%2B0V9hYWcNs%2FyGB0bfifqjjG9r5ZIf78HUhIu%2FSw3BaOBE2U6jw1RorLfzet7XjOAOGcWlAyKqJA9FtfN2o43LQ6QJ6iUl6kEgRnFFiCloBfGRgmKoVWz74fmLuYBN7y7%2F%2B%2BoStrgHYnnhdxwCLZIXq050QFvijPQVRlcbKphpfLWiCEuzGcjgO1asarzw4HCCjELvZCNsOg7tXhDFjf8e%2BORFKLloSyco7soS9aM%2FJ2RhCipc1KWUrYaxMKRUQGoDa5rH1qvrHk6bRf4%2BzZxSz88CnR3dPWeAypCoavZY%2FSPNtLurbZDMnfMnp32zecFgTfY4nCzWLlalpGnk3%2FaQ3Q%2FcCP7QD48V4JOrjTyhWTZtTyCAWbPuPkfm4CJBXimy1mXmfunMVPsTZwd%2FnBFSg0ZMpFGWvq9miCtrexAQPRGNQc5TD%2F9NvGY6%2F6tT83jDWxTU0DycPMgawFjzN5PdJnqQrpVnignmY%2BR7%2F1GrFPumsno3FVEweZlGbQ4L6a4AKrt%2Bsx%2BNQCCRmI%2Fvyd3os5iiiHmJwimHVfZTm0Wrrrd2oHTI7r960aYwyRI%2Bdil0AQTXFes0Q2bntAnnDhMdFxKVOIvckRNZM1%2F%2BDC8w93JBjqkAes0Lzww2wzlGfTuw0Sw5qXK0HbBST%2FwFN%2BHHHileX9A8a2xAonIKjYfmM7GIR7218sAFGe2uH6%2BYBdYRBD0frqdT62%2F1TNgwElH8pY7TdFUoG%2B0QdUG2SQfPVcH26HKDE%2FvMFHmlvevZfElp18RMeKFx4XNI0dNuLFno53idsRAjz%2B9KMazQaGbT5dPQGpcciRBSUWLpncoTPoPQFRTFulrWm1C&X-Amz-Signature=7a76c77473c740e479771670a981afe5cb5b021c033e2de5e7de525bd9af9128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

