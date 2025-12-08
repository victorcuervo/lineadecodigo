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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB523TDB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUf9TK%2FnYjl8DHIqZ34rk00j%2BgyfCGyQ41d66F8vcAwAiAFHTOnh6bnjLfbfrYdkQogsdJbfAHieHaLAR72rmMTeCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEHvhf76laz%2BY94GjKtwDxgORN%2BhwO83OBusdXo3mghevTMMYbAorl13%2F8AEVGrSuJDjalPkDq8nCNmLMz%2BOjTxbX2RTcvT6CNHh7c2eTJbldnYwqCsjTxKMOM4DTyI9RS1BzW9MmPTzqtqENVybAYD6Bh3a8ivvjqqQOi4jsOfrm7n2fHBy%2FdExJJ3Y02t2szdPwJreHGv4xDGakz5uO4QJcKfcOGO3JU2X4%2FLlOjuHeag0AuhYf6kX8Aw2D9oQFn50z%2FkyAvVp%2FP3UE9pNLmFvVe9jGZ6SsSOyUTxcq%2Fk0Wewb3BUH1NcZsSlZo1YJ5fSqDIDuAyX0QNK3Mt1NlMKlXaZx7fslCbkXa909vwY2Wu%2FejGoDH0IUwLbN4Cnf8FwzmJDEq17iPC5bZaCm4XrmVyhvH8CxeJZUhVfofEYMHPvZbfgekEmicPGwigjR8PbXylhEAyhFsxDJwwo4OfWj6BN6UM7kYVQImOV8h4x%2FDzveYAK1gqSUMAz68S9H10B6lE2YglsdPujumnOF2CY5q4lq7hfeRMoNBtpiWX6lQ2QYUE4Pw5j8iM3eW3jFmKjW5Okyw7IVZRn%2Bd1d%2BzRS23K0Fep1pkW4J1boiQ5IIP3k8FQtZy%2ByqlLXD1xgY1Edfyp7imAw7DHi4wwaHdyQY6pgHfmRNVtv1ZwownaUvJMhQo5GEj843%2BdK6Hq%2FgToR%2BLTCPjoJ2Ww%2BPgeXTnWiX%2BPhy%2BQ1LQoRfQMquVy5jTZdS0J%2FfHyXCcGCAMpb%2ByMAnQies859%2F9B1DwjE6W0YP9PETTDCbpLx8QXmVROKeWE9%2B%2B3IBbQTBNMKO7Mmou4JvP1A5Gq93XCARit45aH%2FzZaFaufHDb%2FrACiSq2%2BzIADM%2FleuQUnMaA&X-Amz-Signature=1b3c1b37797d350f8710c2d471137db4bc4d825847b2325569ffc642e8dee584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

