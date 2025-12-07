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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA4EA7Z7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqGRRxFij%2BY7bIrQ0WNI3g%2F%2FFaERKWwSiboEqUJoBb5gIhAP%2B%2FR7K%2FCvyvEaod8G0I0%2FIXSdnFvR0IoHA78q5B7EjSKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoB0paD84phMGl0PIq3AMmBUBDUfAQllnHEA5%2B%2BV5HKopyUvP6wS74P58uK96T4jwrsxorZ1czTHTqDYb3Ju3WtWS5jwDaltEZKW2CiE0FSo9Inv%2Bx10FSkFE2FLDk3FoQqV7kZhu31uz%2BshQVZhkaC4WeXV5P8WAqA8JwhhL1uMGqfMkVrksNc0MZX3qiQHBle6QnFYDWA3ulqIbDkyhdMt2Re%2FMOStzvHIT32anaAg%2FGUdG2lOpzIkqMEdpmNC1LuVpwnKN5B5nnSlqChOP4qacCTsaykS%2FxVxp8sAPOgBctA9thQjqc6NLVDa5W%2FcGfO8DDKIWeb2ctzqSKLyvTJ%2B53DnTPsCZuORAs2Ks%2BaV3XMrrRTu61PlTdLrV%2FgqFR0sQhRkjcHhnZP8Ep4eNPsgSUbxSV%2FeawnPCuu1AjSTiUCuaBJQNGHUh2hwmQ6WCAKCXMf96rl60N1Aa7eMcslBHBtNgUTm4KzVrwiSSPWOQ%2FfOoYvTb6SSR7i09u16sed5%2FVzEjThps%2FcBxbtom%2FpGYZGDeIYvZutqNV2BgKSHJTwNs4DHUQWZREd3%2BQQxsMoge2I8d8o%2FZ1iGigOH2XKSQMI%2FKhgnupUTbCIH4iBEELKK9RRE2oYPKoo38hm00CImpAEvnoBjnx6DDYhNjJBjqkATLNJ%2BTfo6vCFlh0pGcUttbYy0HzVgI0bLvCZ9UYkMe688uNU2%2ByPesLVYNGTVAp2q0zGe0%2FYZeLhxk6%2BIb%2FMJ6ONlY3ou1JbsUFplTWLqV43qon1K50OOcc5ctglz%2BfA17gwyAlb5U3%2F%2FnPU7zvaHYAY%2BUhSbCBuWwzkw42kgiIbtZJOofSE0lMQvj8WvHPpG3d1%2B9MQf9KadIClzlQ0Lv61%2BgP&X-Amz-Signature=9953247e2ef4b283da3c2464fb4443f6325c217867b4957167f26d1f8760ad7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

