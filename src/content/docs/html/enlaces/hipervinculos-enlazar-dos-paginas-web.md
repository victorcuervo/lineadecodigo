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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SN5ZKS3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhX11MxAdt60AsBlxwH%2BwFmQ%2FWom3zljVrCfJMUhzWYAiBSU1b%2BQ2%2BduWampPqnpKEc3GaYhBa2Rof%2Bq6n3rIWeOCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmW2A2%2BhXxhdhSGL%2FKtwDcGkcfZrF8wewQELKtL7QmO6tG9p5kYdBg4m7nDZ8uU5Z6dEOSix3N3Ks0NxtA%2FozYvf8A%2BZdCW2%2F50Alrn8iVRMaBgvySqEwjsGL4mb7dn86mmZItwi781F%2B%2FdxLNYuy55brd4EMmFnCn%2Bqiy1uk3qk5uGIJXqZathEGAZi0pMmVk3b5fFNQiVi%2Fd%2BY4%2FLOXpBGaKoSPsHGDxLEdffC0GwVFGKzViYPaJ51qovhl75tJP1%2BE1VUCZ4MLS2RKrxaP433fQ2hs5Gqpqwfd24c8E6pvmmbIoCULVXFOKDGWADMBvuWSiLgfx4ReunBy6nuvTiWcvl%2F8eOo5Yq7CMnAMLRP7GDOmMwj9RP8zNqsPkZU9D8P7hia8ZruZ6PwMHiQBlT7ySNqP5oRyASCj2nUnPtSGRvx2wJBLFduSdosXWeAkFkcAp33hCXT5JFJTolgldHJgSl9aT2zClk%2FRwfL0B%2BSMZskArHliKDizoyCAVS4NV6h5xPRChzsJXBmrMa5mchqXTUOwo%2FXl%2Fur1wNKCyFZb7F189C%2B5GtaQWFyykFm1dwlwXA0soIbuGGXEyHZKQsC4XQ02VVWHVdVdsfQhDeYHJIV7%2FM3icWbuK2X9%2BcnMpyfwKYueufO9Ks4ws5nVyQY6pgFM0hmedhliKBkcT8ebx8DWCIG42Zt6%2B3tZAbABzIBRRXA9WcRyMlHxyEU9BPnRJFjqT1ulWgBNFBe%2F42zHKXTwDXbZIEPL8i4e0r2J65%2BK1AmPiIpucHWkdZyXm7mR%2FKEzg8BTVDePGrEYWPCjoAbcyWFZkWoUMKQwBmcNftnwq9MnPamZGo2lBMXzIaGDGH%2Ft0EPLFa8H2RuirJetzspekD99Gf0J&X-Amz-Signature=79e6a78a96139da3fa7f4ed3df9804ae8faeab0885dd7212ee5c0b8d1b37b990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

