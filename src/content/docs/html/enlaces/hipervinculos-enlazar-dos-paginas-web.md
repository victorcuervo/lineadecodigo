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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVAYRINS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T120923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlFqQe6Eg3gST%2FlJktz0ZSoYjDpp4VMSA7PBjLrBqVPAiEA1zY5yOrC1cADfKtztmXtEDUPvQUoFBR5hhHpqbQjevsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDC%2FQ2yAGAzQRzwHRLyrcA%2FLNcmOVrLF2tzD9vat9Qiws0W1FMbZAPUp2qrQ4%2B3gdlP9JAUnW892zeDzuD79OyDpmSpLwT1HhW0t1PtNPBDaMUzy511hng5e8KE2YDEk6PwLnwTb%2Fh2vErDbK3qWNLkQOb7dExZZP8NW7BoYZ9C9T4NiyC7P7WwchX%2BbaVlMab6yY9DAgOykAYa8SlzwCxxhgF%2BUNLs7TJZ%2B1W7213ZW8lC4nm1oDmQMRGPFwAJxJlV3tuZTSmYu4Q2giqweshklGgPhvSel%2FAwFl7GrMI6ETyvhKOl%2B%2FZBZwauxXtcOYI6vwjkNHfNieHGmUcw9oM7EhizpQLk0I7cLLQco3izlaP4B1uAnIe8%2FmzzLqczTWbkWutenJpyy5S%2BNpsjuvm1KiuTSMcljkNDCkcBnMPkysICymbLubEu78C9MiWdGbeTGpqe2uVnaxNw6El2VXg6CyGJMaIlTccEvmlQ%2BAI6VYnuPaXxWZv8ApRwRGWY8QFizJF8jFDpaZntoLi48%2FUtXcOxmuXzL9vTez9L2rIGgnHUdsi8Af3k1TGZYQu7MmO0WJW%2B0NCgs2luq2cURbcXO3zgFJJGhgTcGHetShoEppGxrHpYoyV14mcrKY8Cx%2BqOKsk0TDh%2FBu79qtMOSm0MkGOqUB6gMfQt6Zke19Uqar56x1WDm4RfAPx8G4SbQKfOhM%2Bp75L2eWj8zFWfpbaK2ynZXXmxwLOnNvC9BS1kaxmieZ9LMjhzHtXdWMXkELRhP0e%2Bt9lRHIcIE55f9EmGC8gxHM%2F3yFFlUqM%2BmHmQ6qipbrbOMmwsW9fRAtVTA904EiUoCfqXSTCZg3zjTnaAADatH7a0jAAeYFRSGFgRbijewI991zUdO5&X-Amz-Signature=b7c8471c602e20d6a5857743e594ff887e33c8196420e8eea26bca5e81fbf73d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

