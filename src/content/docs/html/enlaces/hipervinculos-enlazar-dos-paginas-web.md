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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PHIVBDN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T143317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBY5H16pVsQOnE1tifHCbgif%2FfU8Co29rOTsjB8mVLM%2FAiEArefBQa%2B5Vl2mdAoHWTnmFpvekpWl7LT5shgA3uanRJIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBdPtDAEkSOlaIRSfSrcA2MFm4lafebMpw0XN5RtthEw19zNCi3%2B%2FtmTNZaZoZlyF1Jni%2BLok5hJaA6P0kIgmEu7EF64v36IZwWb7RJmeKm3dIdpG5w1J5mTqqnXQXG5esJ92SzVyKUGKEOS0PKcRNuEmQ3CDG%2BNQXnRAvh9FptpHsHMEnnFZqbA%2FAyYd5rBXC%2BSiGAlUtVKBIcPmqFV1NsxVFrtKodZSB4XmvjNGvBgzWFIC%2BIgoHqcl5n2CVdnr8gsbG%2FSu8ivJZ%2BVUnciSFP6b2VnZqn0r0a9Rgsh2vij8II6n8sXrVeDcXDHuujL5Dxeqe%2FYQaj5%2Bv7HSWFgdVelW0RsHfBqoGd6V20ANhZEGPo75F%2FBTypFa8wUaHM8eKTImQx%2BeAopINd3vm2qvHadhj33CBFPqdKAb2wbZSLhIsIyoDl7SSkXu21uKcZkAt%2BFZkHGc4wbqBe5gGeHi7pV610E39dExkQJ9SN6r8p9LDg%2BEIsVW5IuOYnIJrpUwNJkAfScfYHLfSkAFkuCE9fMqhFv1xaI1S%2BRy6OCB1kl41hR4d9SS5ZHq139bZwj07LlFxoo3no2vivjyY4OiuYCt%2FE7VMnvCdpyOgV%2BK%2FHTS4hHJb%2BmOvR7PIA9mNypMSmkvULMPrtMrGXiMLGm0MkGOqUBUtZ6VCYvQ7OpHd%2FzeYl9HOnXLHea8ztaurBpxem%2BFsRf4gN6rhLuUS8NM5%2FIsVa4PKEwqiGb0XOZgQC%2BgYmhkuXrwJdORk7QEzlmF1c0jYJ4XFeNm0N%2B2vCSZfeoaMOrlXVSxPnh%2BhU12qPAU5ERXvRasA1vG4FxQbIVFsvkDCU6d91KqsyhJlfPMrUfmVnorCBDAENBk7hYdIr7sQ0k2bZ8j2Kh&X-Amz-Signature=2f634a52b03b8c769bcb6bd2f9942680cec9e1a9107dfa2fafc2346da5cd64bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

