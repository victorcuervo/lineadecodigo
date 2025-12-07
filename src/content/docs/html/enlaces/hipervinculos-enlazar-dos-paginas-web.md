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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBQ26PSK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBlvCPRtZSwpSVu51G08pEuZyahDfwSPMwb1tspsFBDgIhAPoJcPiHJ6Ayzv%2Fak4rW%2F%2B3ojBWqLpICGwEcm9SUYA3%2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1kLD4sBqhFacxmFAq3APZVDwsVcpdkXKk60MM%2Fr7z9bSUv7wKLKhtaxq8sRWDLe1FcjtGj7F87PSezZelC9ocW%2BsZ6vPBAAYdwbnsLUIC5J2dVBuhtNMemtSAzWj4sRmnNWMGZMXvjiO0nKz8jW3Kj4LuzZOZZsWrU0KdUgvAW%2BWojfoHSH37kVGEWCpy37fo2hRDFE9bCdKpGJL7Rn1gwH4sn%2Fg79MXqLXsdD7EMMWi2MHWgwsnBWHOYTJL%2BrF50fSFnwGOWD0lygcA0KFRY3Q7KVtTmnLIDlYPqrzviOjRewMInSLX4Apaeq5DOM%2FwF%2BMvZ0G08KsW6W%2FHJuer6lit7Qfqdh8RNONoNToZM4H2ASrhGr1GZaFTC%2FccO5TVUUfGhzT7ukA%2BDZhBmKtOCI3tZIUqiQyWimqCcodhvpxAmAFprTJiFK9qUXEpkLchpehr8f%2B1EBC7pOiAvPgSmJ67UrCF%2BWOIMxrePW4eSoxUsivUOuNGqW6aHoi8KcAOYCLm5%2BMIx1x8ywHYIKriNGT5Qul0DHYbtdVt903UypnFyOl2GJDKZbSxmrJTc5bhGlK7ckcb%2BmWEwNDNkvwIaKfVWOrPETYWaqBtyQR3WkaT3KmMEV4v3TlvUlydfa6zdMhfmFHIjQTJTYDDQutbJBjqkAdwE2lVU61dzX%2BHnlPeG1zoSnaFa3CgB%2FQq89Tm%2FKmTIwDzPfMWflVnyHWvRWiTwwBaCBKVf8b0Dmaw5r2GriTyU5N9cdBCMjqJvL2GIInf%2BTZGlp%2Fj%2FYStvTChInq6cRG7K91p9n1i2Ro9UQVg%2BhUsGsfgnmjVbLpl2QxQi7hf0SIlGmqDe2IFBct2%2FmSEoq9zh%2F8p9Pwgksz6CEUv7owFZeKzU&X-Amz-Signature=620ec272b85f1b31d7fa39b3148ea319080fbb449ee050dcf5be24d7b57dd7a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

