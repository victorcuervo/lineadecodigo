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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IOHNOD2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T195321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2B9t2iDFGYf31YS1fIaug5p%2FJ1JKiOFHVSmTyhQZ9OGAiAjMbTATdjjEt5E1%2BkyAYGX1nhD1zIDREfGKixI1og4%2FiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpgnjQga1CBenwpv7KtwDf5Q4WWb6OjSZRZ9ktlVigQZehEid7n2Wo2kibVR1qY9uv54HOztn2tiI7xMQRj%2FqwrapVLSsIjkq8rkh9sLJ4MGgddPy7nKBJxOj7hHIg7MWeuZGUMuzVr44UUaa1ivnDMNCG93dBrC3pj97jIJVM8QTg%2Bh6tGHzV8On3oYevgBMNVMABNQ4305vzcfk8UsSJAEHTtxKwCgHq4F4WI%2BMyE1Q513SCZPj8%2Fb3YVgiVwPJW3p5Iu2lmRsi9uKRBvWUWZ0lMskldMeLG79bGH%2F%2F2f4P%2FSAkSHlCDKZMHdI9IiPjVhRN013O59k8OkE7jvTwOtQsCF9h%2B4e0cF0f7XEeSm7Z6S6kDDlvbL9Ai3TxSMXA40BQBBf3UgxhM7reM%2FDr7vrkfeTcpvO7GMi1YIpI3wpjgIiuhVhPojOdtNU3afOKh92%2FZA8ZcIFatQGNB0kzH1nRdSQ73GjG40YlTuhMI3cq72aH22sq10hgvELR23FOVl3RH0yNS%2F4t6qFkzblivG6Q%2Bea1if2tkiFTIxm%2FljRkCvVY1S3Lcegujq0pr%2FDjJQdy1S1JUnj6slM1mAzrl5yrfnwyG4Naw9s8ehOlb9tFBFRIywPyi6MeyZ7WklUYOXvsDYkO1TczRWQwu9%2FhyQY6pgFfJ5clZm58WBozvoh0M6lujiKqFTcBM6frICcawiRutoPcGNz30Q0auew%2FYDt2CHxUQLFT24igV%2FjFfER8N8dhPcpN5hHBMZG0CJkbFHkNESD9teAv%2F45WxgVO7afRqqMMFouSjQRgwV1exMg7dja8C%2B62kQnN7xgKxk3xIiyF09CATprV34O%2BwwhFFQWcEuBbv0yNNHE41dlaCIlzl1ZXE5xoWFvQ&X-Amz-Signature=f47352e268a23894a610e42adf2e4a8895566d45cc9efa28430d1bab5f4d6e44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

