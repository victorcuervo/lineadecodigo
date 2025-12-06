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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKDF5OUL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4BDNWJaioQ%2Ftqo87FDCo3mHu8uYxChyU%2F%2BPEt52sXdwIgUO18fDCkw43%2FyVhDi58B%2BFvHXJjwtSDUFgHXM24kn5gq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHA8cHRzwxEhWN%2BHUSrcA2LUdrSTONSM5NSfmsNuGOIgydw4YVVGwDprKe1JF9iMbmQBCwU4yQToFcs762mk%2F%2BkzKgRGhNJ9Uvy7mmHN0Kpur%2FFnN69v6RZq6w7z2BCu%2B4ZD2j95wEv9PDrrKfH%2BiRBgWTBrfQxw6j7TBEKFWbtnL%2FnJgM6ePNqGHbeauAjKC9mNDprAV8t6OCwaMJLwj2sdqTjxi9HiDGRmejI98P7vWqWirdN3V2iuy93UGKlTHtcKhEt0oerp7TztNdBqUHig%2BBQCfs0iBkB4wjXhi5Lnsth9XKlUxdR5oBnq5tMNkafeB%2FMmk8NZCD7ODRxP5HpgRMUW5YrT2eJtA9jWSqq7uDqp8MyCvZvVO%2FMdZRIOXy%2BrQ2QTInj%2F7mrXZUmHQ2KtLzf7wy66DlJb16wwoyGC0foiQcG00x4fgxbGJ8BcaZoKuYC1EuoSuKSsE%2BcGbzB8fyH757tNjA%2BWK7igyEJn8QrutshmpYInkrSg1MGH8B%2BLEYP73Xli3ZvO74dT85ITgy1EKZ8oszxNDwv71NsORztdQ7v%2BFVIEwICgudh3SgjTuFgejd9I1CziqcHoAgO%2BHsNbzXx%2B7wiX5T2l7fhG13yRzUdeW5yO%2F2Y2kGZsWAAYG%2BASv2HCxlVFMOXrz8kGOqUB0h%2BThIx5jU4RLOQWenp8a7cCQeXlra4U%2B3KbVcL2Y5hacJLhnpdxa6P0xNhdoN3oogpCuNfzF4aFCRyHPCjvyjo34k4CLBfNNeCxgcNF5L6PSQqXqQi%2Bm%2BKREgQyJ0o2q6ktPJ4YHtMlx6wrpE3%2F4EUhiMV%2FFIBaTH0sDixaasTdo3T4Abz4u2qxE9uQrOh8mZgF1DfWlx5q62xHVkwLAf8xpMYt&X-Amz-Signature=7ff7ecbbce4c07cab62ee24d0c4e3ae3e34a3c8a5170cfbcf429f7f0ad09fcab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

