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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2XUHELR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T233624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsley2AV4tnoJUbBv2pgH0%2FbltveMtC2ROq0XN3mcSUwIgeGWughL6jgDp0UXaiE183Kh2%2FqvtTttR6%2FkobeZ%2Bj28qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdQJy9C5geFI1HPQCrcA66pG7kq%2FNlHEKCIf%2BvVvI%2BqxSD5KduTTO4whDIAfQwE5SRzEwtZJIlymcXE7hZzoIyz%2F4A9NVm3Tcq94FnLvdgTZtNasn6kgeoEnFBX7SS0zdhZLpkkc95UBSyYp5xoHzph%2Bdhelz2ZxdHFZ8gzUx0vU9%2BNi7sIYkZAoeRgd9tTILOx5ukrTtA3AqiZMCOFoawWkLsi0HwmN7gw82vioDIC0yUP7FPEMQyORHXjJ2R4KBwFXW2crjDKVgzLL5tLXJp9CGcqsnk0ieEEipJjP6I7d5tGleuqaBze%2FWIGz6SIm24LlfDkmilMAJSccIbrivCPRhlqrpOeukjhuE9jEo35oIyqjJJ3XOcsqpzgyZEOwFuQxfWn2cTGYH3vfYK81nnsFHo2sE6KpKeSZOE3B6%2BBj9HHGdl%2BVln%2BdKC%2BEVoYY34L%2FMjIgXTX4UeboIHQ7QwMti7nqbWnSkNy0CTkQfjdHVDOVPT2qTmcX7%2FQU6bS7sspQ%2BZkN4dtSHgeCgwuikicAzrLZebLR59mFozUeTzENnYfj8%2BNIQ%2FTm%2BDNosTw75n8Zo56W%2Fvw4hFZjUzfStyfp5hLgkg%2FWRo9EZ8jthNzmjSiPC6QOjz9PQmBkdntUrTdbzSOULIKLz8DMIzD4skGOqUB52N9fuBwu7vK73oCNRZNNRXvmvcwmLNobonqToLf9Sb1iyttdI8g%2FJizMCEdVZb95LExu0Z1WMTNTPj2AD2Jn%2BtQi%2B28pOtM%2BJn9oi7H%2BTdp0CvkWfXthoe6XbZd%2FiemltLNgK0VK7Qf6PblKi%2BtAGY3udTE8lCu2%2B4fxjAUoMafIKl%2BfgGtkAXv%2BskgPAzyTnq4Y85%2Bdq4CeRMikJLGjy8b3ehL&X-Amz-Signature=542fd99873f36e4a896e3a6c38033c799c36c64b78715ee8ad29964e6e4162cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

