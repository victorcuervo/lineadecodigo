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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654EXULY2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAi7VuP2d%2Fh4jeylD4dfmOj7u2qDFFldgILZJ5fIh%2FM5AiBF0y9eoU42XgK6Ha%2BJwoRqH5O14ja%2FbK6I2cOw4K6fLiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpJgBEOcnO5uG%2BlpnKtwDF5EhqUc9BCBHFyV0m2mbwsr2Xuv8AqgN%2BugA57YJVz1gdqgufCBtZH4xm4X1G%2B2r8RW%2FoNgoruhqsD9jvYFap8AIA%2Bl215BF0b8jO7eyrAJz7AiKveZABggJD%2Fx0LpixR567lLBnRJuE1T9HR0UqDfr9efmiIaQf9z4rqemRClkA0lZMe7mmndb8kDqGiXdtBBTz6rUeqSe8q3MVldxeZekoJxfPoSvf6b9yEgl%2FhQFl4ZSyzGD6WrPV9KkZAH2hU%2F4AYRzLSnYnG9Dr6oQ%2BOkNCFxIIesl7a6buwSoU44LwcF%2BmD20MpMJerphOAFQsXDHzhgzBA0%2FJ5QZRSFkce2%2BWpEweDBokFPFXdzMr5LP3MyxjZwpOoXTZoKE3E%2FbooqkkLljIWowaOXV6khuZAginjJgkRXTOrMty0T6OJ7dS81Szyiur5wMmGl2rtQbqsXMvli3zidxl5j6gFPjCL5X056TNnnvjwjz5%2BlVqSfVEv%2F9qTbNhJGlfJ7ZdmjEVubJzc9VISuK1aET3Uq%2F2qPstrtTexFiXtKIhil9E5faulED6DA%2BqCMJPv8nF51MGLyBDdBdBpGa0KpZeGEyBjq6uTD7ad6vDCpSA60e%2B60VmfP4yQB9ef0B6SvgwgO7ZyQY6pgGh3CRGSr0x%2BIxUAVDE%2B%2ByxtPkbLunP0UWuaEeW39wm5PJCX5k7C31%2FKPJeISharTeUFVTughf3x4zF9cP8XMXpcN4l%2BjInEVfqyrMCz3RDc5wIV8vfXZu7V856RmvAmMSh3XyUTzs2G9t2ufDOAgTzCEqohsHo%2FFTphVkg0RRN%2FSP1KuiRxLZJ1I1y2bs7GAcSyMjiLLbnww5v96JKCmJZqL8AriWO&X-Amz-Signature=3743724b6ec6baaae314470e0de94c49d4d06481a33fade1d47a424b93145509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

