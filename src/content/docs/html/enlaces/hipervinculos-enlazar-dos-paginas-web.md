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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW4MY7FB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdLVTaWl1UzHAJN1h8%2BDUgpfal%2BWKzh7dydM23FcFqQAIhAMb22qBo%2BfVtDlsfLsdqxIz0XB2UV2CRs%2FZBejwKujYuKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxpny%2BCk%2BZA02c1TQAq3AOwMhbQP7lQlbY7CTGoyZJEhsZ2JmSas4HzwfWqt9UChajr9Q5MUL2tY01J7GfGFL0WUzmR%2FFaxPnoNQ1HJVek1kwi6iEhDRWK3V%2FW3%2BOXIcRoFsZM78ArBBI6mjhrc%2BAk9lRnwn7PFTAvljY0exD5rWIdn9ddKyBMzi4a8okOHKrgvdw8MChqEB9YJ7Aha5%2BGXjTfSzcs1fvFsZ0LiBDOLJv%2BoEtwjxsfFC55RjJYNRAa%2ByiTuMx4tZvIpTXMrxKwtcxR8%2BGm4ZFj7fX7%2FJHDcPVKO6gXcnMG3A5TAXCJSxbeURtc%2BwQAin%2Bm7tOUnO7oJ17MhnA9ZSNvX9941hljTvZZt8gjPFluNiOuKY%2BZrzTifX%2BG7xYe4se2lNejLQ0nJbz5mkkxOsROXOomZLoFzDSJgrg5Ma3PHP1U%2Bc7C1qVBouwQnG1FH%2BQ%2FbC476FF8I49aWBk2epH2bgan3wtg2uJtDtmN5B%2B70FNJn%2F3PzuuM3JrS4fYAWkcDQzxjWhXb5V1ORKPUR0xWT%2Fz9Z6K5gKRbszqqeDnqVafxSPAslfJZNF2W0tqRDtxIdv%2FNPcsq0o8FMvTd9RCBYTnCgPDdAQBogIKwPjtXQMSecGK0yTlGewsfN5grzdBz%2BTDCP%2FdLJBjqkAWRo1LikH6AiOnVkHWoiYKSzxRXGZ5TPwvNL9o3fjMmmgsBJKB%2BCssiOxfPSpPzLJaKaRDisYC3mEBTAxcTswPCF2M24gxdCZVBEyaA5u3lNOOrCSD4LL75qUH31MA8IMJbKyle3Y1dXmuZssvsWAJ2exhvRfX76wY%2BmfTeD6g0uw6QYtIfbIhT9haax0MtysOSCHjgnvcic58PXxOJRmNBGVu0A&X-Amz-Signature=0d51c145b035938c66eb43e1e1ad152c50d4634e1cd9bc0a0c4d42941e7e12b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

