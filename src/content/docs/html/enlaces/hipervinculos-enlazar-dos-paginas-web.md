---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623D6BO4Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICRdECa0SLQuHP1KOzdNpKYQxTPGqnnuAzA8ZpXsSVWTAiEA4lxsuv2baMs%2FY0%2BJZFyRxTaicTct6LdrBQY3Xy5IbBIq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDOAh9%2B6Ld0NhEBiotyrcA7LSYjP6FLRaf24%2F34pa1lqt2OJ17t6RwO%2FsAaZEfkEKv7tnCC28HgkdPXh1Udn5tf%2BCSWgmmTYvhuyc%2B8q2wTmKeVheiwuKlg9hP5QgtbJIDprH%2FXslbJkSn08%2BybqNNpy9Zxx9cqo%2FFLk2FC7m2W9pHn%2FaCSiH%2FnfuOHZpX%2B5eYArbp57wDOqmgg72BueUFVN3T4v6V%2B4Wi64sgUDhHvBI%2B0T2WSV64ofOvp2LlWhVjMq%2BSKh6zTHfeAwVOYBZeofcv1qTC7OGACqhDgAzOZdZOnBuxobxS0wS6E0lrMNH8xqW0fpe6EBQY2%2BQt4raMkvdRWrZyzVts5biaKcnWZMsYvZ6B2DzonXSfGlONwO3h8W%2FidyctsNG5i0kRwN0BB4ETGhTQesyuDKdrniqGUR0yGgMGuXi9duI5kNUueGFMoq%2B%2F5wsixJ80S%2Fx0xq%2B8EOIh2zMAZgSb4JL3nuLKimivq1q3NPBNWQClvgvWmDtjIoV%2BU%2B3Q5j89kVnlveS4WkVG3ktY5T6nuNRN7FLlc%2BzN2NEDnhHmCXa1eB7sJj%2FvWPvXyzCP%2FqhKnRvBwVb%2Fy5%2Fir0UVpC1DajFyNDOZqtAgSxt6MoHHz8QR9I4OvXlKS7naf6OyzYPDRkBMO3IxckGOqUBAJUXh%2BxRRAhzlgARLq3zcVjV2moyVWTqW2JFZjw8FrD0%2FfOiMAQ1bQsz3RNmsVTyF38GeTzQE3pVTKZvrE1UdXGmwM9mXHTUZ2Pi5ymxDLxyDPwf39t1M7c%2FeQkRTXZ6nXizUWFz6D5%2FAvar2Ie2MjfNz2jlu2OxoYJtMlv3CbaaGL7IJ4YR9z32O7GdBisnGx4LC2Q%2BdfyphKVt3nbai0EEHZYH&X-Amz-Signature=588faa4e7fd21f684879a703b6098a8857ae0f3e9f45cad4263b6758a5528b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

