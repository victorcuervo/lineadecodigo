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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AKOPFEY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T234057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDdfxIbf5RYC5ldi%2BBIoGzT2ddSbMC8gKSREERKx%2BEjAiB0X5k5sltSVgp1dgSmTadfHyGIKoi6NmBbSbQWU3dG4yqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMehECiscGZN8bkx2sKtwDV%2FxwDq8ANNx%2Fel%2FNkiLD5ZxKdiszfKUGjWOkBDs17zEf53Js3Z305LSWqOp5WneZjEEl3Al4NEtxUC16gaK%2B7YfQXadUIL9n%2F9pU4cO7aZaaypR9it%2BwkhDy4JnF6CgKBh%2FOuq9QxnCIYpRoQy9EEB7C4MaNSjQ2Hk%2BN8KHNGchtn5XUwK%2Fxhqa6G4gzejaG5CpioQZPp5pitelIcBSs3mCrmFoVL55dkFh4LuGXvsPjDthmcqMem715BQZ1X%2FSHaHQV%2BF1rmeV9CVnJr4RLjjt2Boh5vgaIKGWK5XLn%2Bvuchsv5aacMIdDP%2FtPRJFgrc%2F2io4DLsAceF9RSvZix3ihPzkwnd%2F0MGuM6j9N%2F0OAW8gY7JeCPiuby5HXoBnGByNWiTRu5aLZU3YtFK8J3HgTABko%2F3hvf%2BVZ2CoZRvfsTCrOsA9kwBUR7Hb8qYHuj4gFrWx5RdQB4b7E1M%2FYo2lU5wtx1vZ6HocBFkRAJfgJK6wiEUln0aehxjRcvXpGGa9TyAPHwaqHVJAZYCUvgSQhZn5J5LFzfH%2BfCEMTKmpd6q%2Fz50UZFleCwdtEW0GF9t0%2FSTu0wfVKW00ZlkIFnbXmqdhN%2B1cQNbUON0Q2IlWVP3SGMLfVkVgCdd4Mww8PiyQY6pgEjQFS%2F7He1nY1sEScKXtqQSlOgKEd7F7kizUUBi3zULq2PBK3wLiCv7LEXtpFcMfmvVBpJFRPqNtFNAZDy5sRlVgppvpkBxn61M%2FtxqcLuezwKVzflgSFpf92q90gvXaFEhHqXgreU8zoUmYkgc9Ssn3pGqW1H0muusVBlu0V%2BB3HMVp5TMm5sjy1a1wMs%2BhIjLepneVOlbSXSNI6Vekxp%2B70qbdVp&X-Amz-Signature=9b0fbb708547d7f173ee9aa404821e01b7f2c110c838d0a8e0a18acdf6d21ec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

