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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNSJTRKX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T073218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMOMUQoH4JTfl5XXpW%2F20u21E6iCzB0c1OH81jipJlHgIhAPXjyi45VAtLsBxroWz%2FIl%2BPKOJaCSENnh%2F3KB27eQMzKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx87%2BlpMCGQOdx8Kwoq3APyheWYcTECaYso%2FwW2T63QaP9vynOBduGUeZ4UgDtoBj95BvKGUAqAtK4hk%2FZ5Gx6u%2BPCstDBtCbrYiLzsgok%2F8JlnmOYoLetMuaCkXfyUUAYzwBzopTuaZ1qYdwByIHT%2BRgtyE%2B2wSG0e9wdpPo4NFDSPjefBbDQ4JInfHR6ub2apKuvxxOA%2BmHGj08TVr1JUnpwEkOuXkF%2BoXDqe89Boj3J96OtuGWkEdfMJWSoUFFKDovLp%2Bg3PPZqabkkIuGw2H0GZincUdGw7AXY4AthrEqnrbH07ZZQ1x6AnfU%2BOmainpsvQgqWfP%2BfbkTtMClyvbLtgbFOuDHUJ%2Bkhev9akaVsM%2FyXlrO24YJUBdpSeuSVzhdUOeOSj1yN0lq2qbaqRrL8j%2FgsMan0Rla1PVifGNH2LCkyJKyE4HcBYORVmsEclDTGMUMtqs2d0qJ2wAqhwJGUhys8DBI6XuhzyAODP2smABRca8ll%2FzTThuTlJLnWkb5nuQmLVPVgBNGD550crbCXYnflVka9HBL00PxumgHyonsmBmUbXg380ce9%2BNlUwOVUE%2Bg2terg%2Fil84zcP3GTFmzOFntJtdaxXKoJo5iDjBNT7D1ATNS7OQB80GroLHgw5CDqgwKIg3ZzCIotTJBjqkAVOq1yN7%2BmarCtom%2FQ3iIxrZMag3fML%2BRZNThei3JvCcAibZGfb7nxxtzySDsm4flbETPO7BS4tN%2FAr457MaPP4JeDrZF6evgaOgMEppbzJvitduT9XyQ62yTUvzYKRgUhOJZSDWLAFIkbOqLz1meP61wKg77EOge1u07TYxl94Yu270ivhgHcabK0SBV5HS%2BkMPS3A%2BT9t96iKHPTaBlinKUPfO&X-Amz-Signature=38173a147b655a6673607742cd7de54868f733f21a355c0fa070a3a7b1086f73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

