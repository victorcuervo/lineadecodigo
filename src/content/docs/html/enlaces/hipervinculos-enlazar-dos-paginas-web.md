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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNNOMOT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDet%2F1ki%2FoEePT9oTQ9edkaYrjg%2FC5ZxMYywi5YHWKK7AIhAJ6%2FFG%2FgRyxX9Q2momTzQQu79VcHUrqNTsZ%2FnexfgH43Kv8DCEUQABoMNjM3NDIzMTgzODA1IgxkMDuSnYRWPcslAaAq3AOgcMce47c%2FFhyUUhsCHvtGukIHR35SdH4qgKlMayErOSk1aAofcObVIL1yiwr8wbPUce9qO0XKfvlHftBJmXLCej5m3jX%2BB55v3XC8XeFF%2FR0ZjdX70fmpsHeTLhqtIVLMCvTIvMGmmmew%2BZgr%2FxBR0H9EWTBMAWMCc7duIUkwsoBsgXfBaMR%2Bt%2FdaOb6gkVMOURMeJpUvnW%2FNoIvy9IU1icKXaQXYhn6CYDj3%2FMRzhlOmuKmn9HU11oJ%2BGvuHVoyinRAFo9zcYozs5Am3hjsynGWHFQ1rTkBCgUgDi4R06CzRYxSolJdua9GNX8r8PI1slrGRy1mcCuEfJKgpjYljYVKWRZ%2FBACYGP%2BsLhH%2Bk5ZgP54TngMbQ1Xrmxm%2FY44yK6wHl9odfkrNiYnviK%2Fp8aqwUj0n%2BilQLvC3d96YpPmHn0n4fE48D28rIhwAFwl34TMY%2Fk7blFBFpeyQAGdXcpvcpxb9Q%2BtM15FzMafLLiDparO0V6nrxHSphrZGpp4mz7gFv87AufhVzWRsz0olIUFV%2B0Fx0%2F4OgHliedDu4jUJq%2BQ4R9MZrGR8nHWFZNTwOE78z7JzveG2JfWoH%2FPsIhtaHv65b6fsf5HV801OA6nVyn6T1DPjt9%2B79tTDE5sXJBjqkAbPf1ohixPZCy2tXjuoDs54c8lqd7KZPh%2F9qleeqRog8mhNcjZrWPqm9Ze%2Bra0ePsr6SiqH%2FSD1CoRbFo0qgKWVkgjyfHgGCtpxyjT7FDxoxnb2SKtNBFqiZ1vzNFFONtXAw5bS4cVDhWIzU64QfgdOrd9BzpcSYbeM7Tv45EkyA1d2%2FdpSloalj9hK4xvhSqkQprk0NWfngPfnXI%2Bt4TZJOuMLm&X-Amz-Signature=18ea31278b7105fd615a09da1bcd560d0906590c31dcf3b2f7badd25e442b10c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

