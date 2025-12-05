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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUOBOCB5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID60tFlmxRTmuIA1op1C6MEg7fcd8tc3ufwVkPilmAXcAiEA1XpLe19I0QpbqF%2FlTtRnKM5wDVOFf646TAWTSG18Vloq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDIWy6wX7d4pSprx2yyrcA70nTYs5N0qkkLwfCAtOkVVwZXRZ5b4X12mDLyGTSPiYQdF8dYGUJIQtbIARTsp6dC26LFbjbMelfGup%2B2Y8fiXBR%2Fk46Zllnvsefj%2BSNnUjWrzJ2VP7WLySsXV6hRopnt5viD8YedfYiyGpD7FNNECV7rEWJfkJp7cuOmyDlRcyZD9ru0omUaX7HO1kV%2B3IU4ubrnxjvbtZVa41Lym1umi0JmeMutjbcv7QOF4PRVbtkq4mZfsLgHyV2tYXcrUqBZNGJrNPaIBSLnA0DI1%2B2ik8W91KgT22nOd%2FkiRVtkXQ8NiwQ7DY6c6AEQaVrphuoUEuAEbGV8tg7uocqQAJMW95tlcJhGOHDv2SO6Ej7hX0hekDAHWZqolvlLHPEYvXCiaFgJsjh2GqCTuZlMnJk%2BfUKEI0eIX%2BdKIPh%2BCvf5d6ky0mAnTeuQY%2F%2F2Au2wptZ2pYLdjY4JIu4z4Efyp9CCD6eiK1eyTRNF1S%2FBDBq4lT2rFNNUmuQo6HRg9C%2BKIfpQxRdmGpOyZokMDKxilVvWgvHr%2BvjRl%2FtmcvZqwqdZqofJLfvXTyO%2BxtQEIRRi6P9W16uYE67MdcgQwHE25V7G0k%2FG2bHnDiGOn7htUjptC%2FLQ962MDvLrnfcEjzMPn0y8kGOqUBjHwuPTjnbunAJNhZj4uFN69T5mnqfwbZyiKoitJdI%2B1kQBqSgdu6VLIEriH1Au%2BUFmKRPUmmY2t4%2BGoXuLSsUoKYsZ04EbWNmQWk%2FN%2BTzlk3Qu3mSrOUDCenPARJn9ohOYbJngiMFlYxO8Pn1MT%2FlcC0doHrWNjnHzmwBajhbEF%2FOUJ0Xv6QSGfJV9A7Zc%2BCM6DYmQmJxkA4di%2FBJef7aV8AmmAG&X-Amz-Signature=78a3fd3126bee755b710c463d4ca85ecbce2c6ec7e552d941ca2cc6cd72ecce7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

