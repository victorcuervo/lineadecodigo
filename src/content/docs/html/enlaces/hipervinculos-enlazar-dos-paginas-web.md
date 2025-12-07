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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VIEGWHP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9A%2FwKhhO4xUzoQkt8YQ8NPqDwoJ9aGnJC9Ph%2F9Z6RLwIgBjfeJhNdEYvpqgT%2F%2B3zy6mO0%2Fv5iHs1rN%2Fp8mufokGMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjGHWXawdjhfclScSrcA3%2F6PGWQQVrP4%2Bc1cmKnUdmWGUYh1qax%2Fqra%2F%2FJiX1uIJ15xeFCr26gT0saKM7Drp8hpIZxaP8syeQHFL4gNt%2BmIa2ibEcZu5ZDTaHGX6zbxA5eMSuUz%2Fp2qhTML6e3Z%2Biofzl0iAqnhVJHa2DgN92nvBl1e37QooTpXOivxOoG5aHVwjv3PEUkCeKqFItJE3meG3dytXeMQY0Npi3S2CrnCpxg7qjIHfvhmEOzwbNXFMSYqbsf7ZYmFs7k9C6qS8763nqFbnKToAXbDcBOHtYlXiHETPHXFeMkGPRJXej3Zg0R3aun0%2FHIJZN8tzFeezc8GRMvTtriHeAyd4TO8SNz6JvDr41eKpf0H4zWLut6Z8nynyDwridwCTiUv3U5DJjukV3Y9bXt0%2FrWuY2virvjljXlr7l92vvt42xLLHC4I7hkDSF4b0OnHZMOtZaEuMt0yB3c%2FghHT92RhnSKA5BAD4%2FcDwEO8tvkRqUJJYUFk6BvDZHmBTZMXlEkL5KkCuVyeDLp5zsL%2Fq6PTetzC8zoy1GgvbinHqUw1rajxIz1AKMYcwM7pu3YuKM1DVG17RX22dYA1JJTcb2fizrwF%2FYimmWF1TeJTFQRvXh%2BxFUkfEZgl8PvSEWvzd4KnMLqb1MkGOqUBEFaatGwrUfjAAU4%2FD01HpbQbvARbji5cf3lO1ihKyz5Icy%2BIOgI8tTVTOWGPjyz%2Fl29O8XnDBSw6WXickIDP3Sy7QUOSZfX1Z90ob4zRfiPpJj76JbM8Sm9WTZNNia39XSCKt0wwsI%2BewoH8TxVdnsNq6pFqEDePmCtbkyVdk40YhhkZvI9pHGI7D09LXLvz%2Bl8DtKHUy3FXaIVPJXZQhUhGCP4T&X-Amz-Signature=28dc437b4c43b4711b3b6276fbf6afc0cb5b120ebba6992221d4963a477a9822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

