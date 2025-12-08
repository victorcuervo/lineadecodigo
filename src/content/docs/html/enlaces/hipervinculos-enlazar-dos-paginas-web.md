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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHAN35EY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FynZfuYjN2rpGN8dsoIWOr%2BXXHec4c3Sy1I9vPnU8OwIgI9lPr4QdpR08PX7h4syJj2SzOWwjGxnX25M%2FOBAeWS8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5MdvvjgIpMQT7NCSrcA2ZmFuiRnf6X14vPN28d6%2F8%2Fj0lkDZV5FICli8bP8d3HKg3yCGTlheKwUnchiz2wWTekWUDC2Z2v4fJYt0lD4urTyAhqw3wirH%2F9lZvYq5W27q5X1PDEh7qlp2Y8kEtlERpx4UI8IVFQSVUQukRXIdCBR7X6BTDFo7kWasxtlXIEyC%2FzmERyFKv015c0vRN4%2F20%2FuG%2B%2B5D7PhE0wLxsG9fXESZi%2B9Qbhbaf3vlWbNrFPEyI%2Fi5sPFuc2ysrvzsdH2L7KuA8wSYEkwQkLjhvaxYE0i8oUZaJ8rYCZD5K4kHJumvA15Pdv7B0Agk2hRIg2bIDw6f6S7gEQ8rUgWoT2IDEXIiW9%2B41dd2fTPbuO5E2el4sbLmTK0a8HYMoB9nJwlW%2Ft6ChSbUNKRYiAGs5b32GSQaJ2cuTq7uRJvCBlDP3%2F613G%2F8oWAmlBbNHftEFvUrUkkADjRu7nJBVy2TcdG4J%2Bddln0GIVms%2FnjtK4dE97WlL9ehuW7ywOnij%2BAHnbUhki0UhInkT6XbldVWJ8Zz3n6VqZF%2B%2FG0ane1p5x08tipOkVdZIhi0c4PqcjgY3FrzMeV%2BRA4jod9tmrRfH5xBitBQCdx68%2B0T8Cz6Cq27qZF1xCqVQb2fns1m9IMIKH3MkGOqUBjcICqIsiP6CFH40oQIr7ulLpZJujUUE2ijsNAarEM1neuyAlnljwAEVUxN9x4wrAsHcvxIRfhm604G3015oZBNVZ94ijEWcGzRBIyKpjkHRLJag1dBL4eeR16QMyKSPRfojLK82Kjn%2FivIzR1eCu40eEEdrpqrsRiKvR%2F9UePW%2FNTGHxQbyxhPYU2uy97%2FCXPFzKtniZjPbxRtHhYUUdR4OitGvm&X-Amz-Signature=cf3dbc899e42ac026cd8a09c1f6ffa3c49545b07145f77a821bc17fe6e9f5f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

