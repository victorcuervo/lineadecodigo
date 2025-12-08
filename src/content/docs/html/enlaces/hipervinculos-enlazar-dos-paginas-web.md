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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H2CFS63%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUfS%2FPI4g%2BgJXqfNznt2CskoJrJ84RcUVUuxvEaRi5BAiEAhmgTVI00YlDRU51zIbwKb9LyaKIOs9sAZtAR%2Fw5nyukqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvGMjdqzuxcZM8zkSrcA6IUgJsc%2FE1vnGgrUy9t4tOKZSMHquwEnxHQ1bU8CUey8NNjBZdXtsIMtXw4PKPn3OvPk5C2Ct7V%2BgQuW7bl0L7VNxU2M4PibbrTfUfjLN3HgzVRATMhfW8bDQaADQ%2Bpr9q6eQa0TvUkyZkvq1No2qkDMdEVnuGK4hc32a07pzgAOnTjWirkZ5jzHXgHkPXdUi1sWicaPzThCkyICIHm8Na9xjWWS%2F8JqeHkpw7itS%2BGmT4nc%2B1XsDgRuFF3VxG0j7N0IHcP21ExQ%2BOwzxkcqitu5GZ6uoN3QnUGHRdVhKEn5Y5Kge1bDGdXzG5t8R5lERD%2B2G%2FCtxQnyv8zwpTjLi6KZXmsHYRGQO80efjiEi81jidu83%2FOVnXlyuKS4hqM5sDlHyYzdSMjTwZ4mGIZwW85X7PTWjKXK6QgxIJkgqcsvKy3BmSdoXFznzWjCkcBg3VUMhaH%2ByD78%2BhD1Q3L1Bi8kQlBnHJFLQ4Li5vTzHePvMvauImJWc1xFoq%2BLNAVdqbCj2dxpEWZ0NMR3tilAsKXP2Ayz35IlAE%2F0Wl8I6ZEcqAZLOLq57q4giUUyeaug03JdgP1lMNtRmvAnnYuXUyllwMruu0VPJNyqZFDoM6qt%2FZoSNqkC%2BDcKQaKMI%2Fu2ckGOqUBqFmYbiCngg70BpdzOeghUP6c3NuwFYeRDgx1dFTCBGjENFlr0WoJGX%2FURTCcDf8M2m4Ctccq2GR8f13Xtqdg7yH7%2FZZVwPECjAY52kHu2KzoU7vOCKySNFIJkxZQRCKjPomU0Yg%2BROyUMhkNbMunqxtmg1O%2Fut9vZcKBJe9dVPvlHpgCFjoYgZVbF3B7wcEgg6jtr1vgll3CnGUOA4H%2BGPqoV4NV&X-Amz-Signature=a75baeb799e53b5716f0502be39566d86cccf705b57942db7f6ac3c67724be5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

