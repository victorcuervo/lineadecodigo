---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTCITKN5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBHucMTzjvU9PaV1rbpjZIGaNOV9164HsHT3wuNWt1kMAiBnFjQXPig%2FEWZjxgn5yyh%2FCskKNdqi7d%2BL9Y7hjEnEGir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM58lydNhNXb8t3WZQKtwD6R9O68MexW836n%2FLHZtxiRFVeRtV4HbDe9S%2Fmddw%2BSTtMeUt%2B9r%2Fn52y1g9cNdS%2FPBvn73EgUzNBoxeR8q6I%2FLhKVKwlr0WUwDbgxK%2F9xjdQJ4i8osKmlUnvYa%2FfCuvIX5Xr2%2FTYtMzOinpYXn%2Ff3kLC569KuCvUI8knGQYY%2BZ%2B%2FtWSMEe3U6I5fjIP2cWDyR%2BIuZKEazL3yY0pTCoJwRZk2aFKe7XNvY8oZkEhd808MMdmY774mbVXzC%2FXeyGN%2BnPcu9G27yvN6lW6RkDIzIWHcRRzKZ8kcJCj3GqJuXxfDCNtdxL2J%2F9AHK8IrvrQ2rodHphrAjPoPnuEAMcWPfyODjf3ZOc%2BKx9fYaHI%2BN%2B5Hii4hIU%2FD5VTNfnKpds7VMWWGLRY%2F3sxaQGQ%2FnaGhrWhe%2B0L7mJgWOIr3cRGT9Z6WI%2F60W%2FQVeIf5oCaVvyWY1OJPoxJf%2FTRkrULMiFWFDk6%2BsWGJsL43OqjJJpgMlL2lNCeRyd3hh7AhHLWYOEQz3lGYfh1t0bIe%2B8c6qza7%2FCIAyFkk6ra2eZu14W9oNVtuzoVT3FJzCThQdsN2pJhRHd0gm3Z7cLCBlDGbxJXY6bIgxxlRv2fL39M0k1Nmt%2F23xJeN7Hote4PbmSow4fLDyQY6pgF%2BvEUJrxv%2FbtX4SIl%2FYfudTzpUBXtnoAT3TYNFjEw3PMnIHFnYb%2FO3q1AJmqMgwdUcM82BZyx6RrnjG83Z66M2FZLDszMqf9vvNKfzcPG%2BaPAzO857Tmg53eNio2kLjfzWDJY6cywVblnnXfk8%2FbgFoQEiMhCD8QKlap7Mfk%2Bsw5kmj59EO6ruAX4olhs8ge2XhR5IyiLvuLpgqMuIVsevuorXXVRH&X-Amz-Signature=f9505550317df9eea9f870a64b8cde04631454d7cdb8ad5981eddd64cc77bca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

