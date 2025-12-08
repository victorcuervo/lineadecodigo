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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSPMBD76%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzITEwQsWLa4VKRhmU1a0EPMT7%2BZcHMX64hmAZLx7rSAiAjiwf1oACay4FfOdFT%2FnQaebCaUpgtEFVKIN034n1T5yqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSGjZhFZfcylq%2B2YUKtwDwJE7ICzFudn9m7eclIwjrm0hYX%2BR0bAmhbKoVZqiJlaJOhdYl4a%2FAoZYkEP3ujiYeO%2FWpYQwOAcgENJQIvYjW2CqAiGSoYBt%2F0ndCQsxro2%2BMr%2FQtS2vQORd9q3teUrmLkJdj7g25yz83ipM%2BWrN1niC3DwU6rO%2BgqZXUTBJQ7pvD3F%2BnbQ6lJ%2Bp6NatvEl8tYeu6urONqeqWJv68U40lKn1C61cktMX009Fw9cDiOV%2B97iTbm5wgYgUWVrZAfZudWhxiQm8ULciiWpv%2Ffe5jKaaLg94c6FFVWzPjllnS7%2Byq04BLCtUv36eDMhjzL2pVzD09NVdfN5JkQh2mBxPTjaLWpmYfSizjVAkzF4vxnDS94Z0BFq1teAwgh2CAvJ%2FN2b%2FhAiO%2FxnsoX3WxqE9avzkUPaBNTEeqJh0p2NChYR6tIeb81D0ws4SbjsQKQP1AP0BWE8tPKUwuluhXX9lfHoiNSZhBgw8Win%2F%2BAVOvNsUJIeK0MclmWOP5jzI5BJ2fd4NmJWOXDt6FWVWV9CvcK4n2QMep%2BdSHL5LAfrNXb0TeCAd9sOT52l6l9tdcM2oGwXsqI6QFLg5AHIAFzq5niPbfO%2BKlkm7Nuyuf%2FBZ1t0I%2BgLdC4RZnEqm%2FtYwrYfcyQY6pgGrYNCxwycDJ2alLE8WDehqOUBf%2F7GtROyijV%2B5kYLnsYeZRNUcDOVfODige5c42chhlQ6q1Y7coh00l%2BY2F5%2BSLWLBM4bpa0W2c9mU1t%2FY8OvwOnifdNKtgioApdiIlcRyvt55W%2FdpE%2FFXwnQPkUY0GkHB88hzxMTbB3xZ7tNWBOy0Vb0UYagL%2F4z4a9ZVLhqYNu3xpfC7nPMZkD8WsUcshA58jtJq&X-Amz-Signature=f9cac1b23de0ee7b3bd1169dc34b2322939dd539219ad7841e2f50cfb22313c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

