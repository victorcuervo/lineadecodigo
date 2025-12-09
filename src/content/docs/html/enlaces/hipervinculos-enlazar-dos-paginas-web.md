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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWBAHTE4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA5iPPwgdO8vdZlDEPFgUb3ZTHypRPfrgQ0YhwYPCN5wIgM7wK7aF4lctWas6%2BvRdHY2MQyfTrekL%2FFM%2FrSimcyXYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnEcc1fc0CCpgv6nircA3QbrCMXw7mQgWW3Vkl77O5UWTWBTHmKIRKuCX3J4roXZmAx9yVJPxd9OuoXqmMxzNhccs0pLCghOFFaKDUgLGl9Nf8hTDbveRbbeo0W71SL8SK%2FLcxpPPXd6XoHimM5xYZCIGnLKLlawc8SXUIQclF2BN42V5dKz9jH%2F8eDYB0NV%2FMRFalPiCK1QsJZvSngnbTUg5Q6S9YRKapNBn4ZbBkZLejkPSb%2BZt1T6kL7VA7D18Dot32fpTlOziarqx0etLiZ%2F3nstx7EBS4xDGcfCTMGjo6QZPerON5bYdFYF9q4eMN1xhSdIHKHUGYG4ZUPy54%2BJyDmn0nQQ%2BmN4au2TboSLQgkB72lSee8SuCBHZ7uVhPRRXS%2BwVK3Nom2xI74NCEvG1MEzBYXEc%2Bq1g%2FczxMcC7%2BSE7YGAySkiKeNBWX3saWuxWlx0xSKfdWRmPJv%2Fk93uDnZul0ef%2FvZYYMafzaQaAvFGXngvpUDtquKLfgR9%2BxqVTNHcSzYmtcVYdagFVREirJiIa5QEnJUjbxRkkTGLQL5i217buGkT3CxTn38UJ%2FnP45hZqPaFTSxsBb3%2Bzmn3Npx%2Bl7vveiOq6XnijCKgl01s06ma%2FREPAQBmvr7ARSH2LcXqszFxgINML%2Fl3skGOqUBk7h21ukoMi6j5p4jaN%2BFleQaNI1fI30HkCUAnvhNairB%2B1GyTyvlCl4Iit6V%2FlJP%2B3oIvsA6JMHEdjHZkyPux%2F%2FrsvjkwLcNOAtiHTIEEWj%2BqPM5hD8goj7itt6MWC629H24GgnZMGophAJX31kv7Y%2BzPxT3gJXl07i7cNLrwhQM8HEXdn6gVQExxu7ZhVNrDvlVx5caCEmrwu69TE6l5QFQ7sjI&X-Amz-Signature=a437178d61f7e506852e920313638c8df6d13575bf5cfcc46bb6baaa60d39844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

