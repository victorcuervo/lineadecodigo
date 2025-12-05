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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LOYS547%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc25biGzvQZ6LEzYFO09HuuixiID%2BZDUmtN93Vhp8UDgIhAMLSYjtjj8nMOouCtrxkeuRE8D%2BtrE7XkwhNSjxL4otVKv8DCGAQABoMNjM3NDIzMTgzODA1Igy6SnIR9Z7tFcEnSqUq3ANx8eIuDwLxMfEb9ouawDjNnqqpPBsuO95WJrgDK5Yf2IVgmH%2B%2BalqC7CovBuAdh1LWV6Mn5N6Jujd9yZR4LdyjSu3SMfAEGDpFaFbnqoKuAGGcLjmsEpcI4nbYt870zv1Wh%2BY9uqkv5RYNx4b4OfIPmVKC%2FH%2FhvNu8pBrDR%2Fjq7ldLSlbYA1B8EdLqG2bz63QnG5PAySYOImq9f%2FKq5hjwtptlWu5XRLxgjrt270mnmpXLhhMCVjjqrdqE%2FQrMjxBOdXNsvJSa6g3M%2FIT23WDpRh8HeRf%2FsIgwgFxN%2By5Qkt%2BjA9crdwyGvNcGUCbZi9NBsBbqoCESaaK8QiwmrzQkzLBhcVFDDtzP6xbgQfRBA3asF5JKgQIdxu6pqg3ukVqKGneWof9fOKl0SqSgaDmbrIOgUZXEsDvMPjzyVdr5whpaSEmNVMIbMnE%2BivP5rh%2BV8FLkQp18B9tNp3UeWrYKVSMXvT1EuulxgHwfA%2F44bi0hrHhQ%2FsuSPnLFZJi9lr6o41%2BG2J0vvpFI0hcw1qt36%2BgfcKkoMVAo5GQWQxfVruXqYJZWnNmuGwDZz7eia8jd6Ggff0MRRZUyn5PuKcirPPnQ3xdir4T3zw9ZPU7EQUwKjW%2FWwYAOzM%2FC6TCD6cvJBjqkASKc9%2BSVIItseiqCPXEy83XVpUsa%2BxR2ZKtLJcChnDdMXhfp%2FA%2BepFNIBSr9%2FQKASDp07Vb%2B%2FwRu5y%2B0TFbbDoJrb6yhx0lPKhXB3sPku2x2MFoH95bKQavL8tx3Z5PV9UwwpdQaFjod7VbZJCwG7wP5ubpRnLlNIBtWgGkO6UM9y7m%2BVe0QBvN9rHqUTa1Oe11H%2BvmY4AYZRLxp9QG4D88P%2FusG&X-Amz-Signature=747b50e53d70ca9d3c1be7dc25d4a52da25702a7830ce7583d6c7d9fad6f9920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

