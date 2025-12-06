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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4HYVJ3U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDruf00gvl83oUN2I1zfKWeq7kO9FkbxXp%2Fhq7x2lVSCAIhALawLzNYbUg9dCW6GST1pp9UmFTr90FBnivT%2FJzFfCDcKv8DCHEQABoMNjM3NDIzMTgzODA1IgzeBJw%2F0S7Y%2BXm3dK4q3AMAskQL1mU0jiqLKV%2BXz73Kf8XqxwIHcw%2BKZEi7owWXTRwhqK2rZpoZsaJyEURa3eDxopFtfJyjkr1bP%2F%2FiptUYny9Z%2F0DNu%2Fg73JKkA2czv1hNlnloDWgg35%2Fojubnggv5qTv5Ne6302dfxUlJ8JB6XIuQYdVioHr3asO7QSUGNrxdwoSAsG5126WNtsCdemyxIueYJL4rEgjBu6MgkquAP8cmrKoPp2B%2BssD9Y1RBqN7iCGgvMt8LQXD7eNN3PZfrWUUeaQUKLQqnS%2F36qV5wj%2Fax%2B1uHK%2Brc52mIkZ%2BZTjhWvNIWRPGEBmPzN8k0CWOEqc8BoEQ0B3VDxCCmUo5q9C6Clvoh1CBhWIvTZB4mAZkhBDAA7h4AH9K%2BJmbNTjcEqf5g5hDQnvROyuH2FGIC2%2BTpfMq6EjQ%2FJCFrEQ9JOIQIcO00zFKPBwx59bg%2BfcSK6fZXwTCYjcVCOS4Kslv0WIGj16bpg4B8%2FF6NtzYu%2FsRZaHmNgmWLlV1hhxjHFFbtqFK%2ByUI1Js%2FkTXSHBWswc2tPnyQOx59TG5VqbT2nnYgmgpU1cQDxx%2B%2F%2FWZdXkSrLcmEOOQjYY7sSZXObeUpeQ6CBrSFI%2BmRS89ocAvq%2FFrHZudBGhDQShAVvZDDtvM%2FJBjqkAZc2gRl68tKnf3Bx91MHFxhmXmpKnNswBaEWl%2FROtqw5zuTzFioc7EeU7jfTOtgMhmxPqZDfKrDXvPPotUuNzJGDYjFpz7f82NBltV4DENHMZJfbYVlaoEr67zwNGDhC5hz8psfC5rUjaSfQizckHGuIFiwUDHXNnWoG4PsWmqPC63ovCti2E9zoUBkpJxxu%2BBTGIb2VtqFQmmPcH23iL2frve8K&X-Amz-Signature=1d78dfe5c8fe0686b2f8022a784679049d20fe081d7cbc3973f195de0ed74c2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

