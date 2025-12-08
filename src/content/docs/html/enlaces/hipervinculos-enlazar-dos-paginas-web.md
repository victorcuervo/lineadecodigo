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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXD6QKUB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0L2QDdeYJ3gGmOZvvb2Evax7ZL75z3atqbC12t2RYCAiAlRYgTG8RZ1ZnPhZsnoUkbDxNfLLCej7oT6Qp90dVkcSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcKDQo%2Fr7Co%2BSQvP6KtwD6MMV%2B7ZmbVyUGaKIAhOEjURoH51c9dGpEZiDhcffY2oMUTWD3y2ZoCY5ZCoFe9ou0EMrm2bU3q%2Fv68%2FRwWsyRaX%2FA5qs8DemrPopQh7HebYHrNTH%2FxHvDtCVatrxz2kN285KwEYRUfYXeR6PHC1c7P0KZTqQ3ETPo5bftnHijcNOoOH%2BJuZuY%2BvCk6FBQEnzDVsWMeBrKFlEVeZABWqNHcBvwNsDpNnLNkafzeDHGR%2BLN6r1hBdUhnpOItzg9mNq9HOPKlF3ZnqoSRJld0DJ8z4WH6TPp6llXbS12NtxQS3Jlvi3Cf6%2FJjk8m3sbApTpmQX%2B%2BdzAywcfMx2ftnAfMfRRr5ogETwj2OsyKGAyM8kBZHU7hfouYiaZOWVSqckZ%2BT0mD3seGH8Dlc5nsDsml75StS1iAZWwo6o%2Fo74qH4Ll4pyj7%2Bku8DBF3SdwoDJSbicCuWQTMfYzVd0NQaRAEcHaa%2BTWSjc5q0u6AOH%2FEq%2B9FpEctWByNxwfz3JykYXP8LwORk6HieMuajtmLSVzRsNehYxeQnoHUZvNAgN5tlQPyeAiIBqfrrt8N2BaD7yFw7QJEWEy0%2BzeG9onc3MVVKMuuIsCeb3d7IxZo0x4s5VPrZNzN79y4TFCiY8wqO3ZyQY6pgH%2Bkt6H8jXXR2vQz9btlNxgDUF8T3tau%2F6gmHNYUGUnHUd%2Flgc4%2BWktwosFGt%2B4OfHW7s8yhh7xDsfeTRPk2xRJpkVRrNzoMoYAO%2FOS7oiBfJqKyI33Sf%2FRQH5cpoXTHpMXJXWF85NokrZhfvhqiAmm0C45xD55HK5fdcUzzhqtE95GGBk9PxkqHVVs0nNweZrWvV7QQFVAcrkpIY51vRKI4CSAemKS&X-Amz-Signature=4324a8aa202348da7b6760feff2a32cedf16e1199edc558cd48056558ad93ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

