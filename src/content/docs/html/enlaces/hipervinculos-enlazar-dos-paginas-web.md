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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBPE7JJK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHymRhjMHuZ%2BmmwAwyFs95CUkY7x5nCInlCL8RivkRWsCIHMDSiwd8MaVdkujRM3B0c3X%2F1QFzrHyKEYPUpJ88T94KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXK0Fz6kyXgdO%2BxGQq3APuV%2FZpE3%2F%2FVXZqzyeOKAkuhFr7i9QFrsPH7El92hWxI3GxzghOdRBE%2FUk0XxibLqscKwg1lmTarwWTLbflLoz92ml7krylgkHCm3xQWqdtBT9hiAERS9YZrPm9tbNYeRukUnqxQoFMjhMwQvONtA0ySEBxtNVQ5biXDdAKWMoJtot1vFC3ATODt5uyrT5c4EFVf4SN6%2FkdHtToEqmAswIjDKMoE%2BELEYwr0inChhhLuTpZtuDct049WZZElhmNhPob%2BshQzxrCrGXOpCZIuOOkwdnD7Ag%2BgA5AEzI9MMoabqJb4yJ4SaVrYjEe5lXJ5%2FdPM2J7kk4MqyU3qS23%2BVLONh9yiYkZ3hMvA64JfkrUfaz1vnaLooxFXZUStEX0Fkzs4pqA4XmHONXR90LoN2Rkkik%2FCg34erzRceUfskgmsz64oTib6MHlyQV%2FUX0Vwn4ytnRs30tlz1ERatn7r4CfBRFp%2FOXx%2FHMdKcCSrIBLDK6HS0HSqOBrOfHZrvoaKBBJFPPb7lbErUs%2FmWTf1VrwOHqKvsrgCKFVBb2EITSwd%2F3LqI2lemgM9WQ0wNiSSiTWI1ZPeTG4kD1dSC1LcC%2FPGuxucfoPBL2mRHtn7mO%2F0O4gilmTAobL3XGCejDVlNnJBjqnAbwUehX1KdprjEikA1tCperomUeKM%2FFSqdn7u5CmhsjEMy77HsmcEMRlWFRvzGh74Ts5KsymGaXMKC99fF%2BSFI7%2FtrwSIjm7Rf63LEPQQp9VlowWXBRWO5bVl946ervbFHV%2FA1ZpXiOJTbM3MVc%2F%2B1VYN2x1BytjQDwJ3JRhzKjjdrPF%2B31%2BQRWA8ssMuFVTyj7p72HaObCrnqr7Jh6Que8Jue8agGwa&X-Amz-Signature=3ccbd132d0746f1fea722740ee584e6bf0a27eca4cd8190bfa2ca213fa1d21bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

