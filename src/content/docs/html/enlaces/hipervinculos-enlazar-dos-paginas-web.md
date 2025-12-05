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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3WCV72D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgrae0P5aq%2BL3dpBuHWzi3KMD6J1JNExmqMTYE9TV%2FHAIhAK4HYvemcRGXivU%2FPFeN2d35JTs%2FQWEDmk%2FwfrEhCUTTKv8DCGEQABoMNjM3NDIzMTgzODA1Igx%2BTwJ%2F%2FvCLOMepjE8q3AM4WLlrM65ezxeldS3bVpahTGCf0a%2FxybIEX2OdLMMah6I7nto%2FEIZauhXct0qzw2qrP2SEO8wHGSQ4VvOtSaPVeOxwivq3eJKaPvsQ7RCSGoNbIOytBYvuQBsoOJDG%2FylqCxtkqyOgL%2BWD27RUg%2BbN8yXpN1tPHtc8Fm5mNDR93Bno%2B%2BgYShTQByE87Y8%2FucD%2FZXLSfbRRheXQb0y%2BqEc%2F%2BGY%2FPg4ZdFDvLGxqImhWHNnnU6IQiSkT1i5KWs%2BCefrXag1YX2QE04XpGgjNiTYMW5LoW8fzvIj25TyDoIN0QxK5uT4cX%2F4Ubs4k0RdacmWtg5mcZscCpQOfUkJMPxhziuWS55rVFAwrKhVbVne3LOqOjhEWVkba2NlGNH3WBWN1wHAcRd%2B5BQohMVSK%2BqHeABti8MSQXn9h0mGNasDQ5IABS6gIrMI6FDObUxtQVgfyED7CeCSuWw49O1%2FIwmveXUOjp23HCrcA2Vi5o%2FI1XS3JLVVfnMdaOcbWaS0s7dtFv1f4AU6304lKCT3qQBtRTK0%2Fg3Gbsh%2FfxZwkSKh6dVkfairU%2BeF%2BnrMvWeKLkXU9EFSnysKjoKCntezxXkuFQs8F3gpgHZ%2FLcgkLGBOhoOgQBUkFzLRmI4t2%2BjCl8svJBjqkAfufDNfeH%2BnTSYn23IWIkLKWHXjtJkPL3q0py7wHkEuLRubtQHHxpsp3NYDwfbCNn5KtD11B%2BPAd2vI0A4b4jx8rhx7VqO%2FKx3y21tNwMkwgLFOuIQii3HMNjGQSxfweew1dZz2zB3Gi0tJ8wb6DT2ygZwt%2Bi9GO5szPTMVj4jkeK2RxAsT49QPZWOhPViWRMPnbWhjrNWEdYcGHDt6HnZKwOoFA&X-Amz-Signature=d48cab35c5288cf166b004e3e102aa2809af93a465225d97ea556a38ad4f6554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

