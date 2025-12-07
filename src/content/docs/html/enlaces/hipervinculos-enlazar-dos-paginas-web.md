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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCV4WNEM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfWviyspXeZnp%2B9%2B61TR%2Fs5CPmeBmajoiYKsTyXqA5lgIgYtx2k1o78rm99%2FiiGUFXvRqbV5dAQBqbIe%2BhPVz0tZ4qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJznvwdVF%2BokWlYJByrcA03QWjwrzhWIK5dgW3fxtIlxn40UbMjPiLUZ9sp4cmo0tuvK5zEg5oPOzXGUHMfDPpoSvPZo9cH0m1zTho5bNkjJGxSf9es8j3qb36dnaNZHU4klhbLfuP3vM%2BnU8ISTirzXDCNApi86ZDSo12YNXl8XTQYU2B%2BbkxnKtJBDAHURAELiaeLG9pOUzR7TOQbLq8F2o73cjdzcyQCaJkFSJU7sP8ZRTp66pe%2BYdj51E%2BFoi0JWw%2FtDPODdJVoUcauLBp7WPxu9e2aVrlq5vjNFRXdAqPCrjNfrmCIvqjDmsxbIz94eqyRQpBT3y7RI4X%2BCd1zcj4p%2BMIko02Rn088zFdQ4jZUV5WZsV02aBCHSU4K7SXRI%2FcY8WBLzlyrVqy5MeRXKFeRd5NuyiFItP0xjkPH3Y9OyCJcpT8n9G1JXywiwszt9a8o9Obl1U2pTfw1T26gII5%2BoRgp1CNJrHkgE%2FSjmpV8wQGLrHDp5Khe6DOwnUc%2FUttZ%2B613N7h4hx%2BymoZZN%2BpD0E5%2BN%2BIlD50kqKTV5yLqwLcopPyrhEj9aegCwMXb3FMUgbSvs%2FvIaf9KcqP3HBN0G8hUJDcTB87e6Lm1woIa9VKpa9kfpwrhjgNRhlMv5%2BJZoXgAfJjcgMJfI18kGOqUBxuVNiZXk7HSFcsFHeKLpwVBlJMFKhkj3%2FpkQtk3ZC8hK86qnkqeZnQxwHtYpUx4wtOsozdCiWSOKlZLaEbSKyQQIunjGcSG1%2FwbQX0ZqqmygZNqcyihS3INZhvNGVkk70SLDlwT%2FitAxVzIAVUiR4lSPr4O%2FMJ%2B%2BqAQc6909AEKkVR%2F8%2BCeJMjphz8iKRiHff7fBIKwd28UTnoJ4p%2Fk35y7UC1lf&X-Amz-Signature=d5d61b4f79c03264b878df8c2b68b97d97a589370ced32cba2819a5e4069722a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

