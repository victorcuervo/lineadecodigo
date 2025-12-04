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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AG4RJHT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjQxq%2B16jHNdcn0Q1jQ8rtym7ruJK1qhZtSBy7u0yu6AiA3zbGxMiJSLGGh2AaFWhXoj752jUrhbsaCwLadIID9lSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMF3O89JyeFo79zyf5KtwDm7nyV6zphcVt54s1zrAFMi58HrFUu6eogaPm2c5ZDS3B2TtdGo%2Fknl9e99N0U4%2Bmuu%2FwbzB8hRdfevAm5iyf%2BVgBLxmLFUWyudr1%2BgLw6SUleuIUCltlK%2BV0uEPZ7H6kQbE%2FFGzxvJCaqT05FqAp9O%2BOma8Ab9tCtqHHydxXMR28dJ2%2FQIOGO6YT3N3iQS1TFxLK99Pha8t7h%2FGvqgLGQ4NqzCeN5ABMIfGNPPRxPwZg1gMFGkMHn3TsKresx2rrGuFTutfHYxmxyZxqEY7j6indmwi6dkh2m1tZrtNVzzgOt%2FfgaObRe05bGfMOo0MEGD7coqsR4v3cLXOPdxbawcq%2BDu4P1CNFoqsOEz9g0S1aRKMvG%2FLEfCDK7TvgttG6LZI9U49Yik7OKASKU5VKHbjURHi951cLgwQPtS5oJZNvBB9PkkGp05NuaD8BITz794i%2FxX8yr2UTsvTooLN8hoyOvcbKgobue2av1EYNEt4bIm0ZQqXGO2bz4LPqtBm80k%2FpNA4g%2BMwjqqwobAd%2FjeK1SYmQokKIeet5z8K6OZ2I6rTnCPAnf7oG8XgU3%2FtbzIjZicwHFtuGcixJBhvCCC8Xq3fuwJKsaJ8j3XJZzA%2Ft%2Fy2Awxw9%2FK%2FARrcw1YzIyQY6pgG7NGShKSAGIOh069Y5u%2BIaDVku5hd9SfkVWdfgJS8cWn1p5N9DrlddHMfJAsnSyt%2F4Sgf28AEp0rKehZ6%2BJYa2Tw9Xg4ch0ZErdBsP6pkykuH8C%2BJUIOSFkZFcS6FYOnOCNJGVh23xiscTATFhDSBV1le0HlC0erEfYMMIQHBOgUnYSIdM6A%2F%2F01T7xSXTbYcTYRGg2JdJ%2B10Kjd8zfSEKeVVg9lFj&X-Amz-Signature=674dcf0bf339bfc151ed17235f550548bf5d928165d7ffde6c4a523472e6cb3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

