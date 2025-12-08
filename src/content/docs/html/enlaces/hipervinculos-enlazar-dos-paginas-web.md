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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GW4EAFN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICTKgXB3ehxKz48frnkPXfVedxMw%2BX7LFenccw37yyF0AiEAyBsiUCj87QCHeLvttcolvvb%2BMyja%2FNVA%2FGBfj1obtsEqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqHvQ%2F6ZmVucjt%2BQyrcAxlt6FGx%2FOZp9hxc%2FJhzPLLrs5MKzi7BJ2zxV1lD59yWBQMZ9bMFj%2FpVLv4M%2FNMC1F5DcVMUzlTlQQASNLNdwVhws0poS5kEPV1OcK5PTd%2FKsbm8oX3CAckMXjXGoZqT40m2Kbec5yei%2BYfUlUA35umtS1FSTE7SbTWmdPMLBJz0TdfWXlNPR5c6Z6ZqZE63Ii4zFvQFN6YPE95UvEXSlNEzEGHjVxtmAnz3RF8TCdRaHQRPh9588KY4UaEZU3%2FhqTtOMKAQClBX1DREwBHAZjXS9fmMd2J0UlldMpjILwbEC9To4Ot%2BXXVfGvpScGhPtEfV5ZdWQux1jME91e0HxGqG9SbJGjCQOEHTBT4qBoDw4PKlVZjbJEEDMlXXrcYlu1sZ4CGUt383UBhiZbaZxfw1eG17sbwAs3T5nAbuJb03XAEuJLx0fTay0%2B6p9tBwVcmOzB12RQQGfAJ9yQ6nsxxLJVu93nMDMocuFQv8pUPyotC%2FTVF9Fsn8x727FIpmCxrkhwIa3FxfAy5GgG%2Fvm4Drc93QSCpXAFNj11MWzUB7dQ1aIOlHgxQs9CKU9poDT%2FJFN5dwirOJjO6NJeZCHwuG8G%2FW0KM60ErUMk1eiGO%2BZBkquvCpoBYVn3nSMMLt2ckGOqUBmXTXADgVbZtIym6sDGaEyTuz3cfuM6B%2BIgEcFXjCktsy8AQQbPNPIOBL0lVPAYDEwzwq693UzqL5Wnpd4yWlJpkzfCJth8cDSaS%2F0U71xCGnOPbOkBE2dt1Q5icTYdE%2Fx1omKB6V2DWB3ml0Fab1SOw2tj9j6TAI40alwLnp1luAp4eCwOZCNIMu34BPtGid76Prq6J0jv2LelTW5sWwD%2FxHubFX&X-Amz-Signature=e58208a1a66db305365ec0b50a1f869ad276e588539a23b862d9b074a3280b03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

