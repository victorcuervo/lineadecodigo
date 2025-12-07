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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637DRYITJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T092652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHR4D5rczYa1odyI3Q3PwOe2qZr4QqVj8%2FeRG4CI8VyAiEA%2BNxXf5LS60dR7o6vOnXh22NlqXMmYJz82YSso3b%2FwzkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPn0Bljbtf2dhzuLOCrcAzVhu8Gc6QXc8RX8eqITS3aSx7yoTlhJQ9lTTvj%2B231gqLduBuCE%2F%2BJmMTvY0G%2FbRNh8EQmmY%2Fh2%2Fni5h0UFmhomg%2FAyGjwCy9Hkro%2BtoKZLYAEsszI5FtfpBgOpSArsTuTdruQNdVC92BztvGPbOKsIEyc2DhQIk%2BniC6xb4f8TsddFmuc7Xg7qx5LTZEKpFy4gGMD1TBv5htFQyQTmZhPwIB5emNw0z%2FC%2BQ3JdiVc1vM9C6hkLh0t72y2QYDxEJFUL8fWB8cLZkXNnafRsc6ZUdTjtiuVG7b8WXiCUfETo9y5P0bGT8glv4%2BxHbXZ%2BH0wXAAHwBazSoAyoSAczl9JLJE7lIzT8H3ivzJ2nlDORdEmMdJTV%2F%2BpY9XlKrKSaE1xM%2B0JmtSsbZ%2FvYi8HmMnHgHG16iXxYVA675uh7szekvJ3ZH3I57jAO0Rd%2FVcSFxT7LvB0DSwyCIhg%2FGZpFL90YkfOn%2BnGXN5dlcmzZHlisfjxVmnhkg8Oemw7xSBCgcVqRawVqpAtc7mS%2FqmfhWiWDOr4HmACKEA7%2FuOjRUwS8l5hzNomj6HUBK1b5BxiILW8JUjH1uEgGqYQ1IBOrWjqLE7ckoSmmw9sgEnIO%2F2gkJdSDJ7x4N4wU8MFIMNua1MkGOqUBLFw9CgalpxktVBYxedeDFMGxJF6i1l6fKuWDR9f6879aUhcgjlZINo6KFRuJi1TzM%2FCy7MlyEnRfEmpFxZV4j4n9lTAengwj%2FTdxD0mWCdSpxnX4bJtqkAlYQ768A1CZ6E1nxY57yaQKKgMTTWsZSL7tSrzQGxuMactlfPFNlSsEnFtBx0tZnmEKgNlXcSEbIAoQ3%2FD3GqQGr8kpiVGsq%2BvZ4nUx&X-Amz-Signature=8b750586be5978f9be879d424d822d2db98ce7847074cb3307fe13bb6a3e39ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

