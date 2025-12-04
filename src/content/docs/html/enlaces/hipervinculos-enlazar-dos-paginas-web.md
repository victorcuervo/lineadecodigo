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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TZXJG63%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIAyeRSHn6gJBxJTEk639RFCOssC6BvgMIV1W3A8YXNoUAiBVFV2yqMFu8x4oqy2rTCNMQ8IUDVMcdI82ofAtAa9hIir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMbvpKWfkc6EQXlxWNKtwDe3BhD0tAd%2BwfgVF09%2BGYnHh3%2FILwzbb%2B8OSiolnFJ98dv7EVo9jLGMXviVYMHZokbBJ3e3aSFXUTwf7Ye4z9p%2BXgihXq2I%2FPI%2FD%2FeU7vH3QASONI4PfKn9%2B2rev%2BardFlwnAlN1AaDYuFWb3VtbDR%2F7mrHmpehd0dCmjEtouat2%2FcMXLWGwe%2F0t9V09JV9mMPZ2UJWh1Tueo4jpvjLkVLcWNFOjWlM8%2FFHiOmZr7LBTo%2BxglY%2F2Iz8hR6Lp7uazzGo7wyrq%2Fbwi0ffctwfUiHjn2F6G5HcAH%2FaSF%2ByTstIpy7I21xIOMc4a2SObBvOL0ID%2FjhFH%2Bs4%2FmqkeK2f0%2B6bdmmHGFcHlgCC5joLQ5UXRnDGw%2FOCnkYRW3RTw9NXq3hRBAxDUNwknHUbZkaqX%2F3%2FA0EKYzG3Y6iMgAexlPPmN7Zef%2FQ%2FPQ9Dn6QxYdMFGobzyJvLXtriAoRE9VQOYSRcoZfEBiFNCFY0tjge6YTwfi1MyEdAT20JOjzlpg5%2BWVRA%2BNcujgXlAFpY4nMcax4Rbkyq6GPLEWm2EHix3sDIKt55L2uSFwG%2FI1EapP44hi4I4RxAhnuHqSZq3XWrd7Wrabcxni3neubVEqCkCFpPWMAb4XWfEacMMF2Tww7%2FLDyQY6pgGC6VMXwMvSvsbPQZNUzXGeL9svQqBQz1XTAMiBBVBEXkCdLvWSU9PNe1kwJ86j3J3170hhMGK9ObZxYDANGgaRmZrsNIKBjH%2Bdk27wMWuetrGhYt9hq%2F%2FdmlZQswpnamLEfWUBrOaC2s%2FkCeM3rDKYo0uOZ1oY5JJsKsf8BirSHDO%2FKA4%2B1ctlo1AxxnEaazJ1zb4p4LGGgXOfLhQ71IZL9PpkKIan&X-Amz-Signature=706cb24c4930d805fc4ebd91d7cfb242997d44a9e0fdf6ab92c82e7745f59a07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

