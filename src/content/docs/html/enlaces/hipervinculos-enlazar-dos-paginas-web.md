---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK4X5LTV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCzPh8RIKwTn0N5WhcFEwALqEwYfezSph%2BoaRPC04qpDwIgKEWIw3rcdXTqIgOy7JmnrU1wbspBnjQwHUERCB8eKqEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDN3K9ASc5L3LOswZLircAxotteUDWWGI097jk7hQQV6kec%2F0kB7%2B3jYbC62%2FCv3kyrLv6Rw3csVXvIhtgUQB4EFrlgD%2Fedx67%2Fs%2BjT2FP87Z3pkLgHCWncClrvkDALbsJ%2BSNsy7PvUx3Tcqi%2F%2BARzhHgA3%2BAdDXGlm0wGZccB7Xug39Fp%2BTJ%2BXnmdY%2FL78SHU5V%2F9PY4uZcJEJSoSxjJBdhtZta4iyI%2F7gayOYkQA3%2B%2BYhUHPpjnEoCqag9eiMC3AtMbDbBnaMQ87i7icAf1lmUIRqEsno0gLN8PfmDRdrX%2B9hzSY2mKpM9kglccFk6O57r6vXpj4u4D58hqj9%2Ff3UGBevR%2BCBkvB4prrwGB79ARIjowYWnEfq5BYttWuhxJUZ8VC6q4U3u6eiYkHS75mI5WZO7SYhamBuTxspmk6nnFEkiuacpGeCdCDaBgHyaZe%2F6g3MUNZpWMgRoMiqyB9HJV8%2FEFjO%2FbwmZFqlrBoDMXvmFPk5U58AvPIsd%2F%2FsFkM7DyKyiI5%2FVXll%2BQE8Ufcm8vCtolHWXQkna3y1%2B2PECcF95H127FgNT1pmn5ZN8loNUDBC0pKMncAJpOzeyyjTTx7N06DLUuTeZruCS8GyoUW41C4WaUO4L7BpcLLPbZo8z%2FupoSQ3Lk0WLEMIaixskGOqUBUsIw6BHDR47lPgU3BPYo7cc5u880%2BbyTj0HROooQT0Exyrttkp1iUvGC6jN4w44F68lRkhS2%2BU4FpZAOBY%2F8Pe0Di9oGizPCzW9TxbWYhoZPwAxCCq1kN%2FDpDdwD0Pl8R7JqRSS5Uu0fLwtOEb0xOxdgFqbG4ohsSXZx63JYU4V9Dp2r504%2BXzeBScNdLLkqsuwe8Ri7VwpWufMGQYoltxU2ZA0S&X-Amz-Signature=89066c332ed850862f7ac977a36a24d2751858388195f9fa6d774148bc452b10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

