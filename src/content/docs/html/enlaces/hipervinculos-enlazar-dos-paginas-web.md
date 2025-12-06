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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZSFWJP6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElkTgnCkoGU3USIljYw5UYDU%2FOrYorBDZr%2FcHWM5l6YAiAdX36LgDHglSaLjfOxFbmS2ZBExbLqIwY%2B986lsDgWJir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMwMh8aGubeAzzKD1HKtwD35pH2ZEXQI98SeMhV82w%2FdM%2F7fij%2BTCfleaR11NXkJO4bZKa2gfz2G3f40qi2MX4%2Bm0Q4OFPAUzB3pKaTgP2dvfTer0wPU7vbGu%2FhdXLR3W%2Fol6i3MKpeOnsNrQPhesF9QOmmOsob2Y4xpDsgvuJchELVAQQJAS3zzLY7v6s%2BFRFhYlE8WsHp923hiPWvLjzie7hoNfBn7AHwt1fuuYi3%2BfARU3mFcW2YjU39s4EVelkB6w3X%2F0hlrxyCWQONrmPYuyBEqXZiZ5CPNWUCkkKyCXK158HP5%2FCRuOUMggsxQBfc03irHhEuGxzTkKffL1LaiK0%2B069rkqp24wA%2FwUAbjY8HVP6cEQgCbeOmRCsJioc8spSNJAqK7kmS8yPSiuaAllOKRBUj8HKmyXEAkcOylIlvvrUmJhel%2FCmfbzZlhvpGkXZOe060%2Beak4DmGm94U2NiWa1RVZF5pZBvRlXjtIpVaURw0mJC1%2FRAZmYjDZdmoNH9htaoz5uATxbuV2oeHBq82X4vad6CQ9mkP8brY3jRQN81W7BtQt3SuiTjJbk9ydttHskDiys6zvGWOXnaiogBHjOTWcljC3FRqLfU8icwwAQN43EDRtvJPSOkx8bjDfUiWNx4xbVd8BIw7KbQyQY6pgGNoqljwcXXBrf5RMe093YHnL2KzsOnTRV%2FQi8XL2klMbtKUE0l7wA4jy6qJ9JAy9fWsAZ6GCXGKBfAdk3Ft4iDMnMKTNxS00dhUyPcqKybNHK3GQDQIMVJXlBVzT560t%2BOuH0GwIp1nuRvsYBD4mdLOeZxKRV8c4tLcahcFRkYhuRUQIKNWbPH6Q%2By9GXRajd75l9BqZqhs%2Bq8nxiZYkKQEW%2Fa29%2B8&X-Amz-Signature=3b243156117e971b1b5d011f2cb9057121b868506cd04d037a3d7c0ffa2eb30c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

