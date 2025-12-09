---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VFSC2LO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T183620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH%2FF6%2BmTjhZ88mnCCMr6kY3FWXZGqh29ASyKWldzL7fgIgdzVAwvLvpYbN%2BjGqRncsnBaz7LUVDMUSx%2Fxptoygl9AqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFC6khqdS%2B0tNkUrySrcA%2Flm4%2B7N8Uy7ZCLB4qrhsgzk78HQRiq52UuW7tJCJDgUaL2EhdF3RSDEswAbzbKkg88U7o%2F5pqfTb6rVaVyuJjQtW6uQVqS%2BjYyELGDRyJE0ladt%2F4DQRgr7fUQ%2FFcDVeG37tnzXDj5aJVzN3B7Dlvm0lbiQqenaBy%2BGycismJ3XYyhyL%2BDVx7Q6e5uKYe7i9Fz8mkXJKsKNih%2FT0COyddBnfCFsAOwarC5lgA1Uyc3GUilGf3CO7h7Wml%2F5vh%2FB1e9MQfHUc1yJV3S63pa3FIA29%2F1eZSPJu5BUA8PV0te9DrYasQTX2pp2fk%2FT1A3xmXiAY%2BlhhJy6wQyRYSePsBuqEnLjysr3TCgocJwlb%2FPatdS%2FcEVTdsI38lQVw%2Fz45TG%2FTCFTozTag5GXekg3BUUfPRePKevK9HlSNxrrcY2C%2BADDACtQBRE2WShmPs%2Fq183PjAgjGRz2NnSHpprz8cb%2BgeQk1AGenwLHoCeZ1uRpOISoEkfdkpMLxDCHz8pE3%2B3EIyZ9xGGkWAeC7OwDoJM5vHL39H7AsF21b%2BZIFuRqzbCf%2FGF4J%2Fn%2FSNuvz4Px%2B5tsoWrFo3QvD%2F6PqvbEcHpaOe%2FMvYHq5tPNfvT%2B3Cp0nXq3oarfByeP4iwWMIa94ckGOqUB3IPF6dGHfEFcFZ0RUUvyeF%2BL%2BPZjG0UrnbcpFOsrhNTIAhd%2FWmWOSjELdsTkXOOp5Xo5I%2FKPbPNaPpuJG%2FO7YuTHCS0UOld%2FPYRiW3wUyeoNUyfkc4SaZUfJRoU5pOebqWh8TIDxnpdJZAohIsqBBEW%2F7e4o4vIG%2FzZOkXAGqcHpyERs%2BIVQApaDToVHYSLeXmQy7968%2BKdtfggeneXE51YF6o%2BQ&X-Amz-Signature=defa9f116c9b6196767494c0953f350ab18e3fd288653d99a3dc4b403be490ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

