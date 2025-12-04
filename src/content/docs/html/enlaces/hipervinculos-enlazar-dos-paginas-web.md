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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGCEJDCP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ%2BXetxVxt56y31UZODcHPHMnQvgQAeC6qDcxlUw%2F37wIhAPnnYwXESms2EwroJvlL5us3v1rmjy6XO%2B0YK%2BovV1eFKv8DCEkQABoMNjM3NDIzMTgzODA1IgyIznD38HZ5yOpE19wq3AMpKlzWOBkU1GhK9E1h9jlxNy8IUF6lH765%2By0lxmNLmjbKQJOQspsQEh7MObQsjBSxyjZappw%2FCPY7PtMmK%2FrKRbTK0W3Ve8OGX7qylDYc%2BNoO5%2BqijcT9Sy80JPt0grW0fZ0zQAcsHT%2F%2Frfg7W1Ce8NQ8M2SrKAUmN40E%2F3X79QPa9Rmv83%2Fxvh0OIlmuzmbY3y8isNzIrlQn1y8q6MMN4YpPv5doyxGWkZSKw79NeN%2FI%2FuLf3fqtJj%2B1jBxKgCWdlEzjho7if%2BfY1CtXTT%2BBfxTTRUnrhKcFByctWLbQmntPuFIpjpXGH1%2BCdRT%2FYq73h7%2Bd3q3MJVMp4EMzKNyXjwGtJ%2BtHaOs%2FE2yYbdUG04gyzNFoZ%2BuNNTQR1w9U1MMRjR31ntJmz3RPxVOCpMXFMfLes6e1OsKGvHiY9jjTKozlZ%2FsYwU6oro4wlDvzKgm4ZURAGd%2BnxRNZY%2B3jFTOEpReOwHd%2FVjOl4WYOcIlsxmePYuc31RPCHvfOl80T26i4i75SvMcX2meFowJ1Mou43CNb7%2BCL7fo7BmXszcctNj4t3855lPwRG2p70EuBaLUlIUKVR4p81TQ%2B%2BAjxrSx4IygvBhk%2FOdT4TioAx2S7dmxm1xJ08ZbGuhkFkzDT28bJBjqkAVagreAwEzdha%2FFbVBYHDFtK5YFzwA7oFIwAvYDH1JZSGZf5rgjP9IBuz0d1cWPQnga%2FeZrMO78P7r6efa2QMKqRqIOcMnFucvCeLDK7zShsbfcpKHp2OOld2b3pjGavCqVtJ%2Ff2tN4BkLRsIqwb8eUHB50em4gvwn%2BjFPKuNqHfFqX07vZMIROi6LbIKiaEOVB4F747Aqb0I3CiSGkLGKUglHOk&X-Amz-Signature=50b3be2f664a905c646e8857b5f2472c772f0ad4824e10fc2cb2f21f7a5642dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

