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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZBYJ7D6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx2nF9hLQ2G51%2BDbPLcS4I9tNnLK1yprvQlsuGO%2FgGVAIgbrqPW0SUC%2FeQHqPEYYahJFpqwWHl6N3KUljyLFqST4EqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGSW5R%2F9oMX7sgN6UCrcA%2FzazRlaLj0%2FQryOIk3hHfQw2gXfYx9%2BFeGYLjYZcQGjyZWdpj46c92uTUwa84X1Z4%2BEZoYO2MnDFs9UYzoDleubin5Bv3hOwtIX3QY0Q2n9ktGyJ8R4XHUiM6XlJIfMjOojlL0rojj%2FTTnuKkC%2FeyqL1K6%2F8iqRGTXHf6chQSIvCY398QweRJS8a4PIql9%2BVx2aOA5HT9uL2eZQBEMWNCfB9huLdSVuNZgwIdbVCtNa%2Fjf84sG38S4D93zMhNu1iLx6o5rZkXmwXVv3VGyRQS5Ah9lmXtT1h7DcnAkLQaNq4qLppHC8sdPXkKq4UfZaJJrrarLNPOr4KlaVnerPbajREiNojojdXCZ8M%2FC6g78x98LIHpzA0VR7xPXH9%2BiPK6b3vOqNp3UChg55EwhPcV4BX02eN0TrBsk2YRDkJjFu5iKcoYE5tF5a8Qbm8Bn2eFqaJQWPcGyUzwCpebuh3CX00B8uuAryyqik7cOkGN%2BbZQ59rmU76imSck0VIt5P2h0tSNF%2B6%2F7a%2F%2BS3lySVJB5jhollZpEc73pV4XIqXDv6R0b9%2FOf0FprCh4jAVXkWj5i4rAP9IOVJzBsmxhB5HvjCbAb848rOHUW5J8lGk6Y1N%2B%2ByGGdM1rkMdnh2MMXH18kGOqUBs0lnH89oppk8%2Buv6PMMCq59WU999ASvzl%2BoLD2yoENRmSny76uOpHmReU%2BMZLa%2F1FzKhwV53dS%2BgYdWrEMEvKQSsfPr9d50zU3Ix8gXg2oNVbgU2qpP6%2BLNirLmtRelSei6yslJIZJhnm9NsDgVR5%2FFG3SPHRly8EGOx3zEf02Tfj6Mu40yOyg6Zvuy%2FfW%2FIq2c0fqLkE%2BjoVtaa5cTek2L3iElV&X-Amz-Signature=50a5ded947e1be37b7c2b3339f3ae3bb3d2a0ca401db636522cb0e1b6af91c2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

