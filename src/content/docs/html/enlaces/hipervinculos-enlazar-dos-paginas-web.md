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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652CHHJQF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T201404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIELcMZianpJo1fmXsGTZrbMz0e%2BqBFu%2BO2FgzatQLVKIAiEAphlWASR%2F3IOWaYEzO6%2B1zOSIWGgR2%2FpK53hilsxUaqEqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcn0DW2D%2FgbzHqFPSrcA34xzglwvHnC2BpoozutE4yXKu1MJp0erAMyNU2ZlsUImbpVTzPrQIX4TFHjkdzuJ9oeCjFKXwIVzF0FDnZ0of8VsGX8eBh0b0u60HdloSWVpVAKS7RRTjel%2FYeBU4jqMX%2BOS6I9Ueyi7MfLliz8fYSep0ZEkQESHIzJzbd2Im2hUPbPFobjPEBEThlZPxd9lgCWAAiOWq%2BCby5iLTKIVf27b9OGGOksPqJGr8h%2FNyL%2BEa2WI9slTpF2ZOW2kY8bOTxglRENj2S%2FYu77FcVczrUk1vc2m61oZTfN2iFu2kcILF9%2B0kjiTIZqxQpHC1EoXTOOKvbSOj8PuFQnoyl7BAXquaWzHtirxE%2F8qZActwF3K5Ejk3mHK95E2PeMaZmzytBun7blbaTacR2Rz4xr%2FelmYggV2aeK87lZFNlhBQ97lcNWE4MLRHrw4pV2Y7Yolflub9hnNJSL5ZQSD%2FjoWtdSiEtU0TxEWHfq3t2n4q1vWg7Yv2I%2Bm10zgKyetsWdzifa9swF8TF80NRcV%2FZ0zBlKN%2F8d4xFvpUErv%2B2Ri1KyCvjI6%2BJMtwSlZOUk%2BWpbR7G8mMwQek2JlesO3Hsc5%2F5JlokpL5EkQG%2FkovxgaFaws7thtjnOj7LcdohWMLb%2B4ckGOqUBJbmTNwYxnPTeE2VpmyQt%2BRhyxfENW7niSEYHCzzLHpScG94jIeL2V4WXzdcQ0ubXT%2F0jr2KHRZqUZ9A2NZUrHKkwgK94UkLibDIlVQcZjF4G3oKs53Q5BbXMJ9OV%2FyALPg3SH%2FJ8nvQ5ITar8ZKNrtxxy%2BusHziWXryll3N%2B88Ew%2BRfVDB3iJsu32UYxMVUuW%2BzyFSZ2hDawQFaP76Yb9KUNM5w8&X-Amz-Signature=2df27055c8718417832d31a5a6389c6832a38ea1ab13a16f05c73f360f3996a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

