---
title: Hipervinculos: enlazar dos páginas web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZB7JPJ7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T223626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCgoAurYO9sowwdOTBUaXobd1VGrGHhnW63hGz2jTEh1gIgLMnFHHnvcH9jgYm7bMqXwXyE%2FnCAdzIR%2BDC1dXujrboq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDNoCfGBJm3bMl5ppZCrcAw9InEoYAzzkh6NPbQNr7WTD5nk%2FT6h%2B4nUOgAATHk9kbF0R9zZZeciJSUTdINwiYyM%2B9fnH51eUOsb%2BQSP7byh5%2BQrbfKePxZmD9vZVwqsupx7CaZRncxCQ9gtR8GpCIeCDluBXqtUZZOF%2BbjXf9JIoFZ0fUX2THDz2WdgzJF92c2z2h2qLdptsJjoDn5HVT7HfkyUVc%2FB%2B%2BPnQf5bufVxqiZ6fMxG6BBFUugorOZvcGoaEmtuNobwBeLxt6%2Fdy3dLUMEIRt0ker%2FOY2vo98fn7jc5WdJV33pXKkvvwoskz0ETinPRXFFaLsGAqR9nvEK8iUrzZl%2Fn4GWRx2tXW%2FRMWM2VCQYGXVSpQFwGtUqBZiJMk5MCFxioJW0rdPnWaxs4qNtApDPzAcgsCl7sqNE3Vbjpopx%2F0oT5KwW2t7vhq0IcYoeGZZWSPFUbgS%2Fim73NuHVRatIrL1oYMUwgfYYFJPBMhvVtAACJ6LeQ7DXtgM3KxY%2F81JjnkC2XrRDZ6MwcLucs2mpMBZ4dbby1wZw6UWWhM8NvAYKAJB9%2BUooKAmYLOUSo6syGoVA6Jjr1U2M5uTSOH64IBJrB1uWwxqLPbQlfsOh9c%2Bkjm4tlvY3lbMh7%2B7BQ7j139Qf%2BAMLLcwskGOqUB7LCq0rlqoDKZ6gd5c8GK4lpdtUIDkEitMtP0%2FdUOJ7Wmy6vgpB9pU8ECz0QmnOG6ROpuNXxLOrqAKNZdQ5RBJ8h5r5XHPPUyM3aMoF2G5VaBb4Bk7OrXLlJ7tr1MyAucWvABcYPBICyy8N%2F7HOwFhJ4ZdHUqQfhdxfuyBBsHSjLsdQWKe7NBVkiEW5amS9ous%2FiQKJ8HoTFsKD5sq4X7jrDGDB99&X-Amz-Signature=d6ca4b759b839142f14f2a953bdb8ea241f59689ac6de7c228f1fc0bbca58a24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

