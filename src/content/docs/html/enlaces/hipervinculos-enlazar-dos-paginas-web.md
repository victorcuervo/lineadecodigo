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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HN2VM2C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BWPDv%2BBTVmtBnst5nhHFo2xNbewgydjgy%2FQUECCufqAiEApGCyyBdZ4YPgH7i6dRr5BjJcYJcJpGi5Kq1hzMm11fEqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOfFkJjv%2BUQ%2BFGUOircAwSAc7iGTiI5AkIemhs%2BSF6XwAX2%2Bob4iWmAmgaarjbChBntSqrzARJ3e1CIapgnJ3hOdcq4IgueeTd9oJT86vR4QpxpXuaG4lIhiBJ6LInvhcV%2FcL%2BV%2Bq677I2enGuBCS2XcRkkL6bpVAQYa5df5T%2FttTu6g71%2B0wUhP6Nc%2BuD8tQgpiZo2yuUXXcI%2F6P7Di6KXNccsbp2GRDmy1RzptQurEYElRhJUOrNXCGOpMOYRzbN6l0rxR4KFFQwbCVHY%2Brcd8PbPDbPJLtth6f2BGttiogZ2Yblx4KMO5KWWjD2tI%2B5ytEoiUvZmIuZD2Mn2MvR3eyFg353YFjDgmzZLg39BRgk6tIyoIYNttV1tUI42SwsvW3Eq07tMZVhz33gg1HnDLInno8XGtvukRgB1lHIBKZZbgiwXwqmQ5jKePwsZf0E35i8KI2pO8cr%2FAHcAYDBJBXw8CsGLcLBdcv2o4Dlb3FpX3ZRPDw9GsCCHLaBcSzxCGAEDtRXpwdNsCM3LDdjooJYA3w%2BX1x1qAPax7c6MsiQLIdDjkVulNFCFZTAvVTUVk3dkgNr7B0MWlPXRXaH%2BAtmiQvViJPLeMxABuC2QXh1ZNZiNkVkUeh34tx8mM2AAX3mWl2cVHbceMIvQ2ckGOqUBAOeEEr2zyc6uZ4QH%2Fs4HS5wPnZ1XRWFs6emBgBeaxBNCM4cs65QmozSDoiPjMfaodbPvXH1NykzoVwqpxgt1VIMfoL2p8Pa44DrPzxBwaVIf%2BSX%2FR%2FQPMmxbto%2Bpe7kSJyXC5FwhwmbnGB28keZZrsZ5nGGPOjLyAwZ0J6%2BArR%2FPNmR6U%2FAuxO2KuGzX6LwRLAFVY0QyYSklPm73EIpU6RC3JfxS&X-Amz-Signature=1643f3c92eaf732820e637edab2e15e371b76421414258084c832836828c2ced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

