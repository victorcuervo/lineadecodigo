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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M7C2NBT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC85d35tqp6JcOQoqqnuZQK6UHST%2Bt0HWD4Uyvgof04hgIgECtcyNgvFcctI3Za4YfdgM3Xp58J0o7%2F4eHUa0tdZGkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3oC6khHABWwdXksyrcA5UKg%2BMxUBUWvLisMjhKjUJH%2BpN%2FEwZwpdvZ5ScBLRxvDid6sl0fEFU%2Bp6h%2Flyi2JSk7HQWh0aSWOxcFZqQ2szhfLBQjFW8d7w1UApZyOc1PQNYTt9CcqTQEDf%2FCBrcBM0D1lLsDqNrKigc6rVS1jSz4cU4BP5tOE4T2w6DweE7dq7z6J6ICsV0Noi1JDX%2BMKDUKBUPY9vHspg7A0MK5jXFmfXI7Q6wFDAzOicKkIoAy9SDTcqikF0tR3fNexzvc9q6zt1Vo0d0X%2BirSPCAHpkTZoqIaqOuR8hZ4tetVFiDXL%2FueNQWZNt1cItnhKa6ulF715tA9KhAUi3ePIkGu7mo3LWXNVpoReJBbFs5EgdP6GHX%2FON8GB8SKcvtitNOUlUKdUCdbH5JpkP4s9It2UsK9Yvd04H6B1kan5WTzyhFAAOVmRW7ufhoqXIjfli%2BknjPLw69ERy5KNbx4gFzF1F79hzOvJByUS1TPTtkEmaeMnrAGGcJaSpc2BLLGAShuU1lYKK2gO%2BaJi%2B2Taswm6XI09k7erDl31IURHT2p96Mufr73YbMaZOhCcOkPJ5gw3kPnRlRNCdLdzkgJuzIzCCBcfPFCd3fuyaQDyWwfObDxwRy%2BbZcTMlCBiBVvMMKh1MkGOqUBFIVHEC%2BOF6%2Bc7lzCEtcXAvQRhPXELE%2Fr3KNnnlXf8u2GrdWlNSHKy%2F45HVvL%2BIhWHrk1q12IY1aXvWqdJfu2AqIS7MPhCLS2U44t852qA2DodQYEwbkKRDriEIXkEwQRHWW%2F7TGJgNkLQlTZfX5rCQ003fgTdEDuWYLcIFAqUiSDtgmQ%2FiEAS3iXTCwbAHRDzOLWx7o1FcOLLsR4od1HLfwELzyG&X-Amz-Signature=6af01b165848899b56a0435aa14fdf7c3ea39824cf3c75aed77a616dd96239a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

