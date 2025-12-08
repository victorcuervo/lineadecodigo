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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5FJGSSG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnNp7D0%2Ff6V9m%2FzjCrVFfoely1NcW1mxE%2B7ILwuPeA4QIgDRayygrIkPiEzkoWRtjaLZ0mDm2hEIM8Ud%2FhAoEy9zsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAC6aCRZWHihqrW8OyrcA4iD79pDkqVzBuQxKGOUnel8TEoimilxQjBOjNtjVQBlUjB0cPmvHOhffMYH1gFyqaQ%2F0THO81uE941Y1ClnwoQOTl7YCRqzvXOmGaJFgpWH%2FTlzV7guFadyAXxIRfzv02ZwN7nZ%2FN3dqZHldeoa8%2B8VPngAWEq43rM1Dlt5mloC0HVt6PE2TanUWNzggugQN1Q2rHppZGW%2F3v%2FBaBt1G%2BidglLDwwguNFznwodgPoZTU9%2B7NktuAKWA2AcmwL6Di3dCUxMAUJeMo3%2BwcfvEVAWVf1VwTpIkf2weF%2BeXWypMtY6kyUnzCo%2Fw%2FDt2R49UOa0JCNWOvKm3kgGNZl4vkNLnjup3f14XuEF2Acs07p37hPbZaIqu3ZXSXfB2IqV1%2FF%2BLjdhxiwK7f7V%2BlFCLE5Eqpe0GpDCcyESGeGczjzsc5al1vUiepi111E5V7FlDWkPSfKB2XIT4EEvEBephjaWMljJ%2BMkYI7nY8kscCCe69jh99xzFeD4bEViBG5vF1om5fRH81wpUvmsI3oQi0WFDISo7H0OudZNMQ%2FZWsIQBc8hhRnoOpp8rujrq05lAEv4JlPpCU242d61%2Bkxsh2ZHPohGpOyD4b6%2FjBxmgxbDGIR40OnemXMYjR%2B0fRMNqz3MkGOqUBTz%2FI0huLqu23hcIyWiu8wfUkYnetV7s%2FgW1lK%2FDQekcOtj42ZgIr9nMoqdV9nq8XQU95hIZHsQ20Bd6xNF6iD6w0HwehsjdymyuKDo4ac5yU2IBNGLDDIc0WXnLoYEsfEakERHPP7WEXKjUrtCQoOxyspho%2BWQWV83TjYfUnfX0fywsFoDQAnA7iz%2FivxNCjGGTm0eT29FvuWodRcNPLNy2i%2By0b&X-Amz-Signature=5935c9c7ae35bf708690f0b8a3c37e6c8c6a07fd3e5185920622f871aca972ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

