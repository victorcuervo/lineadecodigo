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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYNOBZN2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZa8%2BMI04qXUqWuN8%2FM6m1Lpq4s9IhF3UxeTa7PP0TxwIgPqBGNvtj9O79z7gYqph8E2WRl8I4GQ1WjUlMa7B1cooq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKfFx55tTxH6PpGCxCrcA0fij0bW70BCg0taOb65E98lza%2BSTImY6Ns4UzNBxUONPIC%2FVdKrc2NLXFlE2aGQ%2Fj2ZxfRf9iG0Ng3M8ygpC6fJXfQjOS4Fpdt4D4%2BaDhQT5kNcnq%2B6IH7rr7eDYOYiYOuOaw2e4dP80ZLZ7x6bARM%2Bn28Pn6UYeAHbpIBfXhtkTTXehcdD8nMRjk0KFV2SypbTJ5qUQ8pVHYERPGzyHUUqM6sknfA2el7ShAtHxOBuW%2BVqGkzeIxRD1NowdOhTMHnCkgb7OKTvNyuQ4c5NQ6pGmMWGYGBzSbtxIKG%2BmdPT%2Bh65COZPDY4BJGEnhyr7tVty%2BwHZWDI9h88M77SLuHxxU8nCWBHxvh0Ail%2FYph5IN5rBFZCwOUNFWLAShXBG%2BlMF6%2FoNLAKtgDgyb0dPeBnKXWSPYRAaKrkrdYrxXRSKC4WdxGz5673hnboDMz0bkYsfHUhv8nR0jVaYa7HpgLErR1oYwJMEErsg4guF11yJy73CpCUpnCEvm%2B3dTPosbmJfiz6f10M3zk88W63rL7wDPyXMin4zn8w1Xc15d3iHHPBJj7WGp31qekZrdYNKANNCguWZCkyDQ%2FLFQtDMmknlSeehXs2CyNTLqIM4Y2jD4O6dWmnK6mCa0T%2BAMNXC0ckGOqUByGgS%2F9qfLrcygD%2FJxbJYXHMXGIMRYVg9h7J4TU6lY5PnNCyy%2FoaFMHbVygGaNao83%2FVURN68AHiS94%2BO06iKqBf5Hu47P%2F%2BnjuSIwbEDSCWyDKPpHWYSYtJmA5KLcMK2jJUW0Ca1CM%2FyXyV8P6aOUmv8nY9d5NmFwn116e3eE4yS%2BQXFY7IugWQ6pk5jwSW%2BnMYHyhbb5XJo1IxYLcV%2F0mDkBKY2&X-Amz-Signature=c0682c4f921ee876ef5727b3cdb1181aa2d09948a9b2c7c960e7d235699926d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

