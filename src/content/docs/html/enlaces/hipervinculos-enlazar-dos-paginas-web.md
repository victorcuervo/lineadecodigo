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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B7SOUHM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaTpMpjMZ2SCyMmHs9%2Ft1hKGagdwM4zE9ZRsUCYKBcPAiEA5wwywPjXIhtxaQSJZJuwMxtcxSVNZj1oSqjixT%2BOLd8qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPS4qI7VQgwKT1nWAyrcA5XygrZqncYnY%2BIs3Hy%2Fwr4viaVrSsNg7yqixVqbACAnFMOUSFQmjJBlrqmlowdqSoXp5ypvva9tQIK2eEhFBOaQ5ScT00UbW%2FoqNv%2BqWTVHodCk%2B7CizUNFcpk9q99W5AJ3I0thy5VVof0BOlOjk0BEWOwAxRUdvWRN%2FQ2YqZUBd4NtBilBFNqK1mfHYJyczayxFjIPYmxFp%2BsuJTIfsdH77%2BT2yFWYSRb7oUnT%2Fsp%2FNDfDIHdE3nhy0%2FonRMT8UEjG8NbPvwnDybXpfODzeMv4gSx6vjlrGZa59uGRl5bUGgmuBsmrNfs0UdBlLWGART9PEiU5y%2FD44xDP%2BV%2FKkZLm3PlwoNvz3Rl%2F9LH%2FTk6RV3ctgAjDeM69MrTpSDcWMDPx1oGCHFJZ6CiIn1Vs6gYMdk2gLAYZnI2I39TjiAp8zpB69Cr5%2F4nJSXwDJ0UvFmqayM%2F5IM6UVYpzcsc1JwcOWLNBltEGYkSZngbLOLf9q5pnTTfBc9W39aU7zd0hSJ2HgZ5KvavSMEQ9XcLelxjfVKRohlSZI5Qb%2BajEA%2BtriM8Tm7JD5l3TRnbpJ3KxmyEQ5pXCJEr5XEFIiHtlO9RdceoFdmx17eAoXQmswfEGX61vusO57SBYfmkwMNrJ3skGOqUBNBimZSxyePGGnuQNlHmO4AZ2v8pbxnF9YVMNlC9W7JIvVPo6RAwqNGolWO2sadZJYIw1NwSJ1gYZq8XZAED%2Fn5wsK%2FpIW9c%2F7jnh60L1zbSuQheLSb82ar1g01iVxYaVUqGKOwrtxNeNuFbEpvYG9NvZC6K7JWdP6NlSjgRxdkGk%2F2g94%2BrFv4nMSopnyimeuqWnlOqaQ7xQ9%2Fr%2BDdF3xvt%2F7u2w&X-Amz-Signature=27f4a705e3816408466e036a9f215c9cc6ed7559ebda8893afe7464a4e3ffecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

