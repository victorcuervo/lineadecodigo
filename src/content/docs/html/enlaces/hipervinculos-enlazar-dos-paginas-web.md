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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIVCTNMY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T091018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfp9eRqjs9TLqCWLguHpUgA0WZaqo%2F2MPJw6nZKpmttwIgO2KHfYKweecujE9pzL3drILFy3QkVzwrUMMBzleTy4oqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BBjD9s1tuXEA9BAyrcA8Z8ouRSBgXPc%2FRbkaV0ZXvUyvITnRDKuZMtwZn5PuUlfLCz4O9qa%2FZZbaCBgGT1cwHPpO%2BcSPWq9P7nfMXBI24LaQel4LJdt7rD%2BqUKmC3zc5CraYMrzPo%2BtHFPVSJrOHmInY%2BIE%2Fwu5zR9F%2B17XsipQL1hs3kWsp7RWKXoFwThHOJ8KMDafaMqK3mKHeeEf6vDqL%2FgsjbwR8yPOmtbq2bndJjFpm9Sd6F1C842f9gAk8IZ76X1dvjUKJC6L9sYbUQgM2aJNNHhl5QZtFnmrJA9KiJSPQ7LBBWdKav6fAE5EC5XKOQinYBxdhF0fJQcKq4%2Flihz47cYxPJrShZZIMruUDwQ4Y7WyHs9Zadz%2BqodCfGiaGzVtj7npveCyATpqx5dpMcVGDAdW03ePSqH7Q1E0K%2F%2F3mX62ACAdUqR0YlP7IWtwyzZU0tWauVtOdM94XGl0baBh3zsFGkFA%2FLqnFORDuxjnvVo16cmSttd%2FVWgx2VSkD5HL%2FCl0Aro%2FFB%2Fax6Igy%2F9SeIL4gGS58bsfIZXcMP3Xwdbm3e7p%2BHCyvcyzwklZMTWnOFGhglmGIaY5M6ND9ZjGmodwmiQzpsN%2Bd9vtmvjSPiS7nBdP5x2oJq%2FUaP2WZZgNK8Jy7Z%2BMI%2Bd1MkGOqUBf8wQX1XoYiuCd%2BJr%2BjG9A5DqGy8ecBhP5jyljn8UvS77b2O6G8NiN%2BJ0P1SwN3aJCoSl3kmuzRkui97R69NUnk%2BymlSCPiGxz%2FmugD1jvyAtUa4wkkaopzdv3CGZh7YeJye9eQEZZs%2BeROWff7ZooT6Me7Hg2TYk%2BKUyEjOrHElQMQuDuN64UxIrNJjno63kDKemOd2Mvp37ht3DSLtH89WQhY%2Fv&X-Amz-Signature=18e01af329eca1d4792ff9d6795145283e0c3bc7819ddfa14a864576ccde0f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

