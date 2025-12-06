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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBCRMLB5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXrD2AvXLcl8a%2FRr%2B06dWfgWQP4UtpoJA6vdNei6kAzAiEAumjsYJvRAeH0pvnzEWefBrSw1bee3BONZONx8MGCAZMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNZXDxmJiuaprTPseCrcA474Vou28JHFYmLUEfOPhwvQ%2BMmxBM4qO6%2Br29qZVHTaZZ0oterA7O59hpAQCq3n7GofiEb2V8GJ6eAxhjijjhb0E20ztfgxQiimyJIg%2FkfiKYtsEaNqp8eXgxpSLQPUXdRyQE3kI6Y%2Fg6AmZ%2B26uUVeWfa7QCwaPr9EYLgLfk3YuMSwN73wbmuKVj7Bxiubd0qynAi%2FwbTgz8Xec%2BswWTnI5O%2BWst2jECu1g8NQABkBUuj5NklPUWqIXsxzE%2Bxd6LJf2IRVEBHPeR3%2FILK8X1%2BIG45oUS8ODMpTHyXhGGPV3s2RHAnKYE2lLJcE78unJuBMaEf5LrsRTtK6D6KzlWHUri0ZUqf013yZq9dVltZkN7aPeisWFmCaSXEoHc8c7PBsbRKOjNLBj2LCi%2FL53jeFxzqkj1zXL00JX63MyhEANnDpkZmLcXGBjapOzcQ8u3eSbAkKDG6tc2zD%2B5t1Pho2rGEz6KPtwzdsni%2FL1dZ%2BhrLK0ghtqMrIFzoAOi6Yaqwo7ZcklPyyhkRjrUdWBiMQOe%2FuCbMxT3T%2BQkHu72B3DcTBKihwmV26vDt%2ByUeLwptICk%2BsZ%2FQURIbSO%2Bo3eax2LSfyUaLNUSGJb1ErZkS8huAhbhAfVULBBhifMK7M0ckGOqUBJriUhPVz2wUdB02Dw%2B2eKGrMABqtUNjnrH2Lmt3XF5HOPQxxL%2BQd09fn3FCE6XJM4dG1xxyg3SOiUEGLTsbpl4wN%2Fg4MFgCWlHwsDNKcvr1ffYiYtmukNPHqG2egoYBYu3YY%2BpUrIhm6lxccKkkP5XVUuKtR4cU2yCGPDlv5LDAauJFWgm9p69w1fl7k77YAuAKIc739wha%2F%2BZSXh7UYRB8ceemD&X-Amz-Signature=7dfef810eb5df74ac10795aec5f49ada35928575587ece3be4f38ded387dbaa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

