---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667224M2NI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T152345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKzihJHtlWgAWreR%2BRhVG2xYgrD0PiZvoDw6BX76ybLwIhAKuG17nnYtjb%2BRmDtPBwBwtOXRYud9iRng8d8JNnKZ5zKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTNBLElzqYVTP5hZMq3APe1xeGtS70ghWtO0zOwqFDslLTN8YInN47ja1p%2Fnlj6NrX0UqtqYqv3DNy5nFY25icV1GccIUUk%2BJBc8XajAVngymDebnzUZuHHNNsFYZdz8v0chs40Wh8vzFEE%2ByePcNPk0OCtM%2BLP9zkJFVxyYMvrUAwpfmg2Q%2BFRz6%2B6m%2Bf4HAxVUSM5bO8fcYzsnTQgNCLkV418Y%2B7rSEislSfwY6b1cjFNJCfXtieWDr84yrpclchKfNJGPA29Pi8mxkff%2BfH550c6RYWscBfa6flBUAJAscyUkbdAyjF41l00JuEyK5f8Af%2B3fREEcTc35E412rDeoY04dIbQF3l%2FyTsycleR53JIbgbn%2FXNUZCYIBQEK76zPpdscowKAffWjcC1M3T%2BUVIXceH7%2FJ7Fht%2BJw2%2FJMeNIjbLW%2FBvAEVTw4LP9q5Jv%2FKvJ698HDonAG7eOEZgXMIB2U9K3QubKJ9Ho0ndZsfHKglJN3fuIgKQwQzOvNFHWm6dKpi8tXPL4vKHg8aM0amw2Jl%2FWnzLZ9iAmAdQ6NQyNXhankG%2FfqCyh%2FPfcOCd7B3eW5SsoirnI2i5GSr82DlRqf3DZvskHeb6lgvKmIq9t%2BPotQi7wOsQY1%2FB9cq3B5kMsIUJ%2F7ysqxDCP3eDJBjqkAZNRAhqIcg52yZhVpwHAHWiM1mxbQlqxHdavmUD%2BVDZSTJ19AOnlV82QoIk0eJX3lRENFNNIv6KXKnjg1lhoinDHtiqPEoT9Kr6ZOcnny1ocN%2FULNcxaQhw7eSl7MbCrwgsvYBpCeaXm6%2Fq57soe9rRSNf29tXyeAhDSBek%2Fzlk4Xgu86lyDq3CIiSWqSms7xYoAeWFFu2kZsvPMIABDwRVFpfJ6&X-Amz-Signature=bf1a4585610ea61772b899a0eb5a197177bf4f82a4e17198c1e6c600eafb56a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

