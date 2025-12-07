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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZYBCI2V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvLnId8x%2Brs3os7HiUzenPf6pUyl1Dg8Ze03tn3GbaPAiBv79FzVI%2BChXy0J7iy8FSL0jBUdAPR%2FEfFJManxxSEJSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMndUiR6Me3EbH6pwMKtwDm5FiheFyc%2FL1qfw2jc5FeJ8opZzUy5jPN6R1phGgVevVegtFIs%2BSbuOP%2BCf6HbaU3OtV8a6vstYxY9Gar9PcNEAFGNZ%2FzZojUYkUQm8mxVJsLMgB%2FFF0bNvU6Mr0tQzLtSnYqhjkRyK7kdGJEwCsy8sZmELCm5yGLMTXbTXO00gzrn0qdvFoFaKBbkuDS2jB8Y11hLpGhFF4Gx%2BI9WBYWMC6E4YM5fbv1D%2BB0qLLFwDRgKI6VT2jyxTErP1kU2hHPYPYGBDnbhNEWret%2FY7oaO63wLh7QLNYNI82c5VaTx2J%2Fc%2Fjgd11cIiY%2FrZi3NoxHNolpr1O8bQjY094K8mafG2yRnQqeHfZ4ijhSOJKnQtPrmm3gb6mOl9fEoytS5jsAJpHBPIC53MIove7FuA6v4sQpPGhLTaiU9O2mddP98W%2FkeHFtlBIFxKJrLdrDjSaSReazqoqf3Bpyt8hgT%2Bh07klfTIlnkczTPZeCe20TUEcjhD%2Ft%2FD9Myk7CFpHZOQ99tWF0XDjscujjKBfFhdo66ItBvd1bdBgrUR6I5R1%2BEZXDROnzvoJrkapPtVMlLVq2sy8g1GEguMp90Y7VSu%2B3sQzy%2Buul%2BdMw3xyJM56VkCxJJDXUAdPO178OFww9ZnVyQY6pgEagJAV5mxtKSsXzFHD75NqNGsWYohhLAs%2FdkzDV0n6UwePe3siLg1MRwcMCPNZ%2BNilHzBd2xf3SbgrAiw80Eg1vhAYS53CUveLJshFz2A%2B%2F20SIh1q0BCdXuTOwxWvsvuFoUIJHaIzKG6k1Q7aUu7P6fpw20MEDU4%2BiLEu2zM8IjEU9iwH7jRvFCor4BCQSR1rA2Jj9Q148vedKVP%2BmA3h9swY9Llo&X-Amz-Signature=46d2e347d33e663b6525004e6b105d506c2bbf86ce3228b6c84401c6e5e5cc3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

