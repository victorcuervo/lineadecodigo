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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYUJ5NJG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3ySQ94hfhA6jwot%2BqoZjz%2BiV%2FfcQGXGsl74AXYKspTAiAYjMHpUMe38KoeR4p%2B4cwoclEA1bDun5HMtUJZiXVRlSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM56uvL3FA33HzM%2FYxKtwDQI63VUuFy0dg6Fnh4tmpt933v8JKkh3J%2F9MFPotXZN32jBs2gPzukQey5PKG15wJsXb7FFhVc72Pw57unu67m8gtYWUi2ZPDFXuDhvTj0S8VIzoCbMAmVKiTlMRDIpEwQk0OH4n7C5j%2FMKMKNtbrbDPVJpGWzMCOJV%2BYnTabvzdKT0N0ltw4uouKva%2B36jbC%2Fh1EYXJDSGWMoQbMZmttjjbOr1gLf%2Bbn0bjdGEo8R%2BFVlitKlrD1udi9ugmdsaLGXlY%2FaUbP4DQTIDT6tY3uuXti%2BJ%2BI0AH%2FBon03I4zVNMDvLYy%2FIV1O1Fi9%2B3hN08t65BVC1zFr%2B8CQE0Hmq9mWflGGusNIx64RztFtp5Wufajp9D5dhUbjcLAPIaCH3jNxoXtAkw5awO6n1pzBSWiYWeIkj0h%2F7Dzz6xRAQi6%2FyDvITTsO4dRvJ3AfHzY6b5airbdOUV1ohMXDnibb7WEcRRME452JqDBegUd4pez0p6KNSAMEX6PFzxBmhlGUSiGIWYgNl1%2B%2Bc%2F1JSmWpU6X9GRJoy7UgJXjY%2FxcLHsYW%2BGG2D5h%2Bn19cGWfx2hhiEK8FzM%2BctFteJz6DCEvxpk4loySi7jLxlg1Mlk3dXSKG4a7DmXTQuovJAZmUWYw2OvPyQY6pgG4s3ElVGuG%2FNaCQnnoUqCZVHHtjCf6kph03jLn3N69GMtCfB9gK7y7qZznpczIdX5914OallTe6F299tZtOqM%2B5%2BOFDVDlaG2ZRllkjpSUVv%2BYO6og4kSi9Mu9X4nHIIUb1epEH61%2FUGh6FY9xYTW67RnYFqcMbvX9MlaT97G8LOrkeoBFTaSWsbWlGW57bSCtWj68PtnpuMDjWuaX93V2AsQ7kDjY&X-Amz-Signature=e0f936d91a3b8932e3e0e3abfd9a96140366a37ceb08b37a0c05c5df4e495667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

