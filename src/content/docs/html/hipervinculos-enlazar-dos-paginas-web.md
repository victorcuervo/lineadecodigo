---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634YSCVSM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDZ5Kg%2BnCv%2BOOfrS1OMlNzvIfsgoE4wpSh57yTTBrfghgIgORct3w%2B4oLOkuopE8lXkqnqwNOa6iveoDHWU2ZykPL8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDI9aDRSkG20mHjYkSyrcA2%2FogJAcYJhuftWlXePJXDVvg2Ax8dC8ZMXaaonyDMu365QLKHkG9o%2F8teyCxaBLdhnX6knFrmPUt4aCRbdGAlxuS8d%2FOfeYkl89cMXGxtn%2Bl%2F5dpV6WUd5%2FAnzcaVL7CIIDXsqwtQzWiDte9y1AvMbiqjFHISoB0aZHfeVBlAOTo4kG%2BDQ7i%2Bk4692c4BwVboQP8ci1A7Y2bH8VXPJBxiGpUEss%2FJEHL16HVinv0dUb%2BBkGln8MniFpmE24TbL%2FoveGseB4V4xsBHHpY7Yl4DyJv5btAhVmcIRHijWPHMs%2FOEX%2F830ejzmVy2EdWWT9co6mjBKf%2B4HzTUUgSwjq8jARMm8Ja1r0gyqc1M17tLL221ntsGGCCEoQ9UWQDXgHiBbuq5shfyqUw4jxuMlr4pAb5tr%2BobNmn62IyxVj6J46bT2tMlofgSWih%2FFN2MUPp0m4J2WFAw4dEgiRuPGeb8wtOFg%2BxMw%2FYdHo9NxI1eBufByCBAISrs2z5iOjRiNGmu%2FaP9LwdbrD4LBNpxBDDDctk%2BVLL8N%2Fu4%2FTj0NrnSih5H5ymsrSewLaBWf9ZwqJz9Cb1ILuBmZIIaoRW3EIP0CMcKwkfOsMUKZKR2i7hDJgdnK1lUeYSMGwmzryMKv4wskGOqUBT3i4%2BgbMecgUBp29o0dtRRCGUcGk%2BH3hQnM3nF4kj3dwO2teKY0Uhu%2F%2F9d0EhYrJlwByA3cTjc8RjcCltkXnPOSnD5meGVx0WHGqlQaKPnpdszqCS2cUZR2TecWBNQ4xL0dhAqBT8MQyXkULufgfzspFdJMGxngCuXUjuL9nzFcULmrRw7uzDrIe%2BlAN8iHUDKyYXWryuVreplEgTaPZCrf1Do2p&X-Amz-Signature=2c35daa80d64b797ad05e1c75bdaec98a52359792977ce23460a8ef2d8c9616e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

