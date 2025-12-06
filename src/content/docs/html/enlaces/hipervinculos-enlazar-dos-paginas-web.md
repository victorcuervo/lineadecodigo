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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNQOQC7A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtJ1GsIvYCbjJkkf6mWfICT4ka2k1E%2FroKWx9YgUysyQIgMCqjTm5XRrgAgHCelQSk7agzTFw0p14lyAPg7P81d9Mq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKMra0mazJMFsuQNDSrcA1HsgTKmrm46FvUVF%2FplRWr1kJhns8XO1%2FhQhw%2Fl8WfO6UCWTd%2Fk91bTfCiLI%2FWLOKGGqxjqLcjh506PFdAvorN658tQ4nzY6JomBgIVZK9WOC9wFxff%2FX2P1y5nWQ5u79PQK1yFwJsBXFRO4SJv4M2VYb%2BqHlx1payZA5heOrraNU32QAO0x4AIPhNDHQ7Pxqa5qG6zhBAnceQUnXC6j45%2F1ERM%2BtS9R0%2BxilokHc6qKj0Evghe6uLxzzUKSHih9yInqt7lE3p%2BqpG81ggQg8ONjiXjhiJ%2F5Z0ZV4VIJ7RdEbUK%2BT61wAaAbqoVDh43UMACJl0XAAopsGbk1sWXNKsGOaofuSnco9dBqrmPRpKNY7dc3J81rT2rO49JXQyCGCI3BjmJTbY1Tfq9aQTNWOf71fh3sNYNHWv1zasKJpBMG%2BIwGII%2BmgC7cqHE6jPRhJvor8Wpr%2B0DSM8NMEcNU1SlBvMkaBtkAEB5KXYL03x2sB6clRm%2F9nN5xtKzaNmdZ%2BFm9yPv4L9CCzcxA%2FmkR3mg4yhqXOB1ziqF8sLDQiAFE%2F16UMIG4Wr0F8RxnxOFjy0ufBfOrVzufebvb7gXFfbbzWUHe30Yv%2BRTMO%2FF7gnoxNPkhSLaB7ULqDHAMMbrz8kGOqUBd5BFICQnt2YXxypp6xu9h4BWkjAhMYiXrDnVftL28cFW%2FooXi0KBpvBRCEZJSvW7lQ66AZzNNmzWJ2eftXf3WECzd9wwIjwk1Ye2K1vI9o1qSw5WDd3x5Mv9xMb%2BpnU3atG6MAwjajbweSBUGiBkNK4%2F%2Bsw%2F1%2BuxgA5qlH75NJEDIfuUt7sz%2BtIuusDMOnY1Yk5yXi4lk7mEyNUo4o5QZAJUJNUw&X-Amz-Signature=2a6249b18dea0c4445c15e27051ca634c788ed7a0f0f49fee45ea9c74776d181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

