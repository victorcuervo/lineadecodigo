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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQHF7RN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T225947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9atgXoImkEAJSue27TcqIH2Hbz8LNS%2BkOf0d4CbxpBgIhAO%2Fg8D%2BZS6567swSrH9UnJI2c7HY9QCaD41fSrZvXpUDKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNvRtUaBgQ8U8Vq%2Bsq3AMrpxFWQIhkO0lCm6o0vLoCMxhSUvzCzb9Q3wJ1Gn786azfa2FWvYaWu8mt%2FfABXIYNFKja3OUu61VdrXmEbG%2FS%2FjwCq240tNuPsf%2BQF2u0%2B97s2lX%2F7UNhbHCsVRYgVuFb5p%2BJQcyCZ3RwqpajV%2BKlvEjKVYKflnPoFh5g%2BpDsC%2BOxqp%2F6atpePMwYSwI3SOqMW8Pchc9772Df0L0uMKx2mrjkxFwGPVq95SA4lkUtVoPgLQj6RYYJhKqixjZg0uGptoBdj5r%2BYlaIKE%2BWdHfOqDwITsjiGKFBP%2B65QENUGMgTTk6Fcey3C8reiDhkH6Bz6Wc16ICuXrqdGpod3YIbszEpzeAFSrae52wiA1yIknJior69ljXM1QvT2xbOMTP8%2FlgXnADKSkDG0TJQKy7X5beshcxGXh8%2B3ocFgpNsgnuDhvC1wbNMO4MM5me6h6d1Y55J1XV4s1zdjLUoybgsOBeM2omDSJKnFgEUYZ9aGTiG1CX9bPvIfdqLNlL%2BrCZGsMNJbOFi0T9StryBep48kIdTY7pZfxXGu7hRcmx2T3lNeQ6%2FMwQQUaIHNuNOiU4DZZzxK2omithmKmar226VMl6eDQyPhqMqFZr3SARKO0cT2RL%2B9edkw7Qv2DCdxOLJBjqkAZ6GCaQPB2j1S0G5OrkB7aTQfNQu8xnyfgBBzfOhyzlGzhdkomtpYE88S%2BkbEy78GbKLdKjfWalKqEKaqEf2brhhgB651nqCoHrnEidesDLTmnG2Yn2ri6mr3SWNUeco%2Bg4YkmvqHlyYV9oA2FWFhrRM%2B1ouGZWe2AdWEszJdz%2BN5daO9ROGK4vkvGEqAv2Prhy5dmeDzBfwqor4Cu8ySpkkoSxQ&X-Amz-Signature=e0f0ed3d6507a2b27161db6b3ceb65b9fe78c25d5175f27d79bb5d15c04129ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

