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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGTHGXOC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl9XzqgYMr%2BeevkZxkd2znhkG80x9Tn3pPNGV%2BeJckSgIhAKtQq%2BzSUW0NZtxLho15Y9uG817Vfaz50znte3Q%2FVhBBKv8DCE8QABoMNjM3NDIzMTgzODA1Igze%2FMQcYRxy%2BHp%2FFMcq3AO9LdLgQn6ZFTFKum6m%2Bfc11fvrLiSZk6kkS%2Bsps86PAgcE63c%2FHGoiqvfF6JdnrAkYl2g4wtkWzY8%2Be5nfN3pFSTMPyEAgmutp52oTitl2zkNkMefVItU%2Bm%2FRwBHl1A4ncOikvW7tOKdY72Y%2BSXIGnL0m79Oht4ZSopPwGfCuXG2vQ3epaN9HZUnaK3sE5Y6TAYHZMHUUG1PDIM8NpVMJVH7MOpXj%2FbY57WQXx3cvl7tJrXAKa%2Fq%2FgzHMiE%2FLkxUNVSRlZeBOLhRe91zhiLARmInaQz9zsV%2FKq5W84IqMbnQ4G8FNRE8jLoO427hc2NxYp2%2BEZf1KW8jkO31Slj6wIP59zrxkHMJB5T7pHGyvDTkPozbQgfp%2BqwyC2jElm%2F8tBDD84DvOsjBcqTSNpzywaT8Bf%2BBgqYs0wbhPCkZAyUMv9NrLIH8OYBuZhkGjcdXqmo3M7aIcWm22js298TkWnFo%2FIglmmLYeJ%2BUGrzBCHDArJydz3qegmUyP5Z3lWfW1dfrhkb6JUrZNLgAscUu0yMjlRIoA7k4VCDs0ozNysry05w3jESd1M67IiJXCUZ6V19dYKAEEZXF9WCZRLrvmiBFVKZLh8KC4Z5VhNv9tIE1qsEnR%2BUDUemS1KCzCijMjJBjqkASoot4WabClUowNRWQnDLue74yzIjZ3PTc4%2FY%2B%2Bz5EvZ%2BuSta8ijLluZjf0KIWP4X8Te1i5aZndYsufI98sSG5jhcFwiBT0tvGJ1hGAs8vtnqgJLi4XmGsoRFvdXSY9ApTiHNgWD5RBUqmVApL7MmmLUN79j8wbijiFnojj5oOK06Br92t8sKDpnmMh8eJCY%2BCtfXDQmbLuasoc3RHRPbOTbXQFz&X-Amz-Signature=6135f4d70d702f4deecd3b88cec2044936ff146089fdde31a3fa2bda63544298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

