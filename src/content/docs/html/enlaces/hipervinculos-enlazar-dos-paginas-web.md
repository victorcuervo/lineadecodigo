---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62W3M5T%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T155830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ5ygBMxwUxVhUGwZVHS9yU8%2B9q5jqzgiitLKldVaJoAIhAPcb5fVZSccWhzR%2F%2F8i4c5x2xFawodfsbvaDm9sBhtzyKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOkME50ysCiyB%2F4iIq3APMVpnoBwa%2Fe0iQJ9phoD6TZrY5F422KAm5TTp75LBwS%2F5x0SycQuxf2IaIbmabhckru42%2FFy7ejOpFZcqFfemodOv0KD5p6dWxu2v%2BFv%2BuEPLAZawLnn%2FZTRRDg8ykLDIiArDo31fTocC%2Felbm%2B2ky26DLU%2BGp%2F2lj2JD1CSRjgpx2quX7KS3zj0W9HhFBUbmtpKbCkuBvx8A1T8OxRuDXihj0n%2F6HSg0u4MztPC0ZppaNWJvzzUy6MkjrbGAb1Zy5Phf1pF9N9V8bvZ2A%2BwkJT954vJOp9iCC7zhdZVwxYkPNnJ1Jmrno9aGjqkMLoh918LNYxPS6QDpxVSbW4hZ258LpER3s0jEafhhcmPLYkMoSjKwoFqL4qD3XezBJHnQ%2Fayq%2FWiU3m%2BQlyzdsplH2UwDAB5%2FWiS6M63GdbYTMivLB6pDKNpxIBRvU87JNCRXy3sPp%2BM7lrTllcrWCuhNWJg%2FCiYr2ZJbP65abmFY6J7dWInZtyRN7qV%2B8c%2F%2BUf227vOtij2Qukcz%2BX8Mb970p7FM07sMl2w1OuSAFQ1C%2B%2FjzOEgiOefBOOtiQtAhjPVJpXurgu9r66pU1njTMMwq06AM1p6iRi43%2Ffacimc11ejfmPPj%2B37rIrora2DD03ODJBjqkATs2908rwRKeiDK9U0XdBIiwAhLneGW9VkMfFvHpe1JaZNINlMtOh8mPSwnmUZBh92aHz3vH9K6%2F4W9%2F5L4ycfn%2B3NzIxvNcV5Ye5ZutTrwzXvf9%2BS1jNWJSLz7ZyeIApc%2BddObIHKyv1y3DObYcT3kPJ5mttEjkaF8Tio5mqJ1R5O7OqMnUulX%2B0Lwb2vmlPj2FSfVuQWb8%2Fte69VSE0CtydVjs&X-Amz-Signature=0598e9f3b7d53ed32202b21c70bbbce1dc4446e4c5b27601dcda61c2fd12ffd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

