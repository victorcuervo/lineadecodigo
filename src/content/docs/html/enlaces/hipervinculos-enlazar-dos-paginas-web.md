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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XISQXI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIyfrXhEIrhAmAfBuIJNSlyc93%2FL5dPbE%2BcDkxTuqP9AIhAPm8mILBR3%2F5FAPTCdFLOjQ1S1jehW2Jf8OEyMIDmDQUKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgfMCYi5mvCplsUtAq3AN8%2Bs%2FbaGpRmTBlZEd3HtbMFlDSzsQ206hS2hRVmsrrujWRTtjdLqjeUvFWSkx8WV5ShP3h5cUCywjws%2BJDbMBx6K9qhdg4QZJbmrFRbQ3yRn3ggDZPjv4apKEYSk2QXdAUVRdgLDb7gY9XWGVVmwieRGzAnSHLAQBv7%2FNZck%2BhF82JaVBHO8XubZu%2BxSiNFlPQmr1RcJ48lbp4eP7Mr1Fnh4El6uWXgbP%2F%2B1DukhkZmjmb4dbN3t%2Fa12JANdUF36AhSEoy7%2F%2FXMbnqao4wMuSnIAHS8oluc%2B30yQdB7raEL693hjC6QnFGmbUtL9fJG0fjoU8pW06nxhxeCQi6HlDYIocOsITjv7zOWZG0uAjFJ%2BuUR4WlOQa%2BWmjo3dSYiLwHWy0CP9N27517t7deMJDNtvdP6BjW6ythN4jFiZ34nP0DKSOfM8vFvJMJWMsN2hHQqmp4eWkyOqccYdaGbkv5oxY9NxcxDnWsawQqcxm%2BEp65XhGUjTCpOTHq2l1Mwe9mI6DJOriHhl0RFcM13p1sicUQlKMWbsfcVPheFLUEOIlJ5F4Ac3NgG2G5d85eWv1i0PV0asuND9u1HBTQPviLx2q%2BNpukBH1yunRA4KWSYW35WQnHd%2BX7gnXbPTDyrd7JBjqkAXgqAaxj6nQQI0r1eIRnYC30SEO6jx8HmnzEKAUQdCGHnGNd3N4q3wDIgZQIvRTpX7EmiOVwbXvVUql94q4rQNN4LDXO78oQeBwBeb1QauoJ0uoIu1uizd%2Bvzo0kA%2BOTd5ieb659GFHiyYQmo2adLlo4%2FYS%2FX1nlzYHRGoQ0ms%2Fl%2B49NgrJWcvu3cKB5SGFzjsqJ5ceipw0WAfgN5bPw2p3fxcbD&X-Amz-Signature=9c43a17bc1b84baa9888b64465a0373ac5eb2fa143c1b4bca6cd151c580dcba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

