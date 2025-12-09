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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCA4SLCJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T230430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPWci6kqnaD1g9%2F%2FfZd8RY%2Bd5FJZPc1T5X1RF%2B9tDcrAiAlK0HCsVEBZaCAR5BvphsRjivK0eN%2FZZ1ZMSn5X%2BX9JiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNQndRias%2ByoLIXpOKtwDhawLAhfHq%2BfWf%2FEo3MqTrEASbgtNKW74TR3KlhLVjsqyNq0iiTUWf9A4%2FGOIiQYhYnT04Mp3K%2FzSwefyeAy%2BZbkeSuc%2FRKwF3ihNJdn8J98qsz9SALUw0bB%2F3IiBYoJxelkITf5TaUxUyrg%2BmUtwvrIXFtusqVyJGt41rF5AVXmHXTRnTawrCqQ76IHJEExndaIP8chEaI2Q7GJ5ezgRvdTg72LTiMmEvbGn5Nsd7mjpwDM166WyiEm3lwKNC1VWbqcPJuQkjPPVvqxEL1LsmR0uMb07ONcemtM8wHlP%2BcWMSGnaG3Ikjg1hgLJEA7ZwcKKsXW4j1A%2B0mhdHvxTTb67B%2FCUi34hTPvpdO8NjAQD%2BEMAgTrM0cZMo05zHfA23pOTHaegjl3e4l7p9DyBFYQaKJwRXV%2FNq229kDnuNh2jMU0Pe39iH1GGPJJH2fQqvky0gJS6Sror%2FD3ddkwys1JBq3WfeP8M8lKPV3UxM%2F%2FSfWZYK0KIdeCWTkBRdr3TAQWP2AsxmfNQGAoR7b8HwH6qmrljbgK3zzQBGFPaax%2B%2BBGfy%2BlRvaszdD0gkgICi19Utzb2tMonTBWFoqBGYm8UPp7RNx9cMdfOrmFKKAvGUf74D4te0WrbAN2jUwrMPiyQY6pgFXw1%2BDmMqCzmmFvWEIQLkONjt1xyQazbV9Lw2OMLkA67bXFMjTreiJlBv9EBlPZ6NegX9aa8RySCtMw65RXEK3EwmSwxBYZL5HBjLTowaOv5JbXgHfq%2B08NDp6rMAsaX17rvMZYB2W8Ud9xM8PiAhHcxXrRV%2FYcb%2BN7CgEZQ4jGrrWreEFgnn8ZsRCfvSjmLpH%2F%2BwdhkKyLSapilgH9WaFR8WHAdwD&X-Amz-Signature=f1ddc3d97992ef80fddf29ad6c9e8944fe4e1f1447eaaec5f451cb972ff59fbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

