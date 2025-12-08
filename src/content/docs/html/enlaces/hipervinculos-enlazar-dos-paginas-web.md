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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAXEQ5WU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLoexcQL%2F3dPz31aib8YdRYFj%2BKwfUtSsHy2hEaAEjiwIhALI7ItUyE%2BnPRNIHWrJ0i%2BIOZjB26%2BiDTaiG1y79%2B0dKKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC%2Ba8TG9Y3poMYsiYq3AM3abd8Qi7xt%2BycBQjYBub08ZkNs7LKvNw5R4lhphnVhMWSL7vqiVFbs0IIJmlLFv%2F1YmnrWyn3en9fkv%2FOrlKrE6ESyQ3kgXXE12cm4PsaZqq%2FdzEmEpZJ5OexZNOf2k2ARvgVZwrNb7wYp44BNrilo%2FeyI8jEHvFb6r1v1iqg7bjPWsFZdiHk9pMmB5BMthnLCv02xgDrnSSGim9oWyxriryagwpgev%2BvIV1vGmNeYgam%2FI%2Fvz5U2eyC16lit%2Fx6glDa0DQX6nlp7IkmkMjDS8j8QVR9Lcq63HJeuxp6GltgQmnERn0cuCoc52%2Bg1EChMvezmZH%2BF2abfNDlH4tz%2B6cD%2BhxjwYzu6bPA5hSYpv1nnXekbJ%2BlMGaO8QJvsT%2BHZQwBHfzxk1h1pXx3Fcrokx4oprfqL58Xnrvq6Exn4w3ojedIrsMidt3MF78qp%2B8SK8QH5WuQ5ewbeT60o%2F%2Fc1xnr2rHwQfAlb833vWTike5GzB0gP6uY1z4ywaUIMTCUTv%2FEFQyWCrnNvPmZU0ihJgOZdSIAXKYyaZf%2B38dssTo%2F4%2BaQl05p2bZVA0Dpr3iL5bOYCuOeY0kFMzAjNFvqQMpOLgwDZ4%2BSaN7tojVrOtcoEXcfzs0x4N1pNeTDJ7tnJBjqkARLbwsGWbkK5cO8aydXwJ00XfCV2lZpCOxm1mXfj744MKD%2BAUZ1VyTFvru8HODl%2Fj6Du67JULfFCK9k%2Fcmjx0lBP1r%2FDo9GGNFcYNibXbHq91mkfwpDw4Sn0P5R%2B7uJLI605rkcXiAlngAD9A0wffNEPfswtbLXTKCr7u0t1NWIJRsaM7HVdQlcquzOz7TM0WPj3hgxNBl7MNWjv2P%2FzFnWif4xA&X-Amz-Signature=a06f93f003104c78cbc2fda2ea02e98ff734d1a63960634db317081e4f06e764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

