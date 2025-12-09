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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGAOUGUI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T205228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9hCzP1c%2B4iZ8aop3rx0VDayEeeilOTGvG%2B6XfRVxyTwIgE09Z%2FDUKcSv8Y899sUhyJZEbDIx%2B%2B%2FMbZwmc6mkjhUwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuiMK1%2BP5kj%2B6tRNircA1gmH%2FdURiBLnQlwocyk4kQQOsreyYeFn%2F8hZzYyM4350wm0dRFw95eAFxoA%2BqFLSWa21bfBAmUt9YyyMhXKDbTCIaFy%2FMPn5gDTXKoMJ3NPrwDe19AaHpBqJVsJeJJc0hjPfn2S91oWn3jOFCsrlqajJCLyxZrNve%2BNKI5TWOCdPXD1wzezZp%2BQSxq3J56exO2XZNu%2FKImd2i22QbMkw0%2FMlgzaufji%2BbX0oxqOV7rO%2FSOjHjJCznmc4aO17X7cj%2FVmZrBPXpWWGn8Axbk6WTZQc%2BaJC4rOHfFkFGVx%2FVdRMHOYh9Hvz0co%2FMkUgAxWJgds714Ck1ghYr3TrF3ljpxWpqXJOrMk3lUkVfqxg5It5bZwHitnj4r8uYTe6%2BP9ufStsYvDyHiic8OORGYNjLeGB%2BHrcoGf%2ByqrMaOJagZ4HaDt0gW%2FmsBtuk8y0gq9dscY%2FW8w2XMlsoqZG9UzdwCth28x2r7AfEasee1ek5MDWi9Nw2HQ0mgs9QNq4p4D%2FzMuIV2t9ADPqIslvy%2BYj%2FdnKPXqfe0N8W1swNSSRbT0rZK9eNZVINtRIvqTlahYaVWh7zO%2FIXk390pNMgfofPasqzUF7YKnMSHld8rF2nB%2F%2BuoQX8Q0vm%2BMRcC1MNb%2B4ckGOqUB5b17oXLlhssmqzY7O6JdU5YvY8D8EHmY4AJQ3LztYOWJOGM1zSek2lZ821oZPm1z9MZwLCz3TLbr%2FnQAvAhI83q%2Bm2PaVarlOllixa1RsNcl0XxgzDQ%2BQS9c535NXUI3brOJqxODo5JY0107ZUW9ulfPsjuyMWR7ff5R%2F4hwyON3iSkJIQ7Tz3iuBucc24y0hw3yhiO4LIoVHfY3gRqMDzQjv4s9&X-Amz-Signature=c2b894527546fea364ea219795441a7df459389e6f4eb5992f1098ab5ed5c448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

