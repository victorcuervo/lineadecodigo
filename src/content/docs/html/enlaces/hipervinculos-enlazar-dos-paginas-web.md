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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP7CA3FO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T192143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1Mvt60y4l6lUC0tsXTe3tliq22SvzN5WXuRW1ywHPcgIgM5LuFvSRtfb0nNm%2FRPWzmxqMBThOyEMFt8V7FR2q8kAqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFjawPZ9wA7YSjFQircA7ZQuRfA5%2FQMKiP%2BdJUzKQw8RrvfUV8fd4Ph%2BDwsjJ7EYH%2F4eUPXaaKc0MDjfZc3n54aYFfo4PYPIY775X%2FnjFAS3oYRyoYXl1pRnvy66VJmG581Ibgvmb04yNVNV%2FsCjmKUz7oa4rzIo3aPB3RO1bwCmY0wFID8hdEyud2CZdygFQXD98Z1%2FxZIljPC00%2B9QPsufW5Ide7t5pPxBCvJXvxDoVEjNbCKo8g70Ic%2BUIexMJwjCCVrUKvDyWsEzuJ0jhfPegJl35L%2FxOODRFMPldhMjMoe7tvJvmN3d0pYNh9bzkjRIwhuw2gUe3ZLHtVSWOOW1g1VpYh3NQsENz8jOtb1eiQmWdfOkbniomLanFOnpFPbNqtgsfQZAM2QZHGwn1Xmsx2cXKY9e%2FMDXmThhpd5MBfnN%2BD%2Bq%2BZWTyxG9LrpAPq6x2U4pnC%2FLxvnR2oUHCMPGePcvi7RWY7g9VXhjCPw1P88VQAv6cepbu8A57hU%2FFPCORBo00YDepwgbeAh01qE3jj2AsBZ%2FxGGHGlFs1xk%2FhVv4AGcc5wUp4MoVG0%2Bmja9SwlHkYBtjfU1s3hH1sBO43XP0c1tfVDoGLjZAj%2BzM3YtXhJ%2FfRgSXOci5KAB25hxOGwsQVbO3TpFMLPe4ckGOqUB%2FvtC2WZSeKYQeNjO8bz93zzI%2FnRwyjKkbVCOGG1bEgrZgYQjgpadQBtVo%2FQhDcomU9I1b4q%2FQ2mPZW%2Fx2G2k4ciiljkldtPR68RddFdXVx0soFFvSZh6Bv2jwZc%2BC7u1YgNibT6owM%2BZwKSLECcGYJoLBD7RjaZ7JxXPFM5nuGgDPc%2Bxn2SfT6yxly4ctEFt9DVi9J7LroYQNNnOW7nlS%2B0ZIzqi&X-Amz-Signature=f4101c9d09904d08c3555201efaadf8a9ae28218e22154323d4b309feee355c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

