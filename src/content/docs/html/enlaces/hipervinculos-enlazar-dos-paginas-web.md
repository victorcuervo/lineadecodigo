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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEIWASHS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACC0t%2BmxGOrpJbVexZBtdgXYD0ih1lL7uZ4BPcBk6%2BCAiEAh1rnEPSSxYxT1B9mkiMqjOv9ChNWvMHVSOmH7r9LHxEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEUwhu7mmI2H4OJpOyrcA4c5TRwybS4LF6E%2BD8jLk3AP2c7e5IfX7dXib1YSRTNUJzUum9RoSRf4jQ8hd6cNaOyRWCcwqZg21r3mW5h5shJeAUJ8xaHAk9F31Kn6L%2BNsM3d%2FVJvsn33Nsq3C18Z0tEp8aTtgSeanF8KkXXtWadz6JaBvxFqVSRORt4gsjbgOp06%2BUA8q6ceFcJkdG6DKTPdYPSno9ClnLecbJTYEIeSvuSoz%2FYq7%2BGpHJdGFO9frnoBm3tMl1T8cqY6JMT4UT7GnI7Z0eqRlOMDIzu0mORYoz2vsxVtwg%2Fnnk7XCmTguJarPG6PoCaNGfae8PJjB%2FpZVohBBbphYmP9SlF5mk2ZNGMMJwXyDigQNgXaucfWFoE9fWOBId11I%2FrzpsbP5HVnkyreLyX5kt1SDpSfnUTayFsV7VIjPT%2BSnlMwxUeYNyulms0sHs40BQvRTstmDo%2BEv%2BpF%2F8BS92LWgRYQfhRm5AiXxAMoFioxFVIuKFwMdCv2Zi9G3XrF2c9ebfXXW2kUzxYm48OAr31Go%2B5tBK620fOy53dL2wB3gFC34VL9rXBwlzQLLzEVnj4dbwSw5Z9mJWs%2BgmGxmrqZLu6lsNhalP45fFcI5uBKKdWAXyrOAUGun5wRT1JUz60d9MPmJ0MkGOqUBMwR03OVCn0L6qRGw%2BFsZQBZgp2tXU9tFXcjXtRCIbHcAw1%2BE8VQT1%2B9fHRgsb9nqEL1BJOKGpZt706DvNc1bRrVcRO3%2BwidichEYKryu%2BqclvKE%2F2ksQX9sexUviv1EsTp%2BuASNAxJkLLQlwmdv9WhCi%2B8QUSJwbeoQyQDSzyUt4ONEfpM0cnXnHgRJRFruGM4nQM%2FXgk5a6rb1VriuUK7JiXtGG&X-Amz-Signature=e382421e1ae90a88f660488dd58a38e093b0041b9c21feac16613b156744f9c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

