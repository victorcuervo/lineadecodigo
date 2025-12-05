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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UUV3QVA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWuwW9hdvR4hdmB9UZyF03oYGkTPiUmLA6x5vdBAu%2FUAIhAMVDTNBnll1%2BlpC1JMeV3lthRk1WiHgNXLb7sZdBWKXjKv8DCGgQABoMNjM3NDIzMTgzODA1IgzueohJ625m3Fc8licq3AOWvHdNJiMPpW8QwC%2FeMqe79Rdo7N854uukTyg7iOT6WGqKOwzAVjR72Bz0VgjPlWsgSQk9PcVM067%2FxH5bjGGtLDt0nujvInPFgIaPqm4ELzUMQ449TEwHrsaGKkhU9btgNuRov4oEEtPSHkHg4MwkoWq%2B3S4Si0NgoUFgAjBmRvxJGJvRx9n%2FmiOW8d4ZQSKSue%2B4NCMUGCv8M71cMh%2BL2D0aztVDQE18OZNvuERl6fzBpC0NIgo7ON30G7LUz5xufEe1kZtQgbNm7XIskR4klgRpfceG8sQVXBO6012NwesDH%2BC1Wx3TUS45zDwwBN5nD20io4ftPY72aaX1eqcyRYFMK%2FLHN3ZXqyUSGDtN5Zp3ty0j6hh%2BOHhNmhR%2BD2K9n%2BylZ0zThaz%2FcLdPQRyJwanJBVk7CRvCa9ObJWdEBehM6O4f6fy7tJU8FpFNVh7FCPzfrOavl1sNt4WfXR46e5kZ%2BNfO%2B4%2F6cmDRVCbJdjC8wDxD3%2BDcS4oEzbhzxaQ8vipF%2Fz1RvXw9KigYYsYVtt4%2Bvo3tRnjnlVXpf9lv29aH91Rx2mnqCQGAQAU%2BlGe6bsr1vgxgrJ%2Bhd99g0kxiVoRHUBelVBE%2FH0rlgb90lrqna%2F%2F%2F%2BZkI3CQJ0TC%2Bxs3JBjqkAUWb9fTTi%2BjealjcPJLvespDPHy1wfPis3S7qSkcVw91%2FcXL%2BQCCtWlmvpabbw1FFlBa0zMbnX%2BQUn0mmjXw6xEWhzNdFrygpWj4zhcJ8TLGyZuH4xuTP3%2Faa5ocW%2BvwcYDFUJLvSPDfN4qgBPU9f6YZdRs7uZXCinCetK5IWBeVVG6%2FT9QRF7GzkMQExD6T7oIfhrTL%2Fdeys1dKn6e5ZNnwOaAM&X-Amz-Signature=3606c7e6c60bff668accb281c95af35f8e3bde816333eda6c836f003aae9a91c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

