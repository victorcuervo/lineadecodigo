---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSDG2JAN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T221731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChToMGYZc3wDfMJdMgbz47yOtrt3gRaz2OPtcUxj2Q7AiAOxyDc0svxLHyzDeMAwiNnvXljj7IJEYompQxXdpKItSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSYhnU49NAH8USqL9KtwDYYo9GlkJGMt5BTxJNf%2BUrwRYmqyp4GM5%2FUMkcOKdm2ue%2BRJUiBxd9pvuQG28s7GlcbfOC%2B3NpwO3ux6NGIXdjjuT7spJu8slg0sngmGDidtJsvTBmWsEYb7QuHPR%2BeuL4j9MjH%2F0%2FrCNAHLk1EupMfSGjdwmYLRGyqexElVMAOc%2BOHaVG7j0mcov3c3iNHRdOh9kNk1PyV%2FAgl2gju5KaFo4%2FnmEnzlgIy72BjYLbINpx1GKeP1%2Fh3qFyOrsbvqsfxHoe9GFLh7bEhP4mcAgdvhLV9jKeQhpPbCxtZPGAE2bYuY8HCZ9W71ZW3CNNZctgRGN8iIKzczbj9SIJdVSd0iB0HVQifwNe6Cs%2BeLXGALMUerNQuN8pTXwj7J6x9pJOpavDJ0BM1aVCiUsAjwtkr3DEIxZ%2FIE2XkdYMAIh4sleRFjz3UFJUhfOJo54eIGjPxSFSqhtlQhBGqhthUztEyyNkRftoyq5NXFbmetrr9gz077iyWWPBVORLUI%2BbofGsMnDKFRFoH764C3qv3T98WHfXXFsjlrNk%2BNiiptcIK63AJOcRB2cnaaWloQ8YWSOyZQy2TjL6RX9OmN14B4tv7qAiuuE5O%2BACvaalkRDxGtjByuTnN2ceFIWjUcw%2F5%2FiyQY6pgGJzaXvahYA7m%2FVr3ebsIJM7xK6BdbiCVv%2FsgxiQ8iwFnOj%2BU1lLh0VMkM3hgeZUvmh8AN8aGeEsvX1e7ERaW1dsVR4cA0NO2lB%2FYthzrioCdk5S8CrRXvIp%2B81V8lWJBDcmuF7PoL3DzuEhJ1b8FScdQ09dpMhTgN4vmFrqCg5z8mo7361DMNUc%2BIoGZcVYTo5eeBkwn%2BnZZtRaZpAOB4Ty%2BMxDjhZ&X-Amz-Signature=e753c1a99391478f1958afa90f94c300c17ec3d6d628e791522d40e802140c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

