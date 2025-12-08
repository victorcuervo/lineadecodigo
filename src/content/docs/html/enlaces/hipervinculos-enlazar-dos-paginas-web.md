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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVLW6YQY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgMB3ti0pEAVfwAG%2BKG1epfFwb2bg%2FsApQeyZgaPhwcwIgNXGxizLQwAZ5hM%2FbQOSYzXBsqNZtnZjEdMNNe%2BYg724qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8bL2lTZ0oDMRzeGyrcAxtmG8vLB8eKVNkJsTY6ugudg70yoejAuGza9s7tyL42no8vWZSqBEMQQ36UNPX3aNVrIJDeDCWZNPeJIp8xplXYwLM%2BzacUVSU3ASa2qq8IFDjAYAlO%2BKOdoqcziM8TqrnXsvo0oXGFof4%2FPoJx%2FpaX2KX7Hw5%2Fj76Vi3lddtu%2F14UYseciC0Lpn489dMmyTQOtFXGO6NTidNsQB17RxKIfed7Xi7ZNO146Qupc10mp90lp8FgjmQcGytnSWkw3yY8z8C8zWaj6RghNYLJn6%2BWjdqeDx3PGEr89kbrcYPwhGFzDHXfxExCe%2FuNw1dzfgcZS7WPOjHCCG%2Fwd0wIiakIOVT0lD23ocL5EDY7c5vfCnqBGUfFbBGKqzo8SgZPLcXgbsOOgK111uK8ueONvpiMc9GWvwzBNZJd0ZnK2eEufQvlaEsxrj1siQ3NhxPGk1HHuF1Hj%2F2fDvZ930kIao%2Fb8pPZ7Q%2Fi3vKhSzrP346ZYhSJu8MlZg8W%2FVvTeXIjfVL6F4urbXPSlItGOhOWoj3pXfg6GTN0jrJ1MAQ3egbc3amXRzv4nveFKvRPXSEdF6ky89UqKVPjoJY%2FB0NAichriFw1VuckwljO0gunAiOx5i2y0uBjhk5kBlCmlMPfu2MkGOqUBGbEemOUneMDSYdH8hjLe0zUlWIm6y3GjU6MT9gSQ2YQsckAlVzs9X%2FmDiPJusDwXY9asEW3CLD8V%2BHNwuou07jjLT%2B7EjLtfaIFR1NwkpjhMaVFRkIS%2B65PIMWry6w7wZYyagPEUsMlEdebFHtIi8S4qVnLDUqRSK%2FgRme5jPtTtxAUbOmZZ7lDo%2BBvB7KftQehhc0%2FvkDBervH%2Bhv1i8Iiacbyd&X-Amz-Signature=ba3312cc59c0f04e6d62f630d13df3ba2c0d952fa0a6e155dea971366527bb1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

