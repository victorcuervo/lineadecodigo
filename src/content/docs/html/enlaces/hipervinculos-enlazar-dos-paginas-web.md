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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466443RZL24%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T161833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3LucNcAdLCukHnuXeSf8sdoePabpQB8LHmz0QUwNHgAiAvN7foRhB%2Bht5UHyeLxuBU7QHiPCe0e7XjLq4%2FJ4bwlSqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIiRclDtvIzRSWR0gKtwD82Lk1koo5DSfJk37vu5hhgLbyOVbQlIOUVDhBT%2FQqxL3Pm4eK2jabDbdY9fDsZgsfoAT0UPSgXnuYe0PQ9mTx3bI3aTeTSXXVSOx1kX7QF%2BbrE9WjXlqH4Kc%2BALpcLaddvzdeLXD1foD04xdZLxOTUUjgn62QjOnahP%2FiaiNXU2hGNA6%2BXbJZF%2BHqsnSGMWs%2Bz0UWE1cYdrUgrFE97wY9WFCKUEe1%2Flgyr%2BcaYh57oCN0gJrv5m9A06Lsu%2FMIK4Ert9N%2BUPQQAhfJQpGuINSZnAZjt0f0wccj4Zu5ZAdAz9h5Y3l%2BQO%2F%2FsPNoGFVZ34DuluVZHS1q%2BuDwGsyMli12QFan%2FVdGdlU4HAgmGT19tX1qdk27lXrJC3W0DA8ijsfmzR32jEvWzu%2BAAxFIajzmPhr4dbL5TiR1eJwRJPQ5Owpk0YdV%2BUgxGp0NwkJHLkHpU4YdpnH9VLRbhXOLCA%2B3G0nbdonyGVVyRhlDLnwGRS6XB4tStHW4bAt2xKzZaF%2FlJLI20q4Eo8ig882RpUZF3%2B4i9kAishKfDzBbGse93v7RFqROFK7eq2j8iyIV1rjRqRyJVjHG7H6v7xIQXcAYHYHNTuJHqWvXCt6IGezFlgjp5CIP1pDh3TYaWowht7gyQY6pgFqQzUGchhrG%2F1jHdjMw8yJ%2FAFlzITYOpGYWujCd4B9%2BSko7WFxrsMfgqKcZsyLbO20%2BVAARmvJ7b8NbvJ1qpHpXupeOdt5OzhEEydER%2FUGGv5JaMRjAAUs6rMIYyAPVfbNMiwSew0q4YGRHvj2Lnm7NtIIRCyE%2FGDULG10IeQgwhFc67Cn9NbY%2FpW2bm4hK%2FQhUxNMVwXQSm4gd32GSnUeyrs5Q4YW&X-Amz-Signature=64d4c21a393c0cd72fb8186e01585028bd069c63b74c784d663a8864ec190340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

