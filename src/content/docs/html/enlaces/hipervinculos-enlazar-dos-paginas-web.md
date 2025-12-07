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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636KENJ5Z%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrV3dO%2B2Rb68M%2B5K4WAiFUZI3DYX8DpgzdlyE26H8GPwIgSMWOwtxDJGwHJyoslHV1AVlj41JaSYmUGqxTpCUccvsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCpsPCQQEAZTLVz%2FrSrcA8PTXrEcnS62n5UmJ7bJ89UIVrut03RA0zcbuKS2UhDl9WdshtB07VZbbD2Pxox3Il%2BdfVCFskJVZieDgijGXXCQDIsuBJTwHvEL1KmhD3aBAaURnYqAJQf31y5XlitVNEkeKqgfN9rBFY94MQS%2FntLja43HGNja1wos7zoydZYMREFi3WzRYLYodqWIWqNbg12btyzoWV0GIk%2BxTJ6vF5%2FPrZrRu49ZjUlg8HI3Qf6zwEJC5knrFQQVVyTHE0hXNymYY23EIkP6kOyNBxPad99GfFmlTBZV2BWZ5C%2FVl1RG%2Bq64NNVKMghM74dB6SZ%2F60HfHOqUVePRx%2FXVzxJbzOmmWLX0EFftbGTt8sVjip6oOaNNMRRGcXzYWiD2oFy%2FH5uXWY%2F6gqkwV%2BgUY5yJVO849WyHD%2F95vbv2cgpNIP6e5GQCsy2hhWNWKI1vvvoyS36VP3z4vM5Mv044qf7E%2FmR99kz6jMYvxO%2FIS3vU%2FBfwICmY1SHg0Y3jJjiNq5wX14DkFQZfGgeQPw97UDR9ykcjovWYkYPdQVk1k50WPk7cvoUQ1EMGK1cnU0Sf1nrvNBJjgva9jUDsNcuy58%2Bco9rW9XQ6d6x9%2BMgLb0zWz0VjtzTE1BNj3kiguVbmMKH90skGOqUBVEP8BdiBOj%2F6ufQuFXN6N0jqeDnlsj%2FclMB7ryObNzYrkDgGNxWVlsGtWzhMM2UU8rcSz30q38TFE3Whg%2F7NJpIYuYPV8PvMbJLsSLAmoL0WxG5Zq7gGQeDATKMJkz4oRXuNsEZUK4zm5%2Bg%2BUgcClbCz20zLS56IxYO2cYYtQAuAkF1hoKZw0QDKjJbr16VdpgQjU26F5EjtUniGj2IF5SoOjs3T&X-Amz-Signature=22797c5f9a2bf07c335fcd0fb7594ba715209ae3041be8115869dc72840afed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

