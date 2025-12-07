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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYU4FUT4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaDqLjGoF%2FUYDtUIs7nwgVyzFqTz646I9FD2uzYxBfbgIhAN8%2B0DJkOFg99Cn1W2ZIgGh8BViqn9YIq4TuDwT8EZo%2FKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJTRUe4j1iQbcp7FMq3APQgCelZwp7V9AHdk%2FdoefK8RLstUGwMpjdweqmm90SmX0H6HlOxEQ%2FSOi28u2pdQJDXcRPVIlC52a0iErQ%2FYj71Va4lh5ljF130P%2FqNIriCLRf%2BEg7yiMt5E9e9Wd11z428MR74iDjPD6Y1H3z3J%2BWtGjHduAMZcjLL1kAQldJ9VBWfUvAb22hnG02vP4LJVb%2FTMUxayK5cbdcqLBhVve5l9RBLXTzozXLW5m7ZxT3MMhNzR60oydfVltYG7LrgJBBA3G1tt2G1nYv4uZ5mmiOxtGlVUcGlrL7RUMQ1LoCk%2Ftaoo%2BjPwYCpMBP88kP56I1KfKqx1tsKM%2BgBkZ79ag%2BUw8wfPWn8CJ9YKcrF4zVc8%2FmcLECm5DZ%2Fh7sHJZ1N7DUlCyhfXY%2B%2BOtUZ9TUxuqgY7%2FHehhh52nQq3zC%2BRnJ6X5eWeTQqCmn6W%2F3KivXrQI3mfhNDkniibIBSMMMDcgrELIW8OCxs6hNNaoWYNCoUTaIyh5%2BHLVVQE31yAt83XRVz%2BjtAZfiWjoTKs1hdyzX%2FNqkFgsPzROAcbxGrItghh%2BCDFMZKgsut0sLd5dTY5gBuyyqG7w7C7sQMrLKc0gljvK4FmGKSWd4ZK6GAT0%2BmaU6bGYHFceWOoU6BDClmdTJBjqkAUrMxkS2WIPD3IPmjqh4w5mWJagdgWb11FDmu8NFEWHsRBgSaxssbwMU%2BtmSGBFwdyhT74Z%2FZ14tUCgBgc3ta0EL2cISTOI00m6PGN2C5nr8mClUh14R4vPie4G%2F1MYFpOhcJm%2F6%2FXup52dfChAC5Fac2DvWcgjJeqc1zeQVGyqQN6MdheeF1M5kCTJTEyhsYg6NTVxlgUnDBvhK%2BlRi203Rxa%2Fc&X-Amz-Signature=e3b480849c464d3217371ac0b25f2b07ed2eac3ab0e77ec643b5294f7213e378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

