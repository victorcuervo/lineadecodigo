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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUDFM3YO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZJwXxRvt8wRYaB74JIkyQCue3i3Ei%2Fig8AkytdXjrIAiEAg6diiFmriqTkzBEqhd4scV59kKz7iBdhm6%2BIWuaCB6IqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHT%2BsRaO0yXiEjw%2BircAyrhr7iMu2b0X2ZLBP02%2FFJiloTuBN48WntsbYM3k%2B0%2Fh3hqsQ3Nssrjf6YiP4BKszJo4BKT9W7UJizcsK%2FTfX1cqcxm9omv%2BGwOpaB0J7xkYUOCMXVDhKqAWeYbGqkvD9q8XP3TVaxJSiXR%2F0YAIUQchCKz%2F0nsNYRHaXVU8SUbrH%2BbEPRMCSIvoGtRCB%2BWR%2BNInp3s2pbSWT%2BI2Rqs1WdsFwQsreu3nP%2BMHfNxgI0DuZVK1tRc3V2ff4moTEhwX3%2FZm1R2XdL5t3fiA1pEaaA%2F647OjRcnKsd8BL3be7gota0fnHgU45N00NOYDQ7y%2FAU%2F6KkDo6fjSwM4cx79cwPqrUca3yf7TRjC3sGrqA%2FlOAulvTqfVyJqzzJfv0k9brcUpWgmkgM03ls2o37DpTDLMBkv7KCq5Z%2Fy94qhjqqWD88Z1uQPZiMlSJfcZRhgNHCQjOZng6LmhXiijCb71qX2NM0f9WZ9fWH9V%2B4KfiOjGXmKhdGfTPwbddvxww9HOkIHS50q32K9ZfDosgdWPJdF19o7t4pZvkVv8lbQcG2CJA5TeCyt4dVWt1QRpQvOY0amd7U9iQb6Or%2BWMQIfc5ej12a18149NWETGlmwM%2F8ro3OFsFr%2BuxMiYkLmMKui1MkGOqUB9xMNLR7OB%2BUX3ConLnGbRjjav4PvAPbbirnTRX2okzKwBoqiKQput%2F1TSI%2BjgYjRXwAn8bCaVU2S%2BgM1NhAt65OiaHmEE04w5XSF6mi%2FAkBCXnvXN1cGCoFj00YFdat1HwpUZenWLQdX9DUI7MX9q8T3gOA9TcLogAAlNKjPnjz3QjfimUEtRBrsUG7n%2Bn%2BDH%2BZ64aO8l%2FY00kC%2Bs6CRIkwI%2FK%2Fi&X-Amz-Signature=9b9644bc68f87a2782eeb50c0a27f754faa10b4473316e7f058651a0207845f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

