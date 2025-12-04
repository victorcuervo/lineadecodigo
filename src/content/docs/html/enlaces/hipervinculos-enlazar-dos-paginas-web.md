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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBD7G7NW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIEkwwcBbzcVuV2q%2FNuUWmeVrLMwcgkahllcP1GTJEQUcAiBjcDOKQhuitp4A08u0XTYsvZQR2rjSjZpKJIF2kf15jSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMn7PjxuRphQTzby8KKtwDWqQiTS8wJJCSMsgpy7NXSLrJvDPkKYywX7Swgi3IDfxRfVccPCot%2FqDskwu54anZ%2Fqi2C0dmtlSng9SwcN0LyvMG1G8SoVEKKKzSvHiJVuYYs44Uyglwi2R6YPwCWC8MThxS4Y%2FzlMafjbVzx6TBZYpLsdqkwoUSC6AcVDaKg0ugdgmZlqSKuVChGVOb%2BtfU9y58uKYpU8NlTYKz6Mxu0ELrmzCwzJAGOySopiE23Ss77pHZDhBzGkDp72A%2BMS7PDb3zOJi5z63n%2FC5U2nrfMR0LRDHW6Nv1OESuoOMBMSgQHeadtgYkwaiGLi3JIoEvKy3HqiZPAbz88yLX1uPd0w5Mn3eAO23cGMjFFZbRoI2hN%2Bj%2Fy56ZRdYsR5fV0za6N1JzrUhMVwTvM4EOryo3FZrrsN6BBy1kidZV26I0Vk1XoqB%2BlE5rdCNas%2FKG3RZwWpLB8xN5ZI8tuIvTIUJZHfK%2F9Rb2Tyc%2BM%2F2aouLx7nRUTtQVfgSAotAaU%2FX79XBnxJjYx6wOgXnIxB40vcps%2BwtlCLFxrI4%2Fpgni3xCy8sEDWjNjB7jHnzD6z0wj6G0SoHrM1LqMj9NaT%2B1xGR%2FNRVgq454tBsbemhgFJnozJyB3BpbMa%2Bct306eJvQwtr%2FGyQY6pgF3LKwr6m3jzuB%2BgWE0KsiFuysdbfoPm2sgFHHzNZe3ZKbu%2F%2FdjvTU9wFoFMBcipLSbeGV%2FmB9%2FCxU0cEDaL0jwqqPHQCm77TxqgOb%2Fk8ZK7Q1HdTVNGE%2BvwzkUlYA0kaBOPZNhMqYeJSQTi%2BkrPz%2Bxj7hwcrUIBfb%2FMRfg1ZUISuWFOzm%2BSiEreDqbfgB9FHMKYWRyTG3IKNv7ZB0XSowJHr2CnlNc&X-Amz-Signature=975a0503b9f5d92c886e3e55ec93e99689660441c8e98fcf7499fe82d3f15ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

