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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6TZSPG6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgPXOuiaSKulpF%2FTvOMums6D2%2B8dbDtEUxHicaKgYsNwIhAOn8WQHiXQFwWO%2FM%2FMBHapIzQ89ddqe4KVDB1bvezWlsKv8DCE8QABoMNjM3NDIzMTgzODA1Igym2BdY4TWwhRgMA%2Bcq3APDtur9waqXOXy56UNnXRDeC9hAkPicl3sV9t523uCDRjNJmtTfcrirnZbrEcl4dzJ8xSVzbSCyz%2FsLW6Eecfqh2n0tS7TsNWWnGlYK7Hg47rGzMLg7rp6%2BSgV8mzX%2FLIJG7MkBk21Q4Wu6Yx05g1%2B%2Fm2TWzR3loROyGFqfLYVgsfZKl3kg0V%2F3xfuHk%2BGO5nENnaLhtbksmRfn%2BwVvKJ6a3mrBMMN5%2FVWgbEnu1JocCnXr6VF66phrxCh5mzZU%2BkhdNZgK1FZCAlO5jDGP2wxS6S7H2%2FDLtLB5trYBr3hRmLps%2BwUwEoxoeVUAJXfGG4Kab54J228Pu32QM4DvcLPuTm10C8Lv18eqnkpfaKi1mQ4crHp5ZdJ6reozKM9FXGFEJKF8GzsN2ptaNb1SGR0%2BL4xFE1w%2B2TdWj1nan%2Bbq2ALjw8ZCL1aQZMDeR4lazQu3TOhBi2OAnV4%2BmJiiG2m9mbKiWAEYlL4i7j%2FpNjC1fVvmUwT4YMuKYEVQtFzCGkWYIoNgfr9izXQeuTByJt%2F3Is9zCrloikAJqaSYFjZ61ClBzM0oAJQhAIL7mE3DC0FPk8o%2FCItI5YzZh0UorVngrk9aHCGJEiro3SXd%2BXj7yfBr6tRgSHoU%2BOgYPjDXjMjJBjqkAaACA9CVHFQVJ8M8%2BzTiHGi4f%2BzvrOROKooLYmzYebMowdrC10ASWubwXT104iLo9LFG6Gsr4ifnbd3FMSIqAipeYl%2BFYEa1MpgsA3%2FSQ%2Fiz1%2BwbvSYb0W%2Bo5s%2FR701xJvCsYYRVDS%2BZcYi0DA%2Bo%2FI2MBhhfktdCnpYvVzAU%2BR6C6BHEePDJhNWRZ0gjvCpQwxkLqDKRHiDltsx5gD%2Ba%2BhRy%2BilB&X-Amz-Signature=504f69f5aa617d03fdfe26c8b6845e9d2875ed9c51c4e436c5277e9955297ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

