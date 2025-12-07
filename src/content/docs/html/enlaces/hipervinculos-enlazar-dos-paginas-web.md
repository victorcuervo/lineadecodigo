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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673NNYIRY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOoKyqs7EpDMnf9PLzJ5Xv0IGgIpGTXC67LVPUHb6J%2FgIhALBsAi7A55Efw7Ne0RBz4PPp651xXSfuSEVHv7A6fZ3gKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2B6yiCD7iQ2VS9udIq3AOxS1P3rkFD4os9PIKw7%2B3qMOdr9ipo0DhL%2BGn6lrMj9gvEwgYZoHF0K3JKU4mim%2BM0g850nmPxpXUlRK7zBhNGICan2GQ1Urms7wnhRxJ%2BrIIkY3YXJvnf4PE6doxBLsn8Uom4VCjXtbDX3npQjRXarrhD7SeUQbuPc%2BMPBTchbl7oBMla9LjrFrlfn0JE1C%2B8bzUaMUTjjC6XBxEpS4Wf6nm%2BCJOhrkrKctTKJBL1nCDukJygUEBmeSofeOgm7y4xvC7kflEcZ8aCbticYVvApJvM3Zg5miyO%2Fvgl6HIlaTxHfT4PYZTob9jeiAxyD5ENTu3oMr5vY0K%2FIZKtI7XJjwbwx%2B2quGhUiQDXZmY1yHDwqx4bWSXpNzIRXcu8mQjUfBOtBd6kZH5lQX3IySNs1wF0zc8ocZ24c1IMg20H2mo2vKRTu5movZIn9ET7MpIZ5Wj5jNpxrLXhqyJGR4%2BeoXmVtNoTTeRS5bQ4hD0W5tUtnqZD0I0Pfi7QlfmsArwUD7J5BbcdKeBGrVyE6WQPhTkLrHjXdwYVjWb44O%2Bvt5neKZamu3aJAku44oZz4CsvUfrKKhG3tNNTX4vE6RxcOuF793QMzZwiXR0HLzkfYbBWO1Hn9H3bg83bTzCcqNfJBjqkAVSwWedl86S0iLConUy2ovoZUFhA3o3J3WK3wAm3TC5CeiK9l15T%2FrcnQ08jjweZ3yg%2B9wO0v5y1PA%2FQy9YATTopLz3CQDhivBDT77Plt8ukbet5VMevadupfWr8uy08ZLCkmvFJQJ1FocY13mPxbeF40b6mwcMvj0TWLieHpF629fSGh5pfLHZyTDHZyYeCW6pvVB10%2F5qNTLhSITBWmzfNXQOg&X-Amz-Signature=c3308bb9e603cdea9e34a7582b61ba5e22a7aa0728b9ca04e69031ed310910b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

