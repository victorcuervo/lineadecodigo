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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJVV36L6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1xEBWJkvG8RxkCbjk8e0KJiG2hgnjVDVY7MAYh%2FTIAAiEAl8Sg7KIXzrY9UOZaW%2BM16N45D9FJfl0iUSwDGoyYoF0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOU5hcFUK2%2BbZtRERircAybOmgQrHEQl%2FImdD8R29%2BTYeP9EmWSITomaFTlBN%2FEBwIcHaghFM9Q%2FNrqPIgTgMkjOxRQjLMvRmmYciQKEDjgG2ciL9JmDKUDedvsUilfPV0n1%2BACcJ9ZexCNJ2Xcni0lEne3yOnsRo6tc09%2BVGBWJXSEfpkxVwbEpiiF6%2BjK%2BnIFvfPr3zVr5iVG96p7MtiJUbLpfz30GCsFdZwnJi%2B0boiDFvsZbN0qpO8gxTl%2FulQ3F6qtqNKJRfXxP3DD6cD%2BgGNg2Yoy%2Bqwaj%2BFVuB4H58%2FhST8EDYNas7XEAelpRTtr6wykUZ5BIk4Y9Yn%2Fj163UtLfcHlpMudw%2BK57QCzK4w8xPu0bmteiHJ%2BiEx4r1X80M2nI1pKp0EleLW2ktz78ztk8nrFoktoU%2BVePGE3qooWceSlnxuD%2BcVyG1odNtmeH4bvwgwrkrSRQcp%2FwbaDRhRxKiY7sWrA7u4PzhKHNQs7Pwjx02fvU3x5I1JbmNiqFQtTICtwQ1uDUEdiyVOSK0AUnJ%2FdMyqZpVHjs3Lq3HFWoM98N%2BvMz5KQpQ38X9uNaBXVijOOM5v2EDXFRXBoo9s38Vyd0cSSu9%2BTf26OnnMyVH5ygW4nDwxQDMEhVI%2BljFlsaeYBnKtJIVMKOZ1ckGOqUBf8OLxN0Pyv0IvmJSdDIDjU7rEKtKtggLYnJdA95Oqh7zDkEtwTVLnxvQo2s1X%2FDTtCXjfOiACAZ01sRFoD9wCWCBE9CRTjb08cnhHJh%2FhDAn9xqbffBvJAg0lcsPNn0jpdkKNhwoEaJMBY4t2R4jqEMnlQYkjFGg8cnAgcWrs8wwrHLYckQnFLBx7fwmjRNtyGf%2FLSHRqEtkeijCd33i3ER09JrL&X-Amz-Signature=816f362cacc7f9694c3019153ea03da2876c4d8951c4527e3dca9188c9362a9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

