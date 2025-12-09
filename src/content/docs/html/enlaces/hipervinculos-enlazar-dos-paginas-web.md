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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHK5UONO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T021952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDmduF0is9tqozDHfnzX92SQJuzDbE0APMUZ%2B87vobGAiEAhzKYPBjsb3g22mEYVilhBlIDkWdSP2zbr0X3MwUdrDwqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHii2W6nVXkyXnOhpCrcA5IYm77wmcurnQa4ItS%2FVxkyEtSI%2BcNxwwUo2PhDMmDijI5UGfDHw4pgohtyP8D%2FCfp%2BJCaRWq1JKI9ma%2BsSVumkvk%2FiIdAloPIioRBLFoJshbUoC3nwLJrYLhVgYPWPFYttOoddo1P6ogjCvLo5tO8JvHrU9YTaNBk1GmQFIDuhwtStWHnAwURCj%2BHfegw4Ub4bJUIBTEDeOLUL5mUhCj5iHsHB5TvoVg9QXf60Jw44YSpzgg1bhArvdOUL21IrkhogEpuC2Zj6EDukv2qfvA9IDTFPtMRRtIQQzkijArNQlZ1GOw5MNz6P5tZWgcc8disj6D%2F1f01QrYW0b9nRdrHFTgO1QgM51bx2DbHSeeRG%2Fylf5AwDWow%2FVoNn4lcuEFk0GJVJ0i2FzCPipgM95ZwwbnbDkZkDcdhC0D%2FGzGOf0S4fU%2FuErad1DvNTIaqto8iMYhNoBvB6C5VIzwTfo1N0tBAa7qLLtx%2BlC63flE5B3rrysCvctiuEuVzadoeGZ%2BUDLkqRQFZD7RTw2MEn91cVsYX73hOwV2zQVcFJSsrzGhRilzgH4EQuJwpqMf8u0ZmrZHgOCLRUap%2BBRZkmK0Q9wFi3MWqTymzK9U9bB3G%2B29jIlyE6j9Aom%2FUfMMTp3ckGOqUBlhqaRN1xfbLZM%2FO03jXtHmdrriDZ59PL7EZtlmSANiaKyX7tVNb7VsVzQz8xF337e0bm%2FY3YP8XXdNKqP255U5anE92Kkv6zUlQXe%2B8whDUQoB0SrXgApa0f5YxW5%2B7idHWmb%2Fg9S7an9eaZO2GVw8UVaOjqftua8wsPiJAmPh7FvOlSYvPO2mhDpwb7JMClxG9gtzQ57%2BxwGZbvHN5imwUekPIO&X-Amz-Signature=57ff8c648bec61447f5ca9fe6002bc29de0f838628b1a617a1470964358ace93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

