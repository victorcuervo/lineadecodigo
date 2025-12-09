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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYOFGECU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T160927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHf%2B%2BAcC%2Ff0kGOVukwGixCrHcVOmci03JQO7uyZqUTQFAiEAlVrHHwap8DuXt63kHIaV7NIPBAItnZOBSe0aQROY7vUqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTpQAgG05yzUWLoLSrcA2SWgZki7dQeD%2BALejHq1LxRFxBp3wFEBah3eFU8w%2FznCuo%2BJXgSJFzVGtCwIDETBr3Art%2BLTeVt13jrUFWkQ%2FOpRMVROysb5PLM62En4xkqiMVCkDsfZ%2FxYW8FvjW6mIS5a%2FhSoNLxX0YQi9tWs5dhFca9QG7zsKDDT1LE%2FGH%2B2MJNYaW1X9fIjpZXw22e8adNLi4pf1MBp0Ew1K8G1H2LybfwbQNtrXGMmhlmCY8L8vM5ZczJ13OGl8JNYP4oVf1f7vp3fHW4ljlMM2sBZnHtxx2XVV5mj6KpjbkClEhN8Sn%2BhYasEnj0kNzgXnBv0F5S8ZaIoJ9FdhA5rshbb3NOzlQ22xDmpEep6hKIdVDD9GAdM6hwRciRDAJYQLQqcJBYTpt9t00mOhEP2rLNcmqyvf0PnBWe%2FvmM99ZA0p16mxh399lMiBtlNNaEy8CyE40kraYvys9Npdgznk0jUBd6osse3b0yKz5c0CdUZXvhlZ6l65yxwgjYiYtKmkahPz3CnzLOHXghBRT7JBOgVURwnnN6ekgbF2Bs%2By3d5gIfzEsAI27WUMMmWsgWOPdMz8G2fkhXJ%2BHBzRCfQvau6hU%2BOoy4MgyQJ4AFJXxQtKUWE6bN9lRpZMgtAo1mEMJbd4MkGOqUBJN5CeVZ53HAWnz%2BZEYpjV6jfHzRxsyHz3%2FWtL6dlb59rb970MoO0TLk2Y3myJFckpwp%2B6KfrClQwJ%2BLq0qdffjilfvTM5iMnN08A%2BPMLSpPPCgtAsGKwsyBd2%2FhFzLkMhGmzCaIHwBeAn1%2Fxc7CV%2BQFrhnk4a5Emso2tik7PYUaC0JRgGL6QQteiBDxSct4wPXmJ1z4yJEZYY%2BKmPanQXZ%2BXzL6O&X-Amz-Signature=29a29b97b4a65fc8ad12ae911def8d49bfedef09876df948cf44887c050cb1df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

