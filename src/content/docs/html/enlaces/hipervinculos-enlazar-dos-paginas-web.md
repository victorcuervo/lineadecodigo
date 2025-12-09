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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVRMJ63V%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T203829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAN31GYNtE2PKQ5N0Gd3celAChP2gpuc%2BOPBKGjIFGEgIgBj2Orb8zBsX6rEoZHRv2U%2B%2FVjUE3O6eRtgu9OOM9gOIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPD8IrYtC4sq9KLzircAxrxvsw0vlihEfBRjQKmQ55siISdWKpLZsYZEjGicHvu0CexktCdAHpOA9xoMamPS59yaBy0Jmv7b7AA2fZRwZ92UrjGspTNdBRInWuh%2FK5H8jF25lomfIOxU3DDcQzBreDGa2Tp1oCE3bxT0xwQxCveHRTrN6Lv3uvNIrq4%2BVGHW78RMQosHEWcrPTLj3LHlAP6bN5yLycHOIhGz63zXvbfZw0hXyhKdq2BQGfyF5nzL%2BAZ3WI98GPI3EXIcNYkJCR4xkWk%2BckkwjavobI%2FUoUrr4Dt8tmQ5dfe11fgKdOHmb8hJbIi2s2ZaZGUt8wOb5abrbjCdCcHmHUOSUYPtVOZoeNuC84%2FCxL%2FIB%2FPqOQ3uSm%2B3UmksKYE41vdHNmhbAeCq6GAFwaIRqS%2FYVUqZjstDpXB%2BtrOr6knaxACBMScxHqOEbJlvVZhqibuUGD6dY7pLhK6qcZh0%2FkAsyHncne42fCFpYYLQKXFQ0YldMTF2YMHo1xEADga6hmGDUseQtzhIEczGBjUAE3Z0Zrb%2FwS80kmm80DPiwzo5q4KuOQutFEAIUvyzH9Evdvyvj4jxGjVVYXoZQkOYgfo5PCF7hHKBKqlY8%2F0c7N11Je9DiN8CroSQ5luDA2GZ5FgMJv%2B4ckGOqUBxo1hjjPbuZXaMVFDGEHX0GmsQ70Cz5Yig1RcApv826KipvRc%2B6%2BRevPzJZOHYh6tyNtevvTWUWIGUSifKL1c9V9O3WPbDLJMqciKXw5qW9hBZTsuDLZQCtl1Ld%2BpBaF79Y85bvjOC%2BQn5wrsxAEifTUtEWahO7fPoxRcZGwVvJ%2BBsS18DiaBbC%2FBcNhrgK0FnhQ4r3vLCPgFC0wxaVGZ4Dsfeapj&X-Amz-Signature=616804b1e1d25cb26ecfdfb51496363d910d1b36b987a1fa4cab7f41a7eb941a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

