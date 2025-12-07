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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QWZJ3CI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T101211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk3UpUl2sVuUZt5QwZ0kKknhljKduT%2F5VBcGuepiA1HwIhAPVlOOqLI%2BmeiHZPoQ5QlnTTt849aCCWTAAnHV7lv%2FLbKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzD7TfldHYpXQnxHpsq3APuZwv7aGRVq5Xrrku2GtFBAOfBSpPBkSvwiH9wJWDRukIr2bDUYvkPJ3FTSPid2ozQ9S5J6h8yGw9C8YFAXoHHa1aabCF0gPB991ntDcVpD182UpzrbHSGhlLVQ0PTmdGLDsmwL12KebxMvTa4UHn0Z2CkyULoRqZXr%2FukzToCLQDFs3oBfddbAwjXGsXqPDv%2BVW1qeARhj7ziQfqxt34QSrL5PNVifxRnyospY0dG8GvDqgki5IMOY6SCR4DY2gG4xK8%2B%2FwdsXjjAeqgQDF9Nc7QFtZtEBzruMH8wEUIKPRSS%2FtbmG%2Bt5BwD9MpLo6CWKInIHz%2BVg3odmAeoG%2BcPaJQjRiLMZ%2BqPaVETtu3Ac0QE8i0Gex6F9XnFo0ct8E9YvXF6PNs24%2FoeSG0b6ZE%2FdTv6TuqquOZAe1WYMQ1qGqDPulhN6hRYa8Oa3SxNMyzFScW2%2F7oA%2Fzo1QOTtyAxodiM7E2FqDcuZyOC3Odisu3etDLj4uQt%2FNOHbVrNB9XkK%2BAbF7g1kAYt5E7oF91S4ncODpG9wutSVvx1qkldSUBpxsqHfj3ZyxuxTOOmFcBrzzxqjhjn3LZYl1NzRSKP9z%2F2p1y4PpJ1D%2FcB7Obp4BzfCVCsskBbc%2BvibpNzCXmdXJBjqkASoCtQTtq3BJamKtRzNX3%2BQM6qaAFT186YHrK8Ik1thd8nqp9i9jN0PWIeCi6YIUGDblElZG3Ei5JmROsYJ4acdj9t%2BK3bIQ63swT%2FqGhxGQ2Ou2B4wBIdMaZ6BsgGgVV0GmK1BaJ%2FLIGrMf4B%2FvS4H2xeAPxGdOm%2FRAHelYZL8lBJeI51P2v1qMgJzgPVPvQtjCQYrMEBomh%2FPe57xW1OOpPBSP&X-Amz-Signature=2a32467377ba68fd213da8aa8bea3e6d4a8fd063517241bfd6fa09058bb30b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

