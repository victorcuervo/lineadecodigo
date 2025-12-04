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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OCAUTP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICRb0w%2B%2FJy%2BZ1vgROPw2ftHlRxaelwY2o06V%2BmLGdSriAiAp2zRlRha6b9yME%2FciRGdb%2Fo1GvkBRjPMnT3%2BR5%2FsWIyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMW54Xkj1OBadv%2F96lKtwD0vt4q%2BBteNasQ26e6JOrF1kmq5oT3aHDXQGGSWPIh%2BkiG6PXPrqNr4tnbrDqIebwDmeUfa2%2FDOrDxFIoSceQmxr4%2BDVlJ8DJNpLZUDaT0aGoScI9t%2B8nR6OBHUytd9s8Pn7BbwGecx5MBT13n6%2BffyqjYsol19Y5hcPcgSw%2BiAuzC0EwfhHt%2FudHu8B8mlJ6cJKs%2BLF2oDju2sHNQ5BMz6Aqf%2BR8CaH3LLdEm0TcIVccvUliJ%2BRNAalJZJMnglLtpQwo6slNxoNezBsnPf%2BaK2rYWlyE37BxH%2B2EsP0PfIb5dWCILoNz0BnNaru%2F51V1qj7H2xzEMc3IceyFEEUn%2FA0mdMlhkG94RdPQIbXt2bJ8bGImlsQsN8MhDYVB44z43KSZD7hH2I7h1zKEKB6Ow4rrmdKgaCw5pDqqRGyw6YoJe9lavnwmXxmpMt%2BD8nhauWlx1vgCcayxX6EsgJA6PQTJ4W9mOJAk%2FxZNeArQ9GssI0mMdYFJQSb%2FvoH5uwiPssxRkhg0GDU5zhQByIEdvH3PZuwAS5CO7KE9qLzfBUFqmujVKZBBDfLohN7h46Fs0ej%2Fxn%2BMSm43jH1pd8sueREDbRZnNccG9Fo44eaHKVuDxQ%2BVJBGIDbpo5%2FYw9ubFyQY6pgE0JcmHeZIGuYYsnKzoWu1IcUsFHWdUxXm2ik6bM82FpJPcHrdw4iL1wv%2B5DWElGzEP6MftvBxcrWFjyVUiHWc9BO9bgnyco5APDh%2B3oj1aAPGFwUKqXeSNqxx977FYUXSD6MJ7dh9FjpmElLYu6NonGt9mKygYWZD64vrM%2BgRwihgeX6x9AKQC0tyAKYEjm3orAhByDM%2B4KX8V8nPTstt4Q%2FPLaZJP&X-Amz-Signature=8db73076054a673cc31a02bcd9f7b3400831f979b0c22ec3e9558e46f45dd2ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

