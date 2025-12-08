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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AL5XGAQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkRQ%2BhgHDGM0GoGEPN%2BmlQFu7Xv8uoyt1h3Sexl2ljMAiBni7tmMcuZ%2F2fhXnazoNu176qUWH7KhAQ5VPRoTRRPZSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbmh8LZrK%2F4f0rxv5KtwDGK0uAKm47paOo3y04Gkh4PbG2WTj0pBx3FssZzTtjsH19pFQw%2FHHgwRugc7Ron0b5qXsWMi7tZ7c5hKgz%2B%2F3XD2gtB33w35lEaUf5mg8X2Q7MyE0fyWGWvNj7ZDihHIH4%2BFlcysXRH7ngeGcoZIviwtSNQPkZhFSoAHAVlxIRCAFKjPuglRZ03MCbygH8kcsijGvqmtRjhhKK%2BCAEyGUkfN%2Ba3yHJyoztiGn5FveMmWTl%2F51jWnXQqGkRvSKJzRqMiJI7UK1zMDT%2Fuah90ZCrZShZWCFgTbATnyqiSsJGsP%2BlAOwA5knuH7auvlMhBKBCpLCpEezsC3imVTSfys%2F3UZtIrFcjtdoO5ymq%2BUcDE2Rw%2BHRSpn1zFtkoMF71i1EbUBQqMdL%2B4XJb7rVGdQqBFdJIVitu2mGkxEll40w5P87pv0WbujBxdGyx2%2FGZL7o0Mld2v9BKR4hKuN555SH2P%2BEeX0Z2uvS4es5EssLEHtE%2B4%2B2ZlpGdfMqGDwPpOCxYQUDp9NGAV8OzhHnzR5F4xsdcO57bQLmPcaNpo%2FK84PFW8AlWQkYHw%2F2H%2Buj8A0CHS0BSqJHraJIOiOm3NAreuORqaXgsvCh5uyzG6P2e3CqVCTXSa0DLqp0xA4wsaLYyQY6pgGLgHcrcyU9TUIXxZ2XfHXDY4gOL5JGszvBUXHBMBnhOoqiMK48NLtIJBO6BZnyKhsT8j3mXwthYGnBaEFZXcC68kMnsTyNrPkLjQsPt0PR6K7K5AxRzzN%2F0jg2%2FEPLyoLuMp0ZNxbrCFmaNc9VOUvVQV0SdafAkPNgqBvdpUvW%2FQ5k8oErA7f9%2F8eVyMKGAlCrVBjl9lxKV7EGKOhuuJTjkxgsQaYo&X-Amz-Signature=331856dd3f189558772a3301d5ec467f7a6e7a2b5c716cffca96dcc9982ef9c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

