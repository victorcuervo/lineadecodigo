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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FXJ6Z3Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T000657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvVDeWtCYKfXb38wlFOyCjKnu5BElHEomF7dB8NdzHqAiEA2u36UHb5j88nS9x04JXxpUpQ3ZIK9SZKnszUrgQBzyMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuD0FoPX5nK1ANZSircAx%2FG3sBRWfVYx7JgnUVPUqWkfNWREcCjauTzgU5XFv8D0Lj9sqk7ZmUOKqOleKwuw2%2BkaSEbgsg81smMH6BpaR2p%2Bek5Wl%2FYZ27RLBvlOMTIhWfK3HTn0XJ%2FulElMcSMiTe12SMs8B%2Fp8DIF00cFA%2BcC5tT4iAO7qwaxbQhnWVFM2zywSXz%2BXhErxTYW2UPIE%2FvTCDJbS1R69Ody6jJQvdRNeQ6GO%2FbPCfVg6hfi5KjFKg%2FWbg9s2BB%2FHZ6Vl66R0daKUyf%2BafAmMAUXeK9OZXvek%2FAzHNxtYHIKGsAIwW4R5ah%2Bc1A7qU70EBhbSYdt7m83IHQ7CoLbHOowSbWH2z5VKDmPKNM92z0QWTLFVkJSC3w00Hl1Dsu6u4U0HTh%2F0MNsT18BI1tiaIeURA56N9c1e5Z6GzEM1gZUKd2apgg2Q77oN3zDQbdM7UPBsmN66VlrcdTkszS6NeITGBfdrhl1AbcOfEZzZg%2F6SYLmkyMvmXUgJ8eEO4LYym5awhrNRpxmugQyBfiRyqxhKS38lGJc%2B2xWF5D2P%2FStCMiXur4wjV6MdsiyOoIe1Wx%2BWHwpXN%2FfnrhB7gqkFcwTyIEPgRiIvzW1K7Jjz%2FPlZ2Bije4Ahn6j4OESoVainyZaMK6h2MkGOqUBRpuLTquEJAVjE4ArOQBARSNFrUeusc9qj73qCz77yTAhKQJtq9owKRi91NCGejGD7FMc0C4%2FY9%2Fwm6cdxeaiuyGoPZbBFwjDNU1kPq8UoT4ogWTAueGjw1QoXvNILnjSIukARKFhbngN88d6Rq6Z9Y2FgPSKuZNPSpOZ8slSPOXOGULoDrOaWsPxrJLJ659m9Kzoj3F%2BJR0XNddIJTy%2BWv24K8DK&X-Amz-Signature=365e59d8932fb3c9cdba454758c05357e6c89ba342214af2da343f741f11bd21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

