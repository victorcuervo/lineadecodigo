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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCVDVUV7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8b2e%2Bjp2QKjYQSJ6ImIkAB969tEVUrH8X%2F335EGh5lAiEA%2BoUxG2UVp2umNgD%2BO7FoV9RynTFBhRkfVnZo24eh9Moq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDCM5BcNnrbexeOlxsCrcAw7SKkY358GU%2BgaHAC1q6Iy5UpqXmR2G3DY%2FH9TxzOq7QbIfVYsqIgtVOtKnfGbVoA2JhWxlobOb7pUSLpHsElV0PDY2dwcKTEGd8xl%2BMW713BReE7SNpBVYx948ihKJtCOlThrq3mZLi8B4iAGky7K6s%2BWsI9vdMx9FnaApajwW8lOjAVG6BFT2IwmENAiiLMwtgbiqFg6kAxL1ppi5jkVocO3D%2BAsks1l5KL9C1Z0CSmrALwM6P7vl8w8Z8PIjUywyBoegWjLUDYQQ9ArmeRodYtLG%2Bw3W9N9gNopuVXUHrblnu1WB2%2BVagABgv2Qj7ZVVwjAzpKMOBFhpgLA8loBwhTwwb%2FWNmYgIOfFQHvMLuJbCZa%2BpEjSyxg4Ya%2FznIci1%2BTNnGPQA6Vdvz4wIZbb%2B25EglN4Btc7d%2FjSZayoe%2Bs3COKlFLunffvrT7VcF%2B%2FR8gAUXpzwoLATZ8WewYClMWzE1Bce98j6tNcRV%2BFo%2BYp3qrhCzsz2%2F4Vjh%2BD0xZYdckJRCvBswdPz87N2Ckc9MND1R82LgIp5XQI1YrEd%2Ftn8cRCJrtUyKQHx05s4LXe1cFCu7G19bduCSHyvRCKod8SZzDAqrTCso4TNjZ9vDRJyUXfxv2EebgifdMLym0MkGOqUBUbtZbXNi9jU2KwT5YC8t9yoHtQW1QFDr2O4hGJyFCREgdHmJN%2FSa7O8wAMezJF%2BW9fom4u8BdU%2B8tOXkOlNvKQUQXtaZ%2F4OZfevQXBu5JEVO0iXyWhH0Z4JRa0CJXs1XHmGAPCE%2BXWj0dXsAzmBHExd9EYL9yjGjVJrm3m7woQys79o%2FhfTMMFgOdB2GXNZC%2F1U1cYNRdQuUMnEDzBba95B27LRr&X-Amz-Signature=8be298727a9497c94b194cab9d906cf74223d1b6f6bd628031b191d17e4aa0bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

