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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657CPIVJH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhPwRPJXX1%2F9AU56OmaDk8LMKN4Dx9tZYeKKnCpUEpvAiEAoi6RNbgNNWbWPnShkGZrNpt5Jgqi6NpC4uAM2GGsoeAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMyx%2FyoRIZx7xJhWRircA2XpmBhXoYpfAzxlvV4vjD2g%2FF3owkCOTQSyvCJASg13SJtziYLxG0w7sPy214yCtSOc16SXtm4Xgevrml39SoUHEcepIuHHea%2BUBEL4eMiBKme31y0qF9fPaDCam2lCWjB2EtkBCIEr0gwumuobl%2BNGmKruLUKeoegglIdAUoZH9L4vLAIzRVB%2BoOU2qiV5e1rtYMRlBZBegQHeSS4FBGCkSg3XiUtzDbi7Ufc4aZx074AJuVrq37JNEc7FWY5bBa7wa%2BP9JCZMbdlCcO0fcDgm3okT5hOnZH7AkRfPj5Gpx9QM5H1345ikJPzFdcPTJb9KUwwfCZ4AKAhswKqXODNgsWgR%2FcOjJB6KPLXdggyQxaCeXCskEq8mjdwMJrC%2FdJSJ58mfvi8oKcnnxzvmL%2Fy6uNRKGab9S1IFsb3P7Nd7N3MN2eveA6%2B%2Fv8eWyDd37MVSrzl3IrOIDcweXEjBGCD8BdRWbzVWDZsTjOWqq5yBa6oeazFiISo%2F7Cbm2SAiY%2Bo2wI3XtXO4qnYcNkQdaDMvC5Fj%2BPGZHddQ1PMfl%2Fz7WvmPv6H6IosaWaiIHYlbKUXsEdaAYr%2BmOXMDJX9PG1pr%2F%2FJhrYXeuDK%2F7R8Zc0pjENbqPK3tVMqKROz5MOOm0MkGOqUBs07Wn3F6GPVeQInb643Bef2GYk5Ie79%2BObwNxQbdg2i2BBXRjRO6Ud2HyLiymvLl1I71cd6YrAmuLuoKDmBcQpqXTHC47ctSHMKAlTA9Mtr%2BbOF0oxsQpyNsWEruz8wgUgfHOge3HI3bjJCG579oF0ZN2b637Yyt3d0x5QYcK%2BteVEmf6Td1eKY5b1xJpY7y8az8%2F7%2F6k1gSPhH4GxPjuu2tVVj6&X-Amz-Signature=e1f0dba4b59fb07a6f0742a1359f30ed933481cae7083642372e5eec444ab9dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

