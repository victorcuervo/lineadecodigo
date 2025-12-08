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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QPZUUAY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzdnC%2FvDcBlc9%2Fi%2B6PPUbLx1S7CTfsNxzAh%2Bi2BuZsJQIgVh7dhLEM%2FNbO6kHJHzP5E6w21z4JLUzhKcSw8I4UDU8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmDubbfJZPiZiG2yyrcA5E6cLeaxc8MwVGeBbxtspRU%2FQFOBtO5MJMYeYt3NvxSs4f5wbCGZVXT2J%2BhqxPKciamF5DM4DT4NIF32Cyr%2FABVNjGC7seTxc9GyVhgLmjI87sEIg6%2Bu60mk6BQYFBW95psrhd9DSaoYStnCqo%2FZ24MJDtzFCaJ5BKL5CP72QGEItJoQn7%2FHfByh7ppWQOUBHtn3m2hrpbk%2ByLyJ0Dbq0pHh9A5%2FouvXUPI246%2FZTxtxdEtuGmWNKymz1hQAh0nnkGsCt%2BEEA1KbKp1TOgUafBoNPVPo3fR4E52bsx%2BA5i8HPYvPsNrN0Xm5ru3pPx93ZqvlhnNyYdR0xdz61wB18Zzxxlgj9A5cG%2BG4dv1emp%2FUXrRy8IN60jy3UDK6voMyRJAmwvjHema9SlhOnU3r4RlN32UjVTsCnIyNkw%2B0D94mEtzqRmkirAvtnl%2FLxCweUYqFd3XKGK%2FFuNIryD7Xk0UMOyWrf3JP9Gy1X%2F7yqVf3u3Wc25lsx0HUBokdnsLSbCKI9M7NaBwUkomZfZsf0dBt%2BR2EtKUwGBjjdVdiFNUaAXiIcUZ%2BRB2t2kJyxi%2BZaZI%2B%2FtC2JgNtVz7irEN639O3BqxCK10ejElQjte92uMaO9UzXITijzU0MfQMIDu2ckGOqUByby%2F8XSpGwD5FOwEbzE%2F3IsEJlPZHj%2FluEgwf3RVG9imwQZxhZmwnXm%2BngZn7fV%2BTRhIYGKO8ujqenvetR6kevAWuM%2FEhr6uWXZgGDDdp2ZqDVahEDU1vb5gnkBBLLnWuJC6UNaToGKPSOCnJwsxSCMsEX4X5GKPc8duf%2BqJBcyvFGSbgn%2FDj7ftRi8hh6d%2FGo3DCmWjJnOCNA6Jb9g6ASpsRIVe&X-Amz-Signature=2c76c83cb96dfdb82f25f59eb951aecad722308122798ecc1ac12b024a302632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

