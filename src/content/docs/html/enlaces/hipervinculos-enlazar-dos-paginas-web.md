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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MRLREF7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO9%2BCWcCbN5plTSQVaxQMT2aNRuDGc3cdA69L4zW3CxwIgTPJK%2BcYVVjAUW0jHKmblwUS2z8vwR9tdSR1fEd8fDjIqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJri60MnAWewe3qqQSrcAzN4aRPG1OKEsWEmk7mKPR2r6NlmE8gL%2FPov%2BjxRsRAqqOJQQVmGm4a7BPrwkvVg9edgMrjo3izYOtAPILuEAzLMkhxDTcG6EFVEe022Kjt9bmiZgIdgINGWXLNI9L7rIUctPKGZKJvT%2BLsVPpRjMadd%2BGfd1dLvRZHiHSOfh2sykryX0%2BHnM0HCWCS5e1qdmospjIb12odcMnf4owi0t8Jc9TB6aN1NvbtFHH9kSxb1vv2ECwj%2FfARKTvt9%2BL3Vpzh5jSrAAC5lTnGOUSbefr2EV236y6L007K49x9ywP2B%2BoZWo9fgIozBrzRcxmtI2uswzK0jhMDdS5E8mYVGgcpRDxmu55lMXUv%2BNgHyRtCtnjT%2FHRM5oaj%2F%2FB4PZGMsN3nHvsktjZWv1jv7jb3v%2BY4MXQViyZCRPa6NWGddaiCTszN3qAzLozfuictdoCKzJLtpWfIXs5z4WiRa6uUsJ%2Fs6Uq7L8I157TPg9mV7ncpbbThJvt5Qr%2FRQSX%2ByH21BV63WfhOivT%2Fn8IA%2FHPxiJbH6nRF%2FWkuW2zGx7dwiwANn6yoNMSuRZGRepS7V28gRuqdbdhsuirA5UMUem%2B9A2Kqbv%2BWvqbuWhco8XshDoEBcaiGk6go2JvR4HJFCMIiI38kGOqUB4%2BiQKVu6kKMK83YJ%2F3nrUOaOFZLzEFynPK9jNubBHr9e36AwjL%2F%2BRsvvTDFdn6zh3KfSVONU4TJTCiGkEfTbLEYTr%2FklEAKFRIY9%2FiSPh37wf%2FyrMW5u%2FnRD9P088tFi9CoUsSEgZqn9XFlaLAyqHGLb0cPaQKaZeGxyFvx07jvQrwHulJ%2FFjLfiDR1ky2eYoEYQ4umB9OlfdxxZ%2F1y0uM9ctSm3&X-Amz-Signature=27286f9c4c58e739926450225a332f7d504b404cca359c15c0f4bfdec2c5c123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

