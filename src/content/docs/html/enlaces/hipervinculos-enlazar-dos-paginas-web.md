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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQB75KIV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T180514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKITWq2xZ7kOSTuDhU4ryyyS0XRLvciocQgEzs8nXDWAiEA1pQ823OHeIZrGUCkItSSV6BYZ9baYMTawJrzAc4PF3YqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7%2B3UEbbk73zBtqjSrcAzoFalRgP0ABTvdiJxy9qEWo79TfpFc%2Bshx4LWoqzM8KeaZUCw4a3mwDa5AHdbdGT7GTMxl68XhfuGpknrAY6KaXPntGJjyL0DnWSu6u%2Bjhw3uzBOIrfT%2F6%2BmIq7urRYRKcT%2Fh0NMortCVefXRtbULXgkh5BfPL7%2FvVEIU0udVMmVQSTq23lphPGfRaYov9pf7V%2BxB5D8ss6yPK%2Fg3bpi8h2NtOsBp1IHA1Wq2wCpwR5Bos0b5V2CzSHjLivnAWPZLojUgDeBLEwalbe5Qrn0wsp%2FHGhw5I87ylwpfOMMHSbLgqiSsCI0LumJEROUOEer97DFoJ7jPqtqmp4fehpWRC2Xuk1WdLGh5TYI2XNdMAcM9YJMD03FI6MdoqN90C8ofxj%2BMAVzJAJLnT6BF4LjCloJKL5e%2FY0%2BTByuXG2bmXOEwFmgscoGFMPvfM7NRqXcwDMs%2B6mZ3ViOEpOKQ%2F6O4e11d%2B%2BfC49IO6tl578DTHstXBQiuVBmheDTMiq9nkAigdmM0JMtZzH%2FPfZge25YqagpGuZZFRxJqa7N2zvyDYTgAZtDuH%2Fei%2B4EMqCT%2BAtP%2BkIQxbdIPZTgtAyVIQ4Yu%2Bnn%2Bi4ccRxOSL7tRxCJxe2R2ucp6ZZ%2FEhOvwvtMLu94ckGOqUBA7SF7AoCcyjSr7YGSVGBDOr50m1Ke6eEPR6sk928N8zGqVo8KeStYZy17dFl7DKt4NMI9ZPokgeznrPkjGNiriRaTzG%2Fb%2Fr32N%2FusThnqBEk4Bnh9EgGQOyBB1RxY1DXCBb83s85V83aGNwkDmTXQv7s0RmS1brj7Zic22I0lwn3Y1mshq7B52wY82vPtjxMpQxDI3cxHFeSFqsoWnXYNM0oTMA3&X-Amz-Signature=668dda297a6dc65f028eaf2086bc54e65db2d8b6f490ce892832ccee149d6a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

