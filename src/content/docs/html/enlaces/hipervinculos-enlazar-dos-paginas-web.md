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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SIRVTOE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK9caAQysuW4g5OYecG%2ByJU5krcqZHBIgnd4DQecT%2FPAiAZp05icuq2KtP%2BHwRS92vHedC%2B5TyT3plRMXhHM%2B6KvCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMPEzli2632gdhVPZ0KtwDJTt2rvFqNkpfeD7UwVh9xNWD1Og3DXLuodiWkndf5MNVI6fnxs5wXo4QdS7xSTi8hm8nyhi79JAtAmgRNXfLEDwXszzpcQ0%2Fj0EQBR5X4ndjeWQe3kynRuWAP2uP8OEx4TlR8GHlCoAewWSZ9t%2B1DGcIAg7VLUAm3h8PQvfit%2FLH2tBvXXxCpYBPHFnBeXD4EYzBCZQMahmqz0kkc%2BTIK%2BCHb9MyGy4dMy0KL1%2FQVpa1Ap5M0uGZYwJkTS51dzFQTwViafVn1LafJjcz4%2Fq54o82z8j3pfw9aOtI2XLhp9%2F9AXu7K%2Bnf4ZzqvhWQPUPhfOaZqF1%2FiIqYtH1AfEJECAjlZoV%2BjjwPRrQaZ7xxgHCgBU5qsye9LraFk%2B%2FJ7g7Qj0WlmnSGmaJA81H2sPzJoD0ZknROTE4TIrAHP07muhrMZeIec71sTw2NY9fNS4DtFA8B7h9qjKqMh4TwSVjKHEk98lJDd8TH01zfe2kvsyst8X2UNtSAcuBYwpqKYlrJXvG9L0Byp8WHgiFQr4eWq%2FH1zab1pSUDBEdYKuwj6TEEyrI3%2F9LuXy5RXuKqGPxiWzisKiGMzp4HWXZSqJpws7%2FptF8Eh6IdbuUSC3BxjnB%2F4zhElMYmHO83d24wpd7OyQY6pgEDlEQpSrwol7GWqzvpFRj6BzTZ1z6GL7Nmth3J9UIlLFiRBOlXyoI6OkKANKk5xIA3UZZJe3o5%2Fw9x0smOMxa5SJFQ0BUhAhE0twj3uWa5crUe8T4yZID9wBjVkaQZCxHETi1IP3Ttv6n3ohevOk5vLeYMJinHrkDKImc1sqhe7dYWfikXQTh4hNaookvUb%2B4gqweSy%2Bgy6vQtk7lKlzNzFtA5Ocnz&X-Amz-Signature=8abc7bb8a1c61d223999a594064001d4e85f87db745807a3af1fae6bb23b2911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

