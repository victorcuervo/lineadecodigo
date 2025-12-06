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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FXY66MJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ937nQW3nvE4sO8PHjIpruS7Un5sns1EoMAzKc%2BxTJAiEA0N7W07i5VQCX08%2BIb7KN%2FOsWYX2uaLgUu3jP6gLcEnEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGxXijos6prRrj0kRircA5SR2teQzW%2ByxkfEIANzKOEvgYYCZTZoDGCnIGEbK7phwNl15PMqWUzultsjM%2Brfz8kZRzpZh7HqTN3jNYQSmHov5jBZIGsleVMkmfDRoBhwvU0YOPHJShSaKGZQRhv%2B%2FKsTMQTNF7OIm%2FJIIPCykT9DW%2BvgjdLmy4jvKeY9ich4TRELWqbxU0a3R%2FHSuxQkau1pxIBSaI6%2BYg9svQ%2B3e2ahPST9jwMkCJRe%2BkTDMRFmMsT788ATybIPu3l6EUVeiGm9jfp4YSKZso6ec%2FbWKtNfLNcSAcl7wHtekXQsFodhYyDjyrCJ1JjhtwBuWeYNnoFxcWUQC%2BW7y07pmgCN%2Fw4uRDqRHWwQgs29gk5QPXLKmZoyo46loLR26CMG08AcpAWY1rKNAALcsNkUGmPBWcbWJyUVaJUrbBiLlN4qHGPpy1Lp%2BkNzmSd91tQAFQxaxiweg0fiK0hUcbUltbG4Kj47f6%2Fl9q1cBUtzm4HuHbsRg23xWxyswgVAREdE4QJQMnQdb2FjFgFiN7%2BGfNyipbYj4QZyPVXRPVwQt7T2N9k4617wp1hSDdJOu3wy2iRk5TZXtWyCi3Me1ghHZAF2UIyikOkbA2r9JCcZLxpbSJZ%2BKS6QE8y5wDWCLxlqMNW8z8kGOqUBXD1sf18pi5J8ZiZn1zO1cxFBfmfnBt62flewdJeg8ESVEDSxjDywNCeqBdmMXcPL0uT%2FGivdgX%2F%2Ba0H9GnjRoKQlRqMRW79YWL8%2FHeAzcJVxnd%2BSMLfttyZZw6GC1W37sVNdBA%2BJGOuPIb4VMPNIzBVJEu7cB5lAxBplhxtgKZjRCxqehKQWaLih0W%2FEghqokc9DCuUpWHd3YlR5Y9CELMCH7TRb&X-Amz-Signature=b286752eff541977cb5bb1ab6f8d9771ada9bee7c53a3ba052ecae6f08c86b03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

