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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2UXFQNN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWTyGUmrKxdFs3mx9Nu%2Bal63vP%2FKrHcbpEmcZm8SLSggIgYAuv%2BLps6kItCgJjdGdaW10UTgRplTVkgfmWFHL9Orcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAzlUcCB3bwkZBFSOyrcA56Uzj8SwdPspC9uqfXDxTvc6KBgamDF3%2BBIEu%2Fl7PufsWfVJopkbeuTRUwCLGmc7%2FO4OlhA5jX1wDVp7fTihtzRi1pUqrqm2U5s1r4D41jwrGW2lbrQBmkxWi3LSU1dje358YGyvSgcHYEFGa2TRzHlxIgR9A9diz5GrCSvY56nM5bb%2FnaYbnVjCZjbvZlkfqR8%2BkF9uHkE0qEktunx2eKTdk5lhuaZAPDPHvaRnuya6vPB2l3UHthxlJ2u3dkab2RQJI1HqvbbffTCS7JRKvmNdsdqvO6tfzRu3E2jdquA3aveAPajCxS%2BHbpW4EsdjsHpiABF8oxA7uJC%2BefZQLSoJ%2FqMCWoxOlA%2BfmSMjM2tiwPcr98tpP0nh5ZHLsp%2BIoKFnNNaVWlwwaF40w4M4zBdWVv06Ge57lkm5EYJRnk7i%2FxBZcG70%2BcKITLSRV9X0SvnrQ%2FES%2BlORj3RkutJEz6DR0dPUOW3LtS89aRL9RlzKGEK6Rs270La0MJ6sQlO4p23AszSzob%2BIzdLIWPST76grMQQgpdZ4G6e9%2B0bXqU999xdlT2TiMz925UaI%2BFwaFj%2BXOJrTK5GA5xtJjj2aG7khd2%2BXcfcsWa%2FT5WwkVdXhhklgWG7Qr4hpqebMPe8z8kGOqUBX49Qhhv281x%2FP8DVfG7vP39Urrj0nBWeCEzlNcvU%2Frd32iIebmOMU2EnxG0CsQJVJbvvT3XVEpd2VYtqH%2FiNS14%2FwQIJ7oVGBAB%2BupoaDPf%2B7NR56DtsAu342MaW6npJ%2FK2ZMvq8ZLuPCBM1pt5cDl0RYuD6PGXEToqQh15%2FxFpk1bHL4jnUaW0qF6Gey352OetVwQoGucvJMcvgDywCW6ucWJLZ&X-Amz-Signature=c711a1d94eaf93f6d17df5c7ea3563b069af013593a06bab761d115e9bf31323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

