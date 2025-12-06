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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653CXWXGL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh0r7oCTnutZW9ZP6GH3zM4Ya%2BsCQ%2FBtnB6HfXWw31HwIhALRZYFSJAPvsC87KYrekWniyXaOij4O282ewwwRrzr0WKv8DCH8QABoMNjM3NDIzMTgzODA1IgxRs%2BfkUeUEyTdAmrQq3AOTioK4KMDoV5ZgCKO9mAhsbUj6UTl4CqvKmMG3VX13j%2BrDhsgBK%2BFF6nPh%2BXBbknqBXi3iBNhv2JE%2FUQ5YNIudMmsuVLPG%2Bj5ay3bocs6hPkOW5%2F0gKdczE1GF9oRkjIW%2BDFMWMy5a6WvfsyOqSGI6%2FGAC3y7hTdIjBnuj3KFXOPp7dP6Uei9RBaaiLSEqv%2FlvulkeselplWfDTW1sfHyp9vtD7s5c2FLiMu5DeF37mMhXgTmigqMrZiZ9c3NaTzcCIW7JnZnDVHZO5SHd1gu15buV%2BtXNEFDQRPrmYorMZley3fEDR2Le0Suc6O%2B25eivlbz9YnxUVR9vESpyQEhQWlWN3XNgOHUW2VMscqspgOAGhkGLHlYaeSbryv7JW1p46JATcNUFJRJTj52CVulVwE872bEt2YzJtfBT0TG81vQar3ufLJa5qq17O4kpAlwxNz7xky9W57SCn00PYwTyxrU5ex98zeTyrzyLoziFWorgGMjuaVv9PY8Bl9Q3qP1OoCRUtCIxYdnZk1jSQPJr2Esc8G1k5JkRJYO3sDfT1XiHq5gQtQ%2BSX8l3hIlUP5vzUZ2oqbEfXQQCI32fWd1G8A%2BUP2m0%2FmXubiwZz%2Fnmw6BgXZq%2BaBe%2F4eYMaDCW1NLJBjqkAfne6WK8ld2yoNlcEuzvCXyT0azgNqFlUs%2BhdjxsvXxDFQdfQhBQt7GRQU4wksex%2B%2Fq7rYcBBWbm1v5SxRMntnes%2FgS1tI4%2B1yh0MZv5LaPQFsVV7Js0pZz%2B%2FB2ri8f2PsQGazd9zJjpwKd0Zrh55tV0beW8rsNVtRIe2AcKVzN8vRhURV9fWlnRcZc7XrNlVpA31kitruvXth5IJBzYVdvZNANL&X-Amz-Signature=5a44b3230d4dbe9499bf1a094bdf25280a78edf431a5d449e9b4fd9e028c7b30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

