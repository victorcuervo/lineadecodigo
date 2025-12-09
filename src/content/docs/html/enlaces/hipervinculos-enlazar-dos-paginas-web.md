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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S64OCXAX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T172347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdXmqoByzmy4lMYp9eH2q0kvRi4rmLVCvZWaEcIuN%2BRAiEAim8IjpcfExaxUqAXSC%2BN2qNpTjqqP6EW6yEZ%2FXL27SoqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGks86AC3btBBVxpESrcA3Z6uVRjpv6jPDkKgGZ7CT36oClw39URCJesJ9sNaFY5YeWZQsmFktFqiWYS%2BFMOkONuF%2Fk0mnNympUFGED6t5zIxyion%2Fly2WMgY3JyVpCzAOhwqV9R6kpJHPxJaY0OXKRoULaE967Hp%2B9njPAO%2B7%2BH0h2IMXhbsLN%2F2mOKgAs6EJd%2FVMkO0Kh1vex5xLFti8jOlAkQ%2FGb13t4%2FzYT3htZwsMHfromcjzG%2FngKqXb7cuATJTBnKuyOPoSIvioGigODzprSVAXzqrcmoKNr54rpMxCbwhcpm4BbhBf7UwIMiv0ZIKZFy%2BMjhE3J5Viu2hnUsNUwsW8rZDgpCOziaDF%2B05DwLX8Vdv%2BjtDREYH6%2Bes7I7qQ%2BAdy5kvd8qWkufVJANe8VwCTl6LqUzamXzAWaLCoIvHqny5WiPqQxXMMcfFw4GLphRN3BPD8NLfhHyJUJIclqJXv9VDxn0MUZhhb8lMoasNMo5JjPomWfQ08VaT62bPRtZqP6AMEWAs4yNRITukFBviMXWEYMWy8SRPH5ec6eYPj3XldBPfmalu0pTZOH%2BEIZ5Nv6Y2ucLlPXcCYyT%2F1aIu9edI57HmGEjcXa%2F4Wd63awXGJ1blutZzJaybWDLeDcL6c6RJOEoMLSZ4ckGOqUBglpxTTV1XbTAxCAKZagPvUdCvXW%2FY4k7LhKP7qYUG20djpQjWSsE4emZbSQQzOsJMjIUzNZmvX2WJlbLJqoKqYhD37iwBn2wK9BNhcUBx8B24CcM%2Fp6pxvvc4spRUKfeH7DUpi3YW1Czn4qPu2AD72hM24ZfKkaGrlvXAoVeOZ8FSeMXAfJUOd7bi7uIV23jKINVQb4tdXVSvsqI339%2BgnD49kNH&X-Amz-Signature=73765dcf99b1ac8b543c7239aa0b26cdbabcec0c5a5c5707f31fdbeb26d30229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

