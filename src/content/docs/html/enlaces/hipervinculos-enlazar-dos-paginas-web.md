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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K5VI3JW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T153040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB53K%2BStnL8OJpmd5F6LN6%2F0l7xH2mP1Cghc2F0nXByuAiEAqMhLPFzNvKiVS9Hx7n8viF%2Bvf75fsDWmLmbkjXt0%2FTwqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAs6mA3cMx2MX1%2BYTircA6hD7opgMcTZSmBXYfTmJJI6PPotWUfvbwLE%2F7fXmsUMWkCk%2BX5gTsxkhrtXDzi0NkzqOxALHFQqcnC6wnG5inOrFnKV6YEMfAXuI2Da2Lbwh88julPm5Toot6xOzRj2uCAFlhSerqwlWBsKf0rfKHGLa8dMlZu7siBaRHEjEFbrG4zqdJPCRkpv2WHJ90Ds5wI2F6Qx3izlyg0VG8yySyqFKvZlPO4NzZE9Qpg5WimlDEUKMRe8VZ%2Fp9vpV4qqowR8O%2F9AP8QXe3f3Yq37pI7zqIcFmkfK7vZpX348SuRzZjsrOzvF5O4B5IB3ZMcudKLlJlyzerqdtXKDMv%2Bc7Vks%2B2WAPNp7KrSEg3HhXkGHK7m7TRqLW7prz%2FJRpbPWExBHPS81NVZFcfYwxUo%2F%2FxkYi0D8eHdxUip8sGiHoD52VONo8Ab72Ekx1k5TNlE86eSIYAG2S0FazRAY5E7rivlvEHILQ5rBhKjbuGsw90eI%2FNXY1KtAV%2FUfoC%2Flm%2BOCS6I7kBuPNRE5f6HuB%2FdkTI1kdBdRw3kxuPE7fuXlKIlJHHBDEgSaCvDCLdNauKQoAELMB7rFDYTIiZ5tZOxzZA%2BtHzEBmssNQ3Wi%2Bqi7wd22Mu7DgAsZmdKNh7HPvMN7c4MkGOqUBbJ9IgvXMpn%2FMVztXAketRW7XYOwdjtjcPbQWy8Z%2FlaqTUQs%2BK17rgcrGk3c7%2BRRK%2BtyemqwfT5hibfe%2BNi3tqsijF%2BDuKXKxecbQ3KPXy0nb7kTw1vAzHbLmYsRDuWljNppHPsj09cYDwg4Oy0TiQLe3xgUzN5ZIfbXLXncUl1rBMGoPAuylFV3qSWkk%2FzFMzjLCZ9b8gcVRKiSnPkMXoFWOiYkr&X-Amz-Signature=c0c87be00d53d589e4c8833e0da25351d2b07d3a28910829868c6500ab0ba92d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

