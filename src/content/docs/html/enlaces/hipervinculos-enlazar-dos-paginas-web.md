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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTD2KTOX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0wT6suWawoxBJTmS2uEdyqsBgfXIXyoCFFQSVaHIe6gIhAK%2BkmqztdaC%2B%2BtLXpMy3irZldXqRzJMzebsf5jhOW5VFKv8DCHUQABoMNjM3NDIzMTgzODA1IgxYwl6L7KUcpmhMtpAq3APCJonHsLAKAqMZYb09ivcfqe9w8%2FL5Rp4UP%2FAb6nlVgvR51LHERi3H9nUkvTD6ojFMO7w2Qp68gbeBY46p7%2Bo0AnCSHjB1qapVFJoySFKLS7dW2C0EvZziimmoxh5sLpt9hMnBWC2wumUX7OniJNWCEpVhoI026qQ68jz19b8LdD9VerAl8Ng0OC6CQHw3aMpzKmCsrRIHVIirI1Ynxf2a7LKmjZSJcTYMjGvFKmA76u25w9M0kiywCh0h4A8xNwcGio4KgHoo%2F3t0iD5qChJhbmcsspAXshVXWcGeQZ%2FqyHWa%2FLJJuXy1qPD5SroZbrYfYKvtrWfPrtqU%2FghVliHIhEvjk7an29%2BZAlum6xpvaApm0J592FMCTCOMWkEMrgwD4W0A7unHVRdb0tqr3%2F2sYSo6Iy2T4jkRw2bNNli5cHn6yE%2FAy7tAhmzvxcu9bbPSclh0T0hK5CKhIIc4l8O8aqezQ6fjhvLQP2xK0RUl%2F%2B6s%2BPlDh5czr7DWBgeTfxOZX1SeG1NGgGjYzNQ0Sf%2FLT5nAElh1Iszkkohj6TlgZdEUmLkzsE%2F7LJablBffZGUpNrFMOVwD56oy4czxQnIXAmTa5BYt5v%2FCkhRFgZ78da2AqabwUlEZGR%2BqoDDFptDJBjqkAcA7ChtvPWB18EKqUQtn1s8KId13Ez9CCPD8druwhaFycfrhW%2Fw7cw17NoIOunXPwLMtPZQcVpyolYx4Ad0Pln%2FzB8%2F8%2FouUX%2FTy3F73mqQbD%2F8wx73TPWYK%2FzEkPAB92DYcQKUKznITnK2nbTZafQsnD%2Bj4eHlNCLB6oLUgQHPpffbxKkwLxTJg0lFhgJgrqy5EypqFa%2B%2BV9GeVoxr%2Fo7quyUDL&X-Amz-Signature=347c9be171d3f84d7e2aa742ed2c6877f69253f8607510c0cea5fb60de2c96e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

