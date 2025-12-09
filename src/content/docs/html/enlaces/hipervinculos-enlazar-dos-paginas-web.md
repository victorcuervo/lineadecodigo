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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIPP2HI6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T160641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkrrIDchuNlpLZ9dGZbKr78%2BG20CMesbP25dVuqqCqaAiAnh4TdilgathK%2FQLZEU8AlVe6qZOutqMey3wcM3goHSyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyScNShO7g%2BuKqtAyKtwDcNdignN5fz5rHJ21nw8SX82zOUObgZL4oPbqAEHCWs8bMtSMcBWK7OP%2BjBGgHO0KVCc1bV%2FOuN0ihuMwaTrUtS2dh92n9hOwkOUZVvx0%2FXKgIrHUnaFzSZGi29C2ZbT6kRQGiL%2BUJtLeF51MnBhEW0I%2FarhIrTs6Zfh8pvHPz7pbueSXebrmIFfsfZud4QI8RjW38SSJokgVUahhIt%2FgEmPUQeOQs%2F2MqDIYdSLZpz7Lf7c9IxP4EgGSsq9LYmDDZ2CLpKFGvIDQlJZSMQUYSo1jKGIfXBXN%2F%2Fx5sWzwu%2F3ts0ePAzLOmFNyZDL3e0icddZ8DAYQfPPsWdSEHe%2FjQnWaz79HES3Uc9c8ORBl5vE%2BJ8Hb7ECqI%2By4xaeyeAkgJ0ZeErmxZtGkOTvK6Y5BCqdfw5RaVmQxwgLBHsrskXb3oGwoGMsBXQkKau1fdre8I0%2Fh7cLx8459CJu4iXKXh1P4ZusooQNp4C7cxGaQfXIQKMIdhTooD3JvTS58G7XsSmFqpHDJKHZSXgMeGamqxyxQORejQfc7tQJQeA3QUCFSclClwa7K5uE%2BjYw73ccYAwL%2FqjwQPPZBfe0R%2BK6gev0pehG2qVk%2BN6RZ23VZl%2FRxLlGKt6YollLJa1Aw4NzgyQY6pgFTrz8o8bt1%2FRNJ58wicBwO8MbcTIEN0ibXR5DCoclphJNSTgNavqT%2BnDobtSAjoUAgpmbJyFw%2FBA2uNyo2b9%2BRD3Mo1wKvoh2sph81LTF1WvaodNTO8uZmQi8vZNgbObaGEf8aZmstjwVFDpi%2FtCx1yzxe%2BwcMS8W4oPHiPm1JeY9ZHKKTRlBOMwuSrJE6lmNdijD1f0MqIHF%2Fq03TS5leXRSVGwZc&X-Amz-Signature=0d5176a9bcdf07b917e66a73674e5d0e444da76cfe58519d81ff18553509a44f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

