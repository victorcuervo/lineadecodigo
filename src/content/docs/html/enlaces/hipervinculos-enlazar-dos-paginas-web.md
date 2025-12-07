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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UNYW65S%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqNDhsIiptY8fcrojTPI1AcWl4SeM2YTZwtLYiZ%2FlHdwIgQMc0fMXhfj8t%2BgiVyvf%2BiS4GgiFFogVbo91ocyM%2BpnYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBWTSPCa0SIZ%2FGG6SrcA47o9YNCQX%2BT4pE8ggn5hWOTmfP%2BGA2jFoThDfTwxeWx%2B7DyorgEEJMd8Zp5irBtLjmjaXuoao0g6lynx7AvOw6obrB4T%2Fk%2FLYfxrV9TU702825GMruioFGcYokgDS4io3bBK6%2BjHyqmQPYPpOPHN2JkkNIQZM0t%2BNHqb%2FngMz4zIjQ%2B7Uqjtt%2FTH6HVAlkiUk8Oo0Tjb8KKsfDaHjebJIto5mpbo1XF2TEbJku0EcVHsBzBLDngEt8A4dHRl5JOpET23sCyE1Cem6fQHh6ZSvOlqwsxgdwsaJ16X%2FPWr%2FlO0LdUUGXHtOfruI2siFgVzr9oYaQrFLPYfXkm%2Fjay1U8tejzlyvet%2BJ%2B5H%2FV%2BC%2B21N8z9WRCfTMFP9d%2F5kd9y%2FHUWYYiPaDl89ebWM19N7dNWxy%2FD2Cx6I6qlZzvfqDTiENBC4PX7H8072Ixu%2BtLzWC8Xr4mRJgbFYxR6nBvZcYUdXrmDJqtdQOnavMC0ou54QnMRPuL%2BHC9GAfndHm7SBM3wYimDB7g9HuSdeT0o0NHBTtVIRLwUdr%2BVAw10HG6cTw4SkkNKD%2BTgSayOcSePgQK1C2o51grKqBF9%2FxCtbcKXmsVIQrbtu7%2FgUmgcBX%2FgGNeuJ5zrurRZnG7xMM%2Bo18kGOqUBdtwR4BM%2B5gRLPL6mlZXLOwpy8PbPuN8GtFWz6BEXGBpaRj68SChpF%2FowQFdL4QGSdQ5No8LzbMax5HgoWuL%2FPHB9PcDy0EKoy7eGzMcpqVk46UzDEJ4jlv5V2IzE68%2FLXAK6DO85QofPKG3e%2F%2B6oqouF5Ohx7S5TJbIcEAasGon6Uc0AzKJ2ECMwFklTuB%2BIsVCITkndUuqH0DjYDL02yVg6zEBw&X-Amz-Signature=fed1334f3d1854145757ad57c7ae86d539a759f5785ed86a0b712d7b58904c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

