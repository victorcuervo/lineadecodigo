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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QI2Q42N%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyu4lzseheYC7En88TEdk%2FQX5ber2K2C5%2BMaZRg7YWvAiBw4r%2FeGKJ6XAe9gwMZ8fq04lf4mRb%2BIvn9D7l%2FDN2FzSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMPPNMKLAnHAwTN6dEKtwDI1KOgfSbkuz8F7cfybt3k7BFeUgTf5YICHiP4XQGrbLO2quAmiWc9c%2Ft23cAD6Vwsd0dS67GGPdZ%2FdEdp7bCu%2FaQWiX7KP7IZj5gLtKrY84MMhYQotiSejhuhaYZcbRXZ7Q22ugoKxRaNc527YwBakrtdSx8A2908xyoQJI%2FHnHsBNE3IutrAtno0Gl%2FHY1VB%2BDhWQg2jXEEtWTi0SuIbgSjayQVDx%2FXespiKP5kXbtB%2BLqvC70sEceYbNPn0reMyPu9vfpDy%2FzMR1eUUpDoE7Wzgs2vRVHHs96MJFpLEiUu4154TmXy4HGZf17WksQK1VRpQgmBD7N7MgVZb6QenfElFTK4whjSUFrBUJT0P5ljb0EY%2FqxlCzf%2BYhL58ujpe7jVDKYYbHqWjEbYzel%2BuKVpF71DzqhJ3mLggltclqCNSqVMEM5FbHsWfkPKOquIWzfj5f6wO51kFBG5146KV7xhmVYyRaibRLwWkaNB9AwT4b0%2BZJcY0Le0ves%2Forr6WgtUOiDTtOUgDMc%2FMfgFr2EBQ%2FOleGWSqSWqTJsbYbUxMf0IiY3NTM%2BS8tAa3B70roYHTDNI1QSC1fEnnxUxjRIhOjeiBEfi7Z07D9KZGnoQH2q9jYYFGAM7HN0ww97OyQY6pgErSe1GJF1LwaSh0ED2vWYK9cbeeoV2RycIDI1WcmOvoDbiTCew8Tq2wCEXFMXno2iF80zYYSrddijrhlS%2BOcrbYs4HMZdKFh8qjPlc5aYBmAIwZl7K5pCNS5EZeXzcDmJLtK1Qgj20vG92rYjXn%2BNiGSg3j4pRhaP2oeHvUF9gNdVTDME8VYlzuvz065i2uxH7Y0OJMnmhwQTGf8juw%2FCSCM9pSULL&X-Amz-Signature=ca5322a05598cc580b01a0f711c88290f75ebb8fd7ab475c23f252097773223c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

