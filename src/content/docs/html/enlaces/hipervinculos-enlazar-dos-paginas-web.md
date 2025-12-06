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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBM3GTN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBSvQDSMJEeOTZb1qkK2LYxUy7URdWKl4MkaGrLp6CJQIhAM0zRqRp6CF15%2FJRDJLHXRLmrGOuXirByn%2BPhg2YX%2FihKv8DCHEQABoMNjM3NDIzMTgzODA1IgzasM%2F%2FO%2Fwy2gAudRIq3AOptaO1t7bsXX8JRMfnI5uxFsDxLJR5aRKL0paN32ybHknzu%2BhuMbcdjD47vRAT6BTUkZ6yy7T3sx0YHJ6EonUUR6W%2FEdNxo7j%2FGmfpPBMt%2BjjhJQwcEhd432MwfZhH8IZT4sXZngXMz7JF6b9%2BgMZQViIw9Ttd%2FyG6RTLWf%2FkCMyVplytCO0GWc18G7%2FWwV6ZW9pgB6dU91N6wApJbhXqWpzc4cBqfOYP96Jq61C6xlVAdE8LaR8c3Hr7Ptltik0qmG9Rk7YZyfmivYGyTUCNGnZRunUPZzFJOLmIud4NHpJ9BoXL1Gy7C2qp7L1h9rrvFOeq0ld8Te0GDPXpIsT%2BvSfhNP1KN%2FbF4VGyBMu0XW2roVqEyEgBVHn%2BX6M9OXfP%2Fivx0%2F2QyiO5wv6q%2BRv8TypaydX5ZhXVdoJCTaRXDBkuzVz1jA7RV%2FANJwdpZMGIiy8jqbVIdSroSMbVnnDYzQRDL6cz8dKDHYBqSKcQecnQXa0qZ7Jmc%2F816ooD2J%2FIuisYcxkCSs8Tkw6MIVYe874GAJc64JTgOHJ9k5fsfYuRKtkoWToKS2UD5egfDKewXgy8UK5Gzvt%2BX4DuTojMz7tYgMHsdNE4nBynC6BVJBG%2BkLm8DvTcOz9aXCjCyvM%2FJBjqkAa6WgkCgEmR75B16h5yH0HnJKYU2qgA6zBh4PifHLf6DPf0toZ21C6vQpp%2FD%2F4FiCnY%2BhoSYtQg1Vk0ojegPnXY8SUVypUsNTpdyBCwA451HedwjUgc4oXy%2BCXqKHuRDbWvFWBeKH%2F0rG2XV17me49zt2XCkXx66YgJi6WnnjYxTd1gZIyII86dbklN0qxVhtReNBvGi85p1LM6ghBn1p6NhTHK%2F&X-Amz-Signature=ca6545efc32e5d6e4099f231fe1cd385edaf86d58d44eb85ccac56c069e7ab4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

