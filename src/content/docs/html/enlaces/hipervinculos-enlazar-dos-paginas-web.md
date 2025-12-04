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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBPNDVI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiOSm8mYViKu%2F8%2FZWeoRbmJq2xUxL%2BPlwpxbtFBDSXJwIhALLkaUaz9N5SENxV5viUqvJFfLHX4dd6VV2hmbkD8lymKv8DCEkQABoMNjM3NDIzMTgzODA1IgzqU82AS0usfswW8OYq3APyOMjlJ6bU2MBcpZqjEcIQ7jnMWExCdTa57L0lyr%2BFXbdyV297hLH4eyvyekAeDGpevYT%2FtMQCiQv%2BbxZMisxmBAVzOq3v2UfB1lmFVjKmKhSveUGStI6mWhdcIFZ6QOrhhKZ2gkqsaM43FCd0SHylk%2B%2FqWp5D5ciIEGxQbiTwDnLwCMs1y%2Fxdgj9zxL7Fvejx7stFcRc4IY8Lff0YGnEV5UR5OvdAHYrRoHFAPrqqc0dHk9WDBT69L8pHrW7g2WVnGUxbU7Jgof5vRDMDBrKVu3Fs15VUn8xPaIQFRm8CuOx7S94dcGA1ph%2BIomRB3O%2BxvdUhjivPEL%2B31UmFxYNNtntOC3Rm1%2F4Jjh71OPqj0Eyn8Mj0JMf9VAMUl2dSV1l0wNLDjfhm3rOt8sp9xesdb5xGkD8G%2Bcbeps4KN4b%2BGWzEtQn39j8qLPEscFK2BbBmoitXnOSQ2PtEsPzPfat1t3mLgXFfH%2BrR1tLwj2g%2F1DCA3yUb4Mkxtt50nkjpP7lLwbPcvM4aU4pNsb21KkBL4UnPN7fxT%2BpsXZ0YhQn1qvSr65p%2FLHKov8fLwHUhcukGpk%2FX9aYsyyY8fjlzwSryPd8zsIYDP2wUL2YBim%2BuWZ90znGPiopvtq6yczD93MbJBjqkAR09yxfRM2DqHkySt05Ea6ifU3a6%2FBH7hCJ2jYSsHqvW1zmj2vC30UQcJMBTn%2Fx4lwfWV39Ul0vErDwaS3C1WI6tX2tEUExhtqI3KcBa0VUL8baUFL0ElG41EbEXH9DU3KqyAXAjfIAcyouG1koH%2BKcDDFNAxBy96TGkJ75NuCvSuYBU3IE%2BeAyHAEf388VaLy9k7IaLqrLg3PjazKWfzurOZXt7&X-Amz-Signature=28fb7185a6ba294dc72ed366a0cfce3c8345d3a4bf4fc81d587663b88343eb36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

