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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S35ZJEH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDHCEXOY1pcLum7EqnMlj3vRKSCBpVNCODcPj6dCNasTwIhAMP3Ikl4C50x3nsXYk2Maj3tAn5PdfIQorQpXQVpPqXsKv8DCDsQABoMNjM3NDIzMTgzODA1Igy7cVhe4ERz3dtub40q3AN%2B6Xh85qFcESnRiHTHPHg6b8pmMypBlZQmahdotNjH%2F25itJ1GXP54TxjL%2Fp5tYD5PiPx9V4tV%2FuDW7fkhucFYPYS1G%2BTrRCSvBcn2MXi4DhMN4GN0f6V6KsrZ3rjnR7wThnnjzH9VupcPPyyQUMGlmARmjhR5tX239LZlb1t5h9vAbYlBThJoP5Wuu2mL5NbshhUWIu%2BSLyYHUfWk%2FlGg8FHh4hFsrFwH1V6x2Nt5BKJffwP%2FVJahAR2hyhBCGFbO32SZlLzXDZjda%2FugaHSxasZpWArsKobMN5JBY%2BlweUIS9XoluKPYhaLW7hn0JL5hMNJek1OdLs1xUb4ZSAwJ9JN7vPvmdOkeKSS%2FxzL0%2F9rj5Jd8TTreB8k13Gmr0DvGIFFLmlPNpvqBUvIO4PfURfxIlAB7shL3BBnyaw2S4E4tnhojkRT%2BNXMzv%2FqzhCfIULpCFPypLvgEISxVxM9uf8yLcAhsL%2B2oQFt9IxfEtP0o75Dqi9am7JSDhMUfgNn2XV2XGOLhOplCkSmfrHGDllcMcDE6dj42yzHbJKa6xK0bQiNZIC0LleE0GbMGThLi2quPxMjnDzsibhY2dTCadDalZFXLqOSkvmF3MII%2FO2XStMvQGcHbdazvtjD008PJBjqkAesFrflwWC%2BjAV0%2Flowv5%2FJDh2mHOmq4VDhH5LbgWhhfXHIloc3mHApY9228mDPgSrzXwe9DsYBGd1rxDMxP1Kx8H7NtXyvMjAtOP9fj0A0TKdPSZH8syq5AIfc1z7Aq0BLUE7ejhTEmvwhmUoxx9XsauSls8VNNUnnv%2F2erj%2B7ecNofNn8uMqz0lqFQ%2B8K4VfjGTyDtCqoWrmpgIV75t8IWi3D0&X-Amz-Signature=0f91b9198c926d25c54638c677d7c63327ef7b2ef1d184605a2fd1832763213d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

