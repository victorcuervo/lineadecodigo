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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VCMTQ27%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQC6Vwq%2BjEQL0QyddSWt4bilYevuLRwZUS7ayilT8LyGJQIgfl3LmYAJPuKFRNQDr9O2%2BvIIG5XHyHeKgjHrEfHw6MMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDHWI5%2FkAz94Z26a6jyrcA%2B0sWhr8dtZpOA7uLx2SctxIVMIN47Y1TRJPZC1vYcGc2MQi8Ja3ujX%2FLMtegV3kjlUAgzhpwecTh4oiPHI8ujAI6alZiGd8pw9OjwCLqpIyxYsXYeYmF8N9xQugWTdPcMHEDROpo46OwugLblr7tSApPGanqMw3f3JLlFYtWmafNaCnSWWlwKxQprZP%2Fhd3owm70cM7wIIUFphzUfyNC8ReFH4sVZBtR8alUCs%2Bia0C5p3CrxlQZ7YIHNwYYVPyLVAnK52WmEoAI7DImDrnZFvf%2BLi8DMzCVPWIYq%2BcPCYMXDPouUwZobq3gCEBMbuBGOS8J8zN85CoZbr%2B1h3mccjl%2BVtxioKUh179%2FL3C7KtJjMhsBDlf5WZ4Q1%2FH9PZGv%2F5ilSAT%2FqMdtTIZXrOvoIoNtEh3G9D2m%2Bjd%2BeILRNnZYfG%2FoAd%2F1SH8QfM8G4ArvAsdezsJYZ%2FhVdOTdZocKaJmOAEU4n2z3m%2BRxSXcEEudAGc90W1gKV9irpb96h%2Bsh0koEQD24%2FHPjsRyVzh1ZuNqtCmE7AcDzR9AayYGZwAx4OCDXZWUadt52n5vWQDFvFGQQ0lQfR6zusr5fYLfcLY%2FTbqdCegPNjRHMjfnLgvlYReh79XacOlu4AaZMJK0w8kGOqUBBit64upSTnZXjEb8ULykZ%2F5%2FOpQVscfjfCxNjMrBcunoNaGTPo7RpkzLIsIyS%2FFGosHzYwprXDtT8sPc%2BH6Kjb1f3VUb82b1upiOlo5SakvvV6%2Biulr9UF2EpNppLFN2uR8Eqj4A8OsYiRDn0bYZl2SGKB2FRBZZZUyviysWyP4YMecZwnJfJTg281nX1WOe2DDIyFcS6SzT8MemSkzx40zfP4aW&X-Amz-Signature=34f8a73141f14c5a39e1da00a2ad4dd04ab86a35bd291d9e6521485e845137ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

