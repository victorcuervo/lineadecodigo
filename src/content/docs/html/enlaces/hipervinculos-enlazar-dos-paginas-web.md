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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOODLQNV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4HVVDHa%2FR%2FDnRJSJMCucoIO7j%2BOuldsDAP%2FwfDYyorwIgaae78B8HrySXGlgmEPCCLqCIv2MrWJdviBKbxc33urMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqKxrKuFhPGsYah9ircA8UAGPWyQh7ol8sDXmuOxHJF6ahHmReIs8a8Dl7gyKzfOKv1MavfI02llsgHc8eZJuAiSTC2h2qyik4ji%2B9BqRCBIsz5%2Fc4HVJr1Ngo18SrB6xhQf4X5QiR0eotEXVm3YdkJyI2lLH3v69E%2FUegcFnCcPWkwa36bxxjXjGfpx5Er3%2FHa2ZYKASueRAfHQeNJ8AiEhD1DZw3XBj2WxYZyLfdD6M9E0AxyP6a8qFHnpk96uMFJeY9XYbvn997PBiNfTvyWldRk8Vl59M2fYX2nChq%2FgqDGeTyumZIPb0L3wdg2k1vAvEEDS%2BvWtPwL4%2Fz1GuIcm0pQQTK7hzk0n45BnzG0NqajCrhb0QIq9tkZysE73g2gQRcJfseCwEAgM08d43V%2ByU%2Br4MRm6VtTqPodAnsoMk6rkVj1RhH6paz%2BIWNGdbPrj2vTPgfoVNF23Va3XpCocs4RAgNpagSZrHyTTy2gcufiv2FRPeHB%2F2csCvxjRNjHpFEXnTNQ%2Fvhl0PZPYVPECZKL9qBsyycqPVvo9bE%2BHpFe2oBHc%2BAeDmg1N0aUcrlwKajoEuJqvJrn4kiS5WXTz%2FRrMGQWnf73JI2zR2WokTRO35355VFCA%2F2a4r%2F3tMSuPIRWgkuoOBslMOLE38kGOqUB6SVGGzLwwPGgnI4XSy5xZdOfNWkOJboX9pVhFJfV7%2Bbb73D67xuCX%2B0sezSbRzzKiS3gZj7dlGeTX%2FwFtA1yIllozTAXowPv4BmQ0YhwNJWxXr196mpNnKISyhQQ40IFGnPG7ZHPoOJnWa8zACFOfHQOaeBuCjBfnMsFNfBVqNtpwUFO7Z7o%2FpPelrAllYs8WO1BLHFCvNyZUnGa3QorUw2uFn8Y&X-Amz-Signature=93532e8165c5f1333cb1d0986c71c606d60a8b797d3d2b10c10bda1607965f1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

