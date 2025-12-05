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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDCA663%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqMFC9L9ldJMdvO0Vm2G0wNgLPgAEVed7qd7J57NfJaAiB4ad0sJvibFiM473I2hh%2FjnoZQRZThoOKtdz0YsU3IICr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMs64NhyQO2FSyc%2BDjKtwDL0FMuGdgyUQ15tGKGIdVSPOVJFCxw84ejzST6Up6J4i0qv2NezcF9u4YtAnOc5oDQTeENEjH9fy%2BY9e%2FcXVnPtAs3RMdd%2F6eTeVMGGYlhENM5sUlBAvRdbiwZC%2FVY7IH3d0mekZM2G5qdVWMdmBpcCQL6%2F%2BuvSVzjpW5vF5lGzIllZOpkfLBl2A8%2BP5XYoAuhp93b4ClA5RttSqckRnz3E6G0BMK0HI%2B0Dtn0jlBlqRhdxthUDo0A9ORq6JYGQ%2FfxJnzk1llHpqGy1DFGM6epQz9yvzR7Uy9g3WNM3oClh1PeVrS%2FX2%2B4izzoHaJ1cp5Fj%2B3sHEpnKv7Z0koZgbIU3xi5jqRXrhvcAQww0lv9%2Fbl5FCbEpKsBkIe6ijdgim6J0yPnViUN0AKExWX3UsxB5T2OrM4oAQLbHHnJjFc7GpJjrvTNcIb0wzvAwSRGs3YH7s0TVQqEiaQdEdnuG4DygMqiDEDryz%2BAnDf4XtUf0zINcJ1i5n0zjqomCQ1UaIQcDLb44AJyOsW8xLYDQtORMJPbuzZa156srtXmIdh0AiwHebNn4tJx3YPZ4x7uFMDFmDx3JzCGugofDxbnZH0C3Av3hX8vNHF42b0hMFLIorCnPBs74yaKcISZCMws6%2FJyQY6pgHQ2iJNpwYAmtJwQRCvvAXr4VCU9tuGp%2F%2FWjj3KzG5uZgiFuSIuU59%2FYPf%2FStxSLyZ7EP3Gk%2BfHSZwfJIi%2BdyKQh7oEb7SDunJRttyYw9yfNpxd1dxMqEyvgjkYzuPmnoYTmMKe%2FmsU%2BMj5ajLxR8QltsPlgAAMEXCOPKjFpDWvG8X%2FZDvwqF8O8qM2et4tWdQ%2FMHYpjLrhlSgrk2ebSUWbKpcTFouy&X-Amz-Signature=cd40f5cc239dcf3cb5f0fcef3ac90514e5f101b1a806c3936e2fb6696ce3a39c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

