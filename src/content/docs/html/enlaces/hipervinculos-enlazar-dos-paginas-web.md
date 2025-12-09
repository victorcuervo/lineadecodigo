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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH2KEUBV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCguDvD4PNa2YPhwYhrNh132F50GQtan1FKv2jd4v8QcgIhAJve90l2%2FqpGYoj0LBcHCf%2FXeNMlt%2Fj0SIgccGPlWDlMKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlR1%2BR5gzlZtFj9Hgq3APs6HIfcFf8TxuYXY9SRE1ZoYNQT3JhwbYaqokj93Fbwujh2QAOJZw6l8aQx6DB1FGThxcrffnR2uzCAco2D6IRfgW0v6Vk3RIVTjARiH%2Ftvk5n1KRfHgWorF8LmvrcjkGhfVA9Ek8id1%2FT5ZQyZ6H%2BLSR7CXbQSINp6WDl5E4iXxt1TplzjIeBgnJ1QGYcED%2FFc4a8uw1sx07pz7g7Ap8yd4HxB0U5zkWhS9tGPWE6Rz91kS42uff9TRVObjTFII1h%2BjXeRtOHe16FnJfpiywqJn9m5KDSIBF%2FVCLfdFHKYklWFqRwqcMG0HLZIm9i4m2homTjp5jOQuwdUP55U4I9WkkFRolPWdFu6SORp28jvhj2cC14AZkgCzxseQx3BHSDEaj4%2FAL6EHL3Q1GYb2rppjC%2BcDdRsFNzCiC%2FbK20jC7pP138W%2F1ArRKC0WlDoCUlsMtPSyFv3fQI8OCv%2FLwRRsOb7fck45tf8kLipVwIwDvOOAiH%2Bsxszef6rfDklnrEFCuCH5HfM%2BQI%2BcxgshkMdGBUOjiWIeTBuI5fUX0b702K23xcWqAnK8GLHOLEVnBOrVFN4nxVNFrFwU2kPRwe81xKi%2B3NV5PmrGtQl5y3KmrYMJyeRzj64TeQ4zCRrt7JBjqkAV6AK6M%2FTiOj795HuGo0MhE2Z%2BVixsepGD%2B7doFYZxw5IbvCeZbU5TpQzYatdDoYrHS2NzYPbtmTa7ZYWTiuMPLEH2NX%2BAkVrKjvKuwOIvdOMSl6ykhSLkMbKQ9jOrpXKZZN%2FXNJorUeEHkG9XQ4iBnFpE%2FD32N7LfVYX9x5FMrsWZa4%2B2TsrWtregRo1UFKciqeSy%2BvqjazFB0mgeWn2Ya8X00i&X-Amz-Signature=cacf979de4354f22e70643f407a6becfd12978a06248d5a5c22ea5dad665436d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

