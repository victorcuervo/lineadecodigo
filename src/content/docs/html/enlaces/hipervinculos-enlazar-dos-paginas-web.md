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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HZ3IF46%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwqS%2FGdGm2k9%2FjAhKetZR6j%2FL6PIf%2F1G3WkUc3eFERCAiBHBKukGydy9fK7teNVBJ6ryfO9xWvBT5216WZ02qC0OiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy2zbF3zMPirMCtfmKtwDbQ%2BnrvHkvL%2FS%2FQ974zbWmDo1fpugbqj8nCXm7Lw0CJZxR2uZDTEQVjeDxFIsDwr67KSX2t0NYhtM1oDl7JveaKY7q7RRzDhti9TSkWxqRCQzPL13AlrDuEkuYgIX5RMxAziRyoe3CzmoCQfWxcylN0jEtneC8x4bYBGaAYS9MccWoPHVMiRTweaBq0GrD7GmxeY7bnUfVIgObPxSclbwMMng0%2Fhp%2BoKdlJo4lfGMizDCcZeQVNC1KsoJWJBEbyg7ctSuhzNnpFnQb1ZRuV%2F2TaP0bWNdfG5iT1%2BKw5Bjdftc%2F7bYxMpfxXzcZKDCutamNY46u5OcRDRevFfQj4Zv0wgpOG4h3WTzDrG7uj0zEeo5F5azvHFeaBrJN9g26c8FG37dNj%2Bca%2B5NB2TfB8VdWPhpzXm7B%2FNhjtGjbjZ4Pk%2Bz4q4i7GGpZNFpYWlZb8J4NYkE7r%2BqZK4WL7MCk4r7MzEKdhOFwiLWRVyepUTQJ2brNxMWA1HXzMX3dXqCrArJqI%2FbsV0rJXiM08WNR7VfDqWf8LM%2F0XPr%2BxdcTbkuBXMFyar%2F2FkEfCXK%2F20fLgba99YVncTi%2FycfU3E4jubjyhA84iHfVdXUvND99HFM0TDFgDRY1PuC3FfiCykw7MfXyQY6pgG9z9urjSd9fDTVFk3DpNgd5D7ezy2HEdluq5ga6TO7NStaMv%2FdyOts5%2FJzBKSnDgyEh19%2FT8L%2F31rDtS%2FRmT1nNJRBeulrSdy4ZH5MiEFAy7CUhC1rWTdE63Un%2BMYoZzUUcEDZHmhad9OVaw5Er6E1KJYN%2FBTJ3EM9I2NsJVGVYTEuHPf6U6BjlWALDLZk6kw3%2Fvmvjto%2BhIj8WLdtxt%2B%2FbIvFiF%2F4&X-Amz-Signature=614746d2cffcc213a0461a7d6c94ecd9a4ed5e2edd238891ba2d738d5a7194f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

