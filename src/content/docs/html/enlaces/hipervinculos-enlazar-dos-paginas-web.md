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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP24YQ76%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T174653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtIH%2F6AwxdRryhXX0YyEs0%2BuWHnG9rI50mXG2QQMNCZQIhANbu3xtNJrNsqIlE0Du%2BiOrhEjpWBuGbQfTzdtuqdqfqKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyplFwPSEcuuE%2BPS94q3ANsyTX%2FAxl94hpnFH%2Bx82vAeoW2dVdK0vvGEGX%2FLy7moH65pfsISX7xsavzvqo3J51y%2BMb%2Fz8OHD9EmPvQpSmxlH%2BQF4WAt%2B%2FZRpfyTSg%2F7BQwQaFjRtxbL9KK9%2FBWGhuz66bauN5yBevuoLbcGZOXUw5gCpdbub9lhHgDpeESqhzuys4ljyWiG9XU35bR%2F5ryDf9bG7c99MdOYY0dqXeSjv6LwrF4VlyU9qbxgZE2RZ95NMYhzlnQc75u5CRmJgpGkoPNFmDrKAyGIGoV6TEwITd%2BBzpqikC9SHnY7OtwOOTrxZzbLcN8BYtlT7ksoAIW%2B4wsr9NE3iDm4yVO3cm97YcspH%2BEu5PLya6h8kgzWx4Q224j52i8Mo7T56aWNTSsU%2BCvtvdpAIR2%2BeVFmwN6b9vpKSiVDGl%2B1bCFaNEo015fZIHHG0X5iBR2IR4F8WK8BEy094Ly4xpX%2B9abfNCx4wuH%2FzRZVck%2BU1A87zCdWg32zGMz39WMLU5w4SMMYK3QQmxREJijWYal54qxhYbKX2%2BwrWnIyXhiZcYk9nZ8wEd1kxIlI745yVvOD2%2FXlniEMeBeanWy5oY%2BJGiwsc2eyUlSDvNit3X5jc4ftupy6ayLTjVaXG7B5qUfpmzDUv9bJBjqkAXTSCTTA0ThGSRQT8dIEaF7%2FQfNDluAN7UpM4Gw5bU6%2BsHKT0uWjfkp5iYASuviT4DZlqYycuoMzeB0tRPeR70r%2FEns12LbF85UfGnJkYadOJ6ZIh2xOFH5bw6Z%2FkrDiplLFqf4%2FjOeKrMNVdzXMvTZE6adiR%2Bo5GCXUy6N8t4728QUK5kU6ycu2V4iWIqYdIS8nn%2BQzCRcLhk1m66kEzoo5IZ0i&X-Amz-Signature=04924bd381bb7824ebf5cc387e75ce890db82ecf44eb263a7bd1b07732271273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

