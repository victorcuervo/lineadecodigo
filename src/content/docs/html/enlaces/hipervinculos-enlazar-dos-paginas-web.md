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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFWF5IM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T031100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIySR33fiSjaaUJgHXStywe8JGHdjgkhlcEXMvSlrOvQIhAOLSR7%2FMcaqwRkNbLanyMcpFy28sJc4Owv%2BKxdEdcLIVKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPAwxrqQG3hNB1eEkq3AM9N10w8DwBFZMUFw9evaYu6jwS1ZegVV88%2BL7Lk4dbso%2FWr3hnndA9fs7is00nnOGuvdWMzDJdIJe0Vz5I61ul0boYldyJPdLKqazrTbDcffyiniFb96KP7Xl07Y6btk4FTZNVVDPMWg67k%2B6q4X5lEjTttJPmvDo2kNDcCrWLQxR1IlpdjhsNyOwk8WW4nQM9EIR8cQYCA%2FnCUGSvpXWPvV4g8sTt4Nn7sg7LlxbOh%2FtVij4TCv46o0KjylAFZj19GXX13FkEOJJKNFi19foJiJkne75%2FZJj5ADDJ0NMsJ%2FdeqxL10jABkezyuX%2FR7mTcIgqxFFYXrKpbCJ6s8UfieJOWKL%2FoHjEdyLmJwVKqxYJknDxtUEhkrblJTQinBHG25PhKT1u8ryZvWdVt9lSXKyZ1lKrJ1djZbRum02HE1j3IC%2Byn2qnT1DeSlMqwVT5jMTtpjalvCZGzr3VQDDUJ1A7ZBRq9gAusB2apnmtRoioZfFX36kB7AHM0iTSaeRxprSKbo1wfs54scR9ghPV72Br8Zh9btjdjRezBuXTrdhP1J8fFA8m8Qq4%2BAygOFTOwbyAddazkzfC4IFWz5Tj43kTSKAUrltUnh1%2BBLvBjU8wj2XvywEXNvMnaDTC1%2FdLJBjqkAd%2FoC70xcovjStncL7IrGg620ohe9R8O2qv4OTtFMCS538uhxNe%2Fmw7EKOUGb5ao7PrfnFr7Zu4jX7yno1SgL9KqVqmI%2FCc1hngkphzxhyMZ25Y%2FI%2BTJcBEQRims2SIQ5Lr7RxC285WmQ0P0QjMkjvTSuuiwE3vF2GnLFbNa8J1oT88t0NJpjvBK17%2FzewtkEFfsLT7OUHwUGxfi7Eg7BKPMJjsY&X-Amz-Signature=6adbe7c6b3d54844c45734fc3f4d346a972f0ec378fd4a3135b9f085b93ba78e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

