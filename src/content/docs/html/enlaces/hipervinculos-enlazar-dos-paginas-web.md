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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y7SHNYM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFY8Mn5OrPjfyZFbyoPWz%2FIq3nGh0my0pZoYV%2Fmla2YbAiEAkX2eGkx4TD2PhmxB%2Bovppk4MIYTUWkFdyD4WH4GB8%2FsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOO2KtPyNAHMO0LRtSrcAzn0GEzttMncMG6qWMAxoDhH4eDytBw%2Bv4THzJati72hsQHRp9kbwJcQjqZfNgpAl6d95WIx1VoAaZ2L%2FRx%2BohE1VUBEdX9nniGl3fuTxe%2FH7A1CKGnfg7uGtModLnZddkLIHcxaAmUNN1B0dCWUM4ItbhhLey2vNqUb9v8QDXgPlEHQUwbLpQD8thHFtPDOO5IJ8Jr70pH%2F3aH9W%2BnFjG%2BASP61iDzf2B3JleaWQSG6wIkWZFOztWXwuxg4RFZT2G%2BdPFceFlXQ97BWAIOZe%2BLLR3XgYn2o1I2UFraLQnirnAHU1roQGgf3wXM8wQFtsiWSj7XWgHmg%2BFQg0mLNlvxTV9%2BGeJg%2BwyvVnu00QcuPbHYfk8rk2Ag50vBZBoB0Ocml%2F4ilM1Vm69tIS%2F2gOYQ1bJlnGMl5WlkL015qGmb%2BhAjFjaFRXfFHKdb0eRJcZx2rmprLzErhYP2eiWfRABUQ83gUSsPgaCvVaIPxIlH67%2BcLwtLb0r%2BqrBGfT%2BALKbSsShcprchTRh5dpw%2BArZETBQh38Edu5AiRhystA3EBAL%2BBAKZi5CoyaxfCR5ow98LPoqs6npHyuD1YEfSMZ8EWyaUT7EIMPVe%2BOOXVBSIt6LzyEg7UGV8qxEdVMIj90skGOqUBVcGvtAfLso8kdfxnp4wGXXXkYziOKmBLLmyeXiFP62G5BuAm9Tk65Kfw4JOUvbkkEycsxt1tKau2L6AkylRoZato4zMWAN%2BAMiGcm8ZhmU2U%2Bu6%2BNYovnN%2BfHs9lYDWz9RLYsWwIJFi%2FDDLC5KtBmoE4BuhuzRVSbOku04MgUzBi6x0pb2knAn3n8Z1j0zmMp2XcnZ32Iuv%2By0WePP2WxE2lWsI9&X-Amz-Signature=607b1e3b90bd48c3c800703ceab0a766fba7d6318fd111fd2c39b936f8989540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

