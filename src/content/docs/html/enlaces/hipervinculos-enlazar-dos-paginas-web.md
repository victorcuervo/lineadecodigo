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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC5WTYEX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvQBDhUbs716AByH0chCcKKOcFeP2y8fhxBMaMPQCjQgIhAISh3ZdaoZ1yHWgvUammQ4R%2BkBaUYxs96Dt9T%2FE9kr99KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6jQHNlCzkU2jDYesq3APJCMa4mjprRM168cjQNIYRhmi4mhEDN2DZl2kpnZ1nEniFA48jImQxjSniH9dMLDBFJ3hdGf6H1ilQYlxKUqaGUESoUfS7fRgv9psfTLrZ0UpeR8w2G8sxwxl8%2FqSpYXjVLodDi381w4z0ec7qIv%2BDmuUEnUx6ZrI99fkZ0cfA660OKqHDHybxmt35d3q4UyLX6pRkNnyG6dJJjNSx3vwm78BkwUbC%2FLYMJ899DEdfkb3EUUcL%2FdRDxjYZUL9gzHgh5WG8HWt1Uk3rwd57HRc4huMCU2c6pu5zYcunkorHipUTGsdwoz91uOzjyFBmzL9B%2FF0kzhlH1tWUr0O0%2Fp2Oerod3%2F8ioXLRbJcYTFo4YKwhdGlqb8nc3mivKANgpsol4KndG0U4CIlCFeaN4aZik7Y4mOtcNYmro2GDdjv2ag8NNGqA8rhNohsxpZ02IAj0eKWtcS%2FoaaYZGvDbFUtVT2eniHqft9CGty0bE%2FPkTvk5%2BpV2n2hKVEAC9UTxpBtYTQyF0Jo9fjq00hvvu37cdkaji5CyqmgA3NPy1Lp4PX4HvrhEk5Rn6Onfd01zlVXIbd0BZZzSFNLIby91RS%2BlAgheV3ArWdsw6p%2BxB%2FTGvGpUDMkzOKX5DuXwljCZveHJBjqkARw61rQF%2B33bTnvIA9GnVklh9cDvc3rnrdgu8bBGKdiumG5A%2BuRmyIxNtrsXKo66W4cvOMmtSeenYDQ%2BtSUg%2FzC37wXDCCIw0utRO1tJTjmaAppywAsYBqN5RdGIPBUtOmFZoS5T6jBIf%2Fih7lIk28dKGfLIotZCc%2BZ5jPv0w2XS2ucuX5PXLwMxscZOJ8znhYhZQBYmAzNMxKS5sdlBfYzpmR%2F5&X-Amz-Signature=8b186e440e62c4d3900cc4f68095e5e73deb23c224969d7b2929fe41ded40d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

