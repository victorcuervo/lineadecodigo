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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOFHZ7RF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T124914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg%2FMpnzjgc48bhk4hK7c1pk0YCih2wVrnW3ARXJpS5FAiEAo6HFxzaA5Du4GX6n%2F5IuPS1bmgVnzoBnMV9pjRbxAGsq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOhJHhzOWe3rXhpmjircA0zLf0dTWKy90uIE5Wos02Pp48VGhczQgfpP8oUyi2OxlxHb1aXiA1ikBUqiKtlyokutmXcetER5Pf8IyhF5ks7QHjCQJwAthh5QJkEXApRwhu9qqw5Bt6EfPgxsGqUSHCS8HTUZ4Zirktg7mQbGnKfJJ8%2BiLU%2FX0bUfmuvOAPbM2z9m1pbteAGTG5JsdMD8gp7ttarR7COqcot2kWoP9pn%2BpMPo%2B3RTA3CrcflEhHcEcpXvTpMMsQwyKrsdX%2B1TkhYWiFcXbq3QVQg1CoyGaNBbipKiwqEA%2FBeeM0BkvUAtI1MKYaP2hTmhwKWT1KRNq29xQzGaY7PJLCi%2FKVAEes3J73AYi4bCuMJ40rKYUkxnKeyQxbSGDlqLrelsexeGQEWybaXMTbNJ3BHKGlk6Y2UEsU26oRfau9yJK1SusV%2F2%2FfCjBbZ2SjIM39tzl4%2FV7nMuHpYRSRXRDpVMWq9z31F3KdP6wmalrFmLB6dC%2BI5Ka1hqsKd0olVhDKe1HYziZaBWcvvwE6CxdQNi%2BVN4g3FPKiKq05zwj2QJXtSxNMMYY%2F2%2FoBLRkMJC5nKFgjq6r7LvFI1rEtCtObOoNPDqfKRH6jjgcoHDvTaobT%2FrH0Xm2kkpZX2x%2BymxRs3fMO%2FTyskGOqUBB56zvaN6anlMFA3fGVvjsx06A1fPMgsKjYIE1D1%2FI%2BdJd8chP1fXGQLEkUe5RV2b6ctf0lT87IG3%2FjCoYVmgfoNbvmsbBVhF3XYIki2p01%2FHzmw3cjIzvrVQWXFMZk2GMSgb2ibkQht%2BoYXbMsbwM7b28IMHRCbSuIT%2FvyKT37PZqG7VgfvbXHw88dMMY17boeFWCBiTCDLQZQ14OzrOVnwmTa4Z&X-Amz-Signature=8296abc743ca4406e320ebe889d41cc0cac09c893163f5f057baaf0a1695e388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

