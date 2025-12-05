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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHO7ID4Q%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOuMPmaMvOKqiUF7inPGCWKUCrVs2SFRGQtDgteSFElAiAe5VFZaazryl6RdMME%2BLZC41cHACYqoPOEMbZ55lAw1ir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMc4VtZPVUH%2F9cShqKKtwD7m5vWY67S51kvtXJ5Bzbz2Y%2BtgkpLNsXaqb1CGWMdQMECA0Ho37m9Dkh%2BvGIBNppFbcAx2kYrZ92ot7Sb3ZPQi7onjPm%2BFcepPAr7slbu9HWdkO8fOC%2FblMFjCdbr%2Fo5KNpq57R%2FMRS29uVyvWevnqhM9cVoUAwHDYCOcnpGkDlI2XxGbUTHHMWxKaW7772gs0xW%2BcszmTcHmvnGvVwtv%2ByBd7SQkGZ80sxcETiDARA8aga6kH8CKo9smqVNkkvHQwr4Pem3%2BDX0ZW4bkjumiPMJT1b2xsiWGjx9AN8g9NZ42tHbZghcwAsNtB0H0vh5SmHEqR2NGYW736KLZe%2B1dP%2Fwk8QmOOGXSQh1ZzwQwlBahIhGQ6A0ITCkM2ID9tRYyDgNifiRbhLnLEvGqOWxWkRycpZiMf1659lip5gezEDV7lbFv2h44MK%2FYCwjwNfewfBeraO6mL%2BOO5NgkBewe5zloBV6jZ%2BN8yothWnANul%2BttNX%2F2U7F4AJvHmU31hfFGghH%2FEzB3ykmIjlyic7XLVp8f2c%2BtuFflM5wfefkPakJtHbKq2v8X0aFbvfFMrek86yP5lg2jo8xGu%2FX0NnNaA9sBFiMFdJ19xBn5xUChkWnVPtqDIENOsEX5Iwn4zIyQY6pgHQ4OraNi%2F2ZvGpjJZyieOlf3jk%2FHQVFguQkx4mwLeu%2B7YS%2FU2ekNhbU6GmFX6OGKTnGfAtSAfgJN%2B8tpuEmzX1pUbFRh8adbP%2FdBYWYR%2BvIYNqXWQTSncky0iuMTfXGZkEMxEgbetwsw3Uf%2BmaqjXopmio51rtdYZ2a%2FCQMKCp%2F6pxYA5n5ZrbgpXY8D30RoCmcjuWfBHPidfHV7NkL9IrEhyDqciW&X-Amz-Signature=fe51c17486cc57e4178950b0dc4a3909a06998208c2fb46367d2210b92938bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

