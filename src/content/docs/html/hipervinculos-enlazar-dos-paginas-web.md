---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUYQP6L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD85fiunRvs3FW%2BDZf5eOIIocLkjag4V4eR%2BfnWKCdUOgIgTE1tsNf8%2BL5vYvKCGeHp7Lp2Z8hdCrXcvb6v09stMZYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDAVD0qgE4yRRiUxkTyrcA6rCndMu3wEUubo8YbKPxnuQiNA5q39GQxlHMams4%2BVAiP%2FZdF0MPEpevTY%2BPim4qQH7mwzGIhBEhXAxYUhOlolR%2FLG%2B4VtsO98Mvxwgv%2BGvWlRM3wP%2FtXvxJxhVf%2FEYZQ8g1fqOQuOS1cVokpsqMphzercvhCAN14o1hziXfTfNZvZhUw19Y2g2%2FlYnLyoGKhrjRN3vD3c5VodaoZY0mnjK4fgz8thiZWriLJc4xA2SCgkVgryBnW9XwSp64L6xHgR5kkg3jzk0mX4iV2xkhIQj%2BsSxjIwYrNmqbwtLsQlyiH0%2FUNSURqulDg21VF84KUFFHAm66sykTs4creTSSChqjuT97c5OPMQ5v%2FPgb41xsuCxht2KV6vd%2BU1ucYvZ6KUyMjQpJOXX8etap0dO5y%2B01seHKCG9Ynns49IIyECmHzSGhTp4TF24EZnlKRIFqg7d3%2FBYvPhUS5iMcCB0Irg2TDCzjHpuSQG7zDrG2rsWXDtMv0xUBBuDxUr8k97sxcon8ahCiQSL%2BzViMK%2FxykA%2BmtA98CHJffQ%2F4PFjZCZ36LPZnK5KmfvdxIfjsnfQiFnlqvzhEDyglphO5dF8VjIAu2y05Gk5sf9%2F8Y4KcuufP073yjnDILS0mWv2MNe9wskGOqUBF58iXB5TiaSfkrMp5STGet8SRilgOVPkIY9XNGfxCj0wwa1C%2BR4Gjpmc914MXii0QPC8KMx4Fo4sInkOpQ0EY3bMDme9YaMDpS7ARdv9fetFSNshAUS1JBKL8RsH%2F7xEoNe%2B8b9Oqie%2F6U8gHGXtzEgApn386VFXXc358fg%2FnNS59eZBnNGSim5ER%2Fepe4zvVcNkccqOPImnOlfXbHAK94xnm%2FmM&X-Amz-Signature=622551d49aaf60900822c80809209bdc1f4b33b090d2ff9cb73024155b5bf04b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

