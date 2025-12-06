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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T6IWMOU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbIrP0%2FiC%2B%2FveuV93DVskIbawekrK9L1asiqJJteQhJAIhAPwztPp0EcCUcaPGYsOrKuLaVYilt1k2nBWkUo5P7c%2BIKv8DCGsQABoMNjM3NDIzMTgzODA1IgzLjhBQrr2Q%2BsmnQHAq3AP9uKQOLGChAA9HrrfzIcfXGz85fhzwaE6G9EguFTs9%2BY6KnUW7vjzxcatksCxdR%2BaNYI24T7FSwX%2BeNjV9l1H%2BGdK3gL4idyGB7nanPOelTURaBzGWX%2BKRKtK6PwkVgJUCf2M0jyBNvg%2F0zjhZbHhBYxmiDLPOtfmZ9WC3HR7aeOVpmbO2VgNDpRYkKGn4W4uo08st9X9JUVsKZIvU6f7tPlB%2BkU8b6DoRZYFjUcqTr3NjYvWBth98Flqy41Ve9NOHSSccb5g9ZvXk2Anxc6orvholPJpm10FlenlC%2Foe7%2B%2Firp0bC29%2FOeyAsiYbXR%2B5Y7gOC4YOnGrtvL5Fi6TZYcWEJbUp6EqtscI4Q6dAeL9hfnZDupg2P8sokCKQzvT0gAaw%2Fl3PkKOijuba8R0piFWUrxURqmJAFeBROg1yAT%2BbFgShAe1Bw%2BGJqKuKgeJr%2BfMcjfWXc%2FFAHUyLn7%2Fsnh63PRGrdjAG3rBgOl891CZC3zJuA%2BN9dfjPTJ9pB7hmy5DsAMVxKw0LTdyRkqGQbxoVJsHKsnm8%2FwJmBoNEsBx8%2BJYIc47bhltG6%2Fpkb8jZv3cBxzslXh8Yyztq%2BGoBMaNCQkMJtzTPbyO2Ftj5rasMpl59kAuxJOAlt1jDyp87JBjqkAdrfoPzc8bOGD65xWcutkHmJcZ7uMSHLp53R3CNFMnaWU5tq7d%2BW68wO7F65Gfw757oKEE%2B%2BkDp8eJpExyTJUCrYEiwRkuq5IAR6YGyP2NRjevK9AnqEcP0G%2FjuyR53aIk6r0I77NUhyWqEPkCKUmwsZjo%2FgQxUMZNa%2B3lhHd%2BKvV%2F2Cga7UTqswy9ESsJmiR1STXTlFqmIfeMRFOHe4FgS9ByYW&X-Amz-Signature=f52cdbcdff6d8e3d531dc71816a99fb21c1d7ad6478b257e0c6ebd0f11cdd1b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

