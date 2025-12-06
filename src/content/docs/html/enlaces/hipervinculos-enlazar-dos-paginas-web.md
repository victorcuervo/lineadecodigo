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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5SNLCNM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T220458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCXu7lxoyiS4tInUgFS0XO0PQoxJVzbyCa6%2FvW5VUe6AiEAxUuF0MoBHIZgeMZPEMyrG2CYsnZs9Pe7yVfipgQRD8Qq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIKOZayCVjB%2FOo9TRCrcA01jANkj76vxr68LdoEIgxbIzFbN7yOxI08npHZsjma9OQOpf3WDS03WFXsHRRZYZNHDZNcfViJcaPLM7BPgYqtpRZcyLGgPU7DfW8e9AG%2FUgLKlVHjSTo3WAOpDnGgpeVGh%2FcK6czEx862UaqRUdfFxftlFlCktwnu8hQNu0V9pRXBelxIU0GP544VrpMfhlriO%2FoA5bj0iRK6%2BwuvAwfXjN57JXa7SmE2pavn2kLH%2BL35P6A8W8U9RnpoMqUKl1DsX%2FrIBZYH%2BLeKQB5LQa%2Bs2cRroim7fi1BOUZ5mXh%2Fc%2F7hU4yZjTs2u5Pdzv%2Bwp1uDyq452T%2BJuJru4Q4fw1fgVXOaXZ6mOzGmlr63m77GAwC4svLqSlrLVZdqzgZkDiH%2F%2BAWdABWSlkMQwim2EgkCLjJjNIE7IM6g%2FF%2BjpGnYxsQPRETV7%2BCntulJrzLF%2F4KnN41nsEcpcbDW8N40IIl%2B%2FUaV7yOG%2B3%2FBho0FQu4rRzbcIm3pjVTJ4H1SZK0bzsHGywWXsV3dHBt8JpxwaRgwWu4lT12kdxdw%2BToxHORPOgdc%2Ba8AOGqI8syaqYnj9Hy1qDBBNGDCyEE873WOAerAAC9T7NA3jONsT0dgvIMRhhdoQj6tRR7jj04AQMNHL0ckGOqUBTogGrIYeIHiIYzmJ5SzOoRYxsakEpTglpbyuwZrek0gzjDtqUyRGY92gghlnk9YEWkkrawIIfGbLbsKo%2FxXJJ2JUsqPgKpUU2oyFUHEcHvxM8FyTVCfIjeWyEJiFjvTraJE%2FQYn0V0HwlNMnUL7AjvnCKwrU7Gzkjrva67xMmobCrkUzmSPV9ku78tQJAx1rCPhX4Ood5bTOBdIr76J4U64K80vl&X-Amz-Signature=4889c692756f8f619e27d596ebff4bc5c0f05b56915556029f1670bf32391e56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

