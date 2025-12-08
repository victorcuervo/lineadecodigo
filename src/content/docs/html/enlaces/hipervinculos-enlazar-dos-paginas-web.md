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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYSPYUJN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYVPhqM0EbDNlX9vTAEW6EQYAlVvkg0qC4MOdeBgMrUAiB9GJeYMKgFRjmJZsDERs9FWY6iegkAlkSoxKuZivgTciqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkmmN6P%2BwDCD%2BGZNxKtwDGzub%2FT99gr6j593EmeTTheMCUz4U8pLzBZ96On3d%2FgkEJjY8l%2BH%2Fa3BDucQzzYDsd%2B7CVSNl7gOEd2rC0ZdSoXmyYNd5kS2HEJQLrRXlx2Ea87jVlrqUhpGklXihjmb8c%2Bj2GfKuTg9WbKkOEbCJo3BrpWau2p4LoAZqf3A%2Fj%2FGQxDBVdrRQCCgRHEka7Lu5lrpRS4PW9yXmWXtOfSJqYYLMQJOQEjkJmbPfv78zIgdfbMVOO%2BiW%2FtkcaUHgokS2LsfE89bo4oGIl2hS%2BMzoYx8%2BUdVBp6bZ5DQg%2B3VX1mqQjY6pIj6HL7XPGYHivKm7q8PMmHqc%2BxcMfShys%2FCR9OAWTjs2m%2F2gEeZxOZbsbCU%2FotFzG8UbdK3SrniSnmxSERBclotJ7Lwe5gF81itJgFRrs04o6R5hIl4p%2F4MsGnQArlLdhnHOBuBhOUgfjOKTWzJ3Fq9FhQTD0GcaKkhFjNJBStm9ZGXmyN4bN%2FhGsnccRtdLzhzwKmlM730xnVBzclzov9LJctGobEznivRkfbq4c4BqGKyHhM6b3VKgXCqRGAvKT5ihZKmOztLxBNPw7Nbd%2FAWj3wM0Cat5GyUYYrW63bskW7ouS3tYXT7UGachua07ehVeU35lqSYwkbTZyQY6pgG1HhzAY0KfTz%2Bdaxs%2BMBSVhw%2FNwBkBOmoz47vsBV5PQoLo0bOrL%2F4SbwNOxsYSGnml5%2F0bihPBERRg6fFtWlxFEUTMQuXVuo6wBIroHGFGbMF011gkNhuOP%2F0GJj%2FxOF2weRa0rHr85M38ryatfkl0%2BhrFpQpw0eFYEquaocbKU3vtbbUfz%2BybCqgygRpBW%2FAKlusJRzqsF%2B9PK%2Bk7CJtbYYjpuo4I&X-Amz-Signature=8fb9f7866e5d78b099b2811eb0244f96f2b1a1fd8ab907a2748219a63b915a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

