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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474OMGSE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvItgugyPOJAbyYzrm%2Fb%2F%2BR4P4598uHEjCt42tC6%2FhKAiBSm83Nir98lQWMpOXrEsktfZ5I18TJeZawxhQ8FGRzPyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMEdVHm0Ir9Jq7yaDUKtwDc846vFw9t0bQ0qjgsDeyEMjPFF1f8QDracBWag0tyXkMQy2JRrlz01SsYUvngeP%2Bh%2F1jSAomd9St37sPA%2BCpJ1HGHVJOgTgdTGjNtgWOyLFGvTuDMX2SKK5fIouzMYffUA365OsfRDCcA7Ckus%2BRrvMoxF0wglZtDvK1YjnZR9JL9mHyGcV0vjXEakKDpm72Kh%2Fyyt4pt0h1swl81oZwY3jdRyCqIwGGqrX2Kf4zeruT1CPEg1qpi9k9rLrKO1c7sYFrM6V5Le%2B0jiSCwpGj%2Fi91dlmglgnMZQtgqp3k50bMZj0vwUMIB4rVdNqSZzEFnYFrvyt7okK4KDqAU%2BJASxPdKeHa7hUSf%2Bpd6nIjWsvjLW4wETFReqyrVbfKIjfpwALH%2FxJZABcgRCdpSPOfz9iS0K3K0zEYgzzad%2BHA6UUAe2Ya5BKBl5m91vPG%2BF6NK7wjkpbgUiSp2XpLX54pQ1C0s%2BDAcbM0MDglMq4mc2BcQSRKb6Fr5MQIGPaoPtI6i5xrY%2Bptfv8Q2cdz%2Br2GjdyqD6rdSwTSH7B%2FZAWMEo%2B%2FGvg48BY54l5TocgKBjPMbmrPFdkJUfklBXCr2WmfbW%2BFCXUngVhRpiS9anosoK2mymVOuBksnLZ3htkw6qjKyQY6pgHFUk7EwlIgHYvTNQylYvdImyvmmvGkiAv%2BQbUB2cPXi62htu%2B9zMIZo2g0q3QeQix%2B09VzVHOm1rOtZWrh8JgR91RgKjJQZmgPzgiB%2BS9M6dD0JzYGMfe%2BqpmZpXar7%2FCX%2FlbJgmjTCixMNgWDoR3TjM36TSPS63MJehcSa8Y%2FTC7%2FXOqvEy2mnOmIE3xRgy0KyO90HI3ehIuqOOPATE2sTgDK%2BJPf&X-Amz-Signature=f3362deb3cad26434aa067c7d758dde5e8b12b0a96c9ca2513cbe14c09e99857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

