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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZOGWH4I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9CktaGv34QDrkF5aXQjV%2BRv8lgPwP%2Bb97vqsnOZ55iAiEA%2Fs4THwKFX8d4TgqO1VOHyxryQDmAvPK4uab8JD7sqIIqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORy6phrl%2Fov9%2Bw6JyrcAx8R8%2BOxTg2duZ%2FKqDsGRTCOHnbrhszwvatJwYzoP2f6advYQdDPv1kaIsRx1ZJftpI1lZwPOVWjOLW4cNP8SURDI44Amr5fA7xzUbIaBmDnJsXRDDTUqmjpOW9KAG6jLbrZg8JD6JADSdXCWJ6vzRMWZWtdZPFKnVa9Bs1BiIr7f4tJc1u%2FNHmFket79lGVE5aP7wourSdn5QQ7lzcuCNVtQhGfF%2F7he%2Bv4uAgpT8WYWtXe7Y86hHBdCa8Y7xH9BDaYJ1idSBBFYh6wvWNr89VJIP0RknaIrei0pQKVJHdxnJtGtr9V6mZnE3bqGc0GLB8jNgWmaPU6oUx397VwVeku0Su4gUUxzRsrw1ipwrkU4NTlfPx09d1nr%2F5KMAN111%2FUq8n%2BX6jrElkUNWmSniek2914SPQAjTMKoT2RtHfzgqDBdtI9Vq0%2F9vLxUwX0sQ69nTxuUYr%2BnIRQzv1EK4jRmeo3aXeqU6dlhenDWXdN6QVzu6rrdCpaAiBswdIf5BcHjvftdQ9e4zUYjjSA92q84fux5oC7fPa4QIv2kiPmb5SeyRe%2BSL7eXWEyfC9HptIQCQ9Edzj%2Bq6nIfIhODuC7D0gyJaMZYiS7G7uA1JL%2FHPfmUUwl%2FJVRzNcDMI2H3MkGOqUBMDIVeU4FkususYiq5jO3lC8GuAyxjMozq1NHu8RYbyrMtsLax4pyPlqvQewm7HjQfuml4HZp4vrlhqlWG%2FVcdaU%2Fy1oqztBKerUvQUOrNTw1OFHoRFWjYxhNKmY33vMpaltIqMSK3cyvzaCEOZ5j3Ci6T3dn8TAtrpP1m6SMK%2FDgM6RjMwSA3zjG9jmchV9nbQloi3WRuJcZG9tT91OOv3J%2B%2FiBf&X-Amz-Signature=a2a917e5181d35202e4d12d7b31257b76ceda82c4b9aeacfdc9b26a212b3fad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

