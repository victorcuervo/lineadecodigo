---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643U7PIDC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHETN49YYQy2hlqEw7wLmDbhgb3hPalO%2FE2Ct42ZgMf4AiAip8gJuC2UKYSRlI%2FisM1oFGoslGCQm09KUCUaFrEivyr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMS6kqOSf1RPiC2mtNKtwDvSCR6isLXjgwf2v03z5%2FAO3%2FN47tAAHjT8w9%2F23CGDei0dNp2klyMivkoFl3UgDb03Rb46eJIUVVETPUMf9SBWlKuva3Ia0paWLY6UP%2B3jeLZ9Mal2CxVoncvr7CIQpU8CsV7uxeCxiuUT64OaYsifb4W03Z7r3R4b4QBvO7W%2BVONNXbeTlR23WqnJ6OFpRaiSPoEnpTB6rfGvKYNfte7busJpWQcQ%2B%2BnXxysKzJEq%2FNq1hDwg%2FOM4RlxZWs6C9zJVF%2F5ceO09%2FtjsgFsVJFnbbnkiVdTD2%2F3jJU5K2ihuaxG1GY6Pp4g2x60pKWGPx00K2co3RVNngZzlH2n9QVCrLwDE5aDjuylOPWDsbw0kIS3aEkoOVjnVcWXklOGpaMNsszbE6GnrMxI8W%2B2EryprCzi29hkN6OVY%2Fmhf22JH19%2FadZrX3K2vcHJh4NxZ4FWbJCDLiiMA%2FedsX0CU%2F5jgcUjvd%2Bn0guex2RYdwY58rM%2FwDnTA%2BocNDHrRfr8rmbdMUiuFW%2BbmvjfohkaTR22QPpxJEhQ4%2FUgCjdjkSf9siWZgSOuVBdJH8adTSmGvnvH%2F9MYExvUvg9Cc13FdC5msSvHFld2ACEoKreR1V5xyWJfgTr78YC74kbKuowitzGyQY6pgEV5%2BV1C2oQywofbIMttBNkeHjmzaDgDKvxQv6Teu%2BmMPQqNMhI6wYr%2FO3gSb%2B2oyvPKP42AV9%2B8FwdkcN28VxaN76OaQeNEGFbcmyPKeqYSSd0BfgqTwIVwqv%2Bb5Lpk9XnXuqiJYvZ6BwvMG7hcUkS1CSIE9hGkAXk9bC0z98nHC1LrASUKdNpe2Dk%2B3J8dWb%2FmoDrzLL%2F3zZm34ejTmIlrugB323T&X-Amz-Signature=2d80dd9f14efa182772e85aa16612dcbd94d870751079211f8980ee01c52ab82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

