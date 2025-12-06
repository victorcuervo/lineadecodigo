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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJVOB7BK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzMoyN4jnkF58Ju7mieDg%2Fzp2SZ8gDB4AlIAkV%2BiGS7AiA9qA4Xr2lEUMifjthoka38RBDA0rahPxbBAIoSVnjZSir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM%2BXeDyifa80cPdBa0KtwD%2BEpx5BJRZLnj%2BeM8AnHuZS1WztV%2FKLpMkAqHKCUwv6pbavu6L90x3xDntVTiwIQ8kAIconleh%2FnnDy7%2FFXrZDVXOg9SCdxhoTcElavwjmHT3A22WGfOdT39YbrfuHpSGWrrQTFya2tlbV2Y%2BLzfghzaSoZjAA678aOnS%2F%2BUJCNoqiqUK3U8b%2FHZpJz9VinHPXtC3kRBpKlLwX9PwCES4kmYINwGQecZnqL5cPlkQ749cs3haEVes6%2BmAsnOqts1S0ZTC4wRbvib4%2FC2Vwpngy01CnhQe49G6OOng5wpCD5CPxcRq8uWPo5MFHLIlLRxxs1QnZ86mJ4TO%2FZhwa4Q8AqboFFaGRoycsmzmX5ElVT%2BWxmLGfolJ58WlzPayUC3ke0apVfsqZysYiEg65evh%2BMx874LVCbziLHtFSs7kvhfj8UbFaHWpbVJjiwe%2BAhh9zx0ymR8qTh4mWUQOKHxg7pXNHJ0IqmNnD23Addksf3b7Kzw4kawRlNkdLg%2Bokrf5il2Ru3Fh47dibH%2F2UBI2w3t24jd1no4%2Fd9z1Vcz41D%2BD8EVKLLavf%2F4yuO6nEwxwjGbggL8UabN15MeGAixmGOSmPQouDR3KNE9HYgswaDS%2BgNx71mKX4DGBbfow2YnQyQY6pgHz1rD2spcHOAMEQeG3hQxT8Fd4WRKRsl%2F4fl3W%2B52ah77lV8lz%2BeUKJsAq0yydSvZRJAnZNTX4FTBea1RMP3Z7EDhntMSQuS686cPo4pBwa6wR4l%2FY5p2Neui%2F6dzjpg9pN8hRRUDPyWNkBWp7BAOJkea0aRLDNp8t4hWoe9I1NWVQP%2FMu14CpMA2Kvq3o72zyDQo4%2FedtID1Dpqqoz2TscZOFq8cY&X-Amz-Signature=c60ad3284aa512f440e7630c72d26617e2900bbfd4a9716dfec2c341d3a36e58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

