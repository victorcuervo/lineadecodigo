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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SUN7KII%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhHv07bryDbMWzMgXe%2BmLJaCGK9t21Ji8Bu7ou2H%2F4tAiEAtx3pt2BEZVATJgkPHMzpI5RaofnpHwfhuWKDGCtRgx8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInUmDjxMixYhW7UwyrcAz0may23Tjc5RU8p0xgRKBGGjXPo72z%2BUz6e44P%2B1MZH89AbgJ0IaFv5hhm5x%2FryOPrzWKTg09ZqDol9SJulJr0Ut8iyYVp9QPzfDugENLBQ8D3GHjbxf8L5DEyb6737XjBcVqMaruYtO0w6C6%2F62xoSLb0RI99l1tDK46BPsMXLGGe2iFoETEfeoW5Vv49DS%2FcFmIHoMmmplbYOTrcxWq8yNj1GCtE%2F6%2FHhmx%2FZat3uxPDP7m2JhRlrlkCWsN9PaInaWeQrf7xY%2BgTvdhSIrFuyrN0tA%2FnV6K0TxhQXK032O%2BRV6pQi%2FDKdToxQmMIorR5FJz6tZl8A0pe%2FUMgmn00ORVC6P0%2BVMAE6cbMP25F3isoj7HP7F5iwJ6eYPhUk9%2FzOdzdGXU0RBEQrXyMrJQQiJz%2FD6thlqUCCdMswbETGuINsUod3oLJEdCCCdg7T6g6DDqQVvrEUjnht7Uutjt43%2FXYnZNL9JrGdm1vWA5wDbo9KJwHMqeVvAXDmpp%2FuTcHQv6hSZAt0zARu5dnGf4C0jngtLKPHD8%2BE9MojJYrNXtr%2BFeAk9PYrWQ5HBrkcl3l%2BHCv%2B1XqlE6V2WvJgpfoAWrgpawr70YcIKq3Wf0sBCMWnNb23mI4wVBl2MMDH18kGOqUBW%2BFN%2FUVi4rS01eZce03n91dXfDjMekDvZUWZm4pjt8qYj9W4NS7aW%2Flh3JD%2BmaScSlq2OgiMiO28NtXdSf4ffe%2BzPMGijLTn%2FcOsGD0S3IrYQgqwic0NU5fGgCrn4DOXbp7Buu47ro%2BjDRqaCyh7Cvi8LWkwDhFU%2FIrZnI%2FUNJGLfEaVcMxuIATj0RS63GCT0dydJcbBkL4%2B8g8W6NntcvJ1Bjx%2F&X-Amz-Signature=1434187581a97d5e4bf75cbab7a9ba2c22cad3b42295f8509e14a489f01d85e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

