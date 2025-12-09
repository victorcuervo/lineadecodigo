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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY6AGODY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T194840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYokjtTiPBxugPjl0pKHVmBS9rLkGdCtypfDWtch9mSQIgOL5vviUlrglyiBQwSVzrgqfie2q4Rm0JjKQQ3hH%2BApEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxTRr%2BjnNr5mSgUqircA3Awu4AT3bMeLdahn6vzzArmF8LTerZdxk8%2BbJM7VGmys9e9r14kRzBITywbyKTVZaQSRSUZC3k6w3j0duQ6UrtTEYuHtLPlB8V%2FubPsGNoW7AROk0Ox2ViU9Qz5hMYgWlSSDz156WnFB%2BYWaaZB8%2FMqpuwFbwIIuOrnE%2B5xg%2BiOlDQ3sQ7Ed77NgoA3e9RNnL3Ql1mqQnI8QvQ%2BNTPu33othOzTLEzVCdroBJiZcllWBx9gX0UQ89kkyxGctwdidXtDMGiW6PqS9V9fTzIXG8g4rAaaaO2OgoYO%2BVXHPiTyfidQJjPd%2BUCmVMRdxCVLJvpwCOBhLhZWo7XRW8ufyY2ZzUeY%2Fp6TuxypijEp5mmxzftXX80slhXFrazxm2JOt2cWjt95dga0piHmkAfGg2tReAO%2FnYqXVsPPkt2j%2FMfs7ZwhqSVDCZDirCmNNTcfDANjAursg6YOd4JtgNFDMydmVvOTUq0hTR4GpbS3WXFR707FFV80QPskRRMWjYhpYHmpfyoHJdYDM1BcR0m8zQHiFFukJBFq0UNovNNf%2FHx0Yy2SbnVBEYiqvTok91sW87w3UBvIKjIBZK86R2Cu7RcSvep215LTZiztyK6NSLdhdKuVX5y1m17SJM3uMNDf4ckGOqUBR1TeD0DkAMk%2Fc5jJqusfFp0UuD71UYigj53u4Ck2QhSD%2BvGOeV6DqQ35T6WNoq%2FXnxGOEgup0HDx1SMpWmSm3%2FLEaJy2Jybdp0ysCLl28FVHCQqrYdv2o3%2FDE16FBsxKS8enkbAlP7Wk%2FWtPCO0rMGoqU1lbDm194f%2BvsNk7H6xY0cFAOXpFzQGIrIociXE4i6RsA%2Fe9aZI9H1FsVEELK4ll%2BQgZ&X-Amz-Signature=37dc030d8f26a3fb9b1f51382e332c8ae16cc62e987d514493d941c4c6907347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

