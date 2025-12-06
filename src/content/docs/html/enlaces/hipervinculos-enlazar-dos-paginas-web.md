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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PTMHMSG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACGJjUZwrs8oYXMJTR7VacFF1NdNCv0MQfrm7nav%2FE%2BAiEAhfnybBdAVe41ijBJW1ne6L2AYGmBql%2FFv8G2fcqlaKMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCTWXRc70QTrhzUUuircA1LDAt%2Fzh5bNV0CpNRayInCjCbCrFsOBE582IDzwAm9FS7d5v79ZNftwXXIU1eNVFZw%2FA%2BKNoXbN%2Fp88UE3C8r0Av1iKZWnk3q%2BoD%2FrOtzNzBBFGGUjjiduMRLFlklYVP5HAEMHJaRSu%2F006yKTVLN9ic6G5QJ94SNEdZ4pHT0JNki9W%2FxGPjRMZliYLbbRj5JcXqUxJn2BRIc%2BVnlMvFdUGuEEm2%2BLfPoGeby4IpaWmWe3Ahc42DF9oR1fa7vb7oWbHyEHmwWyVt3qUzuEYTVX7x7wQhMSUnNUutJNDOmP2axCYMnYGnfIdaopGFCXqhe0nkm6yo%2Fz%2FCjIh3bmL%2BR3Rn3Yex8qe%2FqNXSw%2BJCqxosiYGdFD8x3DLr3bqMLs4YLb30xGmiLJla4%2FHnmiO1e7pw5O%2BDMeievMGiZZZUF%2F9kRgO9Fzkg6WTRCiGP7wfr%2B%2Bzy3zC06jNtSbucbhtNZub2kXMFR1awruy%2BTB871WmzyA24gK6bD2PHNbwMqC2RPk1p2Euc1ferNWQ1QJ2%2FQggOHsppSizIeM9CUOl4pY1sUpMqg2rq95yb0cq3uf5z4R7IPYoqtPISbVo9YqhybzbmRR8aKoZXD5kdp2fWIgySIXDu9shHV6Fgl2lMM%2Bm0MkGOqUB3NlTxMF1VyffYym2eAG%2BgufQwxNzogQr7nUCdTWT1QCRmMq54l1IM%2FJkoMh9yGApg0PlDOu1RiuoHWbTgsphWp7OBt00WfteP%2F7wNeMYwnkG%2BOziG7G23SXqdcco1TJblAPWqb0NTRaThfPGdY%2BkmjRtBIiUvk%2B9jsGYVONFIPRTATbUNzbAnMXasZLRpkudSxNjT0TIndEunnJ2N1gp7PhfheOw&X-Amz-Signature=5977049e6882a442e066774e8810cb97ee6359a4500b240a5fa1f84e9aff76e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

