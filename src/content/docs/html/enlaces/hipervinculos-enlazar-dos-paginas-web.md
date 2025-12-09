---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO7HTQCF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T213545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXj05tof6RNDfDTSJo%2BBbyhnmi%2BCrSBqHRhnvr3ItbsAiBad1yaHTUVUlFd8yiIf7cGrGU12Vgu4a5G3nMgm6KcRSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMicbW1K41eRuFjNMmKtwD4W66%2FSbiKfY8FM6JaDCLdwNuREG50WIaTzDVx0IJpc50uwIJ%2BerH7XJ1kZaSBJFZcYf4dUGAKtUme5%2FO5pWNX17dykkZeAkrjHfSmHh0kmONURSyWeh3MUY2shOewpdfA8Nl4e1W%2FDDn7rDyEAx6bUVOcxTMgPpgZHfABviv%2Bqd0Scyg89aNXaqs7bGCmh73uu%2FqXlHGjjWj6IZ28I2RrGbHDI31gqyXury%2Byi8QIQAYvnxy0Y0ilarhiadLBlr%2B2NqMPhfV%2BDlNim82c7oumZoZU0QgzayCgaVSo96bN9mYbJWPEHWJithMoyhrKZJjxBkVZOklRhtQSqexBF2tduumcGg6xp7DO5m6StV2sg%2BkA3gAWC0nAQw6xOnDMgPK5kdN1D1ZpNp2b4XKQ6NaRhzbvIhUj78e9j2ZNKI16eZO9O2BIlpfYAgd39elk3XF6Vu21XiVjdBmJwfDOvfPYH%2BmKETeDQcO1Drd4%2Faim4ZFSfebKHuW5lgVs2CSHHrhJxGPhh%2FRCPEosUti6J24L6Vp9aBavjSPwfrua8JnPpWXuj8l23W99ns7ZASXXLIS11d%2FmVfjHDpWS7HOcPwXdXTRnVbxqyn2hIG6TspAilt5jG9n5eHJuWsz7lAwr5%2FiyQY6pgEf3%2BPmv0r5jeOoqbelIxgjT2s0UYhav2gWShbf7ykF26HgjwwHp3Pm5nORpaH4SEyk2Hb%2BsNItMCog2kR7swOeIXtdp0u%2FJZtxLJqpX6135d%2FLsHJsMne2pTuBckmhqmyo%2FRphUPouSXgLx6wX0P38GzVL3K6SuTVeu69LiCQdoPa8AkDWtK6LPWguCjSlUk%2BIJFbNp0peHM9%2FqE%2F0rCmDGqoqLrSo&X-Amz-Signature=0ebe4666073d893bdee68d12c3858cba8760e0991413e085d65d536eb30e72c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

