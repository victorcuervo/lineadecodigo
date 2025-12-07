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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHDR2LU5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwyavAZ2zFPfWje26hf4IU1q9dY5bpJ%2BRPomUyHHwc%2FAIhAJ2GqQx%2F5%2FVNXcgYzBnMBJIRwJIPyHaIKGKTBW7%2B6NQmKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTW8cy1PlTTGAOdioq3ANsxEa%2FKXx3LZ7TyK9oCEX0nIcFoNOf4i1sRNqc1L4PgZYn%2BBUTjbR5g7%2FymlKkhFrIDcD3Nskv4Qyh1D4auS%2BdYhiSKCCojTooT49jmhU6gKBr8Aq8Sn7UV%2BOMuOjwbiL5kgOQ3x10QSlbUTvS%2B%2B2l8q0pbqy07YlTVKthlFrhXqVqF%2B3u7jCD65hfr%2FeJyzTlCjoj1kj40S44TguAYGKA4WQIP59WKetTzSh0XbDeUQsiZ5toxI751g6odcY4bz6XodcWYDSizgJGRL3hjG6iSnqowa1Pam4Q8Ubkimb7EEikiAsQIetIsKYIIPfGH3F5IU%2F05s8vvGQndqPIamzMnuH%2BFaPxeV4Qg5IcycU9OnxC43lR1Ym2aTsAATliBzEPwqN14MTLSg%2FfV1oArrUeTiizXU3k0fDmCoq8ShpX%2BIIrB2rskuOKT3pCNoMmJ5K4M0uczekDIBs6qmgorYwqJknadcbk4Msz%2BpO12M3Pppu7vCvbelnxx2il36dvp7UxWcHF7Fh3K5qiPo5TdwG8XRgnbiYir10F7kXiJXXEbOOhNz%2B%2FM6zEZ6asBY5f%2FI%2B2R127dvcVBrYdcWFwyne3vmDQlAVfbRFkgMm5u%2F3vEkr4ganpPHv8quT8rDDS%2FdLJBjqkAa6oBYPIwvNG%2F8FLAb3nYw7AbmElR1MD1MLxiL3QZB9Ft4W%2BlHSo2cOQs0HDT%2BRn4sYuanGAjQQT6UndUSVRTCLjRD1D1G32nUwZFblsVkeaJ%2BChpT3UdRHVJcmR4N6WmIofH6cdUHC1SgsaZ2LzRBNIncVzgey3u3f4wu4RgpZMMAPYhOuDrT3HLhY3pDNVik2kXQQht0oprzHq9XrkYYIQUUbZ&X-Amz-Signature=3b110adda19ee3ce37c3e60b7b27d39182733810d06204973aaeaaa24ed97f77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

