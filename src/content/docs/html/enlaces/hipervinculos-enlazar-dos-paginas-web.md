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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466527FN6BI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T170601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGS3nNFov6WLxTYNyMcZ%2BLVtJQW5ptDOAsC%2B7OmNUqodAiBKrQ1A%2BEGI4aeWw5tJvwljC4kCMQ2IvFy72LNbphkGbSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEiJ78joj9vEACXaCKtwDWT0u5eUhOk374jt7wXhg0ltwS0PCov0d740iwUn5uRdXF1UBWICy6U6bIOaEUunwsE47qQxnuzyr6V9Oq1FyA5ljb7IAUhMJSP4KTFYrraVlwa7Q5jqiudSI0ehsOoHeGCwFFpCtaTRlDS9vk4FwSDb3fA%2B%2BsTQ72BzScpOdFkvk%2BFppdgCIpdckr7qvgvRJd0y8cU%2BO4ExsI%2BtNyqx2nKSKjidcMV3kIbmubvHZE05opu43BV%2BNn1l8Mhs9cqbUwmb4GfLjrU548u4cAWHmrB62lo4EEWvehkjhnRr%2FPNv7egrUKfYq9Z7Sv7GsU6ChsSpk%2FK41RhyQ%2By0EV8J7WFPUESkGlY0G0%2FvYVf35858OuMoVGDs8KUj54Cn3cqUFd33Hp9M5OQMohIKge9zcvXfDu%2BjmziQ0FyN%2FWGrpUz%2B2ugEnVHwsX5oNTKbNvEskzr7vCoUsE5o%2Br5IY%2BRET1PXwwNhNpuwX5EostDP24nsD1yqftTus6KN0gslgkpWLzHBCEx03K9zcIa%2F%2FmVihbZlneQDkLXtQMYnTeyoL3IH6G0QPvXQsv0m9nNIDxsNNkYlKjudbpGle6qaMIcSSZOJAsrdUcptIVicpQGIrH%2Fk%2FDyOHGz9qppzv3Kgw%2B5fhyQY6pgHJ%2B0LPr3ZY7am5Qa6YLBLaROKPFzf4ofeNDrq8s09Wd1qB0HoAzzxSpOnzyeb1rO8C1XQac7hL7h6XKjSyX3N5oSGT01uu2UZ1GBcxT8tSsoCIW4XBidD6U%2FXfZYMZIkmC9sz1biVfXAbcFc17cVa7KkrGWHqFX2LPYlbTDUArtMnadNi0jYFSuELo%2B%2BvwwPT5h%2FfVSHex81mSwrYPhSpSUsHGcxlq&X-Amz-Signature=e6f3fd40736404b4abaeab549f1e0f9ca3e6a0e14dd93071a930d7bd5437f97e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

