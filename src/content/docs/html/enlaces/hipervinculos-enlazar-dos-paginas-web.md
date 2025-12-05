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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IFBBVAO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCbbGh19y8wR6YUvfTb7a8%2FwEn%2BgUbfFN3CF2yfHnInAiBG3FbbgZyAf9Wt79mXBwlE2%2FjLFuZT04NdnoXnwXJxryr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMRifQ8qnnipoCMm1RKtwDs8UECCIqJRu66n%2Bay6Nb0KZjapH2ZzGzOsQeGH%2B%2FRlsRh%2BLYpBr7fCuQ%2BOOHfD3PNMo8hzDIMBUbsWttub3HE8ANln0Yzd1MmLzqp7mXf6Vx%2Bpheh29XSZb0eQINiwsf1583XBV0PPjMEnUd292ziTqa5zcjvmYAfWAXxywH5pDT6NDe4OReNWcAaW%2FKqTvuR%2BumkRf9ikmRw6GV%2BWFkNlNkowNnE9D966uQf%2FZcusbdcuHY%2BhYqR4rmV4rIJ4EfzR8sKQlxcdzL1R%2BsaSsJxE7cDWo4Df7n%2FLVw1RJ6llbigsEYylQP%2FgDEp42m%2BITKSXBb7FX7qglVraxfPHPwyJxsHBSm1%2BZysurizHbGthnSvk3WJBJf3%2BCLMD6pLVWgZ1Skxxge6NVOqJsJ6yzDv1BT5JdApU86QVDPw3gd8xxloicf1mDINtDzVpMCK8VTXTUOHNkjeXkbYpxBLdQBxjM51MqSuuF2N2gq3tFNO5jhiFgbYHJCEkIybWuPHDNllSYj4YUYFmdSlVOtryk0hcyVRlradPA1IBo8KI5m0zXy7Ttthw5TI2LNYva8BC111yE3rXSKN0O3kXdI4Oy0xe2%2BqRtRLuJ8GmSfdY5ewuncoVf%2FHl7TeNpaZBAw0OzLyQY6pgHEp6%2FF300Wt6mh%2BhLdAWWO%2B9Gx2mw0bVwyRHkyp7squfIr1ZjCIjf0m5dZonaeYh54XM1QqDTMlGRimK8ZJ74wjOzewcH1NGYFX499wW2JpUa1ZoORlo0eQgMR3%2BD5DdSUOasXvXq%2Bqg9%2BDRc3gNvJdYLB0KNpXsvxCxMhqpF%2FujnX%2FTBrLoofV6mPYOatOSbAqYjZt3Afc1CAwhPQRLr4zfnhprYX&X-Amz-Signature=512f29b504f3091e68754aaaafce451f421ba6ba5ffbf8025a30c1441af110c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

