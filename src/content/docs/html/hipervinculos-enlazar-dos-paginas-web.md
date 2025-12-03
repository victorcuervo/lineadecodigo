---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBOQXVX4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEj1aU967qm1lhLsDrCg1OvE8xJctycmLB%2Ba0c2UI%2Bx5AiBseBfKsH5DMRmExmKIo0gzRR74mAxV4kYpsBkJ2l1rOyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM5eppRuzR0ojmaDRRKtwDtsKso35sKsLAoU3ytGJZuTkBB1j5fL7i9uRkGbPv3HwV1v%2BV0uUfVZnG6RPnV2zLjxmS8Vuf8NFJ0dxRHB%2FLvY6MgpiOKkUXCXlk6Ov2H3mbO6GiwciiHpEzLWyU0IEkYst3eQlNlGBwpgY6o61JNbVseYmUFoNcTcX0X%2F6odELkRWc%2FOg7y4nGvqMBKW8w1qk%2Bc%2B5FGz8bprx49asiHhwYNBk0csxAJBnnrirmt1NQWsmFwf8pA33KpjEI3KJHx%2BY7Hf6GJ%2BX0RmQcfX27BOr2NucDd%2FYA5y4vItq%2BBJ5nO9wqI0HgXiDlY9kuhsgw9SRMOGV7m%2BGEHcfNZfHFO1Cw4IecgUACwWDpMZ%2Bw7jT01vVsqro9aFgLMwgBrNu0DMKKeC6ERNrviindu7YHYVpLBwdU2mETHbUMBrXM21tKuGyQY1cJpd8VxerFSqbEjDXsI%2B4b3teIgXrJPOPm9TSj8sReFauVvUWE6ng6Cfn1%2Fj6dGonrRRJpsXYcvKMWIo33s5zNeg%2F2o2ShoVuZ4LYE%2B0XfU7fpHD2MpCFbz2qrPi2A640GfyyWJP418pvdVSdac3yQcZ0LX%2BgAzRQ5OVEqL4FmkieCkpJivS4osRvQoY6bQvhBYTPcYCPcwrdzCyQY6pgFUze1lVYPwuyLGR9OjRjS5yFfXJ%2FGZCsUk13hLAxEAr%2FwCT3fNzs7fNLmCnWZWEJcWRm1ytbfBa6pG3EhHv6KaU3aPvWO5fMhfhvRHHWTRHsrsXLg34lvjMTW5HsbpQc2xR%2FjiEBJZD20%2Fa5iB6ghJWOwEGpISe1RT%2F9DDKMJeXrW8NZvEG9NADVXYFhLHKHQJp1MYj52%2BWTxMI8MP1w7HF%2BZ08g9u&X-Amz-Signature=ce8888dfba93f037165f4b48f3d41c84747392ce8c435b5a108f7283e95dd593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

