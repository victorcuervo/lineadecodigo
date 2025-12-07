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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DLADZ6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T090730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIHEY2Jg1CDrJyt%2FHtn53%2F77kP5BlH5o9tYXYzWbRNl2iAh9qqgkAV7vDS7vUM9cGnKqJxE%2BhLOuz0wOjRX1WSawmKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzbvifkm9VXizJ397wq3AMF8%2FxwSgN1OWGmaEs7j3gX%2BYEcsF6hXiNK68mUQkO6SF36nF7q9dV6Yi2X0neLnPF6dYhprgU%2F7%2BqY9KM2A7oEPSxhQenrLGJuMIUlcDKdVQOzYEedv%2FSaRTpa%2BFZBvKo6fmFy%2BMirfO5PpipiAruWwsjpiMxf1kjpUvs1WlXZUlm%2BLYNiWFea5StOIWg0dvIITTEVRWgtjmZPh5rHDQNH3wj8VCmOKtfuHkx0fuAwKKcX%2BL3bLLf7koq8wn%2BaYdQXntDJp60EPUs6yFEEX9ASf13imJtSJoYPhjzGYfQxOX%2BQ2qDLuXeVRfqMRg%2Fal0XSUdj5SolQKwTG0dUU4AGZi%2BVBZEg6GtAfqriten4XM9qr%2BQod5tBFmjKY4YpYw%2BCkLDb0stRDkXcB8Ca5Spc1TgNv8u8y9gyV6vVMTw2%2Fb3bCDMxek8%2FaB%2FYr1tZV2KIroffLOCglehBDwt8%2FKOYf3HmrNAuBCIcp1cY1vupxP9ttC4MdZpUhB%2BUYonqrXlZmQK7WI0rv%2FpAeNUlq5Zj4Ny0xknT0aulOLBKsL0gubFjotYtRbXAa5ZB9K9%2FG2DGYHw3Io9XU%2B19%2FoxJU5z0goG4%2BGm%2Fb3fLVM7a%2FtSOCWaF%2BYana84ljRUuHfTCIotTJBjqnAdmtj73uYGLEiOeSPK8pwgcF3lozg3hppYv4mlVy7bJEaYg0zZAyyHcjEfs97AJBz60Rjn6%2BNakHm1Nr22ZVAUQNS6IKi8vdoj2Zz%2F4tiht5UjUWOICVgdJ0mWu12S3QdBbKYsmH2qQxKzuDjoeU%2B4FAIshnFROO6zWCO57H1ezNh1OAyP9pMWCvedVPdDoLHudhPN1576RK%2BEwlb8IMTWVyD6pj4nHs&X-Amz-Signature=d1e646787c15348a0c26cce3f3bcba66cf93500ee084199cf1196f72867b97c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

