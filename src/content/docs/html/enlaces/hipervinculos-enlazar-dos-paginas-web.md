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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WALM6EME%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi%2FkKnvAkX6FUrrnvCgm8lvY0fCbyTXB%2FBO8EovDnezwIgGQ3YcB06ohypP87BQSqfOzOcFSm95zJlb%2BFl0wuqpZAqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmQgotcnpGwy%2F1rbircA5bp1AbspXe9As7N7IR9JFwxd%2Br1qCrBARmfXXZeCKeESteeiuwmjiUJwXryKTdqHxp%2FY1jUNrFudcTGLhohFGigAIBpslYIUt4Xpnkz7mdyijfK6N7qebmNwKSOX4glYokiajMlgQ2kCb%2FnPjtRna8mjfX0Fy9V525w4MGuuomb6wMCcJpc3ZMat6Nr%2BgPH7BHOYJHkJ3VnWyQEpvOay%2F4POiR9jIM%2FKpPpul7BbZD5yBDIUh%2FsOAhZLn%2BsB49Ojv4ds%2FhiXiAlFQK%2B04vA3qx%2B4TiinmJzdd2%2Bi%2BKjDpFnZmG1joMSJy22twx2%2FW2569dqJ8iR4Nqh3P5qHCRTWfOMwmOvdpkf%2BoWeYXTejc9cvoMB5rCbIaMKoGUoeTbHC4801Ig90KNTKOPJ1DSirbPi1EAoBpkwztqHkcjCqRNahHF5CmQZBiRiw0qqQOmty5bq%2FjOfiFC%2F%2FxbxX3o9ZND8hc7KjUlw%2BHpRfsYrs%2Bk8BADEDkoHiO8N8mif4S%2BpmQJ0FTJFJCvNd3UoG5EVy%2BwwEVgdKX%2BX3%2BLu4CB8aB4yw7VI%2FnPYwzHLES6yPB7pX66iVwA0%2Bnnx1pEjUBLEH%2Bmh1feFj7nQhvUCFzdFEHwySVMuQ%2Br5aHDLLkfaMKeH38kGOqUB2nLNgsxHf8lS6nHdOOPFvTt1lXklBXfQCaThsnn%2Fe2xCKOVQgCmguRGcsVz%2F0hwRJZJ7cF7rEsqrcrodTo%2FDcjcKVda042hhVQ2XYTfb586IIGHZUi1GiuTxgVUpMsoaZ0Gxve4H4W42MSkkEu%2BUiYOuUme3myocEuZzzuYiJ0u%2BPfrl%2FM9wJWunRN%2Bl%2F6shXSkySwt4iD%2FxY4%2BJk2%2FHe2m8vCFr&X-Amz-Signature=8e64c6cb2e4e3e7b6b1cb9c99c59201277b9a0eeff124e429884ba56eb8592e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

