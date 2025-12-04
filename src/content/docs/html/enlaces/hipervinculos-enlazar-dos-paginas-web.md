---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZD7IP3P%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIAwYSSSOu8yRMqPz2q0rLvRKExPt5jCOrZh0iMTvfTzhAiEA8Uzbe%2Fsw3E%2BoHPrSxKsF7D87v1tSGn6L0L8QV0co%2BIIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDEjrPc1DdIvDfu4XTircA6LQz2oqrv9A2bjKtm%2B8B%2B%2BbLV95IajFmmNV6jhU7L0J6upUyddp4yj4i3lqA32znTtMNFuspt%2B3psQ7v6ziU5HFbyoskn7shk72iyfMzFjXWxecGkjT7IN9EHMjEt2iNNsdUN2mK3%2FDmnRsvCb24vgv7L1DBgJ2TPY92%2FXR92eIJMpsx%2FknrJHvZAOQKDLLDl7Xvr8TN0Tclz%2B5ghHfShVp6UMfURw9ujvn0jdkELMJAMNN0OKBhWMMB7gP9XuGlHSoSpgg9lXT463D1UlkR1yIoxhsLUqQKtAbiRkntWUz6Rg9sgGiYmmKDGwKiY7yuKE6rEE4AtIGqbxFIcX1elKIh%2Fwg1z2Q814bc2MY978TR2OdcBkHBF2kWTmeyDfwU18zFbyYWilUs9ZhucQbKwJW7TB6j%2FfEKZ1JmSWeouZBDmF3NBKAVC3lgH2API01fBHHXYljZOpWsYtYIEgGxRsQhwOnID02HeQEa2TuJEb%2FXGBF4%2F1EWhvkaGspzvazzV2bkg1s7G9XQ0kLX1O3lkZ0rSRqj1aAL5sCLBdTt1Q93hBdaVGn%2BDq1%2BKiyowogJwB8ZDkvama2YzQgzmy4%2BaNBk3eC8Bc1gHU8rKvfNf1TuegbZFXdvgLD2ItzMPXyw8kGOqUBBKMKEY9J3CqQynh7IV6RPCi8MeQWCSeMURq%2FyUkNMCigs1UVIkb%2FOS1RIgjhq67wCTr%2BxUG3yohbt9Yict8lDQbVfWbyJRwTSsFpQdpSt79YgMYI%2BOhjKCbih47M7whJxH%2BLuI0UYTWVsG0zrutRGoc%2BIG8laJZ%2FZI0vMesydFYagIdIT%2BKgmX24jrzDG2pgZQun3R66ugJTY9cHzvRcq%2FOL6qPj&X-Amz-Signature=89f73622eac1cac5f9570f6a5a3ccc458103f91ada80f0fcce462a5a058b1853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

