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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SSIU6G2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoUVUtDhWNbtH3JY2AVDgF41%2FEOMhMHR99YtB2jYiHRwIhAIyEJf6eOP7CVBiww1Kv65nRovM%2BHm69IczF8oulNQDiKv8DCH8QABoMNjM3NDIzMTgzODA1Igz5lTj%2FnOZMd%2BusjZcq3ANjOAh8g7Ue3HmdoVP0uciCC%2F47tywyF0mmKiB6LvEvmSpfZ2WUY5F4itIlQcX17ZrgoypuBkOA60FviHaHQmjVI2WoxmJ84MHaLe9yMVM16pUbSVAZ3vebC6JDf%2BbXJYfWRBr10hzPTj9%2FAfq6Wygc9SyGdqRf243BLBmm52JZBPNvG3qG92AGiRGvpVFedbOKxpajCj0TGJNHaZ4JRgm%2FVx%2BfoNsiosujIWPKsO3jLWqUf5895wcFcKrj6xzON%2FymOB06MvzALYP7KGzAai1kXeFtb3v3HvTYxiJdArFPt%2BBEKMcYrQbNc9%2BZlefCAkV5Xz3A%2FwqBtAu8Q6YknX8aKhlY6VBvT2eBMq6sWOHlUpT5wRUPJtwrzOxDMyNzepvduqzfw5a5YV4LGONThmFLJeEYqUGv41Q7oC12fsp8CW8eCfNJWtbk3Z6Sao03rs6HaXMhf1Ox32WHhmnSMWP4Esr3Ja3GITnzWibSIRE5omOxGLhvERmpqhvPBEiFpwBrQomXDdcNqH5wcSA8Ydlrixe0873gP77olBrDL5%2FicnpejhrbqrEEOSL8959xn8vVApM73c65QHQrO1fHPHZ%2BEVY0nXQgX6vZZK9qrPNMfu1Lu0Jn7YCXqEnUEDD%2F0tLJBjqkAQ0dcCCbnkBd6SuFkoQ8JIViic8ZOrf6aMqYNFGUCqogbHzH5eiF%2FYIF%2B5bt%2FwRsslNJhNMwZdexsFPfDE3Ti3byCFSjViaycHSx2IqNboX1eqUPeOi%2BoJy80BfOzWHSg341EbYkISbMmnGQqbXGeBQzpnyH6GPpqf3iRgXYrksj4xUwxIMkpHBolTSBJrQLIGCKJu8EaswgpsQo%2BjxF%2Fple%2FaS6&X-Amz-Signature=1c9b93c8fc8ef7e55a6e3804ef0a984f6aa771caeed17d0a22420d6e027c4fba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

