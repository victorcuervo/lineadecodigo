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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ICHCSMU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T162441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0swFBHRecKAhlv5t%2FGRByDrwflU01k2Bn1euM36%2BhawIhAN1A9W0hMij936F1GCLAkwQKDB4JKzkcHlH5gpNJ3Xc0KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyo7KWM%2B3n09FpPMS8q3APqVzPDsvhGJ%2BVici%2FcYAuYueMOPEtXXwwqM%2BESUdKOAKP9Gg7SNIgLK3qgzcFNu5f9nDUCoBis944vQ58ECJCKc4cmGBxFnnRjaOrYeJt3sOCx%2F7JQapSIXwEzq2RlW%2FC3rQiLFFfHENXzczBjpj7I84mAvYOiovIrovBjToZvdlOsr2OsNBOSmxGUioXIb8NffgYa2RZ0GIt3vOB6WwyBm8UH%2FkWeoezTke4LMtpUeaNo9xXFhOWkuC5Md6nQmE2CgexrgCyAjM4iOfI5g8eVkbTmtWZALRBOdNe1LFhkmo1oev4gwch%2Fzse%2FkDz7Sh9D1yZPVSp%2BzOoxhmlAzwfCgzG4RIwT6DBdUP4xD%2FORaW%2BQUE6Mu5iKI87e4o7y4DO05VAN89ZvNTjIxKmDnRZOOjQPVQLNp6FtjaxxcQjimAtqzVFBU1hYsEUzPuzRqPOY3UHvRlqgoNp%2FjdWRzIlnNTJjNPkM29QQfGmyfr0jnt6d7KBMQA5es5%2BjRNn7sKjIHxDNlv61uLH%2ByNTWcISY8TUqnvLATOzb3srjkbPsY3DthH4cuwnyu9LJoV2A%2BB%2B6C0TTkqemxWs96h1WysyvFwIkcqyFwsXQWf7cGidVjcmGeOK8OiUYGE64NzDEl%2BHJBjqkAVUKW2%2BrHrkXtfqVbkDFhqDPtithfhYvmZ9fXNtzQ%2FeZy3ccXD3dHcGXe1py%2BV2iafpUcnGxQn0dq3WeilOaXg%2FF3QV%2BPbvgFg14in1T7vgg7dXxske%2F9K79iHtTAry1sSoUfsG6X1ZQYYUPbwraYFrjGjNrnMojZooYc2l16BZxcjHb7OciB%2BpX%2FgDH8CxwgBWlA%2FtiI0D5kFDYzOakIVG86%2BS%2F&X-Amz-Signature=b7a10bb8910b23a9723253e9f78585407ffb8b9f5e7f47a821b8cd16ee5867ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

