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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663WUEGLK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T180719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMWkl7HL5Ctwl6GS2GRWCFGljVS6Uij%2Bh5cuBv5tq4pAiANSDUT8uE9Em3YYaqdcxz4ZZ%2BSsfqfqMzFB6lEUel57CqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW15rWTPz02ISQdhcKtwDsasDpZ95dSNt0rVGdB5Mz2846YzmekxGCcIyS8a3HYTj33oWvetu7fs1qFbZcd911j%2BrhOI5HI40B8%2FWOhrGgvUUANx34gMuPw28WO63Mx0TZk8X77TnvI8BcpUd91y9%2B3O6aba%2BdGWbSYzHlVc0YZfFuYd0DBaS6vRtynss8h4Pq9fxXsh04%2FOsIc51VK44zrsHfNII%2BDZ%2F60Dt1KRIM%2B3ARQd5l0zMFHHTnPA5dpYPHz60ukCZaEOq5vdf5RgXVAJLPiNfjCBiLo0mjDi6Ud6Qg0I5fIqBA%2FwboAO%2B8NPps5ExjQNKfvB49DRTcDkDs7o3ycz6zWavxfbtMcdF6VBOzcAXobxZ1IHN6EdBbQ69iO4mgj4iQ%2BtBA3NBouDwx1LkT8GOr5ykBB2PU%2FQeI4DQfJhtLCcX05nJdd6oGi4nMLm0YuJJ4TTkpu0%2FN8eD9NSKbLJGZ4vvcJJReg8TneDixpSL%2FH1lFYgtlro7P6UTMla3LODOpRp8d%2BvX%2Fd5Q8J7qxzKAmyJm%2BqT%2FMV0o3JgFvG439s6JCUXVspVFtkDU6U5gP57ZvhGAlU8PIbk29uCAGXI3zBTbagro6yiX66XAzIp2AB6A%2B8OZa5sUODV8mQSDbuBypDY1NwIwprzhyQY6pgFVMW4w8ncinNk%2BLhdjsVyYGcneyfu1i8dvpEWiOvVtTinvBRhxYt4WQWu3RnJat9fw3xGWiTIHIQidtTU5dCwEb3kACS6Tg89blRPvLufNCkfYzYVAobturbJkwkR53y%2B6Utx9lJ0Srv1bxBnxUsWU43sceOLfm4wEnhlkB9AVHhYG%2Fty%2FlP6mD5ojKXELMC5mDiE7ipLsC4lgHamYxySGINEPDato&X-Amz-Signature=9dc4937b6a283dc1de8dce25b840598b13fbba44578418fb6dd7d23c96bf2e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

