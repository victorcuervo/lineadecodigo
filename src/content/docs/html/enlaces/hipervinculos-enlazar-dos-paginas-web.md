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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZJKYAFD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEzrzlWjPZlVBY9K%2FUyQaw6aFhCZmgJfkCRfFiYKpJLAIhALA7MbotSFhmudrBRnh6zxu4RCkD9cEcJVc9%2Fi2gMNh5KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfqhT4r45Rlidx9SEq3AMbBtB%2Fj63MeCwJKfCQTpQjiCjiHOKskUtmZIFTrziaPhqsn32bPCffj6s%2B2JDC%2BMPvlu3foNO3VteHipFDkhSuj7jQUm2YnnXFtOJsY8nEChh%2B0lCsRJ0wMDexVadRHuZMTyIq3ENV697RVRPXQS6ZV87canEPhoFf34Ybsqp%2BzoktJgv0bolt1TWROzTbWQiWDDQSDOIQKheI1FBCCWcdLh%2F1%2BOilMZSsjeK1vKi3FjlrTVSMJpHCMTV09SnXVbOyCl6GDYr3CsUDzlJEM8IscNSw8%2FgO0P7pI6nxxxrJZ9p4OH91mbHvFpU58E%2BQgK%2F8twIytEjFvZKzUieM4krTrRPdSuappPUQCpAD0n7Vd8pcIgFeileoWhKzD53jtNb2Ge6IzA7Ixe2rtl3fRc%2B%2FgTpIQR%2FhBIntOEbWEApmXSJCFzQVIeiRTiy%2FSB4mvz1321uYSDgkMbWHNO%2BSjP9VtohfsIsEUfzV7yf7%2FDzW%2BAgtHVzJZbYvyB1y%2BJMM0EQWmoGfRntJov%2BJtvPoGQwQIhjFnraet%2FcZKfR%2BMeQRTMCU7telmFccqiFb0H7t2%2By%2BwtP%2FS6gqWgnlE%2BXYo6FI%2FO1zB9bAWG2PjMJgrDYQdEXh2KvzKgk3FxPX8TCyvdbJBjqkAZ9wCOvXk0%2FyRazohUmloulrGLbKm6AVePtf8nDmpMhubOjVLNz%2B8gKJ1M2r7BtcxgXDTT6zRTAmwX9k5wS1TRgoXaUIvo1ZG8s8EMjxjoQqXLgUXYLTQckji8dxk2JTuoT7lg8TbaWJgP76jT1LErhBUMY5qvcaUta%2BD%2BtXZE7HSZHScgTwc9XHktueC3X%2BAMJzJ0bQUUOWmiyneG8gMQ%2BU4YGO&X-Amz-Signature=14a6f0ecc03fea48dcae2546f97497fec10b4e6c51e8678da623a68251b06bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

