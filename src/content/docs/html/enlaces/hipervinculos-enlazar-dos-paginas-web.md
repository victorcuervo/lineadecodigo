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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGFSHKIR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVp%2FZBGHVTZznHYpKTvRFb2hhtEuDvF1FE8z%2FRtA3i6AiEA0DuAc2S3Cl4V5VZ5rcuhQB0HXZ%2FL1yoZC%2FbXeRcig9EqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7lzal3uMsYXeoWHCrcAynQrPmBK78toWRMwnQPBF6wpVQULt6MsP6c4Cn7S2fSl2M6EdMpYwJG%2Fb%2Fl95rte%2FuJZHhw4yV4l5jbuMCKIn3Nh3wcj0mB9%2Bc%2Fsp2gaKgs4sopFYE26VJwUO6u0uGwqOLmf6ec6BlNpcg1UQs8OnIrI1pskJZI72vGJg9ZU7CfNJOPJYoQTL%2FV4XXnPDquN0HkYbNI%2FShE8TRBnvMrqxs8ySjFTRR1mQUlL%2FFtTa0GpkZYXwFsyW2bbR05YB4rqaH0ymrTGfEEzQn28n7trlVXbfkWbg71PVEfFxqeGYqZgBP4hK9WdXP6VBK2glMBNV3Poqup32j%2FS3s%2FTp53Hn%2FhsdcJ1Crq1MTFvKG%2FLHs93rTYvLOjrlGR4zoiYEQZC%2FDCLteB6%2BzWAck0u%2BP5C7buuq6EqBF5%2FQny6yPRNKLz%2BAKQ4Mh6CsY9qZHUqR7%2BizldKbEMBXNKVXOpvv3km%2FU1ZVcEcciCYv8oV0PjD448h52bXYyyO4YHMknLgzcJyck6v%2FLizRRBPdkyvA5cmBbcjLOhODJSxKH3GaCLgGkRMh8JIrGpQkQ17tDpdlOI3a3bC2r1S2kJ607F3cy2cNtTYMX7BIA3rqsOF6WULU6iFh5IaqDWrDoi%2FtjmMPj90skGOqUB22zSM5YfmQslW1B12k3UVkTtntGaEhNvyNMSBxcH5mPX5SVO2vrbT7yX7R3%2B%2Fc9oXRWqJ2J0q%2FrhRpqZnsw6XQJ8GEwIWJxyRhIlmJ5VrlnKFo236Hyqkn8kxlkUC6STS4TuWJVUd5WilausRBQgE6ONHwD%2BdlPcQWOKdJjFCs9mfJ735esxjREIZz%2B0%2BfxMvhXeH2iU19ujoGmQPcfYZHQHLJp5&X-Amz-Signature=d1c8e9410ec7958b7ce031ab48ecf931ecc34b15d293bcd27e18a44b575fb221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

