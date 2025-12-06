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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST3TIFRJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeHDLVEje40lM6Vnf61a8Sr3i%2BtqXg3FmsYmNHYiHWMAiEAletNH6PkNcYwn1P%2BVNH2HMSIz01FSIKumEj7EyZnB9Qq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDN8atyNn5OQYlk8w6yrcA5t6KWxdbKRwXEe9K%2BroNzbLS%2FX9BjCMJd%2FHV9eu0VrUB%2FBeVIt0ZhGiPM8aMXLYAGs1rPmNAMhLtr%2ByNM4amLP5GbENnG3hlCPyWluwM4F1DJHppYqWxEelQJuemvhrA4mbAU8JTg3HfK9d%2FVSJXojyf%2FLijttBYko8%2FtuNGjrZMqJtzSMpBw1a9rNoK0L9bqOgU%2B3YGPnGGxSmYbg6BVCARwh2%2FVX%2F7UKdU1nbBUb9zAdeBIhRvvdhN6Y6R%2FHT0FQbGDDiKNfaI8o6WfnNKSjtGsUEQbT%2FXiWea9D5AkjoQ3Nk34%2Bi7kCDpGROFvwgqKf%2Fyekqe8E3RMjriTH%2B9vYFnwk%2Bhgl9ZLJQTtoJ0TlJbhNtu94t4yD8upf%2FQi8HBWfr9Uisa2YkjoGu0eRnH6c5hkRbr0xgQ5C29d07rOEwm05ggPHQsl88qxnODzsOHFGOgL5fT0WTOtqn2yZHcWnDhtE1%2BwO4KNJ23KdZb7A1JNqJrjFlsfqaIkGUNLmPl4UreWHYbvxvT1Z2Tq63W489Za9LewRXh3tv2ZWp2%2B7Mdh7uuu9WWRsHOcI6jX8MJzrcUAd3UyQJiHV4qLOQk8k0B5cOkGjcEDZPlzaubHy7L1z41fFks4srxxJUMMCnzskGOqUBfPGIuvK89A4ok2QJSuOY%2BOPfa0GOP1r9goapHsLlEdwJ%2B2ycz%2BrcIqH%2F8QFMDgaHqmFuxYY1mI6i0aynowodxIZK6A5e%2Fz3l%2Fn%2B3iqICeHWOqpcNVpoQNvf4T%2FE5jygt%2Fl44LaBFeB3Mou6UjvEolj0pMIDGHXS7y4UeqGb6GtHSIK9MOc6nqQi1be7xylg0b70orR9GFQ1HWi50odAjHT%2FTxAF8&X-Amz-Signature=9986539c7cbd01a87700df07992d0df1d11cad3e630acb559bd5fe47957e8009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

