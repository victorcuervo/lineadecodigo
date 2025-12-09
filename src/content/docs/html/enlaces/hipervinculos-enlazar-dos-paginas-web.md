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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJMOMYRR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T163352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIOlJKG8%2B2T%2Btpj%2Fo6U7m88c1LKb%2B2SZFamGZ%2B4g06TAiEAsN1DRlezfWZHLga9gpQJjPo5XeCxH3mi4hhSUdQqAx8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgtqepJkPBbkIP%2FryrcA4W%2Bu4g1XCVied41%2FxBGBosDnAyXgsw8tAD9yP%2Ft3f92ZxnTUG%2FOCAHaz9UNamFpT2VdmPrM8iS6CJf%2FY5zkputdARcMijv61EvjPVMm3pcBLXYQsLQLUxRRToFtMG%2FBr9WspbIYHpJbaM6Fnr6UOsSCafn00SReo9fEF1q56xknI51r4D%2Fp4Rg7XbznMq42AcK3M2KUMRO7EDujme1glJihIzjgkeYwHrUyu7y911OPoNOwnLCFrYbwI5SouFvBzkxdj646aH0u7xU%2B1yYhLN%2F%2BsA6OaEkLdtb%2FUhcb98q61dqTpD41J%2BTeNwr01NqHP6ACSB6%2B5AlGhbKcdR2sc6c3gUPZe1lz3iIlca8dCs1%2F2vx74L9AKREyEch2APhzZIPfkpKelAn2sWrm6BtYTbdEqcq%2FB6sJMEDhsLZXy0RexIDqyNM5LbWxXryagK4UMGANghfduDQA7Sw3ceTC%2B6D%2FHRwAueUs%2FhgOf2o4o0%2FR02JW6ng7GB2IDOk0rG0DBjvJcroJsPR93tmZ3x4rLivjBtIJNpTHSrc0UVX9wmluEmpuMTfwitWpXTzS7HKe2hQzTL5JY0W8NgUAXWLacfaw%2BCgj6W8CPMGlzvfb6uVpA1I8gQSGdxvt0u2lMLKZ4ckGOqUBxUwCv2wC4e3f8RVOrTxKpg8C%2BPR142L5l4E8KkPpJLoK6pMilU0Z2Ke3smsCM3AhM1xDFoN%2FCrCZXuOsv%2FF6cjVHXC2l2XOeQ4RaJaAW4NRzG3qsPpGQmRE0z8wycmSwooVKBUfh6Y2psMGQQv7sqlpMFGefdiGJsLjIKxvAlNqxGvkk20V%2Fa4kwG%2BoHjAF8FFgjfjtPJ5TWR0YSPyZI4MqctVWt&X-Amz-Signature=20b1c79495e0f663199bc4716f6555e150e9b754106a6bf9ed242599130f9d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

