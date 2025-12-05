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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635DFOO4S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX1%2BQ0ikwgWo07H7lJRFV65qGt4iCXuGl95uuM65l8kQIgHh2k85zfKQO4lWlU7AdzhYaPfxy27ndMP1wrIm5Txksq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOL5WnnGibqbLScOcCrcA8ufql1tRXeJyNrcfN1b%2B24Laoni8ILBIWJ%2B6zeeFztHI2oX80%2BhxS3U0iR3Qbgoqxvyd1UmUqZAWLEPOQH29F7NapSt970lCt0hqAz%2BQEsETuOSg1pP3FtrnOGvICLnPDgXd5U1VVd1ZZ0Hwd1DgRZZCcM%2BZaKFSib0KGZXdVk%2F52m3746RixsVDDbQjS4H5KUiynzNy0n%2F51LEEjwmi1o1fmRR%2FfXM72%2BhLlrFhgxaKTxPtyhh1kAxNl8wdhGflqE18YAuzXF7kncWP5Q3VZotXP3PAiPTES1QXrdKKzB%2FyjDbHXvFUkXxMnmbP9levP8t%2FgPyCUSvPvpD9JmWWc3g%2FFeXEyJwicDLj37NH3ScqWavy6dNWdv4Do7FMPBGEPBI7zBbdUqEe%2Bio0sn82aQVfwwiicBPVTgV9mhPCZHDI%2FHL%2Bug7y67UvUKsGmZO1g9fAnEyjpa24dlqctEkBXb7Es4e9lXF1yF2XkMai2RzzJ98mx8zC%2BqZnmHO%2BLWqtRccJU7akGtLfYapnJDWSbMF76s9%2FikVGDUUkFe7dGLZnpnrYoxPmOwbP4bc00mWLPlEULhGU5uDLJhXXKDi5LBnFhM6Xe%2F0nscBt8HoHF3OGmSe3Mm%2B5tMFqQQGML%2BvyckGOqUB3KgqSvW%2FpvDgnlfztno1B0hhYqqGmgZMwkOt61rdAu0FvrgpgHWIPnOq0tL0JXDcSgF0UZyEDdXMZcMLPZd39LTm3%2Bt3qhibFwWid84Uikrvbrw9jhj0c2WjFogMkjFKSBYoQEnmqP4IE7DoDPiI%2FpwkWpj4d%2B6HTHYDANCkf%2FvqxNG%2FywVTT6TJnK33Rm2GVUJ7%2F8UjT%2B3kCJtltRH5HDxcn%2Ban&X-Amz-Signature=906cf9c91a10d22927f0e683bcba1657f8ed6f372a6f45a08176cabd029a71b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

