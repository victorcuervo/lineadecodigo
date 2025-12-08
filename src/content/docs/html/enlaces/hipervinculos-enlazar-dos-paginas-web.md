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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKA4WD4V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdO58RZHMa%2FT7ek9BcfyTMTnate0HJAT5C8n8SzdXDyQIgB2WFbRlSynPA%2FkghUdeL63WXsb5B1nBbtlfFgvVYeacqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkl8889JxV7d28c9ircAyy%2FqqaJBm70zMG7xNMhHwg5TBQ%2BRWu%2F1Ly2hlNIu7af4jUyozdbMfgJkV97a5pqmG65hG4IZl4H%2F%2Bp2ZIjuCD7%2FlnmbRQhnLB29sUcgeAB1%2BlE6VzXiX5mDNJeHekN9YgeMvBzGLzafyMs8KRCwrmSfovQR%2B6l3skM2JigeK4aU%2BjUjpiBu1hO%2Fw7AfgB0Ds9qSuUU4kzyQjP9ZmKB9xDvwWsNIE34ZotsraZb9rOiDQj580fPYv2h8oQ05cQYsPNRiWp88cgywkmbMZZhgHOTecZlInaQ%2BLBh6FpAWNsjeTvhjY13VlWdduVanYsbBxJ57EA3AeRB189TJoBxHKrNrCJbsET%2FUb6zUuMugjGXwK1X1kGLEFg4%2FzEt%2Fpm7PMlQLC9XJQhNyz4yuOc9BLYLLUVfFTf%2FmFIZpoLyKo5RcM0HvWsx2MB%2BBAI1ebSWlMC6yfcLVzpDDgdpLi0wd8DIt5Xc7vxB1E2YQE8YilQeBl6BVDKeBxefn%2BelRijiGDB5bPmY6mWoJno%2BCQ%2F%2FQJ3uPasMRM5AouvvzLoFmmOKORtRzXezPLo9Epw2jxGNQmGcPIIAC7bhOdPbO6ZPfCqlfJKltwjXQb4zb7Y9PVRO4tgf%2FelaxV7usdSLSMOWh3ckGOqUBgeHjYiKbFoey3ZLloi4COTfyYzVQx3YX8cge8f%2Bj5Ae6YD3qasGqmlKF%2Ff8aA3d34VEiOZ%2FJmtbaLJfOjii1tL3RmzCDQ7I8%2FJkEmXNHmMoU3rFh5I0v2AoLtYQ76ifb1pPo1nlWsmaJY%2FQ49xVX25xxv%2BrYV5Mz1lRhg6fJjdM2gRh8MMNvh%2B52Pn5NW5q2sVzf5HyDKD%2F9MF45vlZlBaP7duN8&X-Amz-Signature=0f9a302e46ed856a99cd3fb03806cc141cb0a7794d30b8aa04c31c458854fe67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

