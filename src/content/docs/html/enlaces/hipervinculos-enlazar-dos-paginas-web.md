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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJZM36U6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4z4oCN%2BHFgbLaOAjXsiCfKUzUA3mFyeqfY%2FVU1%2BPmnAiBclb45uwADFbqBPrYgCfhVjWhBJDVse06bBQ42Yky57ir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMgA287RPa2tAXlrY4KtwDlkEDDy9e8wLHOKu%2F2cF1%2FoSHBWnDanYSexKke6QNBblK9as06hLYmJhhY002gSGqhwnnrQfOXywHq8KwbF5DA5zlwRLPPKpA4LDzXB59uRXkBjLY89MFPyu4cR3sda4iFiKxNakxS2HqdMfojeApzoBokb5oZ6weKhZ7c7a4h9qrHztBmuXImqVZQKl1K2OLRel38a0trzYxuJddIChBXL0R3KcEMCbwrICLooPe%2Fc%2FubQgq9HUVOYbR%2FkoHlWNU0szSE7shRh%2FsObhAwmDByIB57E3degoJPagKAU%2F%2BoGfbkY42KnnuY06Oe4zpub6tdb9Mk6MidhUeE2I2zQUTEtoWPIboJyWuxnoAJgz7mxVwHbLHzNRwPX0%2FfK41BdAdYyuKxQ5xAgiPmq%2BrvCgSCxulPIrsRWqZmaymP1O6Lt9%2FJNk6me86j1oaSz7%2BTIam0468Lw3Ny%2BLzbBf0nmnRXnwedyqnhzU%2FHyWYjwCddUFDLYQfSTZf%2BaE3rmo5mb2o6ENnhrFVr9OtpMKZ1x22WtDy0rUWTH7krOoXb9BBFmfHzJQhlKMXdTHSzshvrEtZ17BrTqQF%2Fb6AjmjnlAedasXS%2BhZM84S%2B2kKIUUvR4QLsgD0q9b0ymrkjEdowvKbQyQY6pgEaRV5fQh1R0a6zFyIcq1fos70XHz968%2F0GmmxcD4qvg9RLh6v8ZG2rZYzzzEgfvAX6UfJDNpbJRUhSsfTI4vuH1gMjPXW%2BrG%2FRCZGvgWBuiBE3ehdi1X4N%2FcvAu2RghUgHWMTMps0kfh6Fu3TKgsXHubjLNU7sAsQFxnyA43TkH0WfVDlMHIg%2BOuL46ffZEEwoSk0Ro5i7VhgrgAmWLtXpN%2FNqrzOf&X-Amz-Signature=7b569fd4c8869dffee6d193952b519ddbbc6b90796d03d8df0f5791f593037bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

