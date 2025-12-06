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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HUPRLNK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADBLcthTwcBIwG4d36TkQ4I5S7jG5paZz2e%2FwaGD%2BVPAiEA1udgYcl%2BaCkCtFOS9EFn4kqw0eluY%2Bt7a5K2o%2BG%2F%2F1sq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJE4qDLr4hCuldsiYSrcA%2F0EE3MAKnqqBlT8siaFyBf92mTt5BKS5NAVHts06gl%2BShi4H18iH7IfeAgcbwdepoSCJGsz67gYrSfkGzHWeNWKjMKWNuA%2B68hpJA2Hsd9btJ6WBhfHPSPe6aUwRrkHKOXiy4ssBcE6g6nKoZtZP9574AJJuNHklIYlAo28hAanaBtVAfNwXOZf%2BlywqW9PVtjzN7EWsdRODGy7hwJ1PAua3JnBhjNSAf7PhIpKW%2F7or9lQ3vdu0tAPxdY36BZlglKCCrTNB%2BDftl7xzihIQqwwusq2H0G1jVow7I6Cy2JZ54q4nYdUYyL%2BwXsYMt4tsBhB7HRyqxrndd67NcGCKH0DhjHccj1n7LX8UZhtodsZNUCkzU9%2Fw8ZCI2iuPft%2FdtxM34bLOEr7IYQSt8g82uoD4aKbAGs7mSxN8GuF3HGuX%2ByVde4G8gObH4c%2F47KUzU15Ph9aVlHX%2BXHrcpjM4cI2OR8yxCXuDNLA48xsEF5AClBBWZsa061vtonSG%2FGL4uL8G32Xk7kZZppdSFxPzYdKEdZyEIWeKPBE%2BeSbeqYn5ZGiL6dJ%2Fz0JbKVLUlLhaCM2wwWhC%2Fdb2AhUVx4YXPYpj9lJgbtvWpbyoMpVIUyEUSs3ZbUQZxH19IxbMK%2FezskGOqUByGpNpANTOgAPrlcAjY19GJfVos8frfPqxD82lzDqjGsdaMb2VaL8V41lU4GVet428z0sR9xUujmJEkv53aICd2N%2F9JNRWNdRclS0RyPlWaXZMTZM2DoR0rqWv4hWcEXPM%2BC3LPDCeRfe87itCGlbWnC7sooTm0hePfzUM46k4TN51QN73gVdaxvXz9ZxZ9%2FAfwKU45kRnLuXLcWy468AQXt%2Fa%2FAd&X-Amz-Signature=70e896c790a2ae37f42e47ef93ddc8b63a7b707306cc3abc41a0a670dc3df7ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

