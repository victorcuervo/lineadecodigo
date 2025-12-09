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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BKME6EU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T191854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyu%2BVIbi%2FX9s7IVB4pn9Vaeb4CJovDQSKXehoQLa8LGAiAHeNeclWxWBQgt5QoKZEcI3xuOUtFRB5PQExheAeTxmSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdkHBivckNCMFTZW8KtwDv7QMhKRWVWUr6T6jLmkpXKC7HiQreZgsI0%2F%2BeTMJ%2Fjm3Ld%2FF5mFQsSBA%2BWCg3dvS1lRo66k78cfKIeyklXnnrcyrnbOqwK%2BIsv7ooMqi1wzzX0UDIgySyMtTLTIYSDVSPNswRWY2eJiXVWAdCKO6IVw1bFKhJdXwXfC%2BiYfowk3%2FdiB2zBHxklG1H8Pdb7bXFJQaeIjtzM46bKlWeLbSyymCxeKr1QDdXVWvb4sipI3nl%2BL7bezteAdLiYz65rpU1zYX5MTZapkpPywQ0yPeI7VmRRSdGVJh2gPLysvAnXWKPelQgsIkk%2F8905fk32cW1O15v1m3ibpNEeOiURBB6xypk6YROeTSZDVPB25N33ZVHCTWXDOw9ex6FywHkUJKF6s7UrEyWJKH6fLLmLfe7wD4rZ3YJwyRshgAJ6xkS%2B%2Bm4%2BTEkvkm%2FGKh0eBdrZ9ZJGho61a2LKfRCk0E80Z779OWGK%2Ftl9TAIQm%2FjLBsGOX20efJ%2BLNJDq8syjGDi8x%2B931EvHsbFxjlAk1ioS6xsTuPdaT0J%2BcoIro6SoJLZfBmDdOwmjnwamtUgtxSRRCUHLYLT7JfgZc5BzkUfE9qQWXL9yn2GNeKicYDnVQwGtXlCsc7UDlUnRaixDEwt9%2FhyQY6pgExKVxaEoexr9YxLhYmX%2FePcR1zdaU1BvVFLtXSJ%2BGQUzJixCNoOFoEizuIii%2FAjZqboo2H7utFkadpN3WwLiecM7MingFv36XgwgEYxik5yngmIwBy8n9omledDp8MCOwMfbA%2B3zkNm6ZdglGX5d3%2F0wDW5gymeztz2QmozSdKNAN%2BAF28yEhZQTPZSQ5ryLC6MBCikvnHuo3yH0HijBoN1PFjPHeh&X-Amz-Signature=560fb30f05fb90a74df091b64ed5eed38ac9c70e4c919aec6905aadf927db96c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

