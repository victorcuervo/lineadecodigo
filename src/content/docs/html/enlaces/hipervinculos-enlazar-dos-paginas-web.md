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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NOCT6CW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2fCoze0UGG4mr8p9sMfD%2Fji1LnMlWpX2i6aI46rZNvgIhAOF6gy4kozTf%2F1rEDZz4xhS3EOB%2FUao8N0LqlJNB9dXhKv8DCFUQABoMNjM3NDIzMTgzODA1IgyoH4ifZ%2FZcYlCjuIAq3ANpL9DFs%2BkVzDtR6HBNhJy%2BJzHDJeoPWdAhGl1eFza3%2BZ0YhejniHtVQi2CSbc1ZD5LQxXXYYfeJt2o9w%2BgiTB%2BAAY9VkZNYnJNuoaCTh4EkPaPS8NNEtL2T5CXBnlqyr%2BAZ3w34gr38NxVJRx0Yhu2shrF%2B9j77co9E%2BDEDMeNB5dhHlLQYnqUx3FdClrIR%2B%2FBFub%2BgI4QXQd59uHIYTxiDL8AvcKZbDjGqS0h4q6n0oVFPWJ8MnqYKN8rACumoBfSXCxXE4OvLmA4jSCdn%2B0cKoIVWn%2F6Z92TlRG7wGV5GKSVYBsvveaSGAA%2FVj8cQE%2FokHhVBxSEcDqVckD3q71nv5%2BwBLXCYJQqw7g2%2FuY0aZCSVPYSyk%2BZIm6bSitnLei7MbOFPHtlHv9MxWC8AhGPwjQm%2BgrY8naz5tBafVU2pWLjsaWyE4Z%2FBxzrsNzm90JoXaafy3swQl2nG4apwE0xAADq0bC1A1j0BTzSCKmQlB%2F6erFRaAMBPgk%2BUhGTB05wP2iw%2B0v4AvvaKB7mV%2FdNDtInBdkAB2w8f4%2FdVaBT50g3YEXGnu82uMxNKq3hyflBjeEp%2BXyLpGlECE9uToq9nW6%2FN7Qc77rYsTA4w3bjCEd3x7yx6WR0u%2F5zvDD7sMnJBjqkAZRjPfHlPIW1z4Zoq4bvfbHgm1u95FhL2f%2BOg6GlcPasOJmYtbUervFOEg07OI3JmmZyMRVszsYqZUDu%2B820mzruTP0pCcZX4%2FuLtV6%2FO6hIgiKdttUkFFE2goCVfU9R5eNXyOKCkPvMUkIcRbsD%2FN5d0vO5U9abVqTBQpwpgPTKmoTtILfhfzQTGxGycVfEWKRkXuxwJGKGlkvzp4GN%2FtUvOm4F&X-Amz-Signature=4bc63d1447a6a6de26586d96fa3a5307ed2e369d277d15719d5360dc134fb755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

