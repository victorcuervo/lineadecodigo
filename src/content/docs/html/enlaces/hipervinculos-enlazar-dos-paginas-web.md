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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OKAJVEC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsmIW1eoz5ZCUtZY3CXv8lQPM%2BudtPbi%2B6mX%2FehjVDywIhAPdO3HHrQjBudXp5%2Bbu4PA0zzxQ61iUagjplzlmr50SoKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO6DUcrLgcomhPO98q3AMK5AGaHfWsMri1BmiEYyDBjPuam%2BTI%2BOgzvu%2Bmb2aDWwfl1IaRhmVhgSE5T6H98R86cdaPUVkYlMYswmCoWIwnciAVRiDrO5zxDammlZFku9Er0V73kXIA61U3PLJkLHbBIb1sr86OHcbw3MblsszEPPsqZdInKNw5Xui6wXg8Zw%2BQdelIzPepnrqH0Pz7R1o4G4AnGOOT0m6doxP%2BQSV7niWpMhRnydOGmNhyHsf04BFZtevY6fCBUYkm6nkhRmbdAnk10tQFijh8K1EjeMd2TEdyP070CzKW0%2FuIuyJIybaGnrJEkf6MbkWuJEMr%2BEZXLdXKZiVPFMV7KZbFl3q5a2Am6U7bpGbfi0CLqZIMdS5zmm5ucwwNfZAMWqHneMbiZaDAYrD7j0jJkOB51u%2BhqUq50iCxIMvgleLvEfVg9q%2FZ7Wzxp3fXwyMsYFs7I9pZmpps7xeTuO8Pp1bRK2TFYMKNQEylLfebaasMQkPhvFiLlfzmm6%2BNeF4vY0%2Bg7JQTcTQXk0B8JMo2AYVXgenGtF3EnXLG9Rpwg%2FtH9Ikx2%2BVDYyZDxXsQ%2F3pCr8sxIaXqNPEa8k0ePf%2ByYHkA8jOlkIXa18WEhFULvEMkn%2F%2BfKl8AwYZzVySF5FY3KDCajt7JBjqkAaMpBsLizei7MiQmEMDf6VAAwapAlFt2L9sPQ7BARSn%2FX1d1E610owmPb%2FF2o8Y6Xyy3vOMnX0O%2BXbISGx%2FjhVWEM2WHlK7CwoxE1IOGDEIfKc6K6tVsDtz%2BFlgopOaog4%2B9WXqFCq6g9dY5pQs8D2g5WaZrKy20DsWKvlDOIdLSt%2FrYrT35i%2B6ni%2BGrEPNVsiDXtWkCnYUXxdjQyDIOGtp7NKAN&X-Amz-Signature=f95992272f72e6df75f58d6321e733a17500b0a4ec01afdb0678132ccdb4686a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

