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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNADXZJH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3cA40c584Hlir%2Bl%2FG9zxsMSheCKYSt5bc0501KES7jAiEA%2B%2BF5wsn5Sb2w1UQ6wA1ucrT3Obt4WSKe3ZtgX4TnJloqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxjPqZpbgS9hnGSLCrcA6qGzvxw2xIbpR8csBR%2BP1mRj2KWPYRc0zsOOzqnTfegY7fXukhhoFuK3VJs%2FAivSROOCXntR7DzRHEKvLS0daOCgxTXQBdTgJbH9eEqq34b%2FcPLLUJRrfemCCwHiTLlodyDKMiB5ERfux98s5Qp7EuUGqan7n1KCWlAwMv1%2Bp8cnGVJ4DDnpeQSA48dsQhLbtgFhauKVhr4GSNa807ajRGaLBhtppEv5Vo0tI41xYmIloBRQqlNnoR4ApHJPZe%2FK%2BHnWKZLGAnmemlzdBfrGI60TcqUexAVFKRUCc%2Fg0HejXrsdo%2B2ARHexezPSR8RG7tBR8hLZHGOEpe63SDWvde45a7MrRm%2Fk4Aa6%2BYxqN3OtXJMHJC0bB4ooaHmjDkdc%2Ff0tiC0TMQvWpQwZ%2FX4%2BiLiMaUS6rkyj0XwEI%2BBqRoTOACOVxCmuwIXJxS31LS1qbZvX74QJ1fhP0kuvShQwQ10qxp6PycS2icQsL6%2FUw%2FPCBYASd64XJYgI2V9L5gflUsSot46MPGh%2FxJ02HYDgaWBScw0QGi6eEBGziR2kXsGIWqqyQH6RpTOEF5Tc4Ay%2Fj64Kn7SIwfKxmi7LKmC6taVZ6gJZuvRbADN7IOB%2FdbICyDdOPyv95e3h4YnfMJr02skGOqUBTKtLNEUrgIdYJNXI3Z6xqorCY18it0J0CQ0j8SecvHt1qTygjSFwTxnSF0xkZ2oEWbybuBIMXOlbBVBR78uPNMyuq7yYR7sqyKWFAM5F5r1D25u4yaP7%2BFH4CQiYA5xg%2FzhXnXeJcGFY4buh%2BRuGf5UDqL8sAMeoIvSNumhlutpLPBgqwHFX5qJHoB4PdegWNc8rukmsBVro8P4gine6P%2FaFMQXw&X-Amz-Signature=94258b21d1ac3994dc0b0325cba037c9def4a47a6f6646fd0f9a9de3e2d9bbfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

