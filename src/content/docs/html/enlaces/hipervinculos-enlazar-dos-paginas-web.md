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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWLVF3RJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T154855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNUQOWyjJOk6i%2B3oqwQGsUHwSNNqOXhp5x0IFqxPvFNAiAU4Pf7wxoyJFFrgDOYsnsP3snvDguzQmqZxcKlHvM%2FGCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeqBlJ35scOwRpPyRKtwDPb30hyvXaZDJyyJvjcX78Sdk4fFzvLHsyVzP%2BBjkIBtkFUOnQSp7HS0KT%2FDTOihg8kcRyZhkpx3kg6kZ3EjUzO5WbHpT%2BStJAl7wTLcIECa5QG%2F%2Fuu8KW16b9AbYNzkrhzt%2B1IrN4yJsPlWMG3yLxJlBQ04%2BhAPrv7nFuBBIl4B8yXWcaW5s2P79OzYYswA67Mdu9r63GQqO5XT0LOc9rv%2F48v6ZinlxptEM6RSpARbyGdC3B3dXNzlPscjOXZCrcrOg45VL7NS2bfSYwcRB11nuaLkgbdFKthCGG4Mx05SHOWK1rDFWmP6I4O3CJHUqciZE12V4Ewzsi5xUKxYJbU0Rm18LShUfdEYCw2xahDTSQdqkk%2B2DzYkINzkGT%2BB2JKpWy1vSWc4iqXPJnV9P8Bkx46%2BKPuNTTpttj6gWL%2BLsCbt3nGd2fYBQ4nQAjeeLw6oCylSF2YcCXkZwksH8z5FEWE1dkeIXxkNiok7V4d0jObFqbE%2BvcVjOXjKaF2fa8H40CduwdLkJYLKmi1YQGGe98bbm2JLfoYmdL0GASkV9yX4yxqPiIgcFzCbHN6k0rslTEd%2BKCSI9d9yOOCDJf6JRu1juGxG9%2FT2SbzbnDV%2Bl%2F8ge0QU6hpSanXYw1N3gyQY6pgFXxyTCzuDSaCj08UApOK%2FDfDi9LG35I4n3c0DSF2lymEdEtxkQpYGTiOdOleCmPPWKc6T9608N%2BtWJyE89qYitxiGrEYflJA%2FRjry3bMXxa%2BoCeyLDAzr6zYbAk6WdsO0M7p8QEtBZDd994kYM8LpHKTpPZweOykKYHAVekmrTHNEz9O4DSbLUiENKpr%2BP%2BpN8sgGXIqdkStCq0YNw%2FaPrjMb%2FSbAc&X-Amz-Signature=78f74bab418ad37eac0d82c8744c1364f9253955faded013c0a0a48021764323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

