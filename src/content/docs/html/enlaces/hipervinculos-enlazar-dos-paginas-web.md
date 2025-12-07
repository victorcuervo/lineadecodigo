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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LZKWMCR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOXeiSr%2BrlU02JsWzyJyWyWxac6PbxkN11mEngxuJL5QIgGM1jAIZcKEXaUW0TKt6u8EKEFvyS%2F2lBx9frIs1gz7cqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNTb55BIFI55OL4uVircA2boY6Os68GbB%2F%2FBKbBgRtfpWmcgcs9Guc5DgbxCWVqQDu9Hm8%2FHhZGLKroVAx3UtdeWR5EkYdvg2xc0jcywK7aBE9VrRKjqVSENtHxTJFT%2FD5DJcUWEWmVZ6tHpLUNJ8wqju7jEMamldP2GAmIn4N5mQUqWeLIQhvIuNshjKAM%2BLPdob3Ie89w1E1%2FTqnArU1QrWoeF2uuw6vGG1yRTphBPK0xuGtLB%2BzZ6SeTIVsn8DA2eFF3dIE9LsuzyI9muCvF%2FIKNwBLiRdg1EWM%2B3AGHoIPhgud%2FGALGWwOohSYlYtJztAKR%2Fc%2FlXKqYstlbQVIHyozk9SbJBr2dbOYS4rj6k6in1OYt1qhxUvXO1ytboSBii7X9eEeJoHSYfvv0ZTXjRo9vjCpY5R5wHuqnEBqzBoipXJxzzv4uU7SXcNLCjNbPLuZlr%2BZ0tULd1uZKTT6mD%2Fs9%2BXNZ4TYBo3VFtom0rLgsuXUfb3zAwZT0svx7f2CPmVi1LujSuDw95G%2F0LXgLIuJmflt3%2BAv25ldIdFW%2BCWwmVvvI1jFG%2FiuekSPRS3GX8fSXgdLYXXslnketHYEwyywJhds1lTmshZjA0gLqY8DohqjLdi%2F16r2HlFTJQJs3hyL13GlAZg0zpMPmo18kGOqUBsI3CY%2FnMJ84dq%2FlkKKw%2BLoaycmmzggpdAyyoLuGgyftEjlP7nUNdJK6xikzYljuRLdQB%2BDGjTjycbo%2Bu0AXoUejEgq4bCEPLWAQgpLaiMNrIVwe5pIUckZn4l7L5GsjnG%2F9gDjoKRElOLgFp%2B3hA7VlVfcNgjjIb6cLvcyIELWgXEjO7XGZ1petS1Bf%2BvGhwE2RmgLOwAcepZ47BGvSEy4eHcaqu&X-Amz-Signature=726b7fee89a35952c8a5f9b14a80c0347c526144dae0ee403533fb731b5475d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

