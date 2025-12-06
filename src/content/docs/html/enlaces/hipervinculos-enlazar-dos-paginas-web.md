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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJ7PXAY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQBItwKMyQN5lUsHgsZdZU8edVd%2FALgJczr%2BXaXhC5RAiBW9trT3CjwKZhsx9Qob0MI%2FfGiOEowuYovRoKxd5QEcCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM0ElDBTcOviks1PM2KtwDr%2FLI3kEYeISkLJtYzZrXqlXaIqmepjmjWsdimK%2FZM3OSgNV5FsrI%2BL0pQkGfs9lGxeAh5slqvG2axERPkDj%2B35eH8yyAR6h4aaf6QUl8XBQpKihB6bJXcKjViqCBU%2BIXndu2C5gx0brGLsqYEweltflyu8x0FfbF7CE09fEKp6CTKH5nPzJSri7YVglnGP0%2FRZE%2F6SGJ5WFgL2bOXAh1cO1NpAHqxY8QgGFywwKusAapR6zaf5HWDmOvdi7H7gJz15BUEcMzNqp%2B5OYu%2Fb%2Ftv81jP1yt1G5IRCNoWq6Dj5TVon4zN%2BAUQJk3cpgYcw0bVPj%2FxmYDyVMLrMydW46B%2Fx8FDR%2B0I%2BpZmarbRVBEtQwHTIOavgipUZngKwJix7zNyiX7NjWZeCtxNEtjoAAMHZQ3r0hfu27aAb1lPko%2FZ97Pa1YkuHiiv06%2Bkp6yLcOyxOM2%2B%2BW5RWMLDbzIi6%2FN%2B6%2BjrAFxW975dlAhN4OiWeTihcA%2F1eeRHHdVzgF08ka711e5L9grWaZP2FdiFYSXRCCwjJTRZouASZHTIPvL7mGzVGpwxniEOBsPIgIkxLAsQ00H0%2FLO5XUzz8bC77yfAFoKrKOjCJqT%2BLXb6KAZMzhs9Z9KhEMgkrc0ozIw49PSyQY6pgGpGnblzJ67XQtK0sthTVKilf10jsKAypxZx6zD3UCHZgtUIOQpH30aYXXEgrsgr%2FE1govpSZtwvbopR%2B8AwHb487JM4C7YS1MXsJ7n3AfDDdDqmRKAQ1n4ikJjyfrvyDeUTIm4OXyCGLSN4lAGN%2F2O6ZlHgGspUXeAEUQ5JwjOZ1PVmBDvMLs6VUURBz1OBXmDLfmTApffdXxHfpyP9q5qpyMIZ9mr&X-Amz-Signature=efd35eeccc8028cc13c81c1af4252f2841dba947fd28b46ebfb6fd39890b6854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

