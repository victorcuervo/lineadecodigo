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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGN5CZGD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCCdCZWebkruWdkN5f%2BdES1SJFnQt%2FY7Oe9SQFb1vJ7kwIhAO6j2dfNfkG27ozJ3oZw7Vec4uymmQ67OqvGQ0I08okJKv8DCEcQABoMNjM3NDIzMTgzODA1IgyXoa69%2FO810j0v4f0q3AM2rcwDqwSzKgmjrW8vSMJhSlD9TjxKszHsmsjV2qCDHjCaIVh6dBr9ldllEuQ5OJX8gN5V1Drt2zFZUPr4fXfAIdoW%2Bp44tjOveCaClOastrfyAtcfcQPLpHfJTqXkHqvriNhcOzTHidRPU8KOrAwep%2FHwTz18Gj6CC8JMDgxyGxvRkfZYLn1MV7wEq7q2HC%2F0qzopGwmJdvrbh1V3lrOyIGs31hLRmJ%2BKWkd2GzYGLCcs3S5xKdU7z0JsNkDKd1k9StTNMpFJxntP4ib9mwyhsm3bIS8KN60QdXl%2BaJtowTBZQipNYGnDoHNuivG%2BU%2BU5PypFA8mBZxQmCj1GqvEDt%2BxMrlgyrGXgKyjfWcbKwqM5X8gLksov2Vp3QCayq2xgNzlX%2BEt6Sx14lhCAvB95dL2iC4wRRAxB%2Byl%2B1lSHl57un%2FnNSfQzgwbCKgdEnLGjdEN39jq6a8sJun%2BoxYVHbTL%2FTYgafcucp%2BUG5z%2Bb1%2BgqU6VB0dWJCiAi%2FfV%2BpLACAmX4pTDbbQp5pBWTZ7bApFlar72o4pM2%2FaEs%2FXBAMDMDhKcRvV8H%2Fc%2FmTpKoAJ0NL24YYM1D0UuwfloOP0kcKNu13q%2B%2B8Co2dKY4z1nSxH6jOUQfW2DBFUagVTDMocbJBjqkAaw6nHJ3c4A2cuoNdvvIVkVyPVqLXXfZxFMWbM4rjyCIslwyKWM%2FHLt%2FNQIZudwld44bxy5buh63HPEzdtGLSdXVrXvm4lNMvNL8kh14IwJDiK5cJQrAQjOW5z1Hfieq79rkmT%2FhyXQDEIZc0qfTZ5RwAhzJPuTancHgBke1IbORaTbAkVOnLSEzN5pFEr8Dq3MgjbYQ%2B1VZ%2FZp6raGJKSkxe44h&X-Amz-Signature=d7584527621995f7d218e7674836225f3f6d180f510d5aa81053e81c8d57fa7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

