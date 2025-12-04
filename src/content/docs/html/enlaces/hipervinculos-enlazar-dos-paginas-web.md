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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KOU7VQU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIElWgLaOqc9RQJ%2FDUjgAdASZGIqt24sQ0QsVmzvVxrkyAiEAorMncU%2BcT2thK27BArp39li3ANZIN6Jv%2FvBorBellmYq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDEoMIEhpAZBywK5uZSrcAwXc7Eauj5%2B%2F68TCOVp3lYioLoJkhFGz28M6SDGxczc1gtZtwCqfFUoz%2FLj4Ftg5eFrVenXiy7Y4hkN1zN6h2CVewG0BZbgTmKk9C50plKOddHBheAjxNr9u5Mu7NZxcBRvUoaGlwnaNdXssrhLogVLVsuxWSD4ze24NBWabshsdSPPjmF3tB34d042lk8pDTUjNzG8fkijI1ZXBqcfI0pgarJaS9jzfBEmF4QffrG%2FDrqZ9g094X%2B0WtpqgOxsHomO29uztnVwPvR3j02%2FtYTjWtPl1Zo4cXSKYr30Zx0MpGFFA47kZKPqKEz%2FqMycHuIiVSl5RInFVvmNfe5aK3RPee8LQ8%2BcdgTs50itOff9EK0%2BCUBGel4uQ4aiWwLG%2BHMS6nYRvbub9oPjYMiw1JfbaOCp8dMsCmW9699p%2FL0HJjVvpxIknj24iLQ63EMT9EdnfQ8jVz2QGVTpKXvTPzTi%2B%2Fowkv0U5kqyKFYcph6y6fnxfFj2zf7BCLBkDIWqIqqmy7PoHfK2sHvptDmHDbSc%2F5PAhFbfG50KRFjretoKR9%2BtCemJC1O95ucrMD2TBi4Rl0nH8G5pSq8fF3%2FZ0I32MiKcbsab2OSnoCYPRsEFdg%2BQ1Bf6e%2FbUuHn9rMI%2FLxMkGOqUBOHnnRFRqSl7X5CxWbSIQDsKDEqn3tRuB8qF4vYpSoetyIgFKNJVjcnFg92rryB5UBKT6wVoSYqBmvaKgAyU4pKlQkyFYHPVgB4PumdHkyWHQmkvLkQYo8HjYc4Rd2wSOGpXmVN47NUDYbMpMNGzBmzZAv3DtsES4OPaWg7I0zFxJ4DIlCRoSApDE6vLWYGCTL5sWBxObY3AYU1%2Bu7Rx9e9iGK0DG&X-Amz-Signature=384ef4d7bfea19aafd66c3d2043293b009946ea41fd13c59d8e1f5ef64cf60b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

