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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNH3ZWY5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCD5kD8AXgNcLC%2BI7XzHs56yfXXLF5fWtgOrL7oGuinxQIhAPvh%2Bq3Rejv5N0etUcOOis00GoVKgo3IxzUkUxGJ%2BECkKv8DCEUQABoMNjM3NDIzMTgzODA1IgzWfpZvGMwInlfmktEq3AM0Xcj92TJFh6SMfcW0OqXjd4o4walmdTf4%2BLjOexDG1E5wrfSWf6lbxUI5iNApViPG5dLNQGsfJ0z1%2B3gCH%2FdMFWPs9f%2F%2F6QoeYNw7B6pBUcHFUAG4ZGrXtbApdal76XSsWdxpzadVoBL1CfPfq350L68PneS1dYvAM7Cc2dM7rVUhCzBTcf6o%2BJ0LUp%2BQVCuUWPrqDqu1aQb9Lg2Av6%2BPBltYmqpH2FNiXvF93UlJjKnIp8gydtaxqRdwuwWbx2ibSiWOAZA7ketrud00Lbe7yFqB4mpOosOSfbjw2JvspCEP863tsoODVSh3lg1w76Ps%2BgPEuqYVW%2F9F1%2FA9EzLWY%2Fm5oXspqsmYZFn8Uw6h%2B2VF2oNEgOc1VfHDBSlIiI%2BRSJVvIXcLtcx8pTftIA6MJIu7m%2B4duFYfvDrh2ckG%2FWqMVbCAH4A9ia0Qm0h6Uic6IqbhhzhH5trEjF54XZ5V8h3QP8Zf0UOPn6wehneqGxp143O%2FlWLzBrOKRDvNuUyvpOvwfA5Qa9pKaGfIg0WxMrS3UByI7oENq2zXCXNbwno7Msg%2Fv3x43RLT1tMYs4OjKoJXsCRtTcSDqBC%2FqK4p9veh%2BrixKJp%2BK9%2Fd6HaAtsZeNn0KHGtHyruSjDCi58XJBjqkAY643Ie%2FbZbh01dsOBgmzeNMPJVy5Yl9SeYMb2ZX%2FB4Xf2D9qelhMtIgY6zFhH9iWyiVDib2gcY3jyH0NDOkouZPbIoBFCZGRhjoJwoeP1zOqEzAlL4JEdEC2hapsfUipOa7DXUQuPQ5AgqR2spdk2OTZikXLymwUBdbzGrkigRbn5sP5PAQToQtpaF7XCHxJDEAx%2FeobpLYgQsxJZJ0NfoBj9EP&X-Amz-Signature=d216c7432416cf92c1ded2f145190f19b5d6509727f517fc965aa5150b9edd40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

