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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BHFMV4P%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsKe6OCwoQEGG4U1QH%2FYBJlVEsd8JJkOMa694lpQ3k%2BAiEAmdD3fK%2BY7AdTPOsCrJjtELNUZyFLehxFznQ0HlDeowgq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDH1XGu5m7bHvvxdoaircA4KJetm8VZb0asC7t1NpBJuM62PBn8yYT%2BE7M34EO5FlccC6bz7FJUzMmnFj%2BR3DoOGV9d2KD0hvShYrIVjaQRhSvzFxW6nH4MngLttISHhK02%2BRjfIJinOAnQAh6c2HtTtshMwGpbHXSQetUFVGfK%2BXbPqGkMgFWf%2BBDhhPpt1c%2FtgqGl6TFvDBrt0Z15rEUapya2iwPXPGewMkK%2B1pcwGHOHje4jPWl0fB7Rxq2ojh%2FTgmAz3BsxSoBZ2p7RPyDe0gkbjRpcKepkjJHdYIFgQLz9sz12Cy%2FyUc%2BMSTgfvz%2FsXfmtUZyXzdiBpWOuVPfQlfVfJOQBiUQQBvtezKyFoIffes2HYZAURWz9RKeSV3Elxvaz9wzpHqpqXzqphQBG15CO%2Fg4ibINLeOn2JTOBh2fbh7M8bnFBLd1KzNbfJcw1ZfeJiPpXL5xYnlQv5QLn06Qaors2vHtOFUCKq%2B0A%2B%2B2amdqu54dE2fOV7%2F7dl%2Bof6Tp%2BK4uN2MMQYlGXlXYvokxNZ%2Flqj3ESop7s%2FYF9UbEhcz7gGKLB29jEPwF3MgvQwnVeF6dhmlc7d4JfA09DqlWFF%2BYxHoMN5NQudZcxgesbUW33v1f972x90Gn5fxHDdJGC6pomQoDQPsMIfJyskGOqUBUEoOZwCFS1GtIXv4Ud0x61SqzurVY4E%2BbuC8Wm5E63%2BvsvF7ihWZk3kdBUF%2BYw6OkXmlP2XJQkcLFDUIWfbWCthgvdCYfG55TlQ6dCVlyTif4mekl3ljtAKo55WCxJ7RneKuHXF%2BiTwFQSgF1ndfJ2YGikXg7CZwOQFAT50UdaZMRmnnIJ8J6hITzqEa9R%2BSs1NLsucrWK%2FHJ5dks9IwJ0hhQmiw&X-Amz-Signature=51f2f8ab24a4b1bf2558a2d94823f4ba03a7173711efe1cc188ef16bfcb7553e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

