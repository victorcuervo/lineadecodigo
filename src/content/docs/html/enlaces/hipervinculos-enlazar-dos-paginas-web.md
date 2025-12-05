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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EDOBUKE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3uLDS6MGktM69EnQbXBIgTCCpNaOsgpH7Hh2TyPp08AiEA9Q3SeBlDbUqsXJbM5uLDQkx5g08lb%2Bp%2BSIHTwfg21WIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMVOXB62BduwpQ3tWCrcA2s0CHlfOLuvPf96D%2BIzK46wjDQ7zicvqEuGG8SX8UkO3KKbb9zc4qPh8O3BT5YMARcxNi7TRVEJzNDkvQGcoz2bByM7kJYHhfCpY95JujpYtkllWQ48G0y4eQr7mKb5xqLpFph8pU3Mulpv2h%2FltsJiwy26fJ52KbrC1oV9avn3HKG%2BCfm9f96v0yuQ1T0haDBpoKFQaThK7mpOBo%2FreXf8NX90wImE%2FpqHKgFM7JWX64WFjp67EeEHvGY%2FmTX8cQt7o3qNjlp6%2BkOvSdZXQYwXEElYTBLyPeaXXxiDcfMHHUL0qMGHomJBrb5POqucYldY%2Bpn5xrOaM6M25OX6vBdhzLoLnePwFA2FeNpZRe0LN%2FSzb8Xt0bwSdKUt6ka3K5FqL%2Fq8ZHk8BLBx%2BCml4SOa3vsh3jWhqTWwP6gs8%2Bdz5%2Fp6LIwJj1eNibvRxG0NmxYHYQ%2FNPXRDAZTbkNa2CqhSZGfAcxbiwZSz2PrUN%2FJlcidJEz3erapRFfGmnWcr0sok7RArhwd%2BG0umoFYYkwXVvKTpWE5P7tFzdEWyTU2%2BqXjkuTLflOPFz%2B%2Beia%2BnnxovfSBCGGqaFQWlhoFg%2FezfogypmkKFBuc6dK5cKe9IlZrtKYd427C6IX%2BKMNawyckGOqUBSs9noxnretVz7hyWZYOghlEwtoxsr62Oc5ESpua8UVdL45PsXl5Gy5P%2FtadNdLJxk%2BNKAA4t6GXINK3CSXIxxLfZcvgWvGZKlLhRi0954f%2FHyfUvFIbpy6fRNxRYbzcynQ8Khha%2BczqpE%2B8ehGAFmT3rnfC4DEaBdtwaBRDxHeP1sG3x4ZYVBd%2B7cWXbmv9vunAPKxKUeF9gj3m8e6HeX0sSNUmF&X-Amz-Signature=ce87884b8e59a71d15012eb9ed1fb6a63ec7d780feeec076c694550788f613ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

