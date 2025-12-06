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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGL3MXCJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLz%2BBHMHY%2BBudHfCg4HKhrJGYPhTq74Uf3bWE5EQ0m6wIhAPad30EiKkFuv%2FrfOfNR5YsTIgRmj0oSGZIqrsxBcph2Kv8DCH8QABoMNjM3NDIzMTgzODA1IgyBZUMsfUmle%2BxZQisq3AO3c50bhLEQ6NvGVKt%2B9vCGmIP5IRBcLrZJYG4t%2BG4wj%2FG0ZuSq9y9BAFjZ4cJG%2B4lTRmmUt2TGACDHUmHvnGJDMbS8tZhkxOjGjR1Eek%2FQXtlsDT50aKUs7p2ynDFdVMv4G8HcoJuXqJ2Ws3tA7dmmJ4S2drggaJvCJEGfg6BYYa%2BfttRVP44r5rdRuBwfSs1ejkKOOESv8imW8GojS5EZOy3EFeycAaVxZmsKlepBmbYtyKigN6BjqtLBjx3sAI8wvE3ktieYluTq0lKSDjyHU0P0rq1S86EOSlmPIbOywoSSaMHK7%2FfPB%2FJpQRt5VYfCxpYS61qZynoKAActSRIwBDaqThjuEf9vnZFFjyI%2B3rV2fcSHdMG1UdUkr%2BGQV4wt%2F8nLMg%2BwLXueD8ScTG3RVUhFiEDmARno43O2TkcGFh29%2Fho30sAWpNxmgTI7Fw48rWuVkwGmq%2BcLCiSxXgrxSN8ex%2FN5DIn3rUcIVLQ0LkHBd%2BPQo4pSOVfVL7BZ%2BFnsgSea7poKFppvEDME%2FvBlFqKXTZpw8XlNrM0%2B%2FvF2mOpFyRscZHtlcrGiqGL76%2FcYQt5gt3VMAYAn%2FunYegJ%2Bp2%2FXotVhHt9ITN6beqFsZJsbqwtdC83xNIiNyTCB09LJBjqkAQjbBCTmac7NgEAB0DIkWOUtRJ0cRjTjysC%2F5MuPAAzfGGsPw0JqQ%2BMvq3I6WfkTxZFnO3c8M96riZ7axvMQJshUy8AEhBi97XnfUXGBHpdQvqKhuFjCoqMaCbILtxT10IuY%2F2CnFb%2FArT%2FAmEqg56WvhSAmapKQWD%2FRFrrou50A%2BBb7RaTFmJ5%2BYfSCSMZndFdMKSImk50kAtms5xEWANtTXTv%2B&X-Amz-Signature=cc39344f34fb50785a0b75a34b114a8d8e576905e6fbee1b781da2d37263b598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

