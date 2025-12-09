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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADPR2UL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoSc9UbfdbsCtULmS0gzZzFed%2Bsnl2n%2FVQzUWN3zxmUAiEA3EKrakRJQv0YPz%2FFshBAIkWDZcgzTXkoduBiv058%2B7cqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCICNaY1vl9%2B0Vp7DircA6dcU1nqUHdPvFUk4v9RaLnmR%2BIRQG0MbdGGRgttavcRQ7%2FBap%2BGfYtZR6dI0xoxpA%2FUp5FHpMO0sokoXBiDuBI0l7RtfC8tymyYSKrZoixTAr5Zk0fY61oshjCu4FqTvFlBz4cGTnC3GIyEPbeiPYmTIwgupSMigVfgMMj85YqHzTaKGu2Ghbc0nnkvEiwyTlsFAhpoLVoVYJsq3BnBsSfOguzV4UHiT1gPJstF0MgFnucIwARRw1xJ%2BBmUFOoF0FRXeLfmOZqhMmRf0dIC1WVF8Dhv0a8vF3ewGgs0rl28ScZnon%2BWHwHo77Cn4wHU4WHAlxKjMKaK4hvbr4J0KnlTv6FAMSFt%2BwCafq6edqR9hy3FXutsmj8%2B9PVbv7RJzaHtCl%2Fn6GUZfL3bZustpdQtTrhY6vmR7TQaYJgrW%2BK4wpwJC%2BS%2BocFlgYF25Q2pI5K7Tjm0RzDSe4bmNyO%2FiwwVHpgeP5xxJXf7gpSINQ8Y%2BBwD%2FYJC05ytGZNKbyOlZwcblTXyI6SYCAZZjbIxuBolvgtg6HE4ZmyEdR%2B2R0v2Dxz2VjPmiks5AdNkh3oBn0AYAAbZC6ff2pluEiNgdQ3CQXyJBFUa1TKjkd%2FCZi9%2BBzklV37X8eBwJwKVMOGO3skGOqUBmikv0QNh7uESClDECghQQvsA9boTFj4MLD35yGx%2F1TWYcxWfHi72RLWn%2F276QSlK2M3W2wtIS0PyQfkRCHVvUfJpAJv5mxgcuPv1bJratK%2BYmm8943vK95PhpVumBG6edZj2npBGfnQUq6AvuGTzxYz42jjt8LzLAqdc4ah5L5boslv3SEsdIcFgh2Mnx1zpCSsehGMrW5H36RTruA3IfwjGwve6&X-Amz-Signature=8ff7658c7dd3eec25d1f08f64bad9e5634156f6006787f714380ef39117d8738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

