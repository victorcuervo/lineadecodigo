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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GWS2KWM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGupCrV44WanMlod2c78ECCu7w965pgvYoca%2FxilY6scAiEAgnqPZjJBsE9nIc3YG9cSgKAk%2FZaISjXTIl%2FbbR9bIlkq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDP3FOL0Vn9ma3khYzyrcAwYByY1EbNAaRTd9R0FjPseN7qgl%2FE60Jq8reGzC4Mv4yFN%2Fj5tfkPCLNFVlSGbSW9Gzqsd9BndNidMHxs%2Fr%2FsuiwQJ6yv1xSONzWl7CxuxB37lAoKJpbYEAT6WV%2Bbzu9ObO02Ee8i7mpBynGAYH8%2BHqvaje8i2b0sqMokohoACkOv2L5UuuW6LxFvI8Cw0MpRTGNz1fyGqAf10QnFZuxzGYGPWDSuJhtIvW2Cy3FMImTYBTRE1XZWzZYoL0%2BFCs6hhGpPozehF43Rp9eEF59AP6VrmmG7utHAOXors3ftYCut5X8%2BZbX26TmQLlpWwt4XOQcZlFHCHBMGLiYS6cjpnyVMMics6k%2FgP8wDnvUmml%2BUMJ9vnGNTCI6P8v%2Bne662TFcjnjgZ57M9WkcEUkQUezYHblQM5sYMUbUy9guxYc40GFHBEtOWYiWpqQ%2FbGO2oTHhEle%2BGPFfRif%2BhWrUiSq4BRRzoS4h0BwQv%2Bv1KrfOy1ixtonkTRGNUlXi4Ulp4iKpnAqIVXQbfv7p9hQN4vriorrolJ%2Fx3OYecIAbBJ9WeJoRwLKjcVjkG6FmrNn3SFMiBk8PlrgdZ%2FB7hNlHURzfT8MFy1PSfJ0wdjD5a8HB4xQMatf6j9WUR1pMK%2FGyskGOqUB2eLJC7LTtC9gnpvnhHlJo1yWepNgvNf%2FtXvCLbTSZOOQtdCgmQU71sFSZUrgAYn0kpUkkNhUAqQ%2FnB3hgpNTfVyzECBr2PBH4HVs%2FLOpXqpYThdnBjsoVpH0AivebIF%2BGDjCo%2BjS%2FiKOrsbi6sQzI%2Fn619TqD2vv3R%2BRkx0rHqWVKkdrifVuo903kwDZVDxIKuBOoQ5WXehQr1%2BVU8YaHF1FKcRp&X-Amz-Signature=9c7bc8b5caf96182191066ff24032555dc33aa25c85b71c595b9ef24dd5f4fc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

