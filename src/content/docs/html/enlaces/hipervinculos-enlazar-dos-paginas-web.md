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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFKQYZRJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BLMU96SLg2twdgeLqxdVbsCqFO0QLC92Zd9VMvFI62AiAqk20hz%2FN43Cek1IlUN2BS3JJuc4DsityyoFIMhEVmWCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMV1vhbAxDTmIa0cA2KtwD4%2Bb%2Bw7NbaiwqpYorfkSMqWsXh%2By5zx7GrFKw7Lgey%2Fml7am%2FH4BJHqB3y99oKVlZUoI9unWLDASMF%2BJLwWjcwuqxPOw94S3BYDeX8uuZYzhJrckJyDtzf%2FwrPO%2FfAwkUOUlpYrtx%2Fx3icLWc5rU3xAfO90VJoN9m18NcbqJ5alarp7nPPIdVpdW7eUpzs%2BZfbAGuntTIR74IqBXctzN2Xgg2fz4aM4t0IZ8X1PRsXmHhmruvIHKMoc7EzwNK68UMyG62TnGHdZoGW6FUeFbPNF%2FICzuV%2F%2BA9HGZuoIA9M3BQiERuqtiS2dHBIAmMvrZFh8V4DVfeuvClyccxKNJhU6yNTVflWYf1VTQ4BxSeYrpXb3oSU3Oa8RnEEZT3JbRuVsmxdDrs4elas5vZdkCXY3hl%2BLYzYLpMDY3R62De1Zj1pbhGn%2FY%2FRSfqn2QexhloA94OjjbBesR6t7knT%2BlYdtJpe2XFyj%2FPCVbjtgWejmZGal46yhNigJRm6ghlR3nVS3WL74KND3q6fEgaZUVca%2FLUA7%2F2NvNuRmdjnXAoCxM223J1E7RjuFNhozpO1hzW14zyuVJ1GLdfhxRlz8YqbnxyT1N85w321Ss3fhgFXkQ5usyiBSiRvcnR%2F5Mws%2BjNyQY6pgHJohOTF4VDNCB0p1v67M34H79ZRRf1v21s0aq5Xt3BOq8CdEEyXk2lKDRwXeFnN4FlBbHRrKguEXBd7O1KK8smjzYurJliJloVJs7JU7BKKE68OCv2bac2BqxUqk1DEimeubG2p63qPcmHNhLy3n1JUB3AiJ6JaWqkp2g1NemyElUUogqHuMdeKJTvEXNGBCMRoJ6YT39qqZhpM8UZ9EJE47hkQiYi&X-Amz-Signature=e9d84d1dd88ab27d5df9ee03ded511043dd4dda43daf12a6cd38f15e30fb43a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

