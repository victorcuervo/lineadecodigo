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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSWP3DVG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgcrqEOprLsRpV7844y55id0orUcUCsLDmbdkT3t93AAiEA6GDnhhLzd1mPWcYM7nZ4nMsL%2FPpWgJevbCvAUgQ%2B4tQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDKnVhhUMkp2gn0JcBircAyMgVPdPOEc6j9xLZkME9tjXbbq9FbPvIWcLNehVJegwaWnt%2BCWgti8v72eQx78QI3CxL6u2IhK6%2BZd9elWnypcQmbazE9qjLiSmJA6s2KrUhiCQ%2BbjASB0inKFwl%2BHKXIiOk4KecYmL%2BSOOt3JhcgaNK7bWDdXu6PNiz%2F2WQfEsML%2BthCRel4kwjSfZBEGh0MKyNRhZ8GVIj0uWl7%2Ffi8zLWI9ldvWQ2N2AgGXSgtKyNZtOBmETkthXTg3oAOZXqkLQDY%2FojRPpzG52baEC1BX7LTRw1kfbocm28DakqaqlXlRsMWVIOrlD8%2BPtAQejhLJD%2FPCL1lekJhjEROJR60Sd78X2HdtOGUxiQZCk3UaW7Vkg3TUky0HtdG%2BbhhIbb6hLqFE2Buu72j5W62lpn5ohDU12SXOxpdI47QqmZ8%2FdfoLgiK0RqSLk5XEjdrfTQcSvmwKQyYSSZOW5eAQr8iyweGae0dHkCwI%2BRLzUeu4IXT%2F%2BEogJqtMtZXIlCh%2F14jRVQZVBQtQz0LGMTR%2B2rUn8fjTAcXpDuVlg%2FLWNGPR9kRoQrAX9%2BVa6%2FOqTIJeFOlhxXgQ06l7eLr8%2Bj3c%2BJ01GnfCvFkBBIu1au6oYsntlgSNEgrOGpL%2Fiy%2FTlMJX9zskGOqUBWEJkrxMZyjnIiKbtydyBn0jq1%2FaFQ1oYVCfz0GJecVnBnhoMF06Bm1WpoEFGs%2BvH3%2FiOShW5obs8ENvP8ZkjkqdJm8aOqKaKmMq1fRH3%2BbFYCOXNVcw6scznHucmSyc0q8ld4hGtv6XxI3TGdfOEWFbIyMt2NSbuwxF4V9%2BoPmKAYurQVfnkQFwzbN2Gfg%2B8PwT2vi3hzD%2BGlvhMGVICXk1IB5mp&X-Amz-Signature=7d682dc86fb811bebee7564fe811095500a4fda0ce512d2a8ad1003959587aa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

