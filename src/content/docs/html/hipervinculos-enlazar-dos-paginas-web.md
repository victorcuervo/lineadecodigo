---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWNF7CAV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIB8C2JfWtE4aMvw3sxnri1GIlRjVIqlUG%2F0oZGw8JbAuAiEAkG2xWfNKWoR2p6KxtUVOJ%2FqgTiHz0Tf%2BJ0R3W18KI%2Foq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDH7OxR%2BO4q5xRq%2BkcCrcA8XFzEnZoiPbeBQ%2BhUmxWIQZ94eaED6A4NAA%2F8Iqg0%2FpHq%2FHWQqOYe%2By3L%2Bg1%2Brmp449qdHYJ7zsMKwwzfU2%2BsSPht5f5LHh3KVVzzl6M8N2ouuMG5p6YE9jFoUQHpJsoeh0KcBq%2Ftxp3JLnt9bF%2F6uPwv2YPenT66YDWTK3Kc2AW7HYCd7sWV3jUaD9jUUpfmDEa69rbfAfVMHBHg%2Brfvf%2BWP%2F6sEgTJf0YX8w9gbYT5sMUW45ztWS76BoyiFeX%2BvH5%2Bea8G%2FNqy%2B0weY0x9BvWpCswCnS5tQd1DCBz7PQqLHlxUBivdhJihSYaQUw%2FwVwuKB1kbVgwLugZyWvlOo5tzjQ003hCTXe%2FmEmdPXUYY%2Bz6q29JBDD3vL41rL6kiqkpEpF4nDMl31oUaXS1TQz4AvNOksMQbjt3lrxVP7yUeAjilniZkC3uFcYQpj%2BObgE3p%2Fi2HFtzS1YU4cN8o4UO1HDYX6Rf1wvU2TsG8%2FENT4eQq3Ju3OUoBzKHY%2FZu9KZzRCfuGk0%2BwDwRVVB27bz0kthxkD3TgEPZ1lFRNgtowpCqX%2FwE6oInFIt8s%2FtzaDfGLY3aRHfZBiBc%2BKwJGXVG%2FSBLDk9%2F4NoH4BwbVjpSuThMDEH9kuvoqSMJMM%2B9wskGOqUB6ty3NUR2dKyf8dkqo5A%2Fk7OGtI7YvWrdY10F%2F0UZEP%2Frt%2BNK9z7H9rsizdfqSj%2Fctu%2BKhLaKRZ1jlpTNETP2c79RYhWOEKPlg5U8DKx8uVXyrSuQKAl6Ckbfmrn0YciWvb8ows2Eo8gDhQCJEJhyB2b4P2DRbEDAhuxDSEkE7vJdpE0WqVsJBcFDzvlCIFoclA8%2FPqYN0Vm02AlIqkHMuBENRx7X&X-Amz-Signature=7ea83607293285e8d45ca1363d77ebac69e4aec13f82eb5abdd9a3379e73fc34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

