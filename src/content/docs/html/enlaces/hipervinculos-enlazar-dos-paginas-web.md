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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWZGPDMP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6o9s6R2ELUXw1QchbOFUzTscY3cxeR0U0%2FDxgY8l8UgIhAMq7au8TYMXZHKgE%2FlU5mzBn6yWSrCnggsApk4aDzH0PKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaERHXj7XpWN5qN3sq3AO3V%2BTc%2Fo7zGoC6rYozSmaHJOo21aIbeMOrY4NYdoWeihB8BTYYXA8QXZW0bx2i7rnkVoTsvr1LLwV%2B2Z5ZetHtqLbTZakdxqv6PV9jhmetf14M0jhiUyFcsX5vTwqF5zucRUs6aZZAWcz1t8TziFb03cFGBoWKoYjOMmPA94Es8UY7ew8amgLG8WdpKZayAYsGwRz2vpjy7dsvDB1%2FExb1Y%2B7%2FNlaHvziC48UCi1Vlx%2FZ8p37vfEObpbFoqkRoJAk%2B%2FvSwgoPkPxtT4EY92H%2B03WPgRG1lyqSxS9oX3GzEFNRmSAiWhzxur0jmUk4RRiRvZggu0rYuGZSFY7pn3BACfCMTDKFa3irIl%2FJpgQ6MNbef62PHnXrjGaOL1e0Q%2Ff%2F78o4p5kONLCI5RBcZiBLeub9na36zBFm4VHpPQSYAeRnSqwnvBl%2FxvGAUbVRzk1Tfmwel9vEQ3g3bWe0IIFr7TAKKJoJ29cudKreWugAtQ1s7qeAs%2BhZJLsNoBOI35bU41mXsXlja99EJLboZQqx9rnt7UJtKWKaEa9FFGk9CLzyDve1kUfV23Qnnx9TMUbz7Ko8FjyQjqPYBvEobdOG7nbrCaS4BkB5KoqfPNplYRPN8DOzcf0sKKPlbQDD67NnJBjqkAX2Sipw36iPLpM1ZL7D47jW1EZUHHS55nk5XbzF0%2BEkeJFJsnaLB%2BC%2BTGAYGXlbb06mj6dWvL%2FeNhQxtzfby%2FCjThKVopGisc140EjLng1h9gSkpF5eQpJnlGF%2FxghVR4aaE39R2MgPHbutQU%2BMKAW96EDWBBevOxqs2QhBiOcvltWcn9FTjxdkquV45UDHMPbJLGNYtFWVf66V4ziKG0DPISNsi&X-Amz-Signature=c32848992584c00f9c2088ca2383798914b8d9b3c13cc1ea15ba828791f15667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

