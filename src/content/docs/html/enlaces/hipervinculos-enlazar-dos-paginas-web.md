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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGHS3SSM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvWeXlM5K5FK%2FjnpSxdBGAE%2BiiN8PWTVehxSYsOVyR0AiEA%2BlxWAN40CFr1aYZoXruf4s7Qdixkti%2BKaeScOrXPXCEqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTD%2Bu70hiIzaaFCZyrcAwEz%2F0xUKgUIBf4tJ5SGX6wub0WQJQaMTuEsBE7yr%2B33QLcSzFZ9dsXsYbtPuHIjbMANE1SazHCpiRQmQr6YKGpppD7ruCxdOIJ%2FKp8%2BN0H6hVdAlN0BkiURFOLTtvSlRW25eBwvrmA6XZstjGzoo%2F4sWETnJ%2Fx7FbE82tnLLzYFZdY3SSPpU2A0GR8JGaBGdqer82hYFpGe7V747MphSFdw3RwNPklO0k%2BsLrwQ14p6TAs6OUZ0t9hnsGJYHzt%2BNcKgF%2FtXeqJfebA7DI%2BKDEaJvHoIh%2FsXQ6TW03XXGFsQMlv1dzCgH8HecTVCv519MsIwLuL%2FcXPAgqK7ElQSxjDiM4i%2FyqN18U0rKy8DfEyT%2FKYImV4GHSdZdxQdfPK1yu%2F8tRN0CyPMvQWEGRFQxjRHenGzdB2q8Gjh1gqJU7JdSMz6HHJ14doB5buj0%2BCs36Vjms7XnoyQxE8xqAzy0lhMDILldt3TmIcAXxOVXghAyE8WtvNY0V9fA0GyaCDi9u8sjfAQ9ILfGo3okl6KrYKD%2BzUzDwDmLJfEyb%2FJutyyHrdQEWmrHtHYp2xmtFk25KR4PijTRH8IkMMYYZT3JXcZg8oI3QTAp0K6aNUGDfN2GeHwXOUdGD7BL1FlML602ckGOqUBbVbXaqACR9rqFAUnyX2EbQIkLI6zS%2Be4mOn7IvAt3a1jW%2BWthari1WvtW19lr5H1VtmdyF49KvBUWG2%2FqdPwNu2lccEjkQ8uTqmcyZAAb%2FBs0RO%2BpBYI2TNzhe5WzTaciQ9PtJVPaWldkFz%2FvDuCy5lZPQakVH4l85FcmxVwvVmjTQY4XbksAo9TEmpMphYGTng9Xd%2B4hAaKKrfstjpttTawf4PQ&X-Amz-Signature=2baa533975e9cd8f37d1a2b652867dc14cb90b91c8b74f05e4c27de82cad2b7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

