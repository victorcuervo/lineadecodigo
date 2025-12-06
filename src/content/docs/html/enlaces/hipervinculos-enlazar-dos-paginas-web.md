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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSJUHXMX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHdalzlQisAHm5swtNw%2F90s5wN%2BETiNC9uWsvFjypO3AiBLP79GBRZezCp%2FFwnDBOAxuYLW2RHV3y5bO%2BW4vOIthyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM4xB7QY6C51O7dAnbKtwDuvXWqymOYQy1%2BNJE90VMr%2FX7%2B%2FTjIoTAxGq71krPJCGULmRqr73BdBOrMuWi9cCY%2B7RMLRl%2BRPNp%2FEAAoZwiOUKAk6qdi8ift5x2h8WybGgoOXUNAfrNAJ1GU7DwtSCjyKLicd7wZEdwhO402vulBkT6tHVNV2oCLm5gvT8SBncvvW8iyN6UM%2Fwp4EQDKfY76vxF6t2BUcoF0eAf%2B23%2Fw7A28gXv2lk39nHVjQujDUQf%2FJKbNeFx9tN%2BfuXxZw1cgjYCn5XOMAgCUyzhGyhc7oHxd5kJttFSKlWASy0D0VjlNLvwlH3A%2BrDTJuZGTq%2FD8c%2BMx8YpAzrEeHbAExBQ8JpC08FOisYdMuQ4xUfQKq%2FoXTmU2Pzw%2FIi25HbEGpKQb42Hw7ydKAZmsavcmOZ%2BwNtsUWqVIEE4l2yCLjd3ZcQR3LW20gjN53wSP73PERqTN2%2FknR0Q3xFuyXkIXySQWC2XjABY622ObMhPanlmMbdm6u1QItf5ww%2F%2F39pyJH0WAz8U1b%2FCLv1yCbyjk3B%2BzNDaiuRMzdnrgofj7wkIkPte4V00VbtE47ModqFuzBDo1406K8lj20ngEZjOplstkyM%2BuaZM6wgDsW6s2M9kMH6B9vNcrDdr8%2BErpr4wquvPyQY6pgGYh9UM26SVdVJp11LQaBA3Hmsdemd8HTp%2B1Nb8gEWHMJ2xYUODZewlFIXR7sHpwXYqo3R63pyCOaW6Q7uZIljTVHUrfyXWnLwm3Fer%2FBI9c4eyckB25am5%2Bqyy8PxP8VxoRmbUxoH1DuRQUx9%2F6a3WUmDSSZHa7mUNAI4yRX4O8Us1sbxvDAvdFG5rgM6dxddRZPeYh18YHcBsdgMGF0yts8SFSeDl&X-Amz-Signature=16a61718a91324d6d6f4d13a8ce52492146f30cd6cf97fe3ccc8d220d4732643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

