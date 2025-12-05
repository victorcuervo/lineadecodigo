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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GAM4UF7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjOas6woceJhfm0Gsku2o%2F%2F%2BZFayYeSaKt8Id1vczlBAIhAOOvcU12RjNhcSQeHSOFF64NJ2GMnwi6kcM%2Bj5XXcl8aKv8DCGEQABoMNjM3NDIzMTgzODA1IgzeyIyELcteQCSJjAUq3APtdM%2F0iCOR1ha%2Bagq3KAZCM5mA3Jgh0F4zEwXFLMaWEODq1qwlvi8jq8vpp5DQtHRRdH1zAUPwvE%2FxuP8YwPTVwaw%2F3acXHvFWICIA8f8QQqXMdDXwYoC3pDqcW4dSM7w76T7U1dSfjJYXSD0r0881mjYitgb99adiCxzV0BmtaJWVRoLl2ITiRBYwhHlbpYr10%2BKPoDC2R18rbzS5lzUqT4%2FREHKhp58ekDa38kQ4ebQoAwWAlmpuD%2BxfLwsxtq8P2N7zjeiALjm3JWS7a01k0tU%2FR1Occp7SNfGC%2FMAvfKcFNALw%2Bc2bkamnOTxk7YhxqDh4xX55KPokvkh4PLYSD05pX67qUgrQWKjue4vQfJaiaRO%2BO1DXto3CcHde%2F8vBBSngGy2ZIQ6QuKr72XPXcxs3rpEC9B9URiK9bZIGvIn0tej%2B%2BI1gHPqRiIr635xPSn4t4KKghUV1WudAnLI6LNNSrrcjUMx1jK%2BLM0O8AppsTA%2FfD78ungZvd%2BE06pholVi98IJeL%2FkuFrRKkxcYGbk6jM%2BakLY6kswtWdFyOJ%2B1EU5AzeP646yGmgUAuXsT3%2FdqDbVc5X%2Fwek1tXE8tislkYHhpuJ22nagi3ISM7GccRKSuu%2FaZAjNDBjDx%2FcvJBjqkAeQnW94bnsr9L1jtc0ogMhqzbzBCyFLHwzMvBMDog0ZbKtsC6MV5g47SCr88QXVpodEEpQ2P270fHhR%2F8tT%2FHMoaD3PGgN8XmHoiVo2n8oI2Qiq3qhr1OjNKAXw5daDIzaNNp2XBilwZt1lNDdH5OjOH39oa8%2FlkiKemUZ1fz0STjHNMQyU3l2G76B5%2FkYufKQzFDjLoUS8K%2FxPM8OFBXUaBkXld&X-Amz-Signature=c35ee6e69ddbe53f78d999032e5307f277282d192f0cfdb431b25d2d428b4d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

