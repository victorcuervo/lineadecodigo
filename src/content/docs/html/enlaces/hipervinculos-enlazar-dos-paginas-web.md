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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFUWXS6O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpRp5BmoM7GCCSnSgSE5EfikG%2FW7Guqcxaww7eKwPoIAiBdFebhXwB%2FwDryW3U3tS8Evf1tsuUFs%2B4OV1RU%2BXq%2FJCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQPOuFNPlBm1ISeG5KtwDUvqCslNPFP6niNJdG8uryH6tgzCrumqv03vErUbvUMMUpQpl2mkuQ2Zj0X6kNUyOGR5DJ%2Br8%2FgpyDg4rpWIb6dY8GsgBHgFv9O1MHfNfVCoQesWmr6bQcQJM8DFhzP%2FD0BXh%2Bq0UJRC9K7lTrKU0jRzsqJ92A0afXOF4MDKeCuBvjH37GI76aGqVtKMI04awp1dplbRh3IH12y4yzQnydapgcYwG0rcl74vpcZnaGJ%2Fc7cgRQ8N6bAwQOAcBX3SytvbafBSk7WK5c7yGoGdhd5O0h%2B1HZz8gXumlOOMGSz15EGak%2BoUuPHFAr8Z8tCEIUQJzuKzSj3UlR7IOpHEZHoP8yoYQKsc9j0hQyNaosyPIKLdA4BkBV8U6XdqKUjz9QyydDElZ56LU16Ey8wmbk0GUjWCNTL2W7zcK0AlEccBBO%2FL%2B1QofwBZG%2FcvkkX9hDOusdH95Uhd6mYUvT3G%2FRO%2B1YsA0TjTY9TGFA2Wv67t3LCGktbYPOX%2BeLTrnYi%2FtTgiY%2Fjjm%2BJ6QzJhJRabca%2BwCUMWFvlqY%2Be3u1Yd2Ga3p%2B15v8OY2A%2FOCXVKm3D7ltBCC8%2Fk%2B2Jr%2BfCvxVI0lr7Br55x7pgQ60xNUNypAF87jO9IlMrAVvlvoRhEwiO%2FYyQY6pgFg1tcA4Vl%2FyWwgP3zY6u3LutKAAnpjyffkwBxP%2FFNa6LCYd0RSOuVVKi3uCPikOvPQbFYY1%2BZc0ps4ZbgylmxQIJxm%2FluUACiUBRmUpxfDxJjppY9LW5I8tTY%2B9vIIlb6KG1TWirY7F2K%2Buc6PCN00hUKa8zrViZg9QUP5%2FpOoCxokoG7k3vf68vVQLBqcouyOvurZtbbEWqADJWKdARbO405jw%2Fi6&X-Amz-Signature=5271fdd55a5311564336dfa1c1676925234180491a48ace61180c89445d8286b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

