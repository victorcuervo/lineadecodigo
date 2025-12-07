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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCG7D6ES%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx4Hl%2F045iduAGu9ooMgBBz1BIdlmqQ1O230EjDmUQfwIhALzHA2TCqdT5pa1SqIP7dHki9oWzb%2BS%2B9mipGroZnWbNKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwclu7C2qNal7mQdcgq3APtbCk4Zg3XpFenJhNoD3phqqFopi6hDDV1lXACsaDEneQCCvy22A8D42jyK570%2BBWC3jDYGES%2FXNUKb3RVJDiz7lvzv9PSB7ssm9IKLlGOAEoeF%2FV1RJdN%2F4xCdyj2O0RaBPm5su%2F7euxLtw5yT%2B3V5E9ffO%2Bxcz3iz60dNDBifMMMCPWrXNlzChq7f%2B%2B1P9eUUdXU%2FdtP8GHs3W55pm8JFS0JwtodIzB7th4TTeVqupgmvUhICRjhTagYI1I8%2BXEPnnKZA4UH%2FpEEGMgr3o3hUXS3qh0vinLdPsKGSiWKIygum5dpOt6lN8xf3WgzUHA0Es2kTsMZYf%2FrQhkbY%2FvDV%2BakGM6LUqmVFQTmzTJWHEk23VPZDPm1Q1%2Ftotyu5sRoJleAiJKa%2Bb%2F5CsJcaQUm0fMSV1Ea8vwFjtSvFwgARJ9p%2FFNNO%2BF5QCYvcWeo6Alpzq9Nehqv1EEZ8X%2BvemIV7FwGtzgGmziMII9oSVAOKuIflwjFAIO87fd3QZdJnp5wD3jA3m3LcIF2%2FcfpTsbPnmzUHP%2F8XTdLqDYzOuu98v3paorL6V%2BGC4ETua0IrZCNEb7ySDt8brlY29L7TY1DZleT%2Bap003wotSwXKuAEtmI1I917bt9L%2BV66ZDD2oNTJBjqkAe6IQ1EcfDjBrpxIXMg6ipK6SekNYziEeU%2Bvs3iWS%2FpjvQ1jOvfeSnhJLmqIkw38LzV9u5rOZJO22o5y8o1m%2Fp6wR%2BZ3NtrdRFhq8onooJWM9EKTer2trLMycXbL9F892PaLrLZM1TSZxzBvAbMBxWCl8pVP8Gk35rO9sxeO9SjCXoFisYeQaAV0uYDfmUoZSqjhBLsWv%2BhDYCXgRK1hvi9jNI3g&X-Amz-Signature=6370b7ed3de819b3fac1a2b5426182a605be8fa217523bffb40998336d735b98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

