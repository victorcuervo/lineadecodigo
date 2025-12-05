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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJVVWUV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T174042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID17ki3c4FCB8MjD5S3O%2BMuo7Z1LQ8o0uc5j2xmf7rPqAiEAitISgMUvscT0TXiuPDH0xpQE5oNmpwHN0KZ4IzbFfCYq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDB92PpPpRjMe%2FcEY3SrcA650dQUfRp%2BofjibyXZNyN%2Fi6f1uphWHmopOVXK%2FSmN7ZBYDTchTxt8%2FKY5i7VURIht6Yz21m4NgxoH8TUptzjLaiKugaWfMAx6RvqDw26Hy3oFOS%2F2W8TfOv4f1YVblcMe5BlM66S3b1CsEnjZFJUXrHzinKJx6J5XDI87YzgDldiyUfP%2FypAqQRkSca9N055oG1cl6a2gc0ikDt76gfwpYPQlBgERPkj6ZtOrCJZvSQkdzNU%2F3gEFlueznTrZ0iH0Fz6AXydNO%2BG8b0wjscvcM8HtAU91CJlRbk6KyepQ7MaHyAGSzKg8G6OqEqYTyFJH78JymvdvUBs8uJjzC78rImDVzfLj5JPNIZRWvwpBglKfL5MG0RJgaiEC1QGUyxrrWTdkarLieikxqOgVbqyCu2xJ%2F5kphFuX%2Bj3f2eW%2BdsmcDt%2BdYN5xJTPc1tAkxQgN%2FPSuM9pXtzeqyJE%2FwsIelzMCxT4HT1n4phtm%2FoouRlxZloXrBX%2BoNW%2BGC5fGD2kdY3BLGuuDjkIYNuSTVg0e1T8GxcSzf623yRzzd7xWcqizc%2Bi1cKRinmd6G1Nec0%2BL5gVhpIjHS9EN4oRrFVngRDwIH6XzFlUsX5ImBZq6ZCyky%2FQYVSvOfLQKsMJ7iy8kGOqUBh1%2B%2Fc6LLvHh9%2FWCpDZbDwIXajlXk2OsqU5j%2FGEcAB%2FGV4paV6x1SEOQE8yzsydzDn8fj2p6YYWazy1Rb31ZoN7KVdCqxWAHoQrIhOmLregIJGMGCzWIa2x7GvEEVqSA1cUGJDawXBGGFsymoacCo2vFXDBO%2Br7GACuRLHK8KsWtDF1QZf7wnm3hbNyhZ3RyTxSmAWaFXjNxAy2fc9Pcs2nPDHBSy&X-Amz-Signature=2e9d0707c3d5a5ea6a3a9dfb5371de9d28fcb2a823c59be436ac09ad53470226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

