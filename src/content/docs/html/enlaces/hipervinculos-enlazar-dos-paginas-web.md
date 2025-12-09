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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGKFSWLC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T153009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmiccgPLoPWY%2BjtgGJ8UuIUsLVYW1ywP8eRr8SNTy3cAiEA79DOEmWb1h83a%2BKnk3t03rvVf15nDyn86F6%2F8%2BbeDOAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnJYf5Kc4GBm9p6ZyrcA7HTS26slH6wz46hMDX4HwrfGk1dKg%2BuCI5%2FHTpVE4xfVhzVVa9x1PN0WA6WxNh19xwVIytSVS5RCldgdq%2BETNzcXrBMNmBUauNOQpJt0kZFy0ZbckPu1ZDMtRCwEo0OqAhDDSyvQNmNG6EGThn4NA1NxsufWm2%2FKKRr6ZN9fIiYQj0WC5VrhOTRqSSqx4Y3BE1%2BVafOvDiE5H2m8JtluiTtOPAdutc4LcJLroM52lw6B5FX3mRWRdVcAv4AKh0GU9xXGNahmIcmnQBhmrfxOBmFxemKrGAZlUh4kfmo4u3kka4AArUAmrjDpUGu3ihnkXAVngqgtGbspaTXAauuN7CNHd4AxchUg2WBO5EjRthR7dpCyIKOB49dAt%2FUfyiSG217H5S%2FFLWblrZHou26D1j4HOgjinFIusH4Oa5%2Fv2B93IK82FzefRBTmgludpY%2Fjlb0cBMJLKz4LG0mzq4zLglxbCdFi4nsVcpL6k2LDgX00ZdFkV0LHW8dDFzkVL4GOBflIqGyusKZIS4eiXWo1dRUbkeWum14FpEmOoq1DDSnrnw6Cz4uhgYAskN01%2BF6CM4t%2BhBZUI%2BXRRzf6ZWQ4eIkaRR6v9V%2BU%2B43GhHPWR9c2%2F%2BqFm2WrS%2FwOwqZMMXd4MkGOqUBPnMT2qMbCR7vZ3Kzy4cx1ILCtIdZOXuoW9lxTKuymHbExi%2B4RcaMn41ZH%2FWjISb%2Fi81hZTpOeRE0Wc2erPOjAUnIu1xw1rJKIQogXsx0q3aQF6VrRqKUZJa3g8E3VvqzAsW4wOhm3vB9z5gz7IR6N%2BJ5W40SeOhf%2FcaJ7r32scb%2FAJk%2Fp9fWd8ypckXXKidyw4z5MSgZAjyE02ZbnujjbLTrWAhB&X-Amz-Signature=3ad8afa577a10bc6aa6e39a2c2c80b962ad03fdb78abf36728921e73c77c6998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

