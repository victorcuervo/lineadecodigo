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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7YAMEWE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T083120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe4m24XPCELBhsjtFprdv%2BR183l4dPL3zTGT782uOvTQIhAJ3lzEK8iDUBsShqm3W%2BLTlaC8%2FF8RVaZw0MMJY%2FdI5iKv8DCFUQABoMNjM3NDIzMTgzODA1Igx%2BqtjDRQ9TtLmtUXAq3AMsIBV3%2BVUlqRWrpy7DUzcSLX5jIPMdr%2Fr%2BtnD%2FfD10ApztnM1tjS9XNe3u%2F%2F0UvIX049V7JWEOfvXxS7n6mqASM2P5d5hvCo2q6ljT83f5UOdZ5M%2B6lL12GbPo9w%2F01%2Fj%2Ff4SBYE%2Fy9utHkB0ehO97BpzF%2F6D9JF%2BoWRIXfHGsH7ZkI%2BslaWa4PZjDsPEEfY6eMRVED9jbNC65gVDS8iVwysdHaNhAsZedJ%2FY8N2ropL1Y%2BoFBCceU2WiM0l6ruuB4PoaIf6Z61sa0yLHK8kANioWT%2FSEHEEUFcXHcxODooNBkuqviYFM%2FZNX5LHj3lW%2F2y0Zvf%2Fi8dE7FVL9uQSRvFjLGVPzC4XCxyhvp9uC2NxHNfrxWilxlnuSti2GWyCua7tvoDI2TXdIkKDO2nKsvVmjWVEqUnLoYa69k0UDIlrmJbsxVxbIjFzwTn%2B%2Bx1i8prNjNt%2BfAYvBtBMGeiXt8jCqlKH05AfD4MSUfVmpkiV9t6H5AgFBwi5BSJGxcVCJLvMqZEyXMuUUnzA3cXGKopWuKIBIWN911PjDbJtrSHyQMGpnNEgY0cUS9%2Bj1WI9hMZ1wjBjxCMV4U1De%2BRjNDz1r4uvNZvdDTMaCm77dUFS0rksaWvWZsF2FHWTDkqcnJBjqkAW1ddKpBPaMZcG2xt978rUCeswzBqPdkfbiv9NxROQk3GeOrlaY8A3TJLivxSDkNkSEdFFj4oTiAQN1fsy%2BDvfFsXr%2B3yv5OtnVclHMxx%2BIKIZSjSnMmOKqGWQ1LWzIHZUJPJGs0Hbto7%2B2QNLS5ZwD8ZdNwclYnPMfUjL%2Bm0IoiwOGFrXurJh%2F4%2Bw1Z%2BVm4gbs3dXOlXL0lwjoQS226yRs3Chf%2F&X-Amz-Signature=9da95e53d5ba9c1db38288f2b71b0e4520edbeeab2a701f8b0d964bcc138ca33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

