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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q6XEZFW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9GXZIL4OcFTNrJb97cjWZCauDH62%2F14pA5yc33euriAiBUq%2FNv%2BUXsVwZXgNpyVM3t5JpkmPNd4l%2FKv1%2BI1BQCuSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDUUpZZlBBrUf3aulKtwDCN%2B7Az9DBRdS5bvHxTReXjCZGWW2SW8jViLrjmg9p%2FL3jh8bdLNoilEYw9Ud1h%2B%2BmOW4t%2BhizYyrXLLP2Yf5eHXxCA1i6KLFd7S4GfDnV8mr%2FleWUyzCHIvaXHMcsL6VQiKPm%2BHdFPSXhAJAyfE5wHZWspHUNPmqGb4z9ygOuLgVBinPkmZLHZ0Y1LGCd6Llra1%2Fg%2BjKWuLfpoTlGkjLdVtGS58poy5s9545wlAoqw9inWkAwsH6D4mOb4GZNzdoKAEWs6Hp8bHhtRCOX%2FIrcd3XXGerw7k%2FFLd6cJGTgmS0O%2BwGlmgkGblJ7pWxoIcQsdEdRQx%2FwNa4G6EgEylxon5hWCPHBp3f4f5eiYgWY8o%2BJzbebppYQv4DeM2X4cUFAmm13xtebtT%2FYWSSDv5W%2BfY612X46Go9i%2FuTUYTuBxLJNh5sFnvmto0qGg5FXMEKGQu2CI15N4Q9H%2FXskbPeH%2F17k9j8pCTDwm9gVA6cZg1tEozr6EbESev%2BCKFph2cldpl8wJrgVJ1rvOU9Fd0GIPu91QhQUE9sWZ6BswBJWkwffSK3kb3tSI2JTGn%2F%2BCmoSuootX6dMW3%2FtwjE1dx5k7m6Qx57zPOu1rgqgAG%2BHtwjyS6BgyBHGAod38ow1v3SyQY6pgE97NuXHuaxD9eY%2FYCNt1mUCeo0gtLT3hmR2zgcuHRZBhlY0yx%2FONn%2FAuE6LIvS1UR8VnIjG6h9djnM4tfVOZkJIe1%2F2B%2FddxgQEqwplSl3NLRgdeiTNBcGe0aAXAQeTeylNP%2ByC9xYSG4HK0571p4K4uHogYIlgMg2778IquaQYohb09JW25vFIAFF1k7P48qCgKCoQPiHTwHzr77lFrXMe4t8cM3a&X-Amz-Signature=7924886af662a087f49a47c29ff9bbb85d629851f6a24d01480d8af9c03ac73d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

