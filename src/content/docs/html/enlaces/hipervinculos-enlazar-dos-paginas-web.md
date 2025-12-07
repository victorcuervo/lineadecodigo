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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOHOC3CP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5A1t5vUD3r5F3kIvq0aRvQ6sF%2Bfdmp17KP1vGCoFc1AiEAweql4aou4YDnJ36dbPyTVHBM3yGCzVhoy1LQ%2Bgc3alAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqFZmVYLZxsTh9dCircA7BxBRRKA01HOq6GohxJR4DGGcPN3DxZcJFTRK8oa0JQvBL8xJc2NDzuChCjtVqVFd7ZyPzOIXuuLBsV5p6tCdGLt1s3CsoHYMwh7QXHLMnvTzsOj0gtpcXIiwuXyK%2B6NGk2dNLy5z04fdiFhN%2FBRDh23hUgpP%2BK1mdHLB1BMHRppL28L6xC1lfg6Rlykm%2Bis%2FQ%2F1ovnZ8QmUNATaahAphRuX1A1gx1S%2Bc5oElCbRAiFoXGL68jmYKWwV8RPlZhlMkKArllsYwFKGZrqRScxyKfzPH4cljtk5CxzuXowtVrI7wezmf8MYIXujQ%2FHZiqwnqFfFQ1MxlPnV%2BX%2FCJqkAi11aTh2MhArY%2BR%2Fpak7JKTS3aS6nRVNVahHdNAJbdJCT3hW9phfchYz1UGCBRPFovC6ESQ5DyJiLe9JgJxPDpNSDHqGdaWAUVcN7wg%2FnBu%2B3YtdfXY4gQlkeUAUngdgg6VatDoNRFoBp0MojB%2BKHOU6mSohJXHZdBnr3L0197qi9HgBL9m%2BS4V7pGxqZQjprPUXgsnvUBOMH2tGgExsqCgPp0hKbItx5AjdH08b8SwVeRGO19x1q85A1OjVpYoQYQlydo1ZCcZJWeIji%2BCQLZfgNnHwjkJ4xMO6piKRMLD%2B0skGOqUBU0MfCbRWiW83vEhxR7xjvpFdRtx8Q%2B8qTexYSg6T%2FUTQizX6cU2UYZkD4ZAVHR7CoWQeVzbFgXMH0Os%2BlYnCzPb9zYOPtBsgeHYWhCvQ7rDFAMyLVcVDQb7%2FOOnqP18WeWf9JmsSR5EAf8dY1iC%2BUWGJMZJZQn9945LPJegRThKjNWCiUDoyPdYRCCECnoANlWhYGZLijxgQSwUKv9AArSHmp%2BRX&X-Amz-Signature=1c8ed0f6eaa2e74623f82ffd4b51f545a1b3c9f1bf730b259ca8f8c0b32aaeb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

