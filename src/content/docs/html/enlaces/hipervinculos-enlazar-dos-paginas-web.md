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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W7FEUTL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXfh%2BcRYVPafn6XfUIXlVmJOB4h6Fh1Ik0X34gqemElAiAXSITOmiEidjn2Pn7RlADVdtlWAO5RV%2F6hqW71YIql8iqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9HsnhpCJS%2FMd4If0KtwDPfnL8h2Ky8qf1S2LIKoX59K11w9LxKJaTLlgLJOAc0CtSEdJBnaNVAQ%2FdQf1DMTv9QCuLxWbEXxahvoK5o8XS5qhr4NP05bZvCWCsEgqKM2M%2B%2FcTCtoCSjEz4iAoDf4XJyUITpRJBUmc4NOPJEP69OTaRxfJ%2F0qu4JttSsRc2%2BotA9%2BBvLhdp7otBqtbgAyN8M%2FiO5Dp%2FgwZtkzPwz38%2BCLdaao2bjPNxMiMqojgF0uaclws0TEm%2Bsk2lYaZenMnsK1UVe2dwHIwajYC4ZJMDnQiCSAHYQgQGDTALVVh6dNfJUn3x0MRqcMQ8YqF3gueyYFB6RFG6zw3EYD4X4AC3PdTVFHVrXFkcsCNtomRk8V5CEDwgeXyif97AF7NdSln%2Bag781o1%2FEIvXGwMW1h5vmQMmPs1r0VIEgm7sgEnT2ZBvyjJitp3Bov3VrAGAWt6F3lxEXDWddssHoMUqOFF9sYUeB59yag6By5u1fZcPDbKgjbGCrD84lIaQnVVnRpmJf2xEZ%2FthYxN1TaLuc%2B5nJoC5HHB8TyDwCr4bLsWBdNBDInRvREbuG8DPkdTBhGqPs68WFPkVDDW%2FfFLOKlXJ%2FAXYtAB5widpY9mHO1kNIgxPHfpNqLhgiwKaL0wrbrWyQY6pgFRMiHu5LokVlIN7USwaXpfzsKh53kdlU0vRZU8%2FfW%2Bt%2F0zJRVfqFr22ebJFb1ufWNSqunH9I1TTwo095oea4qZd9UN0vQg4%2BWx%2F%2BK4IlGQTHy5JC%2BikGNwqbaPooF9lp0ZPP7gXn8G2mRWYM4tMcp41Os5W85rgOyrXwf7fjei6M7OHo%2FgUHm5tZWgL5CUxdN0ov0qVZpQVmdM1e5sQtC3lTd3haBb&X-Amz-Signature=e0b898b112be8fecc11ae1956ca21afd1325a5e91478b7802bca55ba7b15531b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

