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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AMBXYMZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwHemcNm9RdTJhCr3LToFJ5Is%2FHV66h1f1ermp4%2FDluAIhAJ7AjLwlxCLrG3qiL2YL5z9JsB%2BWG3tHk0vr8gKeeKcvKv8DCE8QABoMNjM3NDIzMTgzODA1IgzMJI3cDPL66RYSyq4q3AMSiu037KC7YtzczxmAS4%2B2rjQm0usBLQcRMk2nRHbk73259MXGSB9OX63Ixxl8VM9g5GhsTGWpwYY9%2B0cyFAokrI12Ir4FIOLpG5gAKs3VLeDHMbwkwm0HeioorRWUYZIcku8sAKigQR872gstOw9f5yb4tjp4Vk2e8U26pvkblYExXOjvKRS2zQ2Kd7ugAotNAaGDD0dq3iTI%2FP9KdQTC%2FC%2B1ekuHF25IkvXjx%2B%2FdIN2p0V5bQNCubEJ5SALvTOoClBAcSovn7wu%2BiLoeMHn9yDs6%2BWJf7%2B67Q9Re7RlNIxV7DQA0wF45zYs1IUFhS8LI1ZEPg8wVvgMu00gJktb56wKhgVLyRFOzEfsf0O0m9IDhC34r0PeUtD3gs1%2BKNgNVt7LwMA4cKDoWgx%2FywEpmnUNPbn2gyML6%2BAyY1Yq66N0Dw4FLrzaYnR%2BuWGP61jK%2Bnez4qMG4PPz9Mrp0n1fqs3miBLN1VTXaE3NgBO%2FDgAGlvx2UpxSw06iungFmSQjIZ35kujXZYXVQSAhB%2Bi%2BSsQfVknssPNZa4IdJxuBf5LLtxJP67I6IlpiAiUpgeQvAkrJaoRThI%2BQKW3%2BaAWepMeraWgXByvHM%2BCaIDNkXdIjWlmPM%2BqjrRH6ykzDejMjJBjqkAWXr4XRN8fA50MGDbVFXwfVUDoMQO5OpjzxnJaSNlh5nVNxR5vYBU%2FKqVbkH5u0HymxNKp5vyhQjbmw7dOgN4GUb0r8T2JnljlQLexDQ4wxXTqPxnw%2BmMvMB8%2BJtsYdK6SocxQpY2ZUiaccslTnEvi4y9ddqFf3P2xN4W6yj77xrmSDdB4ZdSqJF4Fwbmf84Kvpw2JCrPfCh45mR39%2B5AOdKMFSy&X-Amz-Signature=de342c0a5003f79a8efb324f45976572bf1ee13c73cf90b4e9c3aa1401b8d9fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

