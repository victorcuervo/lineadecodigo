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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6AC5IS7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3NyzOOrxa%2BH0La7p1z%2BOvF2VNNLxWR1TZKkrExF87ZAiBJ5GEroEEC%2BDTk71P9%2B1Thu2ENnHySQHiWwhvHrJSu9yr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMYCWLgOGOMWVKGfdcKtwDgVkJ31h4EVQ7GdDyh%2F2dGkQR1DQjvnGhTnPB5NmWNfcXUcp5n1uicnoSrNSJecqYDzySONP9qIbDFDp4tK%2FjinlK4uEfGGRgcnuR4zPER%2FDOgNANB6fZ6qlELKwqmTa70TO6abmxAGVrjD0Q3nQ0VbTTMERtNnCcdbBo4MNpIM4BhoQKsriKsPT5OK%2BHn7tA2V96obA0HZ4c203OSJbcRlMYDARJjBHtwPcjiseJ4X1ORVRixJBDz6Wcw2UtvEYlsG9Sfkd7%2BCRrjqgzVjRN1TuUiGQCiu2PVqPKE0ASLz1rSFTIKsfGnctBYv7XUGn%2BLoRtPWAW9SvZtxOgtUnNWat0%2BAr1yW6c6hR4xwOJYFzkAnuduYDJQp%2FAGpx1OLL8cJpSdTkGhT5DveDF%2B3X4njMmsTgIZNyISmC%2FPXkVLh0mZFQ9g0ZYQO%2B53z2oiceEWXmFxn9YEYa1MEHLMyQz0xekBFqRK5Ck5KxZjDotiufPKQmN0XaX5gI8GY0Er%2B1xxmdNyoLf9s7Y5%2BmZ6JfyDl25FdE3cS%2BRZykejzlvukTwEKC2BVL%2B0tXzVb1zfy3gYukDiAgQYCbXd6xCHZ9W%2FKcYbvipPEYw70nZ%2BhmwMOg1il34fwwMDKgNYxYw1K%2FRyQY6pgELC630fZC1zDNBsBRolwerD%2F7IQBkBszttMTuOf5qArYpdBiqgeg2%2BV%2B%2FSOW3XCd5dMhwMEK1jFiVTOWJA7WLiw%2Fy2yBNspbbB12t2dVvxhItrnV0kLB9Im4DMIrB8FskPsK6UAxstya6Xi0phB%2BnvYFi%2FaUY20tEOHTzhADTsMgNqFewcTf1Qr35XCAkiQVUGljlhjY4jUrJBA1QUOcXomQA3oJ7M&X-Amz-Signature=3011b9301b81ac249c61f8d4ec1b5bdac93c954f13fbe5bc6fc44c6126631c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

