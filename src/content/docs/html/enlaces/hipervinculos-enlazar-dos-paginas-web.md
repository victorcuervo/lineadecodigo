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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOX5Z3R4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T174045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmFjE2B%2BYhHEdFkq3K4ShXsu1h8%2BwevqhWnyrkxcOBQAIgX8fpyS%2FkLRzXESWHClMOls8xcXiZUsn53aQfG6ZhyYsqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlMAXcyo7JZghSNlCrcA%2FGNqznqGGwPxSJsDWhNiWMbkfgWZ3O%2FDVdKulfynyTPOdVj6h5MXg3CF6wRLmhWi9WlTSO1IIDM%2FlE1BSA6UKnZUj1T2PIZLORHKOMmk5mdV4GCGFVF1q2pOI%2B6alzd%2FHSvlBNxkt7hqLknv1q0BLxZLLlKmBBbA5f17k9jd2gXci%2BNNYmfpkmdaZ8rbBJ4VCI92CF6Pi8dye2vi%2FJ43Z9NQSsVzYeqAUrSqF4nlTO8aqdmedbRBjRqQNZKj7MfeKDTJvLahqXx7vqR61AQMGl6lCM7W0KVFur0D1QjeqatvuvPXm%2F6yOUa9uFWdBTGjTtcc61sHnBRex15Qckpb7R8MjuUSyCEYnlUM5c3MhqwQgeVoc3u7BOqcn6CD0kZqkZTQAKQjj36robOs119nUYO2v9Fwgz%2BmCGShF7EAF6E16uMY836NXTi%2Fzo5xSmb0zYRtZVTDHXt85CPeQPdQIeJ%2BF1xeVf%2Bx6am23YD9kdfFXcAWe5NF2VonJY3xA531klznqnNbQRq8OjfbflpAnfscWCQxODq17cBvYPQD21Y%2Bljnka%2F2Vwp261gf%2BJxfp1FTs5ngDeA421dEVk3IQr7GfCOahlrdtnO4Psxmeei1JjRQ2xJxyAt9LUmqMP284ckGOqUBgPlgPVwhRK%2BZxkP6TLkm6S4R2IohUmHyXwP2B6%2F9GoGh0WSuhre7wdIBnAJw%2FRGGs%2BwsxzPHSSgdWlMWTo5RCpcowXVTTgRG%2Bqh6z7p%2BNJ%2FqZg3qNVJU7SXJ7F37pZD4EuzzqymRtAupB95SwkW5xee1pe3pcMMbd8y3LGhp%2Bud9A7XB7us0OMd%2BHd3p10zOHQ5ubyQrXAEH4EJd32kOr%2FQ%2B4MqQ&X-Amz-Signature=49252b1b3dd3bf7ad7ac9c6242fcc01e7f08a685fb0f3f4d06bc7d21bf3a5114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

