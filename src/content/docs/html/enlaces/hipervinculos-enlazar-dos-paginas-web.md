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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642BIPWAR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrutAawZEJHsarkMjoxslwf7iY7h1cbx51Fix%2Bjof9NAiEA4Xau3R8WAIJEgWjR540ncCkhYwJ0p8dfISXjZwG2qXMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDN5jrtIo6%2FfKN6pJ9CrcA2H3cJPczR7YmGPQwQtX3OF7a5FVJTHZd64Gfg47b1Yj6%2FzqN9IrTZAR9XD%2BKbODzgEE544GBuPrOfjCabpowBrBsMduREyuSCCKfpevtcaNpUvnQXBz1etCNek6SKzxBOP7Ab6LXFzSibqURHJfVGGKL6TjLHEAMA2Al5uLWeq%2BqBILdfrkZ7i%2BegpjdDWp4n3y7dQwZe3zdjO1FbdkvYfVAVci0IBysRrd3tp%2FKy%2FV8xssDzZ8SDJ3y9vW%2F2bhZScIdVFFELOJOivlDjgRLfXghe2GLWQHvtxKu7sQbkLYXdFTfHiJUAijZ1VBwhoq7jj3Q3CfYT8t%2Fi4rBTCzigooF2QvmyC4h2caGkPDVurOn9MpAxJu6TdBUBL0ViIJNHg9tQpHwjBoupPDWuJRb7A%2FShTKGdFk1VZGbEgokCrhcOBH8Do8YDZehp%2FhmaF%2FCDK%2FgqCMRlkUD034DBBXjG6qZDVaYeuVhyn5A5LnWHgyRoVF1%2F8CT3pwRE%2B0oIaFAPvrRh19bJDb%2F%2FxpntIyzWJDZqzpLpSgvkrMmp7qCJTEycoY%2Fy9oure%2F2fJaklCy7BWEQOPhaYg4FbYQlMjqFp48%2BPCHAyxbqR3CDwkFdqjPdoOIGS9A5c%2BFs0oEMIrK0ckGOqUBG7jHkg30AjazGCINnBZDzwhCcERaEMWUk0eXZy5MYSJBIRoD6YEITdtmq330sl%2BzuzkMMe4aS4dzuSamWxc%2Bc46fdqjw%2B5XzBQ%2BxJcGaMJuOsHz2h5mOhaae6o%2BLveExOmCCPRheDgBJYrlNIoho1hUcbynxeyG6O1WrEZG7K%2FY3M0a3MdfpcCS8r7V3sDBHjrTQt3oOlyvRndPpZKMAkQ8BME2l&X-Amz-Signature=1927d550c826650e14aac40906854b76de24a23406ec31aa7903d70f76ba8d6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

