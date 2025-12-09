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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TNVHOFM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T200144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXVv1q0IFU8DROTgJo5qRXp3Qktzeo511Puagem%2Fg5zwIhALVG%2B05NuISlJbvF1vK3lJVsXj3%2B9u6LE6gbUdD5XR3PKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLfRjZTbj35L7MZDwq3APkKWC1OjHvksBkUJnScpRTVQfeP82Q8zfPAWCTwvLhfg7Y7ZnSWQRhq%2FZga50LHghG4rtSk5y8%2BiZ8Zleua9EnjdJWlpbY2pZJMA9JNbVljjQzLprF1Ez93D7fvGBeVgQDGqzGfzQ0nZv8pHrUULvmSSHtzwvo5fBsG%2FPcJvPSdcb2QQqhacZaIcEhDdX%2FWfuK7%2FcwgFt4DpYEwAuGLK%2FhcstGbCVw759RYDY8QX6X5z2CG7Jkk0XA%2FPHzkJKnPXsrsDb5jSdVKLEJg14zWjjBs2fWIEqvpaP4vmCuOjPpg%2FW3Rjm8FWPFoYnv0Hl9pA9iUn0%2FfLQLIW%2F5pm97XoP9aOjAN716B%2F3k6%2BhbZWlcx72UyRPjTknXNLY0SD3QkemQpdPNytwNsCnOgVKBYg7VCJ0lAWqPN%2Bio2qS1RijMYthS2NpBGE%2Fq0nQqm7jya5ikUafBUO7w5pR%2FRihtP0qCIyF%2FODOGqLBi7eEK3ZkiqyoJhUfK%2F2NIWlPbN4YudLInaH8PJAbDmAtwtStQkxugz5qfh%2Bme4WWVnoWn7beVXtV%2BRv%2FyXVj2bqO%2BMlQqlEQDfkSCkpccvcg%2FGMX1La1GkK3NUy4D1YVcnMchvOOu4517b%2F0aU9t%2BbNMMMDDB%2FuHJBjqkAY%2BaZ3FfAX%2BZjm57sRDDGE1W0Z3HgKwZIoZJgraWIc%2BygI0OBh6O5jkSQUBf46C%2B3xG2PuJ4ORbIr2e5tRL9m5zPlKYfmMVBTYJud5IYG9%2BQM3i%2FhZRSg4igrdak1CujN3rHkMs%2F380ao6BoYGsSJe%2BSeLuPvuasqceuKfbVBIv2lXrsjCVqLtpfiulaNVDW706TwWZl3YigLmt651C5609oN5nH&X-Amz-Signature=5f65526f686aa053497008007607d34f9c46d8cdcef8d01a57ffb5e37a837865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

