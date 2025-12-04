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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXP4RDJS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIE%2BQNKnVpFC8DQmDINcJ2%2FTipNHCKkXCq4RL7nCGQmDpAiBkErKhJtV3W5XtTNzOh5owibFk6RcAZYs7KrAsPzi7Tyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMGQ1dlk6150COJze6KtwDeRqm%2Fep1A%2BcEqcobNMpaUXoTnuxJl1GtKE7p3nynZnzeXeSQH%2F5rxZFd%2BH05QE5KmVB%2Bs%2BXutpbDrECoY%2FE%2F5X3sWIuizQs5Gvkit5Fb7eQ%2F%2Bw65v3%2BQUsXWw8w%2BExKvH%2FV2g%2FqSl3d8sr4ameMWKIn%2FiQdlFHLCIU6Qbzy0eyZAJQiHb7QzLDrJw637eMJX7Y7fxD8JWGsH2FlrceUlL9CdM0uITy93BOoREkspK0RfqkPxbh0zJIh%2FKPGWT9p8zF2iB1e68nfGiyICuEMY3Kdj5oI8RQroUCRJkfzFtxDvlEvJ1%2F0fAXMnZIfrL7rmMuhpkI3RwFpSn58QSxtxAbSDYdhexW%2B9kRdv9DfXi392Dw7Rx8PJSIjwAYiLWnie6fMsEoFA6F3A3a2BDA1ltqmtuqyG5JH5NGXsBjBbH%2BUZC96GpktPoZjiV5vts972IwvdjSzeBCHID8fXtinkz1oz5jk5SICCvpmYQnsL%2BELS1LE1HdI%2FVzwh%2F6oSXuD%2B2k2ycLyjcn0vQ9M%2F4O21bgj2OJa1dpq5jsVf3US1GrnSRK%2FupRxyi4kvZ4m1oE9ZSJIwPVgZCzpva8W%2Bb0KKTEKTF6XH%2BzABSe67couEuXs5Az7J9ypr7uzJaq8w5a7EyQY6pgEjb1X%2B1w0e6XYEG%2Bp9ktUvyRA8fX0lrI0%2F4xh1k0%2B38yy8CVWtI9Opm6jb%2BpWLJ0rf%2FGk3wkdX9QSbPFjSIkz6bkALvR%2BSb0gNaVjm%2Bh6%2B3ZQjBEL3uNPytN%2FhGw3dZ4Is7QzWqfxdFQsi9L4rCS0F5dDk7ZIoJJpmkOsWEQoMJK1CNEQjClbqHLwGVa8xh1C8d4OODYATT3HjrgNYLdoaDwGIaWQ%2F&X-Amz-Signature=a0608c26f9e7e0f70453a644ae75bb04df8384534e8841b8cd399713a792bd52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

