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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5L7GNYP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHFwa7D7LAuBwaExLiG51nej7oCkCZyLkFeKIKXEOF1MAiEAlzVpgGPVBky%2BWQpw0DrlIn5SHq8GyE7ncQ9BHqlyGkIq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLysNIXpBlGiH3ygIyrcA3V0XL9UQKYC2oC0gbYvb%2Bn9aKmGshMgOnii7CWR9tcN3Wd71YX9G0JkkOoS27kr60IpKsqAbzD6PUYnQSRv7FKL1nVjncTSUfZ3ENa73qoI8k28aXDCXJzb5zdg4lSA%2BAbUI9saFA7LbGgBWmxL9MT5RaLmy%2FyaRQRzJY7ELg9aaFSM9Ua855bJH075z82mt0kdbyA8yguH1VRI56nWFLXigsvcmWQgKBhs%2FQ16vAmxDtyjGxNwiDZORsM9X5O6u%2Bu5BFBiyVhRUI%2F3qYD%2FwIVEnZUft2CUo0w3%2BUWpZ8arDiVy3DAqVQEmDiopfXLAXPK5mRpG5IZ1CCouNt2%2BivLvioUDuKIu3pWUjTfFpQnSahqyhCk946NGRT%2FsNjum7dI%2FpX9QLM711bhK1t%2F6SxEFgHLKgA80v8GfvdbnPXPcsBbrEa3Ea5ALn3NFeXrJJYRmfp%2F2MFbslLmI1CRhGeK7MoCz4OuGBUQs3LPqs9UmsU6yd2y7mBSGLP%2Fd6gw657Ls6O63VCC88VOoWH2NpcBPFHlIXvRQCBpyegSHAxfgHInLlDqhxeK1CxAjJIVr7ephF%2Bq6B6QDfPzEX3rZrANVltYvp7AGpzUz6ReLhE8h%2BSLMSqcPUvfceT1hMNaez8kGOqUB70qC2aLjOs77SHPQXmudH4mJF3Sb0WZMeZE8MnBXe%2BLmaNKia1uQmr1AamTVKXEyhzNIg2Pv0N9m43VYcPHW0iYnuCCKk8Rzj%2FGiu0juVx3EHFKaF7KxALrMlD4OrzxTeebfaG8z27qhuLGcd4DipZQXQtnia2ntzooLiKgD5QZ2gBSsT017wtPWZWjIAxr%2Bfqal3Pz%2FSsFjatGB6w653qW6fhzY&X-Amz-Signature=677044cd11f8938e56ed2bfb9100cf2252e52799e0ca531fe7c884e6d0d9a792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

