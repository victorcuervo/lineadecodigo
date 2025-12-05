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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYLCLNN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkDeDqpnnsmNFdEUPDvp6Jp6d2ARIDf6ZQvPfQ3zHJxQIhAP9w7mL%2BKEsKIkmTKCrOCYRlXphKHRjnYgNDpfkwLFnFKv8DCFsQABoMNjM3NDIzMTgzODA1Igxi3250Bet%2BTrhfdXcq3AMm7GAdpW6Y1tNytI%2BKvsNt5QLr2QASGedTKNGveFr%2BYek4JJC7vVXDJpsJcNklOHqKW%2Bmnqs%2BpheFEy4fPG%2FXM%2F%2FcfRnEv1XPJ1itCY7n2m54Gu%2F48j%2FgcYxcsTIXi69hxvVC4A7x33RvBgS%2Fe9%2BcgGFLI5Jo4va6uf9vxselDNsvDcwYqF5JQcHeVxVm9cy7LVz2nr1pmDOV98y6KM2XwyCmUsAfxmBZHQN0q09JdKav2p3N%2BX%2B3gAmTmRRkiyEWlQeOCm9IpbMc%2BaAzifu5MQ%2FCJVJUZPjGEOWVl0w0BUCNnk4YssN60TCUJaNjCCr9868jEHt%2BcjVpznGCT7ZF63XeyQ%2FE%2By8%2BtUuGm19azGgnEc1xshuoPS0H1MxssUq2V2N25KM6EWJJ%2FGwGfGkpy%2B%2FrZx9EnzmONTH2kqoCy7USs5IosymxO1TYBg9CH%2F%2BziiYVEwJYUkVeA4KkYKf8JeEn1%2Bm3A6xFTIufQ8tkWVKbaNRtQxbGDpp5SKggSBPatghesS4dvePbNic4QRKaQZImqJewgflvZ4ZGleYyEYGi7yQ5nEmUR4vLAMsFbD2Q68668CyjNcIPOnjW50AOOx2bXBDHFeuFUiw6yyf1aNKDwWN7eXQkTLTaa6jCSz8rJBjqkAQeUg2l0PRKn%2Bb2xF5i6rH1xoGZpABw4jKwdsMaIQ8xGfZCe%2BkcprLrcKlgWO4%2FMEQ6LjPcQjSZID04%2Frj7Bypx9fal5sBa5NtR%2BWVSSHVbxw0fqrU5Bq%2FbSc5oJYc6%2B0a7SgH%2BginEvWX40gUpG%2Byl%2BuoCLfUZ0crPFUazkWllW2uWvHy%2FB0V2PtAiaphYIDDOWwO0TuvJ6cDJ4lYlTs2ss%2Ft1l&X-Amz-Signature=8a3ed30b50bc7a804f4f5a752a220c4efad94653eabde35d13d291fb69410522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

