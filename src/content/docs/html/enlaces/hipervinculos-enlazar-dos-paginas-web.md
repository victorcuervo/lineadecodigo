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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBATHNLI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIB0WMCeTa569shgxAHLEIJY2B4ohcQrgZ04eCN9YoIYLAiEAg%2B5ff6jqXeTpdqxZ3l7tzD6BkXBtFpXmoIYU5pu5ln0q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBDwu%2BanpCMvniij8yrcA4w58nFUh3dlFTMQO9teuouue8ZVYgMQecxov5Y9%2Fek%2ByDGSzfi3baw%2F4ZECAqOX1fnKMlruprPEiJkXXgYt9EqmXN59esQH3pO%2BX8tNn5JVLshxio2wkdQpqKn3ZkzU4WTEAxwPCh6UOlKP0uqyXhak6H8XmInSB1Ls0ZZBlqmvdsf1s5Kt7L6M2Q1fgnoTRyLcrKRx3ECUQX1ZXycWFojKXR9zTUrcrTn2qtJMlcLfZvO6v8m4%2B7dM8iSAEtCdnzt6bKt%2FOk0yJ5VZrkanOKdlQ4xQzVOShq%2BZ1zfuEuEaLIDZ%2Bsxl7jejWqip1fZSKLra61Xfnk0pO9Dy0U9wBvEqjBsNbhcxkULmSByOEZQ2NIuS9H8BelZ9NsqNjucBExQDEwPQWNIAQY2FhM0Gy%2F2X1GEhbX9svrrY5F7Qc%2FTGoYEQxpdKgz4r%2FkxG93GSgVcjOHUKn5QYlkTZ519jKBR8fScCERNRqrriIguRC3UEwSNtAHse8lmRGNawJ2rpidEOID0lvmW04kWltR1YMdqyfv4G%2BCrwj7E2zsuxHxBweJl80OjXqETZc%2BGZ7aFST8YPvyyY7PrfkNJ7Qtx1LHVc0EtPbAa8B3Syj71QRt7EA%2BjExRgFjUZACeZ5MNi%2BxskGOqUBsqOvaiJx7i5tj2vQxnVO61vlkvEH%2FScahEqPaeD9K%2BXUSLzgRTsIuWFQMtknRzOEJ6t0ifONPtC0ErQNQbP9Iy7J00MFfVaaQ7aWs70kuF7gsqrHuDw%2BAnyVXsFGc3oGzv0hq8WHQGj5h5K2GE4eUYUmu5DsPkq860PIAgAbs4LSuzrf3cw%2BDkqiM0YdJsnsVlLCuarguoSAItGt81X5D%2BPva9qd&X-Amz-Signature=9da574fee9dcab907c44fd3ccbd1710144a6c62b96d5b4e6979f9dca3b08c975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

