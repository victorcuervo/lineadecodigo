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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624B4VL5K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm0HL62TgGfYAmBX9uGCV9A1koEhpX8QFV1WFGf%2B0ZIQIhANSn3IKNrva1UnNDUMYqID3KqURuF2PMkFdK3iijf0MrKv8DCG0QABoMNjM3NDIzMTgzODA1IgwNzJMeX%2FKYXp5Q720q3AMZj%2Bfc3kWpe2LPSYKuMwBwu8xaPyhsy55BOpNUooalBwWEo4sJ9LIuVhwTSdlL4uRyBXm8fyO7EwEGOlVfVSEqJVAudj2gd4uVB8iTefoXZTsWiqy%2FVGdhDKlRsRxBvpiIBYlVjk7neAtOPem5Q59sBgCAa6rhU0o6%2FQ4mjF14%2Bn7UNqT64wzj4OdizTf7vj7tlO6O01362myY7LkM6jC56mNsF9BGJ9niFc3MrmyTpy%2FAu5Gqa1qUHqDt20eTIcODHOYH53E3A2hL%2BKRcSaBuEUr26liZ%2B7QiMW8TBte8MPf%2BH6Mg8YIqbSCbwWaH%2BHypK9DamE8FVSEHDi1v8sjle1BxKRf0I89tIgaa%2B0WQmZASWtKlelS8Zud%2F%2BK%2FWvdiDCW4qE4UFqx3RlZWuD29LZk2eASc0VMoJfV1dETth6BOfC71xsFyWbd2CD1Ozy7zwMzxq8Oo05Uq4LD8eVhj%2FEO3bTVociSYcuw7vnUU7oHEGmqmoEt79tdtRzLYIL3lbMfBr7BDUsfrE%2BWmSAQ3k%2F1l7IHmpCjFYA7CPHAcV%2B9ejzIWVyCVRUy57cqPh3rISv80llWMfr3YH19AT0yliN4t5D6XxaLLJXkFvePtQfgcZzBZgUJU6AD2LrzCv3s7JBjqkAeYzl%2B%2F%2BYkc1Y%2F9%2BdoUT9xoOyCEMKICpRxqtI%2Fg7RB4h4hy0MpPvuBbbnrKpSR%2BRyvwu8Pwp32fDQ%2BsN%2FHdCTpAgpYeC3M4mjtQPyL%2FINcv006TCgn2ClhkYkdA%2BRAzrsBhdOpee8heOZFdradwiQrmK1n%2FQauzNsiSZyl06hJEOuQlBI9LroRUQsYpdhG%2F9FZun1Q6zYCBa1oXGZvlkBKk2xFS6&X-Amz-Signature=151e1e044f1d33c067c480fc7d312bbfbdacc67997728c3c900a7d199bb60a67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

