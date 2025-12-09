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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSV2753L%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T164651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9ul9sdAkiZBfVSe5pleYXZjWQVcUE3SEo1dV7slE9OQIhANPAeGTzuwqmmVgmXoYmdNsc95Zls2IAYROphkcjCxmqKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv%2BsW4KrDhKIY3l4wq3ANRq3teeSaSPuPGcgjEyIPz%2FgGJJfdTwHB4WqAiMc2NqkoihODtZPrIrwFSqYIAylGhrFk2HkilZiNylXApYpH4yELynOZN%2BiyNCMRrxATFQBiExF3egpRgmm2fI2bJHxgNfc7divgcn0FPgQARTf0wi7D7XCcb05BoEAaehvzQGoMh%2BRztxlGo%2Fahf4sjOKCDh%2BDDXnfbYt361jiSNEFM6HYXowSBEJMt8mzT04f%2B6h%2B3mwzltFj%2Bn449ffX7U022BIHBNi%2BaGYE7LUKWjqxJN4TBnVtuawlWIENqhvBoUBDMuw7SLsrFKv10jpU3UijuqxQT4rwNyVSBFBScLIyMnCwk9bIWuwNZOAJ0F01rM7jUPtplil9iTnWmA%2BwqjPuc3QDFUYAP2kNdnAxyTIlcNIWJ8woEvv7g2bEMR%2BfiERw%2BXWJJ%2B0oXlEUrqpAtiQKoSm2hoP%2Bify1aLVhD4bvdQXzI3iSiDhINf08KjHiaijt0symmGTjKcilU0rBkvd0HXTekRcAF5cjSnYp5UmBv%2BqvwUSZnBR%2BHDKiXm1%2BZjksptFgrFnc0V0Z0aSnbadLkULnwqgG9rOYEBdwUMqMcW9rJIKfabywlRSdHCRFS8KHHcanefFpqAGmZMTjDul%2BHJBjqkAZV6i0VrXG4QsdNOxsJchPlxpQwuHDdmRkhzhV0lUDUah96Ki1oWhEh5zuM%2FU8tIleihmPLbZJUD4MDoRGi4D2anYID1GxHLUjizDErMc6i1%2F555vVH9PXL6g7A9utVfu%2B%2FhRyCa5WXAMlBJVN5SA2oVt56OwMI3PXWSca9Km3RC%2FGs4jfn9lWBqnm4RCoRmnm29BRKPXTj1hs3bik5AFKGtY7Qz&X-Amz-Signature=11d843052429ff8590220d372fcf24c460e275811ce63ab622a1e18dd85ddde1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

