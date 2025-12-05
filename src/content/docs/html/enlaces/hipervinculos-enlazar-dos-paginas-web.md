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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUDOFEM7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T124557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCATOMVbblWOSrc6LIU1i8QeytkD2XCNwtj%2FBzej0NZwIgCJ%2F81vr5i4%2FxP8Hv056b2Asso91ZA%2BfGkJsxzlzukEgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIxj6rRtBJKNYQ6wuSrcA387EQXQo3Oyscrb%2BHXhHp6fBrJ%2BenalD%2B%2BmvGBq6bePXOubzG64pDXG5txGsx74Q2kELn19K4Lpzn0T2h9a6LJaCFCr56MNSsjhsjSZQfcQcIotuMIs4zGh44k9ITpzXvnxQndWcSUrqWreg7dkKg1h1wXI91W4RSvycI84U0ttrh8zF%2BkPRpzdojz0p00RGgpE9DbguPoamN22I7MFZx9LbYrchPSH5FTUIzgBmB3dDA8%2FhAx2mfJjBdPPk7BZaqQWg%2FuKAK926oI%2BLHwlDYdblmbrAKyASnBIlZAOvnWs7XOnDG%2BOp5DWWkoDwTRTpd6laKv5w80%2FWJ4hlouGB7zvge%2Buk%2B1VyZGuCVzSi41hWXptgS3Xfu9TQ7zp3S717L%2F1PE5feG7H8OeAmodjILq4SLABDKshhUpwUzOfVCm%2FDaG0uCIzZFQbh4cZoE92m6BSMASTN%2BzYBzBT3FRuEx2al3W9waAyQo6xMWGDiSIl2%2F4HcWNzRZxVRjz%2BUI3TeXklryrWcpP6HuE%2FUku6b%2BnzLH4YLibQNpag76ywBZSfvgtBDW4onWOltpnWK2oBjrIqtdsogSQZILvpvqxD6FAn3L4JV6mgKIJSdTiMCA9WQE37tX7wBH5zR%2BfpMK3UyskGOqUBSgRO9Rc3nrLEYriOskrs93Xjpsd9iLHEZqQYzzrh2sQ8w%2BTxwBUMtLFVZOiwam9XpRnFgx%2F75gZqnrnL6Ug4%2BUpqgR8OtLNQO6xpk91XbicPhMGyJ8l0frpCHjZdp8dVxN9oPy3sd6I0EBBTlnLPmNLJjWMlrC3PBs3tBP749URImAARqJF5k%2FUKGDOOkjdq6OEo7j7xUORWPFooidilrbHzN4yA&X-Amz-Signature=ac8505c43cdaf3d5bbb694c12fa79e12d296e717cae9871a926e8b09ec011e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

