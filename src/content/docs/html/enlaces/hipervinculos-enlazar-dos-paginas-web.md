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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WGT5YBY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFK1%2FEURRSSqFZw%2FGjPHQP7arN5k4jlV%2BCwVWPOEX0HuAiAbVzInlefbOV5GxEJAxG0wHUvXHyUDFCLx7sSztuQiZSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMsFz8LMYkdT1DRESkKtwDIKBdVr016v9jjqOOAadXyq9LFInAUwDW5IgrcVn%2B%2BG4fywIvAaKYvFe6shzfASqIS66XZtgFqoaDILWOyPhS06EnqifpTygUEs3Pggm1QiHpXxq0pyUrRFLlDmb7GXmZgFkT6Ky6mGvVlDye%2FAMQmBRmqq9E%2BJ507kGNJma%2BG98FjxVH4a2SAF45tBvE7eUOxkPrahShI7k9oEE1bJ9XbmLGiqv2pUc3w5z83MCgJBOP%2F8LknV6rzVr8sS71kznGlT2beCOwlathwgeNhR1cdyOz9VcDJEYdwPVrqTMOlo2VbO%2F31gC11WWSQoxXuguFg4I3Q2C%2BF3U8mEVDdJ2lCCh7X4Kyj%2Bdjd%2Fgo31gLv0%2Ff64gDR5heDY0YTZo7a0RwF6LZeXJClLIWrzM1zjcIGM%2F92HnSm41eePjibJD8Hdjgbj6AUmEDgO4ZMpV3%2FwhMMocyH6sYBp0ZyeWE8QBZ4nXKcpJTnIJdBIsCj%2BLcnXstYVXXdd65Rsxx8cWL9c9o6J5d7lQI1CxJrt6aPL9XuIFqarH%2FAm4GY%2FQmZSO4CDa86%2B37GNDMUI8MsmZoIcnA2i2BdMxuoC7GSCgjseI%2BBNLrqZu17pZvUpJhLp5Yw4NkdDtrVRvwx5jqNcUwssbNyQY6pgFeyOIEEvPRRQB07W2AShr8OS4OlIiMPPoZK%2FGG4In7BcRBAm%2FOOF9N7JEfsLFy06LSIt2aJ3cb0Gf%2BQBfqna6lN%2B9cmNi40JuZlLwOz4BHRnogKAYTWiKcCR7ryeskzuX8A7yF1UWEgF0epk9NyzFSwfMCzgKes1YRT3MLLGCB8v149%2FRcx2SpGv46FS11mcBQYVH1QXBowR3%2FQkVb7E8XmyiO3PyV&X-Amz-Signature=db56ad6758fbb9b4771968d5842300cb0a1133754d5ef26e876b506bd22feebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

