---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EKEOLPN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIF1paGjqkIqh1XAjSYDzAHc%2FyVxlBsch1K59kpPiF5BwAiEAuDhnTAn23lKkGKwuQkjeRMsiNcmDdKivoSJiU%2B8L4Q4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDLQBxNQO6VqrltM2UyrcAxM1uX94r3K5qS0q9sTPsCR3lGP9doy3pYVuDEDKbDSt2LRNHXt7lC9mYejUBCHFdUp8P1uhF9LHa44AIJhe%2FOVuD25zkYJZKf8Hg7hhtxIP8xhu%2BpEwor8%2BSNWdcL0gXr%2B4v0zR1JKz%2FbXeQos6kbT%2FNLmkjOkKt%2FflsxkS2fyrp8SvH2QlAM%2FPgoU0%2BGbnssxaBY3JJAyipEKxyRIuR2EjN81b0ld3ThFj7rH9z8eEMSxkbAtqhXSe53CgD%2FM0nEW1TOoK34XgeSFw2jsGWwG9rQrqnIqPBRQ%2BMzIqvawF%2FKLbBAVReWKzV7T3%2BBjHN9KoufpvOYXBbvZSuXWDeTblJ4xeCOz%2B%2BKUXm20pHR%2B78CGDpDIKd04e9j8j487PzHgF66Qf0R0rr6KIXSlrBucVJ%2BMqINhcAFodukIKA9qAkf7YL5fOimQRrgYrMWEBuSpeS592KIFyn4oPPGHLYfRNuZZCQfRDMWrG0PBtVVFr%2FQQXvFurcrHDsUKM42jtoQUxR0Xot4M8L4C4v2iToxb3X8QEaazwv9%2FDJziZEIwHad1pa6RkbNn7AobYOyNW0jZKVX0DhgZay4FOZc01YKTLHDNRUwZsjM8V7t8XMqk4G9K3q8RsvQqqyp7qMJuDxskGOqUBCowcJyu9pFnlrFcMCnlXxmzcjf66B9igbWKYBKIo07qBUFKnGR9mN1z%2FIIg4h4vHgenMzpj%2FFTfBwzo2sf3bNIwRigmezdCPwuot4XQKi8ZJELouNSy2jxmqskVrxFj%2Bazkk6U8Fjlst8Jq9FO8NCjhaxdA9Ps9MAGEqVLk1%2Bb6Rj%2F%2BxdNIUHIp4vyuY5SJ%2B54MZQWZ5ZxIOpgRu%2Bo%2FLfM4YVenp&X-Amz-Signature=d44c9c70424e472ef3aebeaf533166a45a9e510b1efc037e39775d60da7ab501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

