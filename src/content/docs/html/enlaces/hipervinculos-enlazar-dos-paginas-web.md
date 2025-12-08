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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FGUUK5V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICm5qoXIiwUpYS7V9zoAsWeJt5Rxeri3KMRSiXeiih%2BnAiBuuyDrVuvSE%2FduMBQ1OPeM1i4UKo%2BVbWeWstqjxRs%2BRCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4bSxrurqJ3UfIE%2FBKtwDG7MweVyM72UZgK07JzYB5thvDFQ0LRA2I3KaVjvUKp9OjQlUajCaG%2B0%2Bu9a6s8D%2BMx5rlqgFWYWSY8GigiOU6Uh67Z3dTvapl8q3Daj93R9%2BP59BTnyw3M31vFyEymUwT6xVI8dDXxCBZjj3i1DsI1Rfowlz%2BVcROWrDW391qa8z%2BM5UoaO4olSFyRVp2kLcIwtwqPqmgfvD5tw%2BC4y5mhajEd9dB%2BM6Qv9Hlg5%2FdRJq3wz1OzVSXC8VijUtE0JOc1y%2BuaAnqTdJ3BUSzMRe5VzJ3QpKXJycvy4%2BYr7MrquRHR%2FsnaPvPO822TuBHdOCaxlGWq%2FwlCrFeDY0o9SEMxeUfFgMCzeARCmerZ2nDe74c8Hv9GKuUwrGH55Qv0B5PNjmxR%2B5L2Yyn8%2BvZPHBlL2naBEHRCoiMoqJ19AGu30sWkg%2BN58BSHQDiW%2FAlsp4BWzglHub5c0%2FTc7AEY3g%2F0ERos4C8JjXDKiLxFGZk93T%2FI4OAz4MVccIU9blEnvS5pKuRbOfPiEsKK53mQxwOMx%2F6yf35fiA8N3PNv7QvosQI1vu1%2F%2FdWaOMpzYhNJWwmxnw7rfTGTIb%2BgqEkB0DPA9d6ct%2FHGfnBhYGKUNh9BMORqIpi4yHuRvv9ccw%2FMLdyQY6pgF5keObZh1nPIq688pgPotqaZL5depRgvXFusfVLPdV7Gwt5%2BM3bX29pyvVKi2sdpNps4UG%2BzJ8b178S5DnSSm7h4uD9%2BopTqbhqiO0icFSugwyGSjxBBEPe7g82VtVjoZcy5c2GhXmH3zCKmVMSlNjo4G6pwMiLeFcQsYDVdDyOl2WkSrnOYvvRqoX37XrG67DH3V0pIjIkqbkOLfG80bfXpBFnrhJ&X-Amz-Signature=ea7f4245b9192e42a0fc1cfc854597041bc48b0e033d5b25200c2961540f75a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

