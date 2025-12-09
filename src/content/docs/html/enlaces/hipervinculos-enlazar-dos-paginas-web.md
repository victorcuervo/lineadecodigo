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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRLJW45%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0GMVT4HdkpOSa%2F35rsv7uC8spSt70RqZORyv%2FB8jpIAiA1uuFvzxmaOlFWFdkDqaNBujMcwq%2FgcMYnuWOpi04BzyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7EMkDHexVFhtdztjKtwD0wHXHHmNNxSq1wiA7lJ8XDNLT0GI3ePasiiCMLQvllYV7cc%2F78%2BfqvDypII2vPoE089%2FBVKYvvE0NgnUKzY73NH1al144yIVQO%2BRdquZA1M9yKVuCpOkQh%2B1AoJ2XP5gxI%2BQ7uJpd4ghkl3LaxLsalnUEjwdlv4WTeA2w9sPL48CVb9CpFpwqT7AfR3tPHsPlWciNVLkheZikhgf96Ubf1%2BUIbp%2Bd9HM7QKOpD8mNit7YHhRBDepFs%2FuujJaZ0I33G4vqbCDR36l3IqxHi54b%2BT6wzYPJTjfTTyc6If6%2Bl%2FPPGkNqUkCpELQsBPrWxSNC%2B4yQ5EybnsCvfTi9lFSzQ6o1Su2RlPb9NIihynjsjA28QDbJB0o8HOYNBM9X29MYaluxvk5pBvGvPyKrFh6Jri%2Fpq63m0ZpPK9OCj%2BxH7pyqxBCQDncFYtNRO8aSu1fvW4GeYHsTRaNaTCbLV4XkvVYcjFMWkHAGIBrlc0bZMpp0I3Gy2ydDXURS%2Fj1yrn%2BbdVoYdII%2BIcH5nJhHBInvy%2F5gpWsE6sCcvL%2BZPfkXDiWBNrs5iFwNMbYX9rZ%2Bk5Oai7fyOGwkF1FWiENEdDiFlyVcHwdp7MtF2%2B%2BOKn1Icrd8BwyP6mdIykabmswtcTfyQY6pgFUWmqITC07S9KhFScl1dYDBOTlSeMWRPf0Euwmd7QPR8UCZvj97i30EizMMU8RYTs8VMRdL0LAFrVMvdhjnZgzq7B4y7sBek2ZUc4uXiTJpLWzhx4oUQ%2BX6U%2FKVGk9ixNXcJYHoM03ivChkUdwVeZIV2xgWGxURUZ1O0XiqfKMb37Twaw12c0w68ClPa%2Fv0UCT2jevjIGc9mSnZF3xsgqsQnfKazqI&X-Amz-Signature=c08db6e3ff01d9a72b83cebbd79480c65487a00b728bbafda7b7692eb28388da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

