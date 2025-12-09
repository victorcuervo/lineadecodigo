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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C2SOTGV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T152238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq8%2FcX25ysRrhOSE7B6ZkszFepfF%2BnkYJucMdQipdEGwIgRId9I6INhBsP0F1poQjnO0NMvKxLB3gdOHIYq89QCtIqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCm%2FnIEtoWDoK2FhQyrcA0DCmfE4M6Pon9DXa9yiGKj7FVUlXLmKSGGN%2B6yoODgq87%2B4jZrR0NH3nCIbDvjCAJ1oW3x5BdAd%2BEirIlYR3dod5u352agaAthw8J4apszjB%2BjRw5hOITfkFnnDusZ6zApxIfZhH0ivEAEXaR7zhUTa7WzLR%2F6K6O%2FwxxfN03xCCNTJCE2WfGUHymr0cG2gCq7NDoCg7CAqtohgVYyekngcyGwI5u251OqMkp25vaol7jnE0bxeWaSiR1V%2FYvbRipaiX5G5N8DKfzO%2FJjVzt7kxiWi6LHEIcqpIgvREAqml7r8Tub7qzk0Ju%2FKmboAHS9UvQHMMlcIKxzuYNSUdJiPURQWComamO9mTFwLCqk%2B2o%2FHxhWNDQSuPuOPAuHVQumVEREv0fpCTwka7bzKyTxyRUtMeAX6uwriYl%2BNHkczzEvrKrLGzYtkeGtQvNdBWEcyZopheDCRzquKoy2ZfdbYZ0VqgaxAaDdyg5jel%2BHFxHvJuYeXyiHgQDkNi%2BhzAV8dGnjZ174FdIisUnM8M1fazShwp%2BBnCCd3PUzyvmRyGtA%2FOy4ydG2IQkgfKfIC86nOr19Qwrpo%2Fz9OE7dmr4qH%2FAHFsA83tE8KBkuxsG7r0NZxGdnM6SrNtESmoMOfc4MkGOqUB2W7x%2Bjf1tDnM%2BwoF2k5NSuB8z1Rr8SgmxH0mJePEznPeubVVDYF6Bm%2F9PCyu87KNfSjFXqGsj3of9IHG1Kev9rkhTrW2OLQOB9oVcc6UeLmDuTpN6aPQvo1yUE9YkkXZV45kzWvJ3gqjXMUGcbnp2xDxryziyzOe0yEDMUEtWN5%2F5jzGHaAF7UYdVNoE2oIWsL7rF0ZWLLCuwbGMP5uKaToDHgZz&X-Amz-Signature=f21ea881b636444eced14b941bb8bcc12b955a627b46a2f3db69d1ed136672df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

