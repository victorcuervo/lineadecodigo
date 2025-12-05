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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466773IXDXD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T081233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJdIRk%2FOAyu%2F13AKDZU7gP64LssPZRwtLhcdH4XPnOMQIgFQG6EpHoO9R%2BxiEyD7puKwee2a3x%2BcMokvFOiJjmok4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOs0JbMhyEQEn8N1LyrcA%2FnZT72fGmL249IhGksK4CqZeda4w9B5KRwy9wZDjZv%2FUBnJFKR5HNckRWvIYOJ5g6Rl8VLSxlxv24GU7PbwoEyXUapi30cjbNF%2FvWNpzpdXaFWXlJ%2F4I51DSYq7F5YAuAzHPf0EXA%2FZ6CgG04RORdDkfr64TTu9jlZQ8zuqpuHhWENExSlO84QWXEoB8bu1TmKHDdlbGrvsBi6f%2B4sKLMWAuBrlWOHLG8h7JtnjoyOlgzhU9nAnmnVWMinmTw5%2BWkT6OmtxpCsQnDbSxkTpYRvn2hUFDYw10BvTS1REEXHSkAkhW7MeK902TEr8%2BOfToDUmKVyfZ7DLNNap7SSqx5WrQe6PE8hWkJULlRu0j7LRd6omt3TS%2BgyWV9gixI0zT7xGaDNyirVfeYcDeXiMmlNhgv7GGrhATnBEsp%2F2Dh56VTi%2FVo1sh5z%2FBIjjlkIP32fzfvVBTjjVCX38saOBKoEQqIG7oQyRQyd0r1XXC%2FcfQd3MnSYhPxIArvjv3X9jQCkOaiZkPrqhmKNYM2Su1udJVkONHeFtHeT07IOd4k4Zow6cASMLFDIcPcEXa82tDYBU43RFpYJfy4N3KVx7yh6T6dMOVH3CQXGlfbGX6oYuxz2t6Q29swaucayOMNSqyckGOqUB9RF3yVtfGhtl4rYRA4IcTEN%2Fp0Ud4CkP3UMU%2Fq1%2B3oRpPsnaEYPu7vuF%2FOqQqGtQtNxNp1sFd7KguG8%2Bs%2FXBB9EreZJz2NdnpK3tj6cqm2KZZ4pydwd9axD35xLq5%2Fp%2B7%2BVPhJFajIMemGkuJ1FqNknPPXpzEYHhDOzWXTBOvxaSy60qAu%2BsH%2BcW5BY8cOKPv704DBBAdFlhqioqGfmWaZlVZkS7&X-Amz-Signature=f1ebc9ffd14eb9da7e72337670b52d7492226dab0d68d2cbf75bb5519e199fc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

