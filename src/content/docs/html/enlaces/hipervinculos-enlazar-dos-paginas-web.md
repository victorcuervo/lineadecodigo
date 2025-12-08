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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZOJMHBW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T061657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZCXQhu8azB901foEwjYTU07VchAVqiK0kEabpWZB0lgIhAOjBdoea%2BtDFVo9i7dnosDlHIGTnryIq9W3AIMfQl77vKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igze8CnyvE5idCueGqkq3AOIOh7xWL%2FQcmSmmgdCeIE4BeQD%2FrgvdDn%2FE8VTpe0jrGjLFwixXF0ATT8B2TLNZJr9pUlRAymQcKR%2BnZFcvE1kDm2bVdW5hS0gBtpqVVJdfkrTPsFuS13BtVaerUYwpTu9IQfnrjMM3iohA4S64750MBBmMRTcpAYEHXgTdU6JkUxHlkFNCnayu7Z%2BzA4CkWwa3ggWAnwZ9oeFPi975VurLlKLogqxZwoR1jWN0EIJrmj2YcHeu4QsyhTTnk4yUq3SAQ8mgiuZ8Vw4fJozbANnF%2B28YjVL%2FT7PowVLgBVYgV9FC8E%2FCLNQx8Lr12LrlPIOC3TZqfRPaAH3hpLkpWMZQIIAdA93InDUt4MgghZ0dgOG31BBRko9kOIT3btAPgaqZPpugH%2Bbg53q6a0IAUujldfDySkLS0GbKn%2BknowIyDIf%2Bx65hYZ6TLfxhHtMWoHjPQ%2Fh51KIg050To7ypNPxgGhElt4PPdMXswTFHxBkXef8bxU%2F%2BOcv0X2LxrJSb6jHyyodS2oPB%2BxfDvqeye9MH%2BxlxSvlI3dnvcOR5yh4g%2Fiaf9LD%2FDeRDjY4ZNIwEKvA6PiHetUXbFIFzCuLylX4QDnZOOvmRdYzNHHAV6OOtlm754Rrx%2FN%2B6LX5aTCH0dnJBjqkAUrmqY2J4UkW1JzjKLJxnnBOaI3ay5GRT%2BmxXQQVH4PTkpc7jOZUCC0XSRP%2FCY%2F1cSWfiyEFxMtNqVB4BJP7o%2Fn%2BQuo2bCiJ6YpFHrqcxcSrwDoXUWovtEdIyxRqR%2FAVJnhFVKtawWSJHORaGuYE4DNCWBKfjILbtIzZwq3G4yOS1PlayIZVApZutHGLCR9AYVE35E%2B3ozaoTLcrnsyZgysv%2BNu5&X-Amz-Signature=3dc0b8c59d42d7005dae1579cc0274798d87e08e03fb6cf3edff9aa9cffc67bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

