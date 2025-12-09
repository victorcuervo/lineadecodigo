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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIZH56G7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T154200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFt%2F9ehGLoBheuiyaDeQ8cZucP47Vhwzb8bAOK1r48tAiBKRct2Q7Teod3EczUVIBhf5k%2BMM0oQbOZ7qLN7wy40eSqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw%2FTb9d1rgE5OfS%2FBKtwDt5kN3ez0kfu5CTWlhyqFVzJwOFi549r8NkGzEJVNqsEq36J%2BeVVpqmIdCI2uaD5e32wrnKUK6HZ%2FpvNN35LU47tTQE6WLgHRd7dzNsoTYsOPnPKw%2BoFvI4kH0LVj0P95hvaC51qaXdPCvsU3XbipQ0blixeW0kqXoVU%2FEq5WofbupelcmogdsDQh1EZXCXijjPkFI3U67a8zzNIbIK2fM2ZFQGR5hN819rd7x28%2BpeoBAD779pinoy5cVvSdkqCiPvFQMJ3dctxEbF9eKgu%2FMVEN31MSmpnQAuNYaLv4EeBJsZSq2QvfYCS%2FvL9DqdmjxIf2645B8a%2BZVGuUh08P%2FN8Yet8B1tSRcaFraxTz1BdpXpWTJRlI%2Fu6%2FltYyV5aHKyXvmcEvGuZtT0Oe5a4Sh9KOa2aItC7qerIkRIuicAhmsJMncW2pz5Ofz4Nw6udBlMFStYupDHdFBn%2F2mE2VV9YuNIHXWx%2FV%2FrYqRyqX10eOY1ZArKFYE8Vb%2FeVkB0rMeK%2BybPImiKn0uVwhPFPlpv90yUriiIHadcERdr5Ug%2BXij%2F8OpBXSFasaEOS1OLJLTOVr0jDace%2Bx7YbXb67T%2BDHNjJlDsJGvRlNxd3TwK%2BxgmGYTRHp4epOJPxkwtd3gyQY6pgHTF6W4VwOnKnEt2aOYHzuqLK%2B23hOifB6GVApAuMc8aJ4Uw68O1ZqcvzQdl1LMNVRyVTNDfgle1nZbr5ZTfEqXMILbbJFBxg9h6tbFyR3IMBTDkIpjoopXHR%2FiHl8BA7CmzUujq2FlCHsjadhNNut2GlS1PYp7zobKYo1loumpECFjwo3Buy8Z9wYSUCYPgjcVzKmxzMo7q8yUGSFtjr3xk9AM34Ze&X-Amz-Signature=d6b5620942b792cba75db2fa54b83cd0c40097f99d9ee1faba86d80e3299d8e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

