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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REDMWGAD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeSz8Ozmq%2FDIHfaGFnU9Im0jQLp9vNCQRqNuQO9TyW1AiEA%2BnT2RbvQ4CNfIIkTo77dGqxEL4xvQ6gFekzxHPGnmXYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMh9ikCQExUKU5589CrcA8nJSeFg32Xhc8Zp9DaL3yHqeQnY3J2m%2F0VswnWtR0DCC1PGnOuqvwfp1qweiAV%2FDDqawIDazUdh6LDFTeDHVjRxl7yTyE8b9j0CCxm%2F4hnCWq3niwPQ27O3%2FjgXWEkdq3o48%2B5DMQP6OPFw7LL2IYUn9h38OCSoeQB%2BJiR%2Bx1bmSwu%2FQw6umXBVuyHY35ccxcOAWJeWUdP%2FLa5NGO%2F9zabBNE0CIy7cswPVS0uB%2FTB5abvSN4w94GCGNpCtW7CJPj%2FqAzUQ3JjBqRlut8OogkE5pOLb0BwQkGrRqgucsHOa2yIXs7I0xo4hpEgBh5fZ3s3l4JFQXVl6JosMrE0K4zLTjvp18cW1BQr%2BnMg4LqdLA4Z80pM0Yr9WkZrnhXetxSjH28JjS%2BVjeoip8RLc%2BO407jJONpmaajSPD18T%2FumeOh%2Ffz0xjozDifoAZZ0xC3hz8fJj8VWx9rwhKNZ%2Fvgv421lmI86P2BXBTDaivUteoklHwv0XHsR3HEfmzPnvJ%2F6yihtoBcrhfGz55a%2FXbzJOzrKbmh89T9IVWq8UIDlH78HIuUvHw3cFZ1WuTQBbUZWgi1tvxvLpekU96DGbufL0kbmNMpQ5DDZryLmtUZoIK8B45WcU1nFzQYn1KMJ%2BA3ckGOqUBaZcJl%2F4jWtMEi5uQYWq8X1AiiYAJujAbl64nI65B13If1M6fJvdmM0rufq1TTznWOZJw%2BLEJQFsrV76a4%2BZHW%2FPzCi3Z75chjdjFlaU0QBStAwt0xo5P8N1e3c1sZgyKeRbDnOh5yAPLbqXNsbMBntxJ5AVy%2F35adG9Nj%2Bs0Sz1nXhR0ezSv3RN%2B7f9NfmS5nx0cNOix1YbQ7MHjE4d6sltbqhjo&X-Amz-Signature=e244a37166fa6c858c526775bfda5e9433c3e552736f75570878fd64ee4031a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

