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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JSAHKFF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCQpmY2aWsvpoi7JqMXEzV9t5PRMphUQ9wf%2FsghXCiAAiEAmGUwU%2BL8IvBmVM0PYHSD5DX2vE6wk5jd2kvnERyppYsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDMKlVXXDE6E8jwZFjyrcA4eToACXofDSSXQcoWfAbJrY7xKBihSOrFeUjPbbx3jA1fa7cXdELn5dPCEwu6MmB5rX9p6mF9rkGPYzXWukPIfDkYzh%2F1JvP%2FAzMo2tCedemJi5sANjeK803KIlXkg9KH1MvVd5VmJwQbB%2FyJ9y8s%2Fse9T64NzqyjssdX%2F%2BvW3JdXYsLamBhproIhA0g5%2FkS1Prdz%2FxwGMXtNWYVvS%2BQLshEWPhNiCSUKqvzojo7wWt5oaz2zQGSdCgG7broTkpH4hpPBSxmkblqjUeH%2Bqi6j%2BoM%2FgPuze53zp3LU4ASqmWUOlrwsZlQI8%2B%2BBDvgCNJCNPiyC58XMGXMgVyFbPyaFD3ygciLRu23jZhkJ2DqeNQ4FACc5hIxUSkjDJtMAQT4RgVaOjfCZdED3R57t0aNwe7q1UG7yepH6jowOFQ9FLFGgrWPyRjoa1CxlKGMClG2P6CkqMK%2BXFJROuoJzY2mV9AEL2ZySAXPZxyeNOjORZC7UdbBKQg0vNysmtWGbCPpVHvf12ltFDttbnb4z4VDxBDY%2FK7D2dv439bwUELundkMm7f1%2FCKWU5kMZzkY682kfw33cp%2Be33vtWwodkw5wDqeXvmXUh7w6MOW6%2Bm1hfagQZdhNi6qepn8xi91MKXU0skGOqUBmQhzKODWq%2FJQVyVYipjBarLuwjirJAuOYkezmoCv%2F%2FXcm%2FfcRC37PWUL2fYe1kYxpgd%2FTRHO%2Bd%2F8YmPprXUm50Qb61gn4xGG1cZIIQ5zNBJPRsiGXnqOXneOc1%2FjArAvRbhnGinHZbr6GPRefNx0GwEjekf3iZmpxRipRQykobXTpXAg7Pm%2B5YouNmTa619zkCTQ9uexQAkLqyJ4O77NG6Zm0pZf&X-Amz-Signature=e0165dd802ad8d3a16cf7b30d3039beb6e4cc69a8e7b2ae2c5e6cb12555884fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

