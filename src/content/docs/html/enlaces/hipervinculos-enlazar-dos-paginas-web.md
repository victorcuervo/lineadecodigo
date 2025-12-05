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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEW3IDP6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T113805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy1%2B2Owz3nDqFuw4dz41ixUX3GPq1xEY76GGXpGJmXXgIhAItqRLLC1xOkJ8ByyVX%2BoaaprYVdrsEL4cb2F%2F6fEwdfKv8DCFoQABoMNjM3NDIzMTgzODA1IgzVXuZ5K6BIzN6PtDQq3AN7nqLjXNz6pdFYfaI8%2FpExcqLfLVRA%2BSy1GEJ8HANp2m7IR9rW8UsXIQS9bAIwTVgDSKQmK3QreHg5WcReAWQRwdQE5Ii93xuZTt%2BRKZDBa%2BWcaMKIqPTyhKD9fFaLcvAjuIpU0cnRJJb7qe6%2BM01BIDlodRBHgE8K2ImJNbbnb8oYhVp5QVd%2Fv7pluEWdj1c6SvMtT5NZrnEoDJT3L%2FYB8eOIuXMTxA5wLMGZpcdJmVzowqBMuw5lCI7Fv7VQWKKv0vOGNdP3kKutEnzXJrMZR2SvVFRmcmt%2FeGIKEnNGrKdn7oFqcEeA0n5Qi33ZLMntM%2FmTsRwEwdxXGHX2ktWoHbx0trJ30nPVVIv%2BTagdHOTYN%2FXJU%2BXUStjuxMvGD5%2BZJh%2BP66%2BflyG8f1jzIOmIIuMRyYGKb9Ku9AMFF%2BSbaqbKE1zwbv8PRG%2Fj7bB3AJwsyxPfX0OzYfliYmmK4vSAUuAt8ERGk2MblFqBnLJd1IlBQwQ481qM6mVs6xm44%2FWF0pinW3dx1T3SkKpwLzF7J%2Fwjgw6cjnXJPutI%2BtU5MuS6G6HffJUPIp54c2YWuVBkIpWfZDm08kmvmtVflTbHVNnUxqdxi942FU%2B5CMDrEe4qA3OeaZ44C3gCBzDpxsrJBjqkAU4O0LKOmV6%2BKHmC5lOfIZEwHevvCelGZLtK%2BMaBL330dRf9Jr4jKv5jYyDi1io%2FzOKVLO8W0KWszYMXVIn3jBKrR06pwYRO%2FE2E2j0bOpf%2F46soaSaHwVSJuHpu1yONj1dm0GJJe%2BVstpdhwS%2F6CZwcJMVzQYETLO5NJ4pA7jS0N3J74arHuMsl%2ByzK4tNCs6kJzrkBjh9oJw8f2hcVlcuXoJuQ&X-Amz-Signature=8d47fc8e7c555dba7b3b12989cca3c4c0d20cb2e0f58089ad05a3f20c0f7ecb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

