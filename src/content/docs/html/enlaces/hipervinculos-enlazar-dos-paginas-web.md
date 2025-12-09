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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SZ7CZMA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B2vQiM0GQsM6iINtePppXzHqmmRVX7iIfKvtdrHr2qAIhAMlCy76OP2HJt9TU%2FL1q1zqi3IhMRRryF5MA456rtNcdKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkKKHsrPH8n%2F8ZA4Yq3ANpD82GOspbjQ7Ycbs94Nz0GGJAPiTfhBhtdJ85BGsX2L7HZyO22dvWhxVIfkezpxti%2BRmqpSBwo%2Bk%2FeTnlFxEoBDjh9t%2BsHq7xTvBkt2HQFBQ0sJ01QFB46MBo9bYzWgS2hefcJOMhgQvqY65fNQJwv3t8r%2BDVju%2FBciwh7rLrvyNRIWmtsSSSLAa%2Fs6LAYAqy8mGwOi%2FPFWcM6n7nt4dTARfoGnnz0UZiycROXDIEkFTk3KotkL21ZmGMucLLcfHG0Q159RnIDIG9M79wj3GQeYRsXYJyuOdL3vzRBfmDWjbD6leSF%2BqNRUsRT2n2tiW%2Fk968NvSFOJX8qQqTFUivmPf0tLalT5YYVM637RAibIDXMyuH64Z0Nia0JXOPRj9dIBIxEJ4iCbsphpuXCbwdmdDBFPG6dqquu8xnaYnrsdy8jmJIqYMVXVLlTPKIZjMNe74%2Fc6Cjcm%2B60GqE3eNb6oLztJ4PXWh4SpVpKCI30xZBsncbUD08QiW3zhTpJdTMg4kiIkjhhPU4Ha1op0LSllizjUeb1tK%2B7WFaptWsIpg4VLHlpxVSqASCkxCRZ51pa7LksqKD8Bsq870GMILobsKYBNwNGkVR4Sl2HcfcFuQP4pZMS2VaBTTRtTDVyd7JBjqkAfiRuKKu%2FeLoViBmePpw62634NuozYxrnm9rq6VI6thjLd2WMJ4uyq62Gv5LToa39nS3FXqRGF%2BzyU%2FVU2z1uIm%2FwNC97JJDhk4PWyZWhQi%2BaDBnMyyki%2BYEopuAm9vrHVkTS5b9E5DiEbPDDqb5ytfJ1bAC6RM9kxAuxf3j3swO1JxgZKW72944p8mSC%2FsxHCMU%2FaypKCAN6jMQ0uSoYBPsGBoO&X-Amz-Signature=e3488496a2f19000ce48061f8c6488438e0a08260f7f1beaee006f2de9987787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

