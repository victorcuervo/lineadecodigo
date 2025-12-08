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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV3CHD3A%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICX2COCxCom8TaEJBsFWD9ce1JyAn1IC%2F6b63nuj5yIBAiAi2pEEHnjHMCJ5gQ5tVLOEazHDA%2BUnIAm3P8U1yDHepiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1zMPY2lFu15%2B4o%2F6KtwD4kCMlmYb4mrl%2FZlr1ad2ZiR4LGQLcDRKa4KXemWHOtMjuh9cBF8kYJyDvLVqIFUWhDSfmXvPaO6pYj6Tn9dgaPJqvTCmCvNQwSHMVwOpWg6GsUkvXxYfzhdzZSJ5Mz0aVsZIPy4DK3LcceVvcPcWABSqhvfNllU7bJeLGxUlcZJKj21JMV6D3mW%2Fg4JcjKNqE%2B0pcp4FjvLE7kPrI5M0kZZVFVVd6Eikg5K8d25oC7w8pyuIAjmTigMCfaQAEhopqmDWs5EOJKS7E2MqjQQ9m%2FoXm%2BvNQdq%2F4dOfTFkG3zvQx%2BClU0dI9YmaGu0pfwE7NYzNgoblm0%2BMlf39QxyAYFlMlCUxhl0%2B371xRAFYwTHq1jwKQy%2FXDXR9jCDlzB%2BlkI%2BIAGQwyNjhiLgJcO9L2JOe6c6gWaTUohhzX7nw8ZpqGxLRo7uqFSE5At8VC22xlp%2FELzb44nkhE4YXK0Ny6CnQvPg5BLWT2l28Hm%2Fe4LShAKz1Wgu4MS5C%2BbQOdCHC89qOnn7DuDwFpLO%2FAHEkDtnbpHRGQH0Hbh7%2BM5cqUFU%2BUc6wN37pdLUDzsGvRykElKCtqawCh2VRleXtAbRTayyheBitGB5Y2N87PLrBjCqSQpvEg96rgzI8T98w7tDYyQY6pgGFB2MC3FtKt7i03%2BJ0BYVRd%2F%2BPA4neQE21gGAseRAJpm03TGLT8XVXQaNpaWit6wDEvrZIUSj4RUuufnpK5A%2BoeQcrfBvYjX2G6P%2FgbqqGuwCVDEl2ZnjSmwe65q7wmmS%2F3ILZZnMcLoN0KCf5%2Be%2Bm%2B%2BX3LUIgT8lUt5XggHNu8%2BNTISFkiI7%2FDehZ0oy4e9sE5LHpYgrcRAVgyEZfJLma%2BeKbVEgR&X-Amz-Signature=e30f7229a3b80d53e5686599dc092e2d02267f928665f75202742863d2d25636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

