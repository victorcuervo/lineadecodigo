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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F4JU5GY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUsj9gt%2BgVP%2F0%2FctzyC5dmU9nhX8dp3sz6lf6%2BqDuLWAiEAh9%2BUr%2B7wpW5gBO3TpDTK%2F6mpBqJ%2FvnX2FqZkMqrWfE4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPZCz5HfZvxLJlrR3ircA8fEUUhndbPwylFGcCl0KYjeh0IdS%2FcvPmVdYwaixIbTQ%2FKSVVcLkefyRjsez0QzmgfkG5ZAsApDF%2FgdSgh%2FRQah%2B16OamTLEqpcOJLYmhpAVVuN7tZeUxyj2blJ42tNOfnNBpJN%2BLOZIJGFTWGG0evUS9pYkOBQIvldtQpLlqbDdbpWYGv4jwmMaC0uh7DvXdH4U1qPwhmAYY7eykM6PhziB33R2yWabCdFfVM5SSnW9lycS8Egi4yBavHikH8vFl7H8EkRRpwbxKHi%2BIMwjHXmxZySSIrUQ0EP%2FmLRDKZjqxGgybDpumwgFrCYesI20azfpJVkB2qKWlSePUGovUV2Uyd9bwh4AYmMmZNFNahjfSetcmiUKQRF2xTQb24mdM2%2F8alGP093nAFz9h%2FR6f8Cb7BC7E5hndCYaDS69oFZ4YnsgJkbB1tUnXCSTuCo%2Fe88W1amp5doYk%2BuyNXzOyLyTb1YXMbXBTTjukTsZNNnPL25gXZRNM03AzSCgPsRcUe7ORlFtIAMi4MjxTkltvtB9Pi3bkO3%2B0LNaFdTPEagCTxfS1DRfGb6k9xSlWSdlnexshzhKsHWzXPEDpPxZ0cD0zEp2NWbQriVuxa%2FTAIZQQwZJsAY3y2t2y5lMLLF0ckGOqUB2rDkPRBMJLiaPMFw1vAD3YD2Av4ZJLlqxokUQ7ItZS%2BC83b9vdtwCekWGxysvHAX%2B%2BhUQozLs3XZYgBHQF5Pu7E12Zodk48rWuzl0Fp2uaTjiUsk%2BcrUMXnDdpBEeAYV9EZdVWkFtQ46LLOGTM8T0KY%2Fj1mO2zHk81zx1YR2GYG28rQSEmNNpZrKgkQ4%2Bl%2FEuEUOZlLOG45kcuMCs4Yuq7ItXNXN&X-Amz-Signature=b11eef9e680583a6eece516919cf332e4caa92c2ea48dad65a7d77e3e40457d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

