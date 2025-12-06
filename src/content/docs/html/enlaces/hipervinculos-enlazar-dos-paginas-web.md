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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCFPW7NF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoD7IMGBuX5%2FWzlXkKPCdDKnQxFRfGsxUkpZz%2BTc%2BAIQIhAKEp6saKhMRMuElgCF5X9CvD5eWMOPdCYRT2BpHkOjBaKv8DCHUQABoMNjM3NDIzMTgzODA1IgyOdbdXUV5F%2FHvSrDwq3ANgmL%2FvF%2BFwiSfaljNJl1tBHVmBnfC6co0Ixeol%2FhiKGVORszp%2BsKvW%2FiZzyntuqMUus9bIKqLj3ImT%2F35aej2RFyuAF2nAjX3dRGh2iMngCyT74WoDDzqcw7GjJVbwhbqYeD7%2FiLE03iZJdfz82Ra%2Foc4tA0vJkGrMYa7BScaFuyp%2FOyi4Mx2GvkfqYjzlU9CXHR9GSHSViMQA3LO66zofPFgzQCWQ8lY4wihuhxgMeFlIZSiLuZDi93Y4nhrA3gBE7Zt03QEXNkHzLiDH9ZoMj2yjrDITCWVyFJ05woKnFt8xEAIsidl9j7Kscv%2Bhr7GzZu5c%2BpxLElLUyiaMLVVLrAL8uipVB5odh%2FVBrob%2F9valkHxMHNMH9l5Q9%2FXBf1ZNI8PXgGk1C3X0hojJbL78JNuA78g2e8t4m6Dt1sZftrVB1C%2BnhAQAsfEHTsS6AakS3Z0Y3gGBBIMK7GzNHQP87q0CWAcWh4wSY4WI7%2Fm%2B91Olzm%2BprGEptAR1QFchf9mrota4cOrdJ4wyjnAk9C3LFeRoiOG4YPRfKbFvtx6pf9NogAt9JqfEoUyQVzrX4LOZ%2B6RA1nw2HCjXJkCGZY4d5ZxKspOb0yp9SG3ybc00iTsVq90v0inGYnCY%2BjDiptDJBjqkAdnxjUOWSxNV6sIeAv%2FICu0Tl64T1ZcXY04ntoQRhM%2FYn%2BPWRpqj5MwpjHVTSRB0HK3VFGqhc56%2FL10RIokSSiP4YXv5nlWWpZk1BAbRLKcAbDc2B3nHAtkrA%2F8vHP2E%2Bvl0ytT%2BzQP5RwVJjg5YhEwRMABR695M%2FQTyDBuIiyNOO8C%2Fdf%2Ff61qj%2B4YjA6EYTenfs1ihgKKaIil89QMKcPfQd3T1&X-Amz-Signature=da81499c7a230c6f4e32f4b8a117e7e5edeabfb6213de865aa2f6d43f4af3f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

