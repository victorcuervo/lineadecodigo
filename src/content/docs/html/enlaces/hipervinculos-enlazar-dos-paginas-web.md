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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPFUNBTY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQD2WnK7A3o%2BJsRHu%2BOzXzGbDFcxDiiBT7sLhIwCoPpnQwIhAMvHTerZxUrN9gmuipD%2Fg2i6er80h7j%2Bt2WG5dwWcKzrKv8DCD8QABoMNjM3NDIzMTgzODA1IgxANcFK4zpJdmPJDSYq3AO3ZrVinpiCWfOWrH8VY6T88zv3KfPx4FEmsjURJITck6tqb%2F0TYSGMeYIIYdwlRfnGT42fIRe4P1ErOsq1wpoWu1RYC9rb1w5RyBg%2FxQOhj38D2%2FlH76rnT0KcVQz9Vk3Fzk5cFSRpzof5WzICYSgMkTrG%2BMtfP20fR%2BhYHr3SuyxVaO%2F0SRiIspoYMUQ9cid6z7Y6PSFXJNxu3NrulgExaamvo3hLFaZNea%2BrzQPfXe7jXaJ47SyOLi6zODxcdci2rwxPvPg60lGHo8L6eWs5iALs%2FphzN%2BtZrPU1%2FsDe92o5umXWWFwLU9umQ5%2BYkgYT%2F6RyMcCJ8fRzyR7nCCycFbXDFZNj8G9S95%2FVi5C6UeOSXE2z6V%2BtZNtyJtGN1e%2BNXAteVty%2FnsgwF7pU8BJLYHZR72pCpdKNUHB9ky6MFm1zfMyhbQMY%2Bjc1JgLJ9xRQ%2BjCslfoJvm9rBaFyNLqoyxnGQKC6cWmVNzxmxayqcE3nAkaHILnZQNusUKt1mgzq7FmtIbd35o1%2FBCzRj%2Fjuewtj%2Fw9qTiUrNBUsxQlbSF2Je9F6Vw1LrpFmmDEgoU%2F8P6NKkKC0qETCDgv4InqSSHLgBQfsGmDOn5D0ddrmDP4tOG2Y3F3FbIpO9DCCy8TJBjqkATduqgPuRVqviNf8MLudqcWsLUPyxr%2BgGGLZwZuXjpCDF8oxcCGzgH6fvlGSjVgLNDEFOXNXborAqN8O94z0WTeShMDnBzId9CVWs57jbZkT90rsYldjm%2BoNlNXRrQjZ%2BDohiAXm4CNrOnlCQnDZZ9RjfdJ2Uvj8oaMJSSA8IdOvfoqSD0xHt3D9814P%2FshUXrbFT2zktVU1WfqUR1YlERsEm5Pm&X-Amz-Signature=1afff33625fed0526ee3e7bb7f946adb89c38447abf689113b3e8fdd406e45a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

