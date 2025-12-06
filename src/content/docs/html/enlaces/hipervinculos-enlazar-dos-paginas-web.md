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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FKLANVH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLVbxZohrrj9K9f52N%2BArdIMloi91E%2FWEKap1hIXqvJQIhANdrJ6CUvf1pnB8C8O%2Bes2xQZXo8tP%2Fkn15rC%2BV1pHU2Kv8DCG8QABoMNjM3NDIzMTgzODA1IgyBZHWM63Y4jTil4Hgq3APpmwGTKLd8o2Ov2dzlSQKvWePrQDnb4fbewZJqfHI7S36xKdAfonoXRd5TowF08%2BFGerm1C1lTnD6wQPDufs6ADL0v3uoQjLfILNRsJEoWlZB6NaI20Mgwvbjcx2Wfb1wU9rS9d7Gg45XNzDnz9eJGcrURNTm7K58k2f%2FWD0MuBM4MfxM6hwrT86drEyRlYfrRa%2BErzagU2B732ECcv2pTynVrYMgrPqq45ZhBG0QSInls%2B%2B6zVxGfLvt7szuEmYdj68dKKxSHcvDVyTKtkU6iF5Y9DjPlKsK64aNF46wqexvs3ju5vOI2ojBKXj9TEyfoRKLtHMrykxoB1IwPL0YTaCwgnm%2Fcjf6oE4%2BULV5LJ1AVjq%2F7mnaLVZSYtloyj1uidDGg2mBrQywWWXhDEbnZjPw%2FD%2Fw77fQ9M7IjoRxymQ%2Bc8RcwtHVOEbbMfFtTvyRPj9wIvqH%2BBRW%2BKp9RRbHzVG9Wz2ZeTTR%2BPOtKhEFoUpXZac54NNadHUvaEIBRtXKJM%2BX%2BEJH453C7PTh%2BYm6u3lzHVI6Qj9hsONxKfrvadkMU0esBWaDiwQt7KX6bkjox5M9o%2Fn7U4bdEb229CdiweWYkUuOyRHXXAMf51hSTn%2B8JZQO48lvpZ9eIszCL%2Fc7JBjqkAYSIHogV0fNBU8t3x%2BQrtuKjAXm5qUrwk8eRsEbY4xHycL0hgH8bUOhM90KTZ2042nWpXocZv2d4sbr7mn5ufgFThbO6stGTCW1gk1dK3MREkRJfAlV1hzW7YIeajQoSO3133i8Ss9PwL3DcwSnZbPQXYlzsrBgc%2FmbdZu2TGltNDObmhS1oy2bUhlQyLnmpW71swM0YHKwzWYUpYQdEbUF69zng&X-Amz-Signature=4167e002c7908f232cfb2a2886567328870c39b21ee80998f5d691909456b7b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

