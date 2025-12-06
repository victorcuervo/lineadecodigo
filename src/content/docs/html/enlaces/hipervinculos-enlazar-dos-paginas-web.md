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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7MPLCDA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkaUj9R7d5V0wj7NyTQob%2Be1GhsYnm5nejtENL3MRL2AIgBx%2BoeKjGEn%2BDow%2Fl%2FZ6H1mP6VKOd%2FM0m6TEg8KM5rZgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDE25roKwOsxPtjS1BSrcA6K18g5rauD%2F2QZ8m3QS1JDE5YjX9quF3DHOFB8M7zrznzhRCAT%2F1jPPB65AwYIT1pCUUPzAre%2BD2zC792UJ35Ihe9lgYFKALikbERVE8oyR1%2F2bkaZUpsSZpNwZmVdtsj1EsD9GMYLYzrq7OY35sNw9cbSvjRpxbl9qs64EMcmpJ97wx2Fp23n3zIo3H7E0TWtL6uAQmShNjPi5Luixfvp7TpJq88ePwA1XDCcUT5oA4J93RKPHMTSRGctEKCfG64e%2B9ELik4Zri7PNJN%2BYcttZYb40u3tabFQDtfjybAxGAR4aUmUfg8pTDi2Pg38OIkrEhoUJJdj%2FD5D8nI76IQ8cp6tg6Zr5XEZXSCrevu4NGNM4OC4ILWh2hkQJbgAWMM1TnOTZNnbnKjC15ADSrz6vnbP%2FDaEgxKu%2FhdwmYnl3V0M%2BkBiN35y6emw9PNrPqzykkuArx4%2F4lD%2BDI7JxK%2BUKha9BU4j4fKuE8OSD4ztwY9FOMvahSKeVkaAbUv6ZRYe76wViPoGB0%2FQeAdjywmMAfuGvFEtP1fWPaFvd4VAIBDA%2BPwvxn2zmgxe3djvRLUfkiMIoO47R%2FS6WzpQdAIol4xbgCaDwJ1%2BuOy80kf4T2dzoJkAOfrqhOD5WMLfT0skGOqUBm63MpnKEj57YdWF9WcCwW064Vs7%2Fk64tZOFIP%2F5qc58%2Fr3VOjSFz0kRm0xC28WTJ1S%2Ft3%2FNwySrhcPRq69SOqkkgfWzQWd99nkTwkF7knp%2BkQsIXskwkjS95fdS9Ztdx6EGM%2BkUEuET6YaFAH0kODvx1BoxQnPlLl1xpz7%2FRcWfWdfgov3EOiMm8pDZBL6YBF5ejK0MbTe14%2BOm%2FDAYwVLW%2FfiKY&X-Amz-Signature=db6e4e9b21067e4e1d59461b563322d17678493faac892587f77a292bfdd094b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

