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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IMSVTEU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9YDb8XMTDXA%2F9B%2FHe2ozcX4BVbcZt9c08rM1r4HSaLwIgUlHga8nwyX%2BpRypISNpnuQr2OwsyQ9%2FG6U3NTRTFL7Aq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOzCNe%2BN66H76HEs3yrcAyCR5eX8%2Fp8vX5q5ANucz8tIJaoRt2WQwdr3Vi3TyLSG%2Fv72G2EDkiZA9iqIwM7zkunmVs8HJqKpvT0mNcByKSfQ%2B6bAAQVE1qhuysSRmVtWKdYGDjZU5fDnro8PvQZaLg0dxhpLC3ZU6EiCNL4Bl%2FPJ5U%2Bmp7S7ntIzdXvnTxLipCVyEtgPghrZkIOuo%2FArA9Tjytj55PWKtphMEcYBcFk0w4amIskmbjSe9mCoOa8MxoOkmugmw6c%2BhqrxfuF7Kb0L2QNFhiOY5sVlkXTzZsVqFk%2BsRQJc69Ys3D0JFPSJ8aPrmpz2qFe4R%2BN1Ir%2Flm87JizNowMS6w9bvlohayZoPiMXR6qEjJvIqp3M4ak2%2B380MMomoyzt5WGiKjV%2BJBAGj7T%2F6ZR2lFO7%2FV%2FR3ZoN9ovGAMBISFdXo%2Fn6x4Q5vFJ8tS7tPrNk3DaCa12gXPBW1seap35XMs0oK33LN2BZKITWq7LfhLcsNN6dfJaJkECqqhWsFFIIO%2Bn%2Blxc1FTxX7PTyayJpjEHzQJCSlM7cfk77rJM9STMQNrnwiPzIU5qnLxj0AqMP3vz9rLrLngXo%2FVYm4CKr7lnVEQfQBJowLZbyiGMjeTr4kmn4IkXPT9WuyThprma5TNMuRMJ7ty8kGOqUBQyu0hqVAiG30WeFuUDVw1RD2izzYo2cZyYnsRUcSHt9GzRtFLv188jjFLPUqSFoHXi8gN%2BDJBHN6xFuKTDP%2F7YSSGTe9pW%2FTZkhmXSizyf5XIlCALYzvkZ7aTWNZgFjNHZU2gvkoy0etjlBGso5PjuoEdVAx5aqJ79Sgh74UN5rSIC%2FjbzcByMBIQxLrB8%2BWiYeLto3jz6LmTTmq2hGwsAeBtatl&X-Amz-Signature=42a3c371ed7097f4f5de67b80e600410e67d2c2fd7c64c19bb943ff7d79db964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

