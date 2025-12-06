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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5VCUFN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdI%2BxHl95Xnbnm%2FPh%2F3FycqGFmYlrD3SVhhTppU6%2BGNAiBUB9AHWOkeUJO08xyHVR1XpiNw%2FqEvwyy%2FfuopibodEyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM7gqjnmU3E3NirueXKtwDfavxRG%2FpIG%2FKy6H23KQ5SN82Jrlp1b58JujsTlJl4nVT7UXP7p0uI%2BLCFC3kk8Bw2Y6bmu9KRKCLRji4QWxJ0hRIpEMPIHqqwysp%2FpFJ6eOFqP0smLyW4W8vyG65RRswvTBDxGQSs13%2BR5zzi06WgSbnnRGBWgOqj3dBJhkOpEAMEnDArkPWnuONBZFQfW6lrKJdqLrF%2B2wDwS6Lok0kR2URSl5oPM14mXIo4VXjqiFMwaG5uomAD%2BKn2vFpKhoylB5qYolA4j4qQ4MHvaRM8RRN5kZZlvvdXvpO6%2BDTU1Dwu1Jsm6ih7j%2BV738HM9r08l6B4bMgbbaTVRq%2FXJqpWdE9Wtlpj1StRXDbE429Je8ZDlXQPH%2BxI0dXxRyCOQ2IMIIBpou2Y8Fim1bHHpEMR9LpFo8%2B7%2BWxxjibEk%2BGKCoKI6hrY42JZDJl4c68DkvTMP2azVAuLz830KjgQUnG9%2F%2BFkNMFSie9R48D33984GKKtwCSRbjEszsEBlGiSug0mDs42inOjmX0akJCP9JeJhPZx%2Fs2YUcgDc5UxgakUagGLGWq9cm0QjkCZaohMzNNUxB2pA%2Fl2rRbrhyImUia2rKjGBVRWVDRCipiQTskdaAXqG774iaa%2BfXcxQswk8zRyQY6pgGc7uuiJ9ne9D5RYlAQV%2BLihUSrYHgtPdSQS%2BWPJZ7P7i4dfx65x43Qgf4ibI7ToHTKKJgU8JbBy73eXiZH4AkOKFD%2FAKf%2BK2Rb%2FS0WNfCSWORnGw2ry%2FebJvctB1MH%2FXnps6naV%2FaFQs%2F5c55jFlIQVSma4z402zHOpHjkUOvcnH7Hd5KMIMm8i8d%2F2OD3%2FeQBEaD5A%2FG%2BzEtqUlpJVd7hI9%2BdpV9T&X-Amz-Signature=877684d90e51d39631ff2fd87cc44dc53ca446cda704410aec28af51b5da9009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

