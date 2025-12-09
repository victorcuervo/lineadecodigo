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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674ITUFPC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T160000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCSSksMWaoroiVOJVdk4vg2J1Kz5dARNiO7fdEI49vegIgfFJDscH1%2FjLfIa5oewGJ4vYpjREGMROXHRp9eIFfpMAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHO8LSTimqXfpcDcHircA981oMnO1u%2FWGeWsXX6Thu8Uifq%2BhVBl16dGM2WPE%2Fq%2BwJpPoQFaoJGRiUkqjIR4yeBtNzuGf2whPKqbLwOiXCWMVgDQqE51Yu3ysSqckuc1p6%2BdydT83IJywkIzn%2B4aI8eZTnrPVsQJ1FedA7moqEkR%2Bw%2FNxRVDZSlJipmMdYZpJwhHkWnjhAxYwr0v%2FQHP3CrRrJjnV8x%2FumGof9twi5D0HHt66TNThJcs5cz6h3cPo%2FzgMJq2XCrwexiBsKLLbINEzujuzeOD1nwEvgw2WwoDOfAAhCIyy8xqzldkEDPLzYtcidlsVKXg5LCgT%2FL78OMxBMt2iQaYn4xyK8Nlz04TL7CugRNkRPxKVcuoVqK1IMQxPhF%2FIRi%2FntC%2BwmdXvgdyu7uVHB5vEvdMGDbgErIQVp3mdHD8vpJR%2BI4KyEgOaN41OjdmTRJWdIB05sY%2By56CJ0FSJAFktpdzIIHOp7Q9MIcdq04o9QetjdVyjH7BP06u2sziQjGcuBj1bB98pY9tTmSq93A%2BWVOlopIoZUaFu0vE%2B7oyj7HcicmdCy6nplSwplLBjgs4JNcsEgSVeXC5zUIlTVb6cf8%2B%2FdGtnElHv%2F8nYOujQ9CCrVKHwLb7WfzbOX8LiQKajur0MO7c4MkGOqUBg5LY%2F2Gefw3dVzc6RbnLnbnvAaqflOquvegx2wayJK5ymPZjsELCkvungIPzwrdL7i12P30LmHIsseEZiH419cVZEPW2NLSblEh71qAHemvnF26OKyy6Z2W1JSTTA%2F7sIt8P3QiGxXiRqPBdFNLgAYI2V1S2pSyTCf6taSBo%2BEXj2GTvNowDTnDraTJxmcUMGCP5v%2FdGCUxR8F7rGNCCbw9gS8jV&X-Amz-Signature=63bc97691ccac0bb82491fedca6e8839cdc00ac88c97cc14da23667e558634b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

