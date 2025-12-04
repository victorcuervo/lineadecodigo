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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH3SQSGS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDnX4N%2Bq%2FmLY6VWCK5VHRg48Z8MQau9d7f7bmLN9tL6VQIhANHGHR62xuGO79BbOR1EIm2iP0WlNSun%2BCnviojr3qzoKv8DCD8QABoMNjM3NDIzMTgzODA1IgyCIJJKPQv%2FQrYD4QQq3APuBnYC5oRlOit6g5K6sOs6rW18aSrWqZ%2FNh5DDd%2FYj92guEcYU8%2B8PyFhLVR%2FYOQfAgKDrLplcHTje14AU%2FCDNNlsLeDQZiuz%2BNZboYh7gEfFs5GJ9CQFeuOAcJY%2FicOmHlLTA71CFSn9dF%2BdsoqQy1ySkk6D9Zw2CUXDLulufDuR21uaQAaMlpKwFHcwtSpjHRN1A2XR2Ws00h%2BE7I15WiEh7kHgZ44YwLJN5lYA6sTNqTtDK8oeFtLqK6AeaPTIs%2BB5WIgeulMFP3pziF1suA8j0Mkji5t9DoH9jj%2F5GukXtfSP5gePzXmLlkIB1QuAHZYIE1GOhpH2CtpD0UlpDaYvA9H0mvWVWHqEfPC415ueXLMXXZUE24INzz3oJ%2BSmZL28VLNqHQX9hfzHVJTGWcik9sQ8%2BQUwkARDh7VgBz4LjXHTsuBTOY0jPrcxJQVnwqPXhcaQB0clUPRT6FhoKgNrzHmrpfSJ5Nsg8J%2B1V6Fv8dwqTBE8uKB2hsG9OMiEUzzbAmmsmhPtbBfXgpDxx96n0FW84VBuyqGjnGSGt03m9tUgqG%2FhQUUGhICBRRgcrP9zJQJHZI66pf4NYKLYzabWsW6ujWTqjxPNtymD9UG5Stz9yB4Zvd6EeyDDLysTJBjqkASTlfgOkvWdye%2F29I023%2FF%2BMeDiyN54CD6kQx5XCR%2Bj4m1pCQ3t4JoJwgPMt0QNHbMd%2BFgAXKMEzU0UtIQxLrIfZZ4ReSY8WczhnH7pcE23VW%2B4vAyAqzcwOXuXOZ1UJTRxaau%2FAT0yQfQSBOGCutKTh1tgr%2BYo6CgG33ZIObABk9wckIfy5hnowUShUJddHOPi03CLh%2Bm6w2TY3EQizQpuOFjNs&X-Amz-Signature=ff209214af1f270c436a62e50dd0fb2ee58624503e1521bb121ddca24cdbc9ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

