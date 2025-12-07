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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWCGOPN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICno7z7QGP8E1e1KioyzUSd7juMjFooX03%2F2qWMrhyxZAiAd8JHpxTkYYH7gz14Icmo5aiUEZs1spjm%2FOBk4F8U%2B9yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmTGYePCuZTUcvgCeKtwDo%2FlB6%2BCuFycyhYf%2FViUNUos9%2FscsJuLNTNHRmHHhufGQ4XM3VQaNiRHKWIypVhx2Frz97K3jdZCtOu72xvfiN4uKmyjbZ4t10eIQftNSwB0BC9JFyTFlPX2enLykD4PcjWl7Oz0MU5FnfOoFJDtWTBzAkmkYP54RHMBXssGnxrns4TeW87DOmQezn5QPYAY%2BT6L%2BcZnnbvRMn26gOrxhA3SPDGTFDkB4bl8WvHMRmhGMa5hesT%2B6G16yT1Om3UdZoSKC4CB%2BzCwZG%2FaphtuNpb6vA%2FPGqj5kNnT%2BjEZ3eJSAuBIXCFnIFE6WEUExVRywsBiDRWZtO8R4iNSFgvZ93g%2Fy9xrKGET6%2BzaubAZEmKNgH7Q7bImmVz6kLlyt8z%2BrfL3OXyF6Qm%2BU6rzeijDJs84KDsGgRzHt1Tc16ito73EbqIXs%2Fq4I9fUVEzAfH0hWepASIOdUVNYVF61xIJB41LHIbCHmgDWixXxT5mrWXe1U%2BYb2Pbv9JOb99K7yT%2Fm3SEygzKdemNAMTcaEm%2F%2FsWDv6F0iw5e%2Fkt6eOflFuYfme%2FTSYYAAFqsxXk5Yrz%2FMvyrBLfKRWotc1yU4lJpQ1ySFYPulBuzK3PY2OeFdDUFlw3rg87iwwdrH%2BVB4woP3SyQY6pgEBhBEH9ixOeIdHrmTq%2B%2Bmlr4pwlXaZztCEsjd0Dp5e%2Bh6zLOdCpcYSF0wagmZiLRkkskYeNh%2BJIIpuvH8Im4Qd3S4Dy6bg4YqMtIlSi4eK0urhaZST5q8DGUI4HGSwXXjcfsF4StJvNKbh8NUPOkVLP7yx71yJsp5Hey2WYTAsgNeiR%2BFVCyJurWXuWIWBIEdZsWI6FC5VOpzNZQnl4OoMax4h6xNL&X-Amz-Signature=6942597e643b49c24634f13ef45e71b026c5e9bac7eeab097a4c4e4bcbb2d9cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

