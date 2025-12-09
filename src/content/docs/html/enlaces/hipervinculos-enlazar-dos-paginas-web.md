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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZXFY4SH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T233012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdi30rBXFU7L9oqqQkt5E950bKOs6KBJsGPreEdoT9awIhAI1QzoYW6SYKNl5jMn0T0l%2BMnnPofLD2d73rMDni7mH3KogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIuk013NYWsM4Bdukq3AN62n%2FSR66%2BCaViDjP5YIfiXN0VFmAh6HRIk%2BiPS8EnIOKavGEu3xLPrnvHc17FilRPTZY1moxCndWnQ3V5hQSlqUJ11o0UPXmi%2Fs8H8lU3y4gj%2BesTIdRP5Zv09%2Bc7rsKPfzKeJOk%2BmsBZg4tN5YmkbEZ0u8kh0ZzcGShmtC6uQecpH%2BTIvssIA8rlvuJ5at4BhBPhGlk4i%2BCZgmyP1y6%2FXl5HB0s2FuEr%2Fsc7hC1vxtZzKvJUtiYqHb6qH7yFj2Th4VzflCfHudMq4OC9HOzQiS8lYM4iG9ELs9oxu87SK4TUoVRt4UL7CpIUniUhSgB%2FB6MzWbSycdH%2FKLnkUaULFK%2B7HPdi8uwQzNqPDmogh%2FBzs2V7MOpHQczAjZik7snNQ3wjxezVoRUHfZG7tW6zoWC8tX%2F0zeXlaIIoyUbYaBw0QD%2BSXToTx%2BSYuAkrzeGYWU0GscMWYq%2F6f%2FgF3Zorz0NwDUx1ae1ylaJ3Lnove2dw2P%2BnRfl5X6r%2BTPJaftqHHOmmC1Ke8hugIQr7MMTx6GdZ4Lp6x5EJlrg7s9AAdo3nFYmb%2FILiYEA6WuByc1SxyxUF9ytK0TARddxVExnqPQ5dMDw5aVokyNWB5%2BihjTkqX0lnHc7Ov5R24zDDw%2BLJBjqkARjo67JXFJ2d47abxtK%2Bx7GQhtwp6IEzjKmHvPRur%2B3nmvpCtFZvLltqtmXzP1lB9PJAy3J9IX2NcI8gporcP7WoWZBUC2umR%2B7MSRraa9WZUfNwijglEVBmD%2BdcHJetwHjnpbo12J5jpEIo%2FGtuSKEp3sdQhNtBPvx5ul3wFPxIIWvqvMfeIfjdPuGUCU0vfI7kMforBdQW6mmDeS%2BJQhqUncY8&X-Amz-Signature=fbb7e11d44f6226b2325609afccb61c1da1ae7bbae427af2a1892884c012125c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

