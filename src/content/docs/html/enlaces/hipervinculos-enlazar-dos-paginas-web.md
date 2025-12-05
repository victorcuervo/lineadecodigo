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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FO6GVCI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLBNLNzAPDVIG4vqRgV0%2F37O5ZAaDbIj7g9e%2BizK6J%2BAiAA%2F1jeAXHdF%2FtB6vZmvBbReqajprtAVJ7AZ2vp5rwPPyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMir%2BgmgEtOqCElBgPKtwDjWJ5%2Bb%2BQX8%2B3WeZ7lcCLB7vJkIGJUUlkeZ9K6ihMUXv%2FWG4Upg64DtDe8DHxBrMw%2BcP2Z2ZT6LwBdVOC5KrWsK5BxoG7HB3qmxK7aRldjH5Z0NAQszFJWCiykbUl3CNWXzNO79G5CZqqZcApbOe7%2BFtEOuo4CKMk1Y9VdZDvSkXfqBDrJHYHuAByjAI3785E35iuiF160eCNseQRHi7wK8OYDj7FxFMkdvWTjtfr5ad5fljw2XMGFLMBKSieuPKUzfGoVrGZhvP83A%2BkR02qN1vr%2Flu%2B%2FFOalwDVixWfdWhjTtv62d%2FQXhprdqQJYpNO7koIz59OkL4opMALHtDOmb87b5oo%2F%2BR2zfOUA05igtxWAEw1vYMUk%2FQ%2BgtCU0lzSYok9ubky5hFddceS7s%2FegT3rVuAovilUscX%2BxMpp6X4nH6a1s7lExftTgpDjxbBj%2BHEGpLLmbNgbfvyq8YCP23qC0G3Qiro8XQm%2F6b6FaFmweUrgeiIraiNtDFLQqhluYg0zsvOgJ8xx%2FsBnlc9bs%2FHTx7769JmZJ5bktXaM8%2FroELHZBiUNwN0gO8pfNML7%2FtigIfIFmZ%2BDcvDQ2cl%2BI3ntFJ%2BEZeRCuCLXBQUsbn0GjxERkIVbPB%2F5RYww%2BIvIyQY6pgEFodOEqssGv7Y93umkhzCEakYR6r1J0XqFYMQ3n7BrypI9j61APLTRW4zxXXXDZKyU6Zjx8g2l1%2BSXSymhlphFVb3SHgOhJmBht8QwBLelGmSpVmmUe9dBa9ryfFzWY9pImbY2pZaqkUzwfzXeBQf9696QMooOH1MeNshfzn7Oc38J1QhhWaEM1c%2BKT4ORAyMxlNgQ8BeaGJLCvULrLxn11N6ubOPk&X-Amz-Signature=a0325592d7fe2aa19bbda9bea23e4f1b95580c742cf04bcaa73329c0c0354342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

