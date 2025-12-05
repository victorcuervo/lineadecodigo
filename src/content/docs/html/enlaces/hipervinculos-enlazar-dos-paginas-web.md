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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ4OCMRO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSyh6Db5ejTRsADyTgTtQVc0U2JpggFuSpV41qvQDBPAiEAqbmM7Cu5xJpF0fBrnmsEflucgiZjIGlEGzkHlc3Xefkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEhSFF5UAEkTkOK5sSrcA%2BYOK%2BGbZO1sOPoiUmeDKyQL4xJetDGxCRAKQBCf%2F7mPB1Hv3YOHAwE0y5fQYbjGBQtSjr%2B1Omm5dA61P%2Bm65CPpr65d4FvpqyrBOhoCT087sENj21ZA2hP%2FoU3FIK%2FK0CfjfS5X9pNTV1jruLEyFqzhd0enRjjA%2F%2Bf3uQlitzqkCN%2F23n1B5s3K3yal6gqhtLeHuyHOCFKVW6LkAUFF3KQ9EpFTsfiZOwalN4CgPi6pEekVSLbX%2BuIeGqdo5kVVaEtBTIDFfZM990DiZMd%2BuJbUDrpwV13k9yL2vOyHFg0grrNDkBfHxINl49AsFgsB9dFFZvds0FeBqIXxtLeQigA6kY2aeo8OXdq2hUXMqMdYoHGxO76uc0KtwrmON8ja6ZCq2JR8oBLhK6fPh8cLDBSYX%2BcMUdZzzE9bwQT7aXWY0PlReKgd82JJbCHzU6h%2FqKNGL2Udu8E4NDAZVxTHZRRTm9ArsQIcUE3%2F7TZ9hiWbhetrMDycSp13gn070A1MSnA874oDsD34O3%2Blhxx65gwCLt6a0Wb9Q1BzpruObZHiPhG3DOewnAyhkK4i%2BKtCos6ZUwpwF20wHiJFs1ooeBQMXaIs02jd5P2GAliT%2Bc4hYi0KXhBCQszNDLt%2FMNWMyMkGOqUBRZ8huEmEinYhSNTmH6Bs4dO%2BM%2FznA0Pa4bNxNhBAnGWBzkVBr%2BU66sf1xg%2FTZxFxmuWaQgq0JrgD%2FNH8QjdnsrwZi4zFQ2LEZNuRDG2qFLMv4LbIXBnN%2F1I%2BFtRPtLDuzALwdRHiUd3XMsXA4sSENuhqghgkwuXg%2FslXm0W%2FO%2B88kOyx5bnR5UM9uVXST4iagspK9k9sSv5pVBYKIgjNcd%2BRkil5&X-Amz-Signature=29db375b3e45a74bd47e47604faff61373688e8f45446751b6dae21f0437ed1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

