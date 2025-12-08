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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLPEL3ZB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T000211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8zeuoTWV63yXDjoJhLzVg3KMM%2Bn5LA6jLvvWVZOAL1AiBDROXjzl%2Bv2pSDKmehZdBSnkED6uC9uHWM0A4W8T0uEyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoN0o1sCWXroU9pkDKtwD5b3qwtVtb1iGnJ7FZe7PADwL%2BNA7f2%2FXIZPmmrFzEp1QvEeEXvqDmBRzb85wfa6B7JKWKa20kKWhIR53JHB0dVkB4jj1e4XuzyxaI4Jsh5QIBbXmctDTJIvflsK6XEXclMo76wxjjE3ypb6I15KeuRZjUqTJMhgXocyUS9KSScgxcTVLigbPB2Z%2BE7fd3ZxTa59sCA2jeChHyY70Y2f1R%2FKjKI7Cvr1Nf1UXM42o80JnkcR3PZhluNoTncQkkY8dmxH97h3n9xT%2Bw2wJtouF4HEdmsRonQGMfX8PDrghOjnqDeann99zCoce%2FPzcgaJ2hB6LS%2FaM1rPT60V92R0NKxYs3QlDqb8IBikdqE18q9Jvu6P4U0eV%2FcvwbmkDD2pPE%2FJ7EeqT6jsFLusxANvp9Hxr1PhurUZdgvtmtDYB6MYsmfOyhMC2hPNWDAaOOSA8zbnfju2soU2eJ%2Bvdm6GNsxKu1bwGHe89OFGmI49GadU7mpg15J3z6paMv1Ng%2BJbDON9I9XY9DgwJWJegnXwWeSD4CBTkY4P2IMTxsj7V%2Fk82g45gjuXcBdkuGl7PmsKU42u%2Bh4bhdyKK2UcDUssyArzwOSbOuENZuv6XbX76qwtxG8ykXYGjJY8xsTMw8qHYyQY6pgE7uhPxYqF1%2F6GX%2FPmCDmuQSf%2FWAwXapQmtd1WcM712UwgMpqifsMnY%2BtWsPOwMPuLUlTkH3MkCo3dAQ3tlaCet%2FQG0KWozj%2Ftp7jpYbmFMpEyesD7Il8rO%2B5m9axxdUTEUUJdQ8kpc28bx2J6Y0olXIjcnJpiiDKWNaUxBCghGIyqybxJTnhuUB%2B9P2sGQM1nf%2FoBuZsFYGbOJJjzjDBWMGfZtvXqi&X-Amz-Signature=cf9095b155ac5eb137d87f1fc9f27a4bea05d46f479016ab5475ed02c746ba6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

