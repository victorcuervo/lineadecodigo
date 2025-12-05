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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z3MVXXH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoHmZkmEk4RtpiO3DlZoOns7dSt9e2YoYvx7ejcDTOdgIgPz1b942MHnhEfmMU9zXYby5r1TNEoUst3ZBm2OqaYPkq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDDGfGRV%2FzBnelo%2BWuCrcA9fS0%2BgcCZuf2LQ0taWc923pT%2Fkmec%2F%2FelH%2FSsbR7hR%2FUZJc3bzjnIgtcQ6EVcbHESHSSGUss2f9UVLO5Oma4BA3KBu%2BcAw9J80e2aflGzM6PvAKB%2FdcpawtEiUfHXvnG%2FMpGacMg2ZsY6KHDvHwN%2BcSKg1l86sqDuNp6ghE8JRy5CVfBP%2BxOhc7nmZByjsN2FjtSVtHrbwd3ufNeX6AKcLfuWgI1LdpJGDdZJQlIpCUYIUbwTlkx6pSKTFz0UppJUyIwyh6puyweOmJzWSp5teY5d68fAWR8YySVYPqVwtxY1az6LuiaheKPCrDcNbf6irMQqvwJ5cwX908pSWhZPc6jBBjCOWw5fV67m6xVpQyW%2FozRm%2FLpMNiheWuksLfk%2BLa0gon7dRyjkan2kHCeBC%2Fq8kPJnqRXRU1KUpJQdgQuHMtLoe8eqLE2adlebgHFu5rXnpdT%2FwHftZyhVSuvhLgjmvQeXKm%2FUhu1YRT9Hk2Hqp4VXvq2epbdQmHBNU3hUfQ%2BsgJxYjM6992jtyVjUqgrjysGKctcjLKETKJxvtSDdoNo0w%2BDvDiCqnaKwa8LJhRLpu8uj1z6rbi7KF55S83BEHfpZEF7SfGcXcTxvpF2pQ6l5BqMmYUQCXZMI3wy8kGOqUBpz8FzffaTZUsGSmGxohcYiyRGdRFP9wJKYjZL%2Fxz%2BdY1yGxJf5aHVgiwuah%2FziKdV1sc3rh1xciyRGsWH7x7ZhX42zI2ZUHJ1bYXx2PVn5Cur8uUs8K%2B9X07Dx96RB%2FmfskeeV5PXfaylBDD7AlDbHpLjGHKPWnn3PnHlVTTqdLnx6G89XY3bnuJbVE1TId02KZ%2BmG5sORpVTCElt712YaH8iLZq&X-Amz-Signature=4e1a7397ba258a14d6fda1027a748cc21d2ec54ebdba614f4047fe650ca84ae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

