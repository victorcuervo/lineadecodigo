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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUA24NMR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqtMobE72XUF8KdLuR06y8FcPHkrUNaU2EHPiLpnCD2AiEAzO40tei3rr6h1dyhZcrT9Rg3ATQ20kbOnRyfl4lG62YqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxrSgo5%2FbT5HCanjSrcA3NO2IvP1E8GwcNsE4GVf%2BOWzaA5%2Faspb%2FEPmdiFyXI84Hr0dVKoXp4P2AS87FhdvSjxRlfIm4Y%2FDbylzIBOroKfVHJSqq%2F%2Fj%2BY7lOPsiBV7YJnjGwNUOSh7D33kSV9VV1DSwcT0cV6VwLl6hVokEwFx%2F9sk6Quzi6PcID4kTQSbwuY1QgEYvq%2BnYyqaHZoZvCw2ZCexAUBNGpzsD%2FPe%2BKhuggi6R%2BKpHEdyDomjBSLQQGlDmTd1kmUuGVnamcgSEqgY%2BuYs195txHxSIlq51RcXx6CBCrhe6t3mMl7d9anpJY60QukjmS1YtoHVFmHWRTpE5AT2MQo%2F11oSuJm5k41MGWr4jVxffzYqJMA0FtabETAyxJ%2FeOnD103RJkV254qUdSzjwjjNtrWiZ%2Bg7i6BagLBRaDbvfMwxHuxaI4oi2CxNhzzkjLbk4M6Gw0ZjmvmumQY%2BRF%2FvS3y0cceysMGFJvNQkz9eqKXtvMJvX5O0gQSTGp%2BVLaBXQBjYCd45Pc4ghHQIi6X3E02vEfxOmaFFRhvxcllJkx%2FZt0f6scJ3x1N1UrizbLlJBlzMLc5vmc8eD2yXW23AmPUQAU5wwzIz%2BNrIGgVrtqeYvY6ELXMP%2B5xHJfc0nTwJtUHAsMIrB28kGOqUBebgeAB2hBc0NQ0ePbhnAUkW46vXASSoO9QI20zkYc9f7Z6DstbX%2B65h%2FDAcOg0fvaupSWwGR%2B6qlfoJ5InUWHltdDoqDAcXvhm33KdJxU7Vd83nN%2Ffz2%2FxuT3csuoNiqxipGrU62l5WnfL7MUl30YhWQuNAR2jyUlRbATvn%2FF2oaIHC6Qf1SDmjxp45pMJ6985Kl9iU8%2BzgUCQX3Ux9SmLA63vUG&X-Amz-Signature=dc82e92d14d860fcc32f9c8d9f0d45fc999234f7b003ed56264ecea4d4e77e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

