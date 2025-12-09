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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W32P7IJM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2Bfy%2F948a2SE0txXNuA8J0AVyNmGK6I5tjRjZZJW%2F2LAiA7TPPIFDoYe2s09qk2JrNAkKoUvUyWPSq8ePE0NLBFmCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPrvILcpItbPd2gLGKtwD%2FMT4AWRwXL5SY01bP0PCDcDs60Mm6TMaZSjATmJXgUBoPguQJx%2FXyb4gSEzUBd8bu3%2Bt7hQDJsbZgHldnA6uUMijjigoL5IVWXVCF50O9kzPiGco0CWxAfdiife9U3k7t%2Bmhb13wOrRJWLIwGLoqmK0M6KihBHEyws8IfnFnBgxFmNhcPbVJsY6lk6ByA2TmJ6Y2AZUvqFZLfwuijrdXT8MVCg1SQDSUz4UgB2M%2B%2BuqJqsl96kk7cRvGYepw1eGwxx8GVsgfaOGuqiXwyLzjTS6j%2F1Z9H6Zu5Csz9ZYb38ur%2B7Vs%2BW4Bx%2FLK14Qv9EoG31xaYZ%2Bj6VH4rMvoc0DcOHKTk7xdvSCXG0rp3yHNaluXvJcT5P0KAzG8tHJPKGhCiyoUuVMoziYyhN5uf%2F%2BYyl21x2kxW7HLf%2B1v3D4Iowg1FJMol%2FEGLzdkqHANn6xXT8KhJnYLqN9eZ5UvWJuxeVITZLSd%2F4VVBuraFL4HCD0Vdoc4bT30q9qOx2jpiPiyaiwDKSyV4%2FHJgk6LI%2Fs8tAFat4DuzbG8dQdiLnfDG%2FZiPlnw6Q44vV%2BOJvE0qOYjw3hbKbpX%2FGaAo1Pj2IbfXZRtCpdjUBpfRG3xzfH3ga2Ryqf7nAhQgwlWDxYw%2B%2BndyQY6pgH04Yr%2FQz5IqPKGu3Bwr0I6lZ6tyi6ti8L6K%2FnpZOsclgIHetUMP%2BO5d%2FkYWBOnXg3%2FAHDZT768ioDATIRZM7MRSVB6GdLputeLVHo4WZrCIB1mHXgWW2072T0yNPZb2XUKARc7XMZSGEP3EfN5l3skVcokzTlgl%2Fs1leM59bsYtuJyQAoYlmjjV4g2ifg8uQc6oNR22LLpMZs0%2FLrXvHkvnSL1VWSX&X-Amz-Signature=86b323cb352b5c108e6dfcfc1bd32916095debafa0750be431c30eeca74c82be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

