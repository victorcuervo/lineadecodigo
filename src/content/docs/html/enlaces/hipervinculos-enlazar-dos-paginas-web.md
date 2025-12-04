---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUIUJIU4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDvjyleezCLWWw3drswNGWefigpT%2B69VLgEOuMvdEwP6QIgBUZw5KTN92Q6jVyUlUWfMAnr5E5sprtxzAR%2BYNagH5Yq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDF%2Fu5jUujr%2B%2FX6dclyrcA8QiIGrZvl8JL4qqEkXGcKMhhXmJT%2FzwDhZeY2vJSpF82g3HmP%2BKbZbL8PYhED%2BjHgJmhqQD7TMxye24lqb4SaxCey1O4N%2Ffdd8lDvNwITMx27GqjfCcdL%2FZ1S6tbQuozlJi4dMkprrn%2FfYZo9Af8yt4EScwvTLD%2BjcnvqKEJ2LamCm%2BiX9wNXW7W8POWp5k4pffowU0dsgtHZ1KzyY3TzMdY1jQdW1MCFHzLO6dcYDikq%2FOLqP4dFg7rM%2FVpYib7fzm%2FKqZRfeVuEKQJYrmtLMMczfsCC%2BW7GJV1CBl0iZHgQ089pI%2FHSxOZmRZqgAdFIw32pIfLUnXG9z%2B3j1D8NbxyAo8%2FmRAD7n9CLa8znRQDS6gSs0qVNmNr2PcX6svjy3PU5MgjF61IqkkH%2FKonMk18TK%2F1ag%2BD2KELigjn3Uiqr4SRIggtSy1o1Us3ew6URFN1%2BKj9%2FufehsDP0z2uYLcDVDacnHPJ5e7UdMM%2Bs9WjtkBNejfhvLmGsNu%2FmnqasGxUOgva7ZbAKhkSwd6fx9JO%2FEp2yhCkVYaCcxgooTmvMgAGt8GGbcY3YTUH%2FruPHv9S1gcEhayQEtKuXOUsLVi17q%2Fiwz8NnMOCYCt%2FytQKxEnytvM%2FsOmCeYkMO2txMkGOqUBXpI1v3YBQqDgd4QnYvBmEU26KP1aZzrHhNkDnwd4VY%2F8%2B%2BrfiGu0erarpf%2FGqYVh82PC8EMbbf5mm8Ekq2GSUF5SkDNeZGY8996iXcgvPFBAqJdjSfokFzFnle2XYjiZLn%2F8p9wEfCUO%2Bo9aF0hgd8lpycsiONlDRVMklIdG%2FF7MOxcoyCzRnZ%2Fs9sciT0XYd%2FAKSsrRwpXEtet6WHWp6dj227bY&X-Amz-Signature=953ad9eb2272203c6d6be374a8eae686d989714fbb7f97c4e78624ea1b51b205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

