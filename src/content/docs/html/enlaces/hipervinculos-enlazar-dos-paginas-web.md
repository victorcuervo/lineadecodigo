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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRM7AFPT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T134208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR2jEJZqLEwDyLUPlpR8Dk1MGTPm%2BwJR4PvuUSAXIOvgIhAMRGgHdV6SWVyE85euUdr08xHcRGc7lLoHyH8zNQ6dTWKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7O6%2Fu4EOGCNlzgLgq3AMiUjXwjJ4GdnRw5bjstt0LRKlnAVnRABe9AHo0R5%2BNc8554OmOBFbFq%2BLvS%2BHJJhc1tU%2BwNQ0BU08db476K%2Fe8hmDhum95d87m90SNCHdqCYbWl0vpNmew4BMaG%2BSJjHwfaLtADehffdJhnpH%2BuK6TNLX4ypLLo9CRSfsVryJ4SbNGaZWemUMHOtGwgtTtJhZ0jA%2FzPa%2BtSy%2BVipcDReVNNCbVZ6j9g3MSLt89sDxymo%2ByHq9P%2FRKLXuUp1zNnfNuOjieN1tqKb7vIQuPwcpZRxqYvCOP4XMnNiRD2cT4ZR0mFled%2B2VBsNEWKVnDdj4LoDqFzZ3Yps0MWsM5yWbvgE%2BlY1NEtUGMYSDxIa7I2RGXC5M7UAcXbkQCOLz4xjDKgDWXfDLGvvj3WqrvVCslKdfuKsaZLK5ifGVK%2FQK4HvLpwZaZC87oNY6CYJXdUgZWYfWzAWMvYWpjeCLLpn2HRDY47PWAiqMA4nwrsKvc8B%2FRIoLLaNNyAcMgTFzRwwY2Y%2F9XVY9196XoacM6DRZGEJbPVbQtCBjeQNGB0J%2Fcn%2Ft11X3%2F8SYuTmc61IBJHbI3PPgbgtGnujOXJZqK6mvUJ0psopTVPL05wpY11Lwt3IwCAJNcegeS8m0X0PDDbj9vJBjqkAa2P8M%2BeaUDPTfdK6bLJ87tryi6bhTSSzgCn97Q5e4vddkjw6lyDoBNU3nncI6ocLiW0Nwb3%2FLFeNosNq3Qdxz7VNBzPbCjYlwwJgYPAYHjVf4k56OyBCoPwO4hvRrFD9bIxzE20B3wGSZNACYRK4TCZLoxKp2ehbMjXJYyDWt3zcSV1WeHmHLSd7uNssw8QmEU3xuahL4St09q9g5QrYOefUJGg&X-Amz-Signature=919a6ad327655736109bd1603284f37797bb9c7c0e7d0c82d052439e1fed77b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

