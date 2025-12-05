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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAZZHYAO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChC8EIWsKTOoMfE1mDbZ1HAr%2BI5NYeDxgxzUmAi3Z9nQIgI9LjdKufkATOTcrg%2BG6EmNHhNc2LzEpX8OdtVQOfiPIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN7SEBw5VKA3KbS2cSrcA3ovigQN8hOc01aXzxbFZJ3fFqyeSL0qkaEBwwg8cPcg795OO2hqLpT8OQ59%2F6CJyop%2Bb5uX6Ahk1DL0DcRGxIEpct9cQW4N5MQM1WnydkDSuLwg%2BvPiY5HtLt0MuHTeGIs3oKQBuUkecBB%2F1Nk9dO5vaOP8urPfi57Zz%2FbuJi634%2BQLn5NHSrW%2F3kJnh91OHH53iyGj1EUwLdem0ZrL%2FyZziideEy9nZfOHBEyoE5DQxVFnBUd1l599c83ZYA94QMfb8AsNKcHWMgFffOPRdTBSJ6oQ23NOML%2Brh%2FKZ1oQB%2BC8Fs0QUzkEkwmRewfJPE42SfRTQmjq9Bz4xONasOooBMsQoWOO58xFvfcyoG4PuHb6i%2F3BMT9h96BR7mJs721qHhHvvrXI57TbVQlOvBwJ54EB8GmvUjEeVOeh9CB2CrLoTSXTvyBk5Y3OM8tZ44dHOu5JMNTrcoN%2B8adFoH%2BIwYkzt76aGT%2F6kcL9au%2FImV9zHDnrHD4GkFGf1GUpqOiRqSNikgnx%2F8BBL%2Fc%2FtzHJWpbPt%2Fz1eRMis0U%2FBcDIBgyBLB0Iqn4kcvjvz5HNSCzuTyvHGzkfs35959SXtczASzl8vWED97vqkiXvt8SUCIO0bQ3iigrEkd2YkMIfQyskGOqUBokGF4yjPrgEuT6i9fBTvLv51Csr8w4ThBsIQB%2BJfT0BJeLtx%2Bsf%2Fvv9PiVEtmwFR8mmOWzuW76xmOOXjUehPW7OyW7OF29wS4pTZHHpdva%2F5SBwIHfWP%2BYPsPNQsaYzHGgCV1nly4WJXkKiBSPYcGv55ptShmh8Qn8S%2Fbq2p4rITZsX5NDlvrTBCHCN%2FMu2xPA7rmJYTNf4MfF2djZCwM6Wc%2BF00&X-Amz-Signature=4f48f451948cccc4fabf51e34ccfae83b569364a3c7cb63716b1879cd0ffc84b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

