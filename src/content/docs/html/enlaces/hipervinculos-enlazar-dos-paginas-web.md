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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSHGFUH6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDajWEb8JJLrTxFFLvozGMvxXHHvhNcxRFNfaYRK0H%2FjwIgSb5hbJ3yonu1mMR8jcjF%2BMv%2FgUGmqvSWVZD356iQx04q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDN1cHR4fOJFn3R%2Bv3yrcA2sQi88aQPIq8fX%2BoK2onFg362xKoj%2FCWjN3s32rEHIcsPSyeajGXw22QQz4IrLUyFYE0qa0fNjIMqmtyJLVz1noCWjPQcA7rfSdvNVAfCYo%2BVHmkEnhCJoJM2HmpWhlY4FRvn1qP4%2Fde5Q7zuK0Ibse5H6lO0eVXmiGFX0vYtnFOK2L2puyTBucMR9gxgHEqMrT%2BcWVBARRXNqHpl%2FnN7RauDIUPeAoKpjTY7KCrv%2BFUL9eQkqqMowtiTUBGX7tsmbMZtRldloauCjZgQCUz3A53An5O%2FoyUx7Ms9Mjtw6JF0ypt7TyeetA0HUBq08xQCVLLctlKPWwtUcZ%2Bm%2F%2Fny0%2BsnBVNRmhXgHUagy75l2rnSRuM%2FM5vpVJ%2Bb7HOfelR8%2FfSdOPp0S1Ne3HsDZSSrZ5tJasKnZKnbnZ031S4foWqzZ5bNhfdO3CiZc9%2F0elj4GNjAHIyb72T6nWT5OTU9bM3e6OOlYAGo2rXmiTCmmVUqea50tsu0C8d2RMFYw1rjG3x5KoXVsyeevaRJSeWuqKxb8LzVcN%2FmdtcliQSVOoTLhn8c%2BzeL82xVGZ61EA0Xb6TXKf6sJ%2Bsj3ox9IWa0tli13PpzZJJXftRXqolbrpSAY2Z4HrrcDzm%2B3dMPb0y8kGOqUBy87d8QSKHSZIxpipgPIGokBROcL4CbNO94G9HPJT13MoIkv35CVox6wZr%2FQt7487UiS%2BD8brOKd28icM5emHQFNgb2IETLdh%2BtRY%2FFKFDtDnI7IeznHvMfsWdpiWykOVjjDFQQ4GZnxUFWnVxKCXUrbXUqnfh53KFUD8NdSZGZzJwJqZmtfKpZimqn6HckAUgRU8k%2BuZ0n7CvSKxERcrg6dqbb4O&X-Amz-Signature=3e979963e5b60d8fc182eaa5107de533e807afcd656f66e628d23e529fd7746c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

