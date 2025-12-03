---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZUF2LWV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCFqSD9FPHlIRjonpQYlzhSHl19LfH5owEsyXF1Hk5srQIgW%2F2bKVMKN3ZkURO45GeEmEl5iCC9IKL%2FFPxmgv3%2BCqsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBSCO9Ch%2BB9ioybcuCrcA6nBckrsJgo62pDlrkx2lBgYSbeHBN6O0PgSI19Pra3RfD7qEvtwJ%2BeVOcULXv7hH3hVLO9h%2BDdywGfkphhdWgok%2F%2FqvhxhcFXlF4xd3fY2jbgYT%2Bkq7Mbp6xEGqpSzfRbgf01QrRi%2Feb9hJ9umBdnWjMETz539NAm%2FWr7Y1XhfrLIu2caOaYuBYusHpKV91OCQ5u8hv0x01Sd1QD7mMUN84urDFXAG0GjZG805%2Fta0vTCpbcf8gz4qW3RxkI3LgiWnZ6mGUyOkPKSA6hpGpRAfr0HMSyf%2BGCDZTB3dbsTlQ50NNpKmdyC0DN%2FuOrTrkTVJsiUZ4VKptLGdHMJFj3lDDfiHwBLCY9zaV4yJRzx%2BDY3tXL%2FFSK0lMDQ88M7qxzjVVrgNvxGTOkwnFlvSmQnoAn1TKG5VdlL4%2BaijE64NdyPp9B%2Frj3%2FNmxGuG%2FuoAj2ikEOjIqRomjHnfs9FQ%2BKfVVVvZtLIiAgIfwJYU2wJow9C1eCnAze9P4UEy1w2ES5bp0Y0VCCPNzGoZRpvl5navdGVgf8k8VTp0EbHpmnobDBmrhdd6LpcRZpSKoBaZ7jCmPcTNn6QlRXEshx%2FkjUQ7Wj3xExQDsqsQv5vzPGv5gWb%2FAyd%2BHNkUW5KeMKzcwskGOqUByxCkZES2b7oB5d4s%2BO6IRXYVT4SoK8409qs%2F2ZLo42gtkSc%2F7SLMc7SBTmQy0EAmW3yy9IQfHvv24yV4rXBzTB1irBPet%2B8hwndV7%2FCWEKG9XzZP7lBFGII3%2FDykUzxO11vtgVwxJUGqrATN5dKGMJ0UZKNeoOiGwt4S2dMTraHULbRLr6%2FnJnnTuI6uycTQNuGpG9JK0YyjLQE4BbBNjZW%2F7Ujb&X-Amz-Signature=1e7e4d69f7ad093d498e0c77d56c4f41aaeb0fac28307dc5e011ec749aac95e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

