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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624EHI5EG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T115609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeYXUrwdaae%2B6P3C9%2Bmfdz9NarrvjF7whOrh2ywwLiAAIgZ1YyA7Z7hmrK5gG1ZySYnmWpn2JWafJ9Ap3Cz2WUYmsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhIfDZMXWuKcDrKaSrcA%2BuoExjTkSGDsZUEJEZG2a9N7QyhLh8PXqVNhddfrKaEBu2GZ0GDNzPladTmgtcKMTjgHyjShsOdENt0tFI5rrVDvp%2FR21f76OCQOK5uiXJN1%2F7S8OCyMg3%2FsWBXm3YzwctFkhR05Vv3kU4r0ohFUIzVRrsdSKpjS99uRuhxJH3tlbKEalUpRn%2FFxyxUyFHh34sUOYZrsitdnaKJLTrk%2FrM1AH2LIjoG1mt%2BOaiZuwpHrO1Qi8d7%2FBo%2BqqFgAQgzsyp%2BZg7fpPWS%2F%2ByMofh9L8s97KtKJqW9Cw9MkbLl2NRqcMY%2FKZMJWxstrE5PZnTjxlGPUOLhE6c1Od0ueqJBLbIZLZtmoFXm8K81MBrv0uteORWFfB5Caix0q0Mznulx%2FjcZ3NP5YQspE5de0c7cn3SCxV7UCjU%2FhWXFoDEKuHN9oNTMMNAhTPWVQfRXF2Vg0hhuHBeht0aGNUoE1RnIcTD9yRzjv9s92EQQvvvrmK77pfdQES3BZmQlbfFl7lK5Qw3%2Bqw%2BnzSYFkbS9crcN%2BE%2FUK5D8uSQPig1qxhpyXdYl4LQxdjLnsv6gSPry14m4H%2FOtB2im1hRhoShLLnscKlP1hfC7i6%2F6g7yd4TcKjkN8Z275QInsTkxc%2FMluMLaZ1ckGOqUBGfAN6HdWu%2B3GltSCJgHZBFA78Ri8gO5Wi4fpmaLIbXvzNBJ2xszUNUwv8rfUFTUWhVEpvXErAisAf5foYE4Rb6%2FrBegVwciwRmsj8JSXkLvOTlpX2wHeD%2BVbVV5Qu7ol0VZDbEy57nZgoQ03HliWhqW1a42fFiJOgrIq7WT%2F%2Bve5LLfUgv6eCC34OMv7SsTWP%2FzAlcI3cF8uHIgp0o%2FPTj%2BPgL%2FN&X-Amz-Signature=39a71ffa8bbbfc614758c836649378bbc67cc4b9645ab259a5eaf6da4a2df9e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

