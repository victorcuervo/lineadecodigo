---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVVDHZ66%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICJqeQWRifLRCdq0mamXOhYF9XIhazTFdymeP%2F1UG3hmAiA3HOzBVvpAr72E6adFMlNlMKcMTb%2FnD0SHEU8sVVCD0ir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMloGbPZKdm2YnWuiTKtwDZzTye55kRvELia7xmpFSuVBz%2B7gTVt81KfEYBmBuYCIIZy4bRgSV2T9cQ%2BgeI7whSeVYr4uxERe5h51X6uOO92kAlRMHtvX0HfpTAzRDXfuzfO6RgzYVOq7GqinsDysj9DFZx0HD8041TmVWy2VUW5JE0spdF9ixTHnnzIZU87UB%2FU5QB%2BhwSz4XVbL1bENvRdtuJ1hxWXjvSea%2F3PTfI%2FgxwoXoVakbmu5rFaEeuvbLSmAzRJw8QP1j%2B8hM0%2FleQ7T0VccWxRQ8t3GaW%2B0Pzb53Cy60OIh8Byl%2B4%2FiSI%2B3rpO8eeUGZ0f%2FDo7AmdIBQHn2ocIelJB924YDOrEkLhswYSHea1iCe5uu9s3PfkyCdv49eo2fa3ibusZ3xt1606GpLu3tiML10LENPhl75jVBiSTp6E3aib5lStKfGMqExSc0md89oDoWwC4XKAMQ%2Bw5hBeWslrWJijlCnuyJEwWHHvM3TuwbvMqW5IplA%2BoiPRTsbdrg2Dpn9qOkSfP2OiulaZYOhHOj8fQ9lBbAQA6ZifoNB0KzHpOdg373ga8jMXaUvc90%2F1gHWjclU4xLLsG6CcKLYOh2JMHZIhLLopCygdmhzlXDigwbiQKNxu7NuTis37UH19a7%2Frugw2r%2FGyQY6pgFXNsL1TX%2BMHPQAxjY0iMtJmohp7uLcOPybGjx7j45YkAkexYHMJBQMYbtjUD4frgj0o%2FbkhJMbN0ERHTFXlVmGAvDMru5fA6CHSEoVyruI9WC46V52M98j9koAkBA7Ku7vE2wpnnGz668J74REyEPw%2FW%2BrNmxN3nT90fiYA9oMHjQMX%2ByxcH8QvSe8Aq7T2YsDdIzARmUoApLMkhFTNo%2F8bMC41o6L&X-Amz-Signature=ee327fc338629e0271bc56f6eb4b9be0f1c59fe27d2dbbef5b5da07f8491cef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

