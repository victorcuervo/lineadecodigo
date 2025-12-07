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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHHOLXB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq4XY4LXKZzLTB%2FoUvtYZQlY8kHuN3wJYJ%2BHDfWjT%2BfQIhAPc9K6GdHsqzTuZJIyqm1XW88Zn1nPZQGLtXQKS0IcuGKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymLB1A%2ByU5fhh3sqkq3APMzq5zs5uOjupedFY%2B7Q0qSJGOOB57NaXiSMblUjB1ddjXprq8%2Bu1RHN%2Fc24aeLuaPSl7YlJ7miFPIh9R43uyBmXQ5LFGWzsYYVtQxSs0aHN7R%2B9E3g14pZgpy77ivo27%2F4qZZY1IilxQTYThwAmMfyO07aP3wwHNljHtexWcgkZDJmfda75Eo1SnpvdM2UAPbxm3VaiLLoT%2BtgscAByCC1fMDT5rvq9B4WZOUUn0BxD7%2Fq3Q3sYotSQbDrjK%2BJtnhjOT%2FaBe%2FlwdfHtJXS2clTV0jegjospLlRZZmn7zdbUVnhdkpgZylbnC9r4cWjONN5yGPs7Cgj3YLCrmfe61PG4r6ZnZ3ef%2FHEScObaGo2lgbZsGQ1THtII1m0Euig1jAHrvP4ZMHGty5yp2m1FVJQkwIv5OUtLGbzaF1fNG%2FTFelni0qk1Xt4t4FfFBm8GMg1LBcJBqGfxKBuOLfTTfGGHQ51FRgCvG6Ptn7Fld4zU0mgxJHF%2FHAdEc%2FBqQU8fUZ9qX9LjIe8XNMLPbxHt0d8niDFS8C7DfQ3TC7hfM5ILVU4Yk%2FK2anyd5P1zSzNj6COfBbr56f4QNjML7n%2F2mmyg1QYyLcpMdxK1pVd%2Btw%2BZJeW3jPG1oIhvp2TTCx%2FtLJBjqkAabLEpyy1q%2BPI51ZHM6PDlz9M56ZgyBqeeqE4R9Cvf7gPs09uzn1YA7l%2FoJZqM2x5j1yqhPNVyxFuDcz4ihV4vCdTBfte9%2FIAmxTltT%2Br1CsxWlCOIIfqeuvqNCfCBKO%2FvejckNSzyQsrs4zNqvetqD0c3oxjLzYsWFDBqQZcjtuVykcoEK2L9Xak4j7CYZplWLNZRxdkLJTlZ3b%2B57DSPLMePd2&X-Amz-Signature=ebef4688d021af17b77f9d9012a26f50e1fa869aeb4686c0b8df28b53049a674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

