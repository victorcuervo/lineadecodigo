---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSN5XKTE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD59MNsc6MChVmNLG5bjWqEJXrrt2zgIPMvykHrKRZkwAIhANupsFnNgrdtV4H7H4Zx5QLMp6SGPV110BNbpthRkIMUKv8DCDcQABoMNjM3NDIzMTgzODA1IgyrgI%2FCVkU3cZYg1jUq3ANz0L13mfCDtxfJBts9jopO6MJ85QTJQxIbwc9CixC6OmdRnB2lNKwl%2FpbT1cwQh4GAEFumRBdHMgQSBLYCadCtgiJk3kSpzZDLtA%2BmVYVQDnOW0Tr3AXSJLbsbMJ6RbTlKsPeLcZebjhHoWQGD5ZxryfCP10mT4tgfbK8F%2Fw%2B9N6fEAQciYd5khzdZ%2BUD40aosz0p2rRvZz22ihn18LWOcCZCM3nQvhZ8sfikEVb2DIc2Lq1bdJn%2FqQ4I1q5Kb%2Br7PDLSX41A13eFw9ctogyeQzv6A7wmaAvtOC%2Fg9ubnj0127k0Ko6TkXwlB92jo7QDX7ZAc6m0JBJinXeRv7Qm0bOXYllVceLwjYC3sqcQ9oZ8zuPLTRX7CAVsxrRBotzpAJBlK4TwmcvJRsGD9bMJxhPlSxRgKP9TQh7B8F9FzLQF83h5E%2B75DoXX3%2Bux82zNwpf07pw%2Bc03a%2BsN0w4xGlpzYfhUfiFwVjr4i%2BHshS2kKp67Ibey3PW6SviLWv5GmlkzxdjxIi%2BZ1Vw5DBZFqeV0MnOe12Ce8XAc4njQmcWdFVf653%2BRUJK5m6HhLzoFhhu0nmsWUS7LanhRHwD0vMT8quZrpDRiVBs821BdAqfB%2F8JaFtAGdPT2mIk0TD43MLJBjqkARfEKUglb0zCRdxMjLSwT0fj11PYelFxpq1FhP6x7%2BKERr0NyFWWrMZk2kAB%2FhtOoU1GC2wBgotoR3%2FRQ9Z1qPrmOvPiR%2BgSRxbmD19%2F9aiHAjwt0zTnyTiPqiWUshGpfxBalk9r4NbTd0e1fFS7kb9lhzcWWVpycHgpssHYpo9fOy9vFSmrznJX08hwhJSnv2lyLY0GnDchlWtVgOeop1zVPZts&X-Amz-Signature=1735b0f5306e95c6ad84ca7724c8e8450684655987c2c858db0b85cf1ec408c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

