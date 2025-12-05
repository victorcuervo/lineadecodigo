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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LOAK2RO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T204151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4OwQb6uv4THNQxKn2hk9elzSzRZrISXYvgUOyIIvrmQIhAJpyPc%2BQ%2BpEOJsIYJUUIhy4eUX9MHFW6IC%2Bz%2FMaG8zGeKv8DCGAQABoMNjM3NDIzMTgzODA1Igw9RRADz6OEiDFOi5Eq3AMZZUFLX9enkE%2BwHBMt22GWsfY4CqqryQS5JPz1iAmBsVyrwPQhU54J5plbxnvwlF9E8c3lxN6g5ChthbdhVd1r0czs9C41oNFZZh2f%2FDt%2FYYGuuP%2BSbU201Er5VcM0oxpbwL3ys8C9wzg7u1JrZ0%2F7%2Fd1GR2BzqgL11AkC8cd%2FcvtPm%2B3Yqm%2Fux1ukWchbNmQ2aH4ioXAf9VAJble5rY5MSPqwtHT6MHJFNaju3Z5oAJDQSDLoRT3%2FSvVCgvm7PgYqoXDFHGGWVe%2BkzeiMXvmA22Sy12SgTILQUocQaHI7Lh%2FVgcdURkKvm1m8HCEZKx%2Fx2wTf6QfcRIFAHYRhTd0xOpHQ6KRKs0THjYkjWGch77TBRQ5x6DLNw5o2wrWpAVEs%2Fq%2B1VQGXHYwM4q0blZWOj%2Fny8ldnOk2cejH6eXBa2IR6gqB3%2FMp6lITd14wmMzw%2BEMOZmhvBIks0NPSWtdNILjsZLnXrOJeLM%2BkuJfkAHIvKhNW41VGkJIZJN0fyadj9M2yc0BCzQio43s%2FgcBlTJgeCcSnsS%2BNTLK9z77RyArJi%2BbjeX%2BHuLo0NHvwNxA7fljoLcIrpordh829gU7OAiu31G9PYZ7CtOxBRUhMk8KbJGHYB3mNAE6rENDCm7cvJBjqkAUhPIq8IQOtTEUGHSItHZVj9rGYzNaGZXRLyntwhl%2FgvUCg0uwvS8G9a5EyB%2FMUXe6pYqOBcl2mbujqI9tBlqSF%2FKL8y7SoTLT%2FsgDyJDEI%2BMng6X0hrWoM24yFztHM1fyxirpJJ9wfU8y8veatPUZyS5ogZni%2BYS04uNQFmexs5PESIUFdOfZ9C3Qy4C%2BfEdpwqI%2FSb4KfqTkvDjrAoL9IeHZVi&X-Amz-Signature=967da51fd738a261b186f9b2523a0be5c512d063655a71877bed01ad99527fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

