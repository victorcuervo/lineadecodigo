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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S7IMWVS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMCfozILbVMQK8TjCR9PdBY6AIHWeaFK%2FIf7gmhfqCcAIgUPeteGwxMnB7n6yRdCDFyg1xFYEb9XlJE%2FdgEQuBko0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKiSicV9bkcQ4yjF%2BircA4F1zY5fRg7mR3Df7MwQ0YwjGAPwoLvKYRDl5GE%2F7IwtY%2BZu4I5qMzz%2F32B74t%2BazyctPp7VWbeeouotSN6Om1qVb4Lhcf4fA%2FdTH30gOi3cljRSlsgSMCsyTOg83zpg%2F8%2FVRsj%2F8wo3W4C9kpo4nsTR3UaoovKl2urujav%2FmBWSDSDEJNVxQf4rM%2F0dh0GS0URYbqpwjGmprA0BTILMOAV9Q09HFFv6ysO7rRsUJhnZYhBv7VxJRLdeBAcnxblv0AuoSc7%2FmrfZc6NC9ZqwD%2BU%2B3r1xR6gB8SfdanIe9R8oFgvd26FBy1Xeb5udFrBrWqG%2FPnQuariRl64f3l0Tp4OCYQU44OMU8U7gC%2BJ29w4%2F76MFVXNhOYMm7H5K6hOF6YTpPi57G%2B6uB2dpfB1XM%2FRNVpXmOdmQ6CHO68YqvdB9h%2BqWzcqQnkwlFVTWMOhGIQ7%2BKNXY8x4QptYM8CN%2Feh0XaLNw5fQ17%2BFu%2FKnsnVCPSJPEVgSvOAUCA0dVXTOBd19XhOiMw4Cr4VWdtYWlQabLGcWRgbGsDq7PYTUf293l4Ss6Kikrd3tpBrjF3cnIs%2BQTWOkEk9qg%2BoHsjwAmstQ%2B7mrXF2ioZOgKhHy4RvxNJWJEWgavJyjJXjH9MNim0MkGOqUBIezBWLPn55k6gr3qTMgKHcAb8kLG6bNSxmQaqHnNyEqGbecxYJS3%2BO%2F%2FPUADlYJFlY556Yc7gzn7cCYv5cDDGxXxusX11hkkPfBbOKk16ABq6c1ZhfWjNzCyIb58CCIKredQFiqep4sk3KLfGxIWM%2B48uzDMCTynFAzg6YakkO%2B0h%2Byak7PlTIkRKGtmlzsvuiGAuI7ZtZB18UYFLlFY0XXSlyxh&X-Amz-Signature=4f8d8473b6ce733c40cdc5faa48fbc6bf45ef41d446fc9b1c8d625a522963e74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

