---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466262C42JM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCvVgTyu3bFEShHxziFcld34MXK16BYIhq3EnxJVQjf1QIgaXzSjCKb%2BEDLzmu%2FxY6fdwgS9BEyVO2ZFr5i9YcUA%2BEq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDi%2FcpYad5qCK1ah5yrcAxQAp9y0pvIlPrYi6F5s5LFPKKnOSh1rkN%2B%2BMZIXxxb2TDMdeUsLJ3fYXi2oNa1Iia7IbBN6Hos8B6ObF8BOR%2BQUWW6kNI7dItQSAtpOOWvd3NRTr7%2FeB5KZqEtieNgD4q2B9X2VoplcQiVawMg%2FkmfT2SZC9qGQuY6pCW63zYyvLk%2Bbgo6rThUebEv%2B35RSNmhs7%2B98k95QmNCiH8GsnriBi7XapLc6Qj7T1fu8iVOU3smhJhIJ6Jbs2SpMCYfvICwWNS21cvgxqC2ctAIbhdmr9gAQ%2B%2BSCDU7yzboObPY3lOxPzfw%2BlD%2Fj%2FRhl9mDZAzb9LKhLUVwBm%2B4aCaXwkFvIA8oj29MY4NlI3YQmZIflgDig3L2u6V73QCCqN3CqLGpiJ7jTis4CVO7ndyTHRSRc2dOiFTrrHsB6jDCNFO6QydzMqKKw%2FIAFQxIbD%2FgYoAMNQtz%2BCoGsbEJjmZWCOg3AqsQoaMz56lMaSDNJoCCltWuwQ%2BfldTpKU%2F6GUsywN5XmajS8m1F%2FImsj9NUvn8vD%2BxIbz0tJL9RFB3R1uU4d%2FvR9m562U51yE4g0Z68aI%2FgoFT83v31MT3Gm2ynwZqt3kpeg7yv10nGM2CZ%2Fg1YjJGt0o8Bp9eGmQ9V6MO20w8kGOqUB6vZLQMtumjzQ9qK%2BWXga0CwlYCP58WJRlcocTrWaGzANFK2VGhxx3z9bvVAZGXkoBBBprDiqq8KF0kTURqSyHNT%2Bl35wHwXKdtoI%2BV%2BAZyd6Y7XC%2BsvZeElpaDDjIhLtEjVm3Hjxjds5NBZK654k33U2nRtoFVnKZF1s1HExg382a6gSuloBV5soWvv7Nb%2B%2B0xjXX69OtwZ%2ByAOfakbtBfi76lDv&X-Amz-Signature=30339933c9676ff2f8c3b3f9d4642e7814a600efaf3286c303d84223b1e204be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

