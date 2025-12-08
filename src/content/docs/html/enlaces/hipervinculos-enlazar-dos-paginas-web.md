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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4ZD4RS3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7%2FOGRvgpUim39xSjtiCyS5Og5Asy25qnvVMLq4Tu7YAiA%2B4lyzMMD0B%2Bb4T9klGs4PaxrzGYyDhEZC0TfXHd%2FTsiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWrgpywG%2FNeGdf9iAKtwDBGAxTzE7Gh%2Fn4%2BLgT4R8WAm%2FI42wKiY4%2FIuLATuzYGcex9d9pIlTcmgKKVTb2%2B%2BsxPsyRobwGwofZHVOl2n7X0j%2BX3WVIGcopcMF%2FTlx%2FqwvsouMg37yMjMYs%2FzxPXidIVQy%2B97girg6YmrKiXEnDl7GndERpcsf5moeS9g1%2B4WOeDvrrUufsJnVhrstnVZ50XloxAal4AXAp4HXHS01GxxKoMZXkYGxwg3k%2BIWsOy6i0moiKOM%2FTG%2FHrqKf3GqzCY28Y40h7eFhMrt9Krn9tbPo%2FzLb351Ic4%2FT%2FachNgBZURwdv7DXozjFc2qLlNbsQQcpSAa1n0aRm3DO2GRNw3B4reTbDVRv54qWms7hLM0am1bY8qPWyY6i8Y5c%2BAlZ6MIdvCm3osqCaPW2f4%2Fk%2FqgS5%2BlP43aLmZaB%2BrROCSufRcWRHaBG6ukO%2FWZwSSkOPh1IfHGi%2Fjz64YJOkNDYkeV33scKPK1fR2%2FXSl0%2BOhjgdy2Y16IN5oaX2lB4ZhhzOyxtwyMry%2Bdv8pnYIpO64hy6zTz4iwg7QXpjOCS9hhVORY%2BnxLeIEz1vF2tWXpG35bX6OleUw4u7o%2Balf6m%2FJkHcrsqdJ%2Fd6JLZFUsw%2FIfw3jcE6EOyMWmWQ2WUw9%2FPayQY6pgGEwckokMzWdb7Pzq9QorQx8dKJQXVmtrJpLVJ2iR1MIZvpQu%2F9gaoHChaJ9G3Fo3I8kpzKJ66AICygVjiCe6%2BIF903rTk5ZT%2FkHQoumevlvUoCXxg0fpoZ8axHs0uR2MzkRprBzjLTM5nsbg3kcwdxL66leeX8SMC4UT%2Bj%2BpfwbYLD8W95XcG%2Bp%2FXSXJUaJ4%2FPb1WuzlhzqD%2B7uzAOrEpbz6cMAqrt&X-Amz-Signature=b7c2a0d798af69089e85124e2ca3d99a957c5eb35566a8acd57954379a88e90b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

