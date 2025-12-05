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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGONAL35%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBMq%2BUjZoK5gvN8AXUGPOdD7TScGTC1%2FMEqeSsrvF9CAiAXRclFv96%2FRpPvIrqyOVZVZlAvsaRRmnhuGXtCgUHB%2Byr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMuelwxv2x2kwzZPtSKtwDIfNZIUiQVw3XkIrPOlUyAgCH9Bbg3v2H0TiZJ1au1yqCn1xDwkrSZsNWbgmM1%2BLxIQc75fpXBSeCTK77J%2FgqE3LZRWiK1JqCR%2BWHXj%2Bq2xs9okWtSfyvwImCnWq%2FVR9DhLYQ3QyX2zWZRfhZJBr8dHwo8WltCIe5E6NHRzIp6CZwmfCvbxz5ImmyTla6G%2BcpVwMbrlSHfM7NjxEgeago5h7ODjbr4I%2BW2fmBFVU7Hd1sJZycHkL7DPXO0wLnI2bMJVOMZDLC9B8D0r%2FWkhhg1hdadwe%2FSV01kdVAjUA%2FMhRvfgO47zchzMRCQp8KUD7QVXa4DmDO3YHNjOZ07laRDvPcuCXYO5pnZegSWRfboILvjvMjbSGFuPs3kT5hhPsZwOLsWJqA3FNowCWsU6fZ7iD1P02BHA0MJC1OAcDRWOOZ%2BVypgeKtO4H%2B62LkLX9hU4mT3JedQ7TlW9nSN%2FKS4vKyuR1nUl7Cai0cmqyS57ZwdDqL64mEl12ofql3ItHi7fD5xP7o9yojPZ%2Bbx9JM%2BeB3fRZbEKCgB2Mdw0x%2BTQb%2BL%2Ffrf%2FbnAuV1prMqE8eQ2Y6otv9Zb9yt68QSIRIy2QeQQOGBNMCa4kVxNV9c6w1IAfv7MsRfkiEfHEUwr9DKyQY6pgHmDylw6QM1gJXgMAya91fi5%2BbwiMMO4%2Bc0XZGU7wkaLoYiGQd5SmQtbN%2B21GpdMA5qtogMIxTFhs6QljeeAH3NIfC80fpl6%2B2p5gGTLUVtlbeELa9n01xdt3xgEYLuyLf4zejrEVq9m7SohIKcvMF5gsVsPSk0%2Bl%2Br97xDCCmbjdP3zDNr5a9K6vj6r6aIp0acmd8F0d0c5pyWLHK7l4Ud5TLqrUAL&X-Amz-Signature=b0835a78a9f629101c72e62cee4e08474ad7a234978abb42fceea3e18423d154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

