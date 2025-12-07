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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W67IV5S%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzdCPwTy1Aaeat6KeksJEA3PSpGEx%2FbVnI17wjxrDCPAIgRkBh%2Fu3lda8hDRl6OQWvB3d0GKy3ECLmCfMT%2F2135esqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwMdzyGjjveQ%2F1aKCrcAwt424owJrd0KetMgViH%2FIxMBqW2Npd4CMJmQG2%2BfiIz%2FdWQJ8%2BCwfwxMAqpAASW6urjybpxXm%2BxvgIbpV%2BFvdy2MM7sjma20TEi1GxkB6x5UlG56UmuS%2BMFVeegys4H9fkB30d4BEAD67MdD3VCJQH7TPuN7WggljJcLaV3LCHc0xCKsIiPQ0Mi8%2BReedFRA1woOH4T2immiCTAJ6wPNpx%2FZQBS93T7gOrsGXqC9OKqqU2a5UTlmppxv2eBctr4s5CD8EKg3J903MwU9ySFGZwdV81XYJNmzQA2%2B6W%2BcUSOBCPtXJt5ktRctiHkeFsJAyZ7usuuHDEZx6v3Du8RsGQzp4H7nnXADU5PMUvVcIr%2BP3SrHUmV8yXIpLqudJAM9YuVr48r%2BFUmCEqdkc16pgsKYmaV8q2iT9Xuojl8YZsjqTZbCBzSE%2BMWtTmQlGcuYkOcVYydKSeDJfxzpoPmNyBg8Yv3ZS5WDwyLnD6cwuruAdlXTAe8SejnMnOC5qCYXyGhlVxXguOJZmF8novNFXPJP3MK9Z9Qm3ygMT1Ge8V8KnEhSVXvQ1WedPuYVnMSzfMfurseENIa%2B2JqBLuHcjD1VD7teXYW7CvyunHpJ%2Bjdrg2Bqu820t12920YMNm71skGOqUBWaeJ%2F%2BdINylDXmZJKYm4zPKVX6Ov9Fa74aqdBxhoAsMiAdteIPRzRqjH6X41DfY44K98DaTfv7ZNIQ9CoRAqk%2F9Im1Ic4%2BvL2V9nCKvmrcbYkk1RgSz%2BNW7fdE0IznSk%2BsNnu1lX7Fh43Ptb6G7Dna1qc2pR8XD1vudoy4O%2BtKqijdspRXGC18HJyBlzNig7NOZXk4hKAEr5RcG41wXZq2UcZWXX&X-Amz-Signature=1f0e9e0b47621ab5e202d22ad87d8b3e6c2814299f64184c8402bd99e23888c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

