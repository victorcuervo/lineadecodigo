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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5X5FZDI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRe4Nk45moSkRudn3dkXgtEYsbPHv5bfYMsf4Vs48tPAiAyR5wSLOA%2FMIvfU62EH7%2Fnzpx6LqkUbHilxvziBX7x1Cr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMyU%2FMwA2eigJnTqZNKtwD7wYq5IfSu2FAAnKNF6KmSTz01BK%2FoSPvfYB71Ar9dPuXz3ZwbcT3kSmm30RkDqbeigKUG19kyIUHHw4lykxrLZGH7BAQGh%2Buur6iEAXfgfuGF7qWvOfYGMJFIx2cQRYpJHPqgKmhXHia3zb9wGu4aIKh%2FtxOM145c5VYSOHR6FKvqLj1BfRwhD1bdJYaSuWTCtzHEudvQxAVp1LHQFtl1nfiXWOobXJIb62okYmYpcc0UMeEZlpezZsjiDtmEDHOvs1NMANLLnwEsNiwmQ0fXRW01AEyn%2BmEvKfeUq5%2BODMuS6Z1vEy2np1hL7RnYHr9d%2Fx%2B0ppeYAxOXy%2FLHCxz3lRWX0CEITRSCa3X2G5sLbSg0J%2FDyi22dtSXjITkncnJEDeIpXA6A2gtWY3q%2F77Qzxvac8QpZi2ze%2BwyqFTYYr9dklla1hZRUAzH3U1RHvaYnRbdh6xSUYDDjZJl%2FltgvBR2emobiZNzAG%2FgSbeWpbnON8jWaNdigGfwB8VBp3UVvdAxZZSug9eBvs%2BdN0%2BOeOGa%2BWBW4Mf5CkDkMjpUWud02%2BhIGDwdIrjRyw2wbcIuGwUIiXnHznq5iOsdoqWNwVKmxemumqGdFcAT6novKMDofQEZoMpk%2F7pVm0kw0KbQyQY6pgHxkau2c8Uhav%2B8oQu5l2zaE4f2ZB3TKZ4lPKGlqNqL05qjSfQFX4%2BbOJdTkchi1qH9JLc54MC7H9SqyMR5NGdEVFKMshP3lMjz0NX%2FYpDLuhJ6mGUNOVMv3StmlvC20y8XAakdZ%2BUQSU%2F5igPV0rokQgB92PqeC%2BylAOphKMe2pa1FtYx7t4cRCv%2FJS5Xbd2dmAf6IwMmRGVkjshKD94I9mKRSEV9n&X-Amz-Signature=c1ca2e987f5bfe250e2036e4bfc95c85a9b4e7f03ffdcfd6d4aa1cedb64196ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

