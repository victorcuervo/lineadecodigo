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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULTU7DJZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1hhI7PzRU%2Bhl3COfD471OjmzGTc5Qxyn6ImHQFL1qxQIgaHThOubuFD1SsmyrLCPz%2BDDL3sHLijD0f0dVZYUpXQ8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAjjml44V2Yt41jHCircA2%2BhTQth%2FGMHmvT9AoLutnUWjdZUbbkmdmHafusahF7k%2FQnL8LK5YVMpSc6xxa5ofaTEU2dj3iouA5wrJGEpHkGBjfry8ElCScXyLmNOUATKIu3dgQmmEru8qflk3LSfGScMvNeq6XFb0k9cLdRc2MEhGptJ3r3FXJAi8UFUq5sFC83nW5zpk9xEEFdiG0ZdNAKfi7Z006MXpZieKJwalxs9NJICCAiCmdtMEXir9G6lxfkBx4ItH%2BxX9dp36b5W4bm1vz%2BhDtDWYJka%2BUVkK0OxWSwMbNzAhzI9z2JvRo8hQ1j%2Fn93R4W09d5EWqjTEcJW5u76dPAAG%2BfpFdEffFOQoqovu9v1qJsc4%2F%2B2AQ3DaZLW198iIUYXyhE%2Fp1DBmkZeSF1ipFoQUAfRmnY3S9M3xMN%2Bel2B2WyNWSWT6XYvq8Pm2H7rCeE24q3w5fQRV08hOuL2nsgEUC35CKz3mmnEWKFmMtza0HtuPnzYGlcap%2FbGGKn1cQiDOqY78JFAIstmdLP2hqzKemkWh%2FdaxjfjNbRszr1uUvZPG84lj10N5xrBLMFdIK%2ButN9a8CQo6DSMKtKyqPreiW4xyaRU%2F7IhS82iu2wFhfeepYoZftyXzmoDmdvtPvNJ7q6XRMIGMyMkGOqUBx2Gh57QwmEt4gT2OUK20yHshnc4SRpCw2lOMBc%2BqBIaQ4xjHSDNmsXIaZABucDl%2FiyxMUM7A9PfCvN%2Bxrg3KNnvRjgxDG1UePUzm6yR3YcaIhFSf5dMHdllbT9kDb2nynbv9C1F17SnLXm9CRx%2B8Nvyz4s%2BFegUM78BhwI0ZG2IcaIwAQrB84FBR%2BPhBjsKP22YPtCR4ueosxHyDDbCjGQVmR1gN&X-Amz-Signature=5772c894bdf0c2e34e6518a787a5f0aa0272ece7ccf85b76dda7c43623bfe81c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

