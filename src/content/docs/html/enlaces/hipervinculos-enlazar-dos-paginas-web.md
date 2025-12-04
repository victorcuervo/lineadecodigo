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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVMHDY76%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDVxSE6KntdKJ8w46O3W9FEulBYeqVodeZc8zixapUjsQIgTBde%2FcRpUJ3cfM%2FYVQUV06A5Xyu3CkFxZBEz8p5eZCMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDaQ9k8H2SvnVJPLdircA31cpUi9jBBEEZU14H3TeyyWe%2BvteZwlzzf9KZDJ9l2%2B4d20qr2H6%2B4v1uXA83XLqvHW5YeQ9aTN9rVLwkqH8KEkrLxKPzY%2B7awRkRg7pdkhFgSRFk%2F%2F8ys7M9l%2F7CSPSRUCf3loUNv6cxDqRy%2BgUNOM1loUo%2BYWPQUDgsRQKmkAmq1iMEK7DkBIcQhGna3E96rM%2BkXOgUMiTkVPtUv%2BeVByVIvDJDCFpIgXErRY4lHWf84cmhs9V1KJwkHdl1HoZW3enpO8kear5oz%2BjIDQgh5y5A7KEHohorxMZ3fdVQu2S2FQXP8FUT93GCZfOA4kpVxS814suy6uCJYuSbo4GH57PZOHcc1d2Rbm2Cw9BqpuWdSy2mp1RSiC4gT7RmJi577cTuDuU0BQOEe3LyitZPQmIGz1LgHceLjUdZNN%2FEOGhPFcAe0E0OwZ5j0oJIGrclow0PAN1%2BiXAFy9FlAsXQ0RfRShc9bLkQj148pQ4UDtEC5m9k6IwK9AiMGnqzprUY6Z3pJdxfMdMUNgFNeoOnkMiOSSKWcWRGWWgA%2FoMQH415LfNyubOprUOrxqfa6ooeDUdBjKOb8GSPh%2FSCemuDgqoZnxXBQEGKFm%2BelyeDNoUGYt2oMaaeGA8bkdMOPTw8kGOqUBTXp305kqCNwxw4fdkqqJ9ev3gykHuh9OozrrJiU3wAbw%2Bl6b5WiVv7fjHl%2BW1Ns%2Fk%2BwLWv0C%2FTire2jDfOAGsKJnWuT4gTlrJ0wklOvFA6oiehF8Frek1ihsZbZxGsWipHqkXLmbUGqWtZjCPvpsjp%2Be7Mj1iqoIh7Z2UrakZYMdRefl122KZ4xx8EmmqI1S6IqD%2FVhohApnj7%2Bt15oLLz6v1pz6&X-Amz-Signature=79ddf29eea0ae65052d707fdc812c357bae74737d6589803cf2fc0c9a6cb5754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

