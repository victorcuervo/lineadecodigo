---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DHLVENE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T171643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B0OcWeW4ZSaWF6PliQbPtzu6pMxYBSV8bzOAhR%2FMDIQIhAIwmCSEzEsezJRGjvtzP1e8hqlaRHRhovXPIaZ5b0uDUKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igws3eFhoJk1gkmf6zIq3AM777B5tkkge7%2BtxdS5AFpydyE%2FhOQAh3M0dXIuW7fqecmWBxibycwNXUpS7O11%2BCE9rbX7Zt%2F309Q8b4lWyZrvuCANb%2BKx4FnmXCgtJyhgHfMy8U4TH0Dio%2BLz4wtOGMg1pRClGULtMPRE5BwY%2B0GZUBXJ10W4Uz4yOoPevY2FKK6LDsrIAWplErLaRaK4NAaPxejolnX9GOQeVpasNSrsIgzmFYHMDBzhyYODDhdTm3h3dSUw20MewkABoxciTQriBruTTovqJkHiIAkvhTUMW2HHViolvn16rmdwR9e66YxzXptGR4dTzHc40nNQpSDhXMdKoc3O067b1wBtTcV0cvsWdy7BOAHgaWwZ8UrWIgc%2BJSQU7FhvjltaPuRoBKF4nIvmWtZG53oUBvgIS6FsMZY18GXJRqWmpVnj8%2FKHrBe4F6%2FjQE720LUZY0FKjppOQnS2MvEHcdMY9crLbAmnan8sVupL0v4%2FPwXSJKCQ1mm6qeP7Lms2OVa%2BBHa%2FgMn2dFQYaD2B8%2BE%2F0rxF7c26mhW37dt3sIuORi36%2BQ2knoSluKYVBfrlgdjW0poC4oETmhUTQxJZSLdH9NTTA3uodYdMrwmCNIYPPekw82qHAsMWwWwhge5DqjUsGTDsl%2BHJBjqkAVLwzu1RUtlJAXjt6aoZ%2Bx9gakvGZtiGIXWSoyd90DqzLMfGM8AOk77842fBZw2wWRDh7ZS9lM1qJKDaj9Pf%2Bkv1WHppeeAsKRtLBKZvn9SvutRc7tupjqR9C%2Bu5Cd1pG4rMw97H3wcpcMTx%2Fgij1elO3Y4WWijB2Tz1iyg%2Fbl4Avo%2Fiz%2B9IIT4U2hNTDtvmUDfdanVH8Y5b8S15zg9s0bfLz6DO&X-Amz-Signature=ee349043427b3f547bf5ed3d31c9a21c1831fc80ff4a564ac49818e4e2a64285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

