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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKEQ65F%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfxcr46%2FLQFxZqmSaAAQMLvy6%2Fm2ZuWkRS0ZeUGssRcAIgLEtFBYD3ZUNs2%2BEgnlqT9P8pB2igaWtrjgx%2BElE%2F6WkqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJocxdpdERiKZEuw2CrcA4m%2FrhUkxaQNi8CN2IGLXFWSowvxKGw9ccC20aPwcdBDfOF1gL7ycpkxrDTPMyKYHTTjscRQNkrS6zd9nPK6poBsAh%2FR0qaV0BucntWtlyT%2FQOWVJcYDmxCNYpaBnyJ01TX2GvDn70C7Biwo6UySKeRyvnh1bmQx0%2FwUzaZmrfqP487WX9Mi5T6NTueEX6gNalLga%2BITHYlXMGzRxXZqDoKw12OMiqtW4Q6CDho21SZIPaumcUe%2FxdM3BBR%2F9n76w8mwJUhm%2Fwfs53hlFALtIa4OtnRZ98Vo%2BzoilN4kQKUAtqU0uWp28TkyrOk0%2BT8rvebq%2Fr4CxXfk7N%2F8Pj29h9Aono%2Bt3%2Fa3D0JQ94gscjEtilCncmrCGRQmh9tfGtK%2B%2FxmzVFWNrznxzzvN1OvKP5sDv31yibStJnkKDV9FmbhsP2rrwfC5h8cbOydypXLMr1g%2FgSX8dElb79nWZf9YbEkL3zO1AxfRjbEs7jiS65aPShZ4kIbzDOOCAyWjWWgtzzuoIirOeo1lWJw4SaMTEjfsjmjW9utxhXTK4fAdqoaAAfYa202H78hAoxGbdogVAclmdyzZWQO2t8x9NX27O6jC%2Fz9rh%2FOIOwkTGxycpR2XJa5oWGYSBOWFgkwvMOzG18kGOqUBRR6OSi%2FrRAJVXnWUblBlPSFFUaROAT6g3Tugja%2BCHmy3CKMr2l6oR7K%2FBc2LfgOiJ%2Bp%2FTxOWqVJiapKH6EqMfTZcVP%2Bdg%2BC0hbHPgj6dyBgPxjXqBDPlYpPgShlvhcJssj%2FxskaeB2WP3pvA7AA0aPIT6ZAX4JhoCyGvqRm3vKSz6xY%2BHDbUyH1gft36OJThtOQOWpgDGD94IIQCbR8%2BwTevOK4k&X-Amz-Signature=2e060d407051b2ef76a93961d08431f2476144a1bb280c7bb2c3ab4d06ddfa85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

