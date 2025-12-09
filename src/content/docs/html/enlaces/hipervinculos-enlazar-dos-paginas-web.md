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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARKBKZ2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T160114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrv0YqTtqpeNaw32mF%2F7wHn6RcIq%2FmoUWYTBYP%2Bd%2Bk5QIgMPBq9GpPj75MwnGUJPEZbERSqQI9yIjWnQA%2Bho8j1GMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdjsQByeqmIh2OZ9CrcA0SReXr4gOIv5gPQ1J7nFbER%2B8yl4UGYWDoHiRlreK7Tw1eE1HBJSsffCEnYd5UU3G%2BRDkYITkfRdMU744m%2FwDEUUC%2FQ4OtoQVUZXWiIjlr7aRPtufQGscEIE26IMFomZAZP3dZo3hQs6CuvfR4jvFBhS6LfjFiymdEOzMFErz4iC1IWWfASl3l1BVRiUpJWjSLl4E7yEDDgDUSmIdGHvXgc5EkhFVqSyuJcuF6XgDojUiIAsD1c1lrTmTzZ2sUFESXIs4YpHrOjRcFxexKay7nMd9wCvqJNvS%2FNEcoZH673FNlYW1Mt6%2F1J90WsmtAUiIemgaAqPHbxWxtxK2GYNXN2SCYXEKQ%2FCH04j14TDndsu8%2Fgj7wTNCVNMOwjyi8NC4pNplSSS0Udm%2BcDpIOEWpHkRyxD7GZZ3%2B%2BwHauE3T4fkcHGNS95aslJX0ZsCO3yvfVEcM7i9FXRF6dC33i26uqeKDhWymiTGy7JBikEooyc6XwZql9Q3bL1nZ%2FtvlF5nDpWXEzEJ3t97IQVrzzV51Uw6Fr4ibc%2BXhSq1WdNktv98da1vPl6PSYgJaL1Z8y%2FeufaCFt0Sf%2FoDWr7%2F82L6YAxsq02%2Fnk%2Bl3YfHMbfFme02rZL%2FmsWmDdrBZeUMN%2Fc4MkGOqUBLlJoNuxs38ioRlarV12oOpnlddyf9pM1RKKTLZFcXT6NrkAQ8d0ier%2BpzmsXL0ksfo5CataNYGh8dxt2XbVe9Dfee%2Fxw9HQQzR7sVohAvSGysirbXcvvEO%2BQiLXQ0en54imsK1XrnrFFTqKDMeozGO%2BYYM1pUDZGVd76YEURwjJqi6gbEMPG4ZPYaTutiC72YNVe2LKsTAlqjsZFOr8qXaLrsLbf&X-Amz-Signature=a984daa99276271981cd820be03b70e5c1ab9a798d7319b28bd7adbf6be6562d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

