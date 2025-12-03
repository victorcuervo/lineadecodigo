---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZLJK2VF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIGsn32ePl1tin8AY56m5W8LJasTrQ7mIi4m6%2B19iCJgpAiEAl0zMYUDMizSDr2rK1PlgjIxKEPZieCD73Fjsx%2BbXAEkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEKmOB1WvchIQPE6%2BSrcAwNOlb5pnrxF3KamD5lAZuGOrQNoTGR0sFzerEW1z5G5iD9b1djvXfBwkK3nhHm4Ok1ax2m0W6yYfqCouvN0%2FCJc3AxUlHLInqni%2F1ZRdoaGhOr5wI2WjPOhsdX6nXeurdbwyvlqcI5lKnOpf2CYTw%2BEIQYzeSVsoaAJ6vFmnoOGFwr%2BWESF2qk4wwhGRVZ4xTQ6e59N0snb6PV2n5IDDHJHGunobNb0td4MChFOU2Rdws8ISzOf1N7ZydHJKHYiezEVZRt%2FsKfaEF5z%2BZ6RuppWI5YEIJZVV4aHilXD8ftQFitk5dHNviKGgNG3YTS9Q9W8%2Feg492x4IyBs9KMeEMyvz5491VPyKTvrmz7%2FR4%2F2zPGQPVRxQQOKrAEOdOWO%2F1nsEPMW4qgACnW8BUJbHzHpUGU3TIHvRxQAudOf7In9gNJoeW0voobSLQovvkeXIu1ySFQGG%2Bc8BzTOV6e0a2dRBhkWUI6RzxB4xkaAHsft2Sa1s%2FRamK4%2FCZ%2F6RVPPlMkasygxSMpc8r6es6GtHkcwHMkwEVLAx1FUZDeYcz5Jxlh0Cibz4TfTYym%2BdpBn9UvboEqHUa7A9ugLgXRhlnsjijuu9STodWj1dWh4nOKTT057Pb2mkUWo6DzoMLPdwskGOqUB%2BZtcjDcklosT1uMt7fw0WBMlMaMarMNXX14Zfck%2BA0j8OQuC17BoewH0Z%2BoDut5Ehpo4vaFYbLUpRSHiNoICJsFVvoyAqywhwEHrb9%2FECXgyS1be2cz1ZcvH6buQ40WN51tmnX0YCjmAA14sf95w7uervFwmfOicsDzbn0RCIWdGL8JQ8VlkkK8MvAYVCOqqxD5Xbk9d1dZJ5g8SFId%2BnQQXDAUu&X-Amz-Signature=cc68e5a72d37940ec480bd23abae81ef1faa466472254ceb07f01cec25e38908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

