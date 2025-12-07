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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB3ZHGML%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwp5zANTxEuW74uS1Es7Es4WqWU1Ia8KH7PdQkaXqYiQIgVPwOkAmXOS49s3Sb3oQCYL%2B8ca1ox%2F81ihb3qUTc8BAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYOnBz7ye4fON5styrcA2wj3smKExvXSgCIUOiz318JtyYc6AzATc%2BKmbZ04WufvZYGADnNkQHtj4YI18ItZCg7Ri7bi%2BjpMD14wh6ktR5jkCGxtHgyxQwueQFkwzo1YxXyR81ygQ5x7QL3GrC%2BjSGNz%2FkuoEWaLr1%2FGX2%2FwrKdHMiy7CWD2o6Nd3E6EikxKhsVEE98Ub%2FEz74lyQuRPmfLfO2q3mqGr16pFxzmwlSlzK09JPzWqryL0paaIZLjhFQ4o5PKOMEcM5RaenScEJHEQvzbdEF1MzBBT8KoVvHA15PGFvxDXnacVbEJtzOKpsmrHwyuo8FBoUGMe46LSp%2B4t62nraD2XxxyrmtvtqMHuIee4CmMRE%2BecmCcZHFOR4Th03gMwyFFHVucHpM7eaTUCcDeW7UGLXH%2BPq13duxYLiSMXk5O7P7%2BVgSNh2kD8dSVE%2FGmIoEHHf%2F2lMJ%2BexXJXbZ3NynmZIQzP4jJZoEDkVOGiXvk%2BY6%2B2fv%2Bw06b%2F8JWMJZIK%2BhNQPx6QDlLDsgrpn4khswTxxCc1hq5D%2F20Azyi4fVESovCGWBe5SfOleBHtjnlzLHqvtgwcHoXu8sQnNBFzKT42Rgvuu2m0PLCOz57cv0z724w%2FPOhAcAakKRJwp6YvqU%2FlZkwMNi11skGOqUB%2BH%2B5z96L9zCAPH7uC79RA%2FHHoqod%2Bp1aqGhDi1KSUOvpW1x0dZ6%2BhPgN2QCwhCdG%2BBw89ax18clB6k4uCiryUASzVXYURkYlV0q%2BlXsGi%2BAy1nuFiFMpu7tkEDS6jiI6a6BQWa5GJle23SkmJV1wQwrDEtfIzmzzZ75NsIKpxDSa5pOrDPR%2BwUOXjnnRkz%2BywwZfKSS9H7ai%2B10%2F7AkLJLYCPAvK&X-Amz-Signature=70e80ec62b33ddef1fef2f0d5f85b2e4a27fa89da4f51cec20666c1849c61a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

