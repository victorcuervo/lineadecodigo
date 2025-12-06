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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUGQXE3G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEom0%2Blk6GkGX4T57WEqAGpwU2fI33P1znBX1GmoWBoAiEAyzozXIR5CiyNpJmq06ERzAhP4d9n%2Fxyid30EFTTc%2FDwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFtaHMYUCuvVLqAfryrcA1%2Bruj%2BU31OIigjodtog6c4mz5s2LxBKlW9dL6%2FCN9dCveBtlNbI1hi%2FGqcGSa%2FURYcVkgugPFPCoEjovkNUt3Sxymr2Kd6qyJjFlciZ2crs7iWk8sOP0DxG9XGoaeNOVeKzPtg3Nr9RlqndEyzKXdvS7zE0ts82NJsGCZvvcvP5q4n8yLrV0b6rQgYXbznKGZpFhWE5npNPbuqtMiEX2gFMuZGk7ZxA1WVnNJ3NYOBg6chfoH3GPMjUesi%2BQRMtXdPrBC9JYDTJJQjalpneJrp1PDpw53JlXA8qrf0ZJKZeUrFmkn%2Bd2e%2FqsqDGO3zM1GHFZC%2BVHjJuGH%2BreLONmHwZGTmOf3wHyyl0CszGEvpRN9SVGAnfpFHzcNdXwJWeQDmnwRDMuQyp6TONIiPXE6rlhTPGSUOakl4HR2jUTlbOo7siSEGOoO4JuNRYLfEPIKDzpqjvv7kQtNEPPJD21WPc1BiQXKPPzHaC6dmepOrPTbUDDrr6%2Bk%2BifqP3sqIpxMlqYs7aZHaNrntw9BJLkqquZ6sKLo1ZPQMA45s6sQYYCMioB1Dm1G3Z3IlG2JAOJ1P%2BmY8%2B6coXjCECpmp%2BuRSJcdBIKd6Vz0LRrUkDGxlAEKJmkExBXshr5sw4MPem0MkGOqUBxSyJSkpmAlLoMdvEuDtkOhONk3vJJ82UP6aLft5y56R07NX6KXaY3jYjUHZGiV2CCEuK%2FQCnwgnrJpkNs09jdYVp6p7%2F%2FmQoRhdwfeFe%2F%2BkkNP7OUldVBk7S8RxLDONCFQY%2FcRcAPcQwwP%2B3nXeUS0hr1hpe3HuKKggpZImt65gONFihT6Ew5XfiRNCLNPByqgPAa7YHT8wir6WsLGyWZOwHEGT8&X-Amz-Signature=205509eb3235567de7e0c60441caab48d1d1c609980f1493f700e6b3deee1079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

