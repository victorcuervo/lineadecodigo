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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCZX7A4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeSQAGDTzghuKInus6kc4Gx%2Brq8t4b6ucwBsBYVAZ95gIhAMkTBUj0Etk2Soy89azZ8Gx9MdgsQx2yfH3wNqfmHDKGKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLBR%2BOzBZvyGID4%2FEq3APkBzT6NUO%2FBYQFQL3qgMFDQFyG98MghAubej2TQKUv4pkcZ9i4RzM94I8cI8uBw6oeIMpe1pT3Idu9Ik417f0ctDOU0J7HRZYIcc4hPD6WJIQlOhSmtDPD5Way1qyHFUeNTCQ4blatEWYS5Ujv%2FNnu2JEq1%2FnIimmK5IOdVx578%2BtbFHq2B6DUhWvdjCBi%2FYrROSpPs1xvZCydpAvDvZ8WBNLIDh7lQWgYJXMr2o90Q4eCUB39GTCyDrAzwHaSPAgGTfsAcDtBlP9cjAu5taYCIx0UEdYuZNN0V8XGyS%2FNIunVMPI9jpPENLkIHjJYMEnJm3jGgXbu0rE%2FI%2FbdHw21l6nsrdoZepAI0CMdavbgc2wzRJqydGBGqUTDnZ%2Bazhjb7YCdf29fELo8n0XU0p82SJclyIVt8AdSd%2F5EZFVCMvK1tCHD3DaCTLpUwG6O39SrOK2O3G5JNrQeNXfXzqOOz1vRAvCJnEaWl8GLFTV7tQmWLQ%2BFjKovbpwbsFZCB8Kh9Jxl8p0DsLLyhq%2BemiAI17G%2B1E7qxQsMbpAzDNZNf6KpdHq6mNrxVjA9qzFW4cnBnkHXiN%2B8kLRH5iQaxhRpslEdHWH%2FChP1GTl7v1bo2njay%2FsbAxhGDEN51DDg%2FdLJBjqkAc9MitYTXt3mJbM0lMzEpLObKnMOXdP4gG0EuIxmiAlPePHqXhwe5kGfBvjOU%2Fyf%2FKgRajM9bhrMOChEju62fwT65xKmJXnmFn0duqbDGq4vzxJIgbGg7duaf1S1blWiqtnCKlJTBuj2YRka3P4EotLddPJk%2Bp0vsGZBw6j2cMJX7OdZAK7ZXGOHZ%2FZvp3KNlWjYVz0IYS%2BMZsNLB9hzru%2FLBLVk&X-Amz-Signature=72cc489974a70b46038c6c1e9a2652c0f2a6fb2c3154d84a56e47a8f7ab7ac74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

