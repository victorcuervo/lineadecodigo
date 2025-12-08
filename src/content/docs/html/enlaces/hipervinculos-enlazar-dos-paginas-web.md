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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIIP6Q4K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcyWObVOOmWK8MWndFr4tO6jkEtG9y4QF2bchBnTjC9wIhAIvnO9b87uHJB3ci97FpEbPHNL7h2l3AwbqbF9hARYK2KogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQzpJCkk%2BfYTjM1cwq3AMkK%2FrBk6szYyDFfCEWGPgDTVmIHRvwEkNa8ag%2FtVvSw15xjf39IeZGuqTml241PNQyakByxBcD9caGDVVoYdSGsYp6HHgQu%2FthtHGC%2By7qY4D1c2l1yAZtRXBqupkyEsWFiC1Jlfb23s02%2BdH2726sZMS6NkJaX0zVME0W3am0sY8JGUZuY6fA%2BbYZfQshkIaFqthimc4CrTBfeax6TfRBzIJZyadtIkui7E4g09uF04gi3LsMWO4vuj2g73OlHkaALs%2B4p8WawgdL4RAYPPo2lEwIIzTIhbkx%2FWApZUnQuOGOGEyKuUYyaJ6UX6vUU2SgiPcGX%2BRTHBq05qR%2B1VvL9k7KCghZM%2FFXFpFOIq2G0ECA9E%2F6MW%2BpRGsp9ZlmW%2BkGexPPQBpxmd9EvIJkwMh%2BCHfWsGsaDebGFi%2FVgcwX%2B%2F2WpdzGTc%2Bsoi2FymHsFM%2BnYkZ0H%2BHoX8abILmv2eFXOXsqm%2BsSllE24VlJ9BUNWNrS5T5KIUs1MEcDVe41zFoXWdbL0mfNa083IkyQi9q%2FcbEKHxMSD7A1j9JGzODpWriBtR4iOQU%2Fd%2BIqRn3BDnKd7uL0lGpRiKXVgMC8meHs%2Fl7KAUR462lHGRaMdSE9tbOhaHKEmK0V2i%2FrBzCG0NnJBjqkAYtlwweE%2F0HzYHgEDr2IplOj0%2BRVIA4cIs%2BGUCD96ecJfcNEYko729oPEDdVS85jtkH9hHJRUHw4HM0yAZT%2Ft6up7d0cMUx5f4ryVxubOwYCUnfhmV5ZK9grY82zBb9p2knGIIOLdCjzEGfMHK5ho0JzJfBr6Fp0%2B1vBRdwTeOCZ%2FMVywl2mOFXpLYC4NOXeFRNJkhRgnqYr5HCMgwGdQnCvvcB5&X-Amz-Signature=abf8aa08454cee3cf47e845d30b18d293100d7561ff10fc4fa4396e4c88c7ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

