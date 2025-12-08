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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2DKRSCO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGS8ExaGcPIT6GQtd1J%2Fkxz5SohrE63lbFCtuTi8Ka8jAiBWbKR7MyMPNmHcYa6DajcgO%2B2ni2qcevfqzJHmAuTRfiqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuMAayBFNOotMZ8XNKtwDeVaGFrTiRlLEj9xOL4QnXVEeoHVlimMDCKaX8uIE%2BqrLb4CZ2WDnN1a%2BgWr71sxubUAc%2BiMzWzMqsnNNSlXtWj%2BPYdOopY584FUFHykxLkPD32xXiTdguCyaHNXkaqiQU1w1gMxtyMX82BR%2FX%2BU2sf%2BHCPHiacbInw%2Bw87NeqEd092J9FYEu9TC9tnUyn6Okm5vgHs9fIT%2BgHz8LuRDk6irE6iWuLN8i09iTtbfJL%2BdA1262Wg3p4GzoinD0Y1zbkUdCKqA9J3wqqbwBi6u6SieCgcsUX3U5%2FMn0Xbo9C%2B%2Fr49V1MwV5aQwRKO0ZSLouLmLpO%2FeuKN4wCwykdDLZrth0ekPgwmgDObkntU2d%2FhRsZmRUX3Gt6SXPfa2vcYgZb9F%2FcSMq3TAXrhbZXvXts8UCQ8Hy6wL3A2i8udRHe%2BzXMd5SP2uCo0CxirhYKJOquZTLcz8JFZo292H2rRBWRPR70Yip4vKozRXqcynGRY1hMUrMQG%2BWhW5i12F97FlwNzpmUL8b6aCOw%2FrLFAruxce1pLazU2tYIVGtAtIFGN2oA9pf5qUbLV7IHDRUmEAUi%2FsLdFz%2Bciepz7zh3G79CRXQ%2FV4o%2FcoL722lKmX04tozhOVgrbEEdC1VhfEw7KHdyQY6pgFB40SllFyO%2B%2BkYxC3iq6DZSahMG%2BnN8Alf%2BhkICPh7Sjfh6FfCEQ38WNpFsOQWsFYF%2BSt3bI1MxIA0sqoDNM9vilmAyFhzGhcQkXnAqaQFRHajQkt9VHhpAHdcvuhjt4JhCu%2Bmz%2B0EyYTtgIEm0Kzpdj6iF%2F9thK8ew45f6Vvds4ijrpnMNUq0jqzJfFSOP2uKL7bqkeQeVeCvaEb42v1uCJEf%2BLZJ&X-Amz-Signature=fd89ef37469414ad1eef018905affcae576eb813b05038e56b8932145bd1d7c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

