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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL7HLWNO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCT3jxq58%2BCHtToGarcbXLxmghsA3BNLKiOleBK9idiAiEA60%2BSnSBBDkjwNTKNbbAaqZJNSog%2F01VVtyXzzsh3s2wq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDO4iIFr4GHuRrn0dCCrcA%2B5X7%2BChy50uH5LoaE9PKL50TeDY6%2FkVOtQj2EtXHKT7%2BqdDYwR1u7dortrXVZ7vAd7ub33wb1vLNPK93IDe6v5ByggeiqFrZKUU07IUgnlKbmT836wI3ASl267eDeE2ud2voYGWTz6GXxs7Z2NaBT%2BIuNDSkBrY0RV0vxzFdgKqRVYXbro%2BEguzS7UqWP4lP%2FksJvS0xiLN%2BitDMo9m4QzTMS6eiiR5QbmSyvFUxiDS%2BtUH%2F1GaGn75BVn6PoKxhTqkppZARfsQI6XFHM%2F8ola2GgcpeDPnF76kRRuJZ4o%2FUA4VoF1q13GyfL9dAI1ejZ64TbIO4YwwcfVXOCuqXMcF%2F3%2BT1%2FdGSgVJgG00fFuHMREIfzdKblw7P6sJ2NPZ5c4hOKX%2Fzrqo5VTQfvGCFss2FXrMzLHN7%2FurKD4z%2BGEC2JtpJNgpBd8Y4RsDoqA3idrzBHXpAgeVps6bFuAwcpHaMXOmn%2FvfZVNhNYLSgMdWwYPFRc%2BuaUHy%2FOsL9yzW97ErK%2F5x03XAccNPTmiIfN%2BiklYx2RzvBgGDdHJY7r4PPO2tycjm8ks5%2Fh%2FyPLh02eJpiHq8xSdHmd2Jv3FvaBjfYMMVRgLKG51J%2BYb7hHSfhDKRhin1N9Acq2ZXMPOJ0MkGOqUBBeF3nAaqivzYXjn57u9%2BqUtaYBiDCTMtJ8BH9Zmspc0wZaJCpx%2FY5raAuIxJ3Qanf1gFv7UX%2BJe%2FE%2F5bmdyxY06zLUDHw8JgMNFjkwQjZn3LqroGwGmKmVOpZjfIwS7LgOafpkCPurjq6LqcKZRhF1IHjCOzg%2FVIHJy%2BcZeKJB35urRZG3%2Bm7KFUS7Ecu2ik5n%2F%2FLnobYtEd0VhnK9hx0YHrfXd2&X-Amz-Signature=83c7a046e2697a24c52f899461c0f81e34501feef5a7c9df3ebf316d899b8794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

