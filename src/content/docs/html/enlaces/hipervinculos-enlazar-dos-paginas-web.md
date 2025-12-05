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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4KKJRZU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzdO0RhHwS6fgkLyzyspxGmjBdLbN6oA0%2B2AjsgKFBZQIgE2YYwbl%2B9tELLcrasEdVuQPm3uPP%2B0O2GgsjcqOzkGIq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPD919f%2F2SEJieQKQCrcA6cDrKCshBS0dCL%2FWDtALtK6GJY3%2FVmYgJxoRC%2F7pDm7WCkZyGp%2B3b07OigKO3IuQECj5GZyGf7MaISz80mYR8DpgdTpM1H157DnCJeTfkqn4WQBJKE8UWBXRRKM%2BuBAR3s30a3dbgNUie4G31RKqLoEm1PL2yikhmAyAY8pIWJaST6VoVY4LhQ7byIACt0imAmRLug78G4UCebW1JzCK533bgMfoq1TlsZdM1iJnRMLqUVA4kbxTBLhzW0GcVLyOFcip%2BA32Ml2hdp78OTOW64Vn9fURG0LizpNb25UvoMnFT1LD2pgbhvI28wz%2FPi%2F57kvjrspYldYHVnbW5mCxus%2FujmQxxu4VHYOLI%2BNvLoboPVjr7usD6n0%2BmvpvWdS%2FiJT3Srddlh7GWxJ0HEJHvSB2C57%2BJTADgMTRqKrVDQFAH0uCnVyHVr58%2FzSUCYdFA%2F%2FAw7D4v3Tj8dKvvCXMh%2FZK85T%2FAF%2B8baAGOSFijzymUqEXvNZEt3bZkQCQxxxkf%2B3V4VFoo5g82As%2BRZoJ0h4Fcfl0YPZFeiBvSsvYpcef2Ll9BHy%2BN5ZIX%2Bhyg8dWHrxGfgQzb3584P6tZKRUqMuOESE3ZMoGyGij85ncwncqLP4TbWXQqm5C0Z6MObTyskGOqUBfJxGImzAwr8OHRLc%2F7LvviGUfFTTN3KT6oVFj1udr53rNfxfNGH5lDLpieqkNVU2%2FNwfdD0R6yX2l5htB7iPhlsXUouxbFCaXqZ2LEcaGbogT522RYWsCHOVOvIGyugoh8Nuh4DaRrLmdaCzSk1Z%2BJl4qffQIgJtKtSCJoD%2FlHInwUsRAXqep1KHFs55uMQo7Da4nbD9tQvO9DLq4vtl93VsggaD&X-Amz-Signature=cecf5c92158c7fa605d6ca7b7bca21094d4563bbb8e8ed06a9d72ffa675b7016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

