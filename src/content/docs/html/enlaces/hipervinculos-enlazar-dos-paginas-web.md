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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VKXOD76%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGNqwuuZCeAutpkQIN62k2dNXdiktj0RGLQ8JqcGugeQIhAPbNNJDupmF3iL5LnwvKOrZadVMkkK8dMY%2FjILVu5LOHKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytRUVYI2O0kmSoK7cq3AM%2BmXgu%2B6Rvpj9XZ3pZjT%2B3zEXLCao%2BCM7SL9r6VeNGVFiTmR2gP1DlxCYLbrxzYzOtEJTjTcNI7q9QqL8BEcF4s60NRftFYP%2F7RLV4Nx65JEqBNhlcDg8aTlbGbXTm1zsZx%2F0i2q8NCLONAdnpaMfTuZHsO11%2BAudD4AbqdRdMhanX0AJXzs7tYsmAZ31RjAjkzPKuRcZDGEdoZ6xbNbgt4uYJym%2FWwc8dkTdq6HdaHMlaSYNeqlDFdM2KyLMyR%2F7LEAMBFyPAbvVXxh98G6xKCig8qmKG2mKS2QvNtnZymk3OqGrB%2FDT58W1diKuiGdlJyzZMf6AW68rp%2FJx1bLJ80zam6sRNawdbwt%2FGDc5Kx3Yr2TeLGYl0uCWisws7x5qiRvp1py52aSm85h80e9FZCs%2BDG%2FE02ieC2urkVVIaS50f%2Fb7RXPgzscrcRkcUDN7PIyih2QGgEc%2FvDhBZht8RQst5zls27VmVJryzCMTbwT4pKiF7ZAj1keaGdaD%2FG1L4dbxxNKWNvBja89m5FF3ItW0yj%2F3ouzAnIwrk9ZuYh%2Bl57b2gh8%2BqyqNrYoy0c7wQNHTe2iWtWLMAxNIMPMe%2FQbkZK0lLZluiLeY%2FR9p1EnfH28Ve4schyJt%2BKjCOudbJBjqkASEmHxLwrTJ%2BqaODVYdm%2FhupIYmX5XMa2t4%2BTrCIGqmN4ndw4eZnpRebVkvy9MqRF%2Bp1XJrOvI7RXucDPmW2Z6eBppTxnFbqZJ%2BjlleYcDSk7Qk21Lygq5E8p%2BHb6lNtGpuQkjcFt7LqWR7lHBo%2B6zdYh1oNKglXCnxhs6hIvvxFOYqTzT%2FLduN0dBoHGFT8B5o2tKyMTLyO5zZYx7HaCDfJegTu&X-Amz-Signature=2c604b7374fb3911c69cf08673f4e64e26fa6816d42506d43eec2f730a43e0ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

