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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2J4J6BJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCqWXBBgKsjIPZIrfvHkyySBnvgxOF0np4y4LbbZFoaRQIgX%2FTwexaTBmRVBj%2FU5ZIAgo%2BkVQH%2Fvw%2FNkrt9XOYHligq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMr6NMekP1mYQmdrESrcA72uBZX60VLXWmlL02P8oWvXkQwiCj8LlGjZpWAVBWOaY%2BcY%2BBZP6myB12zLTi1LvcHSSH7ntrtvUFGbr1v13HlgBoRB%2FmLmP3nRUwgn1U%2BB4aJ5Tmm%2FlRq0dD%2FwLH7MldCaG5X4K834XzkzdrBeRuqWcEDBlbUusC3tmihP%2BE4k6SqlhUGSasbspKWrddh9UywU9YsO1l2UDTSDj3tdtUGLNOzFBqcvcbVw4kVe%2FIMVjQlZjaCqHOaR2xtJtwodq1FuAwMkrYleRNfDgAZzEMOCrovYvmiu0rbP7Ar4zbpAuI%2B6PCU6smcSWQxTdPB%2FTIKIq7fdV8uBgt5gmqhlbrKlYXcCT9DnXB1Z9WzZ2ji40D7cZ65Kf4DHprgc0b2rreyYGs%2FZ%2FTvJ8fHz%2BRUhGh9LE9dwnJAVIM6unYrMKglzmr3PzZqRXbOLGiFUe2bUESKCty0%2FufFUf8r8sTJi2plvIaDkIHLSKACHrf%2FPKdU0W2ZZ8BBJk0nc%2BmYnCyo%2FoO8ja4bZ8pEbv6dRG3EVTNKw3V6rqrGNdsF1699YzrSKJ3ylCliW7rhAJ0UkVVmzt8k5RU3HWknaAT1GltdaZezpynTva59n4s3wkoZlY0U6xNIILer9EygcUMXYMK6%2FxskGOqUBMWylU0VwJs5m82D65wdB4gxLBIVcicOVqCtxB5%2B0priy6vOOYt5XnAtJh6U5QvXnLogwD2qDzKC%2Bptt5C%2FK3h65W%2BKekNtfnef2ZX46kzRKWPvFbMRRK5g3yvwpMfsw%2F9hYhUxztazmt261%2FjIT9vLCrnV8Ts0nMD8ZJs4K%2BLViK1WjwiFIcpnAeJUyELwEPUMcd3vaavEjjo1iS8cN3GAvmstW3&X-Amz-Signature=f6a52789e02714e638fe225a9fd49d37b223bd287070362359d69a948a541ef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

