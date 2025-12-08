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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPCUMSH3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlMc7ZsVHGHzLlw5hpNt2nJE9SrjpjbtKhr60B%2FDry0gIhAP4Smdr9lqUIoGGm%2FXwYMr3EjAZgH5fCnTNY7gZGl7yVKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0PHjNCis16OExJTcq3AMLnVpgM7aHrq%2F%2B1Q2WiTfTTShHj9KIXuceuhutlzSKQFx0TTtl5E13tmtn2BTLFdvVunkizQDSixnwflVRGsNHf45fYD9RagN8di8YkBp9Fv9f%2BULj0fxqXKUeP%2BM0TVz2%2BoMv07NHk8efFwinlh%2Ba9PoJIpo4uk79%2Bln9z3S5UQkGLDtWoco1D3v8O9F3LvLghl8n1awbIQuwCZ%2BO0vdMgpBbBJeH9mip%2FbRP2WSCY9Cc7iGr2cSMYM6VFB%2BRIDxY%2BLTKKYefQJcIC7cqi78RnyG%2Fq06iZZudCiFpm59h8%2Fal%2B0RpOd8aqgB7d61WF%2FKzpNZ3ZuZRk5iM8wv9K9gIhjxLaetRco6qtZm7%2BlKa5n93M5RLKUDy16z8233oCY0FMth9p2bi7VT8pdautrQionV1qdlz2i4ZpRatDYUku57v%2BPCLclXIVq17U%2BsD1Vj8%2BRonPIWz91OmeOOZc5xNbfXoOh6Gy584YY5uv7gfcfRjDKWQbKM4%2Bg0mv7Kfl0xvDPyMrswjYYK7qAe6exDXBs7IMa2Hmz1kq8f%2BwqTrZAPhM0o%2F%2FLmiG1u5r2nryynAXtzbEzxYFFET27pBy3QZ8cw7t4wf%2B8aQmLwP4DAOeXGZNk726l6Vn0eBWTDOh9zJBjqkAQuWcPQZvp6D5qaHHAW%2F6QSKwqZpNyvVQqMYszMk%2BHZXqsHVgbmIK1sTTqCQ7oCW4MW5mdb32HMCQGfFBx2uXlBI7MheKlxugu2YQgfWbpfAqGj%2Fu4VN7EkiGk0DOZlyBpvo9ApNy%2FQ5IM%2FuDqPKQE5z7okw8x0q9fKuga7ex1HxNUiDqfZfIZDMBO06FFEfXN%2FLVBu2F%2F59%2FUg9JPb%2BPbZ50%2FrJ&X-Amz-Signature=fd86107704fdd26b09fc0780dc2d5af5ee7dd55289e51748e31b90a38a16b012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

