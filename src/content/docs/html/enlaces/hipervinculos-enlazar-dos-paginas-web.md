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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ADPCNB2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCslLUNAMAZdzXDuLcxV065ak2EvRTTkhRtXLv7ev2gVgIhAN7SIKAfT1UwjXJp5KkxR1cponGkHH9O%2FMeEgpa9itErKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVVEMbldY88T4JW4Qq3AP3Y6nPlvw9sqBWyMsrzSFhBJKT2cQTqKXw%2BXuoZ2VWmrNeWbHuAy6itlHDe1f0K9pBfCjoZqd0Yofmkn%2FZqMu3wmV3OKFOr8Sw0XqItVb2IdArgu5LexBL2OQAj1N0lUbkjcCWzH3Gj2sCFt0qg4Hfgq0P0yFoAMiL4vR%2Bw9v4DM%2F3DBEq%2F%2BylYABqYjf%2B0g4LAIeFNosi2TnBtsVnTXzDcp%2B0cAUhfMZ5Av3xVxR59jTD01rLcl8kVXlThgdi5o7MjACZHzb0D%2BusvpahZQmKMt79%2FILNbcDLDBimOm0gfdcKIDG5o7iuf3wMsfmMisvUYKbvGUkgB46BAZ%2FrGykZxI2slM64xlj6htSi35MbeL4hPQfxDXSPKWDrCdbI3z7%2FPoNnmdXdifIrhd%2FlktnSQLf2z5m1jzYIt%2B0dHkzb8k73C9%2B7XF78L7vTzltXf64qVPi7kKcqgnJLOUkwSwPvFNBf2sBujA60QlNKtOMupNxOLhccvwxvsw%2B%2FAvxw7hGiMrs%2FPNjFWAuesBI35HdADZrmA5u7AUc9jaBVIcM4sez16BEJwHc4ti5v8ThoQHEX9A%2F8sgOp0KC57nldAzkufKrMK36Pj4u6wyEobJ7pRSoMS9knFLN117azLTCv%2FtLJBjqkAedAFbTnPkfbmV%2FYsSdE52O%2FJwK1YX15e9fl%2BXPZaO0l%2Fkuj%2FE%2BBS8wUBiX9liLF1uirDLV45FpFU4mVikVbA9riJxBVJaPhQIZ3HyqYHFdvCkjs3SRP4xEYTcPDnMPDXPHmlYsJA28YW91ERbkUTL%2Bri%2BZgx%2FYGsqiyxOcI%2B%2BNvJmxAu8RS5r6Ns6qv%2BUurk1Qi4NZyGxWWF4mcHmYdp%2B5bbNnP&X-Amz-Signature=bf469b0b01bc6315a69c022a5b2396ba51f321b30c9207929598404cc2cbfa54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

