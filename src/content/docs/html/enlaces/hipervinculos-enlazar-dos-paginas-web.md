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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTY662MR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDYYtedOF6cqFWv0H6LtLP2qiNd56pjSiuveVaaLFlBlgIgAk45LRERh9GQ7nKtFzrgcwlrzfXyLO783o6q%2BH1OXWMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDurnqB0Y%2BNoAzDWCSrcAzzBagrhyiNL79yAZYlsArn6i%2BxMr7C%2FCF6R81FQAnFdExMOiUWTHhEcVRdPTWrfevWhX3v1W6nLOFuabDRGEuKZ%2FCGnQKRmkVnnmBFYruc7b6vQ9rKeM1Dxy52Aufq9TFoKyPUc8dNyyZDlMN0DV0xr7cSQE51ri2s1bi2YtOCM3olHOoB%2FVFz29GIfQoWVTKZ1JU4G%2FjaWTF0w1Uxp7YYX6jqVk2vPQZfuhm2hGQZHn2HUyMKNeWxFnd60MQaC7ndkNzP1ZT7wO5uuyPH20W9yVFb7GUUdGxtPAM%2FsCGc%2Br9sSyFRf252zzEYqlGX9LBc84a51QDCYZPsYuY%2Fy7h%2BaQKUAgcBuSrG3ayGePRJk%2BLvXsIffRINiksk3Ygvd93ClmQqiGKHc0n%2BepIcNvuclgr06uviEXzk3VT3lNSlUaUqAFN3EIEhzWUUpl7QcNvGi3PbowwZZki7pSYIwisWy931hQxFFydC24GIGlshLOx1Kpqb3IzSjvkjLrTm%2B3y%2F83jxf%2BKIn2jT5mG19s%2BZ5djsNqS2WqB1YiVErgs0xwL3NxKZ3Q4GyppnzdtdqbgpZepJdDdyb8nr0bUuio%2BHLmbEkBZoL9lXLbOpdv1LeJ0m%2BrOAmzWqz8%2FLvMJTLxMkGOqUBMXG828nnhRBw23FUU0LQAiuVAWYUGNQeWqYIrSLiLB%2BVHEza4U1r%2BGRXE9XEsp646HZvNWA4iGZjwiB4BtetRPZmXhlh%2B64sFBdV8gEEKYhBTl2NHvS90%2BmqE%2FjgDM97B7imY5lfG0rSkQ%2FbqUd5Kz7aK7zdnz7e7Cm9XSo2FPOVY4WdNcakL2Cr4NfBOZWpFpkrtHpIe240K9cZKC0eMOfPp8Pa&X-Amz-Signature=83b786f42d851e50e101d419cc7299b7f0f0b7db94c743c546eb8fd1a181f9e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

