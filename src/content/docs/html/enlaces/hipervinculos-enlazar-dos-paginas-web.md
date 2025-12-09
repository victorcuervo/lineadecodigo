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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TJJ65YM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T162517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRXiYdByb%2BlCXK1foXKhiN8UuBq8tC17Adz0w9dogyWwIgL6Zvkfl1IefqrupPVa0sLAJAzsayTp4gWm2PU4Hjd%2F8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkpqP5cbEupeuG0DircA1w19jutuUSWSJT3t6OVAQz1KzWaJeZ8bHsuDD0FEXZV2aqo0Ium%2BNlYL9Vac8%2FctEIuxt92ujOpHFvIPTA0pUmivq2vixBzuedY%2F5U09RvST7Yk37NhJhQNgOZ5wsplasewfwe%2FtGHHApO9BdjESSxMj3EUGo4cdQB8QfApeltPyNCOiVNozD5Dto2qO%2BNO2NoGex1X9kRbx1pp1miL1sxw6y%2FbB%2B9jurczVVKbrKeCsvCaLYkPyzqSf9OVrBsfD%2B%2F3yGKy4cUYzKVIP2KNhEc%2Fzt4YloFErSP3UHuH4I%2BjryD7RKNUSdQYegRA%2Fa5s328UGNWpL5t%2BwjBwvoXhVc3IPMJVaO7FyB8XZsv1%2BDYtU%2BQbOUlvFkpBGttWkYZr1tIVZEzHosn4KqYz3vIfozI46Lvd9BJuy%2FFF5AyAgjp8Y%2FO51VyEzQnNfzPe9pR2jMCETjLilJKeGvXGCuig8UZeZ9nF9YSKGNZjHSCz4RmDFgdYrCmvOvkEqQmmrw76aJP5d6pn4cYe36K7qAeVoSV%2BhxrWTThjgZt6ZaM1MeUlmZrbPPbRMDdf92lzhuTxoqIS5PCtAdmW%2F7tHLMC4VcjKG6Z2yob7w4fle2zMjhQl7tuWzLICGGzW8QS1MI2Y4ckGOqUBiyGixNyWYaqWK7GZlwXsGmkPw5ICtFvrX9mIUScGZV94pjrDYrzEiCV2ELZqYtTBjZnyWV5kLiFP5PxrSJcHOMJh9hg98T7elvtg5KI%2FBm9DE%2Bm9abn1AlF9laJbqaWRdYJ7tILbc7cZl8lBaGF1bsMlfD0b3MFx%2FMUqM4oyyvwGm7L8kH0gF9nHy%2BM20vsuRrQ0x0TgvfydQTj7zzZdLbsU7gFq&X-Amz-Signature=ac60e449b8ea8f0fa7db1c1427ef85dbe4a42ddcd42298e366681a98eba8b266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

