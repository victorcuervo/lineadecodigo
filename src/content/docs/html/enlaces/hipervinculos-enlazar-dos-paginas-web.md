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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEBB6WVT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw9phHKn6GcK5sZb1%2BISVH3AQ2Oeivloyfmy0zqqrQuQIgVykhPUVzgM2DU2k5SeCBL5Spwls6AoAK%2BDj4%2BVpoMi4qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlXC9ikggA1rJLm1yrcA7miMrUv%2B%2BiUTbYyk4FQUTcNxq2Lzp3gZ3hB2egpTFjPX09RFaq3VkCYbrOYR%2FvoMaDXPe0mXR96fqpO39hSWbsIEhYW4ahpIme%2BaKBZR10HwrDbF8GbGh0mwWt8xOOdBW4l5ErHRa4V0AOm99q1y23i1LzV4bzBOgX2Zp1%2FmPPeCi9jKxr2pYF1uYIogt4zBanjIhJ3KdsOXbmLifWVSriX7OGpbvwKAaa8lY4gS4ouIT17duf58Mg0fT66f%2BUDYpRGGebyPY5LetYfrc6VhQ3GTV5%2Fil8CFPI0dWwwQWr26Aosusp8RsbtORyHPT7H5%2B9lOc6NaWspTDOFikVc5DdJifMSnt33W5ZCK%2BVScKh75cWgmf7zBVokFUBoQ76QMVp5REz3yG2Ys24r6N7JwtvGHzbzbVw7NV6O%2F8Gdxm3oiDWRvi6JNfnpxG5mMW%2Bv2UCGec8zHOfzFKYpYCzlDipNXKk68EjtVnm9Sa2d1%2F9Z3t8FgYbJXNoVJEFjcJN1AanKZ8R29qrxvg0xH%2B6rDIcwfv0j%2FONKUkGm2dyEqL1pLcCw1xsuA8KpNO44GB%2BlyS23Ta6D%2FUQU9NYLhj%2BZHEzBoI4Xvo53ouaRlipwP3yts0qBj9yXCU3ppkLLMOvG18kGOqUB06aN7Ez5804XrpoGZ5%2BzUfGy6B2APttQwlIZIGuODUU5f1HBBBa4uymfNeybYMTwIotk2hPdC6pGAcCkTjjgIpuAEVW4M16tqc%2FtNvr9tTH2%2FZfCoKUONxvqYf7pSSiALr86UewOgwWfJR2yad3BXoDUDUHEw4bOcLFAcV2xw%2FWxOm9NeEEvvCuAH7LmmC1pdQQVzgra5EfTdgwORCPydb3j4d5d&X-Amz-Signature=b89051fa7f8db2deda0b8148d035d1c7e41c2956c718e98294042d83de4cd66a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

