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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZX6UEPO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTWETPBb79zQ12kpXkLPty3w1f8nj7f8f4OusfNlJKpAiEAsDQDekjq71ct2TeP27hkzS5tg4IZ3s4IPjnzyPm2RmwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPoH%2BXmwSOmf3IYiyrcA%2FnARslrIjA2iZzSgERkWXAx44zmM%2BkwBNaUo%2FAS4En9%2F8qxi0wxlWA3cFJHo8rZOhYW7JGHUZKlNI7Hg97xBfreoniJXXGN%2F7To7uZFkiZk54hJ3ujeXJYkKlbQf8KubYRwwiuDySH4JfhVl5AtqLhHUrm4LPIVWcA6Zt%2B0%2BVkslXqwlDkHo9c6POd9NZNwaTl2Dpb1j%2Fj0CyPeyi%2FmtTyuS31DQDF0LeKaLVuyyob8H3rqj5H6PcgyX4DpEnfeRGbqFXlKyct0t7AHjI2aupnl2VpOXH2UX%2Bg0Ou8JTho96ZJsmz3SC7jFPNkBz9gIJXJIV6pqyuGrPmO66aoprsCwYJ%2FDk%2FGdD%2FebHLD44TgpZb4tEZ8Xv8r%2FPNYFqt2%2Bxbr6RW5IUHhJXrM2GvKKNtd4L2yFWYBorgNs8JZEwTBxcxnq2M5kTTLLwsqIvEAAHtJqFFhPl6ekHWMXQjB0tZWefpkZ68VJ8Ad9REdPpK7%2BJ7t2BHE7WyIwrV%2Bri99JFI%2FpW5xth%2FLyAa9G31Kehr2Ivvqd9obO7ISXXogJaiwSUlZdH7vS%2BLYkRC%2BN1h1Pqt4UYHS%2FT9FASR5UJxympvuw7Kj8wahWD23482enbxhQyNnoT7484zEtbGJEMPTc3MkGOqUBTdr9G0w3uYdGP7mp%2BQyhT2zi6gR%2B5pX7HzdoW7ozq2nS2AEsXwNxZfjiLVCgSLVjldFrWHxSlKUlNvbcn6Gxgb%2BDbXvDMou%2FiFdz6ud3EPHV9DhdatCg%2BE1GxEcFgtgp%2BaHj5NT7BEJ3AA90kQpOLN5zxAC9uMJTWO1YjVwWmkFyK%2BDtBJ%2BQ2a4q5S1rZQLRwtbD4SwfJtcBvShJfLff8Ey9gsZC&X-Amz-Signature=22e8c7731861fc96e572cc9933a1d84fcba6612bdb0ac1784c1398400198f664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

