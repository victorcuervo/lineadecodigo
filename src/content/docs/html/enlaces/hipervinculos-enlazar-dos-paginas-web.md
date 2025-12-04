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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOPXVIDW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQD%2F0XFF2mOB6eF8hRgBdPob6WiA8aa%2BtvIfdDMSJZ2QqwIgYPh3SLLtFbQoOfMQFATuL5zOtWVvNmdUb%2BHyVJF3Rc0q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDEx9EHGGNgVy3XLGsCrcAwI%2F2QCvVMRORpCsaQUPFXRV9cWtY30iDu6786t%2BJdyHNEDIV9LZmgzDqm0qbnqIAtao7tze7T%2FGlH%2BQGQpTfVuyHTJ8m%2BE1%2BEeX5sIXA49%2FuR6QtkRBFkhARv7uldvUFxDKRb5rQvS48VQ94O7m4Js5twf3wbz7mVtRLMOglJuLlD%2BNHNB7WJ4ZMrr1t50QvbKhM2q3tuCN0fQsYOY%2Bw2PPI2K0jp%2FRDKAOzGbN5B7si2YgR6AhdaPOpWTd%2Bi2gvP4UZin8D31EBvdzC1VgK1vmai4M4GsYBiGBCc7txvmx%2Bzagdb5bNSKI2tW6wifs%2FOTelMgLLU7APHvYwNWf1rx5nQcPyfF%2FCvSZJrMrM1uFzARl36X29ZW%2BQTTc8PmNQ4jW4%2BYQaKFoKpNObHo1ypUl59TT9ufYu8gY5CkLUK8CI1HnDHxp%2FrwdozbumNS2mfyRvPtEe6ShEYHVVK9O0eTrYZU%2Fw4ePdcxjG75GqpDta0gnqtQi82dDtWQLFkaQ3Xr5tPEM%2FN0zHC9AOBE5ff4eaRK%2FOBL9DWQkBImAOfP%2BNaS5SC3LQ4EvLIW68QOxH2dnRnKHlWy1JHwJ2jin5A9xWxSjGjlI%2BSxOrojV4PhSPKEM%2FJNljKVLMlMHMNjzw8kGOqUBR3Fc4Etm%2BDGzTcNMNqy0J%2F0iN%2Fiar%2B17naLmXJQPt8fGNmXV%2B5gdrF9%2Bo2oVWd4oeYGwCYxNx6mhm6lNbS2YG1P9uxBBDF%2FkBuwxaPlFQ7Hgp%2B6a%2BMYtcr2Tac2nDscHaHULVPFuwsf0dLpszaGgaxOaLi4OYKLwKgl5VbbBTNIfbEqgTNX8EcANffdzgRxabaUuKo%2BU9PPh3%2FI7X5kjqFMiu70d&X-Amz-Signature=a25e26accbf87c4b33b96f6c51517704efde93f95d99626672c2fa9b90ebcae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

