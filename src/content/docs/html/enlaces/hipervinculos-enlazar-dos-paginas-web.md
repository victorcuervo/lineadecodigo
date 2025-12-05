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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IX4LQVQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVfnlSQAQyUsVvbqRLXhbCRL8GWeJ4ain1hA3vBS5tUAiEA5N64ktStfm4%2BGrLlPeb4XciycDosj3jklS2BsqU%2Fnvcq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKmi6K0FKBFMz7hrHyrcAwcwMvRrqf0pzTkvoTR%2BTeBL91C0AxrLXhiadoKmi5F3%2BufsOPU0WyeLjhZQe8p%2FIXaCQoP%2Bl7OOcgCUXkjCS8xmtJTVcamD7w6Cw%2BREmxGkjFd31GOMhwQeBVooI1Rpyj6Te2auKwv6zEC5tWpD%2BvayPPypKp8G4%2FyY%2BdBQWlZC2QM9hk2%2FxG2d8iy2HWl1cshBdavjrKmGqJtVfAgcped7aN08AFtuupWhOxv1Qlwgc2GE9BbNTUF6HpQc%2FMsf5YXvof%2B4U2J62xSw14m26B7ajxGYpLX8njCglMRHHlGihdUx%2FRO7uEETwfjN%2Fw41QRBd%2FtI0AecwGQ5xFSAh3FrCW9dowWkGvbhvqDg8uh50Od8U%2FDnvOlgVGzgbM6aAZpxknygOuUriAKAoq2dK6jvv8N2yZxAVlznfo050uVvVzyT95wOTSuB2xiWWPLND%2FzPnaVMiMFYA4JDe%2B2OH0o9kwFAMxpjaTG8RGMqh%2BeuRymE3N7lv7jmTfHtfGps%2F3WnadMPZePQw8yDZnsRJggbsz9r3vUGlFxIZ2%2B4cqvxEkfoBVYazPWJzBVcnoI0DIQDD9wsTdwxGGUxz5tNrmDbsFN1ThXAqpYNuKuABvLU3oG68mrbEb3GpsO4bMKmvyckGOqUB%2F%2BKQcW81XwkVH9nRA9Yw4FwtaPC4iq1FarPTxoGBbCSUJDrjThn9%2BRKdQyPGYXddE4RyaoYHl1beoyRkPo97lVjy1kXET%2BFWbmkGVkjZN%2BFpGTScXLHBKO%2Bps8CfNQserM7nhaAz2a3EmZlVmftqXu%2BOegZ1y7UugmnxolPrWW535eBdfp5pT2poGHz6SU3%2BS8GDtRtj3QFC9Uhe1Ztq%2F3WbKnox&X-Amz-Signature=35a30c805a213ac54f8e70510d30cf732c805925296048745de68a393f67780f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

