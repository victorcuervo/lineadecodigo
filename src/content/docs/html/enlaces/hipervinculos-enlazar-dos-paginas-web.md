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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWN2HALY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN9FBEi8%2B9fygse4Ep90qALWwryuV49Kiozoay9dga%2FgIgS2FSR%2F9kLZBo3BD41X7v61dqGzErzL0Eh2lF%2BcliNqIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAHvVfrlO%2BsHEROdircA9BDCloWT7FVvg4CW9j0NVeaKT46oZxO7e%2BPnpLhdmr35oHTRekc9Sf4PUv3CkWBCbeaBTxzxhJhKhXdYJrP7NNw7ASGpD8Z%2F4o8ZQykkSejY8dvVPu59KukksUTtLq0lQknvd0l2AytEubdgxmG7%2BLLfkRNLQpWy5%2BkbU8nbTzBmEsgxr9%2FuxRkXjXhLdeSQ7VrbyGcMDK5XujPf4XR16azM%2BIrVcxi7bpDEFEMyB2Fo1caKOmxfOmp%2FzKilwvIXy%2BvVenC64tgGb%2B9kZ348z6FMrJU71eN7cAKFGdGNdVaxBfj%2Be8n7P6TxtCYkxe%2ByNgzsiuCIVKbgXHTKJ%2BmK8UwOLOEZt1mWdhyLRw8XY%2FTFESGmy%2B2QtwdcJmEjCCb2tjVE%2BxMHK79jy2w7KbveyXumyyOZ4saurEQ%2BhxG%2Bt%2BozhmqLygqhP7AcKSIMabqlY7Jy2jqf6VEgkb%2FlDMYBBHhdKW3MV8HJKn5GpEF6SiIrbr5a444%2FmyFRNR9ODtDLF6LZukL64gZtLFKc2xiutnfyTaeliXPE1DVzZT7uFHeQG0WQSEiNUj%2FF%2FpPGUAfGR0lihMKwAB%2F66bTdhknZg%2F1DtCZQBa8J0%2FyYuejhnIwGJvpBBsheM95O1GeMMuZ1ckGOqUBCCSM81shcopHVQHvaXtRuQ5QsXrOjuGJcLOzu5Pp6Azc5Hz1o6z2j6%2F9bZ7TnpTXmSA1LEBGSohZujRxAHVULWWMrbRypEGGaxOqetZSvgqoaTsvbgRA6dw9YgcGNTUantwJTF39VkiaTz2sCoqTgz%2Fe9kePdQOtF0hD14AfCpYoKt3HTbilQDFXXW8O7hgDaEATS1KA7pmN%2FDi8adUSx%2FhX%2Bch%2B&X-Amz-Signature=19c8f438f19ef4c2f786783d54f3e789cb65d7b5d2fa1f7200dcca60bc880754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

