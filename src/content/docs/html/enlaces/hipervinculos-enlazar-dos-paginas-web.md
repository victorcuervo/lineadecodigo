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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAQYAEQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHzrkR%2F2alAn%2Fa5Am2T6Sa6uQEJOKrybIq6PSRQVBZtQIgOVaqAgomac9Eq3OMnal5kPmRHrwL2XBvOcUFi3%2BVBTwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDI0bpZqD%2B1ErYtwlASrcA0i%2BPgrEenxdsC9yP5%2FEm1nYfb8v%2FkK6S8TUUCFx0mTzW%2F5eI0%2FRj1LBt%2By2BeRSr0c%2FhUgkn96vnFBKgabxupYup2jjTaKXdfsV09Oje7Z8T8eNAgY2f%2BGDjPWKyfviRlp2QtEWkYkMP1zgwrD803g7Wv2YPWSYM1Oy7dKFWtWaTGRHwRIOeGZkEiKoab8dO0Q0o%2FvQ8qXKgMEGdhZJr22iu22XFJAH93M5mg6X56cWAN3rSP2lKcD2A0ewW3X1bgIZSi3ZGb3mnMfcPZQDgbO0v9FARgh%2BqO6oeuDXvfzgfjis2k6e9jA1oRgscAjopved8xJUl%2Fk8lEQmQ%2BIeXKNR0jz7T2Lu30B89PViUTY9mQVKAvLM%2BHojX0i2tK168UStOthRjf63qBEpt1s%2BUwsalE9hOiK6wcObVTlUdDfim5MmfBHryhOBjL7%2BJV1dapYyYOpTxzzutTYDqzuyDy0fLYPDCpc%2FyFTcfa5nL7uYfWAgto02ZodpPMZNM70Boos1EoBEnvzgTgAx6fBkdCiZCFwICStVn0KjjWPpsuC1pXOD2Ha72D%2F9oDtdIOkTaqEXVgeuw2gnmCU56Pqalae6Zo5pY%2BUZAwczpCotQa5Zi7%2Btwr3VJsrRqfEHMJ3T0skGOqUBYoVfFUcQnAa4zTodva5Rta7KMUCz0shCJqOfNLc3NXJxTUUlVuAI%2BwuIpwM0ZSBOLx0jAwW9VAs52mUn38aMuMeHwp85daPze3VgocG8uVzwY5XX%2FnzpykaBwPFxW2Vad%2FMX%2BmVQAYLhcGsm5nMeBMuEFraOmRxfc78w9wusfOU1XGn%2BfleTfPJK1%2BfjFf0TZjKsn8YbVloaNmXijUmWJ74o2HhR&X-Amz-Signature=4e77a5aaa0e84c649597d0a568d71d45c6af4479e4f9676f3ffdee287acf9d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

