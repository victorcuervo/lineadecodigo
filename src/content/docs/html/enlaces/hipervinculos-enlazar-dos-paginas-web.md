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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOMLGQ7H%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYVr3%2BjsdqlaBWe4H2IK97chA%2FexnHacOh1vidyHnlbAiEAhzLfqXl0H9hagiRm46Yswk5gihCea%2Bv2ZWpmL%2FTSggAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQ0GJIV5ZVG3RHn9CrcAyVSdo%2FDc3G0BlexgzFQ8btxTj5PZpE8j87lFsQVhumJ7uJTzxfhFFIHDlkSQTGvreVS4UjgQUQX1oaIELN9GBzMaQ%2BeNETJ7xNfOTBuKkq08DfS5DPs%2FbdoE7fP6mr8J3w3kxT5IXFRU23mYdWgqGaldr15yzuKmuQLs0TnHa3YYbWx%2BXQXT7E50y42pUNKVsgJJuTouOtc2alM0GPa5RlxrmEMlPIqUCY7L2pD79eyaoesae39xgothPZXbolAGcQ%2FWFHcw0gebverEIVWriM4KG3Jcj3diDA8cgJM075ESxez%2FkOJpjRd%2BR16LwdEbTEinBYW8hGLKdh%2FUoESICnWyKsd8zm3KQwi5T%2FxIt5w3YeISGhGDRIsh056Hh%2Flyx%2Fv7az9HxxK46fbbfrcjIn2lMjb1gfTQewAANhQ8YS%2Bm6QmXEC20uwkJFPRXNHCXpllWgVWHAag93g6naTK7ukxMOMtti46z8FAX445ueWJxbNmGVeKIwol7b1Z8fE5LFzQ9Z0xdW0hA0BdIwS%2Bns7IaoZgQZ9PFhmlfyIRc7umJMwxa2IBb2LJuAi9XI34ttTasNkO3BngdoWbl4D70956oHb16Kj0%2FnykFT5jpE8P%2BJzUblyMvQW9jh64MJbl3skGOqUBmuShIBeM0KRo24dzaREbfKOf67FEXUNT9rDo4eQd1vtoYEmfKmG6N6NK7jlxXqLlq1fDt9IrdkRKTJ7znMuO%2FFztJYHo5zk5pqEyRT6rIz5aj3ObGJViIQvhMSM0fuiV%2BOCMk2G0kI6QVux%2BhMi19CX9pIk6FfYGOQQ%2FF6ihJstqvPYj5YMH94ImNxZiYTYPcqz6vdrEmZFdz%2BF3kltKoXVdMBt3&X-Amz-Signature=2ccae238bbc9cf55b98a3d432a2338fa591edc88006cce7f5e03013bb01c33a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

