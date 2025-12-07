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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVRLS3X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxTTI2S455mVHRIX%2FZBevMOwzR4CuCksvEnVK%2BT%2FsWzgIhALEw2VZzF%2BuQnicqnnqnCiKBm1KtUVi84Hf2%2BwSdtARKKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BKGJLAQqEFhAbFu4q3ANYIO3XtX4PAs0jyE%2BdJyoZed%2B%2F7x85z9LvmHjUvHhEWBwaZJgpAV0to7XS%2FuTmNLgwoMx%2BjCfigVtJ4vffrJzskloG8W0puwXQziydqD8GuDUtoTp3lc%2FrMkXIYUdMrxyVILmWeDDdLv478QeVrRIR8bdti3xNgK280eVXejfJkywGKZEKshdT1e39NsIbF6gOnTviXLc7Sg2A%2F2A2h6rdXEU86dfAXFzLYDXHbr4hWeCAlPTiCs9mPI58tOhQbYGI1wDXbpYxXn5YC8N4knD5m%2F47O6EtUAKbzJ%2F0YrYWCF5lKoaeeiugG86cwJnW2fymxW2Eu5ghDSIXcFobVMYUZA7sFXxnxnmYsipcrT7z2RarracXgNdk783atEnPrvu5lMq%2BrpAvh6qehoOjtvPaiw2VZs4pnW7iTK32Xd0ZBJ3xWVi%2BVk2p6aeOm63XfOK9TRe7KYahdhjTcaB7LktCQsKjlnSBejC2YRTmVrEN8bZp7Q8%2B7hAmanbwOFp1D046oSmcNTyQpWhnF05hfmdQy5krOtQQ5Ya2xOBkh57hnZRQVnCZFCPaJQGTGnJqNaS0D8VeuHQ%2F6uPWvdARMGyHkOGBE1%2BiKMv%2FaUO9H5SAiCUPatH%2FYz2gFqz5JTCeo9TJBjqkAU3alkOnHprF5mLioAXe1P8jI61mshjrcIMrkenOCrXo8oyaLQLML0rJK9S%2F2qOaCTDKGmzoCKN8dmDiSCTC0Yngg94vgbdgobjiKz2XB6PqFcjUYEOGVdCbY4FOmDaL8VoAW6d0Eh9BlWd%2Fg6hExbwzhGsTFL4jPlOrhOYIyM2srT2mpxL7uCwDa1k%2FHzdVesNCRbJHADS4NXkxrmc4nLX%2BdduO&X-Amz-Signature=8f8b0bd7225e03d28ca511e3a299df0bebbce1bdecc7c3a29264d9308d8ce6a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

