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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLONLQYR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T192231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTARL9ppuMVDp5ixs0LKJMr2lwV3u2%2BwhBcoGVaPYbAgIgDt76WAj6BMzmzmCoeP9YIL8x3NphKn6VPeXvipVx5cAqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKC%2FLI%2FLhg86ZXNiCrcA1wjkaHjxyqq3M3BFL1%2Bxry%2FelygMWAio%2Fff5gAQP58HCNQce%2Bz5KHruGhnXq0msYLvC3%2FYk4BKuPh7yr9l8uB3fIgMQnEUOMTPu9MCGEN7FQ9S%2BQs5%2FslZ2yBH8odh835AwQ5Ktt83WOtuJ9BR5UuARa2drfHQth2JYrCIZieZmw0IHSFGfJE4L%2FnCCdzQlN1BSSQpdR0og%2FTQAfK%2B%2FvcYMcQ5Hb7WtGCj9ZolAvpHPv1LxEBlvx5JQGwe7LK5YLNiJ8DVYZU6PWxrATYyJ2KcjdXNDYrboOVPsAxbNv8lf9SouEl9yDzJaPPPGMZ15o79uPrWWRsuk9RwI3ujGHxL7MYzaBt7P2MW62CwzAEbw38ivRLT7t6m2DXfXgXcAeHhK6mrWXxjkgDs87thnhdDeMG9usgV%2BRUOKOGh0%2BGVRIaD1wYglpfrSDIsNyzcjulvSesb%2FJ4PVhgm2eISlW3iepZCfBtsUZ%2F5q7C7GPM737%2FrBq03qHpMsB%2FRXLQN3oWMo7kwMUmiwafWzEbYcskwQD7i1xnZeLP48P69gqK9ljPiVpfemmRQQpN5KxtJsDlKuHRcuC0%2Bj8IDDzDHBwmzx4VRPFL1Rr3IyWp9lloVCjNxgKshzwuHBCJpzMNS%2F1skGOqUBEAMYToSNLD7mSKzNXcgw2RgyZeXEajah%2FHXsUyShIAycH%2F6VqlobNg7fdL7cZP%2BeJOkQEi3D53%2B%2BGIa1F4f7twaxpGMCwiPQD1Kha0hl3ocJAoy%2FmsiwSzh405WZvJvFyhK1OZ5Ye1pp9tm73Vco7xZacsLThsN5EvV4rrby0FLLGF7wabb4l2a%2B7B5inG96TXOf3x1aomsZWoNB0Ruhz6kuqGr3&X-Amz-Signature=9e17eb7dd7bbfb7204aea97c8090985f9138ba1b4cf23e6782bb6742f1ada191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

