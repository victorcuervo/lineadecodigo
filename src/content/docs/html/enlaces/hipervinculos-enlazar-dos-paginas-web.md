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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDCOHMCX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCqyJTI7YTZHrOq%2BS4GLRsYKXlTA3%2B3e%2BSbEDqqT%2FXrKwIhAOlDwwLgwJLXOOXzKHRLE0WlkQpYffJQmzcCt8R0O34SKv8DCDsQABoMNjM3NDIzMTgzODA1IgyjWDcadCZNKs1tFQcq3ANVcjkgXyr47UHilg1ZNhILrQfaeuAQricqzOl%2F%2BMLEhazjrV150X2u8zQJ9GB%2BqyvczGgNJQnzSj%2Bux2wuQazZbEWhCNVu81PmS%2BHFy%2B0vg5nUWXLZ4sNW43C76voCXjf2FqF03%2BY2WKZVbmj5xd5BrVaDO2ChGIet8uf2lvs%2F48iy2%2BAvHMnjTwJXvuJFWHtGK%2FEe%2FJ9yjb77Fm6RwGvnk6JAkatHxH1Z2FoZVCuZvVucOtldQb5NqUd%2BbXDRQfWJKgW%2B9xkPk78ARQnlfF%2FSQfr4Gpa5SytEhSvzTiGwYvc%2BhXxQctO35RYkPHw6sRZb6MWzeWMqgogjHJvj046UmQD7ImPG5nEQ4Ul0tzq5d1bitEGjhwale%2FwhJlRLg6agg94V0GflonoS8FbUDnJ3yK9llJ%2Bttfb2y8fuXLhhwP5NrgBG8Y5GbeQ23%2Bpc9AKGIj6cwoTtr1pWKspN3zal%2FepGKLgcKXL%2BI4s5HJEAA25pcW16XvaaG5QSrPXeTFLpn3%2Bjt6Pq81%2F4rv%2FZM0Wky1W9Xhb6OckOrv6C5iQFjhrCQ6ss%2BeOsCCpBob5UGlegJhbJAQ0lCU%2FEQ5Nc6pJnbGyUli1f4gpOiZxwPJHXSf4hbAaAhhx26y4jljDf08PJBjqkASfZnBChVtMB%2BZAnERTaMuMKL2i7Y7t13frzzpUlpWvUExWRMqPna7RzHyBaLFTW9waQIgsx2GoVxNaNYedxsSXrQbvOvdI0JPKk%2BaaKZ3CxgOFVFdqKGMfvCKdFjdFc8fFBK53JsHyluBvelTiorOndgqI08hlq7W7HG4ki%2BWuNFtZrtkHiwavZV6vU%2B1sBHioOSZdecK8qWSQFcGoFckNwejLS&X-Amz-Signature=199c67a7e358648a79e9fd0e27188699c236d07bf6b889843b1a8be3133d783e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

