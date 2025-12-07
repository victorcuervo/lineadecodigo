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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665VIG6JG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5LiEeQ0JOdY1Ji0NibMygWLD%2B6cenz%2B0lVEZsX3l0ZAiADAT4BEn20A6dkCcqNDXiUShoZ1GIYCRp3Xlc7aVXYKyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFp9vyCvwR6nC0HQ%2BKtwD5gkkqezOgJkIi7O0WPcfH2EpzERBw0PD%2F6b8Yt8vfvhTZFLOa1qthiCR0zusYFa5M%2FPsU66trA6jEZBZxKQUU6WDa2BM%2Fzzd2XbGmi9Q6KMtJHHSMADRCNwAe%2F7rqElzR6GeGU1OfCGTvibEcOYZuDJ2ClY33Z1P1Eq1UaC1UoSOXoLjdXvZSoLrvOKYaFdK2UIIbXhYfqt9PvRDI9r1873SEcYpwu70cHIVpWjqVP0Px218UF5GBk57BWPY1Q4NC2JqUetDf2neCuIfmua2LYU9i6FlC3he6bCtut%2FRJcGZlIUabdmAopYwBGHaBhfW7qIkcc5FCBQCkqM0ajEtOPTxN4WwI22t1kJzls7slpsxepkI7p9W4K8y9ftCqnyYaBGtfZHwwoU5IIjQHXS4Jc5%2FDf0y%2FvVLXhTSd%2FT%2Bh1gMzspW3LSUMoV2r6evG1EPVOJYnZkWclw8OCuRysgDbzT2tI9gVQzgAooTTo3iXDmQ6nHqZ64ybbxYcUbMUKMFA802lmmCf8q5Us3gFJRPdwutuYuNGzih6nOD%2FUhC0PubhMtTNvafu5EWp8J8%2BiTWb8fWFzydw8YtqhHsQF%2FUH42pKCAgo03IOMq%2B1w3P%2B2FHo6QWsHqIf%2FSn5NIwmpnVyQY6pgFnzGbtTt%2FR%2FDSAd4YbZXFv3aBKwZIhNhCXx%2BmAQCw4LU9xpqci9nuicJl%2FLBjlvHk%2BzzeyHvhZzZPgnV3XRCbPzSnEaazP%2F2LiQDbBlRixhjbq%2FXddjdmP540xeqiycXojj3b92o80PIFtHxpu3k8mNbgo0ZzWTqZfpSoxEN8OZh3qWRudT0PBC9DP7kWtuH65cprZbQuaSs8ArdebU3u3pzG51y84&X-Amz-Signature=ec80934239d74012956d2a73e5335e9e00f596bd16a8e505cb535a43fb8eca3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

