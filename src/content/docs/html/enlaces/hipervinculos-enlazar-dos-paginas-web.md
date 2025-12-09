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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DDFQ6WF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F16PvGTW4a0QuhmH3RbSf0Cean3YEZFXQPcmQlU13XwIhAJ82YYT1jbi5CUOPdBm8mg%2F6Ws%2BpYjPpm4MCsFdy1rYPKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyY9JXV8gfyFrdViEIq3APZaot%2Ba33SusHfQVYF3%2Bx0QrRi1f4EgPfBySx8%2FJHfx87A3XyPk%2FFY7H%2FpUt5qa%2BSlk6BkYc7ar1W8RucvGMFSyDy1vCsXXQK4MDMTRtC5tX5zIjpjC4G%2FK3%2FAmLP1uFPAwoLeTmauxyHWkYVOoxjRyp%2B3SrFr1Ar%2B%2FNezqs5fFiaY18%2FUa3NjNKFwyFIidQBYbD%2FDvheszAHuTVLlTukRAH4P43F7h53n%2F2f38H46rlyswX%2FImoMZn%2FhPSnoybTOYKKQ2xtA%2FBzDp20RMQp%2F%2F0q38rTiftGdNZ8hhhP9WOfjpE%2BWBrRUCaqPk3%2Fd4LdayeL3iWJLZO7zJEhLWPWCW%2BZOAw2LsIWhXwek9nja6PA%2F%2FW%2FnErFfyaqy%2Ba6gsSFD4kNX5atpfbedbkCGe1AOf%2B6trJA6H4dmPRX5HZus0fFne3krl6U33L85DxAERwQ0MDLqfi4bO%2Fzq0XSJAZRI93uExgJBx%2FHa8JV8gj9UuWUMQ6%2Bh8QgP3Q5xbmMpJXHDJjkVpFlhgdiPgl1RmN6B1js379GZ4sVCzIdveFOkjyqjFBDA8vHvQ2Vh1T3G4FQrOwjl6cG7E0og%2F26YYliNuHj3xnetQb%2FNruRGYbanybahf9tQR6Q6gItV8STCixN%2FJBjqkARm5If6Ddaz%2BX039mtJoTncNpUpzKxteiymSJp1oANu%2BDJMVCwnSeFqiwHMG2pG3bbiSo844dTbEuUspck%2BomdQb40vuUbw21PTG%2BceienclaFNfM%2BcX6efO9rFDrq4V63t1nK1zblOUGweBuNm8wQWYHVVGp6dVkgfPqJxEKks9pptrXdj0S%2BjEghCOzfck2evMZKgyGJdffBUT0RXRMAxoTrTY&X-Amz-Signature=343deed9421d601cf8ee5cc197b313a1a3de6fad343852794140d25bc573c2df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

