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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHQ6RYKW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T093048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Tdw0PBWx1swBrTpv%2BI51tWE4krHyDaUJu0uS8QKx1wIhAM2CaDQzc79S%2F76Br1aGJzdwCy3MAlgAF3wB3Nyaw32wKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycQBqnv5PFf4%2FyAxgq3AMxywVB2L6aI%2BdT%2F0Ysdqhov7uXgUpkxK7f4r9m4MT8S%2BxAPoVhwZ1NIdHeNVbporISuRVknVdRj1UN%2FadJkMA6cO4h3d7QQslBDR3uYcVOnsURjNlTydBNAaSR4VVeoOMvD%2BWpfuZ%2BMmZUBCcglCgbfZAcUy42EmezK2YjXNi26Hd6CbRNOE8vnGytmLMnI3oKkmWz144QJOf1Lv2eUCs1T0MYkQkCVkrtYKwam9x%2BJ1EZYoenscZI8NCv3t16NlvDBLnz0CukiF8b%2B7V0oBTrRh36K%2BuVBZj57x1oxJU5sHFoarWRaKptsdu44%2FJRzMiYqD65bCi401TaAMqaZZAqA6jegwyHuevteTXfXOELLnrU4hnAmXi4aPT9U%2FGPWYNTWMc3DZbOhBfbFxV7njOVbNa7hXZDl%2FantBWfTNo0mtN4%2FLygL4%2BfEUjGXJUGPSAqBjfox7h%2BUJTUPoIe7qe1EiPKYHhfJn1ja8ctE1Hr8xKrXs%2FVw3LzOxx6NJVPYtcplULFbMHCZ7y46VJ0Zslc4woF2MIYTKEjs8Nr4EMPPE4Hzsd5ZXsrNYTHfiPbAM7N2ZcS043uadpdIghn0QcjWbydZag%2Fzb1fjlanQZoBtvfCNKMbQJxbHfJISjDjmtTJBjqkARH3BU6oHtMcz3OtOAz4jy4ljLG1qJgqmWnYUaHzBDgS%2Fs2GNwvTc8x%2BX0J4zKK7OAYtH6m3fQBYC4Ele7a5TmNKK10CySbwswkk1C7vpM%2B6HI2xmj7Imno5WxIdTGavOX1%2FelrnMDf0yvvZvjp3UH5OBPTiCSKnKqpPYq9%2F99xfZWR4JpuiSGVqbgwgthFTd1Ysf6Uk8ZyoLREIJ5m%2FdGDjv%2FAx&X-Amz-Signature=658127f62daa72d4501a8c46258be6e766bbf8b68af658f5fd405d428721af76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

