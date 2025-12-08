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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLUBJSDE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T155720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDH8Wt8kDFaIJR%2F%2FAPCFick405sBQlhCd0sCZXaZ%2FOktAiEAsnnZ3R1K%2F81dc1BlwqyyY6K2reN1LQqjd27VIDiY80kqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtRuMzzs%2BJx5V7lVircA702lMl69x%2FRaZDPIJkrjY%2BBCHm65PBYsSxX4H5pPCY9u31yI95zVF2wxapHDchykrngvAaiPBOFnodfoYTgAZ6%2BNn5D8War%2FB4BLfIdNaElJCjSuzJzPZwn0Ed4GulAjq2xIPqiSY9b3ZUPjdzV1ZSPpUpGA4IRNJZYhBLc2DQBvalu44mHKG2boB1oLClpUjEcpwxB4i6ILZ0k6gigwMG%2FFAQCmNJRPr%2BkZz5Eb6X6l7h4Bz7%2F1QBTCMQpBR2Zexk4jJ7oLtyfnrmbbiUw2WCbxh8gU9VhkXu7cVNRXGiaiQIM8DE0gfq12wUTxXHJxyHvwEy8SYkLuzYPgVZWdaEdzbEEK8gIM8PwblRYTgGtmF4YeZhSCQ6rDGlGpU%2B0GBZb6f%2BnQ744tfT1BkFL%2BZ%2B0wpVc3imVkE8KZdhzcq2lT1aNk6fUejmig4zFk2YR2VKtxqYHjEv0jnnu5889JegZEOr4AOgd2jrkSeETRq0DjykhpBGyN3dUKqKpG%2Ff1g%2FxTSxmdVvL8xrnOy5Nr7ccST%2BPDZpXQRBW8UOLc1wnn6uolUW3K5dqUhwewhbb9bFXv6VkiOSGi%2F4ixPIY%2FYX3jrWaH9WK1IdNyMTgQ7fdhG%2BrTgo8hgobtonZtMMzk28kGOqUB9yIJDS0L5bOSx61kHgLLUD8rT6M8UsJdFmftKMf91YkSCXltNNO%2FYa5ZLwP9foK999Ex5CqnPnX2%2BhZzCl6czmrT7L6WM8IX0TcYYs3nXntlnrGkgOYrFRb9Z%2FywJz3FFvzpaEV8pT5rwDNYNXmiSbHbD3M4%2B9MDshj6TnYliVBYFPlmmSnYpjePVDoL%2BUNfQdJftW%2F6pgJ01ydQaSnH8lP380qp&X-Amz-Signature=0f2a5b2345f95f703a6c5d8e0ea033de0dff5cf6457486ec3bfb53f32039d168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

