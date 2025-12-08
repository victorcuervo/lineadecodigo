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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QLOHWPQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAspkVksyB1L%2FgWsXWPpbVKpQQcOUtl79kDpyUZ86PWwAiBd4%2FsiPXIhfH%2FqiRYRRE1oHgoKWizrgBRA%2ByukS8b3TCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8T2fL5DHNafyqsAxKtwDoevdnGw%2F1MR3ndLa0hXMTTP1vvORqySMn6%2BDRf%2FM%2BmnkfW1%2FP3hESdWTln0guAqulu7keicQXSPWsV2siOFwXLyhkkWXm8r%2B64iLDmBXOaNFHiMX7ajeWCaRAILittz%2F7chntoWurwuzbxOUKH6a3DZ8%2FOfCChgD%2Fof%2BziH%2BMDDcNASXe5u8SE38eLWOGJV%2BEQFFaM2jr6YGvnIAUstz%2FnF4RjrNitvUkPAJ7DK0zfNSKoiKrGJvS359hjXFx0RjyPbdnMXMIemIiy5BJXjSwisWr%2FhWEol0sibGYUmpZB%2Fp7VQkNf0D2taKc2fHFGUNiTcoA%2BP2f%2B7XogUEmmZKFWzuwYU8WV4pd%2BOGr82vn7LOaHkS66OhIFCde48%2FkMFhoy06pl5HBPLV01QNcazU8nrpogcyet8hlJmApdMjhb%2BDRzzIPIX0mUhB%2FAVzVI8jgAUaX5XUMdmh0ZKXibpmlDyzxjJo6MycqABcKVQw09vOqPOQUYDSW9bd1e5KJZTkGeJSfcD4XtIab28gjDgx8qaaSqGeM5ruGg5KHFy76nKotOSwCsdUjpkUYZTLw65nWt2Zv%2FqJ09FXq59GFIrvvSBnIQLDpQbZfrI4hUt%2FgcIf9eArvCoSbHmyWbgwzIfcyQY6pgH0h5xZufcDhniHgf7IB34ZbVRyFQfFDO0KSfoBdn54aKY07nJzm%2BS%2BoTARAUS6TCnUtLXrDSsELh%2B%2Bw6Rdkrv4BYnAVS4GvHjrSCjSR4OrwbtIXQoYyOCxWXsfqFWKhs2nnNflxE3Z6oyalbmS9IsF5g%2BUiHS25BS0b6tkYEmOGKQLa9w5lWhgjjqIoGnJWYtwIbK45IWkLW8Chaf8eBEDUfd2mU6y&X-Amz-Signature=7dc03051c5a79ad8bef031edab2f4963e5e8471dbe4c2a63befb213321c49037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

