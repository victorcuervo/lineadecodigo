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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTP5K5QZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDlGgj%2FKJH0jVoswN7EoTCq5znVOPglpoumIjUYOW0zAiEAhYdckJ6Y2R4JHV45AobmT0vZfDZrvvzDf8bBYPpbnHcq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDHVslhJZ0ktSaCrYqircA0g1A1SasOOYqpQQ6wywDrVCvnfZzYdEMv77Q0t9Vc6j7%2FBvwreBDXn3tfejwJ8QNK7etcKk251IZvDTgtFyZ2CxioHhTaVzXZ5zO4HO5ONmpg71fwe0JJ0dg%2BOLBAFtok3%2BNKRTQPc6a5EuL2hDJcxT4g%2BiP2w0iO29tMFY%2FwdjBbLZORZAO2mBu7ALt8UmHktkGRjPaWVNoR8O28LYb9yNfqzAHPLFz%2BXRW9QzETpVFDV8MMio1HdhWSMP90un7KiOzvfabnf5xpJvHkejzADIrA5MHMTsCA1emtYzAKFiMYwtwivMSSfrSAM03hQGJyGROXmL%2FBNckwR6wqQYKl1douWMgmf0Ra7rfHMMiuMrL0XYQ0YWJdvZH6R%2Flp1h2NXI%2BNYSSGDKE1DVQtmeF925M8UTkxuBdYfPeVgtm2Oyk6Ktdb6A5I0ijmByRN%2BO7m16E7P0Tirc1qiOpboz7HpYVt2kwammVJvd13wHqjlzLU9ciuUSE2PKrx2B3TRSzZkIeh66nCDgXoip%2Bu2jpb9ise6pvu6uQQMfvhciLLA9mSuBVj0q0QpjcQ8hQNLqefeoAuDZdiDbsjF%2FDGmKcu5QoJ2GaEqZNWFbyJF1frtynnxPc5DceJ%2FNZvxYMI6yyckGOqUBaazPn0S3FeyQlC2OyHGG635tL4k1pZCock5W9hCRYVQbjoi9UoVawHyMb2KDZ3L%2FkAgvg%2FOilaNPsozSMqHlWWBGJin4BkkqmlYtQszGlHD5c%2BeFTWO1dyooajdy24JQClFUy4uLRABuVBW4jcFzswvPRiX19cPT7pkEctA6Ad2y8Zqla%2BmSNsv7fJ9rizLvr58CCrWKepz4VZaTMBj9gNfrjDu7&X-Amz-Signature=02c67bc413cbb27a780ca87b836dc37385553a19080c2d67d07e0bf5cfb69751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

