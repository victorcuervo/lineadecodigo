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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYAUNBO2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKI1ajbEFKZFdxqD5l8ZmQGy8IrZSsqg8BRWy75fT7%2BwIgSuQ0%2BbeyLfbiKumxEPWznudIZNce9mNpVqPuQJUTPyMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMyStx%2BzlaqMQUeugircAwCZ4NNOTTRCaiMHIFKlnOO6TGQEKQOpOJ1eQZNb1qQMWcgxbQdWv1yhFRnugh%2BLgJnPwtUqSYuk118x%2F5IzM12u9w%2FO%2BOOkjISgMFDFEZAu0CTXBHu7TdVa906C46AboedddUasvVXbAB20N19dRzfLWlh4AvPXMU%2FyQJ%2Btd1PaZLwoeDCCmgNqYXmF1ehgAcxvH1d2NImrkuIlpjopgvMngIvOkY2NdxBkwh5IdqB4TxoGPFkBgubqz4D8TlXogf7N1deGq3viINlzyknAH7lkobkPXpIYF1xe50K882XYbm3VnA%2FlyH4vTLgZxGWLSsv8rinwp6O3hKeCDXzSl%2FOmP13p%2FicVoacko%2BWxxN%2FgRjO7qEktAsG6Tb3eeACqYYQ7U%2FIgfNiLlLk%2BO3Nh2bC17SlGZsUvkUZbEqIyf%2FVyikMBMm8%2BfVhMqCNe1aCmDYBH6%2BbHKB%2Bh9m0uYtiynsJsDh806tu%2FJYvtcxFUwKX5hb6A1EBiQ9ZcGKLFQ5tYEPKVBZ1ZqYwYrtV2DujjbFUMGQjhmHQiox50YBiW%2B3ZVkR8kVrLhn9Q1Qr%2FTVvIyDWsg2J4esPhIct6eHqZYrDY9XEGlttwlxgXcAiQbRQPtWpwCCAGgx4hLl7F4MKHG0ckGOqUB7pK0WOZ829o8bciEj1PxLYKV3rq%2FcEbZfH1C83pr4BNwDzZHQtAOBfKJBGZXpuNCLp7Egp6uwUxNNuCY9g1mJKw%2FM64hRkfz5Pt0aS16UfiWX8m73eP1x03Ykf3ayOFypSUKO91CilHKAvdMCEGzne2o7m78b4M1h5197uYbG3x7VbmxKthjAer05GH1KR5dCuzoiRwiU5jRercbAgZyOq%2BoAexN&X-Amz-Signature=2782230819953f4572a3fb9355ecd003c594cffbd29a03acff676e3c6924b6a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

