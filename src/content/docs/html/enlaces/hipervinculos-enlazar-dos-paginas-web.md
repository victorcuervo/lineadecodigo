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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSGBJQAB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE78hwxTg8Jef02ag46tvuWXAyw94Mk1HSnir%2FjkOnOTAiEA087dtpKhgQWw37TadFwZneomPXWnr7MeJvx2LujIQEIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIiNDmKrKUR2gE0nsCrcA7oUfN3yKCHGF8gCjEbt69XF7BeUErrnSYcIyDKqkI3RFvlmNzclGkoRej1%2F7IZx0klLCNtxiwEoF9nyF0b80OGpmlGlwNBgQeU6EyOUWin%2FXvyI4SYXf6vaqUQ7%2BMi9JUu4P%2FTHX475cIDDAqdCz2Ww5zT0ES6IogYQ30u%2BPh9Mwx7M4aIDQbwIzdFnjGN0Uo9QEw5Q9myisGmaf%2FZGeHhiO78eHowUqWci6deeC2XEmL0cf3kVi%2F1hO18wGvUyfd6QNNzUOybUPBGQHn7oulnTqQEebOLiZvTu0JXHNCmD94lL%2FSt8DYneakjllE%2FfCr%2FLzGIzWpDUCIsFzmGxV474AwTlAZgySTWT00i4Z%2Fhvk9%2FpBKmz%2F3wwREX2YXUt02ore6JuUs3%2BSYAPso6OWwkBSur80LHBGAz6ZqVsmrW7j%2FkwpQsAODMgvXIpp8UbXFuW0bvZa9F8gkS9GKeds30FCFf4xP0p0BCMJib0HLuB8Yx%2FLIHVOTsIfaLHVA71brBQAOedldjxOj5BtnRitGEw6GWjhDPypU%2BO2FsEOr8W8FTZUswfXmzIkvwtkmeWt9pEOvd5fWvH2KTn8pfEQLkRfE6wH%2F880i20z6nUImH6Ic9eaeXZbMS18jd%2BMIW8z8kGOqUBV0R%2BHClJdTH6zuHRDbbIpfKI5nNonQMN365cm3t8Mu25N3uaVGQQSYj55aVseJ%2FMZfqydCT4NKnBwV4Ui5rOLH2fKq03wCTafCmPEVQoLnkmDh4opYav4%2BBRhMjsJnXHWxqG8z1tiTCGa%2BWvtFk9hp%2FTIse8hJYxf6Jr67X3iN9xIdnQfB8kLExsSXCEtNZdSrKdjFnwoZd%2F4kdVdkCEgA92sxf1&X-Amz-Signature=1b561603873910cac4b7b999991306ed2bac7694c87374f8106af9d33cf074fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

