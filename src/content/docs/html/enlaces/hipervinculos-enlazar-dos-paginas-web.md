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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7TZB2QD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T200520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEd2OI21xFgDZBTqqXhm7CnC%2Bj4vU9nAsS8pmi1pvvURAiBuuCzzMp7ADcgyJ%2BThrPa%2BTua1XpBj7rgGu4aGicy3qCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUB2Re9JE4G%2B%2BKZOxKtwDP7uvEAVC6VtVQp66Jx97hpSTkxINXS8Si%2FVMkNk1A4aO86E7wJfbxUZa3zU0Zu0cMbLEie5pN5C0g6bBQY6JWrIs%2F14nVn8eVE5pK6DR9dbX2tNWRQLctiAw4ZTBpBB4U%2BGZPgf4hPtnSmNMfGLkinLTFfnPNq7jh1uVGrK1BiufPXDfKrgq9Ht1T3lNJOwZ8j8E6dYU10RTkVVcvNpWqs%2B6%2BIVDgD7NUzScboxZQnnXe7HNsQe%2Fl0bKu4X5bDuDrR5MSOo55oAcl%2Fdp3dgWFX1Eg0XF%2F9REaEmgIdqZROaW0QD1nr0FivK8ISc8%2B7R%2FdWL7hHOJ5xIXZO1tNWFYRgVgwb3PhK1gSpqU0cjSJ%2F2vc9nNAdPPkTS3XSsc352TJezITHphTQ4RgeFvy7pr1H6gxwMSPNIFhObJCKBAytUfAZ%2BpYECEUVaTkbMzff4QXkmSL0STMNWnfgTxxy31%2FmQuqCmp0qR5%2BKOq1yryoe%2BoBlMZlIrDf3iLrkLlzwnusxkS4SoWvvehHM1dqPYpS5ZYvlgsYxyyGMqRynq7RlY6o4WvRuKJJYGdsHt9tMHLJkzMDhvLA5SaXPeW8KPda17KC67U1nSPk0pSJRGkqrnBOreIsvUW8ctVVHYwmf%2FhyQY6pgHKpF3PNVwmZRyzB4hXc0zKQZSiAF6CjtT7A0SBZ7HVvBQEOwumYHVfj2bnXuNM5slvkUyyALGQK8SxQTqMxoMvsbRODWc9Z2NKTEVR%2F51vO65SXFKVdyjP8xnA%2B2IgUq3wxlXpZUbwyP%2FB6D16nJB93se2%2F5d%2Fd2ebtMDPaMAZC16FEyGNBsP%2FESDPw3c6TylnjyyjM1Yj%2FHYOuuQQqtNk3PSJYI7V&X-Amz-Signature=4a1938eb40c3bbc8bada4b964080ddac236cce7451ed8fa1c38123c84e0fdde0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

