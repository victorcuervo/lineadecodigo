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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4YLBEW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE42L%2BiVgDd%2FdyuVUS%2FwWQYDKS8iifDeUjLWqtwFi%2BUxAiAuWZZFzJv2KGWSAeC%2Bj7aqdg%2FpCaoiG9dOsgNKNme8pyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx%2BPEfoDPT0LsCpXoKtwDtWMJ%2FdPPytbAuBRTDLdOTPR73zu7u%2FfcOA5bIKi1E8i7t0OgJJnWNy4imBxKfoYE9MtvPcfUGSs7%2FDwF12x%2Fz6xCV6lRX7V9VqR62DFzTgn4EYel%2BqSre0FGt9tvJWGDuw8bnABBv0bkiHOvQSgKKC%2F5ApLFQzDrorDfd7ggASZdLh51BlDc%2FjUmJJ8plRsdVi3FwnlXlJitDTI5N%2FV1QtHP9kmL3bvszjMAEDsFMaEOPcffupkwSSbLHS%2FY4TquwTvcHckIKkW4C166D3DI9%2BsVUi0MA7IAlDhSXKL3ycQtXKGPSM%2FnEBZyJSSbCwYbGGVMFj7ct0vxBfugndAfVGu6vMgFb2OttkWNvYVXnRd%2FPKB5vf3Knp%2F2r%2FhqUelbEKjP3CP1yxbKd4Id5RZE8j1CXHzQOUzDYlUfC7ezlwQfZ%2BaiM3Sza3sKbND4VLeGp4rknzvpEdC034RLWXFYuNXJb0kFtsNa48hODYyZIvFRbH98NM7rBNa8KZayRrjZskSeE3eyYCMX9nn8GHzQiJRnMRSJwBqeV1LsVeJF6EiloziTcHuz%2BE82qnHRsIJYwmQ3xK6rBYWVKmt5vHaqhMCiW0eAcFp8RogkQSLoJri%2FCfF1aOGwgIEgrQswl8LbyQY6pgHczc3gANBrP3Hjt2Xql77jE%2B43pXbXf5Hwjm%2F9yJ%2BmmHtRydjcEH0aXBm7vuvup7Cn9tbeC1B1vbKJMPnHjdA8s4kJtXwYBdaB8gXMPrVTNGA2h02wHWqaLdTES7XuKIHgjOuJz3jbjrDLX7bh7VEibAhZyW6XiSxT515e5shZ799esDAtDbphggxozDInlKgC5BD9FiUp1Dm6KAl6%2B2lTvVbGnZ6F&X-Amz-Signature=b6542d6818e06a2c51b7c72af7e2bb6659d48a9d92e60305ba73f506cf2ef724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

