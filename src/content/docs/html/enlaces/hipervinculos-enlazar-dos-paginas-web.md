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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPPXCHVO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T221351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxb1pamhxhcAv83rwrr2QCugm%2BaX7x0NBTfUTuBMiWywIhANs93Rhf5gwefBO4674CaGUuIr1An3MKcm9ei32MjirVKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDTeJyF2j8kDLWrYQq3AOyuSwfzUb3ljbtARGnVLOp2LAdut8h6Izu4L1V8rrezX9V4FW82%2FNGoszTyf4nOhmklf9z2yxzXjJgEC3y04%2BTwd05SB7uhiEQDcfO3VBbudp3b1kq0TVtM8KlXiP9e4yYlczejvnVL3zDTAn01SBS8BjdNLvTgGWbNwSgtzWlCVFhKyAunGSPZpVRid0XsEXJazEei14Qp8ZlTg4DUnxvf7ntcFbbp3GVNErkDTCP0d2vbK8FfXgi4cS98TwR9Gr4dLN7dFGK8T%2BPIwsH3cSV1mROzXEhDmynWXHb56p9sCEeqCTGA%2BE2ICbeQ0mRO3g0oL3i%2F0C%2FdZRpW%2B4gm4to4WQtlulZWM9H7L4tgVxlLJ26XrSV3ezE%2Fc1IMyR%2BkDaLBdqQHj7LwLgIVRizyl%2FSAaLnNTtx9Ldikl%2FGSRSubUCbLu66nP0LEOET%2F3yChw2r%2FcElzS49zranu%2BDpOT2Db6OhDIhbazLjgyLkWDwgVjKi91K6E9a6EWdNN5AIm12vwntKM78YK4C7CAGFnT8hPaSjv2Qrb%2BrMTft2GJhCSXEcx2AVFNL8pmOKmIRHBObH2hQABUKG5eeV5j%2FFDLq%2FD%2FjHGoNDmbydCpLTBM%2FF5yhhK8PmGuPZONPuvjDpnuLJBjqkAZVUBbzoVhAioYy%2BHo5fEosdb8NNezo2hpNHWdP62T7jvZcmv921lnaYegu8zZ2xUNEWkU3dRY7pZ%2FfSTa1FvpeXELU71EW2LGTkjTRyXeu1fg2n1mVGSit7kfScTgU6%2FuO3EUt01nFMVOTWJWOMjnNqUEJl8juTE62ktSDzO3T63%2FthxY%2Be7emP9YzyvaxXEhpFwjQyTf7i6WZNZrUORkhVRWrg&X-Amz-Signature=8e016ea0320c9d7ef15f842bd13c95a770dd2b7f934f44d20e0061a10223c9ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

