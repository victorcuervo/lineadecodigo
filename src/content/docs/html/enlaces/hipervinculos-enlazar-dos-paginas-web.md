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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIDBZWX6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1t%2FYw4HTSDkH6wjQsMn3wAm4REhAYDPdkR86lFzs2cAiBBi3jTVcqg5NQZH7reUrb%2FmVg6GvCM5V60lZoDk9wkBCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM143IA4y2wkxTJxhhKtwDr6Fi9ZX6JvJWicIBeLR64txFHFoUbSlDJmbg17iJMiZYyaUg5DxF9nYZrCNzUfRYY5TJe3gVrW2be4whRZXlFlUtAeMy4eFY3HY3fb6ae6CqnpmdvMeR3RD2oolMqHGHXOKUcW2qO%2BfJkHctU63cu1%2FNavSjMbDZOCjON%2BOsC8XKqe7XbMU2SUmHoy407IfXrlTDXLir3q6v%2FqqQCnhC21DZSUGShh22uZDlC6M97Phi9wrne1GycqyIHO7tbJmDwG5XQnVCKVXEiTxYQ3O%2BQfoCYBK3XgSxmRo5%2BbaJIOXXdvWK87%2FRugQowIE5cbXIjWv94cRosxhvfSpq8GfxFCm6mFM4hesPuLNvBwbrsAmXTJj7yfDvSnUYhHD7M5Gs%2Fgh%2BPWDX8U3EwPr21sIr%2B7wlSUQAgljbe59IsQculC7opfDv3yU9b02l18X79CyKy7%2FjjayUVHT0HolU7DEUvCFx2iNxvNVVKqZQC28obXZyGK7dinb5n4TLsF30dagW0g3AGFs5MIwNkeMRTSZu9YSPTeDegstX5MqSzRz%2B92iFKPf04s%2B2F23aoH8x5FQo1PFhyOQVGQHSf4pfDAyjM%2BfuEFMNFsqzMuAPqPZzrqWDM3qBSQzhLe0I6Xww7sXRyQY6pgEnuXN5aSZmF3ETeYMU4o18hCu1Qt5w0sxGi4r3cYI4HuurCzKFp7DAYozUbtud7jixHROuLCGG8F3PEep1%2BgIhCSpvuqIN5hrYXrBdAIXYtyB2uD8dYzGCjQZup5k5a4byvQHmWxlHuHCajvgBcra5CapcymHzMtE%2BujJ8u04IX%2FZYA5%2BsIzZYJvwMCPnORnCEJouzvCA27ZV%2FY%2FW39HHJUL0vYduJ&X-Amz-Signature=c0153c60641c12f595a0ceb3e7a7e7f4b3a036daaaa9997cb5035d2b68222acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

