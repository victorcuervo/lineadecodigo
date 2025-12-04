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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS34SQ5M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCuSsB97216cp%2BS2Yl%2BbXzPxneIUtrMtVeRINDUMAmwdgIgZr29FosPaZpqRWBmHOLxRIp31MlPrJFag%2FipPat2Y7Uq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDCvRMhMyFp9KG4X0%2FCrcAwEAiPmYXJGpU0ipFbFOdi2ssnBbIhmz%2FAT%2Frqve69Pp4GkEZX3npr%2FqFvJUo4x9sjHTtnvYuCZp8WdurCvQybo%2Bol%2FFvp4mdk1svp0CDggdyY02IFJnVp6chMRDuziXkhOj%2F1V4NqOlvNDz7BorQqu4GTDpBn7ice0G6HinTfIM1OHaKOfRkV9hSMUaCpDUnwjPM%2F2uuAOSwBgOTzx5c75PADBEp1YSOkLibroVgbHBEAKCLu%2FDfoCVkaOeoTA94AsEtlPzJkPen7LOsqxdApE9Y78NTE7sZlS8fJkuPRaGStkbOGHJoOTSY%2F1zBfF4b%2BIe6WeEUl7VMJeC5JU1mfe0yRum4KNzHiiruLoIRu65TFtbvgjz5CTjWN8t0a5XxD1saEfJFH9ETAnvo3EgY4D0IImbkg10DD%2BBVuk%2Bt9QkYQNGyl3eLmr1M%2BFYwQfUxZoTudrOlL3g3sDTL3W5LlKO%2BFnvBFBemCP2xXx55aPu0KK1I1ApAIyRhji6RCbwD7Zb2oVrotcYE0SMzA4Wna0LY7c7QEpQVYh9%2FaJbTaiNUvZkxsLBKSIgCcK1rOmOTAXi2mMcKC16hK20D2rsSPXGpXNdiGFjoqPaMdw7ZKhmw1ChSrQBIF9rkLBgMOyhxskGOqUB8nNLovO0250ndb69C%2B9vHLu6S8M0wEWDCE97Ai9fNYnzXihUdOA2gZOtCrUHGaxUn8PeUj9MjB5W%2F%2Fy7QhEni23nFeGOGA%2BYcps%2FSbnr8kGbps0plEqTuKeZavtmIVbLKE8PBelGHUDy9Ry%2FjPvCgY1Ptmc6xUjwSyoDkBh4gpsd5IyTTtYBbKkoMxvrkHrVAMNBl9rfLMzHwFvb%2Fdejw%2BO6enPR&X-Amz-Signature=2d135520242c461646bddd3b7109ea003ab41bf87d0bfc1be32af4dd31a79389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

