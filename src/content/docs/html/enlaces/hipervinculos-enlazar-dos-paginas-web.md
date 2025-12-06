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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFD6DTVO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBe5WsIrveCp0R9jZMi68Frik%2FIVLinFzRoLIp9RYDIDAiEAgUkBRXvNzteUi9t3CSfCDHBOW21tLl56W1l7NaFN8LIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDN91NltkNcOaggCpWCrcA0MVAsfOVo%2FAFHWfWnYo7zEoT0ECPNFyu%2B1T4Ma25MokR50uzT%2Fcmynd5%2Ft7rX1gx83sYjgz6lzk%2FvIzRLRGGo67jFGBll9Ok4B%2BuuM2BXGI1tQBvpIVyAheGf0R21j4eYRIQhYfRNd3xkq7YuOVZsWkWSwtx7y0zpRhVs9GZtKIBjDk36qigsFoYDj1yvigEVTutvQSrs%2Byw9uDfnopcTgfz7TAqF0Mdibi%2FvRj3frmi6qcA3pjxRto7vM2Rb8wlFc3lM%2B%2BeLPURCFBpEwCHFcvhUgN7fS2U4Y3%2BZMc9YauRaOSDgUMFSIe%2BbtWHmTQaNKVWELBxCQGECtOrBU9v%2B0Zu6umkcyuvNdR2mtegnoB2cqheTmQQzlNXVc33%2BB9MUpkCXWwyV4O9pkw380g74Z%2F6BXU27bu3kbbAi9SnvXqyPWSTnvsRS6SB3ddt6BVpiasr6ZXvZKqOGGowKGOcz5F7yXukHK3RMGps7fyEz9W7DqOvtRSS4PSb6%2BWdtJ0geOLoFmh8GcjMqnEhfFrqmdSpNql6TQm%2BLMlBMpl2KiDpuTM5cLiXJMi0QKq6590VoiHy5hm1i%2FjhgppgmwZuTLbdSN1CW3n6zvBjSWAZsJ7u8fs%2F5wGQaoATekQMPWm0MkGOqUBku0v%2BFcui%2BlJpTByErACkoituz%2FAkbTsVzou2Bi4RxRXxYck0lgLajP98qG%2B57W4bhaZuFfDuOaBNAynGBaRT7DfHpDc1ujmUoofh89Yw4j9cUvk7PMTmfPEmhqKd2raxANofTCyAR05Yv78%2BNPngvXIORerr0cBM6OqoVjZmq%2Fwa2BJT0%2ByzwacD%2By45zsRDjItd3WxZyLrAhhQ0%2FrrN%2F5s4Uwh&X-Amz-Signature=27a081d43ba79e94bc76185b4e74731b200400239e2a166eb558a89b94e9ca99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

