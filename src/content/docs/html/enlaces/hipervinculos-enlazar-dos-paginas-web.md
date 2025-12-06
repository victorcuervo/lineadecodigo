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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKDLC6BF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErIaSv4YkHIYJfvbqSbUdO%2FwKdJe%2FAfp0PYfUGF54anAiEA3ZgbyrGqDRs9jylu0%2B2j5FSIg%2B5hyIoMe7%2BrSBIuvjIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDN5uGUnxUasITWdEDircAwoM6f1rqiG9LGF0RO5u%2BtZm0LHiP6LGQkDC83kTE4o3gkTFOQJVjFM3oUAvhQ7aeeAIrH0%2FjRZnWGesjnrHXbE9qk2qYuqNj%2FxkGmC3HTEXfG3iLpU94JL7ARUCnMqcOSIYj7RZ3jcwZ%2BvHcCt7wf3b%2BFUTiGKXqWMK03HVLHT0vvhJ6W1eInNVxmsDT%2BvJbslImfyCtsl5YLrt8NUnGJszyhaIPOHDYn6XJO5S%2FPIP%2BmmPyImtjCR%2B%2Fz2jWoegng5dV4M3AZEBwKvLzDOb%2F8UQ7UfSzUssff%2BGDFVYFWFwG6a8EyZKNpyYHZ7z40AKiuYbfiTfrSRZcw7Svbxn%2Fz2VbTO4mF%2F7NEKKk6%2BDQrukQ1zGocl6bRAuk02dwHZVQYQ0cJUHTA4WHKGbI8dFaMkyj2yxFnHLI0r1DwWxSQ%2F9ApRtaoUWLsyY%2FUfwkVvgd7oILIf%2Boc4t0AxsABVNpMahjaKyqmhahIZvmd9Lbwx4Unm6%2BD8orqJGWUCV0P8kPN0%2BnMUQrSOfjiNuFxvsmTMdb3Ab%2FWyrsv9nsHIGeyx4K%2FcO%2F6sOz69CvS1UPYY3cBjwdU9KJThMX0Ga6q8F41ep4b9EB5POe0ZVEmVNzFbjmLsCOejZdSeQcYGMMIXrz8kGOqUBQKpkNFiS7l1JVTiVdv4kC9KIenGTCb30OKfgl1qUQuZBD86WAMuh%2FrbKm8zgEx75jsawOnOCqcj1Aq3yYibzptI%2BCobOfepND98E2ggx2zKi6pAjzLZ%2BL9h1Oz9n1b%2F%2FqPy2De5EPM04%2F08B%2Bh6LPWVxoXAtCiqIa4WUNaLS%2Foc%2FWFNNk3OZOP4vVfz4%2BA%2F1FSCDkYBwiFOm749Qew62421Lvkq%2B&X-Amz-Signature=fae22565b98bde8b37ee5ae77b2d622eb18effe328bf9f51867b38b382ef5c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

