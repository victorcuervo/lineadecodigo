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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJIVFJR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnByypiYTM9Thhg6VnB8%2BgYR0Fcxsgcts%2Br4pFwz6SyAiEAwi5D4zsZ0HWOMI8ftafOI7gRjrlb0r5I0xZbrC4SV6QqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzC8%2BuaDxoVqMXHuyrcA19AZea9YMOKHPXghaIC3cvdJYEkl%2FHNFNq0kAXeh3EYyGEyoU%2FQaTLAXlaYahw61gtbPh5VGtPo0fD09Vo1R4ANOgs7pWI0k5x5nNjo5gmwHGHwVg%2Fk7VpgbrWSnzsI8aOBgLSJLfwQYZjJkOnYL%2FSRhx%2FfT%2BY2AZYRmFE5ZT8TFkvBuToFqH1iDUWa6xE5qhAr2C1QXOn7fgQ1MR42mClE09b5%2B0v1yD2OzgOXWm4vSlAt14E7JVUg6lii6DaapPDIUWsNGWCcnh5ruxhsROIQR7ouedUUszZhbXhv6gl9WRZ6HJcmn%2BFZQMNIZLEfY%2BlwR3YWMOdBjU2LboMgC5TD%2BYyr9D%2F4m%2Fu8KwdbTPC9ePpwFcrbVboX0Y%2Fj%2Fkj29JdoznPn43lLlNfTtMx11dWelpTcGNVSqnHDEkac8ZDVn9MM22Vjmhw9fMxz8ePm9tAOZMyHSn6dD5EoX21Se4%2FidobKMpSSzLb%2Fe9oZfNe%2FP0VvMtcGXz8sBO7%2F2rnCVdEuEHGFJcVyl1%2FLfZr%2BJxi%2FRTFUyuxCDkYNstJF4fdFI3oeX1VTfgSpID7tHi24OEJ13kPkrLIToFGIxlmSqr0PyzfT9ASbgqcGs%2FtJTp0DDf9YYlbmQ0OL5fN4MNah2MkGOqUBx7bfA67wVOpFpaiHgRkFb8HUvwelMvvRo%2Ben60FuSWDHZ9g337NiIV%2BH9CY%2FdsYwNoa7LWKvRQvm%2FCwXmKmItl28q0VKXpNPRORQnVmC5CVRP1SgXwzsp62QRm6c4n2nBoMJm6orJAOaIChf81EzaKuF9HS%2BVL%2B2Gt%2FFwE9zPoe6576MlBSQrWxRMik5lz4ms7%2FWDROI%2F4O394Z12FvH1ogpp1Pk&X-Amz-Signature=5dc57cf10188bcfbea0fcaa626b1adc2df53e51742d2c86ff4de8ad409be1688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

