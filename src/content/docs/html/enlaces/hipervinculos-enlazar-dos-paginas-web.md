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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVJSFX2O%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvghI7kJc8%2Ffyw84xYnDVxh5o5rAtaop71DAGiCy9jDAiEAs9qumotM0ySqUI%2BEwrPXlehqa04YdklyvIsdL2o7cvMqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOInwGy4ZYMNnAvroCrcA54WGS7LX%2Fy8arIJ9qWA9o9TIDy3pyhajOJ8pbx3SU7WFJZ0QaVpgOL3dYdamwRNe2HrLy9rUbt82Rl2DVV2RW3dDMX1t0zmd5QPwMGWKLmfoylMo9U0h%2FBDsZx5H%2Bp9t0IT2M7AjRTLtMZFS%2F3V2yxmhzEAHPriWw8yCZ6lIoWGup2G50TSYOVI9ubdP70Ky4myIWIiZ3CksloIAjXy9Jt0n1%2BFwISdVu%2FESv0fPqC7cT0%2BxCqfmDaUbDUoDoMj4Ax%2FMdIzd2dXo7bGf8rJS0vIH%2FjmCSMbO80GkiYdN9TVOplQ4CBc1ewCiYeOb7wYf1GBVPilycC%2B5zb%2B3Iv%2FBGKLVAajEyKDT1GBZM3mIMvNOP24w%2BrsZenJPV%2B0u4sBi%2FvFkfN%2BaFOmnqD4n%2FYJD5jdJW82I7mIUrsiR9whOJrADnv%2FBOwbNhGzERCyclLy9mZi5vY%2Bp6UbEcMRacmBBCym%2FnnANPA%2BBFeyKAoolUuLVVq0ga%2FVchuncY4SiGpuI0SzBNRKbU6GZ2zT93VkrCFbe7hqyFnP4fUCIiGiKir%2B%2B%2B%2FdRUU1a0ml%2BSHyier1FonqFFBpMXjeufB48bytwJ9ktRSltAII3qthYp%2BVuAGBu9UtSigHPnGJCzDBMOHJ3skGOqUB83YXnmV9YHsHDjVhYaHDjmsOCyg%2FDPh5KZvDKw6Io0AHczxg3GXGdZ25WdRTcfP7inc0Y4txGDM0jGS1PdaA%2FGBJfMDrnHXUrYdsoMGd8FV%2BOskHRzXRpezBEquis1TelBgL4ICwMdQ%2B8Q3yBPLZWSNP%2FSibYri7gTJ05r6%2BNyEifde1OzOVGyQj6ygI7A48oyz4suICjjFKI5wpe3%2BjYiygrhtg&X-Amz-Signature=4dda191529815ea1be74e8a274db87e327df41f200b330f08a86c489572d1935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

