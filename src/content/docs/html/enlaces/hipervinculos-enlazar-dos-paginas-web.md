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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSE3SNPF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiPsMWGPos253hjco6RiwpOR5pPf9EDZzKKWW1fcVzEwIhAMMtQ5U85rsm18MsPwx7A0jVK%2BkpzPyFvKsmvcLe04JHKv8DCHoQABoMNjM3NDIzMTgzODA1Igz8k2WQS%2FBxH0CfTt8q3AO66vJYz2%2FZjx6djX7%2FrmiyCQRbGcqYfPk1J5IvR6BH2fFH839XfoTgEbTueT3VYA5%2F8Yw6CJQV%2F3FCYxiKlSviOqcBdeBYj%2FzNO3XQzcpaNtfLfyBibq%2B6SBViYmbekGVXxaBHEggjJu9%2FAkU6%2B1%2Bk%2FE5aNWrJabj8kvODq1437OYpVHCooZ36aTaenDxsnUx5dO87texTIxfk2y4ed8Px%2Bq2yYqd2cWG9w1WNLCxOddx8ozPIAoM9JX%2BkTzkSHSDzQei2OD2DMSLrA1FxiVBEJP12hTfFoqlvFjFyJaZYwFN%2F2cO6NKsIlp2thxNMtoHPv5ThzD7kIhIHHu8CX2yKipEcxawz0kWH9FqoxiHdylDI3uE9yQN7srfheHRT%2FXpD7iMb8p%2BGs5wQ35HHNH%2BPs8wK5gdFo4%2BrW48s6DcyppCNJADrmSFM4f5wDRv4xssEcE4guxeAihTcpYYfl6ISszd6rEVNVV%2BOsq1wWwGaH6%2FEccomjn7Q8Yrk8AJOMgDvbq%2B5gp6nCqBIEqogWjzqWGwNe9XHk8IFU8YAqRTbMtRgqdEGwb0V%2Bq1MqY49o%2B8eLmHa92CFyYFLroKxQbimnNruZimkcX%2FhRYlzwX5mNfqVlPZzg%2FDDWZ27UDCTwtHJBjqkAXZ5oOI%2FYdsgQ5tWNnYtzy8igHTzVxS6DwaZrnhjUEgA5%2Fnq7bvwFfBl1W9UhKPGlWENFDgM1tY7u40%2B%2FE6oN%2F5ndKhjaanac%2Bf1TRpQySyqEh9sk0%2Bkp9RA3pRDUhf7GVBg9QTfDSNP4KywTDXCpscr4gQGJavDJiDvU7FZVSO1Cqdfpm4Y7G7SPg99d18qMnL%2Fcaw99J9YhP6WgRoeJgv9t%2BKo&X-Amz-Signature=94470e40b60583c13e2f583c4c023bff1b30ced22deda3e3326c76ee47e69da5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

