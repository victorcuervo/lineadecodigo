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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ2CZRZI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfVRz%2FvYwPftBw5FN7aXhPjegT0qtvAJiSWJxtJDxoUAiAFLYUWJ1bA2Vp0c1l4jrjFx%2FIAEyEjBkGn40v7rXxvOSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMjwa7uW5ADBkSgaBHKtwDJ0G3A2VB0xN4veycAaLLs%2FYSygyE3CjPNkE0aUdQQZJOFVotgss%2BgiYGS47%2FIn%2BC1JOpFZTF6fExGJyXx4bktNtRaGSWlb2e8%2Bq%2FVCZPyV3xghBDquPlHBP%2FfDw6B0u9ffojiU8JyofgRq71gPOg0oA%2BlG2G1HCKtEnTM%2FW97TPTCXnDYg7NMaEiLWARMHPoE89L6nqBJKhxuFTv2fdwlqJSgMn14KcgEEfskpuPIGXZu2jUEdeL7ucqE1lz4ljBpw2h%2Bzpz6S5dCt5r8%2FK7k7obozU1AIexjHhtsl806OE1qWXSssPzmOgItVjW7sj22IwSnfjzWbnOO%2Bysiy7b2oD%2Fgv1GNUe1lip5Y2cxMW61VBp%2FlyljtOZuVjirXJrRCcdSXRhazfm5yMD2qsxAPTUSD83SyP5t%2FEGu4V760gjqzuwkb8eCVbPam%2FWYWIqmQcBnn6fTA9aH1q6TNIdhPnrfdXMCI33Qw3b%2BZt78RqTjRU6WSgxV0VMIKkBGHIL1zRJbx97RaEuVSveKjXSyHZhNjVMIAFOWMK9ahpz%2BZ7G2KhqUbtNKOYk90x2sPmytuRPFUi5q2n2IbMOGNJkFD2zHz1WTKq3DP7siB%2FfKjWAovjzB1OvxIuu6IZIwrtTSyQY6pgGuT8YV8bFGjG0RZHUUrGGGXe5A1%2FZMZt%2FscEqtHS%2B7andyiPQy1BW1fLAzKJ3mWmcatZ%2Bc5X4zJU%2FZ%2BaIb0%2F1Cu7c7IIH2iv1VVBfhU3S0R0YhNS7f3rob%2B5NGSfMHAEEpdTmZNNENN2eSic1IoOgaEBza4NWQPyyK7dR0QWYct5Hk9hD0RAenE%2BTCmWBb2oZnGKF9d%2F00pjrdjNUWydzj6coFKRs%2F&X-Amz-Signature=a7c60a5b102d9ffd4ca10be43b6ea730ccdb393f9955074124117a46d02dc875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

