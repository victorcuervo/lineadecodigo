---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHNEUHK2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDK9exO0a%2B%2FPaCewhbMKZ%2Bno6KPPE1jJscLB%2FOMGU37oQIhAIT%2Fit0DmSWrJ4VStedWtLvH9WArGUv0f2b%2FE8EaERvEKv8DCDYQABoMNjM3NDIzMTgzODA1IgzsE0x0%2FFYYNqcFF3cq3ANHl2wCYSN6MvaiFGHzRQr1Mzr7iuOOTlPHa%2BoLMbfH3%2FOkpE6y%2F%2FbPjlpRXgu7eH%2BI%2BSo2a4McivLdm9nFssby4otD0s1loQsCLOX54FHAZWVh2n98YF52OlcNwp6%2B9sb9J3vWsItmFQoGxQ94DULLyE9GDxi7x1OoH4nZzrNl6QaX96Nf7jAQSBF5idKdhaXyAGcfO%2FFUHJ%2Bo0BddpNaZlpMcf8B%2FpVlDZqQOscpZV%2BEafyew4jMEU0XNwIMbmv5C35vhqUqHIJsMZTLW%2F18HabOXfxBc1YS5ULVJoJ5midGVrPibcsZuunuPUxcYk%2BZhGpbsMxgioJX3ioQChenSRTK1FPK0cEMsCDpA3ZriYUiUk%2FC%2BkbHYe0wjQ%2FOAzr9dJOz0xOQ6%2F7y%2FralVqgpGRQSpJGvD%2FDfJ%2B257TaBoTmomLytqoFSSvmos%2BIxqo5ixiWcisbxKCy3wfz6acG5gmyU6lN30yOiUymGzJWYsp%2FbidYWq0wtCtfL4UNb9oxWilyjZaRQ4q5lW9UYtOFElduSmyKTu1zLRZb8LQSKgsM03V4l%2FHX%2BWa%2Bn4J9LL5BgWjhBtTbX0k97XBdickI6VydycjRlG5LSsd%2FEhWrJpv9eZXoUbIVdjQ0p%2FkTCmvcLJBjqkAeaRwchyIwDD5BaghLutYiJzJXBbNXeAIeF1VOEJ0Uk2LpntFOYhbciPZjF3eQvmseaBKI5EJtyjOziSXgy4wKLMzC2KPPXCorEhZsZe%2BDD1tlO%2Bl1rr96GHMZTu2Yoq%2FB2JspLA8PJ%2BO62d8U1WN%2Bu3tLfI4Q74rKQy4R9Cbx8kT%2Ffo7sdAhuGyWh1cqRp58%2FlrO2VtaR2UZI0dLnsw%2BJFTDR0S&X-Amz-Signature=40da67ff25978b36aeab8b91e2cb18e5a9c8b54f5f89e5af0165efddea1bc3cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

