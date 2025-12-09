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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CWDYOBQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T231357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGefQlYEHh1rj0wzUZMFu7BkCOWv8alCXj4yz94akS1AiEAvfwntcmr4hhza7VxA4Sz6ebjFFM3f4b3hMkyhEyxy8wqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyJztxyNjxTLB28OCrcA1uuSbqHptnaDge%2B82WN5gMS4xj3YJRkZ6hJiqA4ivt%2F6QaUd6vbCKKwJDUTWpY%2FAitI%2FAgR3kGwCPNwioxMNW8VD1BNROauzv7INZIktuBqa6pS51Wt%2FKOhIGa5W6Vpg1bZuq3J4JQH3M0Z%2BNOBUIa85LNQ07GupflaC9gFslCnzDBV4Hc29U9Ion9369KENSQU9lRMBj%2Ff4npJ30Cc%2BIV%2BRBbwAtSoXYiiNsm0IUp3HmMhGBngq9%2FP%2BztHQir9xgNlcm76GNtAKoWj1hPp6pnzCa69B%2B04zzJqJViozdfiAHKt1pYzoqxRNaHpJ6zjK1ERtrcmRrINZu0yc2EKdvDwM2CxL9vKVKNMoshmtg0QakaO0ZUGCwNmJ7robTFDYDcUqYavPYzU9LqOZKGlO5oq0Wt01jYlfXts%2FULr62%2BQ2WA3RKiZiMJrqhxadBItq94jj%2B0vFhuFnbhW%2FF2hABpe92YtxUNnNbPPxv0%2FQmCnOfb1SD%2FEOwR49rpysASBO0rT0DxgeL586EuAv%2F5O5%2FS410HVnErXaEkD9NEIpH1vnOF4YvK%2BIvZuWi1SC4dJPRBOMXozEk8f63wZO8k%2B1qwSZLO13txLPs%2B%2B%2Bhh01lp9tLhmRZpvFYFALddAMJPE4skGOqUBh2KrBjaI7TF4Ui7uq5FS7RgUbOYjEfAw0RmakhrGmzSwXokgO9j3w5KxdiLFuajfI%2F7yr1hAcQ4lmPEwC0qtEZxMT8LnKGSYhfgA5aSePqLHDX89k4D7cmk6rRwiSMVCp14Ewd9CiFbGJYtG%2FFcCUi4iWwQR6bqdBZErc33iwYZ7hjhRJM7TscfC5WShuAEcFMo3yJGoDiGu3K65Zh4ZynR52sov&X-Amz-Signature=519cb8f19db560ac824b638c163d24a91250eae6674567fdaec87ff8657fb195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

