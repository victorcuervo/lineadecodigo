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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKLMHJIN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T073358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClliTtCRLPgOyqfsh7r0H9BI%2BSIjXyXSaAvNEI6wCWAAIhAMvgGqm65iNOg9yh71rkiiEmpqkJaPo9zDT0lH%2BIkfldKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3YT1R5wzOEfDlNGgq3AMilTjA%2FrqNkOGQZO4474Irpv5rQ426JDmZhdTjdKd4xDJyiiLGpEmui7YkimAPD2tiB3AHRwUeEBVs3SFPM%2BeE4biNasst3uy4fl6uccycSya3lJ5KHBm%2BTP9miFwjeok7SQ2ijKjLZtSoInGU1Vhaw2wRUmJVL7TQEDsOJ7kgEDQ4oyYjETYOrzzO%2Fuf0%2FLoHTJI%2F6%2FUnqDxji%2Bzb7oTarfJHKfovckZ0uHePGZrQXM2FpRzOqNdRmBxzeL8MiES0HRkT7MwXdxTdBHvCWkoSMUvwrSN6X5Sm0DCHsVmDDoloApRBi8lBQPE%2FJarJl%2BJcKLW0dSF8QE3O%2FSFj%2B6kLh%2FGsb8xdab0kkHwHiPP6ko05zzBRq%2BJdVXJtwm081piXsBxTxjBZi%2F1bcKVEvtNJIaYbJNkumw1wwPZlR5ogA4d3TqURgrLJMO74BP8KdHshzWcwD6N9qQuOvazm38FpJocQB3ipxtHQ3MtlNjwc0fLt2AIiD3BS6rUMi9J3N%2BuUzJIudwIC%2FD7JJpJVFwuudOi%2F0gXFk4xToT6rsDnr7qUYgNo6%2FrdnJo7VvWIwHHj4akdfFuhQ9RZOJl%2BIqfrlPJ3Z8bJz4FK7UVgbjjcxdK8oJlFMEvYS25uWoTDtntTJBjqkAQZf7XZd98YkgyKG7cDOsna04hL%2FdSegAVzB7MHMdKqQ332MjBG14Lcyk0rwOc4Lr3%2BX0O9CTskWyWd3WkfsYGjRL07mNHST899zYZ4h%2BfbpkGABIP43tTKubY7wM0zDA5kHHTke57LYl0nQYHqjDcelXjqNuMdF9FEewBhjTX1%2BxvWHWaSMYZsibOyI9KhfnJdQm7krYC43%2Fdd9xxhF8ZDPX%2BtY&X-Amz-Signature=568669170c13c61e701c63369634175e7c560b5c1f6e12bba365d85c4d002600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

