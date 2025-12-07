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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HM7FXVP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHxjMzXufSWOOnkqq%2BlXJZ%2By8A%2BA%2FKTVh8NUAfA78deQIhAMcIjbKyh9%2FQLNnvpWAYv6BD%2FoCHw7K7Ju74SNBvr5deKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxS37McRB%2BgvXP%2B1lAq3AN8Q0RPDoNyPrIIY64IlEp5hZ3xpaPWfzEg3jSvSWW5M752SY%2B%2FYQhzASOsjjXL%2BWubC3oMuuICRSfMOFzjHxf1WOAIZb1767agYw6XKlG63Lr9NoXFLN%2F%2FSa5dxSc0n0AYeCPiDH%2FviLSixwPRM02Z4dc2t6qTq%2FDRe3aQQeuMoutBVcAerx45uN9kCZgT1gHquMP83bMSDcn5mp8Z9fgV46%2BofgjV3U2rEeHNaULSd%2BSxfW8tb7LsPa8auoun8L%2BqHgojvOlVxu2dgkL32TGRFx4LnpM1f2aUPcoCyhN0WUrcR226hsP7oUsVcTDhrbFXP5tsnsQ%2FLdEw37QcRvxcQrQcm4Cq%2Frkhcgo0ALal4PvdyK13MfObzb5t%2BveqHnx2YBR%2BBgHIiKgZvm%2BQ9PC7hnTuB%2B%2BODv1oQuxq9bN%2FT3ktKUcjSDk2D1Md8DmomYVXlsROvrBuMFs5XEp89A9TUnN%2BQPPVM4ofG5Qk9Y%2BuaLsPFGe9MmKw2wVf1RxjkKObQnhxamMGdaFz06SdYBIFnffv8h1R7rzmXUrppfVhw6MRJdSjw1HERgzLGCGpkQ3%2FeSWZXGq0CPlSfayzF6XREdyg9CkETSUWArvFM8ARETks%2FLijSDp6vCRdSzDLmtXJBjqkARJtIRzUB%2FRpJMjpY4OSRhKZ81VwqpnfnG4ejYxQP6UbYq4IIuosJi19xu3VDOF5oY9xFFHq%2FSxIK04OoLhz302cPO%2BxR2hp6AiVRFnIS3S05LYgnGp2JQuRH6Y47UXjSYKfQ3%2FZ1mLiKGA3KAWpKOM8TVQQp1riXcVvRyco4sjNhZhAX5ocofAQutdqUnoGM%2Fb9sAHEBiFb5UCJVvbtDD%2BQ6Csh&X-Amz-Signature=a1f53ad16b9588da9efc3360ca849d8cfc4e674599942baa36599a3f4ed9a399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

