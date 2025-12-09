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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THRVRUJ6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T162651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bn02mCjC8mVJZIs8FbkkrLE5avahJQyrkkcgfjeHbAQIhAIqeq1luGrDJBef31s%2BljZyO2rN%2BmSWrwd0FkfOIWJ%2FFKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnlFxr23KQYSUDNQAq3AOmx%2BtUAwUuJF2%2F9M0O%2FJrGkr%2BLNN%2FYk1LWfq6d9rQ25%2Fy8mm6xVM%2FdyW8w9b2E9iMpBdDYiVCgEbhcTVhvoMbDRoIO%2Fx1gIY59e%2F2mdY2fqpP9xH702NCz7Zh%2BMnUZovXDP0nwcgP78ovlqbjIEMgGZrmrl1XiQtl7nemh1jw3ZEQBKKU0wQw6puDSKuweXvUdal8cuIhV4VdObbmkyzGUYc1fZn7wPj2zFqmruQXuyYVG%2Be2v7yPtRCGUjPlnmp%2BZ5Ev0TLQTUY7s%2BgLJc7PpY2HrqZokRx8raxznf4oYwVYE68Cl8gmgTiXaPqGZXsv5EOHfGKN%2B1dzIz8Q28R74XcfDRoLLrlB9C1ETDU1Hale%2FVwjHHIRmtPHaSgppAHEk7F47rLefRiAhhAJOBNO0Az36SPt4CZTfzZiWp%2BoSbMytAJBI8E51s0uX14rxkEHgb1T6uxygmqmlG7ukI7PVrMF27b%2BRv6ZyplF5NwnLe82FH4MxBVbmm1cK9Zw9tUGjETK2BoXYAJfIVZKcvPgKbNQQvynSqx%2FqND%2B2iOC9kLfoYstgKHe97Wy51m5nLCD4E1Y5Ast5iZtPKZ88x48qEs4oyx7bXkZHuDZB58uFCXcJihT4%2FnAbCsvPhzCPmOHJBjqkAf9tpDba29RBnwATsRSjc673Liv8DpI0qyfigboYRPI8QrxTDsLrmRAYkjMDCfSkr7xqKZ%2FM8BUm8Xv4ju5fv005xbrMqx6BQukO%2BMxgQx4gXjqCUhS%2FmBc1WeIo4XiUO%2F6FCkEVcVwvZvgfr3D0JxMG1%2BmNrY%2FajnUjI%2BYUV%2BOxa76q%2FLuPTx9OZCW1MCeGMYjzlAjgWXcEbfnanx3XRQRDYZOK&X-Amz-Signature=5818f8c49a8b9ef0d871dceb7a0ab72e25c85e9d8fd28ab03799fd031a34c68b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

