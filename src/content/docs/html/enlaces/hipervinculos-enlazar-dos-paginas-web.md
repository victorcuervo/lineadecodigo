---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSIBLUQ7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCICdhi7D631qjWRk3gSN%2FsRqPbg0kmFeZ%2BhUGQHjJuBNjAiEA%2B9b9%2BRtvN69K%2BkyF4j1A%2F4YImwbfIR3pslHZ5faapgQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHOxiZ6YCYpIp8iprircA7u5OkS9HdSO9EIET9fKglM2us%2Bxn5YNgcZ%2ByvBT4wHbfBvJ1SuQvgeiA5nBLgupiGZJ2TKQLjFbH91a8gtHEH4pquH3Ph2o1qWiahJeQLbDsdwQeu5kOtzyCvx93yruteVyJP%2FN%2FRzgN%2BdHDDONsZI1M%2FvFGKXDzwUgO9FSL9S7A6EWM%2FEIKiLobtjqN%2FwN4RfAWgfK%2BXgepkcahzJloG1Gc73FUtJC1lP3OWIsYoVJEnrsqzaL4LbsOskY1qJ0646uQXmpDhwsmKOV5hDXCKgtHxgBgaWOhcp%2Bffbn%2B7DQjd2eu6WOvGFxz32OuSrcmZx6pvnq6vKI3DlmVRTpieSXKM3zdQGkrsyemHpa6QcYwGh7BKSgCFBU9DuRXaYvXV9%2BcrEvoQ0FX0EELxU13%2FTGFvGojpEXc%2BD7j5HATcYaC768upoQkJIgpafGE1A2lKFsuTB7FOxDyGIWwaahnZ2XC3DZ%2BLbiKAEzKfqp4TAM333XxRtsMLtHDBki30GJXmw8ZqyJ0ZawpqoFNCJd%2BYxVeyVSf5Xr8YwMFWoilLS23nVWUtxpteNUGpjvyHoPNNKE9fu73S4DRFNr6TSe1tra6z4VxPPZuvxGYoo99vBBP0lD9PqHXXZwxeGUMOOFxckGOqUBQ%2FPiBDROUY997u6hkUsALNQvULoCDsJbw37QjMnRBrWH%2Bbxmh5VOE6au93Qc%2FUKIb6uzNywdpiSHoJr4GczTUZspNeTOMi7hwjNnyfpjc9LlGeuNZdvm8vWXxi4wZqAQ1PpcV9%2BLxt%2BbPaulU7nbiWxqT0QEOH14HZpVYq97Ai1bOcpgXBAnQKP1odUGdlwJDbFcBpBkDpourn1ijgQnjAfaJQaC&X-Amz-Signature=c8fa2226ff01615e0727356ad60f519ea43b349a6869be6076c310d3b9d320c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

