---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4IDCPUE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T200431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAUhgzG7W%2Bomst%2FmMdg0Y8mT%2B%2Fqj1oR1s7%2F7aWw5YgbgIgdI2YDnLW5c%2F0BQPsHMhsRrGVJ%2Btwe8QSz4gaRQnV22sqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FJdMHAH%2FUnL84jSSrcA%2Fz5uRI2JoBJhEPhkfDCQO7cybUjywkIFoIyA%2BLwGAChK8MOeL34HeHawrw9F3BRXtq9fNh3kuDMwhUfx1uLePEkadZ3lFjs7cH5kknfMLMc5lzmyzMzxOyER2n2%2B8fDw7fAgM4x99XRC37tZohsAtodyJuSg2XcTPXE4T2l7LEPUP0TVzENs0%2BE2rs%2BbiRXNo2M5KN0RqRdrD3FrPTA%2FHfaiz2cxSw2Hf5Z%2Fza6YTFtpMxd%2BrygkqTp7zoYbd1Wp85W%2F%2F%2BccuXNTNGaY8bXLx%2FrA51sNlsCjiT2Nz69HJKM7VcI8mnkvCcDeRT%2BWdRiKY2tKQfh52f8VrA2r48l8F4Gy5ctJl7xBrAS%2FUz4QAun8GiF4WlZ04xOSJQKecXzbqpH3ed9%2BLA9zrrMszKl0O7gzjY1ZqHVOsbR%2FsmxqX7cGWk7wbgo244rN9UHcHrn%2FbhjcQzXDzAn9zcfbvfKccSxekCMIwv6JFiHIkzUfBW3PH5KiU%2FpHqkAlJQaULRMF%2FBH2Hnf2U8Vc%2FT86NNt3FACrqVs3KM5tjWmBl17rov2r5BstRfH2HtneboWGerc3KcDp6VLYe%2BE7ibdrdhNxZX1WNpVcfO0arRMy%2B8yeqlPAVIJp5c%2F1QpuJGAeMOf%2B4ckGOqUBYGTjrTDvzVt2ywM3K0As90RAJOg6JZn729pK6WxrV5kx%2BdnP%2BTV9TeHVFPSloj%2BS2NMIO25wf7Vc1b4jzNmLbCF7bBChzqbgSHAK7SonoBZYCNtT%2F5i%2FBJDa4hdSjAAX8U1EJ6jE7%2Bcx0pKwxKlA0GpPL30PP35P20yRMRFM%2BC5DZRTRYC0Smg%2F0xqoC5PHW1Q%2FKAE0VxgvENaTGQ%2Fi71m9LSWbm&X-Amz-Signature=f23138f8193532f89cf3636d539d9bdba5f40d1f0db15239861c19585f9c9e5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

