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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4PRKMR2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T164802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM6j5rljINbf6NmEcgiV5%2BwZAyCNyLclfv5v22mO8X%2BAIgOeF%2FUJooeVkCjqzMSep7BugcabhULP2Ye%2FnLqCuv2gIqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXJyiWrPSKsdjuFDyrcA8paxCV3hEtLuxVPHg5xs3lg25MaVehh312ReyB2IUd%2BfNyNA%2F%2FdSwwE3gtomTq9PK%2FU1011XEZhmijhKUsREN8%2FtqkgT8Jj0vRpNzLL8HtaL169gC%2BUPA6ggdq9AXjCSmACrg8jxgoUQcHLfE%2BbumFhkpAZfGye0%2F50U6EI2ZbC8Te%2FD7In%2FMPQg2ZP%2FoV6bPqsEaX5PY6Hmzu4kGTSRDxFbIYDZP6WNB%2BAZ42SjeqnldiUQHXn5av%2Fb4ahCdKHkDnDUy91%2FHL0VKTuDuKIMXmdF6v9sGwGsGd38Q2IQfSuBn7J2zbwQ8rhDH2JkYTGhcplp8UG%2BhFp57DmBmbJRfigRYeodb5BWYpdd07DCErsq41IlOsaSV9no2zaCvetWpyeEkkl%2FAGKY471dovjhk4%2BGHBzFCmecfuWSh4rqYVphB8SavGONv%2Fp%2FB7DxYGgHsMo%2FojicL5Jhj7b73S61dqQqPROqtLwJhdFRP%2FdUAbLA9WiTTEPUZT%2Bd%2B8Yc1jlRwZ00Gh9pghmprMM13b96XQ9yOZEYCprmjpgjSarEM4By3o5eijIcmEHyGH0EAK7ebrGs4f%2FQc6DKnu5%2Feks1IMXQvYBcgSoVWemGXTNUgzitp0DAzrKcjzVlSWCMOCZ4ckGOqUBKd6IeT%2BCUivPeUUUCQtkcX%2FrcBQTKb5xXi66rDw%2FcpM4uosnUkELGtSQnYl%2F6GcLRwfzAIiwSO9zLiI22I2izjogYmqnMyy%2BxDnnsK7KSw2CwwDlR9HCCuwnJupyMm3kHSN4gmcW08Hh6qV6MZq%2BpN2wT9hSo2VuWIi%2FIt3C%2B7kpjKco5%2FMKmKjAqCwJrSoeH1t9B3KAp4rmWF2i1eQaGck29%2BvY&X-Amz-Signature=12acbd595b4c334afdebf940b7019cc803e2587d9f006f50a9bf3b430f57be60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

