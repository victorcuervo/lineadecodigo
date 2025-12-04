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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YLQRWJG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIA6T6%2FeNVA5fvh9JJDhA43ZAf55Nib6gi74axnK7sXxTAiAeb0eiURp7dIx9%2BCbJ2cKdJPLd%2Fo19%2FGapQyIlPhGulSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMf9HFcycJiptzbI5pKtwDoh5D%2F%2B1g%2BojZHVw4NXn3nWV1rFsR2GuulkoPw7NwKeiexkt2lr7hcr9QZrEMLbjCqZjqj2og5jq%2FjL1uC0KPiwP9vFABfCI%2BXLHab26VTdEelLMBc%2BTaD1Fzd5s3YUuZlzBtYmEWID7Stuaa9yNFZ9xBjEprrXtTRQMtQObFnKKZLzmLiTINoW6dQfx8VzLmEqQ1RCo2XyQ%2BhFtDp4m75lyY8xgalrkjNEOWV6k2BPcZNlnIJJ0OT5PS61sHb%2FKNpKhzpAfpExwF4Qog6AfAVUB1BT%2B7XlGO6LyYD8oVQ9xNiZxMU3ubJ61dyytatXQzA8bLd7EdVj%2F%2BgFh2tc9GGBbEgkznSg6D8duRb7uOUxhFmIDvAvgxWZpwqXiLzURDMgu3DvzTyF%2F9MWwn%2FLjnLWj1F8nCBRHUXxPzYAyfa3jjIzG26TY3yLLz5sPtQWqsiIm4AZIx6Z8h40SiyeJz2YYVQcsZOfgju6VcnDpR2Ubdz%2FFh1EMM%2Bi1x6d2uf2Op4Pbl5vmOgpfBPvw7lk5XNlNQpc3j8qGKYw8%2BEbrYBUBUXsVBzzyinCtGJnpMMW7fzE4xWxoLIJCgAZ0ANUfzgjCzur62GX8RSwh2okoKZuzuD3T7uTsC2EgWQqowopDEyQY6pgGFH86PYNGkiR5BTlLydN6YV2w%2BohfxTMfuSGTREmpLlQ%2BqHTJXRN33I4Baxvt4rbnEVDIT%2F3c86Vs0%2Bce08TUeTl8TXWAe%2BnFaHBIKywXVI0nvbBXpMqLrJVMXIOUVd7geQjZ8UgqIRHyT%2FS1Ya2BSFrITpFjg40eRuMNML3ZSwv3uKNiUgmUncvzN%2BU%2BtElKltgvPh0W4OIQce2tE80knuSUqY%2FTt&X-Amz-Signature=2f2e157c25d314c4c686ac7310ae0b43429fbae6243dea53b987a95d8c2fb0ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

