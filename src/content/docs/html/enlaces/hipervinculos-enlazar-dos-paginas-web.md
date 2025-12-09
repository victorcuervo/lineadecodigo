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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7CTLXD5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T202609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZPYdQYnLvedy5Jr5XMb9oNO%2FL5rgqt3HBTJIyt2%2FXxAiAK%2B%2BkBICXUcN0YkxyvrJvV0Fb7X4ib3SQocHa6tRE96iqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0oPw6MBkuONxqDzlKtwDFBjIQnk%2FanVPan75R12Aieefa2cD6GNQk%2BbXZc9nAMKWb87MNFUumocXTk1CSL9ozMFI9X0BXpLg9qdYdj%2BIyrVo8Yqrdf56WDO7ZcwIucuaX6FQC24%2BYOYYsOz0YmJWhtG9E6jmfZT3Cs4nuIFRE%2F%2BMTCzXmm7ttIGKwr3b9BG4kaPO4c9GQIpXI5%2BZv5M2nxkTrb7uW%2FCnmQ%2BJVpXSqWLX3QFREUp20oa%2BI%2FT8A0R%2Bma0jP6y8g1jiSrH6cH%2BA0R5JbruvQ3sKo6p6FqOc0KParyTJs3q3bkzW4QbFrWoPLLQ06cfE7P2fiiCUhQtsJnCmEX2FbIhfj69Vw0pY0GgjzXgGLETvS5OMlVf457bmgjYSbbIVa7OA%2FASMnp%2BXuhMBF%2BTvbnpRpo9isVhSreCGuC%2F%2BBs0bDMkWveIMZ8Zw%2B4Wy%2BfBR4stdB8lj7sREyi1f0scK%2FreKHfaQaSDBKfvZDcD7kKHTL6HdiriYsQdB7IrTCo91uyM%2FjbG2HYmp76vmD%2F24KpOdz3GgoQ2nN0L4Xt076qZ5X%2BKYnVcRsEGk6T9yNLjZr%2BYOqWR68gJLaSu%2B6pZeWL7A2tJ%2BK0ym%2BIdDfqoIAvtZ6McHKevlmvUrRo%2B9KErHOJv42zwwjf%2FhyQY6pgGffVCP6IOXOAiOHRUWjOE3cwWwM5MbDN6VZGzFDNmRU%2FNx5KMtx%2BMJR40WrjaxAdzdUMS8mDSCmf7Iq2pfyrOoMEXfD5LTuFmie68OrvRA1UkAYkB%2B%2Bodc7cfXRnsBkdGvI3UScKTrJcFUnoDNy9C759%2FAxZVm3EaXRihYmd5J8Zt5PXz6gHvWv6t6YdU%2BzOl71TUp%2B%2BpcZnI2n%2FGecPgmxQjb19eV&X-Amz-Signature=881bceb92178a018bbddd283da26546f9997615fc018684e672107a947fd5c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

