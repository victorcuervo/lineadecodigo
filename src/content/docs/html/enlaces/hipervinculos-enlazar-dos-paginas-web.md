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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T47N2U3Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T115133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOgRxo67jkn9KUFkIJ0%2B5%2FZw8cuh1Cf3WnUXFT4StmmQIhALtvUHkYa3tNnPrA5ORwUqN7TUBpcC323hA%2FgzywWmodKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BqtsSOLhmoSr%2BZ1Yq3ANbB9RLx2NmiyAgxCuXIBgZ5Cn5Gze0RIR6Dd4LEHZZqDomCsUTMAC7oxcYUJzB8ntN%2BHGUakJ%2FERuwf631AXLzqfhMjmu5VCtj%2BhqPE2Ku9jfyFDh8qrlfQq8lOxkJOocqE30TsjiZWAo0Fo9l0idqAa7pGwIBuD%2B5eqneafHEcDYQbC04CKgd2x47%2FNyl34r0m1sMEb1eYes%2FSHLtgaaLboV2Jvoes2bq4vz%2FFtHmXlwCFa9U2zMOVErRKeVuvNar3GneNv0hffK1xWF4nFYLFdodIfiywccuaoPVDAtvOcGC9%2FjR36mQ%2By4dmsOqE%2Flmb8hbykeuvcW1nebpmTSCavYL44M7G38r0R9VKni9tWJjc9JSxPGK%2Bf9SY4LoU4wKnoXP8LQI5RUArPd7Q3psmlhiIemuHre9wUi2cTrai%2FZeHS5VWbmXCNpUSo6ehQetP%2FNmf4lS1P470TeqU3g01SfLXgetGG5mdWXN82dVZhJxBSKzRrvBIaSZjnnbHnp1GOhqpiy3eui4UQNrnWsMMxMDdmR5PWrciboai5DQl8scQZwI7nl%2FC%2FJmTmPRvF6hdq4LSfkwACtl8Sen6z5JmhNRwPDSRD1HYvpJqNS8Hg7KyTaqV%2Botsq3krzCLmtXJBjqkAaR0mjYDC8gIvaQQaVVADDf7s1Fan%2FOnn9%2FhCJ1Oe6U8zns4FtiDwGhxT%2BKDEbI1IMgDznx9yupBdK4GdhdsNB9UsuIHk5ObpM6S%2BFo6WTM8jKfszYrkfstpUhCAPCfDbkDF30Myx%2FPvlYFiQohRrUDrRHxfhDbCLDtXCe3LjTfp6kizkc8l521xL%2Bov2T0U9C9ZGfjvxExRVDKmPt39A3jH5tO8&X-Amz-Signature=8d26e61e6ef83eba84928545034b70c3b2cbd7982787185169391ff1347ed5f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

