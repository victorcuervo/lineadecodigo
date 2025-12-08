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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645UOPWLG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEicDdpOVaSUm4z04Ig%2FuJna95ytgzOsv1PXwXfGeJk%2FAiEAk9lX7YsEhGNGjl5VpPyQad2RgLKf9bGgRx6gT3sTCV4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfhK5ids5yLvoPhfyrcA%2Fh5zjJ2qVk3KHF0dpfzz%2FyiRzRbI3S2KyiCaKzzcAut%2F6HRMBJW7nSf6Rn8KoqC9am3td3JFGn27RK9zQDZB04%2FyF0qJqgTsQtFCnzGC8H7FLr%2FYwarcZpcARJa8vnSy%2F%2FAZQ7%2FsjBuvUb%2F6ZViTvgk6sWBN9ldKUcnjYIURM9zoUq4e4pv701eS6D3tyuY8VLyW%2BnKC%2FeXA5ebn7fXcfpaipzexFgfsb2x%2BlbFgLLNXAvOyjombO8idctUFxOUTSjdnTf0M76JmoH0c%2FlckK6TNw6lfYM55xtA1hae3zsOmW7jZn7pUN9PhtyMm0d8NcXpnvpjzWXfyhQyDlXCfIzRAqqEApyerWAGQWHsHetQoh%2FJy5P6z7G6VrPSTUz7D3o6LQIjSvsokA83E77avXGD8WRKPPm48WgprnwRZ943qHUqVH%2BO88yGdShihVlRYzMXvn%2BpD4Lw%2FhpXdgPwWWroSwpOFXx9QHeDxcZDOokfiEJ7zb5IqkNSMR7MLtsm13IdnTnxECGZQKW0xXn%2BXJYW1OEUx7iHdcyH618bY1vvGiA9uto%2BF11WYvcgXnu25gziCeXeYdOPySbq414xHe9x4DlqE7zmxynXBF3M6CQWprojEI81tc5aftMZMKXd3MkGOqUBZAB5Del%2BdO1M9nYqYhvATSxG7ZudxFzarn9ZNq6HnyA8tgfAtV2gwk%2FS6dLTCU2eoJ2T16PAdgrb1bTkwXT8L0wP2Ed9iU2HWOKPg8HFyBppF%2BPlnqeTFomeshXVDQqElfkBFmFtzfSJx0zYTt3qbFnFNtT3yXp7VA0U1yTG3Q1atwj2CWyRghUzZ21L473W%2BaLRxfNPmRlY5Pe0bgRIzDq5kKLb&X-Amz-Signature=27a67d21ae6b060dcc11b702a2ef15e10a8dc577ed5f218d4319ea2cf9adff5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

