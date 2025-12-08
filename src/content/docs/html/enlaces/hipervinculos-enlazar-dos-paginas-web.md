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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7ABCFG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9n0BTS88UOez0cFY2EYgPKZGxK7wwYgdNhhNGCeNpKAiEAnFFJYoUxrLJfkUUipIULP0b1pMYOVWLp9pEoXSEwcdoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqX7TKveXuyV53XgircA7sLw8LAGRtu7z75mItdtXLXdBXvlCzrFPB%2FD%2F4C1fZMpiagB5CVbZ48T6ecN6qajWIR0DxS2XYLutNrE0SRB2P1oP0dg%2FhybpNizV7CjgSbWLtclg0qKRuxDKE92nHCoswzrJXUCk55jYf6NokAdIzGScetfgdBNnEb4tTl0KqkMJ8oSvecY700o23rejUXgMBxK07ifw8XxsVedJDT2p%2Bue7gkxmmZ47Sy3z%2F5ufJwkAV37X32hAf792g8LyAk6uJvS1Htdsec5TBW0Y4XTIxM7ZcvMjBzzvczRP5TnpsBNahCABojyzkj9NuYEDZwlyJR%2Blr3ZCx29NLUjIABjB60Ud7Q7M3ezKf6i2hTW8xi9WUslA1a4B8rptUyyPKCXfMRztQXmypJEgotTusFH5LhA64uaseiTuumCkO1kT8MA%2FogIgc0j6W0rX3T8%2FxT8csbRVho4uLA7t3TDvjemhe0hCcvWh30RYDHaBzBtKihBUDXePT2iLXha6%2BUCTZjMqcgEEqQQzcgohImuXD7qE5qsN7LrpaSTOYm6uOi5F0IFP4l%2FtOnVbv2MUz5J31Dy9AvOPzPul7v0V8otwEpv4%2BMqfSnrL8XbVeYUHAWwJLjdLBpxRO94TfM4H6rMLuC3ckGOqUBxfmI0nUhDh%2Br8TPksgGnr3PIiDXoHKz2htJHUTDkMuxIycBnarsjjdqeTNEro1%2FN7S14chvJjuQjuCzsx%2FCrmbGqvYOkWrZip556WqbKuzAbSNoiIhnK5A6nmXcVQOAQ4pgHBQsvJLOg9QRkQIlbrDDBA%2F%2BpidHEARI91ZicZi%2FNLQwA7FtnpVzUgv8sxLmZlsJGXca93eDOu3a2ABx3e%2B2VRJ%2FU&X-Amz-Signature=8b42ecd49e94bb296471003528ac2e17398173e651c68ffa0a6ea66f2feb97ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

