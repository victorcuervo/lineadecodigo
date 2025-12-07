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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632X5LK2Q%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoxmk4mnF2qwwR3kOTnk2QhwtUhVAOSf1EtavS0Zd8JAIgLkSY6kPjBwfJcXiuWO59v4u4zdxePp9ZyDgjjTBVyYIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvAXHdr59rjNk0hGCrcAw10ED6ZK6vx%2FOzB%2FRCfIF4KG0urSrXnu9HLxYbGGWbn53MLWV9P091BulXLIHwTkO66%2FpPJSx0d42qFSXKyKva0BGXgsfItH7jciBQWmBY6q1ioBN6PNvqJHFralOh6v%2Fyw%2Bq0fbdWPD02pX05nncgBypQMMdiqbhQfEtynxR0kRmGEJh0l2BSRjGcSFtM1XAiCvvAspFAoMI0dMMzQw4gnHMnmDtXOFOEzVfdiLHTH4ugMWHUtLcqj3BfVVzduqvyWi%2BEj6W26JhkbVQuuPS4XX0n8blaG8BBPAFfs8kg69O7tEyfcaDvdxDehD1DZ2UH9%2BpNxdGjHqbZPO1wFOfkIOfAKPHopjnzKmxRDCi7BzT6cyTUL5q8t66qjA1TQdNBYRcBMFgI%2FXqJzgu%2BdUzDAvi4BDOG0MROs2%2BfqsunJ3CId46MEKoC%2B8%2FlLxe6Fd%2F9QBNLGPaOPDJYFOBviz0SEOQkJvCsWdhjzIMKngy5fPPnBCPKGTuDFBy9YYakT6KVw2n5syhULF0LcsAEzrcrhfM%2BbmdWOqWiEYk3KD6ed8%2FMYGmEd9yDZKE0zodVNbo3UTgPs03B2lebHPSZtftBr7hHdbKg8xNwiU3g7CdaRJeQCtH971D1l8REyMPPH18kGOqUBQ14ZA3d7uk4lOtuflw3Czk7zedKEFpnmqA3fEE58TT67ehRgnMKXRfweDbXvBYjDNRx2ioJqSsfSo9xbmq1Uzlv8vA9CkyHT1nt%2FFoHugEPK1X521WHjEeD7%2BgYfoV8EzcHAjhF%2FwSrPVC%2BAVGekaZR4zSw2zsMKfY8AxZM9YU8%2F8eyqsMhE1sxLSxZuzMg8kZ7dlKX2gpnV4RJxSXISf3FzuBLa&X-Amz-Signature=23101da2fca5f79afdf2dc8fac01f76f3ac5baadfdc412b430a0aac92e7d4d65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

