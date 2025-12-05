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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WG5MYRP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T131120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5kXscn63yZVEOEIKwfqtaIDWO%2Bg1BBKIYGAzixwqjjAiA5PjBpKtvwuJ7uL1Mjg9noEKw1cgjD5UIhmrjzWgW1RSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMhKrL0I%2B9JgMurBEzKtwDjP9q2FjYu7xCwf73Ob7CYqOEqy1wpPUFLaYefGzKCpWN7OqbHITjLCoS%2BfIln0Opjnxw9ZhjOmxEnxWHUeUZOetxhP7VQmGASq8Lttgpa2N4MxKH41T2YB2bZP%2BMUIzSnuPpZG6xSLR9CTZ%2FUZ93dN%2Fy03sFWxKB7VTc3B0ispsVo5DxVmG1H4uSEmW0k1HzKOaEt3kQrzgTgohQuYpWZXX3ILcDYpInMB34yMchh9VYJp5IbTdzRkgXklcCoX3JANQt%2Ff%2Bhb49S0ezJqT1VyH7P9zkluhhOHBBcsqgbS90Ajy7X9FwAtufq4e88WJXqt1C7mC9ubQvMZm20iZUB5Qx%2B9jJKiKuPxAUlyZSZEYbaFjY2E7s0s9GTREQNH7euT9CgVxF6dj3QtxhI1K%2FI7FcH44lGmu6oyB0Vfxnp2Nbnj8ctnzOVKSzfcItJkaDYo3Jsk3IHRAkYFLRZ00H64s6HjE%2Fu4RtsHrv0XwB4i%2BqUv2YS7GV24NXRq2CaiCkWu3T4XplEe%2FLbTTKyGHo49ID%2Bkp7piy9pJVHv%2F2wOu0yrAD79Qd2TwS5V1UjSPrrXnm3yzNM5tZT77vlNd16JGGNuuskJoc%2BAJjPlGpO3yh5Vkg8TgFE1DAsMnOYwks%2FKyQY6pgHjHiwQkhjd6ISwr8TH%2F2u1BKY7u1Jc%2FMV%2FCrCxjx2TxADfFYauMm1ne%2FXt5vfe2v1KGJdiAJX1vIUsOL34ZSnLLL8adpND6Y1VqXLOPxD5hJk16rr1PcQuwVrLUTLrQlUUK3gA%2F8JwPXpyA6xKOFnSQ%2FKepd%2FEN2GE%2BhnzdlpisFINPzRo2s5l%2Fx68n6vaUEAxU1V0Dv8a6HIsaNanOOgynEaqdM1l&X-Amz-Signature=0d30c572ae978e9b636d5ddf7027f3a5c8b5be00eebeca63dd6872a111155cce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

