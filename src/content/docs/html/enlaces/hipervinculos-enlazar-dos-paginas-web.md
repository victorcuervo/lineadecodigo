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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYC5PNJ7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoVX6E3M4k5444yclVCrSioNd0OqTm88XzYHECGuD8AAiB%2Bc55KcAEVqp0vgmNtelieeP1%2BVNaeje%2BTo4D9yUJn3CqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe%2FoZnp8xFqfMsZCDKtwDMvTRC9w2FUZRzLZNNA6U%2BWo9GKEfK2ldpylF%2FTPartDxAVoDBrxE67cDP7pbyog4kxvrXpST%2FWYXDhGBHfrkK28d5D5DQsSXQ20N%2Bl%2F4A8XxSfbPUmoFkExtjDYZWJdqORGMVYrvJR%2FM95u36Yywt1c5R6QwCESQAZ%2BqSgxihS6LSAacJxabuZmSycaWjwCZi3GEtrKAqCi0QuwoUpzeCCg8fvssz%2FMJHztHHJD6dRjHF23T6DsNS75fFdLpYvSDao1N0VZbJ8WZJkc%2BLnDoajo5QE%2FvLgNVbnzT52onsFei8D5SEcfCL2kfrAZr7FXfVI48%2BT086dlolpU9%2B6SyXN2D41wfyAlI4fdRJWFuaEuWVqlPIEzLGSRtDiBs2%2BksirM9RASD8XqO9nHARbmoZCKpyDHNTNOpccynOk7S7Z5igdXlqAmWkfqfPl6bg6tz5GGI5FFgbQM3I0dA7HBPBBT6GXWWtUIq%2FUXtbSC8Z%2BTxZct%2BYDsbHZAi4yOY6okMea%2BwegRZ4Gmz%2FAzDIAPDkqxty5rHpXdiUyzx6ADD1YEt9V7XEFv%2F7K%2Frj0ArwEy2WEo%2B3Zxw4bQ9PB3nM2qVVmg%2BT4bZxW5YNJRk1Y7uDyHF4wssjpPe4hNY61IwtO%2FYyQY6pgFKZEWrBajP04ECcPr1l0jm%2BVxJb1zgLAmsFp4rv1bW2tXmTxESFnEs6N29unuQfeiSyc8ugR3HjbLHm6N5wzO8uScG10nWAZFD%2FFkTqyhWyBeVf15E8%2Fin9LZf%2Fy0KXIVKa8QKZl45nmXwniyLATcqu%2Fi2uX47cbdyE9ueK%2BaSd0w%2B1%2BAmPHQ%2FCsocSQ2WK%2BUkfv4oTDAxDUOVA1mTqwrfyh6VLCGh&X-Amz-Signature=b6233ea983877069829da3e1a9495b7556b863c0debdecfea5f8768d31f79e91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

