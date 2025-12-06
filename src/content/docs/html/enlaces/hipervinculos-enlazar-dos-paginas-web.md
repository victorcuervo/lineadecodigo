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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JETIJZY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfkcSOUFEpPpjXkH3IzsIULPS0h2ZSTmhkz67%2BVXFgtAiBmIzNmS5JrfMfkxefjgTcvlMjgt0xbQVxdx4roZ7rPDyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMJYTNTDER%2Fwv0TW3eKtwDboA0u2TBCnIFw53mzRUKoiGwm4YQXBPJ%2Fmt%2B1URLzOA4LDU%2BOIOgmhmtRvqVGz1AbojJbkKfwv2myzZ5uIwBUPNYCcNl1HQ8gm%2FjcnCaEVBy5JOb%2Bw7xKfOp5BMdN0vQslb8O6icxbPGufmt3HcKL3YB06tvgwFvorxO4e7FMmf7pTwksfWni9o5s9DSv5n3LLXQE7hTRa9kdx8QQeeokETGQbibSz6NLZ1kkMEP7LQm7BEWn4PL2IjvaHdlh2%2BXO3YwuH2jV2vF2SkwMMAVWKmuGHSYUWJc8ZgtxjypQqJHE1yI7jKwbDAJuY0dxcjcgbe2JcJqWAfRo0Iv6QLMxT6NnjvVPO24pzzhDqjkqkJAgthlqFoQmA4gVWjHCceGOMLI3waKhjzCUzRBk4gD7yyi6AZiuzNQcgknfCX8bBt7NyXHMGA2%2FtbAAjLhKl3OAl0uNQZ90boCmRYPeenrxpj1Mu255mXflgi7we%2BlTxHPUunxJNPFYJAYoFgNpQnJ68CKzuvwCrSi%2Bc6agRcF2j%2FWDM1YzWrN7NuNzCus38IoCkgXHodUZSbQ2dKmZZR75BZWtuq5ajfxYTJrmk8wPIK1C4KqA5ZS8yb2%2BTDSqtupLCe%2FZmqKW1vI3eIwouvPyQY6pgEUu%2BNBkFGnphkOL6SrRjZFVoA1e8hDEeqQ22iPsqJGvDa91yQrnOyHV%2FBHdm4yMi6EO6oFaRU9mdJ70l0W3RxMVP%2BNY2YX0%2FjbeLjuK%2Fg4%2F0vZWfbjdRFHhdvX6rtUJHIYBNkTxNUlEuJtz2XGWcpNT505IphO21GUwDRHnkGVRf8mUji4xtEJyIsQyK1pZi%2B8GINrRNKWOLZxEeW4jkQieaOousTR&X-Amz-Signature=51a16cc69c1a8e1a4b5d3d50a106f3b5e147b5927c43550a2a753596560c167d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

