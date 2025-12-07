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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUFW47BU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDID8y3zAkOoMmJPUbdXZJvhRS3tNZbS24Qm7sh9eCQXAIhAPMoT%2FKyvZQI6Dfoc9Poo2LGJVzwXfmzDX2skImEqNuWKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO2x1eariHhRb5hEEq3AP1ldWep2fKHd4joVtn31lKUG%2Bx09YPozqj2m%2B9DazMlxKFKBl36mU8nvutw%2F%2BBdaw2ETrJHR6JPhznfDFgfQp4Mxm2m%2F2fkHOrN%2BLZzTmzTIazUkasqopqiQIMkv3th9wbtxeP71m2h5ZqzpaDU2HWbEPpjsbKjDAFasOd7bJdyXgRhypEkMT%2F7%2FPhFYJ4bEIkGXO4%2FO68FNsg%2Fejr5rytBs6w6E1wnvp8jARPR%2BVxm3gBOLzzfNp10OoWlEv5ip7Qhv58F2fZ0OoA%2BaG5u1QBRRr7MPWjQVfFO7BLZVBgs5xOVWGzGLqfDE54%2BPramucVdPdQTqnPMGGWemva0KfheRyf86QjaMxOQpK9xmrcsi6O6%2FZx2glEBnaSg%2Fa8gzsoV2%2BdZrwKEdLTwAXuOq3Bxx0KFdA80k01m%2BDjSYNtbyLp8EdTykKszsEHtnAOgY2IZ6aF1qPm0VSvkn1u2GMnXUNkVt3nXW8cenEJYImQysh5HlNNkLl9t5fQd8%2FbGXdwr10XGUyh7ovzhJblcD3MoXISHo9h%2BJjB0GSt4l%2BNrMPtDzhArPIDy2V1DiBDUHL%2BjPktqzGatr%2FVXbmLgxy07VEVwT5SQMBF6OPs8ntgmapEIbGgghD9C91%2BBzDPvtbJBjqkARIYVXikR%2F%2BOwEL73KcdiOQwILRwUeCEsu4eUtdxF6ivdXm%2BaN%2Fi%2Bvc6EgUDKQ6AKiZJDMQ6S2%2BM8NUBnwq4bseckEbeY54tziXZfatcV99jWpLATpji%2BaY8xY3ybecQ57eVUpKzWxCb12Dpi9z63HUxtH1DDTEvr9XVKgV%2B1rkj3vFOHYP2MBuEUSHhFxw1NRUgBZe8hR7zZQCyk4nqOZ%2FDPjH3&X-Amz-Signature=d10f444198dad0e63fe202f3cb34651e2ce95c95fc0a6c78fde41fbf88bb1f79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

