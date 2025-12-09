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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRVHY2GO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpbqtASQi155OrD%2FzWACgEt6ralO7Yjm2UmFvDJmGg%2BwIgcx1ihAWMPVR9oDw7BdlvUz20gb3BJK7xTIdIlP2fnBUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJ5FVHB5VcP6kdY%2FSrcAwjwm%2BiCklvkAxvl9KjL1D%2BQpxkRp7OkKhUXyEJTc5p6LbZLFMhNHqMGQKvq96jjSO9L2EKQfsZVyifvqzFcXH0WanMAJuMubMpT6Q3TXL8Qa1PNFel%2F2dC9XgHN%2BmxXWWAg02YgcUU8hYykwS5jVm9U2eP3W1lBX0DcfL6eIQS7XsY5hlH3JGhAm4HTvm7zpB75O9zON8OXaPgzy4OvPrPKVZd3zupMr5gbKDKqlFkSm8KMQPNrOFEMlWqn27Ya4h4D6L5yuP7MSpp2ju%2BrXd1zMSf%2ByPFqZFukR2O9PhherSxi1%2FfZZRiaemhJMTaUE8WyKCXg8yKu4AtPpkmycfHd2UTyzVOPMzg55MojyLc4wXanQrlVG4kRxbw1KOEZ8hyoncrDqzvgtzRmKHlGxGDnz1fenE3bVXWFGyWw6vbyO8wbgkBzDiYuoY%2BR3zUH%2BPQ6c2Usw4SM9BuvO%2BZxImrPTr5XsLNF5IRcHDxv3n2yHQbJr9ngaatW9nNZcx3Jg8O2OZLFL0xBIOAUoMq8BJAnknAnjvLPg%2Fb0z6GxdqFFh9krJtGCosL6YwOgp1HHTnKR3Qod9GP4ZnsUQ3EfEvK%2BW6VJ%2Bb%2BU%2FyEVk%2FizNKTw2tOiiRYEiIe9FR3lMILK3skGOqUBrchJJjfFWLYhBBw%2F4tLw4VFk6YToz8MUO83z24PnL7FC3kPTR1e%2BQwPJXi46Eai%2FqooTPao3cOFanB8ocVw2qPNs8NCNIotJ2Jh%2BjFDnvRAWdJBHD4shXCfI0bvxwpPCmo9qYgGHhN3JGsd56Z2Zi%2FFf1BktOXhcp1na2KAd18Bxxv%2FonCQZpxRcLpKOhRBQrjhFNbvOBpFjVnxfKDVdzXF5ih1C&X-Amz-Signature=09c52f441dc1c6fa5a73c7961941b72a4ee67e7162410ce92f8c059d61500ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

