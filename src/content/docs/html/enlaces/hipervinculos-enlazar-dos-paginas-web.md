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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLKDLOYA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhgPekEoWPfqY9J28HQvODmaUS19gC4L%2FgEiumyKPA1AiEApGCJvjB3NEIYiooz1hF%2Bf5qBA2OBtBFTxWBzu%2F4%2FRzQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2NbdTz1L4ssRcRVyrcA%2Fc29C8t5mTLiuSj%2BJcJTvY3edZ1VExvLEwMIIbXrFdvHPMW7ySpXePlZZfrejgvvrI6yk6q%2Fa4XlTpqd0CbDUJTk9FzVE0kF%2Bs%2F3V51Xxj6OP4wjwwgDQ0hNaUrLfv1fx67NkGpNsLW%2BCSLzHRM%2BBUFGoapAuQvEcaZeM7DQi7lJhGuzZ8LhQxUEpDqsUXaSPli68V6BnSdF8Fv5zw4vegwSa5t7VpBcD4hjSs4%2Fx1c3motDzFnrOkhgN%2Bf4MClv7p876Z4ExqcrjO8xqzxD0KLPCmMwbxhTZZLHoNBz9ewH4AFBWJ6vFAcRvT%2BVGSSgdSUTPIZ7IHEC5914BPEmZyftoOZ3OYj1FFyi857PGpTFDctIF5zJhcxVMD08UUI4G9Y7vtUXLefFqkQHUZCwCP%2BifuenRHnm6japdiCJQibp4aU4w9eCFOI91pWD%2BF57kynl5DrcYwaQYR%2BEFQ4jn0KeIy7RcjR%2BhpM%2F1FodiHo2BLGRR1zEf60RJp0XQwmxwmj4I6fvVQMSAzE8e%2BXbaKC3mhteTLuchKLkhsxf1ZzdYhbXsKj%2F0LToS%2BcXBiIinDnrR2reIg9%2BDLFX%2BHQ9DAGdm16K24HgyLTP%2B5Sw4yjyO8vrAlRlCVXICWPMNih2MkGOqUB9n1qbgivBmC9%2FQXyDWbrrFykNWWz4en%2FhNQOTWBLqvPjez5EqgXyOqaB4oxhi92U6MzPfwvOcuV4BDN0Cophj05ivoXjQ4PCYxuLsgZFOC%2FGmj0ziHjUIF8Zr5eFxZBTO2zkUdA7DnSG%2BlFRFMNjLGj6iknKA4dshkjOJTEH0zAoMaqw%2B6dVY90i9T%2FE3AqvDiLkhHEiKv2CrBkaSA9xaxoNbb3F&X-Amz-Signature=bf2528ea6644df67c9a7505d313d7acdedd4efc106d9ad7ea98db3a9f6e93a73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

