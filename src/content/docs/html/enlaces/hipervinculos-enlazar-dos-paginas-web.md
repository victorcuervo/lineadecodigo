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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7FG6TVL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCkd6olecYJP0T8JkcjBoq0EyB1U6X%2FaQsDb3lUhn18AiEAhZ3TsJQ7LTMIoiTxOejhiHHcUVcesuYIaYD2VzztUkkq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDP6EkVzmonWZBa5C4yrcA4TgaqwFun8cTUGEkZ7K7RwP1eXf21w4HPqv41h%2FYKf0TpQXm4wGBplFtctzwG26YRQrpt5CKrW9qgOwEKjo%2FPGcShJS8q0sgRfB15HZn7%2FNm%2BH6UU2puuMCJckkkpKS7AOV8NXd7ubK%2FGfOB%2B2MMiCHn01tzwZCLw2vorEqLiKSbnF4Te2Kw%2F5erPHY8BNVXXAiZB1%2FdHt%2Fjfu7IlRficdq0tM2VAVdu3yC29FJdYxobDYTpbakVf8Qn3Z%2F1it2yhrQ7sAwDKPIrRFfoNoWRHSQUCHbQnMoyjYaL0%2F1pr6wQtgnMIAga5UFKIivN%2BB9l2jVG6Jf7vKHptaieQTIlTfXJzc1pPdtzjhRQdxFGyPbOrEIAzMukOmaf2MeGo4VDOiByq5q2RnqPJt6xw0Y5yKBvWdHbDJKrTOz%2BzEn2edWOu2%2FUVXYsJthmhjFrtyHOvtHB17F1pYI%2Fc%2FovYLQpzUdwlX02YytN142eu8K8dRIrYeRgYQRYkInW3t4C5up485Xgkiv%2BhRhVOM9Fer8t1wrQ5l%2BbY71P876kMQ5fQHPjfI2paP468UtGpz74kKUoVTeZZktz2ynVYWQqcrXr4Hk0fqeKbDfmdXUxjhUjSNz62%2By6BZF9m9144YQMNTezskGOqUB%2Bq0DBcj88WX%2FvhUrGYUlTIqMRzJH2M56Ylwe%2FXGyx%2FRKK5enywdSYrVQnD%2FlHhj4B8gjOMAXehg3fN4uLdspCpu4Sd8b4ke6cvoT%2FNS5BSkMCSA4OFr6cFlRW%2FuDPMiJCyNrby2w5Px6CW4%2BEUS7CqBPbw4HlM%2FX6mXW1nKWU20hm5wa5EnOyXCJFJY5xL8EPPuqsE68zU4V%2Fh42gBMp9N0ykut8&X-Amz-Signature=2fbaef508803641fbbca97b3f37e00c14be91b3f21ee7221fd8a47912304290d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

