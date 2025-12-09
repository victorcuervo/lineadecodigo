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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H327RLS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoaZ2km78VFv2jNHRYK2YDZqc9PqP2adMtmTPMfWJucAiANybgvKt%2FbnHENc%2F%2Fl5p4mSb3UHac2KuByePq7Ph%2Fm3SqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS3MIvXHzljC482QqKtwDHph%2F2gAYabunOuvgb0cTHXgubrtjYQG4FP%2FRA5UIZb5o44N33uPhlf3DXWdDqqYYpQHcmCVlBlVLZhvNEn3hNmQzCeixGxk2%2FPjdMx0s%2F2N%2F1%2FD%2BQ9JOObIdQ4skCpkp7QNp4NeTGXHwl0%2BSe6h%2BzT7%2FfZriXPbem%2BYAkow58J1oaZQO3NArMzQB9QmCr1Vxa5qAjbFBF7L4wzypgKkJhXQWD6D9m%2Bva1%2BakWbgoOCMO%2BbTj5bsAoN%2Bxx141j2A%2F8twk77rWqIAteEMRdr6jimlWysKdq6F%2Bitn5W1Iq6tSrMsGvk4KPNMCegoa1n6tbrf20pTBuMJpuGLN39%2B%2B81agjTDIjMxuuqIBAO0R%2FHP6lmDPnkzfrHcHKi%2FC2KAE9irI9Idu3fb551dccmcJkUgyBeRvOCCoYJGoN4xJhyP7wl8CK1zQs18edTZ%2Fu8NHFif73jIJ8XkNoAIGAxgdGTB0pKU%2B%2BecNbMvc0uadq%2BfPLNyq489m%2BJBkckTT22xE2y15X%2BzyCr%2BvMowqE5bJ8Y3lglQ7QthXcqL6r1BUWymGwGIK%2Ffi2Jmbi%2FcbMH97Fd830pYwJGzrLgkhVoAh4HxCcyJugUPYnGw5uZpOQfQSjxQmlmD50O7yjyZCwwjundyQY6pgFfimtjAJR3PUqlY%2B3y7ZYSUTA6k%2Fz%2B77bsBcuoXMCwu8WcXqnubg%2B5HOQao5zycL70mlyLC8lwQ1Nc%2FAMfnJFtAxCRmg8bd06DC2sZw2dM0yFTwozTySa3NgPlmth7NgyYO8t3lS4DYCeC0JhsieaYYOcEX89Wrmu1edSZMXLzGGPvx7jpXMj6lpVJGA%2FKbsCArMaOY2lc%2FEiFOxYyaS%2Fqa56%2BKLmp&X-Amz-Signature=31b452d90fffcfa25f05a409e35f336719beadccca9dc262d14d0767847eef58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

