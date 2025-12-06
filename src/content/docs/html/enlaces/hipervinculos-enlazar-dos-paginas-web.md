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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH64BA6O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClNzb3K0KmLi7ec4RJlKs2Q%2BlADVjLvUxBm3GpyT0tdAiEAvuEacPOiE8h2cR4tN7bALNeb7vfzdb2Ui84efv0VXt4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDxFfKvYEoViNHbLNCrcA8GUgqb3YRa%2BZMjsQ0GcHOf83IyIW21jcAcKGRnsIpiqI9%2BqMpRq5o%2BnDP5TRXdgolqmjIu0qIpTWGjIY2Do%2FOsFFHoOFNgm1wl%2BDSzBfk5WPlS2h2PtvuE8dSEdJMxxAlJMgMgfpuwL6TYD6t%2F9FZKBRNlPqguQ1hjuGt1Vg0HIaf0bY2R3DWtP%2FqzwBzClkXMFR%2Bq1Cl1887K1x1w%2BW8S7c8B%2BhQeJ3gsxiIokzkHptg%2FibhHw6Pc3LJSQmbWJhgEGuVXf01w3Fuc8rn7oivudhjsCCoWh2ealz5qqrP%2FIg52pFMVXu1ILvsanjsAWZBxxYJ35iyHq19Np1qYMv7tZ6J17gQyE%2Fz47%2FoaUtczXKgQCnSOE2wIXhtIP37yvFEoFLgMk9Ub4cdsG5yXABAMhvIJNNmPFjXUatcCnkca%2FUtrqBk6UHabLvWL%2BIO6BJHN3HzadJTPVQfI96s0ivWpDqtaobk2h6L5b4XC%2FXq5tKGyMRKRAJ3uzgSAOCJjE1XT3pcTyizv7Sv2RwJPrQ%2FPldUEgVlxm9n9fPVIrKP4kOSymvLCzN0Dqy6vYBxmjFIBevoPbChndCQrtabmGgP%2Foo913QiKIVFCOiDSa2pbwt%2BLEIr0cW7DleNdrMJLL0ckGOqUBrSbERf9G2DFtHMa8aGybarPZxl3vdqHstvTZSDluqtaIeH%2FkxAtRA%2BX22yTcs1%2BkiyODrLN%2FhUZnD2e1jWl4ODlG3ozPeQPCI%2FDqC15RtaR4mBmJYyITgygpvgjHH93R%2FdAVu0hdFxKG5HnLJb0WvftgBbKKdzEz7q7ZskZjUDbXyVjuURLvDYXsC%2FR3rDZDTYIgKG8okxdacm81pYQ%2Bnt2F5D%2Bj&X-Amz-Signature=68911a0fd656ef9d1958baa7731e42187698eac8269ff5d025ad79bcac7f8ebf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

