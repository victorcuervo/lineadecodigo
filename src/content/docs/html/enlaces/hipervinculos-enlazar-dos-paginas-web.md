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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAH7DNZ4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgU1dj1KrfuXJdE30YO0rCb5e5ZvssJDNG5%2FghWuF9kwIgWf%2FFv0EpJhD0hnmY%2F3AON1a%2FfzK9%2BiUNQ0VMFaMrrYoq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIg7VWr60Cs3clG0USrcA53DJqOrxJobUFx%2FwNmolSQUsxLxc7GEFop7lbh8yVTKIKqChBaMsorO0wUKuxnFMAEItFl%2BaFWP3wKRLyAkbMFiDcPXfM0dnFMgl1Wf10EoNGazoIk4gAgYwSUC3%2B8Z34STauX9cG29jjkzQbIagzlIOMdVhqOvOOu9uZi1R6FRAU%2FrGClFhmmDN17Yf16bgk8ypWwjtACa2Nafa6BDTIM5JE6Vb9UIgzIYFayo7R40%2FRsaMoZ7D00VUlfqOV8DFOhKiIvU7E5fL%2F0rR0lD8wiz%2FvLmWpnFmV%2FgafLcg8xleIivIW67Rmn2h7l%2B%2FdvNK9ek00rOXehSuLSER8EEXTywQZBEbEQvHE9sf0WO1xDV3y65xKfHGZni%2FD1OE3BFd4Cj7rztRBrApNCbyAPSV7zlHXOEZCEcPXipCjtEjn2%2FmA0cyoERO6Vflc4hdc2BXFlniweIQrGFlciXgbKFQOogBdZqFc5ytjUfJAwKuK1aKgb3dtHrr3J5FSMHHQjNl37OlQ5A6MjYALV4y17Eac4Dz9wMZiF%2BNTgkWx%2BKfkw0%2Bw9mYK5CNIBY9c1jaFyFf8K1PRqS0rkShLcZOwjDqR9WWyNtS3EWN2BRgAHAii0MSNEl1ACQgQ1v7TYUMK%2FGyskGOqUB0M4AFxyYOMArfT6ZfR9Y91NAEROuQZsYl99o9gi57NzULeYv1n9MTDHjJgxEy3PW4dfYJ0NjhuhdQACTXc4QesAPczgFrs2mi2sXcyDRiUpMr7gBnMz%2FdDWntEw78CA%2FXxK6UVdX751hFppBNx1BL8U8SstPRxNgiPE30YZScAYvtdHhUpObVDVVJjnchif1Ck2SN1vRGi4voI21UiouxqmGFgny&X-Amz-Signature=37ece37f2ed4146905ecb9b377bea236dc635f2caf55d569040b0bfd074834a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

