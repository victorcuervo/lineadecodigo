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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZTH3MBU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCciy2nCecdTCw2Kg8aVRDThZXudoNsG%2FOJ7n58mG2IGAIgKMq32db4ZCf154K7i1Y0Ya2%2BMtzo7Bs9PtyRg1ik70Yq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDB0L7Ym5nVlilnJBxircA%2FkPyUepLDfAMlADs2zSrIvRz9yNhNDnUbsPXfcK4Wk%2FhZlF0qlZsYcBjMuroCbDAtt7x7%2B5QU%2B2MdZUTSzZOnw9TsFPJtFfgvlc6pvARmOB2Xp55qG38lc6Ln81IJKJoZ6tmL8yZVNg%2Fzusnn28DOcf9Ls41G2VuL%2B6ZYBdECdPF7o%2FWKHRP31xzz7ZxW1cgV5YNT0uM%2B4ORCxZIRCPqbAIq2wTjXgsoNRMDRx4qaKJX2dFLy715yBiiXrGiAuEfrHZcOf1%2FOC8NagABa9ToFFNm%2FDND%2BFwiPN%2FFYPAnSX%2BjuvyC2aag7tHDX2pzbJrj5ypkAdux%2Fpd%2BbNwcHFBIlsB81OubLKT0gg0fGqreFVoKLuRL07QShQiyAuRKwUF5POqVm26qMyKL8u5InvmF47K48YEdvYozv%2BA%2FEGuDgQEHpIBNWKY4obS1cX8qBtKdu7OA%2B0zrecUZj3vVIZZaRX520mhA9s7QzAGUKbdSFjGfT0k1AzN49%2B8WOT2ZFjMmbHPVu8S9PnQt0ZyKVErdR%2B4G6lIs4PyfJsjj90Q%2FSACBcrLgeq04%2B%2B2nThGypjL4UArhq7iRvNy6eTvatpZQ5u3Kd%2FI%2BrXF6%2BSsbs2bPR4fHb3zZwjzc2qX8j8mMJuVw8kGOqUB8I6%2FP6ufaCbieEP3tI%2BGfnEsNzYL9QyYCYUs1hN28PWvADL5XW7ydSjhsUwgERGJCiH935rxKVUPyG%2Bfpk8qksreFoYV%2FDBFlE7yV%2BTVCcLm0kA8iRVs4LDzHzu4TkypkPHyYxaLTofyEl4IvbBNrl5Gtr%2BZ6XGSX6LPG2qj5QeCri96MDhiu8M1UQPABnt1mp3OJ1WRmBQFYn0dZ2wu3ZoYfgbk&X-Amz-Signature=f2dac331b01de48f89eb25c4ce8a4e6e40a49de77b721d3c82624a98ae80ac82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

