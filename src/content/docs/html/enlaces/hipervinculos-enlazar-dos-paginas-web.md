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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WENKHUCK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO%2Bve%2BwxtU4cwzi%2FptRnElNhRMZLOAamVtvDfOj9o9rAIgEiimYhS04CH0CkWodPUGekDBaFSqwYWucnB2%2F9r2i%2BgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FktO4Y9eRaji2ncCrcAxstzZbdzH1qmuO0LLp30Z1qUzaMIK2pIW0oacGLrMVc6Bj40Sle3DybrCIrspGWIo%2BtbXMjYQ5Ehsyf8IVeGf4lw46Zf4gRizeHjT7HONR%2Bd9ccafDZYeOsrHrKLJq6%2F1MaLDCOEm9SCUOaeFAmygqkTe%2BcnKep5fX5bkBFtls9jJCHXUVE8kOQZmp33G0rq2eaZH%2FfCG%2B9suWw7D0GInza6Wdsh0bKhwsCqx%2BMVfBWo3Kcuyp5vhYUmmpVq7iLd5fWJtZ0ZzWY52F3evRUKFDXLqUM3uqGrwtw7QIIJqKIgySM%2BWJs32Td1nYklKDy8IYwUlWhKjrmoC322QUggXqJeabM55msd7y3Ke96P8Bb%2F%2BexeaWbdbjHzakk4C%2Bzv1WALDPFbkmVBS8ONMpRNGTWCaAMUS0TxGiAZ%2BRYNQ0jB900StuMNpIqD%2F6byx%2FT5mMxPFdMmznP813Mup91Bmc31AAW%2FbfN3v2IVBEl9FA2m0%2B%2FcPAekFrqYiwWmeNVaip0DdRlqrN9lEItgCyp1x8hicNVgTlP3Un7EHOGbZ1qsqdcvF1DCUcTlv9Q3huqReewfJSVeCAHIxPAqmOCi9eCBTCSSRMgMup9lXpMij6OGIl52cm9bB4AO%2FyJMP%2Bj1MkGOqUB%2F7tu3zmYZirOLQT8XuYKb%2BGMbWt9ejoVCmVA4%2BoBvpDpMw5srE51BogK6yWTdB9T%2BzDZrFtBA38RUAwUALGMwkHk2387BOJd%2BF6QQtbb1X9Ua18CtKjDuPXD49PiRBHLUxIIDU3qyR8ddRL%2BZsf1JED7p5Ad9xSi38NURWzhdVfNue0xs%2FKLaC0fYAf%2BHUqsxFSHo9QkpaLIfFduk6BbC0s224dJ&X-Amz-Signature=8bee1d677d5eb4d38d85fa338062d47c58219aa93daeb04a3f3f971a059b90db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

