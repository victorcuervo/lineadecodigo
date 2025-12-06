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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPCLNSVL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZscaDe7bYICzju9Y4lgTA62uxNmWqntcpguX2%2BGd%2FbAIgY0swwRbKI%2F%2FmZpwQ0MCNRBPoMCsKC3Or%2F%2FdtaQbrwmYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDE2mVHRXqBzeUYexpircAxM%2FudFGkw3ZsmC9BIwyL43lS6FJD%2Fm7bzRb9fbhKk3s3s%2FhLV4TvPRfQFrQ4f0APuNpp%2FaeHbaz8A0j7tb6B%2BfIvcav6tN5SXNrLnvdw3mZ4BGN6XQEhNdyB5FeE1LFGzyDnFNl8T%2BwODFUizt4h691g02g8bgrlhx4cdDeelS7KFgHNTOaQgNkFbu7Ilk6Cxo%2FZ08LNNWk4KVmUzBrE2q%2B2epdBbvVIBK%2BQubgdZHwVXfDpkOE53FETrm2QPD%2F2QUYAaVcYN5u%2F3nzNU%2BQximF2xrj0hdsoFFmLQV0D887%2FcOFbJgrW5wq5EXUWanGQ6QV%2BC14Lqq1MiXkVArTWDDQ9Hp5lidnDVBEoFT8cLaLBcEgDmsld2uoWQmS87dmOx4GPTrNnAUh0bVD2Qm1DamdD3fXxuKc8hOhY1A%2FIMwG00hgrWBnqsGSzqqgZytNP%2FtO3lFjeGPN2elVhRK7EEn3nA0NQ%2Fxi3ad9WfI9m9WiWZxmfSiu8Ybq3tzyAGoDVpgbQpU3gyXt0IPeTCOon%2Fo5iv%2Brtn716RUffsN113qFa2UPZrNIyegM2n2ITqkV2DLMQWKppqKvSiQNoZWUYbPe9kdhwLX0MWZ2wSxI%2BAxv1byE6mRNRHODfOKBMK%2FezskGOqUBN4lgWrFum9c5h4qtHM%2FDcWoMmmwtHkFaWVgbdriqXBLwbDEy2XFeQcgK8zNQkx6p3CdV%2BAHyXcsWwz3BA1TzD%2BtGc8DRJtUtBJupj%2B6AnJESy4G%2Fml6AOmZ9DdoqZPK7UDt6bg4HCyGewtGb1yyZxk1Ir1GWk4CZ2sawPFqWJLBjDCo%2FsYbhvKSIsQbz5RlSzo3P0muI8T1uY1gxURrJ9drVSyFn&X-Amz-Signature=2d31f8acab218c6a6377ddd8587928423349138c50a1483e8467d2cebb3c1e7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

