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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAMYQRME%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEoDA3I3xs3N%2BBV%2B6UOo32o4zy76RuxXRbwCJnbB8v%2FAIgK9W9TbMtwBeyL6HjJTQcQdu7a3GHMZuePyEpM9eT78Mq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEjZrOfhlR%2Bp8Y8sDCrcA7FgK342A4kf7a%2FzjzU2Jc7aDlriIQIpNvtzPnXXk5M584QYUAFyJUOyhbpVOHYe4L6JHoypcovRes1J%2BtWWu%2B2IxHOWtoiYNBWy9xjZo7Z5rQfs6rw5XENBWuF7%2FbYNWVyclpV6tendqM3Md7fa%2FRyFnvMm96AsXsUf1ydEvvVzAxAEOqsCcE0RyNBSD9fh2MYw1e5tFfEZ2n4uR2BUW5CQ9Flf5QC3361yP2GeIAoWPAvJHM1%2FeSmTxjjz%2Bralp7U8nh5S%2Fu3zj36jh0hDRE%2F8yU8s9Vo8mV0vL3RneZPdpG8Jz5Khmi892BiuCVq2ot71Nf3DHBbp3w5Q4JP6%2Bv2p0Iue8M%2BAhxySA1LnC2wC5hMU4ZX8mjkAH%2FeOsFi6Kn6FCiK4XX5LgegO%2BRMzXXAq2XSGcJTW5ltXCPAsiLbwL3RbgSXVDppZuSkXaDNikFBaOulFbo0FGpeoxSNap687lKvYJCb%2FaV%2FYdS9Rn8RbKTcY4pRLfgiJD%2B1xJAA%2BPxM8jKjZQ3sYm7u7npJiVWSxbxe5LsjLKuZK9L1%2FeWno8qNdhY1FppwONRDpNXHk7NSeivvatGByWOg%2FoA5wyGlBfJkeg2K8wj3dsMwiW%2BATklSegyEwo3N9O%2BurMICMyMkGOqUBrGcaRdXiHY7I42Lc1ybms6UDUApHYpPK6Cd0HWl5ydAJtxZtqjFPW5BTDrHmnsAIjGMbRAkh4QmFbOV6kirQ75L12oBxim0CKKkJYhklZ38jchedMM4D7wrNMsCcAmWdW71eW4naD0aV%2FSadbC1Rbwua%2F1dgT6WGN02hEXPM2u%2Fsc%2BVE0ZQK%2FaabwC%2FsRH%2F3SZk0iL5UA5oEqgq%2F5kRp%2FWTTa2lZ&X-Amz-Signature=232dac05253b8043c752d81de622e612e889bc0df703595d3d003fa44d2e744f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

