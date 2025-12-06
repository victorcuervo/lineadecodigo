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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7TPIZWP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrR6%2BPu9uTdOHfS3GmkSDovtL0SHiz3YbwMqOrhvPmqwIgascaAXXEbPPFQJiGXq2wQ3RNPlZSTIxcS8l1bK2o%2BJ8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBfghZIWc86ZjVe%2FpyrcA2bO3qpmlNXgYb4%2BkxcnmK1oGIS8djRUflF0MRHnioZufO2OlxEEOkjjC4BC8aaySfIKMw3B47IecKgxLZqwnZi22FnVhM8rH5gD%2BIp9uD60o9O7f2jdRqjcH9qc%2FjDo8K2vVJZHFaSacgFIP2VJbmsTRzs8CMg3dw9oRonk4FnnJsIYm%2F4X01V7FO%2FnzzeH%2FVExK22kq1BDKbxSjIsG77uUSX%2BEtcFz%2Ffs4FA%2BENMI6bA%2FUv4Nk7zdPT0yHD3QT4RUWLNaAujNsY3ecx4YHfNXFWpTEEkD%2B6I0UjNC%2FM25CkXJr8CkWDqFDdjhVoFC%2BlHPsVhoLqxJdYlY9UOIf1Cmk0qY2odxPJb86qEI6nMMXaKawFDroivqcXaeXfwuEMAHgCpxu7BcF%2BfpMcY2Vi3aniUFrOP8Fj%2FJxqj6BR%2BUuL1ktkcZmmkeqA0B5pLFD%2F%2Br7aRSo3JU2R721ZPXKXirGLVN%2BiiyWOy190DB6Q99%2BwHyD3QP2stVtbwNvgY5jJ%2FKnturynSiXWmfkEHsIJP7winW1PwAaLKcIPTF%2BUMcR5gp%2BwBnOE9pas%2FEcy2nf6usjbj7q0XCJtzcwKqzs28%2F6D0VPgYefWw0KgGiOFIYFoDbMzqRYPXcHPzAbMJGn0MkGOqUBUEWTT7UovVWjxSInRU%2B5eIwKBn2DJ6zwde5ZWY1gUOxQ9D03YppB%2F1UxSrordVlzfkNsu1jBT5THRvD2cz3h%2FM5rRxpgkfMnpj97OZOLIqVMLyIWdFLoEEOtN10KbOe7nKbeIq8SV3FVOnnvZdH9ugQNOggaAWhDpRFG7bB%2BxxiO72UqaFsV9xlD4mFaFMg%2FcbFd24ty2Owr2faMGDVGD8AIa0If&X-Amz-Signature=e449175867a5e5568b00a33ea45785ecbfa379f3bb028d137f4852130cd6450c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

