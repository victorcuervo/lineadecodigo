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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YJJZ4JO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T050457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEvpp0sXVeqHhSZI%2FTT%2B9yyv7B8ZyOR%2BGpKj0Ha0kDvAiEA%2B653PIZIiv%2FGp2S3IRPgcdXZqt2q70NWLChkPP%2FHEG8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLb0zlTcpD3rEZfYkSrcA3C%2FZ9H0xqEBom%2F%2F%2BCa7Mr7x4yeCw0ENAb7epCQRU8BH1%2Bg1qV%2BqiuAKUFc6R9Pow%2FE3KWba%2FGJEykIT41l7VnGX2P5rTQwhCNHbTU7w4qBCWD%2FWce%2Bp689lM3wbOpJGXDivPiGRnkZ3H7j0Cuj9vs9ujdDEEsql2rkH1pefRv6x3cMqMg%2Fr5910Tj76Of7NxmrPUmF9HHf9YsucIJ8NHRbyldAgfvdr6BywJpCwhYp0Et6J432E%2BJIwnx%2FjJcRafgL86Pvu%2BXE9HUKsxvqlxOCeK7ZG2O5ANpeTn%2Fwa9jvDLa0P0zJqPmX4DhSI7HN37b9oFhHBPUkKYUju8fPX8E1DmT%2Bh4kYsV9fVoYfb42dz8FkxbKjzbfAnfCdMYP9soKJnxz1O6Ot6Xs9pG%2Bcy4iw7WLy2TFr6SOuYpB6fRQUKIqJGNfPPVIF2L%2F6Pqmk20xnr0ilJasHPpICPLeWmQJytpJrv%2FKebeevfhsH5nCdz5hk7yNEbDqffeBQiAAP%2FwWKTkw%2BFRGr4yWcF0dr96Yyx%2BlYei1Qny44xU%2Bkpd%2F9w6LwBj4ampgGLG7L%2FEzHXPPhIYB9rIyuFSciOsmQGYUeLWLIyIsmtRV77Oz96JBF36zBszgWIJaaIve3dMILK3skGOqUB5ioZcyTM%2FmqMOWC8WNjZokY8%2B4ZCOAqBWcKMBPKv%2F7c4NGpP%2Fq4R8XTCPPACWCaJavzuS%2Bvxrs%2FkG%2FQ7CTaLvKQks5nALwc9K1dMwxIjhWGxFSw3dtpru7NrzeWYpHiyH%2Fi%2FZDhOb6kCzmU3CiWn1MG2abu29klhcW%2FgsqXcMzI7mlSBa46RF56u0UsM5U8mcmLl9LUz4ZDhOJcNc0nyB7webf3s&X-Amz-Signature=df315b8ec1693fb2126838f360a96b067e0c5da4f070c182d28725bbcbf3cb0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

