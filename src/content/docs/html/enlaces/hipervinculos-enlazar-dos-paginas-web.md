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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI4HZGE4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzrHDQRXoPH%2FS%2BCcXjWZd30ReETIdtIfq%2BsZyZaWpI3AiEAyh4cgIFNhJZUqVVR2LWA3Tq2btUPhgNgUC1zlh58pvMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ5nTs%2BwTYGUs7p7yrcAxyf2z34WVx7TfPT7jpMASbpslds68Qmc7oDGzsdrq0gdDHpoFEF%2FTnfBiW5nXy93syqyOjpkj4wZQbYcbeoFVBqwSHm1rdtE%2BJa1rrlSocyPpYb53WtyDr8HQCpdu6zX2cb5TuzSXfIVAdcU5Nq%2F8bdKpI4QdULzi2GUmXlqLT6aQ8cuZFV4xAWfdU3foOdzWWxjvfm7FTlK5aS6HIvuasz6CNQk0McyeT%2BglUwHmGLe6NucV%2BwuSuE9ftX3CCWC%2Ft3V3GSodynkd%2Feu9JTgu4ZeHCMFRlU%2F5Ja%2F7AjLdD%2ByDwya%2F8MOV00WJpfYiRuWJaapYCR60YGDBmgvO%2BasoFDrfdmgFMq1hT%2B8TYipJz2o3RKElwIQPmT6LMPOvLk1m1MvgoyEP1hLCyxQUZEVsys2y80ayG%2F8Uaja%2BOZgv%2FqdrYi1fhYWyaaNf2AWbYeCKHpMlWH%2FvMAfcGg%2BZstdzRtpu4sG2vKYrkWuVl7I1fkfV%2FRKKlCG3NFB38CNNchvpuzqOfKZAN3MZaghWHfVyQt7u24lijks%2BaOBSdA8z3kKuW08iiYRbkkDiYTObkbn922xpfA0Wv7fWkKXNWHkrYO%2F5ayiGJiGQgaLx5VvQaRjCb4PgBcPUelVoSDMIvd3MkGOqUBT9TIlZgjGGSfT5mOh9KkEr4Er78PE0StarZNpWPU%2Fe14YCNcBtGu3WmQd3fcmA1wO9dW21Q1kgPKF7wv2r%2F1o2FhjgHEBeqrDcCQJWE%2Bv3SkXEoo99taD4EpD5nQ3OpiCv%2B%2FRmr3987FwaJlqeRGoQZnZkiS5ixS2rH8PPwWdfqzrgTBV0VB2wiXVxskHo04gwyvCvu%2FugYCsGI0njeE8RLaGr7e&X-Amz-Signature=2774f4e8d778a91cd5e6a02469099b5b9ff9d1945d0201da2ee34be09ba27365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

