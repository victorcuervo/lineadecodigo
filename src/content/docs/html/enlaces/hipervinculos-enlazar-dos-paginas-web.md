---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VWFBS54%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCICl59m7BQQPMchabT%2B4az7siEWDsqSBaXpdEoPC7GAvDAiEAuxA48%2Flro78qdmiqQTkcI7VuEPIv5vvVbsknI0Ut1m8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMhbjuglmsnrPcf%2F%2FSrcA8bMF9m5Ov%2BU00zSjz%2BlqSP%2F7sNJ9mpdGFTLH9U1EgaiFlulsk6z8s%2BAfGV%2F8C0rpfyMUxASaNuWU0bmUhuJ3NvOU6z8k587dZhlqjRaCCD7KFltJIVWBRanPx4q9wff7PAAjjRm9Hy1IBy6YXMjABjkLLqJYWvg%2BHQ4jVYVD1KmdgKiDLv2hkCFZYwP%2BPqHdybGSMthnC8SmShj5X70gO6Hc2sfLXlNcMPzjuh8fq1OAGeiR864kLSUit7wn5aIwFaR7%2FPgSlSMdJ75ijIRJtBnZQ1kXAzk6NgB%2FbxENIb5TpaEIQjEWFTDa7TsJaD3MA%2BcP5TRG1S4nzG5fHjXmRWpMJkaXEP%2BN8RpaHhduKQIEkYHGg9A4B8lRSu14cqO7GBRoQx7BKLzYBsSCDiiPpwgfgx9qU5ynz%2Fkvf%2FLsYITptM5nQVWkCTIQ3kSwNQmXq6JH9%2BywpEJS1heJiNQojBtB3%2B1iyRawkweq3HBY5Lg%2F7zs5qKP%2Fo7ZALbkGqLRljmnMheHaf0MlTdFHJIQaiUEUZjeTsaXl1bnJmBRF2ukMcxbsV7rUSV19SLuIWSlJ6xwgrcDMBfZnRllh3Pt3cib6UhWJm%2FDUYJ2ioaaqrEIcqWDseo4JQgT%2Bp11MNy%2BxskGOqUBvHp4UIyvtBgEx4Pt3hC5TfycUNOzOLlA41Z6lVeQdCqidVbSjPs9C1hsA33N1WRAXK4EsMqnzF560f9t%2Foob7cWT0q1aW0fHLApLA%2FUWzfFlrK2oXqGXN37fkebLQe29XtMxHzBGhnQSwK6gTWs9BxR%2FfGDGoif3NV70QnjfKdN87%2Fa6p1Hypv8ZB2lj4bREj%2FPdD26mNqgH0fE5V7HwIgDnD7HZ&X-Amz-Signature=8fe7d08394536b9068566ed5c01f02428d59856f9cedc670509117b56bb4d419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

