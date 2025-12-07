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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624GZIAYC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLawOpWJMqtjHaNnkQ9K42F1RzVaQdV8pfkuvA6Nmo6AIgFl1ooJLlpXlEdB6TH3tO8U7087dsYlR2IilEvGTNjvEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRYO6yNjULZI%2B0TZyrcAz85GCiBZrcapOhAAhU7%2Bmi6iwExrioEPjbTszZgAnXMczWHklJvxvYpzd1vdLl6E3jqT5UJhk0BtP10eLkKFqWIoXqprzoNJANuiS2On6ugPjIoEt1PLbKXm%2BdhdsoCfdYm3x9BrvqGy8ZELJFN263KBJJ%2BLQqYbjcAlwxCQkMndceDIXSJXqYV9KbtdzBC1XCq4BNPPRhd1sSQTN%2F5vfdcWc%2B1GQtX4vGDZ8OCqxZaKNm9iKzQ5JyhayYwDlN6E%2FnZIgwOM07UhRdAqmYPNhfj8ZIytEjAlinNKHsjNA9xWvedCXXhXdsAvlqYcjCY8LNSG29Hj4CjbeStTj%2Fs%2BlIDE1wuuO59Mhmj5%2Bjhk9drNXD5P2lQb9T9SIYYVwhKuW7GUrcChUFAlwDEvgz44DGDq7cDqh%2BKpFiGZhx6EuFgcegA13tvSY0OSKv4OjeLVd%2BAMAkzOBY7QXlphwW4kwU%2FuRbTxCSpeB1zVrzonYEhBX8OmKVvzSdJsyibZtsVsE57QdkOeIPCaJzvtLs%2FOfK0dXHhmgU8FjLe0wYxcTwDT6E66KQj4WXGoNcp17a5AGACZk%2FZZIsOs%2FJ3FBPIZVNJlrUF8sYt8OXnoSezUHIVWGfMO%2B4E40mzH%2FNAMMj90skGOqUB4QFCY1ZuT6fB2ZV7pMKRNn3k%2FTSIEShfLjQhUgLSAuShHv0xobCIynssEpiSJl3AlY2n1k4Ea%2FKaR8VL1OLCiSrST9VryMChrX7B3qcfLRytr1Z8lMR5U3zXoHvzA5B0YS32rhAMNo13SW9h%2FMilloku%2FddPbgzKgCX8l6fKtfX%2Bn%2FFdWC550suSX0%2F1ntLDHxgbQ%2B%2BXunVlMtuBZZQroco2Svqg&X-Amz-Signature=7d728b58cec4ee5f6ee4dc0ba8001fb491e3fd6e75ce3171d9cb9e511db05411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

