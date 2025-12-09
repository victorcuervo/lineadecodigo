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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TAHXZ3W%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T223509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbU0Ygvk9y9VGqyKJmz59WALOLaBHJxT%2BgpqiUcq46GQIhAOsbJ4i3fTKTqIuW%2B5AKWGTo5fSwKACXqpOXxeE%2B6l1PKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCQ05%2FZTZIYtUz9msq3AMtRSWTgsa47UpqzDkzEsjH8%2BHJjcOsk%2FPi4nNYbVA6F3oKOb3PBdK6krRCiqlU%2Ftx1fqM8CYGoNX%2F5KBlAHk6B%2B4pPiB7iUlYfZC3nTmeDbMLx6U2f2qSskTGrutZjULnXZOV7aP8mKes%2B8hcQFiaIRnI7sFBQi4P%2Bj6R2Z6r%2F2CcFssc%2FXAzL2BFE3nMZpnHEw0SKTU%2FeUM71NAaeaU3wlG1AbznPYO3YLKdwO5a6UPgnSpo6MAii4Qp6ytwbca7HbQCg8SK0HKrjroGPjy5PCfQC9Up2enN9uSfKi4Aqqye6zvefM8M9qI3DM9zMPA3pVaT2XSKHhPNx09jI3ilLJsQsBY%2FwWCoYPykt8P6Pj6lZyY844VKPXCskfh8%2B73JkUnPCc1DSRs7ZY7QAdbYPrWczxgO%2FXnn1Thlnh3K5YigFqY549h0Xn8NG%2B8EOsR%2FO%2B5L4pZR1VY45V1mSqYj4bUbs7uRf0cY4tAhguERuRK2RVauphlolUW6R0bP8f4b8w3PShLJsllrJvpPiNV7mIOt0WxzPpLvDe7QVxcMmeePNGR5fZYoW8%2Bayinz4XJ4m8us0Ak6OTutzlsXCdDUkIjkoYhsfDUmduP2m%2BIrGPlXFybYliE9AKHHQczD%2Bw%2BLJBjqkAXUDHLyQCH5LZIuZYmsYhlkN373H%2FbtHVlLgCxfctPaQS2WUa6ckYTv%2FNUj4onc%2BPbUFVhUeQOOAaFIkFtuA05noFGHUxgxCZhK0cyI5EH0eowWfV%2BYkpqLzf5CtMalF07iKbnpue04ryEnzSJ8fXXteIEv%2FQFc7%2FDAxxbw%2B8lnXWpEuwLA4yr2u8woj8oDX9YpOuXYf1lEHCK6FPPmiiJCXJQLM&X-Amz-Signature=376f5d7891bdf889988874f47227fbbeac3e9c7f7cce492d5af53e0a8bec9ede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

