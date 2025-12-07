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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IS6CCFZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgJOO%2BRKMK448MZHXDwEI8w7dbdFF6fIsfb8x8uRJM8AiBoDf6H5he58NyOPyFL56jsJS%2B858CWBHt7ylAMBwfWtSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1zk5i4yqktDZxZNkKtwDxBFu2Pu%2F%2FZ1lfKujVawNWcARD6uyY%2BSmEZFiYscFLQHwYzkB5eLFyFWxtTd%2BSkCpQPud5AZ8a8Rh98tMK8y9PJsZkx0xEfmrr%2BI8pYI%2FiPn0ie3M%2BGKnU5uE%2BmZ6I6K2kti8%2FZmWCc9FLaE6U%2Fh0GQ%2FhZ5yBec9gHaD87v7R%2BlV0t0eJ0kRTupLuQG%2FBuwjI%2BrLjt2iTgNTnmSZarJciY68wYqkXExhjjku7g5LiIlZ6DEXs6l8BlXJube2XFrkCiHXiQ8QUcAf7V7CrwkhHeHIL%2FB3muYm0gv06kYepymQ6i0KJRj8KMjVPNoOWeVClHIf7PrVCQuxvZBZ40SiOvraP5tELo6lFDt8FAYjAC1VP4xJZCgSK9I8V2ddknar9XhKNzjt1uI0YqAOB78eEscbRd8GkiPWy5G9a8yOFKY6VvyOLUGV1Ho1wZV74cggSizW54GCQErv8RYasAOuflguU%2BZXSxCEIoTwKO6GqLmZ8c4i2oIdkntkFA02DrbYNgJHYNVuxe%2Flrdq4kho63mKJ6vjDq8cZPGzBNIwMX0ga1%2BezkPaBb6OVNM1tzjJY%2FJI%2F3HSx%2BC7VSgrBLEKErKA2IHnSDoLK2netVc1LFbe%2Fp7keU4fRlbDlAmF4wrf7SyQY6pgGatEVbmfYhV8svH68PbWrRH0pmF0h228DOxbhczAYpcqc%2F53YDnbIA9cr%2FsuR6t2JGuA3yvL3Yd4yyziJHfXelJXbOgD3GWdlZVzLp9PCCJJEky6LqE%2FEV0F3cS4wHdAA9zoxmR9xqdQlunzwGFrZQeSR6s0iKyKW5B0XB6YAJ80xjcYsIuZY%2FchxE%2FW%2BauD1IaMXeASWR7acnUjYCqwhBwrQTTgOo&X-Amz-Signature=05709c103bf583e0b55c37423e0ae8d17b9b0aa9d537ca70a59e9b57e9f4e709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

