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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR7IA3OE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T233835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmlXfc%2ByOiI7lcsI6PZ9YDnX%2F5nFXOsZoO5enI%2FoyZFQIhAKBxLplOxQ2jHEwEV7iBqNBcKwLRUHH5EWCZr3AktH%2FQKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIwYwzuFZU8FgGikYq3AMLh2eSWQ%2FRtXvEue%2FvLAffbbfo1PMf1702Gndb0%2B%2F6dUOd9%2FA6eunbgalri4Kt1lsTMGvyIuYlo4jWd8rgVmtgwkG5mj8DFytPL89tJjeDgdxRwCMbBuzaaX5XGZ4LOyI4qSj11baIPd0bq3SuXfySzta9TUe7%2F0pjwT7B6QzV0%2FXDowvSffdEW2nMFP6JUM8JR1Mf1ivchzuhVYYHNjmdQiAhEmb%2Fzkx7%2FXNWx8lQiGSXWffzGLb3zxX2Ui9dcOjRH65CB123wsx5qec%2BufYCGknGPtQkAIcvA6n8BsPNwIUNuknROX2sVlJmOIEyw30O%2Fme43p52uw1WqzabxoowNQhGsya%2FAm3AidtOmXw0OKzbmsWsJms922BaGok1aMa%2BySVH%2B0luVb6DoODolfDaDR5hBZvtCFku8HfPDvZouQIOCel0RW3N9j1hby9Bge6s9DXYdFgYbC%2BoVaqQMZjELBoovjGJm3FyQuoJQbMipzE6%2FWZJXrHOEFATQYT6eiNwODBQIeOPFdnINQLYmgPX7SBg50spB6e5TZSyH6PquHpZW%2FQtm9QAf5EBt1HtSVHJ5G5ZuZfQaly%2BPSqPA04JE6S8utnSzs22xgbju773Wz%2BuZIWReSHn5m2lSjCJw%2BLJBjqkAUNbkg7p79bUYmMUiW1MdCaN6D8GT9z3WpYpQ6lr2zxwAf0PnFiw3CNWxohBW9VheizMxbaLuzG7zYG02GmDh%2B7%2Fc3OdJZjD0BsB8ppCNQnqVY7fUVTyWxc1OtSpv3gJm2XWqQPmxEFO0Lqrru7aZLhL87jmj2hsY7l4XFbnkC0vsCyj%2BqX1tg4iI%2FzJVwmF60f3UDoccSzbRamk75ocD5ny3WX%2F&X-Amz-Signature=f6aff9310d4a953af172bd69d10df934ff5e69475f31a99bf5dd12b33987172f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

