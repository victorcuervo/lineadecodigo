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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMLX7ENO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG68rxDmEILRhyrnWBdYN%2BiOeCqUZT6sYj0dnO%2B8IB3QAiABy5OuBZ9tyhY8WPDefk%2BfQIJZyd%2BGp5vSbzVZYHzAlSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD26lAIxWFVyQYXOVKtwD%2BRi3sqnGwxGERLOsl2ZhvYH1kAkclg%2F92VJHdmOrSsfLrTnr1SOfIp7HC3E8Zh40zaq896dGpSMvNdcruStIfaxjmPbttPYKOQC8XPpvhIOFIOq6tY19A0ZYN2OHE8uwVt%2BmrkqAodPOerl%2B4f6gVZcj%2FHPoglqgH7ycPOcjTFvFr28FVlKvgXPatSv3gMczI0NzmjIT9KWwsV7hxRUu6zYSRnKN80MjZsLhkehteyO8cPuoxEt3fP%2F2nObS2L5JCy2bmeOIRLsu3sEmNA1zdswzT2vT%2BeyIKBwMDqObeOA09dV2lNdfIUAuk2WjPKnAmHh7%2BakmbA%2FYE389ZZRWYwcoxQQWeyRjd0VIprVYHfGHCIwrCwIOElLyt9Avx1pB3%2BU3upbowSfkAR8aPpuP%2BO4sXRJuQcvKbUFdS9QnYwLrEHsBKLP4cSK633vq41u1Y1PYn5qyaBSNqMuVKGIZJm6Z4LQBSkxMK8Klg3AMx0YqkyfZ2k0HAtpRDtZbvbt6db46A6LuoK7AOYU8AlcC6%2FlwE5ee7EZ2yyD2vm9U0ay5xZrWG0LsVyPoQOoh6T5BdvvTt6CxkNQ0Q3YTMKMHh3G%2FrEXFZve7n90QAM3UQQzJ1%2BIq3pcQ4OZ1fbUwkrTZyQY6pgFsamaz6guurIa90qBRnMlEeWb%2BmajWQzSXouauuYr%2BJDhuZTSTduFoyJa8OqbZV0TiXVnVslBpmw7QLDh66l%2F4DgsCqfX6nP3B88meFPbJCFYOgkWhLExOJXFMxIQ5ZCz8dqeIbAzkKHTxwC4MXVwQYEyp2FzlfSsepuOxLZ6I8B%2FhJdzyskTsi%2BoxLh%2BmmUudGiAebj6AMD6nfhCpA4aJIOHVP9s5&X-Amz-Signature=363588bbb82733f285f93072c9919c238dc4e038fefb7c6c391b476b8474739e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

