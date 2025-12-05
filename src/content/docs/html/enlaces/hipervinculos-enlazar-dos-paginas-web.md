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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PLE3KO7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvB9TOgME%2FIjZUjlJ%2BKnbHIoeQmazLh7MXxnR3NzifnAiAxlDeFNO3Osgmj62Djslvdbo3MUaUms8TBoqjXzjtgvyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMUPgcA5S%2BMPZTD4tbKtwDBqQ7tkdnMKfLaWV4ET1prwbpTUxY4IMJ093LCMFHAteb9Hpu%2Fax9SjpcQzV%2BOlT%2BN1cr6a2Bu1NsG6fkm5CynIX5E4ac9k1X6bSptQsbbaYAII1hQzfRFrEF32QVfMwrRsBf5Uu7zG9jug83f8w%2FR3AUwk%2Bj0qlLvYjzJJB2kA%2FdlbAU0VAXBZM2zhde9OSDE4JWTNdAryaFR9YOQOtadq5dxCQWIQ07Mtu5zGD5xdpNSpcqSQbjcBDMCpWvFhH4TliWloldhCL7dTJBxdmup6avt2oaPaReDz8pVnEwSiyUoV0Bt0boBSg13%2Bms7Bg2Wah%2B1B72tNkgVysvzirVZi48%2FQKUp%2BUdu0TN0muHwjuXm1AK38EK7NqG%2FIvdZ%2F0h0AlZqHgCPxnvAUn%2B6Oes6zrHcry1%2BTPfQspZvsbHfTxnpscNeSCYUZi%2FWtyq%2BkajllAGwjPkhMJa1pw8kKznMuA%2BI55QUdr9SNDbp%2FF7l38Mp%2BdrK4rZf3gZvxhdLxIM2uVv5s8saX8EE5rqvA6NsPVRvzkGbhjqha7%2B6y5WblzHj8N911x%2FVs1jxaj%2BpspvIBGswpjyI8N6L8N4jTAhvQ4EmEOBJYERvxk%2F4aeWEPnahDdGpfLZGQbJI%2B8wpu3LyQY6pgHqX3pMFq61QwEvPaNby%2FAGMMUZf9Mrd9c2oEqhsPKY7LB4t0kwi7G36HpXQP%2BErximrNfD9qf8Ooc11LgPNQ2xRgwnIftWaXtFpr87ExZnI0Ws381iAaXCvf%2B%2F1vphaH0%2BHsAUhhn9lWLl9boTjbENIRls9MjgVh%2BHJ1fpSZV13Tn3nECuaozixJHy%2FNYJq7WiW09VyPGEBJUv0xgzi7%2Ff9Nn3UxlI&X-Amz-Signature=fea9b7a710375b9fc07b3474bf57181356d8946360825f67207eca0755388895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

