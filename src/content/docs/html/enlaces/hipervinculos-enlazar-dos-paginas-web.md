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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXDZSFTM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3r4bzGWAV9CHgGAnS0BrCTWuGfjR7otlJWiCfwS8acQIhALRHMjESY4e%2FlcUCTS1meLhCoDPP0MXUFAgZuxAKDK7UKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuOq93EoRGi0i5gxMq3APKxotvI%2F00bGPfe5atwg5LB%2FKCwLHQXsUQ0qeSRxcRlwm%2BoH4xknmLBbOBzMBJyOZfzmb0wp6nuoXAMThHJa%2BSHomyPiM%2FPJWFhFpO507rSJhK%2F%2B73hijNJOWsBUd1AscDXD58arX3W%2FHjzCTRoyykkU3BM1dv3cjMIvY11bE1U1h3%2BbQC6O7MOT1dNUyIIx4iL%2BCcLAiMXz03R7UxGVpRm7VsB9ymMhsJuQPNFejeK8GkEbOZz11UWlb66gyKV6H0h0JCP4kgdyFudrMubtlRbTcBE4OB9N9bmxJ9zDvFDHGRd3%2BRYWpIhZnk5eGxIXtnvrG1RQvIVWCTdlf2DSHGFR5NBaoKItowKyy5lIFPsdVBZyGSIBhu8cvoZLls6Z%2F79id2WAfQNJwFwta%2FandjQriBU0MGyBgdeRqO%2Bh3eqpmiSbavjxg%2BlvoG%2F2%2Bb2DCkfpBWeQgYLE0ta4S341SLb%2B7w%2Fv24cG1Cbj9CADjDIcz0Ezt1fXodvjRxE%2FyIAPhN9JepsVxyMMcbm5T%2Fc3gRLaKHKZjTc0WbKDfoDzM65VBxaQ9gatUjf%2FO7JNr5NNwsbWTr0F61wvxwSxho5KVGMt0I37i1k4UDhWDAHo874dscMSip8JtAIURVhDCzwdvJBjqkARA6LDQauX1%2BH2HxQ2GEZWQuAHo5%2BzhlDPzJg%2BCO79IdQtt6lZWtZp2NXqio9HwpanIbNvyPRFAAQKn0kZ6Y4Rkjr1kOXVfPo0EBkIR%2FsMQCjxd0qf9eQg1PMKnxElHAdfn8PFXrLiFzRn5z4JXd2lx4kKfaZiMzm5aEajpilSvw%2Bk33f3pHmQ7%2BlIdEdzjeauNh4GjCJDd1sV%2B%2F%2FTO17Zu47jNX&X-Amz-Signature=fedfd5b287021201fe09b72c4d9bb3553d2d8479bc72309580d8720c0167799e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

