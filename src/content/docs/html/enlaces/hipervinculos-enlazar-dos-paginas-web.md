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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRLFEB5I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCjy0d6nvgcqkJJLyNxw2JvAAf4CyYZlUNQ4C23R8fOBAIhAK9QHbTTV5VYkUMVVITDMudjjRZQQtCD1QGq%2FdRkilR9Kv8DCDsQABoMNjM3NDIzMTgzODA1Igx9n6xBo5Qnis4haYUq3AMxm%2B3HJ68BNQ7xhvvpdv7JkT86U5JU97Rauvk5oggsL3L8PS2rUEWftTHCdzbbkqBsr6jKad%2FS5cYZ%2Bsv85o18h9FgsFpCrLv8CXmgqi%2B1crqa1f9gmzAYkcPEA0giOmCtCaz8BIZUNod8tJKvTKIdhVnT3nu2uzB7f00kWRItr8OjS6n%2B5ulAqNcNvhxNhE7tbaFS11Lo5TVwaAv1LzAfG9lfe2mIHcByexFWdC%2FtjgFknyhRU4vc8t2AskpryWrxHuDBUhs99eC7epGj9PGErdkkLGaHSgrB8tr5FpmJMXb7rf9dcMtNPOjV3NWA%2BW0CE%2B0tFTL%2FYCU5kgG%2BCLxPJpvcClmJ%2Fj3r4ziI3fCcyMlGVz8dacVwRTLVOypCmtodWuLhoUdmcr8uBKBMDhecqvYxs9GDuO2oBoGcUswFsyEA6ySQWMhijmvgZFLeNuzDdMkxHcarP%2FxTY%2BM8Qd%2BzRqpz0G01IR6Y3PP6uO37OzT%2B%2BoB9CHDvrssAuF389O%2FQm7zcJu4xBhkEuHSrJBSp0CRcr9lMX5lG3Hqia9sDfGo1d%2FWWIvKtkOhLlWE1sGSXDx7DeH9deUletWLGMMSfJgtJhrH54iL%2FRU5avcCvrRjttT6Vw7EsExqbYDDl1MPJBjqkAbdVUi2kuFpCZNANBE24EPJbVauu0xVR3u8SAHTaF83hL%2BifDEcRyqrsli%2F3hyj%2FSuWTw2PRyDV4uuoKtUO9GluRfmdhSfCAsLbajuZkknBgcgsjIzGd2jT3%2BNXuoRVRYlFWYJK98uR%2FMQ87eF2NpIqzvKczMWCxf4HpXyBSsgJE6OoGlT9zjGfPNMfazigxo6qwUNy4fs8JKvR9GoJiOffPQDpt&X-Amz-Signature=ba1a3af83b5cd554d1464f2bc5cca67d14036f6907874daffb75d29320d1c6ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

