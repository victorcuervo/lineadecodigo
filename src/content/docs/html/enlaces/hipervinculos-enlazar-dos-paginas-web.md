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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF5XG44Y%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T192231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS%2FWpdzpBtCUwjlG95c28PrQpvFFpck9NhrOKUw3QhPwIgGIBYeECgnh2D4SQM9YCru9SpN2SmVrACVMSfls49%2BOgqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbYXNeAVnjv4hGFsCrcAz%2F%2FRe2rGlcS0dbkv8KunN9u1%2BmR7tqJNaraUce7X2%2Fyj%2FZxZ8N1An7%2BOKbi9qk1eMJRYA4fhrGbzf5u%2Bm%2F%2FJZ2CTQ2laDawVx2y3HsRwhAg24xCKOqVbctymfLCS1HeCK0QSItvU%2BzAj3PRx1Sj03tCoworIB7WSjnLZsVr4n8RCbZvsUeT1dkiz9kGvn%2FUGk3l9VsZyfX%2Bs7wbRDnhLTFslKYJxVvCzSiLcIy81dtuAfRNuqv1zO1%2FrHbySYNwWxxg77cBm7nOFU0ZwuT0i%2BxOh%2BuDIHQH0CpHfGAIZv%2FUesQ5oSDWiXr7FhpYbg32BoDYL%2BWH%2BI31urFeNk2TTafd9MklzZDZ1TCItJDTF2YHSAjLpenN%2FZcNTo7HM7tDmxGCrs0oVKL1vz4v%2BMEppfje78Dd34fINRTS0dSVFNTR8J2pJhg3Wt6eQeL%2B72YcT%2BmeDtSrk0ZLrKFgJtYzWZIBbEz2eMkfyYOl5nXRV9nMzvRzYnW8XaxaYKWdyRyMrwJmHFUmYS0tdx403Hf6TMD0OIPMnDa6FVjrFHHEB94BKuDryudMmjANY6fAHhi2cSn8ANwBogYwLidI682PUbPRC0TYepgG2Cw%2BnppNXr8HYOS5%2F0J9eWo7QgxrMKzf4ckGOqUBQ8ZFLyNhdFA7dKwLd%2FOtKV4gDV5uVcQwlKn7K%2F2DZOIt92cwgp%2FgM4TO%2B1E6BgLilvHHCAel3jBsYXn9tGO5rQ2v9XwtD3wKPvxndWlr6OMj%2FNADFoY8J5HJbGcVgeG9vzuZKIrQZ79TYBwOYHhmfs%2FOIznyvVZirxKQrTGzY0v2NPvCpBpsRNa%2BwagJHpB3cgctm0zjt9HnIubtgUGohmXflJ0k&X-Amz-Signature=ab2b5347a8eb4cb961a482af85f174c2a670cf544a25da3cf932cc738395591f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

