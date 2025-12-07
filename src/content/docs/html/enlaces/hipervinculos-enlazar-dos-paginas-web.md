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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBWJXQMC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpYeLuG9BRi8jks89ZjS%2FmrDi4OWvoUcigG8bR3N3U%2FAiBZApP8YzF%2FUq1dxqiSVTFNkxNu21wxYySk47z6qWs6riqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZcMscwn4VNq9P7RDKtwDFjYHlkJtEQ9D1ZCX96uZPNHIXe0HOurAVt1WPc7%2B2X2IqH1LbgsxuXZf4dVPowujuI1jXGN8Yxftnaiv%2BE85i%2FPJKCsLTvriCRhjenZIF5WI7lUyA27tVMWUo04yh9kMJg48a0erdl93sQGw0WhnuOAfPcdp9BhyDXfdzQh7KB784NyN78pYHCJgRK8Aw5LkDjqZvaOw9PA4SgvzjEm%2Bw9mvRM8Q0qwHn5Gc9GNQqWuujkn5tIqb33uOGgsSQFzolnT322G3T4BwhOpnfCUweZyuTMcTiDYy42UcWmTc42FALAs2RnhFWNLXoUs6Wkfc4LlRK6DVhqMk6aW6LK%2FhKta5pFvSWRt%2ByDPzlMPkUN%2FLT4RHHkHJTUzuSo2zoBnQCvitpGqkdHTycXfaSSkydaynG8HKwTQ1KNXArluu70JpGg98VdhtLQ%2FYQ22eZCvSdpiW%2FMOBZhPdXoidCL%2FfOc6L2wm%2BXB5BJ4zb1YdjAgD5JVa56uJrgX5PApILfwoMP6mVzp7Un4ndu%2Bn7OfJcnelllOFgOC24tcEYftpfxNJ80hVTnoQSi8x7sTRzmH6imXzg06EoAGi1uI6tz0D0MSx1I8mBI5cUydLazty7U6RRLV1ePpsp%2FIIHhUswuP3SyQY6pgH2yMt%2B7gCcuE97OueQh2nUmOLmkJ6wuHJpGrJrduuNyeq89SbBKNpRjhuXkmjMTesTusOu0n2ng4QTm6rOeVrbkLGcgWfVB3OiOHycfyGXGepC2HhcooNwp2DSQ%2FUUbNVObCv1uc1XMusFPvg6g5%2FIQCH74q5euI3fbrxT5iYTyT0YiyikmA4wqX3KFhRPXA0l0gu%2BwBKqMOMlGspE67XzJrW4MDn8&X-Amz-Signature=602aa5d9d7a8a599384521a1cb9d41699f17c2557916699d534f84b73ddccf11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

