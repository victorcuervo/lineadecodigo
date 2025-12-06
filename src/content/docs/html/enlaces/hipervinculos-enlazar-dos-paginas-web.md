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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRXY2YGR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaquSo90QqbNB3MT3fWhlaZiIn26owJzctBuobFrHWKAiAlb3zzeBKzXuG5gR6pK5ZvV5NnhE9zU%2F7KuHcddaUO0Sr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMTZ%2B%2BQWSnNYrOypR3KtwDmVABGPfWikyKV%2F5jFtagZOkK%2Bh0TSUIXu5Im173SsPbIuvxCpwRY3YUTlA36qq9WRZlw3PtuQDhoABY6W7fsayUOqCeByPRNRS5xX2xKEqTkDBBbL3Eu9nNM314aihS%2FhGvksX5bHem8tFZFX6G%2FESMErm6%2Fs4z2ck93T22XluqDtkXgn6MxDeCqY3HPrrYuTbqG42Zlzu%2B1LIaSkJwRelbopxvJV1%2BvOO95KCQeYzxmd6KViem%2BmXfRgzioeslsiANseG1PJzf6jk1yrhNY4qN846rzVoG%2FdqeeEh5Fel4vIgt8dwgHjGbGDmgkPoL0GtSOl37urCwWGsP7iu9WSsn7kMTOROmqgmJJoMXOvVr0XvWyTgDEZVuLUO5eQga01SEAMXOoY9wjAYV8xud0HjHRlUeMNMPoS%2BxqRXafSmQufwwKu7YFR%2B33RJaKLBgVErzduILGWdtWuXY7E3fL%2BVctvulP%2FTPmxwbIkb5Q1TI2UnswHqvvMFx%2BuCcUc8mAfT%2FpWYtaLNwElfL%2BHwN6YzYwofBaqkJVT8itnc021aDkq4hPv6CHNojQaOZTbcf3xmjDfI0v2LddYmafqXYzFB5P1UiVBa2VdSyR65ahOlBf2vTaBzLOUCSfah8wsMPOyQY6pgFjFnGWQIOisXEuX3YWrwHowBKNMU375NQ%2B2S2NZHGaPcbJyFfVZwtLVIppS5Btda0d18ZDuZ3L3LWZg%2FKVZMVAiKrdN9DQPxH9TEBbs6E6OeDPzPYlDhSvQykn%2FlVQp43J6eSJqPQSxL2HohxT7WC9xBCz8scJgjEL0MdDUry2M5WVd8fuHJelR1fWBuVv65aK7tqIk3sCPObCsvB%2BXRojfR19xfKX&X-Amz-Signature=e2023901b958d9122dceba1596bb686c4d630f796176f2e343fbacfad522673b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

