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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7FWFC24%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArl0YVccaRzafBiCUKAId0YwVHXM6OZABlupij4q1WZAiEAuwqBJoYkK8ieqIjLq4tzlPdQIKaIL0xBJ4pbHpqsJcYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhQhdDu%2FvnOGvuGvyrcA9wDRu1d5Ehl2g8ELhqc2m2npfSFiRSG4DZO0Ifl3EPk55ZpjVrCDRSq9muiWs2SZCc%2B%2FTOw5zQNJeT4BcgidYq02I%2FAgnlC%2F%2BSc3W5T4d1UYh8SOHa9NTFqWuhIJUTao2dVYEThjpxUxl6K5r6%2B3n8sJNHZqRXnsNb7ZC3ndF1ts%2BQTLiWjRUSMB9gmY9HOQYupWxFR9MEiCNv0kFuDaFNpOHg44rNoVQ40yK5SMJlUo4CD9yP0Q%2FKXh7%2BebC6FIh76PiBU6XaD697ixTpHHnIoaY6QSJW9vaFnDNrBhiMbbiIWwe3XTaQQCE95WSpAg2plCmlgNFkmkKWYcUtqHn7veUxuW76i8rCsmcaJwU9O%2FJNP8Po8zgwRgqd%2BKQn6mGc7Ztyc7gXXgIwLxG6PYvi0W8BUFlGTOffTs6BU2KMtA3Mt%2F%2F1NINjPY21Ggvczhcz%2B5hhaax%2FkA%2F6UToe%2B2vwDaTcKaM%2FAzAgkPpCe%2B0bgEQjD6yxIJeF0UeAOZ1t44kgJmY4bViBF8mYaCUH9%2Bhl9U2Cex8kmosBGukmq3ggm8GPiTVO1Eo%2F%2FoU9G0stDgP%2BFnjsxmUIUOh9jPonRMKq4LE8Rf7NGVFwFPS62LyPmePqs%2BAWIVJA73WA4MN%2F90skGOqUBgFZgNSTxiKuC1xRFrsmuNYnaF0Mwgm0%2FZPCwlsZwVhw3CZTJqTCo%2BRA5dROvhEsJfOHQzn0Bm4hnXDYKwHtsDD79HV0SHde7fx1pDpgd7HCZfE5SHqcOJ3rK3gv16%2BKpQ2Uu6MYmitKbgeeQtmaphVp4MNgYuVQzl2I8c9CXIybzFSRZT7aHl0VG7mEL6zWwXzP2CBjiKBsGNzgN%2BDVDVWomlWUa&X-Amz-Signature=f672eba8e72a0d8dce300e72e5beb89a8829d359f05c7f7ff0da9da1436572a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

