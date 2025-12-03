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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665B5R5JH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDyhbOVT54RT9WZyoXNfeetlMsBG8eB%2BN0a9N0S6rkjIAiEAzngSuDOdYF6o4C2qd1c%2FUO5a%2BQdWGTFu6jJDEidK6P0q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDIqJkeoRQboG%2B5SpbircA3fNVHKPqcjeVLqp6VFQV1g2tzwVEJq3%2BkSKxrbOA3bRD5hGNCUvXaPdEP0RjXZxJqeOn5Li0xhHrZP0s4BWns%2BLvxyUq5BTLxy7WYUL9ObkwdMIIlf60RHhjnbznQplG6LtpR1K6QxMuYiCogVWXfMvwx%2FbaWnZdLbPGC9tbgFZ%2FxaHTMCaQRZxozKUR6FBs%2FV1lIHQRQrvKcc9wuR69P09CGEtPU8BdRjU155RhAVnYKx4wP0OzewIOQcT%2BQnohjuSPWrggTyEiiuHZTiPym40rrp0kSEkhLQYYNEJhrAQHevtAfHjk22h%2F34hQ0faKOZDL6U9YMAYJrNKpf7b7jtgU9bGd3mCGaSkggxYKUnzPtkN5eszEpmbi5LvgAxmRghlar6lJw33dqxNKfQYgM4fgmhFPSA3UDyZZlL4dMFFawoMx1u1KAIT4KJDZ1m1%2BSEFNAEiw%2FJ%2BMIutvtDCCLZoTm5bsLc6TbSIAN7nsWr6H90jTyLsmRQdpgJVXbwzdll12u0Ka39hXEfF7uW%2BH72BoQe3BIfKlnzAvR%2BmtMzGoLflEF0fYbO56w91F43YKkt%2BmkakIPvAneliW%2F7F6JAelfhhut9iKo8B6XmZv8EF%2Fezb%2FRs5iOmbDA7%2BMIH4wskGOqUBdJsnzQeHTOP%2BuW0kA2kjIxsYq9kR0JookjlxIElDA58o7wRDKRWod0M4VcOp1oIg6M8QnFZf8Ok87En34IlRo1Zlrbsk2Kw8DF9YG2XJ3GweniVQFXbA1qJsbbrtr7ILR6irRjqbejj2Np8FpZcoSsrpDDjJOBUtoEJM0jO7PMCi7ZvmkM8234Cd8Zg3ye7QfoEPZc6PhjoFJHfjE6Q1dof%2FtK4p&X-Amz-Signature=89041fd182f2ac69e706cc320d804965f22aeb0cfb31e44dfda4f15c42b18dcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

