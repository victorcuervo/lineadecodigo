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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E373HQY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr9%2BE%2Bg5bQIdCGpVNNpQbw1kL1TrO3T2XHFTYuYLtB2QIgdRyHnTAd8A2a7SYLMve6FpbU87D9LmGzS0tYs%2F2bwU8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGZi3se3ka2KAI76KSrcA%2B2tXn7pS8y46AlTn0%2FNUHp84apkuCLFqf1zx9d396XWGz6sRa8GUzJe%2FEEqD3tTYJ15OddnLCQflffSDd5VjUMCoxwHPlX0kXTHlamvJrv9d%2B09n%2Fd4NKJQ3TnmB0UkLK9jDMo6RS7U0UfXTivHiuprSVKjWs%2FTMqC8BCcpk2lh3YlRtztdmusQurDFIry40ET1gH11rZFh%2Bi3uF4WAtpdzyf0PmOjPmO%2BW1TYXNQgFX0y0%2Bq%2FS1ZU9cDSVIwx1BecwBBCVEm%2FnehKw%2B0ZwkQEIE68BAmb1rMR1M344iTrYvCbLinQu4BA1BX5hhYb%2F10imV4akfX0Xe3p9LCfMnLfXuVPvJ%2FN5LPoTewtD1S7KlBEkF3i9LDYDi%2FKib9BTzlLjZTd1SEdjfljXDMpJEPVgAfA%2FtrnpEIvBXUSohGp6eXenrEpJqIwYbOvFv8Un5%2Bdnlgw0ldSkD97eZ8wvKe8yGRMos4TUA8RbKNbsfs16oCb0mDJnFIeO1%2FSeu4aTQG4zP8zLTCfZhiTsx346b4qdOKttYdoHyjuY%2FYa2nDfkM1HAe0c%2BO0P8GNAb5Gug45x80Nc%2FIFH11aV%2FZvq2tIqztPh5t4gBxzz7oJoBQv5fiuaQ1tGc9jY22K1RMMqnzskGOqUBdv6AuW79uuO5vQs0uiZyRdT%2FnPh%2BtCPE5PjwEFscGHOFokq7Euu8wRneUa31raLcz7gHN5t04dSNre8dxTVw8%2BOVmu63bnAOne6YojtR6%2F5j7wHAP%2BbBJroXzD3YCJ48fzz5leGmNX4ie%2FqSP1aRdGYRhJ80G0BxsCDYmjKgjQCpIWIWumUBCqbNQRBXlgtiNoGD%2Bl24za4M8k6WkXJYd%2FRrOZ3D&X-Amz-Signature=42a7a23120dacca6e9dd3b6ab57229cfcd9261304bb92d41b05823f8ddc76cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

