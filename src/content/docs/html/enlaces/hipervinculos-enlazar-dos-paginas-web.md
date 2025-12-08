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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7IUN2P5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T134000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL0gDDSGs%2B%2BRkcl2O%2B2Ps%2FN64URKbBMzyyXJSmM8kS1gIhAPWMlSpmZR79TWsY7MnnQs2wMwF0NWR%2B0CyBRCcduXwyKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJ1U1ntZ539%2FHyA4Qq3AOhKzo2s9qpcWFtvQFodeUsAdyBV3mdPFEqw2MeTkkSaqrVNg50gFRUdbr68%2FZC0iBa%2B%2FeZm7YGRNDbypQwYQz5B%2FN1VruW4zoTmk5nwNpDZq4%2FO3RClHsi%2B7UyTL0Szqzo3UG1fQlmRRlZIhJ0ouREedDHbMA3Qtzelys4z46ojjsuSazpu%2FndUUHL3aTRX8w%2Bhv%2BkmHTamNef3%2FVdpO%2FY94om8g35t0p7aeN%2FxFFSaDLFQQSvKzsfKkPs5rXva9ZYpqdVG2eZEQ%2FVWa8D4nWlTR%2B47Jj%2FLptATSf2mPPjXw2sv95GGF9HzOs%2FgtKFeQOiyHMKXe6isUk1iKkxhPMEOISFgGK%2Fvnpvc%2BVCfsCxRh1oZ%2FZYnWiZkGpgAX1cguGHQPdft725sjNmcLaiZ1TioegLqZ2EU%2Fi1TweRNoG4az2B10cvFlbcjcUTLZ6ImdUPa7YX01HPGth%2FlqgqWl1qnmAeiMt8nbIsYpdhNt%2FWZVyt2YzqYoADnUHiVsGWRCrLwdI0D8tRJ6b34ME10RfRfsIfEQ1f%2F6ywRB8QCOVeqyCgeJK9J50RV%2Fa3jJDO8we3z48a1auHRsXPbM%2FqX7MrcEUjX2%2FqrKd2cF6pBzGYbNXXrpD%2Bbo7jjMADsTDcj9vJBjqkAfCOiCmmFNhGzhR5B6Oe038ls3EhtaKjxcoFUoQh02y6zCnaLOvClMqnn9EMIuK2eJrSSySP8C%2F6HrdNDwPMvqzuR4ESKBVJCt7ddSL0uKPXSq1HIJFELGoQJFlZuUTScoFnadssHAlqf0xJzBqcPHtaDOX%2Fm5daHtEAjwFi6lGd8FN8WC46jvkrovM7wCqXJz5tAv6VP9eOVgG3y0gNovDEa8qG&X-Amz-Signature=1877f9374646ee6bbe60c02fc0f4d210e1cad2fb67a9a681efa4c980200773eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

