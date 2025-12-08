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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ENU775L%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID31d5U6RjIXIlT4Cv6KH1%2FaBZpjxU6PSMmUOHwYe%2FLvAiAf%2BFWuyFcosZcx543oMBw30ngFu6LX7iUWv5vpQToIPyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ytRrX3a%2BlMMEqT2KtwDGU%2FKXvKvEojYhgNbXSVBPlcTWZP1%2Bc76AC%2FozkwSeCv2NlMOuScrJYdpe93wC%2BlxBUQiDTKttY4LN71XH%2FyqLEr0cGPzsDOXULlGzIIq%2BRmJwh%2BIPC9O70xS1QSExuIEghaoHURfluRLXB9pkEzhN3c9nysLZ9zPpg4K4TMCFIVstkZKfmkGcSZsnn4JS6qALy7Ruf35GGJy0pFj19dh2GK0lCmgl7f%2FVcx1B8MPf2Tj%2FxGfO6r6W79BpK4SSQrX8WIKmzP%2BdxK3kTU09Kir%2Fi3t2QgjfIAoY1JOLxt2rtkJ8o0BbC%2FXs3wvTY4GWMYmlygf1KgAP%2BEnh2Xyrzvupke%2BkuISRuG2SgAgCSyLH%2F3I8suyBjE%2FgWKmy%2FnMwOAAXB79te2Z6YEMjQD%2F%2B%2BpKVSPOC34ZHQLJS%2BL75vZNS21DtVT7aMoK8PjXCZmIs6oTVS7O7Yoih0RQ2bmepcFsSU1LJ5HiJcLol2R6Ufos6suaWawSK9zUHw56xjG56yj1AmTWVf6zzZjpBKNR0sJ5e9ghTbrzLOOkeJKerhd5nYqRF%2Bns%2F3XM22zJz4vn8YPpBU7PumqQbCG08mqbqLOFYHCdoFq6pc1qXsTqx5Hp5hx6BgixTmD7CWWsEbUwucLbyQY6pgFA6PyOzzGfZDMuzWyKKuHGMTkAOluROU0Z7S6UB0gYUY7kvPtUcM65AoMdYEggGEK6QOPOc67P2VSH16%2FMMgpJvkaf1Dckrmr0Y4Mdz6%2B9bgbHhDFfgjCWBnB65Zh0jt08X8DMmrNO%2BSwvv0bAiYGV6lmh9DoCC1EpgCrbnzV7xKifJbwLA9y7F4aqy3ry7DTgwEWew4OCg9AGIgfkcoUKqEl0%2BNfd&X-Amz-Signature=47acefd0573631acfae9ed29732ffede4eede43f0d7d68eff3c34640f25e635f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

