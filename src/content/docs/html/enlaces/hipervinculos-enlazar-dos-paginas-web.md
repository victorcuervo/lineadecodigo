---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI7Y26DY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDtb5QAqsWfFaC3qA%2BtEpVW4qQSx7VaZeBxHrIgGXxXjAIgNPasFA1NKbFU%2FVNYJQuqWOHncvrqEsi8QY0%2BaB3s%2B8Aq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMd%2F0EP3dhkPoHv22CrcAwe8V%2B66HhTZvhL63oGMYjO6LRYMr0Q4FC%2BstS09qDzHeY1y0cvJIkJr%2FSID9UZEYP9IMUZttR2%2FItnnftkehFv8Un9tvprbWhYWQmCBzpVKO%2BH%2BZ%2BU3uUx8SFTKF4opxJdHKiplr9YlaDwDhnYoYzET52a4vzV5RSv3dnd9WDrhe%2FBYikjD7Ur4MyBDWNEkTYF5rsncaskDr63P7CpOkO3bTOyrmRVB6jmKiqg21gDcdBmBm5Iw0EgVZebAqg7LTjCOxv2xrXXdoB98B%2BKSvshuc%2FtNEUr3nCeWrHpiYCT5AiyIOlr4QPDJ8WA9eS0gF6xTl3BywIgxmGPkCH7DSRdjN0PB2%2FvXhkKfdctvU2%2FUYh0S9p0UrgC9OPPTrUxLBQZQEr6UVnqcCttPwLMeC7xOdAYn2jQFBR3jq%2FUAuVYJCEsAntQAeFddNE7tpfNh3L73SeqWm%2F7qaNVnkJVO5VAr8kWJie5k8zmbLbnXjuriWkBBRXs7g3oDJaYUHUlRwBbjo6y6O26dC1ZIrqALABgjFzDb6%2FrUdb76%2FWBxQ42AzBLhL8fC6L4lkUOHEQkRwZwhtCtD33fgOId2TWa4oMDK6cpSp0efVhLbhyGkYrenVtD7l%2BTcAknAZYIpMLWuxMkGOqUBA5PZIHrPYJFlU0%2BhmFKgbUBjAx8TPCV5At4rHTHX7szS6K%2FZiO1aes4tGYQv27gUo2EaRnzuK%2F23HPgId4me8zHm4i0FwC7QBDC0hdGhNT5okqIARlWftxcvHuNJWtnBxZtHMTfWeKi6t6m39Y5gZIuE1UNRDkpbbc8R6fAcZAt7XwXWS2pbTbl9aSyqcGZqS3K%2Fk8ygzRsVbtivcQXpJCgfpvV5&X-Amz-Signature=fa06adc6543d13dcd4d70683915bed79b0c399661b87f97e7637741c7f2e8257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

