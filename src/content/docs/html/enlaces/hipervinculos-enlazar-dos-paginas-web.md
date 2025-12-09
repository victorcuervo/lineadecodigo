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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656GO2SUG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3C6GlYAqxwdzdUTuYZbXW0DKw2EW%2BHnN2JbeifIq%2B%2FAiEA8C67AmBn0NwlTcsstlt3M%2FxQUPz5Yv8v%2BljcpPzHGukqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwvk0WJSSAT%2FQoDFyrcA8CmNz2DAAAJIJJwHbGzw3dIAT6tAilnd22PgztyfKB%2BaEDghWze0upCxlkLotkaItjdc6sA%2F0D2GiTuC1r7uck9ml3LykDYrdDg5ai5RBUyPSpnGm2wcb3xRsDJ5RMQTtl%2FECGL5OkWQMC12PnP%2FIV4ewAgEKbEmTHDelGMhVkUbJZ1%2BhAaJcJ2ipLg25K6d9cWnSblubQR5X0r7jzLKziQ8VZcvItLq5kOqrmE9KDTCEJDbKNperc1lvui9VDVioGoee%2FNBCNr1XvkCkQoGwHCmCHAu9PpPzjx%2BhzarUQFZmv4nGwkDyoQZQl44b%2FsPvl%2BEPjtFddoSJbnC0HEY7lh%2BjTuOSn60Lkrn9PO8gN1IcIehKmT2Fuq5YWNIdCj7M%2FmNBeBzM3UuyX%2B2u2bz8uX%2FIMqo2jZhMasORigX8rwWbsnIz8efynphiOH0CeRJ4q3StZHTIi4OOewwB5Ni9SZcW0fzGSleMwetUzb4suqDhuUG04vUG60AlndvV%2BBxTFC4CIfN%2BB3mhr9keMVzo54LtPXG1GZsUq3K3%2FKw1ESVbfB199FyeFp2%2B4gIxSUQkFygCxDUKeX%2Bp%2Funfxz25va%2BlFAowIhQJvE%2BWoXdogNxEcG8Fdog2UsA2qqMKfD3ckGOqUBl3bJClQ%2Fgt2nMGkUC0FJeCntKm3WYTthOTqyBtQPS6M7WRyt4qTamKM0oWWBn3P4%2BSyjAbVf4QBGQxh3fRUIrBs135lB7fY3zg5meuTbyDQdcnz35yOLncfrVrfdDicdCaJb0e%2F3vYFkRxb1%2FYWJiRl5oDvbRFdHfJhRTYIy6AJtDxgAOZxmN7CThP2zhatSQ%2FtQaiL7q0FxDpVrH6daGtsqcHj4&X-Amz-Signature=07945c9d1b56899965cedf0677f3e8e722b6849658d7bcd3e13065ea129112de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

