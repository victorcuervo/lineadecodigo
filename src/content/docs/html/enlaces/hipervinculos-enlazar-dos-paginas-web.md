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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHSVHAU2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSXvahDxgJjLAP7G1pc2DIAxRCeNgwcFpc1FXJXf5N4AiEAmS5f1%2Fp8Q2QBwUDXLrEjvqOS6opu42J40gibmMGgpwAqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkxBfML5p2TQ4RLpyrcA50sNLqm%2FOwWZboypTlX0Z4hb%2B8bU7ocMXNKGEj464iWTKMqIgdFo4lsFEUFw41qZ5ldcCkR7QEN2bKCB4%2BdITReqB6LDU8ubdMJraKvnJdkoTqHH4ihSHFVYVwr9ppW%2FLJj6WuCPy2M87nuSq2Jiym6mJFbtENyEE9CgUHwvu7ZpfbN2eGaK97p5TDvGeFt03G9P4Axgwi3wOQmtQrkf%2BMQKCmdmlMt99TUj4oyji8KOvqU8HKPVB9ygZEaUYl%2FtoOLSAZybn8RLwO0AQheDhZ51yR772JzalcecWmTz0ydEPLMVqiq5AnAERD3ZhJkd0ucYmHP%2Bbwod5vTXQQVuuzK%2BaLA1NgW1bCCxLf6CYhFHPC9OjqpJFFHkpkVVC2YlC3JMGiwtZrcpyh8pyOrSII%2B5TmB4BC9l4gEsdsv9568fBm%2BNl5RDlvBG0hHm80V4PkwvcLjSrncRkNo3egaR70ZBL3TAZEySH4GF0%2FNfbl72qEadsehUxG1QIAWfnxavd3U7ElWmqVqNyfOfJ5uXjA7tiv7rTFWo0PUxfkhSAIxQqmvYuof6kg%2FKKgyaUNMqoNpV%2FXiiKe7Q06C7AZ2frFyN9orK4dix2TKtBEhUo%2FSlu9ajea08wkgrPxKMLiF2MkGOqUBw8ujqMc0goQ2TghKousHSUq3OK%2B2FGbpYPTRgbNn4zDOhGNEmKxUzAKyZMKzHze6vTS1nUaGyHeFOFpnjCED9Y59cA2tTE%2FqrrHhsce48hsxMyLpPV%2B71xaOHbp17YvIyJZRvKa%2BP887%2FCqxj9i060XiKtakFuZO9hL0aKKQxsTvvkNoflguBR8AxN2Tn6bEW94JwPgMAYUbbHytEP1NOfbt0BF3&X-Amz-Signature=c221f9320c6d6ac26247cd100f9cb6ccda8b92abb132ea2c24e845c584d45af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

