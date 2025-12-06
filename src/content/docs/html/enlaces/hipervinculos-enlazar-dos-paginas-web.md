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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZILDCCXS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHllfSzzLfc9%2B%2F%2B28W2L1%2B5%2F1AGOI8VplWrrrgUVJPoAiBr78lSiQWuRnUgaUmSKxvYPkGfyEv3Qjdu1G2ZNBMXoCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMgTsmWk5dZhpBdBrNKtwDnGfJUsJ08TWc4AcQe8L4xBgLaOZ4HWSCdq3Fy4jXUGYKXoll6yUpqyAmMwlgIF2%2BzzNs61IzcWE%2FIIeEPhkixhjZwuNSqnI1nfZKo43zywGwsCdLDSz2OGG3NC4ytxPOxMOOQ%2Fpv3TrO9WO99z8QlUuzTb47yM9Iv1Cw9Nq9ItDJol8fZm4XOCd9rqo6uhNqcamjU1ocBYUeoaPOOfpX%2BahbeKZmWR9GznFxaRLiJpuO5as5FDZPXtdhCkXLkWKx2qjDETMLhJS5ZYTjZ%2B3xVSSBAlcNpzFFB53Q2DdE84MfW2gkyEV%2BAVZ072%2BAwKiOpJsTaTQCKF%2FI2DItEmr%2FE0%2Bn0AW1xAt%2BSjkED6o%2BQJiVVj7NSnEOVO4FSe8cAhFzD2n%2FGcJz1jiWzaA%2FpPkvzVJayDLYwG7BIfMwMTX1BsRFxduKKwleAkL8yu9Myc%2F95EFyWZX40%2FsouiJV2NrKTHfLrbKIqkvk%2Bx6aT5AOPGKg5yXE4nm3LZ3WPQZ3gyHSxwJiWm6jJo4e%2BO2d3GylVEImoNvvqYtylIy52xEBSvBk7X5oR8UeQ7WSNRXqXz2O%2Bv3HaP3sbcplPRWECzguf%2FHpMEugqAjQbBubT0LHiseLn1Jdoj43t8oJ36wwpqbQyQY6pgGmsP4Qizf%2F6Mkh0ZUlNfORBohcQhpEPPPVg1PxP4JZ7QZ9OoBCm2yHWJjQ99HJJdvdX1kAPN6lkAYh%2Frelpjt3szRTscYU%2FMwixUy5PpKHMyP53eKPamS12QJChSJg6%2FALkMz3PMeL%2F6R98XP4VMSP6TJJkk5g3TAPmKjVIDR1uczcDmoMDQECXALLaZmKQvaRdxoqpBwfVWUlwa9gSd4DdXAMPQn%2F&X-Amz-Signature=2a05b6a262af8498ccf1cb9c16d1504e4febffee02d4237284a129fb01a69a83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

