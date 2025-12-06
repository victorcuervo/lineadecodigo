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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMGEMUEM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClIG9FIVBclkUoZgMruBEQ%2FyFLkWwIOVP%2ByLyknBRVbQIhANvigBNSIyxI%2By5p%2B%2FjQiEWT33x1zT5t4XXjbLoey8fmKv8DCHoQABoMNjM3NDIzMTgzODA1Igyy6J%2B2%2FzKwfqAnSiAq3ANG82WpoGTdIE%2BFAygeaNrlIpdjzdAz6gk3kL96MKOnEjrBOjYzHb2%2BjZHiiJCh2cwIlm0g3SNEAWC1hk43q8KPsneD2bUJ%2BX6FiV4VtHcI3LiX2slr%2FdZW11m%2ByWhQwmuETz1sbj9hJHlhdUv4lc5s%2B5ieWVxdbFxTmSOQ7ywd7cXs4g1VUvXDll6y%2BkQhjcFNx245ri0kbEjdvNb4mX0L32nj5%2BuSuz7UiL%2F1EuRWXEqYLyOs9i%2Fw9EzIXp0cAulFCEK5czNo4sbLcLADlL%2BrevMLSXw%2BoqanxtYgqNIJgaYrh2FbkJJif049qY5xlfAOO%2Bzz9b0mzMrnBmshoWXkXJfxHiSaCA74r0%2Bivb%2Fg8BuZkcqpDSxgx%2BlfiB8bWlnd7Fc2SWiDC8kpvIxNX9uh5kPNA4%2B7TGYDHqS8bDzorcS8yY8KsqSeGzMqrXocgMZ%2FKxzKMGEtE3euP0hShNWnvBlDsRHklrsMhM4l%2FxgtIkK4IMdNK%2FybtmD1Pg%2FoRVCCshHNNHLo%2FlVXxGAtc%2FkU%2FnloilXSfyXcZxFNL6g2wVbD2UdvwWApIE3Rzn3SNd7uFesoacOnHyayYi67ksCc2P57fDGn3Osfvk1sxx2aGi1gQ4Ms3MQyqj7ubDDVy9HJBjqkAY3cGYpe%2BwH%2F4QWd4yYHPOpeDwdRriMDnmmK07loRTGDgIIDmz5APZC%2BP3eWH%2BCg7mgXQOcxEdn7plO5K3VE6bYrSZqtp71lxDUXqqwL53ieCs0YKs8dGaa4l9qlwSa0%2FE%2FWvuu8qvuBO8%2F8aQhH%2FnOqydQP1%2FG4EJn3H3NinP1Dq9ir%2BeJi%2BAEBaZdhR5V7wQ8dSb%2Fwdzvvxa3M2P52ihLc53tw&X-Amz-Signature=b914be9f7684e9ebf5554b8aad44838ac06091e79731090dc5d6e75640635851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

