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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V525KCUH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDN3aC7pcbIWiYACAWbhqY172MOtphu%2FEjWyR65ePFzLQIhALNjntjaQmYJljurLzVhUULJvi9HtjP3R%2B%2FxtS3SzqJnKv8DCDkQABoMNjM3NDIzMTgzODA1IgwCSfWscC9jyuDz7ikq3AOlR8wia1wx2qb1bxH0189fJ1MyDQ0rFWhtsXGc0WCPcTHqiD5rE1rGpd0d9xGFx2o3QuX8rBGHNpC56L1ESFyvCDlNUFpWc%2FZ49dmJfU%2Fyi7ntLOzVPl%2BquDlHzUPVwRnYNSl2R1Zw3fkiISxHSESHWnjyfVbOQVspPNr%2FD0%2FpcK6%2FR7gcW8i%2BS7827PvWlO2ETTVPKjFlu6LV3nUD%2B7vkTmI%2FpOx91rWMStJQfjfYsCfz9MVRhvjgB3O9gMEDrV%2BzZHbLnTR0nWsXahpIwK%2FAKFThRfzNUP%2BWCTf3Jn07pbEb8QcujA1NEXhry2k%2FlWnR5q%2F5uPsUYMkrb40%2B7ugOJF3CKYUat6iYHr13MB5TKG02VqMWqNkvE1C7godlCcw3%2BRlJ0Pn2i5jTEkPEKlJCq9LyXdbls44ZWtXiXlGLMQf92iUQ2KuR0fDqUrxdgrZIWH8ovGBLAnOgVOlIeSVj7LaBUBzlKpm34Vln4yPvUDNhqKn4Efk0xFahkLkIFHGU1btHA6Nz6reQB0DBWSka887Fqg2zQOGRSLO%2BF0x1XenDOMo1JBGyLV%2BsHsVgk3fC9biZgzHxmrEjPA0iyqVlX4xup%2FUlurYReW5Xhg375v1p87zQJbq3ILwfLjD%2FlMPJBjqkAT1LABOSMjfMrf9JxRaykPt2iw%2BsebzjKZSZmZeAKUrnwmVP641AZAK38RzSzC54M2xd6WRL%2F6QzjI%2Bqlx%2BtwzQn3ysHwhlQWdJzNjg2inq2P%2F3XlenQOigPJaD6NODAybeaMptcYCJcBMemllmanidLBwm4Zv7TreSY7ThgeYagszrQRUyNThUVVTdQiARnfEFvTgVSWwZytQQvEv1Tk8NXOogX&X-Amz-Signature=5d19c5af814df0cd5deef816e04017c9ccc680531ff1ffc99d9161f3ad226033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

