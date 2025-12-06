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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUGF6NP7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyh%2BUuuS7emyycJMovMo2J%2B%2BjqABXK2nvVFm28InQE2AIgQ5cDuE3hSS29fKiOBizI4pIa1a47ZxnNenDnY9UCV5Qq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPjds%2Bvmcv%2FZL014NircA7oqR8U2zz%2FZjr88R3Xkd0MGzgQYDcEP%2F9SD2Au0f4iOiWspTcTN4aPsBTNi9QuibYaQQo%2FW2ILBYCw5Zj84t1rV2dtSEY15st%2FKA%2FLZtEuhT15g2MUkDZSwLW5dwjxBbedAxJ68ulPFHN%2FR0UGVXX%2FmfNXvEbAbjrlAh5C1TpIJUvbb2qluNZbH1FOgy5b%2FpcQN4sZQx9VGNbIiWYVFMwzV3qaRym%2BgOSn%2BtSIAKAyZqx%2B8mNjq7KaKQ3ojvQUUP%2Fdm8fGbg2wNIDmCQaIOoudpPY3RYWChpnycz3%2FBXXHVCaSR%2F7pYRssANDNyGz2R4lawRzes7Avc7yBqJCkzgUnsh19MP2hOc6ykSUvsW2NkwK7C6jllXI86fc1GmFvlNV3idqFlrNpPBlwrzvbytF0FR21EaZyq2ikXC4ucADPzrMNgT8ea6zl6fB5sSswGKwwp43TBw7jUEN5fcCDStAKaGIIESK%2FrAVFDG5JpBI0hahVMHf%2F5T56heG%2FE44a7275nj%2BeLdcNLKV%2BWJcRkTtRdDGEHtW2Js1wHD0sOA32DLM9%2BjrQpL90M3zhfG2kspA78hMhAqyXAAVQwgFC%2FYkjxs2cHh%2BXGMMybFlXuBy2LaAg%2Br3AX0FuPEf3sMIGn0MkGOqUBoayxC7Y3jX46VumjHLcwcGQLnfirze3ngiSCi%2B9eWIi%2FOeIVNKT3KDBP6xFLlfI03hbxUvjK9KyA6DAIHdKsgjj%2B7mHgMzuOrRcRDFtYQhgQfqNbxU3QnRDhvEDYZ%2BZSZMrekw5HaP6sXyd5G2L2gWBQ5Y%2BNbL019lSFPZRRDGFKmXE0rHVmMt5B8myp9OOz8ksHpgh92l3MWGGv%2BmotceKS6S7U&X-Amz-Signature=129b585210f10efc47af8868b96cf2a430531c63e4141989439de6df262aa649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

