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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FF2BSEN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGs%2F96O9oMUs8dtfTi9gO7q5apVauWBdo%2ByWfsg%2FVrtAIgTP%2F5T7qGRtgq9gNmIP6p5kBUPOfem0K6UXQ1eGSdeLQqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBB31SBQNcBP2EWyaCrcAzKP3tLCqh29l2bCK4hO4mC2g7j8rfhYCKzmtHWnd9usTuCYlvkQJD%2FG9WfqxnWElbtJnKDJ5ZWllo3RE1Ls5iiNJFjDUA9qrB723rqOPKx2f%2FvNsgXX4h7pki9cKLhvhY4DMjV0YsKFP71YZ65KRFoBL%2BLiBkqNCjQk1ctr6ChrDHHayBLPPQkSgYRJS3qJ9HD5Qp5Y3m3q3hAvjHnYbDabT%2FA8ApHeKoD4VxB3p9b7nEbjtifGuZMpAJRjenymeaurRu5BEfBZvJ1fIhBTWUl98l14IRstmsFYA6qUjrrg%2BkibEq4eQVwl9XEwouzhAeLs5o6LXN%2B2MFztxBIgA7m4F6TJ1w%2FRfvC5BolUV5wi8fkj%2BelqtxYWWovSLVQJpGKKv4P9TsaLCLUluEs0IVMeSZpDU7ef92PAMr%2BP4mqfoB6TM3NU43cXe0xR5SNdQUgJWkoBNH9MkWsKPLpCjyBP2nIQfdPYJwfalVBOmmJIG%2F9VrjoNogKx7%2Bi6JBtfAJU5r9qLB0B0X%2F7ehYtkANpy%2Bw3mACFppk%2FwzmGn1wivRbKalU6%2F0Yk4cuDAeeAU%2FhSmsql2vgNyjmFXgG%2FpJLKJBOEP%2F0ActEFAG7gS5%2BYjVvQj4dnMJVMgcc7CMKfk28kGOqUBy0SxUx4MdlfljCiNneTIoIqgLNwIjrDexAlgIcD89cqCDMiN702MpMIl5lnyAKr6y0jiu5pDnfN91JlzL8m4huBs4tNgb%2BOxOvbGtf6j4fcWnFVs6gfNOVMAh9RVSN8iamkcKrNAklXJBHtW4Abm4pb49MFESjXLvLCaAWp3K3nI%2B99pro7gsKiTsChu55Um2Cn3CXyfU4aCiNHfbLcWBgG3rtgy&X-Amz-Signature=031b29270bfcc1b894ea6c9ea62cf9e2ffee5647c36c4f96932cb1c97b37d31d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

