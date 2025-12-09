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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZPA3OWE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T213013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyaJPHpzkN7bflYdsKS%2F0L2saqGw6J8jurln15sG8h0AiEAwUoVAqJfjt%2ByPBG%2FP4BchLVJfyPLqOLEYgXt98AD1zkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsaVA%2F7tqyJF0AvfircA5gV6mdnhU6ljeZgBfhLK6GVaS2n6vcdvsj8i%2FLjxBHFKfEIlFelbbaz2KgmS4zbGf5mvHmeFahKmnt7UmgCNoviRyERuBXxdHCKdbJTZfGr0A%2BPqsYXUOd7IQziCW%2BYo6TKcSyAi4U7HRBEugLxHTSHNE%2FD%2BMsbkHkmY%2FgN%2FkJKTVc3wXgRHNFZZNWvkFh8x71iPpfVLy1BoeWKZq0rO%2F0iGpD6oMDEkHlDMllwdpBgOjwRJUaA3CeVHJXZmcOiGhTS0eVwG4xDGlAfZDnmlU97Xy59TA8HJssEXFElvLljYOob1O%2FF4CUZe0vZv0TauPRB18uIjs9wH%2FJtehwpT53lTLr6pbeVLV3ec44b3OFKa%2BfRDDMZsHTL2ldTVLgVot%2F9F%2F6TqgAQ36ug2bC%2BnPSsiFQa0wpAaT9okPAOgG226Ct7n0hxs2fId76jHVJVjfZRaRBeJpaeev4eNZJ3CBd3BUvf4QChfZUFzn6yRcBrKNuq1V1krI1wz%2FOFJFgYqKMZRV8THyQrM4wQFrFJWBYLFiZinC8QpWua%2BXcymC9axsNBh7mEkIPPQLE1p8CWa2fjnrnLr%2F89RcE%2Fjictew49HjwSyV552p0piAtfk7V9Kh1RMQZWLSaen5YdMNSf4skGOqUBTQgrZutUYSyWRRyAwuolgzz3jWYlw8Fd56f%2FLvkIFFDVvG14YlmGjrby6tEUMiI11OqbBIr4zfEbH6wejsgj05w1LvqcU8omEpM5gIcDDz8Bf70W8k%2BbBoYVNXxXH43WGa%2BhFkT9gTGzy2MDJVQonbrPNAryVdJK4nP2pj0SLe81UvF6oeroWuXoYCg2W6X1dwibNAvCHgu0SZpmdKFA%2BEFIRQMY&X-Amz-Signature=a979de8940acb80ac043baf5afdced278a97cfce2ab69e8be5e6bfd4b96b25a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

