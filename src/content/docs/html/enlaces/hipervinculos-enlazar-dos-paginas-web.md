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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VXATJZC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T212932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoaKeKG9YutjHpkEkblLg9bzszRQJrJq6c%2FTOAYJRjDAiBbBMhegZZVhmI6tffF%2BE4Mp7a6Czvlm9OOe8X%2FmV6vNSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoapAlbPoniG%2BCcAdKtwDBva9ErBobGllUG0mpqlTEo1QCXAmsR%2FScNAv1s79VJq0n579p%2BZzTB191sshKdw5%2BRRIw1Jg1P9RinxLEGjFWKiFfxucz1OuWDOQe67aNWnm85SfRCq2fcVhxkdqeezm0s0b1sIFFJToBf7TgHyu8xlL1LtV%2FK1P8NOpsF6LkmwEDq8GcB0m6ypRe0VqL2HdanCz%2FCjMqguOE9vzB5q4d8ilS%2BXO%2FP9yqVEXOvrX1rXK8bbxdHDlKVXyv7eaXeGHBb2dn3GpPePBKoPbLM8qZ2cvBoWx5spXAIq8oz7ZYpw7JlO2E5TvJHlk15o4vsXYcFcBgJ%2FfGNvO4kNZcrVsez%2FNhD5gRBm%2FlHRoyMaBrH82aFXxUZgLtheKDPHVpJOAHTV%2FtMFILoDfXJFK26KtEYxF3tDd0HhbLYtROoVMumsYrDJHu%2BAcP8Ymqzlt%2B%2F5H4G046h86K0Q%2FpAZWtKazTeiD6vQkxos1LjwiBoZooOrprUhwjBXxQdu%2BHJiEntimOBFrOCD5PEi1eR3uL1OzwcG5nmhnOABTqtH3kHgWgL0eYJQ6nmUaJus4vOusUrANeQpAamCV7Pw7y2C%2Fi87im9qcugKoACj9V0wvEp7beFAW4R74fBPGY2AmeK0w4Z%2FiyQY6pgHBQCHLgpCk60kprhiVg0M12iFjKSx2phIiVf6Q%2BfBbbXr%2BuXYlPZw1n%2BON7tZS5JovRdaUs5SHyazZmCR3A1vkfv7Q2kKO3AienwdGp2eC5Xvj1DiS6PLm60Mf%2F2fvPGGYMrMVsrLDPoBQNnGWphZY3nPVUk%2Byg6cLNvH7phR4ArHzP2Yx76dgbzO3rg5yx1sbKSnjRTqypLrZ4fswNAVAKcS5KyYg&X-Amz-Signature=9b787b2dc0dae9e59b8c00293bf284b557f3f6c5b5b15c2c7443079c0c8e2046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

