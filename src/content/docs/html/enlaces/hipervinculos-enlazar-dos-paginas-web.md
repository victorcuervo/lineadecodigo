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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMQJ4JWY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOX%2BJvA3J9GfL7H2OKezTr9pudn6taifVSfIf%2BT9fnRAiEAw4oFwKrP%2B5QVXlcENR5OQxcpOVKM6diCBE9gZ%2Fh67TEqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEA370f4K%2B12WRvYlyrcA9A6uAPEKnB0U7Fr5dk1L5FM4R032f4bJLTrNjncKcyAJF%2Fn%2FBMaqzr21GlO25yYLfyKwx7zKNHBXhRjVA0aAAjMjASK0pZK2aLb%2BonQ642ImbGSKYqlUtJP6sMqhaRxDFFQTCvIjw%2Bl4Ent7cI25yc%2FRk1fymc61zfJEuos9xa9XlERAdMjVyB58lMld5KRVQRKJZEsx76VmEnRQrxgmCIIFbjiuvHGxi4Z5azEqrz1JVzUnzr%2F%2FYr3WnjOZ4E2%2FhCTjNlzu%2BlshneVllS0PaS%2FdX5qLasIr4rzcq36F2GdZGWSRlIbbiUqM0ljVSiUhms1fCw%2F%2B9700m%2BgujzEJ8%2FP13%2BcHRxmR%2BTovLmhk7DV%2FXueY368jeafN7oW%2FxnbFa70aEOl6WS380d3E8EhRLhuv7WEPY9TU3E%2BhxDS7UXZsQrpP7LDSJ2aIMLXHVqF5KHn191OSlmSy7KpfcaRPKBgpGfE3ih84XNcCceUzOi461kq3%2F9cVkBfz79xojCrfTA1d5y39R5WBv8NZqpGKsZO1ZuxqP5GDyM9qGrMb12Omf9dooHMEmrNBgYio6j8T5nW3BeB9LDpbUjAv4VNys6kPHdr0UUQ8vMqtO%2B2qQNWMbYRhHHQRvB2bTAGMIqI3MkGOqUBzUOqIy0%2BYmonC3A4syOQfZG8wWznPQJ2Lq%2BF6t5oGVl3T%2F1RPgXxml7bpjs49Z6qjdHR2mZofjSopAfxnQttz8j63zySB4C%2BRcl49IYrcaAC%2ByOBHG7jWxc44K7w6hsTHXOyq9psUlOlwpBIKnMzefr%2FozkWxn6hTb2ZhPHUnVo6R1xOs02%2FDbvDBryfwgoRTpiI6WWwPnGUDABLhpJhmbIqkkhl&X-Amz-Signature=4e7dca3d8e9d1d4397b989fdc7803ef6af869d3a7f0970336837e4885aececda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

