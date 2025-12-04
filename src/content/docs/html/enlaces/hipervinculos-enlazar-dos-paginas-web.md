---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SII33HHN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHm54fCD6DT2NCoXU2qbuMo%2BC%2BLURunNQbvrbWQ1ATpEAiEA8e55mTzYQn%2BJmtgjnhG9u0drSNHTipIH8zpw2o9u%2F44q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDNDhifHEqqIt7jhijSrcA5moH4GyU4E5te9InYRQhDycgoDE%2B3UOj5rf8FKJR75PgCFa7nXXN7XyoTa%2FbkXXp4jZ1xxX14KPyLPPWd%2B3ctjJDQ7k5EZFO3bVXyC%2FdS9DQkWg7%2BecrOus4qL%2B3idCurjrz%2FupUzrw6zorWIFHJriK7lg18rzwG0XUD65Unb49ISdwpGrHr3oI3iVlu0ECrYZKuX%2BMnCd28EBFOlYv7vJH4rrKZCmkkUMIWM9uxi%2F5718IR8Sv92Xf7fRHJkEUW1sd%2Fu1AWbEysicVHeN9ig%2B7132K7S8W1k6XDwHeGRr3RJryYVptWMdjhj4ZkaD4puMnpXy9dkpFLpaGLAD0bXd%2F1AqMXeC7JAhAU0Qt8aufGOmVyTfXkWfpasoMNzAJZWV1RUBtiHHyp%2Blz7kutqAcPerfLEETkuRRFHY7gfMtS8VkmCbc1uPfDPRtSJzK88x05Dg6bTevAoTarfrv2Tp06ZMdgmQJ8ZDVxQwTK%2BjgxmIdk5tQfu7RnN0L6bczyn9UzhGNSuj6RL1k8gCVm6ahsZskfNEfyFmwLNcS46Gk3zsCPRSKU48bA953NKoJl4oO5z4Ji5iWKg28lQNOxaeO7ccP4RpwSuvfClAuD6x4%2FcLlQJAXeG4vKIZM%2BMMfbxskGOqUB80j%2B7TqYehvK41oeCOIX3n3rKFKAOVuzbc%2Fxt5YKmh7vNGl2FPdFpkAn1nrxw6DI%2BHc1W2tgJ0u2lSPS0DtIK7R4Ul7kBWQrgKrX0EWmv4h6vM3oabBtIaw6x3a12iojMFlkAXwaLhliZieNW6vQc51KQKipKsDi%2FKQppMwQfZumnWuCrOJlb6rlnI4j%2BThrXwueNeRwkX3cnKbA1vFf0Bt0XDu2&X-Amz-Signature=d6d8b80b996bfda39fc90c0f47cd0551e6445373b82be29c1db9a7b45531a307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

