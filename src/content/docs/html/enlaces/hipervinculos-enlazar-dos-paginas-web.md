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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52ECZJK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICst41XL69tzw3IY%2FdncqqDhIHP%2BJ4h%2FJPKHsMn%2BEUvxAiBldTeTng7P%2FYEd53o0PbKEs974KnLOww87rBLt9R67BSqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Fu6am4yaF0SNaNsKtwDlnxcVshMxWxdyh87NRYVm6o3RdDcqUEuUgiIVdrm2gH4du3F6bkKwuxlT0seXZgwUGSTt0%2BtjFX5fRXQBpTlwu3Z8SQxCuLiPlPyfNSe%2F9XrX9z1he8c85vUmA5Qzx%2FaKUxyWWulYuLe6aM2rQ9bUdeYXxZ%2B%2BrLJKqQt5Ka7oH3irjup4to1xVZx%2FHrEBbxZRBodVMdWJPUZNdsj6BjnsAwVcGoZKPVBEYPVecPYN5Ybp8UyOnFEkk88myLepK%2BguHePjRMK8Dt6KikqsNLz%2FAPyqAdhmiKwNwGMsue3okP0n%2BjNvWV7FbK4LypyvXOVvyhur8YnHOHzqhvnICxdEEF59pYisrqSZtj%2Brz9pBOaKCo46kVCSItFLNmZjpAt7%2BNGyR8MiyYt6R9fr%2BX7IW2XfXm35vHDex6wf28zzZyjXH7kGoDwFottVGMp34HmLVFoK6lhtg%2FngBUAk5lLzsj0IWy8pR5ZBJ9f%2B01yiwnroYGqisHHlNCJsXNu1Dleua4mI0LFUXul2wmTb1a3zkaTDxVIwKn%2BzEpuuVUe8Nm%2Bk4BbkWk2JL%2FDfuaI88%2BCLRlBROkrWGAip%2Fbk2NIBRzpB4AmMPiA0eDN18pcAA1yXB%2FiWUfa5Ni23LY7YwrIXYyQY6pgF%2BFRsx2PfVv25tEGqmYqQkzJDGQJmytrhObtUGwiCrFt45Yl7Id6ZIMkHOb8oxhXbr9hHiichQvT3w0Y9DjKIa6IgFqv5E9nZU6IhlelX90TOA1P1XN79RfBYkNT2AkdzQf0TqCBTotj1iVSx0W3HP%2FedIrRb1g1PnEkQ2JtNj97LZTNVw9i4IJp7BMVej3U01u5CgILjtbgG4N%2FYlgbW5g%2BrfguGE&X-Amz-Signature=fe29ec3545e696c65c728500f603977b7f6d7b73be5233633e97a3f9b3241cc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

