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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZOOFVFW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4TY7PJ3Y5h%2BxfIfdmTq8pwkwzuWrQbKv0XDC6O7hAEAiB%2BOEjq86etB3NY9gThCYWIc2KiIxKleKEVJ4J6ekLMjCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8GLQFWuX%2FUD7NzYmKtwD7LqGNcSZCaMLI7C8qfm5p3vV3d%2FTeKgk2emK2sgWjxU4aILg%2FaJC9AZgQgzpT8OgJWtTZjNhjCAIYjLuQCbT73%2BY0xUBuccnE888eR%2F5LlCqARRto1zrDktn8hF1zXQ58FJ3kNiHDUhnnCcvSERToiyXmyOreEDqA0oCWDdVCG1qSTkfhniQ7r6tElNgQB%2BpUnf864eX%2BYmPTWYKBbt0OXhhn6t9RFiX%2BBJxmf9sK7b0d3ZZz3d0pugioIlJxEwYtaI1hUB%2FRqZXcMOMN38dBlntC6V15IKC6CU0jY5gto3WI5zHAt8ckSfd%2FnNeaHtJv3AtC7yfJ7XVoyuPFDqgdS1eSQ%2FzxVu2eS9SS8ffnCRd7XY8ZyFKMEZeWjg8S7zrPxLZtwq%2FGB3sdXgEVhMiwHvLpS%2Fcyzj8uBjC2ZWV5jXjt9IDr1Dvx4qPpcbB%2F3pdxPnkHqF85m%2FCcVL%2BMl5xAqK7TqmrWW%2FdB08wzGYsHZNimh1uOXt7%2BA4YoeTGOwRJ%2FtrLvbdgIdDAKML%2BdZsHA9JekKL2MIGHQ8EbXzSniYaDndkk1ovbku2UOXpwi0L4TG0Bv5q42%2BdM2WoVaOZrf42QSVya3JUsZTuynrwcaauO61cLF1y0AVPL3RcwzbXWyQY6pgF09zEYcx57dz%2B44vINEef7bam6sxlQrKbFpHq3v73dbFSnPygNpfvhzN8hF3gS0FgcuFQt%2Bbll%2FOWGV1BC8IcEil2kvFi5AlJbnWKI8%2BaL0uPR304ErKqCVf2kP64wRjIoYuLFPzN8ppMyfJoLMvSXz7j2ObUnTOgsL3xppr%2FIo32dA4uNtKjKO%2F8r%2F%2FG1EfP8O6vILvwTOWUeuIwX%2BfOg5CvUVUN3&X-Amz-Signature=9cf64a6f7662c7b1680ffd4f1b8f581df760ba9516bc875d80db05c6d3e8f185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

