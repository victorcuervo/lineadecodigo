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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2MYKPSM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FDjVATU1kU3SKxFsc1H7RJO3zMDcm0a0aomgPDbklXgIgQkz6reaxD1gSyLdaWk8Wo%2B%2BIC4qHsWJTOqiPYjhpR%2FsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhLk0nzC2tZylF%2FfyrcAzqHEx9SIJe4Acrfmu7g2y6%2B5FmzKNJ1CYRvfZm6lXdDNt1wSaDIm%2FCN7YJc78y4k7yNdjIrQ377N9NUO6duikfJXE0q1%2FpCQj7XTqrTSAkh60VCsZoYYxONQV%2BfWRTpjFU7CB4ngKPK%2BgzeBdDF521Jr4IhF8bu2LJY2FJiy8hSjcP5tez0ioHiU4GYN4Z9rBG41ORhAFPdryh%2BnwLHqtXS2CO%2FXq6%2B0hgP3pv2SO23zFGbe1JMjHjgPHVdVmdZ2KRBRqSUsMsba4gjJWgSUKz1psUrBgBLHENjAUHh9YZkEqYJWTlCkpPzINASw6u7JKnKqgEH991MrOd4aKgRIaBc5a58g%2Fyh7Hv0U5GLdJAxEbVTYayeO2XCp9nbrqXf%2FGyovlbayt5sVj6y1os18m8WbGc%2FR6kd87LLh6JqzKY6xe6IMgDjISb4Ved84q%2B10gg4Z9P7WcaTcLRmFrhouz5%2Fm7bRH%2Bj4cHCNjT4vsHZSFs75UVwNc4B85yuTMY27g8kbTOMXvIKKc%2F0RDzZS7Pbw2Eh8AHXBCuf5MxMmSfb1JH1cUmYsCGrT7cKJQABlyTMXnmkBr2pwfK3INtJ%2FT6bLFWixik%2FfMmjEmJBMcU2VCUttwxtN2LaWkU%2FXMI3%2B0skGOqUBx1tD17jrzKerHLBk020mqaRiknNGsuFoFCEZSgYRHmwTcVu5wHQm3FMu1neK4ASoG8gc4WBxWuO6BW%2Fn1T2YqT4k0TukWhAZx5lI%2FiF80cb5dFmaUvuTFAFDWm1X6zNhuKXVHjjIW0R%2FeXU1TWD5kSNriE6w2LqNcG869WPX9hS7HwDqckGiZS1QzPqz%2FtQS1H4lcxuLYAwlsGydwl7gYTEJSdtH&X-Amz-Signature=ed4586decee92412f642d003dd51b7fc666fc769e0c7fe80aa45249e9618ec1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

