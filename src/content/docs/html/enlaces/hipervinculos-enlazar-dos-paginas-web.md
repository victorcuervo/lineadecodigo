---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNQ7RWF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHMFTlJEfJK%2F7axbcAdrE7U7uiq2iD23Ue1NkMNE6HJJAiAE%2FzGZKRP7FA7z4ZiihHe7P0l2AM9KT2acbSmj%2BlDV3ir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMkyaakzxyOe5%2FjQCnKtwDYuLBJ3zICvrwhMrWs89VF0NJkfwTlWRRwMN5h2CGUvRGWyEe%2F9qWaGRZj6m%2B6IQ%2BLUk4ecEa0J4EVl2QLc16Xk4RzwFG8z%2Fo1ZhXcGhP0nJnOQmsg0VPUKMYI646P8amMIvGQymKRmpfypcKgGTHdwcB5t4pTdvnWGd2B3Svo5kA%2F0%2FEebHg5KIs3txvtgShP%2B%2FD3ETcGSaBQLLNI5ftBn9HWl8kmh08s6VArDcyJIS0n4BlCApYTWBHv7SbYso5sS3baNVnAzZU5Jm8V0CFIyzeQAi4YNkaK8YK5A3fuWewnpb%2BOEpsKkd9i3iMRg3D2VppjgpKq6qLMYq5vEhUEcIjURlGnatIPQvpJJtiftIb8ejhDUStrZ%2F2uunDRcTFFtn6ImHxFm2DlSlNx%2BqhNXxgRpFYDcmYtfyP0qHbhR2cuc9muprv2l%2F%2FQj8KtBRMfvaJVMF44CtC08ZU72xdWC1bpCQrFmH8uZRVFNBgiWwSX0JvS2g1o99kux72tBrW1eUGtsUYRfJRjDEr%2FTu%2Fl0Z9FtnsgJSyPdPrAl0EovRlcFZgPCvgl81ZYAf%2FwG5DZv6p9EyoVxQgRfwmL0eh3ybahlBvooLkshXI4pE8KHAU2t9g%2F2mngBQXVdAw4MnFyQY6pgFEkJTMuMI4Ma34%2BFjDBvNAYyBITsReTb0COglQls6RkJTQO8wulzRzYPXWPfdBpSmHDtFG5g%2B5h22OXMwPuABmSAx3eWR7DxYJ%2BYs7ZkegIMnbrxwA1hSIIL%2ByhK009qmzRdL%2FFR9M3LY%2FeQgUOetHB8bA6qrPnDR7R9F7N0iFR2d%2B6M%2Bhcx7IpElCOZwy2VuISaQAV5OVM4%2F2bBBkgs9KpUxNajIa&X-Amz-Signature=d3d0cc0b8dc5a849e6a0cca7a3b2d9e2b4fb63817b5fb6a0bc746953787a18af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

