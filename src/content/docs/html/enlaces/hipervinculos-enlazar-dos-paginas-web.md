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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SJ5GZXT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIEWvHSNrkW5r4wrxhFuKeLgBQl2%2FDV8cAS803U%2F6VS2CAiEAzgvp2qDDfwBVBeFbMcYE8pmnJzKNwE4qlRLBMotwL6Yq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDG9%2B0RrrpdMQEF6HMCrcA%2BusAK8ONyn491SWdPura4WoAehs8zeZO9FDKlxmG0hbAp6L20cv2Iix11lWcISyNFGOp%2Bni6ZbzqvP50mTi1J1dUQGSGldDYKCUU%2B2AdkQBKcG%2Fj5KvAFoMIAoMK5JeE2Qn8xKoZpT%2Bomzdc7z4FJCh%2FAFYAE74HRNQJXofRuviHhfW74T86mjXNCj3J38QVAWf6Cy%2Fqv1pE%2BiJpFQK%2B1XokdkV6NrKFBmebo5w59FCHltbFcPwo5pmzuFBdz54b89VQ6sdaka1VQl4Dd%2Fc%2FqX4mYVv5nw23Evlx0B%2F8Nh%2FitImPh5NHlC4rZ0%2FE2OryWpHT9sbOQMUfIK8%2BA05X4KG6oI1AFVb5JO%2BDkDsDPM43REM%2BeSJKhCcsLvKHbdxFwfkYP3loyyco2dlU1RxZufoCQPAFh0L2RHYOvEOvMP382Enyo7YE1YrJPY7%2F6%2FSTPSxm6rG1IzniW3JM2qAL3oL4xcLf1PYXlen%2FFejEMJrtf8yn7a%2By%2FJfZAyYEzDM23AUbgMD0JApl4rOUnJRq68aGDfajvaGI6qzdkJNf0BJ9WURe%2FpGkagbVM1386gvuoDS6DViEifNGrRL33%2BhFsHytqiCM55oZraOWLZRz3GCHM1PFX%2B57Un1AwezMP6FxckGOqUBDTawxWuoVL48%2FOHxH%2B%2FJtd9H1w%2BjNLeMIdJOY1tV86bMtk6LIfKcjFCpSXP3YofvpQlLZPFaCMoocJ%2Bpg8C48Swn9f7KpzqwEbH9gPYE%2BqR5lC27u7X7JiiNArItVnP%2F8hjmI5lfGC6AadS%2BBokiMq7OfsIYMKkppT9Pe%2BrjpewIp0gXnlajSH5pyx8Gyi0tfZ2C6%2F6XnspIpfdvvQQXdgHisTyj&X-Amz-Signature=9e31a48c7391d58226f6879dd966a5272773eda19ec20702040ce09b08b51221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

