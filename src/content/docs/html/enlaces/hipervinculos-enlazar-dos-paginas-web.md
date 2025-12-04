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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2M63KY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDqkp0oQnohMQH%2F0XQJ%2BL0jvOkfkrfYWBGp9NeHXMMwCAiEAiz%2F524dIKnVZLjRVh7gizg5UPgoCeBPE340oEiyGnOYq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDPLFEMu5PngjHiQO3SrcA8%2BJVfoFW63m6cmvxtatv%2Bi5eVJVCubMOOoBorJMJlQmfAYrLx%2BXHjLn8W%2Bi6Tp2V1Q%2FIBYHy0Dl0xd%2BbvsQVMjkcrJwyAQE39NPlvuOsp8nSeJ11RyUJ5ifNsoRXSvwMJcmgM2lNUSRvpkppoRGNRZ2RtDd6ZBCD1IABE7QcKT%2BySs1UljDeZxFG7Lui78A4q4pnDXdBiFMOgw8DsH0S%2F91fWXPkily6M%2BK7AYoFwqq9I1yg8eRackvkr%2F2FkCDPjcQu%2BIdzTlFEohV%2Br2D7Jnz4vXB%2FXHI5X%2F8zXAd6mm5k4LU%2FmQWI%2BPusew60eKYZZ1A8YMcTLwGMt%2Ft2ECSwPIGg3r3n%2F%2BNEHrkMS7YBnQixRH8DIxvlQe0bOFkvELHVCCrtncsBhyATgnSq%2FQH4QVRzJ7MoASrvv3fi19dG3UNo5TzEa6nha3%2FAi6ECkrzINjVG2ov3xVJSTLXa0aL3UbBLHtTFaT4qDFdFsjg1fqPxS9MWwr072BNLMois6nE11oN8%2B1IuT7oH598P0IccaPurAvViJsOejOVdTitdv1pjl1JvBQKp3RZujn1t14jCaIMqOAznvKi10iV0fqf9JsH9kgzygTl5ey02h5mpQqV3t2sVQxHZyC5NxDbMNjnxckGOqUBmsYWfCJhDfKmfb4UTCdnNEafc1ZibS6IYvlHclwUdZ%2FU2%2FSnUla6HpKpwvUw8MmJlqQIok9IV4I1WfjT9ftlFa5tfNcZFXEUsM2z%2BTV9MYKjMKOKwN3SfwNqg2O59rmvy7zLLdVbvcOvXxdUp5AehW1KJivX2QIulrHNpQb%2BpGQmmB3s7z5dCsb07sgOG2SIfLZHua63e9g%2B240dsuoLcyOXwD62&X-Amz-Signature=235864153a4abf6e11b479d3b649ed9639b0ca1d05f3001361c898f198e30891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

