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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYJ6DOU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiqsGf1%2FzcYqlUN4xu%2FEA8X%2F1lvfJjH%2FwkUqQ1TQvB%2BwIhAJ82TBeGZtYgEui36%2BnO9DvxsvU09hU%2BMxhqbQUXTxaGKv8DCHQQABoMNjM3NDIzMTgzODA1IgwnY7Xq%2FL0zokrbDnQq3APU5CCTt9TgcArAdokno%2Fz4ysY1jjYrROyXHFA58n5obd5e3NlM7U%2BOjhuxxTVWyDGFQjIQR9iTAsw8KzhT890uplMObdm0jg9Wnk90%2B1BqoHztiNoHm2a4RAS02pR4iB65mq6NXzrYjVL%2BF2UsXzhEQFdFQ%2F6RNmqXiAv6OcvAlpW7G6zmSyf%2F4gVA7Chphrh75rsVe2drFKBPeMD7XLoPwpBrjdQLTzS5Sb%2BYNGCCSibxGgvx9mLHOHZN8a1W6iGb%2BfekVGq%2BYn49RM5hEGUH2X9WjYgYBgnTTzIkNHag22E8w2ax2P2gSKyIX8dw576xyZ4n2Ce7pJKdQ3gEnH0VLAZv7dA%2ByZLX0PCDIJcOPa45g8sB3qVEu945Nhy1Zl6WaTdjXF0bD3raQmdjvFTPVjUhwtPxQjYPzkGC9ExXW6bwtyQOERxMCyWQbjrzGVH%2BduaENeA7tzKexHJ16Vp0CUoIzBy1jN3DKKuiQoh4DGj7j62s3clkz0lW2XHrVQYh1z5N09jlpn9u%2F%2FvcCWbd8t15ehWLuxKbFyt%2BKffNEexwO2DhagoKuOVjl4aF0oCxgOQhd6W1uO1fjmAlf6ulHQtb6FmuvdqKeLil0FBDPN1W41HFlDplz84LaTDZptDJBjqkAf7lfaj4a6JiV%2BS6g%2B%2BEEEZaDMi2cWhB1nNfrS2YsUkFphku2OqiDJy0qWYClHGg8%2BTk6GzyvGejj%2BxYmJ%2FsZl5ZMTY3VWc6%2B0bDrkjqr0CkKFe2OhqYkJoyvgjqgvfmHaHlnIgkuJflKyDYtGJ17bgeh8Tw%2BXY4xpB5va3McqYDZDLMOvRAMfb6zwS67zifmeQT%2F9pudHXUKEYZncOGfhmiGFxS&X-Amz-Signature=946abbd7923763ab03a241aeea4160e858c79e2f3731a50ad3c26596e368bd90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

