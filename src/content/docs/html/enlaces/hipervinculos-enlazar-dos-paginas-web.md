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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624ZZISBP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFUwSw0YcI6z7HgIJsUzrmXhmWArxcCtr82OZ2d9rHqAiEA9nNlkI2FLgHzCQuq2jjXhOZzAY3rdb5bOcA9lT4fo%2Fkq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDNjfQ6gvlpLlWOsHNircA1qZTR2WaIMMYoIdo1dyyfTUX%2FdmiLBCTWvQkss3ES30yWM4QQnn4q0b5wZ1j0Z7kxEUpWUjt6NmpjidOBmezs5h2uPLAZDe%2B8i18mty21bkLhWmEVTKgdAwn5us%2BaxGGcUwctTKO0MWm46mZ6D0bboyx3YV61EglNOFOaA3042RTG8BnrHXpynxYE05linlnnBz8ZR9RkjuZHKMUd8wtZdW8wjXzgXJZLMTbFO5fb88qEb9IbTzGZ3q8xRdKsBbrj%2F9otReSml%2BI%2FFYWdoqKdb5Fs%2Ba2WgdK%2FeRvsj5UxfybLY%2FR6%2BXlRERXyG6B1Ep42EFy2iKcRR2Y6lMsPTNJqhOhTN%2Fvc4q%2Bz0bVBycFx%2Fwv5x5WZr7UH1PxTO5wOIpltpISmL5QHjwuWxRjXKiIB7U6IUY5wILlFJANJohLAyQLL2%2Ffnya519dpaQNbcuqMOiyeiWMWK2YBAQWVmXqmCA1r%2FDW3ESYJhjGavXTvK3nrhY7s8NVqHmey6HuhdDhLCK2yYRjOi5uqyd%2B5GxLaeVe4Gqy0XztNFhV7dLEx9C0vK3qD32TeZrSzfHap9DFEX2RXxuxJTLhQn5H8smRajDWgGdvAhmiG1wPC%2BfKnbwKlxW5ABkbduN3XGLeMI7xy8kGOqUBCVmvC9iCXdOMjkaWpYGF4P%2FQWS7qXSCLAhD25Lkn26OmNX8ZV3lb0OmSz5LYPcMeeNj5hpFMK3vei11TxS6tk1y6hZjlY8%2FMsP2IEtIetufjdhtTPZl4Q8Dgz2qNM4Xbtc4BVlsQsCK2srrSTDIpgceejEEU0ogRAgwNZ5M%2B0LS1HtA3pZCHHr2JFhpb0Ags4kGe5PxVIBK1dllHw2EXhxQ32Iug&X-Amz-Signature=7feef875b4cc05522bc1517b78f5af8ada7b4e0143ebf41e30ef3d2844338d60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

