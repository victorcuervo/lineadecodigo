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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGSN2SEB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0Zo6oHQqqo8gODi%2BL7Lrdk%2BppP%2BASuP%2B1g4yc34SDSwIhAK4%2FRmUanCAuRs%2FwKjwZvAUjY6PfpdXnRK129C3pheYfKv8DCHUQABoMNjM3NDIzMTgzODA1IgzcD0a4EJKTT5bmx80q3AOdRWZbxs2pWgm4HS1P%2BECBvqPOkfL7s7S%2Flfjlh6Bts4LHFahqZ7k2TdyINZiq8XStLOrHK%2BZkNJqywtS1RGOlEWHNNAj0H%2BODM1kK1%2BeKzV2s2EsWuhmAb2BLMoShvEbA55WY31dhpsvViKlIWC0TbeTA7oklYHOsrg4uFk8vcS2Jjz66ANGHeY0d%2FyjR8xC5LRUH2pdksv5Jbu%2BjPUGtYepz%2BDaIQyko3i%2BEjR%2Fs12s2jBJN8uw2PY4I4wzyedyJD6Og637M886qRPxhr67SOX%2B6QTwj45O7XYSg%2BkB79kRJctzrqDnW%2B9TWOo2lY6JeHw20OXcgic7zLGdadNszc5H%2F6OTovl3479fuGhoZnDN1%2FZIJzKQrqdxQUT8QUbIj4J2D4pZDhtwPSw6jcKCODi6trUBKLbHjhuo4b7KELyeZAp%2FZeYfceL43iCE%2FUCNuSbfhSt1xYFYw6812cUtIwJ7D2fwy0lMUIdPlKUfboTMXRnMVepit5S1INfkHZBZ5vOYDzeFJL8eqO4coFZNILuCYx4or1qGoF%2BHwUxhbw8t8efkEUgfoonpjF57umtTIXfCcNu%2FdNj5aNvxpZ1U7dYpZCn6pY8cyQql0q5OxCcmZqt6dpGrKaXNkkDCBp9DJBjqkAYP6vBrGRbR6tB18%2BekFimj5a4UaMgFtdTE%2FmRAll7zZ7RRs8veutNmGxb9pIJR%2BruUZMRAnpa79sUvdlkC2JhRIOp3kU82q318QHdF%2BWLpnEado39LKukErsJVxLN8JdQx5QfnBaij2hZ0Fn%2FZh%2Bdc4ejaK0gtpp0Ag7WkqWvr5Mi7MCxklDWB3yDIGHs461%2Bj3Im%2BQSpjHzZI7eh%2BYYkN%2FdZMR&X-Amz-Signature=a2cbc5b1a52d068c945407db88c7e3fd2d96b6f4f65b78f4b7e9561335a9af95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

