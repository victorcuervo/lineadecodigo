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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T65HGFYG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtLjqugfP3ymUOIRriN%2BpH4yzV4Gf4t9Dhh7TI03TiGgIgOxDfIUpmPY8nolWtmryVK71D9oiczZqMre4it2ciqcYq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDIJ2kcv13JmuSkod5ircA2sXTfrHZIWIFn56ApTJgvAH1irsw5asz3F4StuW%2BjaFJa3AXRD1S3ZQ5s6H5v7TigvmrCn10n6YcabKvUY34C6QaTq4rSx8C6M9jP37mMerQ3cRg1SfMp9wfYnaGJZghS80BNKGTdwA2%2ByYHGHdjfuBiJ3QMkv1u4n8Lgg7cqLHeBMULocA0CQZ5jSsvGsmSbflMeLYCdC3LLxMtk1dSDxvj6FL2zlvqced3b67dVhJpB59ncIwdH%2BlOu%2BPQkUiGDfjU8Zu5MeZ0Xr3gv1kHZnHlRkuPoNo8fRK%2FxfKtNOivLNKF%2B65Zv5Shtb%2B%2B9tAKPvTrvVK0R9ckg3f58oX5LR491%2BdWo4tQ13UkaGohpwu1mR5nW%2FSWE8CBkh3HgY7wY3QrX5L%2BxHW55vzg%2FfxAzRtnCRz%2FvJt2XfzVpzC51FXSUFiq6GkFmd7%2FbWaKbGC2iNJh3Smtpy6DGHjOyGn7XKgdc1EFRzFi%2BOPWFOzatJBQ%2FtXqy80gaDlRTL9gXxe6LmaUS7IPA76k4Brx6M%2BfNIJwLzL1ftghvQ377gjD%2BtWdx3TeBX2E1i%2BYX754oqZMc3Y6ybAQXFxzcfi%2FSh5AxO6VLPaBfjUrOpXwkvAujXWw%2BKXjV4xveTfwgHmMMrky8kGOqUB1sV7SbNfybquhOCmCW%2F0Nc5%2FPv6L8TODJmnLxuOuUNbAbiFhw6%2FKmrvx5cJOyC6BgUpP1O8OGB8AdkMucp80IlXlxsyrKEx5VgN6mmz477Gea%2BdX87RTY3GbOC1uHziPxPvWQ6E25m3IqsFQHqHBZzjxt09kQYxxqNRVYxnBcI2wzX9PphqjLnpRAMOpxmr8DrU8TwXjdf1rEbOP4yTUYzrbqb0n&X-Amz-Signature=63e1c9a4fe7753bbcc3c448833b046f6c3e39c7a91bc71598ecebb9e360a5f38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

