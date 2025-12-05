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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTBEMXFA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCToxcndC7ndJvBzotbIEqO3u203cW62ZRehcUQSpVo1gIgQHs%2FHq1JdcKVYdYsOq44T2MDZSO%2FDAejQqXoNIiTdJQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDO1JGr5A%2Bwcm1ngheircA8sHhsvJHZ74GyAXPHOs1M3WnOOGZssLVcrygNxl%2BXKQGcB8ekk8vZz%2BAN4CwW%2FXDVyYCMlQqUk7s4VKoeSf9PwYHIzQvg8Z9%2BRblcNg47QOmXD57M2372YB%2FsgZgJeJ034z6xFrTyd%2FXLwOZ15u1nKWJjbu4O%2B7Qtalv7hTtc%2F%2B%2BCRfOGE1vptfC%2F3rmulW2Ivd51ro4wC40cm4FNmC7%2BpqUb2R%2FawgJ6SHcT7OfLLZdX85CG1a4fDloUTGgi0CGhprIQXddMztNYXSa2N12WF7PyBGcr65PZ%2F51%2BIz%2Bcq8NK9w05Ly0cD5tn0rCS%2FkyZuAbbaXH9iXcwMlCsgBdZOx7rjSJISsyKjWyB2T2SkHauDtDQ5%2Bmdb2yFaUBueQ6W2syUD6Tszk06WP4R%2B3YANnI8qfBAKFv0NlIWBHUEe30r87mv%2Fb5b9iv8yawRLrSF5wKH%2FuH41KEmUMptd%2BZJJBIkB8W8cef7Oe669kexKSebKWcmu%2Bw1f6d0HpN8qEd%2BNAxdy3R9IHXpBkPEruVcGSY6xn2op76loYwur4C1o%2FUBDM8KMu2bPVWmDQG7nAcNX6I4zsVS4MszV8jM5r7vUFxCthMYUFlcwSQAgBeMlE3N19VmQJQPXT%2B8tVMJ2MyMkGOqUBtCbSoaMqIzMDDyoDYHqdjz%2FANeGt9G0h9%2BVPhx7P6wsj6Q%2FIVZ8ZwI1pwgnMRP4eNeX4JLzDehl6W7lSDxDQh%2Bqd8vRKmUEASgmTnIhEPjQuN58e%2FZ5%2BnQcvdoyjRZ9OQ6D1PPep7Xrt15V7jGq7YrGcd%2BSuhEQbK27NXnoudRl6R17Ue1fPE9GnHseJPC62dHRRhINi16AuYkgKRCayq5ILUQ3y&X-Amz-Signature=7e6ff4676dd47cd1357b046838b54ae4ed254938c1d752ff94002d155a9597ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

