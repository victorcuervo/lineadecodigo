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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6T25BUG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FPyECLtT7Z8zFMS8GeYK0NKvrH8vKJC9GGk7ZyMV6JAiADc%2FehufAdA2zOYlSvdg%2F6SznkH88FoOz2KZxSzCqcTiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpCPvM0x%2B%2BlNVrflxKtwDGuJ3RMbAMcIv70sbxD0t4kWkQLdTzLFmpO4MGcSBZ5MolSWdvF3wcHwsZUc3HjQibHq0LotCC6PdNWfJfEbwmbNCY0ZnYuaRnOY3KXhKYPuy%2FyOxMFiwm3NYwtUji3yeDSniCbeO2m%2BMY1TfB2DSCQzkZbcctBAaqDFoav3X9jYpATcO7J%2FuOiVqKDyNgN0FjdkJVzvtGCD7t0oho4Bytx%2BvL%2BW2CkCXxUX56%2FqvTBI3z2aF7xW4vmkU99Fw5OHZG3CFxGCDgUf%2BvKGnD8dpRXnoVhBhb7U25JdS7h8AUW7R%2BNw4z0%2FRy4h5qA6TTvMDttF3Pteq%2FXOouKdkpGQX3x0aaINSc2FDhGYZ5hmafAV27CS%2B5iZp66tXrZzn%2F0p2LyhR041EPJYFur30kkB0KSkrQCS994Thny6Gn38kCPvatdOWhHyrBT4Eh8h05WEwUBkEBfUtOhMR3rp4x0S4um2B3v4GHwEijon96cU0hX%2BC7t1YdCpsX3ypez8bektPArwPFcHCiK9zEfBNlD8Tqtnu1SBVQbSsvIBKamxDJpR5YNmBtJxgdb%2FeqepBuNrihcLpqVErOpVnz6AukgwUTMIfPTF6KSpIc3fi2oKRKQG38fxwriDA6h%2B02TQw7e3ZyQY6pgF%2B3%2BRs6%2BChjwiCSTbkb30mNYvfbwKDHsbmWc3lS38s4wvF%2FEOvaj7%2BStOISHO70xoE9u0qDqtNooH%2FK47wEMre5cLmu5VM3o5O%2BegsFi5g1SnipVodIxuGN21hP3K3qRa%2BkuX%2FwTi8GgvQEQFYSS1GeV9NT125Ukxu59UfuJC5VmryDU%2FGQ%2BiBL2xzBh7PRvMbzVoR7gSh2PI5AtY5APDlUJVIUYH6&X-Amz-Signature=50f82336af9d0a16ca102aea48a2965c436f6795e80275c899b0df0f317e6488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

