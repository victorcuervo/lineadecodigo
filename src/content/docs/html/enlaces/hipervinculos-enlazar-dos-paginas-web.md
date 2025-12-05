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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623VNNDHD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH48taQ8KlKFkxgBv95%2BWeWjbNaoMQboCsEFQZlwDjzvAiEA%2BOityNMOv9hOXB5Wo257G9TgC%2BqgZPMgSjb93N5pDJ4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDHpY8ya8GvEyKyzG2CrcA0tfvCIxnHZ54gq%2FFEevensakbxLHNm8hetMQgnfCRbMiNmsr15SujCzr53Z9Up70vekvsQh%2B80zVfHLc1lWgmDDwqpNz3bql2eGR8TL2kEJRVJWAMqqbeFWa0cl056bTTfe8KYBksj4vWlVuQuS5Z5EZc06A8HVHUmU72zxMXkzgiS6JNR8wh6O8t6ahm5FADgBR2Y3ruRaBogBoLRpfbK9fFlp7obhmLv8CjXdSTUnaLWB4Zdf9Ryapqs1K5nAw9zIa8s92hhCx5XeMpvH4a3P%2FGZE%2BdHgENjxe26%2FGkG1SYadFhh0kWkOnRCehYvn8%2Fiy%2Fpa5NyOupsTw7AhraDNF1E42Mup7vsvxwm1SGKzY24VzKuY7dCP%2FOafcMYUYIkg21Crwp0lkKp6Nj59IP8jMApN2R2D5jmleGoDBRUhl7y2MqWK3gwzKArsOU7rIw5IVOX9cwhSa5LLwIkKYXDxX1%2BFL%2F3yT30rspbDx9Y%2BeQAMZsIKb7ODAgvn5EtvntVgr0DGr5ecne7yYOoeNCPb2HWKjBQ6xzNr1SlDuqkk7PzBO23E5PkNnxebP56%2BbsH%2F13kwdiApMnwPZgy2cXRTIVGWO5hCvWYrkoqdy86vMa7H6dC%2B4mZkRoZlLMLuvyckGOqUB5Nl4RVqrV1X%2Bvk5%2BnQSUdL2zlr6nNAwTzNYDL7qjkLIXVn27YC5bN6C66XgeWB8Yu8w8YNPI1%2BnT5JO56SqdQYLuTnLqMWXL2xMognGEuw2TeJYvobx%2BkBn%2B2zqJDt5e%2BQod7tn2iWWnk363J7jm9v5L%2BvlKS0HvSn3Mm%2B8opnVeOCuGBSREnblatm7Z4TsixnFqL9xtZcnQI6ov1k1GsFjeCIbm&X-Amz-Signature=5f9a32083ba3fe618b52b56b0370ce3c4130b8936dc360e8582a5b02e620af5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

