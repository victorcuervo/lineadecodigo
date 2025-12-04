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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA3IPQY6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEheTcRCco6oxd%2BKUUPfr9W3c%2BIRgyqHqIusLAOm6jZ6AiEAnJoL1P0oMeFgZbeAIQ3ztk7eHhCzMGsZM%2FhG%2Fa2Ar1cq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDE9LGY3n7AFj7xUlOyrcA%2FpFO2hUT%2BwckltKDhj9loWxxFhwOuKGqZK0wqKUSRwXSn0nwpaswChOgS5Yhu%2BmmE60z44hubvlNZDrswV5modicqCX1f1W0O94wwOKeFQln7VHw1XaAHIkPk5qTqAFuI4W%2Bq3IBw2fDL8TkQdXaSxzdRix%2B6JkAu4jcpesxExbQDhYtZeAHLiUkWPdPJoLFSSS41LgfFsEF37Tm7UqqnuOtsxDAQeg9b1tJc3zwx%2FFnh0X%2B8%2BW1yxUK5lYelZo%2F2xwtV52F2rrv%2Bj9IDPLjHH4U1LmnOTgB5LFXEeDCn8PNar3L6G%2BSZ4i8rvk9oqJXsb0tNDERr%2BbaSvb1hb9w6AxDD79494smyvfXMyxEvoXW3Tiro5ThJGLEVtRigmZREMi99hQj464F%2B7RzgtfagpEdtLKAG8syn2sjw1gvclln9wzOXNsy7eyXaaqsGd%2FJpUWIvlI3upHurZIjSj9QQUnxSvCsPUswc%2FEj%2FA0YkUIK7IjjkK%2F2WgUAVOXb9hNeKsO4mW1DLWjutJS7DXn%2F%2B%2BPNHctxTCtqywznAKzJsct2dbWfoIF3bhdkv0GcSKYnjeywTJayrwS4QbuyIaTmhogAE%2Bs19Wvk3vWEbpiKUh6B%2Bh4bz6Xvxd5xtCxMM%2BQxMkGOqUB%2BOXNC4kLVr5T%2F2hlRC1VDlISpNC2fBtWc0pexA5bwtIZqHaZzzKiqNrvfO1sYNrQlD2zz2VWTO8yLl46Ektx5F7k%2BpPNwr7IdxkH%2FHzq4e%2BY14%2BEhFQyZ0e%2FZ9XWu3rSesPxG4T0o87UBteIFbWx2T491MIMP68JX1YtPyR2QdzIqHNpEMg7KePTtMgAayPe0OV5LmQnfEpKHOAyTBposzsdQdg6&X-Amz-Signature=a807e6f30951fb2ec7f406618c751681acf8e050ceee4d9eb76a1f683d3b1e03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

