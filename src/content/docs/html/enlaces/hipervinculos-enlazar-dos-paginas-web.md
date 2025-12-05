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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBYIVNWU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEl2z%2B8a%2BG5w25lwdzeAIhI8AxyLMcDDIRQuZkeKr%2BbmAiBFkyKasNugIWx9mVmILQY1aJ07fSFNsutGlCt9yAtxYCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMR4Uy4ojhsN4T%2B4D1KtwDSbk0Z9E8R8tHpOn%2BEU1uHGaX%2FSBLd%2BLbELP7BNTDewWkJq%2BQ%2BkBjgp4am6uHteeGX3A2B9%2FcW8t0Qfn8AWH3lcPiP1tgNOO8Rn7qDdf6hGCe1s6vLOzQNrF9eUyYv3bnjgjaUQbgTJdm0XvBfWF0%2FcExG1p7uIjsMNHO%2FfiMXbpDhy7GLpM8r9291zFgC%2FNcuIhVHo5LXxINRFyn3iqC3u6cHZttE6bv9OQC%2FKfxjx91Iq2uN97DRumpTgTw7CwAdnLQQlqOY1iWy8mhn19A%2Bsx3HydkkvkipqWn9wHjWj7OXm1v6pKi%2F3jb7%2FWSIDI2I9N4eL6JmIXUyktJnqYsKGxa2kTHNgiRZbZWHIF6zmwVI%2F3XRrVTj1T9bItpXjCkP4wyYU6j4puLdV0MiLeGdlzS1Hx6mgYXzcQuOOAapTLYePKrSdSXlx1RQqGfXVClSTqNHS7qqQ45%2FtUEAReCs5IJcGLOF0c0Jq7UeFyosqWz6caAnjzoi4Vj%2BJwVfiryWQF2gQUA873K%2FKDpL1ONyOrFmgcpnYOGFcID8Mchz7ZPZBfsw9r8EfBfNQs53e1%2F4I09ogEF0xCyFS9Mh5VQz0eJAWqNAz8TfhPPbWnqGhyxZKV10DHgGlty5MAw2MrKyQY6pgHaZmjh%2BN5TV7pNjr%2FId5RBPwfGAUf7Ik9An0MiT7M7iRBZZrju0dixdLwXCxMM6ZfTbVtAFG1co8GWCWztRIbnVBZFKRHWz%2BtcCih8u5NxpcqahiIsZGwlJahk1dhOLIY6FlpA4Gtwq6xkDwiYz%2B7QryYX%2FQ0vODV0RcTNK61fzGjNubBSx5iDksOhozouO1F2Vp6LrThY03PxYTSuuOv%2Flg5z2%2B%2Bs&X-Amz-Signature=219ef9625085416795b850fa2c89d14188be8dd3df9213834e2e3aec1b495716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

