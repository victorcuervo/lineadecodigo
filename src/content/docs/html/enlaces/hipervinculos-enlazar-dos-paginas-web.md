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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3MXFRYY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzKMSRKTcIMkwQdFt7hP6uWKogJAbRbMVwgY1pSDPEAgIgXb9lqTQ4eiHuA0%2FjFsXAiNFA0miM4zkuuEOLJ50z96sq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFxBC%2FduGDF4%2BPDA2ircA19kdyC7yy6OZ9vdO9reMy6Aun7KtaOIblGeMAy2jH4MGnoA%2FrMEhyNf3SiaTwHb29WhHpFMNsDU5BLiu2xc1cJqtMemS3tU%2Fle1fSXfBTZmpEtwFNFbmane6klrYxuX3L7p1nvzG4eEuQs%2Bit0l1RyaWBEiiAu0HL7fzn%2FJReXjstkeCXGhVYkJwbU27kSP3Z3yiZFRSIY%2FVEmQcrhTFQ7q0dgahqqyqiDfwso0SVro1TpFgdjxUb5rOPdm18R3NBMQ234xk5BN09ZyKQ5M4Z6D%2Be8hf8%2Fvt6eB%2B2cRVce6CC296frOrdHVmQzk3J%2FwFaB35j9YA%2FCzbh%2Bq4P3ZVKSXvSaAU%2F2o%2BQ%2FSjYrsjxHwI3Q7IQHLiLLJXXv5V7f1Bt8BexeelM3%2FrM5AZsAHtt1z%2FXWen8TkZxOWD5j0SQSpM67ISXzAutFz77hQtk2mCC%2BAGMbCUJE9FaTBlw0IeO3qnFJHplAFhZ7w2P%2BdmTHFpxZ9HAeuBonf4lNuUEFrsqYN1xuBUviCAg7m2Hi4LhBQmOj0gpccqVWEHn2vXPw2ma%2Ba%2Fxdf1EendQdOGVhbZikFMMr4TimjH%2B8n9IxR3g7Ld2%2FSue0mwVf4JWdVqHS6pd%2BZuG%2FOZjxIUvXxMJGn0MkGOqUBNg5M1Zghw2m5uwvg0lbhZsZmToTfvRpqFQr%2FylogEHyWJRLJsR7zUC2PfyHoc7QlDIwzj1Ci6G6ET1dRxyTBBFmt%2FWg7%2Be3FoYMzfgHW9OjumW%2FEp7mPqAF102ZUsWXO%2B1rmJMQm134ntXVfHVMHWPRdK8O1yoMsfT2OShtCZkeM6wTivjxj9JRnuBJWwLD2Sq3mhVHdsDvMKuOtbjcEmstWRkfB&X-Amz-Signature=a5563e2bac7c3df0dfa48848fc07663a51073d0db9e17c4863d63ddc7b0dacd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

