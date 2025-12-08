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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNQ2NYDU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQhsJh%2BzwcN5znk%2Bn7K7pQ94aqZVLYdhMZM2jI6Dow4AIhAIkWC9W3Yn6cJGY8hrmz6sAYSHk%2BnSiTEUIuRVS1OI%2FCKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAsNMvzEhbAIe3M5Mq3ANvCPu%2B0u7Fz%2B04sS79YRb1Vf6I156PeoAQLTFRil06c6n4Q%2Bw9chc0kObdeXankfF1q4Ta9A2Vd9u8X6rvGWR25Rtu21w4A2iPMS7a%2B%2BR%2BIBFmnqKHrzBlhMbYyAiwITryKLmYle%2BOFQ6njg4lk1UQlO0jR2gJRMxpipnMd%2BQcOgrxUaU1ZlnvLAnDCRbcQhPrSsi%2B3ZNhTQis13JXELaUObXS2Pu%2BQWahpZkH%2B7%2FVh4fy0pbq5ul8FPb2OoYUyF2mSKPWFYDUYZ3i1Uv2ZJ43xsBvQ0%2FK%2Fng0aRITwdJQ9qHCBYfhSsLWkyiBxwlHBsMa1gCqslcMxcLIGydhuu2meMJgj6uR2GT5gzCyOtFFk1EC6XlD7b5%2BtbC8%2BaKS44EaUKKfRYwWAIZo7yrnTycZecmWtj6kwTNMUbttuzN8%2B0%2FYCBgBfuhwdeW8YUbop%2BqIkI9DLBgDQ4qniBTZfAjuVpggNGuzXUDE6Prb%2FGSSXxmDgr1e6CfzBsMDIwkS0%2BjITDGuMEhQVr6wVyrd4rzDpmbV8vX9I7nDfpttS91HmfTRyemol76KSRd8gtr%2BBkcIbO7hX1fhjYkZazV3V7RBU8VFMVWDcV3GiyBhVeLw5vfw75b7FM9ebMj8oDD8lNnJBjqkAT8Tqv%2ByTb06A4qFuio7y7J09UfhLvBpQSULAo2IJDVcsAKhTe7v3%2Bd92NvtzNJ0%2FsqRaDnXgGYpEsC%2BT2SOoVIkpC6UJQKIEu4che98Wb92ASwYifsTOX4f0sta6MSBzHWP5w1VwkxaqoxJzZLDIF5XtG1gfknzmsoJa1rFZjzlqgAc2aBjZPoQ8EhxdUusb%2BU%2Bqp8VI6y%2FaTRQMEbYV8T48PEU&X-Amz-Signature=7083a59e62e47af72b3169968bf840595b5c8100bb02f241bd713c80a653c529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

