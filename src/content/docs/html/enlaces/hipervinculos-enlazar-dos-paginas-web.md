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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SLNNJKC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRXXwBE7SuttzrE9%2BS6kNZWW981TB53w8ijlryTbqyiAiBK7NTMcGtIrHnTFL0%2Ft3MmMnkJI2ByCT0wY5ZLNCYatCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM6KOfKUf2nnML0i2WKtwDqaVK%2FCXidyFq3gojKuKCsmu6f%2Fuh9BU92V1Z8vr1JLuzeZ1iBs8YZqdbm4KY3hVo4qIV7GJX8PpxtETynCvtMtkZRuW05dmaAYxCDS1PYLUQHPylm1lCmSwr53AM93Z3GSadka3IoZvq3thmpKD%2B8vk273lSUuBvQXHaheKhhyKeHf9q6Y4cIPgWnk6K0vhCL6tWd5oDp6hL87%2BIR0dowqsXM13ZLI43P2G4rz749jx%2ByyekI9Q8MXvw%2BrnesCzvcGBSBbTxeSgxBofrVa4KEUWae%2FCUheyfKjwf8x3UKtRDtT7%2BRjRYfYN308zxxJt0zWguBi%2Bi5lL4MA5Dl92Ste5c7qbceHfEnP9JqngAvXS28RfGbYBU4z9tsYbQ6IqbJY6LQaryBJ1lVjEqV5iWMeRmwupzW8pzDzDo5J46v04G%2BAVZ3JvlfySq0UuQg8lnQCeeLcMsPgCODvblQ1OzBW6jiBrQb5FLceDiO3jnH0Lb5mvB3jLqqpn%2BGUT2CYyjjWd382oerKYymK2aZJ9JVZTxIQ2Dmk8AR6mEPjbKbAMCButPrId5VFDcZl5cM4BNC2tnKOJv3rbwIvEK7p397bTQh2j0G%2FlxIsk%2Bk%2BLEvP1ro2%2FJdX1r4oBfaOUwu9PSyQY6pgEj73b1a21RW7IpHcKzt4aW9gt5GpoSuHUaRRK%2BSeZKl8thsWvkz0ir%2B3lUR4GzJXGsl8EEBGP4l5aweL1R5hkmJNP%2FEvHJ1FSWDvpBu%2BM%2F4DPoaHJ2rd7mY%2ByMGyOpcJ83j8rABnWue9gcQ2PZeOw5B9TKJVJPd7GAnBw489WtMSdp7mwt1MysxQjHD36l1LLkA%2F2iFvZRor%2B%2FFDV%2Bg0b3rwFOcVF6&X-Amz-Signature=49be2b883f743948fbf5e8f5cf9893f5ee02e4e98a8f4c02368a3ea160101453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

