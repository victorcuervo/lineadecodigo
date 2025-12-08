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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633OKTCEQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo9e3%2BuFLsR7Q5GrN9duTSgslIWTRwx9tbql%2Bd2zt4eQIhAK6ZAlFSQEyNf3BYzu4QFbDIlp9ip1sDqBQ9WU%2B48%2Bu1KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKbmSvY2MrEw6OWZQq3ANtAw3gQnEO1HP6v9Qbam1BfIdUSEpN6N53R9kf5uujULQE8iyvfFn9aEyWB3OQX%2BkH0%2FiS8GUKEsMujRx4vAr3E2MltCNyjOpUMEvEooFApkQrae1F2GAZzfEl7fMADF25D0d%2Fp4kNipARQwBsxDnU4ZaxC2p%2BhkOrF4%2BYlYwDZ%2FlO%2B2fUxnucZ%2BoHc8VApafh4UJKG9v5PZ9TRPbm3i2j0tNCAwSiS3CMqZR2%2FcWtS%2Fejc12HKipjZscyeyfvlz2BWkifzdJJRHWqWJUNSksgZCAQiVE6iMAjr2v0CM3Qg%2FU8XiQ02hydMRJWfJMGWeH85Ii5EPg2tVyf0nnhHco7S2czLiabNzVsh872FF0Yd9vmc46SkLENdKRW6Du87LLtJbX0F6lL41RkTw3xbNOlwdGD%2Bn52SLF3MuM7ei6fx9K756xDi8ozoR6Z%2Fx7tRsDbMFkdN5i1uyId60jpt7PuySi1Opmw9Nkxz9v4ZqhLHK9qfArvheSqafA9z4DrjLcfVYDPORoxgI%2Bldw6mhvY5KsRCYFBxGUs%2BoYjzbYenDSVE8j7uIsLD4pzPWsqPqa6oOrSWAkY1NenJRW4kU%2FtQbQmVtraptiXfedPjQbLZBEjXtcZL13WMdeIgMTCq5NvJBjqkAesEusE3SlDPm%2BzpDs2EwjMhq75ntPHTQvtCHwm74byQBkE38cTCKxld5nVLUBXdcfBaWpc9ozMBEpaCGnHAx0yqrPoTbdWZ%2F9bMByJtiDH4%2BPC%2FhUkwWHdP8ITkNlvCuUKQEyrCL2VzZpjIIiDEqkU7lPkyq2IcjLLn%2BXmpqBmUY1Wk2NksMhtxSwAG0EoQ3PUcgAhMiV%2FhrSdO08W81jpDneId&X-Amz-Signature=cee4a29b99ebab19c9c5acece644dd13c82186cc4c8458321b52eb16c2cc19d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

