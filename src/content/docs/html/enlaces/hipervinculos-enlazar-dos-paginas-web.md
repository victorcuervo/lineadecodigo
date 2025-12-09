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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPLHQE2I%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T174751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlZD2jJV5KI2JRmr%2Bg2OzkrItmPE29glEBaKQuuyHrzwIhALj6%2BuRLErWF3tBHiKRrD1qjtdTTN8rQj5eVXltFa0flKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMSoGHmRmEMhlzaRwq3ANcFE8lZjm7eJai%2FcLJz0GphDiapzhGotHkcNgnunY8LATQT7i5G86OG7mWFbAeBqM%2FOhKeT7IqRQ2a4bTurw2gqht%2FCkWtNskrFyUVnor8XXOI1ioNrQEmmqHJkIDG%2FWLfWU6FMFd4xegjDtQjDimKMOTituOR2i4jyICyTbkwXSF%2Bv3a%2FffSLPwX1rJJPK09X1ATu5Yp9z4hoyNUeU1nj0vRAPf4HnmwckCc4Cjic%2Fd4tTWMfi%2BGeYiwdedOGpLWx8YugSfVxCvEbGHlA2AFS6SIn1%2B8nEBe2PzbQJmTgeBvmb2Rcwq8eZvmhEPtwfO2TDPzA5FkfggYYsMHlGq6TMd7zARUaFXY5qH7W%2FntgoGANu37WqVL95pC2ZQIlUoP4rrYfmKMmkh3sr2NwxOwC44gW4xTN%2BUxj4VvUKqnjbQf24wG%2BKeSuWzgr1OO1sPUqWKX86%2BE5aRE70SxK7ACxh4fxeOjCqyF9VPufcZ1L0XtvCVC%2B0x%2FIrxmEZVm8DhWNYjyRSAuC2vU0yaJmVN2l%2BYgUXTrSbEYyrm1Qb1zx%2BURy4m9OtuYhVUnWwJaPf00Ytf2489lUdzxe2I5WotlngK4xWucqOqMCLkB7dzY9La0098bkou7zIcU3YDCgveHJBjqkAdfnc2tzOcfwt9H1Q%2BmqTa2VJ%2BFI4qhQ7Ol%2BARi%2F%2F5yU%2FwzDiensr4HjPW4C4F0gpaAWVzPSUtnnJRRO772jSNhWroKDn%2Blf2L0wj0GqGthLxskxEiivffTiq5YTZaEeMtYa0ruwMXpeUD%2BV1NET62uloinivub9JqbFwc%2BxE4YOZHHuVmWbW8Tfui%2BaTu2wsfAE29kAVXFZ9ioC9uwZ3R7nMTYA&X-Amz-Signature=d5ef02619166f97a43d96dfdbd552e7e3cfa86ee488f987111e68d1824c7c6ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

