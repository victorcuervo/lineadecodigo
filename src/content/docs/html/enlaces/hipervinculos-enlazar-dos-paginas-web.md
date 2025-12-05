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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S353CKG5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI3qmaVVgpoTQ13ptJof54ewXQLV5G9bahE8PBrUTTlQIhAPJGh7zttrja1lbliBk2z15hTl%2F1etwTT3fW3K3WMUgSKv8DCE8QABoMNjM3NDIzMTgzODA1IgyyfnoSYhO2Hud8MKcq3AO0TaVDApigaCTXUeKGe8zvPangaeMSZZVNQYTMRj5VovMgx%2FRLi17eNeoojlVnahosFXekXlfqJCGzYyTvb1eiPhSvBTt%2Fn4d34sP079odMztNYz6ePzld3Lu9hfSdVDedBjy3tBHyKOwyqcwfYXe4%2BrDFEcYWIe4o7HrBH7kUGU6QG7yB5r4zcy41etswTNg95vTDpfi4XbGHfUoC1Nyyzqgfuyedv%2FAyiwTwiwf%2B6xL1RDqT2yC9IgZCwFFtieimZ3HMtwP5CxHFnxsijYWn3NmAOf%2FMpZ%2BD1wSw1mlxxRH9w8W75hREhBkUs0NfzaEo1nf%2BKrzgLBXjaIm8lxaB%2BCUlq%2BrLBUnn2hpU3UloqFvbY55wEQgcY3LZdvEUSbRSnAT2Sb1tvIat7G8TUk14VmPNUgsG%2FXb74dFIcSeP0VP9UjHYGMDnJmN2EIX2yY83gilCNXUqQUE07My6XSv9VY%2F7BR%2Bs79c7EJ6uSsZ4GsaCp1NN%2BFsli6SMoT5xCqDjbyqKvjk8D1TRUO5IKv7pobCKDQWnzuLNmdFO%2BrkMLm6ZycHsixz0LJQQoQPH7J79gQVLrfaoN9FGLeij6tA1%2FxSQ7cK4jOihgfHdcFNSEXb0G%2BObgjuhlENJkDChjMjJBjqkAWDtVRvhKfSA2ry5RDl%2Bjdj%2Bvfc4sgbAaKCqBrK5e5dYi%2BScP6jQ45k1NG5fxYDjbzP6m5bknljPggJ8A%2BJtvgkQ%2B7uxf5BGLnZoQLDjXTwaell6i%2BYiWcsYgw7oh6JMAQQaEwaywSQ0o0RPVqTQHE8zPk7IGAm5cN1fDumi4KGhx4KwBBPFVTNwhmnBzZBVBodh84juzB%2Frl5BiR7xOpDhSSIQd&X-Amz-Signature=38e06ffb872ae36d6bca33c2ea214294fb6ad8ebb5faf0e7d0afdc8932b49b0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

