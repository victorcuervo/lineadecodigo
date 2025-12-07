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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO2WWIUO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgSRlUh6CXLaIche04qLnIASK2OZZV1JWodv3S1LoYfQIgC4T%2Bi%2BPmvWqUtYhePBI8nHt1UgE5VSLlU0xTt4nlFTEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhd9zekDjBvQLHFjyrcA46As1MVJWGWXADa%2Fln4wWRIUIYHRbzvABUB5IJstz%2FYqiaJCIPQ5ILeDZPEZMaeHbMCb6BNJFxaY2FSKD7DowknQaBRwKnzOQsy%2BXqq33Qwn4q8YAF7XNvELst5HwVxVh83c38WC2mIhjTSJq1C9f0u8U2tvbeTh9%2FT6ui0OGcDRE%2FpWAPgnblLix9RwmiOp2fLEUyhytB2449DZiojuBLF%2BjgghVdax7pjI41OLiA7GwnkP4Z6AJVMfVaqu5cK3oSxK8fTVPhWTCvWPYCxz4NAzCxUWw1BU0sXzXcVPk4Agbljxdz49QNb%2FYtPTe69A2m4KPa1r365ejnfEGFiYuIHuLlPDN6rUp9SGDPx6kZNbsGlgn8mXRfNubBJSEFWmFTbH2wGYlMVG5w0HBS8XXAtqgOxM3YkearK6qEk4eG3czSs6kl6PqXEEzvCtZ7FFhbv4FXCBmPIsqZle2AED16txT0Z%2FCabJdIunyd2e3e78l6wsi82fGNyVBsryBpbhP9ExFAZMdfjx%2BuCCgIStwuesFRtjib90MzTi9vktSUbxi%2FWOwVGHfyHV7EvwPZFSh3cVcZZFlxtcGT6FCiHHIeuSH0K4%2FOQ1yAmVfG9Pb5v7tJPcip9vet7wEzxMKSZ1ckGOqUBwtZuIj%2B2jqlU2NAgNirSQc%2BC2l1bmZLBQIeyyAyQA6U6OEwbcHH6O2oNPwT3rw0UShHWfTj7EydsL3%2BtFW9M7s5N9lxp2XMQKGvDYR8p0NXqLrZNbakHRBIK%2BcSTvCz3%2BSSY5tZS9CBvmNaxarRaAnANwc%2BWSSVm6g2Y90faLWh1tZrm2mn%2BAA6v7TncABAvGJckdWnjz47Z61lRpzzA%2FBpnMGb9&X-Amz-Signature=631cdc124af7b5a785c8cae3cb007023da2f0225e7db50da005eb9d6df79cda4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

