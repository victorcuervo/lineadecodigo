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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC3L3JGI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1iBWaqKCF2p8jVIEG1HZ3BtWZPj7rrsKWwT9knuXuGAiAdmD4xSXg6Dpz49UNX5cMBk%2FriP2MD1KyE5YcNLNxIGCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSCSST31nanXppc68KtwDPt64DT1dTLtRgzOcVsMUUcaiyTc4wmVch8TdKvKi9XTapDV4lFbfkui%2Fa3pE7kc8lboaCY67S%2FV3S6TOIpkeRgOMAh0i5rYYGWW96%2FcSx8ZFkjKLxDCe778l2s52M9oMQGbn1aUf%2F%2B1V6ydyYdEn5eJweD6COyY61LHoIpiaHm4UdC2Jp7zQXnuslDgnX6Iax1ATUhXj4m%2FX5j2EKTG2C5O2jdW0j%2FcpvpY4CMzK2qVTL7xyB3ENjzLL9dMYhIwwGr0oT%2BpPfj4QAap58Cf255ferIiunCot45dnpyCXaDHBT%2BCJHNnNkxiXxz1lfBmMYmSmt1v4Fcauul13KnThkMZjZk12uxYbyZfyoMzB4uoBy4NBtHqd3HsB5TC1DV1iFcegKqWwVMjXuSjDxvKrzl%2BIIiv2mFnJ2Z3RppNvPnZIJq5qTzrMKj1Z6suctDcmzAMq4FGoZOXDj5yyZIedyRwRfOHvqNfAnMQYVHdIqLUwSlJxMdlf%2Ff6yQb%2FDSxHdKRVEtUnlPatCuzaWbeWnWOCDPZgN7n1NqwEKDhYYpm5f7ppXb%2FWYB5%2FNk3xVOSQ%2FMcdf54Rh0sPCaKb4CLGIM6X1WTW9dq9G6D0BwW8Lt6rTaC4%2BNEbbxKabw44w0LrWyQY6pgEkhQRasiHBoT%2BkC6iUF7TLCzCv2xaue%2Bze34I%2B%2FWv5wr4OulGRvwY%2F2v5jCHcOvLlhfa%2Bp5owEy9l%2FMAYd0YOIR%2FktXFHIAxZcwcbnRH6n0g8c6SZuZB2nqCcShGDCd1iyUf2gXQYyIEXG6UbLpa99gZO8xf7lc5%2Fug6%2Bm3YfNTRoUnMB3LTEzh8elasMiez8ONA35l4R6BNZwboPSIMKHVYSjxZJi&X-Amz-Signature=49a5a36c94fd758941d2bb22c8208fb721de170b8abdf1bfd0163b18a9284b28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

