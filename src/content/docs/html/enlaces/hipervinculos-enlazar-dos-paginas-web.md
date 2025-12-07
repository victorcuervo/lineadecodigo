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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SACDNCXO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfR1wnEqFl5%2FI8VBvzovKdbvYi%2Fnwmw5gPGnjY8u1sBAIgWojtvsb0rwztCFeuQtRJ5Rsh7RbceOi8SNOBXN9givQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILvkrY%2BOTzayBMJuircA6pENDfprM76RKcAvMcGMoIxSwGnNzdZLnFm7Tip8s%2BYz19eowuTWdhA2EXHn5%2BjiyFjcSQdactHe7aPCeXf1h1L7nYo5ECm5ciG%2FlYd86KdhLjb2H7BmDqc4CEJ7ygUCjl86OXTt3TyAgivWC181wxvBAX5YV33b9qTfMEAlnaR7nRKsxxABFjdhmbqn1soS9L1b%2FLsHRtxuiF0y3viVtZRKOhX37qTU1JM5oG%2BnpkTJLlIsWeKN0JJvp1gXZjEhNbRZZT2W69iOjYxLiXyDFDmYnQHpH3RxAqSJDnN%2FhyB2YDwQi%2B7bOBkr3TQfAnOQCQRVinyE3aY1iWbJ5Lt8GPGMU2n3dOBa1BD7i80q4uXxWtUolUNc%2FczdawsrFygib5qfRSJ2zLaUucK7OPZ3idAnC0zJDNaVdial4tfZLH4eeyqBurLWHziVI9YTOzaSYo6eCg5HzkM%2BWAUTRWwNT%2FICwZRZPH1dmW%2BbcF7iJAaA4D%2FAu9n9CUpfQHNZ4o372kGPOI179G4CmMRR4TjLDRsGxbcn7M5WQjgsTXqqEqctA%2FG01FnSae5zgqgMqJQkNXch%2Bt8qlYEpuIP4wYezhIYl4oF%2FuYXNdSHtlX1A5QpGSkONYY5z2qrH7t3MPqZ1ckGOqUB9pdac35jzaWMcdPTAFtfM%2B%2FLLnuOR%2FmNN5Z%2F8VvJTPV9lUa35CutCuMYJYIC9I3yQ6h6DQ48HbwLN29FjfguQyhLP9630AEftGCRP3ElsJrLzoSaOJf2O9PYuZMDK0uz%2BVcMw%2F7lFDfpC6ah8bSGaKAJYP4cqOVNrvm0Ty9ZDoMjtTWsrpW2gG3%2FfH3%2B%2B2hGLlF3B5K6fPDWNJGFdfYC0AQ8beBE&X-Amz-Signature=a3b680fcd569a387d730878162cec27890d259a6cef8d6d9ae85919f182bf655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

