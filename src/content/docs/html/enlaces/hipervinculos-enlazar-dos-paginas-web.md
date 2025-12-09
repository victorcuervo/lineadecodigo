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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSDYNDRL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T175530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAi2vKM0rKLFXt%2BrDkXNTIRhSnr1TguFtO0UDx1%2BtgYcAiAJK9WzIo5lrAWBgEpA0CCf0navnvbXbXVTf8Iy7wJz3CqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEVwJ8lEHVXM0eDzMKtwDCN%2BFngZocAeCzxTk4QfKXGZnGJotIUCX2L%2FP9iJbqIreK%2B36QQPKrraTul88oYr5NIMVO5IlmYhjtM6mDwt6MNpQhB4wbqEsfFqFyPUPbmIqEJryWQRQYsamqQcp7dpk2bkzoEJnjyfMKlgrapS%2FhqOEh9VLkzT1twNcBAgFIqgTuvxEeO9jEOiAgbxUssGGYzmCw%2BxdlIIfv9vYWpNowLsznYb34f%2FgBU5xdyDHF6j2aI7YA79S3ZBJRFPqhTdAn6SuAxc%2FBAaOhHA9238ymcwXjydLjSNavr1wEGYLKUFfSxXy1yg8hxSTD3N5mX%2FCnsW9sBMO7t9GH0y9o8skqGQDpONkCRD4hiKpbK3TeK%2FlzBA0a0VOYBYxDUeDFsYXJPG4wlqFAu5tVVg9aIVUjwG6JRgZ6058es6aMwkXOLc%2BPE7adeuN6oxc8%2BgL8pm0i2KTqmg9t9kvKYq%2BTYY3el5mC%2FZ2%2BqqNoNiqD%2FK3YhVFgI1HxhajXOHtvp98nfYJb4PMwVV3DRlM9A38iSVxBEXoi%2FmGgyUDWmpz%2FhqDvNJaVSRB90CWRgbj2Q28W%2F2EfMypuCVfc6WQ%2B%2BwJ%2FXQtLfnTUhKd3wvVLEns6Ecq9NR9m2EMsx6goBjyhugw%2FrvhyQY6pgFLxGTkxAWLPniA1E8GXJ7AXGkhsim66FdCtrvDj7xeFutCJlRp9zPi2n2Zs1lnBVfwifwZuYMut0Auuu%2FV3HgTcGYgPERS%2F8pf%2BGqJqV7jFxUmjjAkjfUQO4KTWEmGuXWH8jP6jFz2npGWk5J%2BJI1J3r3WhEcpxDA%2B47J9H1ct55YboVcMnaYU2vQNPJQsNp%2FDh0QYzAAO5nM6VH0wrYgSoTMLpifg&X-Amz-Signature=94165bb01bf2315d494c4e2e5de145495e3a534e82d2981cc5d2c00a32e9fdaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

