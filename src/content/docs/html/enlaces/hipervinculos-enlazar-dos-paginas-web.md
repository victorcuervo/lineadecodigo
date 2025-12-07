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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ENXL6WZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T112051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZVgC%2Bsy4Zq2BDz4pcpdD3VuYHqfTWGs3p%2BavGBRK7yAiEA%2FDHxCNnhQC9H27uC0SeI8xXFrHM5HApV3aau43oRJ1YqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpDegw4AyFbQHfknircAx3%2F9ksNVwgO7JBksmkoJkFD6yZOLtoIdH15rEmvml2zV36jJMW%2FnUQiIN0ha27luhvN4Bn5nd8raGKPwxhQrvF3%2Fr1dhZsSk9ArPg5Dr8TQd8AczBTtV0SY9AOyFr0%2BCZAdJscj2ii3UiQFEHc83whVAC%2Fs%2F7JWOxufUpt%2FsE1O%2Folgszj9AQplo%2F9mIP39z0rwcUpan%2BQjvFJq05XDng8xodjdeE1fVR5782rrZXPj9q8KzxyrEOM7SHMjyTrJBSGo371ZZqQNBnn6x9idERAe6MjEf7JOFuu%2Fz1%2BTK8q34T6kDLuaofCegDbzTbHuGDrKhT6DC6Nrr97pqZ6Zi3wtzHr9ApaDIrElinFBTTPi6gf6aOpQ6TbvAV1l%2B5INitKB0uGroDKPK85eiyBEg3bFS87P4rQ%2FoGd%2Bjr%2Bx3LzPTlGiavFiAqiB3Slo9AHL57Xd5ckfFlIPLIUzyX7ehk%2BPk0k41vqRA07Io3q4ZUOeu2wyQO7rjG7pUowk8g0kST4JEZY%2FhltetXo3bJ3bERhx7mX%2BhI1vU5JaMcmjXrCSCfzWP0QIFkkY1sxM5CtFUnj1cF6VCJTHP67PGI6n%2BihO47Glkm4dhZxMZkffftdjmj0CmxKDmwH%2BPNIeMKmZ1ckGOqUBOdH9hSsWsZztR22ujpUyp3p8qcgwdBoko9ZCQjYGcNbLfQzk0Qv%2BVjzNLIg7h9heQhCxVMCFMBabtFDD1U4noEus9kfzxx2%2BbqzrHoCACOhjPlLoqCDg7cj35fpI%2BjrU%2ByUclMKU77OMFgv6UYd1yLBGm8oPIkB62DnjMqs7x7Ht04ri68GbNEog4oDB4TQymD1DLmikZOqiYRfs9yAZ%2BhPI9DDA&X-Amz-Signature=308b071d0dd3b676a26eb4b29faa903e6f06634453f754806d590a7aea1873cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

