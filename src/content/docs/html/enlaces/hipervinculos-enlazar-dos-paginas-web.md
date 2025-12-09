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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IXNPZ76%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T170415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5V1u1Iw7q6o8C96P7A9M037kKr2mdKEDKyW5mKJ43tAIhAOxaXeCwBWZfhKCToVCO0ojqwJSAYTmCpZ2c%2FQZgmv5jKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrgTbu9%2BKYeFf9T1Uq3APAVwgIqmYJE7UAyR%2FhNyEsroY9LCsq01N129BZNojrWaF0Vmc4CevScGQ0HMg2n9zUvuBSohTWVGxu0Adra0ddYg90BI3vkDkvYmxJyHKshZKD6rUXdCPI1AIf1VgydF6zmM%2BWbZ8VzeuSDNLmEa9zXzvb3gq1kae3tk8erXkHuqbk5g23%2Blv1LIQIq0XtfVP%2FTzo2tcedv8asxi3KSIl0SHhkQgTjGDmoMrNavXPQJlwuwD28i55wWufszH6J27g9h1MCGlOQURyiWs0dNlgs7yBazFW%2BfMRtzWnxi17%2F3yz5orTus1gYoy1JAm3EmWuxgMoLFgvRJDp9guhNKEzewEjf8VnqY5uo15Oem7uugHcN8l%2F%2FSr%2FLDhzqSYgGfmD8d%2F4jCksbpXXyRsXJA3gRw4vFNrrmD5OUgpE11ti%2FSdNFVq5orZS9vAGaOg1HY%2B4NPLtblliEEUgjWdLuLrbzeHWYwOG%2FtOR0MwGcLwiF00Lj1tmj4EA9BMsl1FJVT84cGTA%2BrmoBN4Ikq2uCBjZHsje4Q4akgjx%2FOLw4wYIZtcgVFW7QRaYkcPqkMyke6OqCpowA%2BEd4zYQ5FnTwKEWwu6I1Ck78ZxyZ75aWIyxQrNa2rHgq4H9xgdTcSTCrmOHJBjqkAaBFa5eh%2Fn5onBc38JSvXd6uiCZzgqwTDSrJRcEKL6iZji%2FmjgDd%2BxaXCVZejH8i56kqICJFWLdtaSSTNReNzoA0tNOBQVJeIj5scwthTWQPGE8ITOPfA829B3uUXyvj%2Bvxw65HXgbJgv2PJwXoYhSaqLc8vG87RJa2k%2FJixH8zDjUd2M%2Fp91LdtateOtX6jXPFBOYP6mb7GZUtBBh6Klk6ZbC3f&X-Amz-Signature=c502fe52c15137a7450ba95c52254beb14d6b29448602389b133bbfd3c900b4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

