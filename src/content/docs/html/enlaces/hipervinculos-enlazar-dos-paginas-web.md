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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SYVUENW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIEzPsqaV%2B2OdV9QEqB3fOEBGWVVCVdCzlnMvHVJ1PzxqAiBWa%2F3Vxsqo87tUiDqENJFd1D3bwwbHnRTZUckBfRg69ir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMAZIhHv1rJ%2BGQAPONKtwDlESOsllVkC7EwCmLeaxYG19XYs%2FfBWgvxQj2BdEmKeJUDa4AvU76ozS7o5ce4tKt4nif5fRqqk7k20h9%2Fk%2BQl5KLjrRbWu7e%2FvKOv64NFuDUYYVS8xHXJqxdmXM3%2FGNsLjdboqeYBuEijX3bwUk%2BST5dr1FrRIvBchKfu732XF%2BFaXlNbsyduMCcWK%2BROepmCNAYceUt%2F7UrhMNWgj3w%2FeYqZcCXajNNOtFqMixwCS2fqutD191GK4jKj1zrdmNX2qIVEVQCAPki4%2BOnnn56RMMRz1xt%2BXwqqAE1h2yijIvNxyPh8e9UZe8N9FR4c6TEQi%2But1sL74IrV1Ty8JJE0otnKjIgXwOvJpKRR7fT%2BYuzF3fjk0IHC8jVxin0VoXo7hEU%2BfljE5cHPqbzeat4lA11FVcmsy4JdKMPS3jV8ADWF3sfrggFBfOVkzhocArCLj0hucWHzUslnZ4x6jlDOb22IRYmYqgHmCc2UT%2FwD6129o5xT%2F6t2mdBzx2lrbRZS1fK3Hkzj%2BItXzqm4KjJ7HzANL4nrfwkf6ew1ArdFT%2BR7Nb7EwLqfG7YGSPV6J2U3pqM%2BnH29eieuu3pRxXmN5jVwj47wA3D8%2F8ARszSunoKkEI0n8H6hkGMIqIw8%2BjEyQY6pgHTTI3yQng8ML%2B7%2BhRU9Oh7zg4u2LDtCeuadtDflK4QXJbQS8DY%2BUPOJHZBTVwB1mj6B%2B0F6FXooAqQ%2Fft1xi2mZesNQzhoGuUVulWbzhoMVPGLpjNIHR3p8NznhPds7dyRGQ7EXmmlCD0ZQcbNRK5boxhGZtgdKcZJ%2FlaeN%2Fqq%2BLyRj9j9596L7A236sqJprR8Bj8FQPDO3rc5jW6C4KRvQEb9N6%2Fg&X-Amz-Signature=20d8123a35feff1ca40e758df7a02286135254facde17f81a18dab5d04ecdc6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

