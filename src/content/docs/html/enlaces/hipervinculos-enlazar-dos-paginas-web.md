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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS7YB3XQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCofkojJ1GTZpw9tdZY7ibiITybIbE9zmDYoN2mBGLyAQIgVE0NkGnxmzeNbsiJ337uWEc9UqDgv6tJ%2FJSiFl%2F2fYsqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAh%2FSEDVnRJ7v56XDSrcA04a%2BozBtO%2BddjasU80IUamoaLfhORhnIXn5%2FtkoM%2FrT3TuYlkgwp650Gn9YHKYDBNIYmQE5Ip6Cp1bjC1520pjKpLUxI6RBMtArDLvrT%2BfdVGiszY%2F4daKLzr5UUS1dpIBwMEh7qldafc9J%2Firs4OqW873ZCZLNQjYpsyMnoZ8qvoVnS43Y8Ei17vu7yGcHev7Mtnk4yx8E%2B%2FUTzAh0yW4BWzNYyxvaFyT22eTpqsymuLQfHQlFeoo7UuYS%2BpWtapcINu%2Fuc%2FuTBL0FaW8CE7J8NHewpiq2K4FUdx3SzLZMtKpHBRwKFFX%2BpTZemXsaSUmVMC%2FK6Z8J2kKYM37erk7lZpCbtdleCbHIaeatL%2BQdQhqgLK4cnzzZs45ZFYkYo4lFNWKWHA7yoez19uU0vx4me%2B57oKRUfbjWc0t%2BiNODX22Gmj18Ic13sgTrQrCw2sQ%2FnEfQfeLgMtOe51VTxN63GacXm8hYKh4j7yqEBPJda1afda5KGk1%2BIabxB4KHW5yiFuiQ1iIVVU06iOjKrY2AL34LhyKp7%2FROXWWveN1JFLYe%2BqHUw4oKqpiPjJ7fdMV4pTuR8sBasmZwbw6Az8IV3yPi4REY8lRBBPMumQPusjX%2BOnEBWPKdSiNbMOuh2MkGOqUBnm8eagM40ejRTgiEud3sZAElbzNXCahs%2FrKqMqCbqPEljyjoz3vN%2FlESzA5g8pZ3JkhhNMciZYOXqGGqwdpbikN2k5Xyc75mRmtLpEvM6WBu2rxT4LLD6nPfZdR4AWq6GYEnJqBwVlDJnM85znDtkbxMbSpn2bw34eTWQdQ5P5k5y890MmsFgB9CgKltEP6MrlGpbrpRZ51axrYv6JaQHpLtW9TN&X-Amz-Signature=6238e72d46cba3983c69f7970a71a1c2b95ddea8a658c1c3bda1fa607bf28c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

