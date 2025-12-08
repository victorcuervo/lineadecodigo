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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CVKWELH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGWH2ZMKsCGQaFsF0tH8HcPFTkO%2F%2BeCDtCZ%2FyUlUD8ogIgfZEcMkFBi4YvGck%2B1gmsdaj00MYMurU9DLlWKUiUp2oqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvPehzqhi0eHhbcfCrcA1w612tD3RfNNEqnJnF2WCrNi1QuhC1qZ4zSM9gZ4gsSADlnbXcR4IQVzlpESlneuiUmleVn7BrFgPgzAqTiypZ%2BxC1oHsjqeuNl0G9idy1NXp%2BSepqNa8XhDv3r3MC3n4%2FtanA4FuCYB80MDpEy5B0KU1kqfxbWVKTUcCVQm6XIIPVHZozKsrK5LkMr2EiU1Edi71CsAY7REopbPVbjhkZMilp8%2Bm1oPLbT2N4eLsZPYJdbDCuGZcGl8Qby5RjTtdCM%2FkJ3ZlCSQfG0UcXHRnY4%2FWXaxOuXkJZgHq%2Fw19oS0dPUjQoGdGusEevTlc65g6T2maJXkbjp1oqWdejtE9ztfSesc1peplKLIWlpCiysUbX6IWEWAANy6zlm%2BaTKZ5svrtGm2AvlyP%2FHp2BwbTHh6BhQZ3k3oKB%2F4iYmC9PLG1bFv%2FLKvtMCK8ST%2FalijM%2FU9jFke0Oyq7VrKqhAmMBokVfMw9ulz96YB4688IyflJIgYLMuRUhWNTl0pinhyLD0cLNmwLpg5HAeIgf4znQ5Uicn5r2YIV6b5yjVWtopGf4mpbL4gUCmzaS92iUoujt%2F%2BD6SjUmpJW9Jtqxbws0rt74k0QwQfjNLQSSAcOFH%2FaAqX%2FtI0Dii8E1zMMaA3ckGOqUBVNHN4YftUgyVgdg9uIynA%2FpDO88oNJDu7a7NG9u%2B2xPLbIN99hZTwvOsHPOw1flGUEyndt0v1RFPWcz%2Fa8pxhb2o2ETXbXpRg0oInwpyb87w9hAWSRXA0l1l9WKrMeniTRjLIFjsaIHcsRXreYpsk3KxsNYZc%2B81mfCr%2BWRsxmf7%2F75qxyx3gBP6O%2F3aK0N83i0i6oLppWf71Wt%2BghEfCXxh3XmV&X-Amz-Signature=e0e4d227f08605b6c754361e737b9dbc080009a9b3133f86bd1d27c1b488e6e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

