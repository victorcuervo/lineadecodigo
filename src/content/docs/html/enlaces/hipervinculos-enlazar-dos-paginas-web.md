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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZOD4BVJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T161220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXLpSOCT5DuQnM34xW11I%2FRp%2FUbXPQVCeim8h0oU8DGAiEAquUWkdQHA7kmsTfwOtnKYfaMmLwt6lsI%2F6xBu0leG4YqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTaY8YXZl5nzwO%2F6SrcA9gMKhhynm1TedCUSdlY3qxM8rfFZQoKgxPxxuzvWNI6Whke02eGII3MIK6S8Z%2B%2BoTK%2BEq9Pe1cS9aIXraun34BF%2BVyyHTjJSLIOCNLWL8EzNLVDZZ0pjdHiJki2r29%2Bl3Sg46lO41s2rwEEjCsMyFgenDMVcL4BlEawdj%2FRi6AXgLmpOsxlUdq8speMw97XH7irdAW94YcVoAogwyerpqgqcdJ5PbISZCDJMSEtvlfFjt9aA6B5tHmTNexPK%2BtzOBXP7EnCuRDuoVEFZczLaDOGUdcaBTH47JNgxXg362E5KbUhunTVCbfsZh0FjagW5KDUEuGscNnHWi7FKYzrBP268XrgJtmIwUyGHQLy9Gt2w0u7MJ1BJwHoDWNUgUsBRVd5ch0wJ%2F8WAp3tOf8uiCtErXHoJuTMjhVkqPD3woDyZ0gW%2Ff%2BqO%2FOJgJ4PV51V8zZ0QhsDqiT8McUWlTGWnuLnaSRVdarY7o%2BhQgfvrCf3up3tHoISkAEEdQYaX%2FzQXB9gnS9GJIlAw2k%2BjPpLiw%2BdGws52WmYmbdQ7N3pDxya9rRscICOVLqXnwh2gderX7NHGZEgn1ngZGY3jesjFzosPtMO2jUizckqitxsPKPXTJv7v5ZAt%2FXtk9wkMPLc4MkGOqUBxYIrhCkc63FfJwIRsKlkpfCWdjcQ3Q6UcRUHD4jS9LKIjk5AHdA6K5XuU1IRKWz9lJPLEwM6e%2Fb2kZgRXUZO%2BhrXukbiH8gHeF7JSxo5oBhdhpAjM6rHkvMv%2FXj%2Fp91C0Yt2iuRbY8sIhvdjt7KjIWQL6Mkx%2FgJNH5d8C8NwbiVTnp3wqv9dd9FXZYF%2BBjZxAz%2FA5hkcUOtEhM1DgWwqKK10sKMa&X-Amz-Signature=23a79210e31b7726cf4098c03a90a72ef10b63f4782072ea324f325a9c20eee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

