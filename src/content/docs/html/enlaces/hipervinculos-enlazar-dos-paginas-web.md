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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CXKUZRI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3oJVmXZRprlpn4gDeIl7fJcdYybu4B6lI80bysaShAAiEAqioLEjHaEuytNgXtyIODGD5fPht2FSdWCO6zmNdhRNEqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKL%2F6RA%2FvO5vtv3syyrcAzpAXvoxAO%2F9qVWTt0%2BcNhGgJrdsPSsrl12OkuZu0xa9s1ttOUUzipArX0kPQ9sovcetdXnZKp29cmK3kXdFtTr5ZRxSBq9uhDvYld2ydvqgecAP8oyKAwi2xa7G2X2wnqem99StscmtdKzW6djumiAjbfNG2k7JrkKQpVAxKbtyqCZxLRtZ1hd7I%2FnD97abDYhjdPQxkgmqjKF4lpS3EU49HXK0%2F8OgtsrbvNewMoM9aGeHP%2FXF5bhYwCZis07v8E4B%2BT9qaCq5YPeUX21wlBDMZ3VsF5xAOp46mbKZWSouOrVwI9Bw0rVfLWnxR1sIM05Ab9SApUe%2BaVVf5QUbCSQqmFjPaQAyHIi47h8F4rliXaQHlMIgSOyCT2MIAqG6jcy31yV1tgqlGAZfldePHM4OyoMMJxw8Rirx1ZuJOMREK28OiiFNFoKyBFTBl0wFA9%2BR%2BZJKDI5j7BwBYURPcFoWbJTSGvgnFHCYA1VqrJKzTjvOU6Ewii2G2V1RrPQwOxciRQi%2B7%2BlPeCetax87AIZ4k28VFr9wgBgitxH0Bui50eJyK%2FVijNtqvBTPae5i5mlWPnO%2F8nqh4LjQhoQnkf9NpEwvYYmH0Jm3rKcxc4ojbaNrhIO%2FZ8U7ePhpMOfB28kGOqUBq9tOJe5e5PhOgCDc2henH83vSE4Dd192PseZ8lXfWlsed%2FiXPOLv3FTFdkstuC8SU7GSnrXJOzMvf9XvSoMQLMTCHTZcfn6A97VkLahfbePZkATnWlzGFyC6Uecc29LIXXDvxQLbDjfahgLG%2Bt8B14AgzA1CAEjg9IO0QvnzO0zxZZr1FbfBC1ca8PGu5qC7buHcOQsvdmrNVfB%2BNUEQPDvuE7n6&X-Amz-Signature=0ba21cfeee1aec679f6507c21f81a834addb7ca8d1296365e4640d5a3cb2d5ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

