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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YCMZVXG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE0xXnWHKxcPPZebeHCwh4T6Z78jLS6L6MkIUHrafSegIhANvi%2BnM4V%2FSCyBX6%2BAFTMkwp1oA%2F%2BH0TCGxn0Ox7taEqKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgITTqzsT2d9zzu44q3AN3NmY6VmpItrJuMZgeNoa6sVmgGHAKyPc8VaUBsYyvTeGmelhR98EiKIKfUxUB%2FOVlE%2B1bPUAOn%2FYUL5xngF8%2FK0%2FPpdh2CLDRTxwrREbVozbcEJgTUb%2BO0SrO3sZ%2B2mbUdj2I%2F0rh6w3GEhtjibHrEwRs9EcuX2Z4OSfRQybyws5hBtkYdT%2B%2BaXYNTjkx%2BoX1j2lWoH7AOYiNhAbfxKxAF4RiOlL000si7p00mp8TdrlcyyUeVNxHyopvedxKICzQwecP7td7t1VOJYL%2B%2F%2FF%2BOow0X9KrYDbFpXjH7HHts6BbyVLbgTNc%2BR9%2B0I2AWNwCtqTVgNTIRMznGRePdQLjk4YhFFRxhxImcRPkcpdJXpWgn0k1Ob822oUuTuSgKC8vWJd%2FrLsJBdyFf6ECjYGqHnFSUf7T57X80y4kMijfS%2Bpn5KsLYiDcrF4FcxpXt4%2FCiglALyMi0KCZwBIO0ktc3zB2Y2DfuIfbty1GbB6EoOpyNB%2Fs7gELBMK0I4SeJVW4nKB3XXM9HApS9VkJw07%2FkrmfM%2Bhyko1ea1xzpChWP1i2RXHe2EfD%2FfurV5Sv1c6elbAtGZ73Cl8foFzqqB4KpnSxvSChtcpsnm5GsLMfASfqwHOLxjUovetDljCPkNvJBjqkAeQy2CcFD20iGPVkhgszkZ1gL9tCV85USmRTu8Zh4lFWCYIWcEPRshWVgJZpZcxhK413a%2FR3SE7d3n6EF5XjpaSS%2BJXDp3xxtC%2BWS%2F7kSX4ckGmX47qlk7jYeFCd3AdEM6dPKJkNlaO8QP9gT1sWDh3Eaw6BkkqVmQJvLV4Pt4dII53S3Y1%2BRXB%2BAXJuYqz9ZjW25rMrj9GK3Yib7OvFHs152L4I&X-Amz-Signature=8df12828fa2425e070b335890b8f33090c5cd8bca17959ebcd477febcc1621b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

