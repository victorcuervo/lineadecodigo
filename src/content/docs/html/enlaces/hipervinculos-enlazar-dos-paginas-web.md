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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ENB56N3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl8BS%2BOaYXlFbOVZMrrEeSUeLqilnwhPQcbwmIyO3qVwIhAOAT10Guv1Sypkto9m5Nl9IXo1Wh4ukH1VUfnXo80NGWKv8DCGYQABoMNjM3NDIzMTgzODA1Igx454glaXBa16D9aoAq3AOflYbuS%2F9UzGZDCvnSPKfDxbKeAUNVT6nZr9jlmJovoHx6jn0P8MPSvaFHUW2t2GEM1IBy%2BxURYkvSzITM0R8kg%2BMwpkYSASS%2F9CrFCq8MAAxS7Vgt%2FGqDoaKicEtnsPy9dAl3YGXEpojStQM1yagYncCiwdppaC23uS9RQOe%2Bwp0Iy5DATXdAGnmCR0px%2Bf6wCPPZheTfzekt8oGt%2FIPxZ1dHH2acI99Tpgp7MDUdSug0EfCQDS4LcF%2FbtIxh8LIfjdYv4EeWxTR1M%2BDHjOlsuqSvToAjhmE5NDWJUcFxm0zEjvSJFTAbjngttOPS2J9pRiqsBL2gin6P4AH%2BteSSWNjzqasmDpnVU6m8cxq0FEz%2Bnw%2Fy1Nms4TnBk9mxSWJGGtl0jG20kj2UwFPoBLgmcHLTHQ%2F2VI2f9rJebA4BXFD2%2Fhl3uodL2HosaDOgGJ0hNlqQhEDegDvk6UjFJJG5WOK73Vkwt97htJsESKKauWTcDz7k1RLyyEYsn%2FFjuNBRt2kOanM%2Fx26vkZ7uskFE7sAcKOnuyYQHRO2Yjs09sJW9Nv32lGZMHlmX4Bslu071CXGAj6RM64eyglA0cLfWGge0RM7Uhu5%2BSnpNwl4EKAn8BpJAgneED28iYjDciM3JBjqkAeAAJ9aODOD81c3RV%2BxNOwvVOJOgd30bDqWRaacHn%2F%2BWOXmGS6PZ4QrV8Qlj%2BhoheHEnObP8eWUdaMq65LQfF1KnMR8IeRfc0wIFuQWES9Gb%2F396CgSsQpul04Ido%2BwRkUZwbyau7%2F2OIWwuPD3D%2BmChZWR8kmeLqKQKAQjDdqfPZPL3tD68nBOtX%2BWg3zZlr2VzCghswWx4YUwMM8zopg9O4OSa&X-Amz-Signature=aa432dcb32b47268b6cb720a2749527cdce594ce1a2499eff721df933e30e789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

