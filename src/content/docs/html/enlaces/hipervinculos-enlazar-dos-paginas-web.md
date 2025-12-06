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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMNWLM5D%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBVMmnaIS9k4mv%2F2JD0o%2BmNqpn8M62mI8Vx5EnZBmemwIhAJtRiesvrpUPX4UwvQ%2FV200pjaZv%2B0kSBmZQwQNsKiQtKv8DCHEQABoMNjM3NDIzMTgzODA1Igz40fK6udWbe1mc5Mgq3AOQeRNTN7WEEMwUXy85ktNkJP6KXC6xd3GTg5fc4RzLAy4R9g1HWgWuAEZBjYbDeCwQSrsYXDp3YOGVqCB821Ab1WX57fxbh1RqgvJnkz8tiY6Re0tifYh7k%2BayPTzg6CMuDFWzBSaVySlsiiuGSP4VVvYuITywsYhtitToRjrXBvu%2BBoO3FjJG8eT65KJIFJx7U9XNaHMnTAEL%2FNppVLbp%2FBwdMZL6tlK7qhCQHflNcBUbIE5gicyZk0cM7aXuYWKKAiVaEbA5BmbY6JHbMo1yHPRfpsK5rHKcC2XhgeRao5C0yRb%2BXWX7PnhocWS5XNNVFSfVYeQ61QZgF0r%2BKrD8wrsTvDSbIbBiEm62oeLqehW4puk0%2FMw2Z%2FOeIg8%2B7KTAHvPq6%2Blvq%2BfJOqOVWn7YX%2FKPkmXlIjSWqKOLEq18GGLzxjsaRRUwObowR4NzaKsGkuuLxFi6dc0uG9QgQ7gI%2FflBxxlgZM%2FezFukF2zfLHou6092XaiMsp8%2BtzqLaGaKkslBvyJp9rQ5RQnCjXSyczllLZuxbHisPSHByCjqvpwGZwKP%2BWMWdiaY%2BQCoGPQzfp10WX2V28gGgnS4lDfDUmVmt6aV6Zqvf%2Bae%2B5JAjloyhNFz2XjXEGVjBDCrvM%2FJBjqkAVJa0vKjxcXSftqLmyIZhr4AlioRB9PcHN89ry94rbJgjFJ%2FRwmd9djZFyiMzMVkDkF%2BQgARI4QtzrTyqfg5WoPZWFgRuRJFCSOg%2BYmLOJTv1wmQ73sTXUoTvcgwdlvjucW1NjWKoqyHuC2kOVrtQ5sl4z1JSmBiAsE19q0%2B6b%2FiC38MLh5Zs35xFcmRm0dgyPgEb1gA3I41UJuLmVnu8PpMTEHE&X-Amz-Signature=47fb5049408492a91489094eddb410106b4c395852179f6aeaa89e76d87e71ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

