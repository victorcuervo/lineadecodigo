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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMQOPOLC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb5nKUJF0flHNUE8iCzupWFcEsqmzLOCGLmUaM5hDvUwIgc2nk8zq%2FSCG3jwVAnm9IbcWJOLCL4ROhm0dpLIdkNIEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDG9XJF58AoL%2ByiqeEircA4bK1ZIb%2F%2FwGfDgk6GUfmQC%2BSu%2FxXz8yqS4TORTpSRCy7WyMQ6tBvWxhh0DKMeL971cvAKAIv%2Bu9mQXLGeMImbOPfNZrn4Uf2vZKZfvoIzoMCgU%2B%2Bl%2F4Sn7VUBbyohERGfLnQhy1iLfuINFXca9og6%2BqCz4P3Z5TsbOMGykDvUEVCkuCn7xalEFqf3glSMG1r%2FFTIm1LR1jeEVhZHTqYbZN2cCFS514Tx2Z2R2VmcZ%2FA7vrCi1g1opyMkpnlBzjVG%2Fg08ohHwnzHrqyw2lFjf4il%2BDaIV29KZXaafMxESgjJLXxoTd7NPlzylUDvG%2Bi1o57BAoLQ5lMpe66zDikQzbalwUU%2BPowGMn799I9E7jyyzURNV7ykpSeqGCoAVTgA4qK552fumo708WH87tXIuBGkZL5%2FlaOTor0uNoPAGXVVE%2FSPbeTFePw3q8NqyXGhzziAlx16zvLcWWH5Qy0ahHWUOHs6gs6NLhw%2BE4fqseyfT1I0dqJiOPn8NiFEKoteY32pOC4yv%2FtsyQnbKRmb6282s2ZusiG8Qcsr2wFI2hs6AT%2B2U8UJdNOnxE17JF6VrFPQJLmuq1%2BRVoh1i69DhI%2F8M50QHoM5W2Udr%2B8ovBCxnkmNrASKvI1BKTwoMKaPzckGOqUBU5Tfnu%2FzlvVDI7FR%2BL2bV0X5DGBr9UhONTQ9UHu08yDEzmE0G%2F1yZoHjoxI3khAI2pUYqWN%2FN5hLP9URzx7h27j1rN53bqe5h265wJFqS%2B9k1225PT%2B1HQfzTFr4BC%2FyJZNCV5JsOjBVMSPyt6uwypiRr6AIMJHmiBfm%2FtWZQYBbPeihhxnpSOgnOif9ygMSjwgu%2BC6Vi6xnYwv0BY%2BiNRDZwI6D&X-Amz-Signature=3b7d7c6f23370f08ff47a78b9458b393206f4f63c892a922567d25ca4fba5632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

