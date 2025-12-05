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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O4MLOTQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOIfNcbdNkr48dxounLzqQwVtmtM5NIGtYcFafDD5KrAiB37GNjg0dvE3CNwfUrqDAwVpaQcmQNLZRa7vjlf6JcNCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMTkYtVRsRM3PeWairKtwDcb0GqqM0oZa4Uxw2YcRkBAxxVMULdzfoL1pk5xp3YaUmBkHP7zX%2B8wukwW6JRJyTZ67jPbVKT%2FQbYcgJvlh10FXeAIYh0eHHsSIY0M5DHzEH3XhaTQlqY2L2rrDOomIIS%2FGgmAO9hZ8ZrDu8c8Xc9anHfa5FkZwItadJx8C2P0Ati5g%2BGZofpY7lPHhjvlWWsQNdzUIIYLFFvdOBXMhCryfQToqmLsZQ0QkDLXWy839zn3hk8OelR4uc6Zn3HHPTgdRAsLuMmCuvl7%2Bi%2B8alHkvaOr8PBtXh3SV7N6paLGLPNZ5arJIqV0IJCMLCDS2T0PFjz2bahHtIB5Sy8neJzXTKA%2BBdwQUTHiz7vh2Six69X3eapMmZIih7KX0XbveJ2FLeMDTD8W5RcDDKq0dqMbReAomwi%2B32tv8iLYlv3dO3wV6whRno%2BIfEBtikTvHPnsku2Lj20BjiKUiu%2BFaSPq21i3Iw1Gi3KYvJeXscn%2BF%2BZk7cGVs57yL2LYpfagK0UfhiGmyDJu%2BO7COY3eEth55orXUPVaIljlfNlNIE1qUe2VRl9oOdWn6SfPWsw02Y3CSpsQev0A83k50riVtA%2Fi8tBRLIVxsFhqzxiPYpyHXYubYV%2FyWR7q4RnvIw9IvIyQY6pgG4BiEgeTNg0Lf1N4lTGlnyKSD%2F17A4efiGjCEiFLV3uokLXGb%2B1Q78AQF5oCa6oyl2W%2BsyeSpRj2m0WaR1o7eEpVQbuLT86h1DeT4uJm2exDlgkBHWadry0dtLD1wdqKiDzqHj0VuT7dSuYJlFVnhE3BBPXjm6swPehxHac9JAlfM%2F6RX4H3nl2mQ%2Fjh3mhHQsRfJIumiKQxU992zm9MgZOJVSFMfT&X-Amz-Signature=3255e4b9646e2d2df2f622951c497b3b1854f3893f74bed4ee9776e91ae20101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

