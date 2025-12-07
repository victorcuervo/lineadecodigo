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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SAMFYOV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDquTJAF5eagAq5O8qE23%2BHdgpHoaayxIMHneD0R3NFYgIhAKQ%2B82m1zfhkSsDyiKUvOvmY7%2BwXhSvBECSPYpd7nxjcKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9UdzijGC%2FVC5LP0Eq3AO4nQfrxSSbp0ZA1gQTqpe3xNv0wlz%2FIPuK2ti9ByR2PNsbtyCLsPIGvpGPYFaAOyIKv6jLZEgNvfIcDMfZOGnuj15KrWSV3bGFFpSFiAbyP4DhdUWnsQD68F%2F7uRat4mqxyTvafO6GtFQRGpQYPxQJw59LZ4tFn5Mr8z12puRUwTRIlYiub2mY8IHkvPXJowoEoMiHE%2B30wjMlK7NX4oIDCjx2HvtkBacEE6EfXEhPooWfPX7ZjjVeAEY19N1FhZL6wYE5aQ0SrP1s8EDu5ziS1xD895jmpoamMv6GBENRIKZgP%2BUloOBhlcwzwkBhzlEFTfqJf5pLr28FtwxKCs3rP%2BV1HIv54LZZPduKXheTa%2BAa7oNBn8aRpZYSGVkVh%2BiS49h%2BGVKCZy1VKE%2BJgrrdWDRVzSoh0OIYTcYe%2F862FNZWSged2384QmdfjoXMHmT%2BU8E6G0XF1JAw5NWD3ygIsXjqUtkerEh0czXO%2FCePMRAIBT5OePaVAozqH3RD08vsq8ijurEPmnl1UnuXDztc8BnpwR5XF9a6I%2FzsZTXbmy91MQrtshiNEeMVGmuK8lDqy%2BgqIcmmzY1%2FmzjLoR6f0RJIBsgCWGAXlomRr4%2FR1tNMFAr3oHUSYmqMejC0x9fJBjqkAVil7O2SU26Ok2ndVttA952cMAZOPKQMRUJZ04MXVlyPwlM%2F0Q9xObN3NNn8gZ45iytF%2F5JLkEfcL7Y6s0%2FtEAxtoMElXadSx%2FQ7RA%2Fq51xTUlyoznsPkc56hRFa9%2Bs4PEKK5ONRl78%2FTS%2BOR2sTNUTnz%2BTHlFJQnW%2BpLALuSdCY0tJCItNpKNBhiSn9LuHEVI044KwMI5Xd1TMLla7z8cBB9SBY&X-Amz-Signature=107f2d1871df425e1d1a9ee05521ab8cd809b3c5565f4dedf1544292339daf2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

