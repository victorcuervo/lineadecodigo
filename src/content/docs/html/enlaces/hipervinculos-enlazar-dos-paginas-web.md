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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU6MGYRB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLiJ0RqUXhDU%2F0Fbd7ZFVQEwNRnEFahnNxl6QZ01wrZgIhAI3vAxU8%2F919Py5NOicByp%2FXO8gY5fybQWsVjhPkw0TGKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSs%2BEbwt3ffXWpD7Qq3AMkIcjbndh5aO%2BuKKlFcX1kZFos7p%2BUcphEVnRjZpQ2fBFNRpvdNyowD26KTdm1gzWyjulkdFHnRP%2BRxoMDituxaidKBVgQYeDPYQTtv%2Ba4x%2BsJo5ozZ3mvTOFnPM%2Fobc7VG%2F6pKHgvP%2BIFrxym4ol8U%2Fv1b871EsuS3q1aCS9F0noP1WUWbmC5d0KWuF4%2F5tQG86PA9QTMpFjWxrKABYIl0eiK%2Flf0ieKp0UOYR7WOPwpZ3Ne0eGSXQ9syKB4QHLOP6zB3wpYRp7SG7QIqD%2FJ%2F9q%2BzznYRQ6epw0oDYoa%2BWdRqMQG4vCLB0SjlLqEA3okG0ng90%2FFHdr5g58Ith8woM0naL2gFEDCCrzAwTr%2BNZfFEWJT1103vcknOC4fnXZCahMgzDyZswa%2FiYpKHoTFY29jsuaqykO%2BBS%2BAiY%2FES%2FPDKd%2F7L5oQuhyNj%2BKC8Jw7cYu97otQDFA311H9TC6JMffauJzLXNRG1cp1w%2FYCoV1KhNXGHzSWKcYxE1qdeDCXeWQgc6n0xnHBz59gXc0qY%2BKsuALLoBLEa%2F8OHoh8Py8Qgd6K%2BnWqBQMdnHItJ83hwXwAlkMBk1nBcEjOzK052uRAoy9qWuPccGPg6sRUs7VDTsQs5fkiFGPFfxjD3jd7JBjqkAZbVDk6Z4wwxlB8ElIDKyzUWfwcDZ47C9SlJfKaSuUKFQYk8rXV97kDUar%2BoO1cTn9zZdTFLJ94LtYcbQrr%2BEcBj%2BvuDMtRJ4wh%2BtzejFb7Szj6KPUhR0thET4QBngb6IsuVPbChMtMWwW%2BX0E0DSE8Mrg1i6tRePsOn%2Fc0yGm50IDU6nyXQKTfXKZCad5%2FLOiqNXyoK2VsmSh7xydrojePFqj63&X-Amz-Signature=6b50115f4150a6e59ce45df7226fd4399706a9a4c4f425f2947a38f6220681b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

