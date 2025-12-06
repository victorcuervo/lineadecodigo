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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZRFLOJ2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPIclGqE%2FmZfrrdvI2JmrldI4lwrEpgy7aeTgPIbrMeAiEAt302QvU5HfYHzzkz1yHJncquoHMzdtHUt%2BKjcrLjg6Uq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDF3KAGOD9wDk9pJTMyrcA90LzLhrOz891Ndk6a6St4IVR%2BO1NNQ4sgEtD3axwoCBazFWX67XsLAxZXuEGbXzoeNGmZ69L8PTSBu1nrLS0Oj1d94sdumNGgWXbbuta3j%2BtF2FPDVPvpknbwdxjB%2FONoWO0RRq9ag4aROVWSpnwBZUm5PVtNORhxsBkwiYJtU2w06rr4dyNrn1dXjOOvxgSm6tQsQSZo5dhhD8%2F1Lzurut7bmNcLiANYo%2BcybA8%2FQQaD%2Bd4KRMGMbAk1zgmlLIN%2BWVdN6t7XjNIPmP7QpKMGUbMWjTS60TuwX0o6JjbtAxpVDI0xnzz49Be464noJLrGzZ1Gew%2FBvw0srpD%2F6ZjkOe2C9MlRK3r%2FITP6uL%2BCoen4JZpOGnTHPqOKk3k%2Bb1o4Hysf0yOyaxe7oxEUSqpcgIFUzCYtSisG78T3FW3VfEhBbC2ayJKqiq%2BfmB3U26M1FWGOK8IDDlmARzpSp6xy5MsSxatKhqoqISM2vq2MOrotEDav5Zfp8WByMwk904npy5R0RyKDp5%2F%2FKBeVj1aY8XngLf0jo49Omk64Rp7Yiu8UK3JkKJr82Al9prFtqLPj3VAhfdawsAnO33pvhpYsZusaCNZP73G7j8zuEnbARuqkqtT%2BCS5BFPC9h9MLfN0ckGOqUBnCdOIRp9u2aUbN7sBiEzn3F9mgyAJdAmBykR5mkZIdenhr7gM3sld%2BJ%2FKYSYuFK44%2FWABcmkzt8GLgPggQXAfWk2bRMKH0khaQtzvH8Ac85RNCDQQwbW4pTYzVEAuL27ml1iKzXzzZ4G8Yayai9y2sy%2BXmXKo%2BiyV2rSly1jfcN%2BKujUB02YmvdnauvypjgaF1Zy1UQJyS%2FuCBU%2F4Nz%2FaiVGUFxm&X-Amz-Signature=36dbd464197c35385b48b52b3bd3be1224961901fb5760e1588302b7d8af9c1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

