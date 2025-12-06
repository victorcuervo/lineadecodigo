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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FVSJMB6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFgGy8vSC22GW7%2FJOrTpMIsCwFTVcs1i2Ig%2FI1VrK51wIhAPeOSG8sJVsmj4tSs0%2BuysmK2O89a0xM5Brei7rc5WF5Kv8DCGsQABoMNjM3NDIzMTgzODA1IgyanWDgm9dqwl%2BeyGEq3AMS6EswoTnr92LZM0tYomgVlPcmNO2FhAIcFQoMZ4hKXp0zvSi7A3%2FE6pLs2GLWNatD%2Fy3gASGdkXjQ6Ld1kTaKyoaXsZ5JLngcGVwi17%2F0PvvBw5QiWAvMmSMMlHiRnzRxTQlX0%2B%2FA9Q%2B%2BkAubrv0bxBPeojigpie7h44aaq7X%2Fa9DDuCFYdhZPHwJHZx3S1Q7XWnfvH2QufYkSv9fQh35QzhH64OMK6AfaVjkPh0x9oiSV9WVwXJqMoO2XihZdbHVUgfw1cAIrlszpRTEzIM2DMYGnD%2FVPj96%2Blqarf%2BSLfu3YNGEYF3yNSg0XpBZTYDW%2BbT%2FOWBpWU8PalsLsHDWEUFCvHtT0UjbG5luZkr0NAyy1O6HymWZCgqWwcSRl7v0VkXe8%2BVbLxuEmMowaO5CwaM2RZV8WYrvhroRwuZ57UA%2Bzl4DZ63Sz9X5JkcD%2BlT%2B6ISvQBSX96N8vn6HxRbmxBl%2FHCrEkKO8eqlJbwP0WFFFqG%2B8GwTMAYGdcXFeIPbOeg%2FOk%2BvCE%2BRgxqw9PaAoN6qbNAdMMeork5%2BwZsxMcdUoFgOtHAJ3AOQpkXtOkNyXyXN7kgNwRiwhH%2FwKRkStJUgd%2F5liFCNCV99RxWsxApJ4a2pL8yICdb5CEjC0p87JBjqkAUZZbuIp0KwZBo5jI5fNoGDs897KR%2FSTZQ2q9HgzF%2FcqzTddAy4RgZcF3msTiV8pQ1MYsuBAOH2QyoQBqmVgK9piKbLQVCHOuIYOdJeVf32Xxdwo%2Fgkfr3LuUWB%2B8VEnWH11C%2FyEZxQjbJhT96uOm5X%2BZiPz%2FAUYu8qxG8OKovBxpcczUF41O7zBtFvK%2BF12I7DDipZOEptaLGyXqHJph2iQ7fuf&X-Amz-Signature=3739ae5358c9a7177d0b439873be9f1b0e6dc44af1cb97e87488a8c01cd25bb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

