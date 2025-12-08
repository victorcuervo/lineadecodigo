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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCDQATMQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtsp1vB276Npu%2FfAb3OaxNWF5DjkmJZArK%2F9AfoMtsJgIgRvpJ0JVsn3hvYIKJcd5%2BY47Z3fQBYNXeBtFKX3vYQB8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMU9SjyTrIKm%2BFZBzSrcA5gRvYADjF8chRHcJGwacJuf0GC%2BZ%2FLM5YYw1cCnUJgAKPu%2FUQQexjsiVb3CUIdakGh0YYXGLEwIU8%2FduwJgeTVTbxVhkJ6mBjgTIfeS6RaH7nylipt4qg%2FVFY215ZSZm6%2Bagqk6gL9rskSlT3Kyzqz8RAPOXa8uGcL7FDvd8WQo7dWBLptwVgm0lNVrdjlFd5yDAMyUedmy6ntLrP2HCOe%2BFder1G3WmxZSgiq5EBTykRIE02Sfg2YyYqaCDJu6d82geJVVqL%2FE4Uteblmid2ebQXAVGIcObbcre9U%2BW8i65o2bOLu1OO0RUeKg6CuBp%2B9Vrskdcuquye3PuXrBeL33B39UHpmJXsPwpAxnw4LZITWDRtuSG%2BhTXVQUrd80FWmUsOXuNslYA6Abl2UvVuahGeaKRG5k%2Fr5GgQpuH%2FK%2BB%2BYxTpI%2FmP4Y2JcbLFfcfBYj6HNmwbHwcdKDdefHknQvnwpHdHXlTDhbtYm365o1z65oYzYTMhZ2O1S36IjgIxe7lgClnWsm0Ft3iN2LUtrYptSYYwvXwMfjm5m5oafqRdmlNZ%2Bda5Gr%2FfT6DKT5CN6uXO6idFjSX51VkXOB6r9fVl7A3nHT2v%2BkNG%2Fy1Qg4fYCJuLbTqelCpvLJMI3t2ckGOqUBXBhlkCHdXIjSUnIiRkRslr1XHgB47PzV28WsTc82BOfudKt%2BI8FkfBofaroLGTMZoAXctfbdDkmO0%2FtHB6AhQxDi0ZHcoWb38nNNye3IyTgm%2FLjPcG%2FuKmRIMu54qlT7m2Tz4%2FwPsgU78zFsVnf0uY2V2cITbsWWFQO0bTmrUCCREk%2BK1XSME2dI4QgEJlfirpO88HTHcSf1iZc50Qa2ypV3Io1I&X-Amz-Signature=0e3674529e4ef55e3905cfbe515b0c3973625ade845deffcec0b1278d4485200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

