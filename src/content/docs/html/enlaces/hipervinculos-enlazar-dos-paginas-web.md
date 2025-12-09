---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XECA7IK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T182523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICh5c23dPnS8F23thNljDnNK1e%2BcsZNok5pKO4QR%2Fzh7AiBtuduZ7koh23QnojbWA1VgXrDKzDwq6oSdwUAql%2BC%2FSCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhuudDWSzamTeMjP%2FKtwDqYGgvnQwQ6gAnQi0c4Fck7BJ0HvRI%2FxX0Bcn6I8qOc0hHfx9CxfRo194E%2Fvyk25vxWV%2F3HD0fzCr2YjC2p6SSHsszmY73iDbzTKvwRNwowDs49XE1fWTSXnrZYm40Cb6f%2BG%2F%2Bqu%2FiQr6KuzgfgiccItDi0NnW6DjBPoNmkJ0Gi2YjVF2tV8VuuHDpRyRUtlTXOLirI5rXJjVsRLol6RSrHsVhab5UBgjaOAGZ3qWUHzCbDAxpBxgKzmhqAUqH%2Bt05IAJCgvvSyVkCPek9c%2BR57ZOXmaaLTv3Dae81tqrSfyPdXXKIEzBUH7h12JpSgNPuIfCihtbgCekIK7kbsn6D9l%2BccbfHjNO0%2F4Jn6bxyImQ%2Fak%2FmPxWMKB9PPd3GYvhzIDrQ%2F2bO%2FhzcsnCN93B1j3dw6U1IrFaPvxU00T2WzK023MU0568BCCVcbY7FVxe2cn75si6THnAqofCPK46NlbgAwFyjuWNJ00AnlcIUUrXzw245wMXGzJTlBmln4j85YAOpmKWSFWu%2FyZ6N%2FI0A5Md%2FxoTE04RkQKN%2BT%2FFQF%2B1Xhe902oMRbu67RmwuMYt1am2cP1pHHCGsIFITK9vOylWgxffw76AkZloEXZqjCT0ep%2BdBgM99hyfOxsw%2BrvhyQY6pgH%2Bxq4vfHhDMdRAeONeVlR%2B9mGj5LmDjBICUDmLrPa6x8oSWHCVMbq9GMDQL%2BKiY51A9IO2VQAXEYEBGiSPyj9Yci7AThuO9UNIBYe%2FeZhup3%2FqZ6jafce7gNrMX6T2o4HNhHKjxJYXznc4EvkMexwgThcRVmcoiPseSS4ZWTYbksQs7L4R0dF9Req1R8gdjYrWblXDWHlHyUY812DKwYJaQe57bOJP&X-Amz-Signature=121bac78fbc2436f6538ce9c63aa223b051baeeb6dda06bb35223787f2753373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

