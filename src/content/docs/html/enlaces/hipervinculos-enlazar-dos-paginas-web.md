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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623PHFDPC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICIM1vLKA0WfrJunXI%2Fgco6kUQMdfBELp%2F7GzjHGjV5zAiEAxAzOALFVoAQjIyPLDbcDS56vI8N4a7kBI160sfUrBAUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMbydGmKQ9rWH%2FDS6SrcA0k2X%2FpxCcREDojmktnoiHQUbDx0F9Rvudwvy5QvYJyUUF431ZB2BvSIrw28UcvgWEEKFGQPx9Fnvz%2FZ3jYPV%2Flk7Qvr0HSONeGaMKLAyINns1dFjZrSAiQF0MKnQXishGa4n3t7RgYYMySRICgNwX1GS6OmRGGzjPnI8ph%2FYJ%2BrKZI72jKSN30bXXVrNOhZSy0v5UrPK5m9JWZ6uKB4zUPBJ45wkjqlCJ6hwJNCyfu9OnOqkobBZxgwd6E1oX4FIsKxo0kr6sWk%2FUOYlV4hrL8XE7qEPmuavWjvxar3QkyHGczN%2FzO5wtDWnnAKUbNkJA8pHmlOY%2Fhkv%2FjwISF%2BIWheMHR1MiHx8iQq3Ghp15CV%2F4A%2FXCSpz8WGh1YZApzVjHKNZpbqWBFRbyonWQZ%2FaWnXHOlk%2BZzYgSDjeTIjhbEMT5AONOAYxZf3W9M7wJSRqER3yqKbg9xoLBCJ%2FJm4JIdB4i3ynvrOixZ0Rg%2BUXKT%2FdRAU4LM8iV1vZMd6YCkzr4Kh63iihMXjddSjjrlbjS7VSxz9SIswGgHgTbJ8ZJ%2Fb78HZMBzbc5KIk1ae%2Bgulna38UK3ZUcxQJ3yjErEQ4JxRFEhltcHZNi5anZGrgVj2wcOvB%2Fie%2F41picTTMOLD0ckGOqUBkVWVTMjG2HK8ijDXhGI%2BObiMEQKIAjIb8sP7qdtJwAhKLx52x9uXT7Oglz3CtyC11OMWiKF%2FYLLKdJfZwsKdwI64adeafltZZpBXG3e%2FQByB1Yd99IYtn2phWc6KioWUYTXYvNbulkREf8cXr%2BSVCfbDzg2GLJbtciNj4SCcID%2F7Kx6hPni9%2FqqdimznqUXIPV7m3q%2BQ6syKk0dOCGmKpkSxKCa9&X-Amz-Signature=cb6a74c0737234afb3095b068125da946c21474e940bb7f01d2d6627ca24a504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

