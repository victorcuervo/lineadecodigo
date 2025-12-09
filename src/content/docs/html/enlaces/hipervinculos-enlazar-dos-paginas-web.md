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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNW5G52M%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T210102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwgnWBLc8CV26loXJSgX4TNdQILEX%2FXvpPKtMQqAVHLAiEAoIhWgVoM13dagQ4z85BIGRTvyZW9o12LHeGSWrv31uIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPl8MUSeaV11iq53eSrcA2kMjSxQ%2F1TTx5xwq6cALXGRJvlQxYWy3vZYymUaxFgdspwwbiwQgFABMM1jWbBHqob91CnEXf0kfJuANOGALHWym9M8AVKX7P5c%2B7ndcc8RBr%2FNmLUHgIexTxCzbnCTIcNxzlJmDmXlDlK6PRgzEEyzS7d1h3%2FqUKFQ%2FG8h7dATDLLZI91pc4lyULZo8AL5A0Je1EBwJM58Kd2c6%2FbVXjrC6SKDmc27of3vZmSVwI%2Ftmw1iqRWsYMp5YlUOKon7XecELghjl8GyHFaAGWs%2BqobcX%2FKXGzhQy2XBz6Vuc9VV8IjhO379Zc47HcwR%2FkcpgwvWh7kZTodcHOzAOphRh5xBfFn8hnT1cES13TpXVBeivqeFcTPEPRJtiZnQeMnan2A5FVa0n7HCT4K42KbwS2zhGHAnlfWsuPQh5o6TZiET1VDICorCaGf0D1MNwNEE0bLbgKkIIfPULPhPwOCy6%2BPW1xO%2FrOLDkDf4r8ASjXLfy9o7IQUy5A9bDfpnUEPcgC6sSbzPu9A4LxyVZ7PTtejEUZN9u01zYDaItqxBjolDUfQ3GlfXxFmucVEpES0glnMeeK%2BZ7pxTNm4qmkNgUa0wbUjhj9KdNkAY72yus3urffd%2BRmovS5yxwaLTMI%2F%2F4ckGOqUBjJWd5LNqdS0V2MgtE7%2B812%2B0CRm4dbjVXAZvereWpW7yQIqJtf2TcJkVwx9mCraxam%2BFR2FpfncRmV8U8cfOxgWfJwCDpYJ4ixtEVpM5haGs4XeuBO5l1lBI8%2F5BhErmvdG0GBMtyJhrfWqvd7gtTJgykZABqlZb3Gv54Fxh0DeMlNAfndOgggcygj7d9K%2FjtjwsayMEBlDV%2Bs2bpIkFBkxtMHlz&X-Amz-Signature=a539fed1704e4c24568e6d39f16c3dbf9e3a33d25804be461f276218144483fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

