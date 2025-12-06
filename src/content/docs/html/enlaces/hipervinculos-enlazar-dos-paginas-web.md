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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWOKD2YD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlqDDO0iuAzEW82RfBJjbuzbkb9Mw%2FhiJDcZRpAplw8wIhAJzzneZv2rZWLgaH5DBacI1hXzqc0SichZxYLqJHvmMCKv8DCH8QABoMNjM3NDIzMTgzODA1Igy7%2FCwjv8PY0iUZGVEq3AMf9RQPFYJBmakZGSI98Uv2MfwSg%2FP0yDfaojm%2BTjzxkGLrCoi6w0cxHB%2FqbDzDCY4k6JDrFRHLSNUTRfht7T3FbKJZZBZ5uW3WNjj%2BbuhnFFx0F2aSSo%2F1FCl4N%2BQ69tytUCv4uMNZZd2PM5Nnw8bLBN3c7ml4z5aU4Aj7yLhZPL7I5KnsXeXGVhLFh28SyNUtAp%2BDG9L16DgCZNy5PA835qstTveS0%2Bm2ALcX727PHyRX%2ByyoB8CwpguxVH57PmFbCPgD69fMWw9eXQJFxzAZPKMKym6p1AXJRrm4VpXFOaiBubiF5IL3558ozyfCBcZtDR%2BVIDbRWCsmoeKEnYn3yzQ1LL7%2BzbmE4tp8Z%2Be9C7k%2BZ7tEkR4O%2BOZZIO51LGnCziaudkYCkNDWQcbJ6UZmU8Gz%2B3ePG%2FWJsA9MQ%2FzHo1tIVe9HBULNg7eGBOYMXNHPkyLnF1KfS7jjYyiyzYF%2F9Dee4tzPFIPYL8HLVOFGIBxMmYm%2FSw1pj%2BsbvI7h4ZvlF4IFSzhvZoNGfzMtNW0P8lyvf3BZ%2FN0GEV%2Bcb1yYbmzjOJ8mGHbsp6bq6LYo3MSK7m9qSpzy5IHRZJNxuSxuWPRZJbaSPMAOhU%2FSvd94IWCFjeHWw0EE%2BfWdLzCb1NLJBjqkAflJJ40hx8lm6HI7r5IhD8%2BjOaOd3zLvTjFFYaUda8z0qUduN6orHuhVYImEZqqQRrm%2BvUDNR%2BY6QxPkqev7sIHlXjR4tfILrI4KwsLVRgdHVqNqfxj6dOt2d0s0kkWa9gVKWZKoIH3kQ6ms6ygAFTvBxCkXGWm794yNbANGTKzL%2F%2FmsVObRjJ8fzRZtBzOXrFsNz2NNsKTaQcGqwQdOfNDYK4sr&X-Amz-Signature=89adbb5d86bfbb677e68d28d863f1272f2f8854c0838b268d8a8ddab05d4c745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

