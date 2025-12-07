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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L6QEX2E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T093654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbg5dJbwq4BStNdXFjqgMg1KyliMIRngmAQUcYE5XgMAiEAm5W%2BtAs%2BMWqVzOHnD8KzarhoYzFJEFoyVz3%2BWUaYLHYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfS9tGO4lE%2BSMy4vyrcAyMvJ4ZK3Jaz6ZoMlGWaYhCfnCC6j5bRhDlhteB67rktTKS7f9YWrxtPf0LhKTjKyJqS2Zk2AufE%2BC4VWBKCPl%2FrZM5GHqi4XTzXiCoMwe8C5LfOypg55hffiqOB39J%2BWaC8Q4sg4UbNW%2BN5fa4JuG80EBdQCtNFRrhpq4qKD6FOI5darqf2pacDh6O9Rck78gYOM0Ltt5LdGftuctGDBFa7XLhrme0GOF5Cafa%2BW5C2XqXxCRnm3XnJA1uAvvdAwkWgf%2BE7qNIeVMZvC%2FUYHhKvfTAtuD13XTT1mckzYt%2BEsuwHjSYdrfGekebP51s0km8XOkiO63G2P5Cq0qvaSIm7Yq7Dsp3F3jQa2Z6jKcNEpFOxv7IcFFau7MvGlb3crEjkncZQOz8Pnjcav7atkUbKUHG%2BcaIFCV%2BO%2B4QdY4KRNH2K0ArKEsmTs5aFI6P%2Fe1qSJBwtKhoLSyACzIffskOnkfAW5MEzMPGCFFWHLViQKFfuX75i1RooFv53k1LxfTAZEpz1vB6ZzX%2FUfdTJFi2h%2BahjCPdAw40x5UwDedhj16vrdyX1tQuP6RdzPnpTTv463KP8JTRUD7XISqVO%2BSDHoxpvBkox1a28VNf6mNDuzMQFYTUxpSS2lY1SMJ2f1MkGOqUBnxyxw9MLhMD3z5Ebhz6hEgy2flyi17FE7vqZr%2FipPR5LfHgQSqkch5PJUUFHu5UOMrZ34C8gZCAUmEyTRr5Xn5A%2BS%2FRgi7foM3lhfpcIZNBTd%2FVinA%2Bx%2BeXuF7w9JtgwF%2FniZCU1ATEMUHGB0sbgoGCsABPGY5CK0VpQdnzlQqeZV7d5V8CzFU0xFcuh6sqGStzWbe06AldPpNjEuRDiSxwL3iyN&X-Amz-Signature=dc0092b9a6275e0ed17b0f7aea1f1678a3005187b4c7602095325742f896f93d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

