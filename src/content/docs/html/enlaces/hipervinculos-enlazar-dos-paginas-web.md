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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMYUJ2GJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtJWm8H8kQIG5ru7Zr%2BMiwhX%2FPyH23an1zcJwO5zTTvAIhAMGCUxvQqsoPihjaJelpcgfekMyWYAQrdJxQHokPDgQuKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzihVuV2SG9XlkoiLcq3AM7JiSMGYixEfq6WjXqDctyLhB33R%2FCIoejX7hyqFK86CzZhZaKEIIOGrULWtthQCgS9ygEVDqoK%2BKw0eCQTSMdMerYW%2FvyeDfpsqk80bsVEfMI7OuB75vfU29Ci2WP7PTPTMseflHVejfzwaL1cKhPDP1kTdEl06Ed%2FJ2WG3Vk8%2FHLQDV4tPzgwmpgkpjXzhR79p%2F9Oitj8D6%2BWuSYGMWGfdjyLP24PJ2yT1aD8hBBZeIZnMibl24xCkIOSO6UyMOXPAZJF2XgeDidwlsYUZeUhO4R0VQvoLQkLv%2FvCQUYRNzOMi7XHnlpCPLUUJNPK1QFw8XFu%2BftCiBIO5wD%2Ff3mT7C959TKLlCSkJ3%2B9wXHL6Q0eLbklQ5mXTmpRNkJNhuIkjV37t%2F78DscMcLHCMyk7S5p4fkR1Nq%2Bok4z3HkoT0kLjWZVpAKx%2F2yBh%2Fsur%2Bnk0%2FILjafiD5y2zAElH6lNQ79jtZ9vdZN2BERJWt1sS0GHBen5ragIHGd5EmSkS%2FUZ108WA1ei7%2FofUY0ENxgKXtcCv7G%2FmWx52AOWfrYaNdyaRpXNoOjS19t7d4OmcGjmTBPSv%2FYNvhQ1Ldo7T2%2BYfyKzbYzFpojzpZYrD%2BIBCfB5uNVop%2FIVqWHwLjCjodTJBjqkAQw08o%2BLEdT0mcgfV%2FCbRIkWbVUvERha%2F26rFA628nPxkg6h7U3sXiRFN9ZJ5HAUWD%2F858yJHGoejbJdETvxBlm45olB4AXi1WRY19jiANQOkAUCRcOBJyHDtW95wZO1lnTnvDYETNVVPrL9bqqJKpYp4h80UXWUSRVYwRNwvYnl9TYkIKYDZzh6Oe7A99TJaMn5uQcubx511KXaqJbN6GyhRW52&X-Amz-Signature=cf3254fb4840742426c70d3e52f66f70fa918e9ab521eda7f08ce1df856216e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

