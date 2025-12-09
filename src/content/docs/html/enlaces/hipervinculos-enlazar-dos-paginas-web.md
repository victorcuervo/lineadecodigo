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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RUL27YG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T210408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDziMzbdqiu3PeCHzFucqkh%2FtVM2NcmLw2ZBxjf4%2BfzxAiEAt3O%2BO6mL7S0dCdG%2BrPuoI3G%2Bk9m4hk4JlYUiqYQed%2FEqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqpJ5ZLtxh4ELamLCrcAzTnxkVwL09bHiKackPyyzGzFrHKxbD72iW0Ct%2FG97CPOd0B0Pbjh8Bg%2FccSkbx6cpeIyQn5T%2Fv6pBsLO1P9xQj7upYAEvAP72oN7aTTULJz11jl36U4grQa3lTH51OUdsGj2bKrJcAJtTBMhUNK%2Fy1wqJbk%2FHybq%2Fgcvw%2BbUUpmP3qtVDpPDEEqmpbxCgYTALQuuC7G%2FbsCUW53JrDuwG8boT1aycHF8LGD3VI3%2FpScc7nnSnhID21I9lKshKtiL3dnSdVpJZrLvKVesZ8z77%2BhTi5bGOeiCwQ4aIkYFV1Z1L9X%2F%2FtgILDTLDPus9RxUQSbpoNKz0cJpPqhJV4Fr2UMfdlDhPpO1VK%2BYuF2jdVH1yLjnRrz8%2FpaIkaL3WVJhoyb9lMEz0sPEi9vHaTrD3ANJ8XCi0Z6PVkgoysVp%2FQsm4OplhwYZAkTJ3bOCSsdjvgFEbwzhrn%2FCPTji30a%2B8n4HdA7zEwCjLc%2FbHZdhlSyCexg3gFZ2D%2FGY7gikwg73awLUvyQM%2BvpC8lQKKZW1iSAWYjEi%2BgA%2F6jnDeiEJOPVNArcLcuHCqv1a4jV3%2BYXgxkwDKoRCFr9Y6vWMGEjE9b8YqBcwZwU7lskfbCfXoLXYkEbQEDaBjVpaWoeMJr%2B4ckGOqUB5R3yA3bSn6qHAHLctJ1MlYfghCc151mSE8dVd4fzd4u97vfjvW5XvjBOIhhVND34UFc9lMZyJDj8JUBrpXAe%2Bp1C2f5H9hlsq0qa4WTY7ZQRijeKaZqPrGinpM7AxZb8STj%2B%2BplkrDJ4q7I9tXIzNffX%2F1GJiX4nTxD7CfGnc5eRAtYqYwd10PUsYh2bE3rZbNFU9P%2FVoONsUrKB8T3ZoofDigyT&X-Amz-Signature=137da990a45183986c4d19fb32ea53430b623a6b206c382b4264e401c9d08691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

