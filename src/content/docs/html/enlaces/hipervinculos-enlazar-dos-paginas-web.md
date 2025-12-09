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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZYZJPJH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0rSxVD3GL%2F%2Fds7rVDx4p4Kioxfxl8LkVtPTuaKcHTwAiBTsoFu%2Bw86ZRMidmtUVzGZ93FcefaBUKzkYZXbT%2B8tjCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2OvTmRWcZcfzfzuUKtwDZ8cHVm%2BsRjyxATC%2FK4xRpllPa%2B9CAudR5VU8hb72LxJIwMLf9G9QWXzU0Ggyd1MSqzGdzva83xF9JQ9GsndtXLGFtwvAEWJi0kdiqTITvEUnm817tz%2Bj73pYd0BErlryxYpEGJCTE074Xkmq7zEB2v78OJH1S1Kr7Wom7EW6RudYi0cinTqRJhbXSIlSPgf1osLKUE8rDfyTHRGJfrBIaqyvUfgWUIJiWa3mjycsJRLAm6ILPCGMy18Enhtb5O%2BRildonUbiqVuLmVJVLFLoN4bg8hApjcLxXGiNn7MzO1kLBuueMqZrI6KPtgkgHkojQl1WFRAmK2oBfE2PZOG1PNHNPmwrDaz6d9NQrSSR3gKESaDGFe4b61VF%2F7Pl4C8UkqquQIGyGFxexv14aPOsVc2RVEJTOs9bLgPzIBCD%2BQpORgD%2Fw5nA%2BvBmj3N6QktDoeGbZW6fLudKZYAg0gwb8uya72fWzhS2YzGZaQwuDNGVyL95EecBKCB8jYZbF33JsZXH3CdiVplqlTS0yrxwDObgYdnNGl1dRD5GMdMNwS8BU%2Flagvd9ItHlGV1F7RIfi5ROCPqotIOAri77OUEfWVFH2Vv1o9f7EjR4bQ6UJNGRucoHv%2FkCO6oTvwEw7N3gyQY6pgGQaPaHioAUTpP27UjiCIOt6xzdOcJW6maMrsJKWtQG6extypdAr61XBg9SXqwfLKD%2B%2FjoEn7EimacqxPkhiszcorTFEEyoZ5iSCI%2FdSL%2BM0itvnQSt21ew7Z9YxWsuLxd1AYfupfKslavIay8SLtCG%2B6RTVq%2FbiczkjjZmpP6RlIkLuizsRq90FkSEI%2FKhMBAuR%2FOHvmM63y2iu9gCoFnSe7aWau2w&X-Amz-Signature=71ab5d32c504ea109a2551496b617edc787b4ad67794731b26305f7477ee4dbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

