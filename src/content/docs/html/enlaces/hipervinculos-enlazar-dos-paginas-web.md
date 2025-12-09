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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IVUB4OM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T203508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU%2FNcxmb7H0ThOsaIsIBKMhDtFNDzWbFhM6ZXhx935ggIgFUUoAHBfh4oVzJYWrL6xQwF%2BhpUzYl2IWFbe56LzajMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGQcIrCQNFCHjXWrSrcA7wpIh4Ncb1bUWxb0KGccAawy9mmP%2FNTGn%2BEARSHL8uG%2FD%2FVvwLa96%2F8CIRrhQz1uFr9hnZC1710xm4DS4HNJFfbWKuJ9xLx5dhs%2BpwXM4Um7%2BoM6A8KBDalTrSCEXJk1akG10JDGyeIPzxokp1qb5qecMajCsD6OCKfULYlMENVvPDfojje8qzGzRZgKZvMtx5KHc2IO4VcNQnY3dTDtVSdDMkSHUTad2x7MrpdYm%2Fic2NRjJWVcSD%2FiETHWdBtEDGNf2V9Q0Fc1yuzVwExk8tyHjLg8N5OjSg2KJQmT3cEzMFJYoNhgurunD9sGPzfBzGC1VwJEZktQTvk8Ojl7Hf%2B6IB0DEjYqNsTmyrNF83xaAKuBje8RNsMou4BTgfQWCdlEcLnCsE0Not4lJxo1qthOkIJy3nL1qmgh4r21xwlE94Gjsz4bFpLWPBhQ%2FgXq58V040u2r88%2B3uHrF20OGDz7xlYTjUNN%2Bp15cYbKzMgg8Xe1rdR0QFmokKXYRn9a9Ia%2BdLvE40qtzpgXx9%2FEjWd72jmTeKhtPK4ouLXNeE6U%2Bshqzy%2BgKeMkmlIMziSzEvIxRuQiU2rNIum8gl9NfL7tm%2Fx%2F4uMf5v%2BsBctx%2BQWJzIdhHyeaI7VNjUsMIn%2F4ckGOqUB3ymARd30wdrKoQk2Mo%2BYFXMuc%2BtPsipUyMMesco0%2B0k2qXtYz08awAADhKjaUFiaCf2X08DqNMQSwvVBKI80LIDZ6yBQnl4hDkafdoQ2VAEBRDgt%2BCENGtiB1D%2FSqroXXQodBNZIPKHOPrGZxsKcSpzYcuYktEp0bJRHh36Kjy1d2Os1tTVRBs%2FXl%2BU3j8aN2SSoJi2T1WyR7mY%2B9G4q3ZqueCGw&X-Amz-Signature=21b6dc196cf1b7ee6534be45cffebf126cac094a045267538f2e4b31ad119bd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

