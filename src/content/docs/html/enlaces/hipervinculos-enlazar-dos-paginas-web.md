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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLKATXGV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T154330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFS%2B9ScNYhprHMJ6Qo6KBfWRIciwzJx32GmDT1WvlEiVAiEA4VJ4zP4ibDpQYrHzwfXojew%2FTw3KW732oesuefEJouYqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJc8ExIFuS1rnZ4Q2SrcAyPVYfShRUOrJuiPXPthDbq3pLuh42YZ0pPdiBgVci2JSSU%2Frd4Xg519FxaBQ4UqB8VPyjbcGxVg71QqxFTVusGo9O%2FIVNCYYhIGM1tkmNhasPNnRArCBoayk8TIFsbRswUl6A%2B7sk8Y9ALrloxn9FpZyjipGL9KPpzjMADMvOStt6IRvvNrmbmTIZjhlR7kHdKkx48EYrMbzZYskl5zHrgYkc8QxgmUL7wV1XMl4sYY%2BJ5BGsQTRHpnu26Np5EXU%2FeE59cH3chfGAYjD8DxhpJWTtYc3VPlpLGKiRsQuzU9XccvvLcEFVHMyRPCwj9XUUoPB0Ko5PGlrus%2BLctKXn%2BAQIYjq%2F8ncCbjTk56yCocZM%2BCF8CQRIe0ZWhI3e%2FzbORRWME40Qw6PKZdgklsu9ZqTjL6360M8Ocr%2B6V19ynoux6baks5oexAp1O9UIEU3msGuDusjqko7pvk3N%2BvzbV%2BbMLt9Q4t4dtbohksbzyH%2Fpw0r5WtVhFbS3wzVxNhuozw2wos7rSG5H6hFJXLmPnA9wmwyQoqeRYDUno%2BuchwpQb8P1Ipz5fEDlpXhl8%2FHu8tzBbDrPOdB%2FfCBHB%2F8Tg4XhGhIlnZEGY4OrTiFzZCiPCyr6Hx95ZdX9fjMMHd4MkGOqUB7pgjetkW%2B1F%2F7WsftP%2BOVELo0iulRVf2NIaZ3LvdWdrXU6jNuwQv2Jr%2BP0faCQeqjr2UmtQLbTLeqTwD8FH5aiiKyLP6OAGS4PKo8AuGa7VVg1U5FMJCj3j29IxUnFBGXTbDj%2FJATRxljsBQ6mWlGVi0oAiKsuZ2%2BOwatFP4uhX73nEUHpYjzK352yDqmyD%2FVhyNl7Dc%2F06N9EftL7NQt56RpdQv&X-Amz-Signature=21fb842a543f2a677c8e136492bc04b2a6f1a22e80879ff883113767ba78f5df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

