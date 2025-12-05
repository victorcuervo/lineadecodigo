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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLRHPKNG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY2jNFiV3tVxI0Gy%2BTFbj6StUIE0LKWAvVUqvdE%2F2FpAIhAIMJPPvryYdsG4dNcmdtrzuO0ugzBEDC%2B5dWAvVyso6qKv8DCGAQABoMNjM3NDIzMTgzODA1IgxC7K7KYiZmeO5%2BA1Iq3AMBU3%2FLZ4QC1McDAI4XW7y7hxEDHc4joIha01IeLw%2B7uhXJXSetk5lrFAN3RmfheEQmQI2mX516DMxYkxTMt7vFwtx8XgyBPapmaH9ra7lGl5C0f5lBqrIV92KpCHHmGY%2F4E8SQZ7XtqtoWvTORxnbcuYGixsc%2BWnApxkmSFZZUpbpv3CWWHIrrQwIN29RaKFIp8BEIX68%2BDxmH4YD3pqC7SXhVnl9DVkSJTmCn%2BZ8KJ9jS8sBlLxXqr2T%2BH69nE4x3kFdKMnlcNcqTviLotk%2BlYagnpTokKx1Qhw2V3B4WXQrRBiRdUEbUYnUyjD25wyD6pMeD83DKqAl187SBzsQFO5VNvCPMyMGDVE8QrEDD7vdAl%2F4vlJnex9jIwIP6KHHy8jSn1Gz7uThTNwCmwFbJnm2ej4We6x0bUuCdza2%2Fj4b2VwaW7FrbpYXpEKdigGpAc8jNKBiOQPDKsEZBLcRk15JmR2r7C6k45Xb95EVKQlkKDooNnFADx%2FMsUBOLOZYhYfh2vtJb50qSsHQHDQjxSXQXfUqW%2BLVGWbFfTuvYc8rVilB8e9VmwBtq4KiXJQ4Npu31Ei8JIXmk%2F134%2Fx46Ps6ER3tp6893Gpnik0aGOE545d0%2FMcu4XZlOBDDX5cvJBjqkAbMf2hd6Id2%2BSPHvDpuznE7B76rGzt0OwFFawDAux5jKEvk%2FbpLSRZVdZ5tEx3qpdL4OGE4cvCIOQ4KW9UiwBHE3DeMJQqbY7X33yTo43RP4QDwy8aPtto0J6T5qEUwWpXP%2Fe%2FyDLU6FewWXO7WOxV%2FV6irLkxIp3NSvVYL1ENH8eSzmLmenI4urTNVoaDhcteZd4sRYvGS9Cl8MfAgi9suPHCeM&X-Amz-Signature=3869997831d9b4bca702c6cdae5f1ba42375253b089b11dfaa0d780afc0cc638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

