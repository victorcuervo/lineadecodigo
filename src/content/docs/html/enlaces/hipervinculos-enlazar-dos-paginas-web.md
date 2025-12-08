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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y653OW4V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcHnnVFWDsKYJWfSQyq4vlRjWNGTKgjlo0JYl0xr0iPAiBUAd23wzKect5EbIkABVbSKuhWWbldwq9E7dbrsDzqQSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmmM3FfQ4F%2BhjQbF4KtwDd6p8UYYsTUh818WuMkReE0WICeFM6%2BtClYJMZbRzgFvECU46PX02PFjvxwhYXmsx8h2JSMJWeznPKir7mN1CoW7EnlhDd3QIWUXH7fOglUcU4Ru52GwciPB9EfWPSuEIlYcgp1N5h6qpqpRqduBdC0wyck891armjQ%2Btn5bh3YNkYGrFyc0SGyVeRjZE00I3jKK3uaYrPHSN50ZgiWzWEx15u5iObOSII7K3S%2F%2F%2FEzGyB8YjFLhPhKVDIatXpuA1StwK7wlczcqUgP%2BR29pHFLS96yT6d2ZXNu8MGRsCuiNAvAg46pKzRv742RuZiFauY%2FsRCJrVm5nAT2OVtG5N21xh0Pg5UjK5krQDIUEfoo4s6DUeCemeg47uiyltuy6ZjsCz4LpVn5OgDS%2FhKwJbyrEK4jdzKxdzEac93TQ3jtXtswLKQR6NdvApVHnFOk4m2jIMopsHeUzHPtKvVqsZlI7hKoIVd5U0MPct6nS85shT3O%2BhRFq%2BNrwvW1u9iNqGUQdNRPWavhpj%2BIhYYs9iX9uP4ixxwenqCLMT4wBHjYu1fA944gv4OWAKEfanNiywoySgJuaO0QmYD9k5o0Cr20yh0tDluXUfv86qjmyUEn1QJfhonZ8CJFE0dlcwgJTZyQY6pgEp1w%2BTeHX6ULcwbMmO3u697CNJg9%2BXWHpdQ7IaMuP718h9ZAcx6abfilz3UJ2JdNI0WJfKak0WVkfhwP%2BCm%2FTHiL0R7d6FQdOxfnkuyehORqFopArgYQsZxXsnPrYclpgYr7qzMFLkGpdG6exnNjJvTsXU1Vw6hOTc3LO4VrzUGYQvG%2BSVbLYIC1eBwB058Ri3C865otXGLCxZhbgsgBDcJzfiVnlo&X-Amz-Signature=ab54282523f4ed88f3e8ad9651fa81473d8553de013e3cd43be825a342216893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

