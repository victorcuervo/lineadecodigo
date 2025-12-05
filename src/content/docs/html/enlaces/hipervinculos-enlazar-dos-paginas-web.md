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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MVUSMXH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1C5%2B%2BB%2FdFhZZaPXgmhuSq3bqu66ks9RVNrVtH%2BcGUcAIgOtfKEU0yky8B11pe23%2BKcf92Sfr5hRGBgkUH3lPpUg4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOkw9o%2Bp7Y5%2FGRlqACrcAwlWDqYZ4hXt9dQWaNsTbB%2F2U5KKARsxK4PEpA1f3OuxCsaeHGOdWlUwM3ohJ1WbZn4LXyrDLIqwL0juFNy%2BQAR0qgInsOjQ9aRwUoprHNUIY1XI07WBci71bZ1ftWXO8AFOySKK%2F3HJhR%2FnFrPkCBP1DncV9rFNXhGh7C0ZGiL6YgVbZO5VWL%2BBjDHZngcU0F%2BW3vH%2BLs4HCMbgtOwH%2BS6S3I1kaoAEWFK8P182F9%2BhT0LQ%2FytUpMWJgi2xBs%2F%2Fay5R9sdqCnYLt9cOHA28%2B42YsH4QEUAyvKb6syW6%2FJRg4OLHPtqQrXw5d0hqJsrbFUejh6BUqA4uqIAx1b6GXkKIfcW9Rnieo7IIpmQwIlEstUJTm%2BQKm6dkoovDbetpx3vDX1lexygDfR6VrjFWp0JufqZJnLoPPn9ljQSiABF3VSB91cAwdy7IMhHcp0CAArDNd3rZkMnk2%2BMggBTYe5%2BINnBFW6J%2FNaK8l24noYDn%2FUyKxU8g5Rv5AnXW7xf59e29UFy5hIR32BAMBdLdkW0jkwLgcjJ6rI64m9cfQFE31VTSBNjgkCdI1j8jVklGW0ZWOU%2FCRdN%2BxHQv%2FI3GgRdO5%2FDj17%2BVWIJRJ91d%2FPmwrbFIe1GgIph1Hm6JMJf4y8kGOqUB34XM7SXYc6v0gPA0cotHpqFgjyrvL%2BAcbqmAnompFXnO1KYu0QBja7kIODLrkcePXQDBN%2FBZS7wjcGoXJvshnv4hbV1vedcC1SdWqxRE5FStHPH015EBXFz9D2E%2F7FUrIj82u3MaIqJFv6UGmGUE5ECrQzj2NfKVuGYe5TBbjpF%2Fjq90MM%2F93rxvo%2BZ1m%2FU%2Ba%2FSwObfD5HjbSn%2BkF0LtrNv7KfHg&X-Amz-Signature=784adaf036b6089b6154aabf27b445e24c00678618750b1b1c1310e0cf62eaef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

