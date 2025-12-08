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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SJWXKJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgvqkUJ9oDj1ycdCNVMOePPedxKdLCbuCKMMbB62OljgIhAJ3Aw3M5Epg4bVl0oUg0fLVgy3optyIt7blaOC90WCHXKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvJ5xMJ%2FqaSf0AxEYq3ANMYmChAQsfTs7CMmI0ycxlkCiawowybcNzmr0ZAbHAvHBTcPAh%2BMYPwwoUgeuiQItraClVxsfQY%2F%2FgmFuxlMssJXQjah%2B6bcmPxU%2Fn9eqZzJbJ5qt0qAKQRfhRTFVp%2BbjQAvU1uT6sw7PmAnj0t13XoD5dJZ3BvnX%2FUO6yh6Uc1GmBB7u2NxjV2EZxjszv2bdBsKsJkiNSvXWhgUCd4GCw%2Fa9fbPm19m%2BgY%2B9Mng%2BH6USava09xrF9qC2%2BCiInGYdZngGq9PV9rVAq7N7N%2FhLHFkS1M3fGxzc7uiJe1eF5PI1oliRmrxjd2MOfc9QQrLbT15G9%2BhZah46akxlkQjKyndNJ%2BUCDmITmxzkaWidcOf1uNpHM3p0GhLYArNmbU5GITbRXkNdmksnH4KYH0SHV%2BqNh%2FnAwpNFzc8FLmjvwJ%2B0Lb0z97icMN3svHNw3HhAdpPf8n0JGATWBtw3relkDjwZAaiBVfhF3fgh2zpbcgmsTuZvDM4yO1KTsw5QnYOX6Y8DK3jK4a5skUBwZ5SYBdgrxJcJxu0y2gTntbQMABVEAcELV8j0rpOa0Td5rYwd1WFcn9J7EsoxuCK649UmgpyFhFLMPOlGHyVpnjbJupHtVSQ7Oq1QxdyOHfDCe7tnJBjqkATZvpcDjQrDS4XVttBuF1pFYQxFsSU%2BiTdTdV9%2BjEy3LeWPpTNKP8yr8hgBKBTILA%2FD32DPJ5GBLFdpR296%2Bp3pDeH6JoZnKxApFyC1Nggc0YFGQjY2j4QYyIn5HNua0WJ7qfhjoojVeYT3nEDGLcd3buFkXNXWHl2yONuA6zFQLqkm9qmTI7GM9GgNdE9LMwsY4RGsH80Go8D9vsewj%2Bx5%2BIYD3&X-Amz-Signature=cbc0159219d90d6758eb4ea602a631d227f9bfb33b3975d1b1725cd4c4799ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

