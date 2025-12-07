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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664ZGWCZP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHXuHtn54ktzw2rP5O3wqX%2FKwoSTqtWG6yXWbLgrtivAiEAhxQza8gKUrhBArAW1Mjs%2BowuG%2FetzcOQmGRjRRZm%2Bc0qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIp8vDPoOvHgt%2FBTlircA1y51yKQOu3ihgdcE%2FtA50u6R1sFyRLfFYe%2FIeWrRHHuDraPXajT0O2yO0SdAoEiKHshTMvSEiqzw84G2O9Q0WYX1RNdKgejJMHGZKbihhIsNLPOUEhKHUpq4brBR0oy0amV8YJisZ%2F60ax1AulIush1vSKpNp6yvYVNVkWaGLpyJUMP0%2F7iUPcHP9D6I9Os0jx6RTP8qplmJ3XpfJ9NK7vZEAark%2FoY%2BBs42Lcr0F%2BkEf4QKCp4esEqoZwrSdfbkhv%2B6QFplsT%2FJSJVTJE7mF%2B2KfFYVZgJwn80MQsKAdwYhaC2lqAxVDn8HDk2N1%2BJ6BOI47ZwBX8l6Uo63TWPMs5mY0FEEHJA2q9RavEjF%2FtpUaH1TcrjiM%2BvUsG0i6kUeCdyRb0LwuQTJT4gigo2n9P05J5972PIbwmetI3KtKqokBLGAyAMcp8xEgj3cZf9j8NLRGNP6tCOXppUrYX4TLUu5S3Ps02Uri9WYg8BhFCnXP61IuLPUVJ6O1mocG2OCSE2rNh52Pgxq0WYmnY5UGD8hOwCw2fxJOv6Han%2FYY6tjRywQecAgjFI0iiATRK4%2Bgsv44BDwrC1jj%2BtOefMugBZcGMuLiEwSx%2F%2FWKKbUjwJNQtBLnOvVZEAwzWfMM%2B81skGOqUBfNP9NpLJLD06YNMFQL1%2B%2BdSQWO5CXr2sisPoc31O0aS51spXGi8IKft3%2BJa8WsyhSLuVwdXJ62%2BEs33Q1oA1t4FAMDkXNbvu9ULRMCWmt5jzK2UBvyNhfKRlFhX2%2FrqU7eVzZHesYwhnQfsN16qv7pcXzN4rXZYahmIQ8bfW%2FPspGbX7X8b0pR%2BdyX1Lku8AVqUB%2FZFiBRISkloM58%2BzZETtoZAH&X-Amz-Signature=e1b74b561be58708d648448a5dee47191793f5ffd89ab24c3132c9b4883a0826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

