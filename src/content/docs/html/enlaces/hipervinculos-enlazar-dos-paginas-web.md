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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVCLLYK7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T185924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxrmTh8a48i57vBmrIF6jnx8KiZePRimSOd2La06%2Be%2BgIgaWQz67E1sO08kaX1F37ALUnGdXd7PW7YaVf77GswY0MqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcYk2WnbZ%2BNgYazjircA6YiIXAWZGBtSnhGTfRzxuXKD0gUGP61%2F7df5TGYFLHMFTfv4tbXV0GvJAPb97E53WoXI7eE%2FQ4CONtiT3ebcn8ZGQk4MhTdMzSBh9%2FqRtm3Prv2amtRTF4vN5Wo1KjAFVHQwLjrbquMGGYmacvPNyKcOTPJNbdEmEypd8ZxxiM0JgnnZ0o3cJquYkAgz4CW96QqSL520NyIkzvQmSlCkhAujhLLO2e9N4dufwMTes3NPn4mNRbKzsyytalrlG1%2BxGtPUnVtxdWXcZIRw%2FUXHJZY47jIWvNxaZEHmlVzvehA5eEiyfxcdSf6rKVIrYnesmbU%2BcxT0KtYRmq9mU8zsyslqAuVwDojLg03PmL1q7LmLpA3ZAbnhAJqPjeVkFL1kj895WjnXtGe4Mf3QmGLkFzeBWhFQ3cqP1AZxjM0H8aDBQjUxjfuBKhdXuuqZJHGBmV25YnSqHlJ8sbfwY%2BxWB21auDMBvYQ9sfwiD%2BRTHB6b9nnvkF%2B49vmZbkkMiGs0nuq6Uf84cNFRK0Rexhs3DWNuYXj%2BFKV%2BZa0%2FIvdThWa6MF91r%2FMZX0hK5bz7u3qVOz7WRBpvqmqjpchc%2B0IMlPjtPCWZrv0vpHHC6hciJspPEEvCYlKzLC%2Ff6YgMM7e4ckGOqUB5gw3UDiYdeUeo3ZU6CY9vzYNGPs0kk1wpll6zbbFvOh6FgWx1ZuE8d7znD4mSJ%2B12OF7WDGUToCeeHj4bH0g2SYyugvc%2BpShtC%2FF4l2DNjFgb9SP%2FhkYwv%2BsvrdaysPmx65JJYLHkjO3LoCl3IxmiA1Ux9x5ci4UEm3gD9QpXPvkArNLrjE4YcjoE9V42sq6iXo2XmerPGHWjlJlYlTn2mgSyra9&X-Amz-Signature=1d9424076f0f8c89653df89344c204be3af05ecdba9883eca76601d4b0292ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

