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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654LLHUGE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T234958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAl9k%2BEa9%2FxG4KKZukn2zuFcyyCzQu6nuQ%2FS41KiaGXgIgEX1Cg8Y54Vmr1lY6X3y6FzH1XIwSwNpL7v4HO2E2Oi0qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0C5W3lHEgYjNlbJCrcAzpv3MRF1kaJl6MJc%2BKVLCffmgJUgTuDGN6yyaTqkxnKX6OKzKBygxTwP%2BL0DhespTh1%2FvwYEdAwb%2Bfe2CFABhUiu5c6K6Bng97JHfVRmcXYfMDG%2FfRgklQIslpsdyNMtSwZ4wADiWt19qTVvgiIhewW8v1ftrmcOVK6YN0dN5UulXINi2P3orMO8hoDfTb8dvhjMp4TwSJvawC9g1fr7GOXjhvvfMSy9SEStnPfpbI5fN6eE5h486CcnPmojxPw8tYvEEGczGvEF1BXWkWIm5Kq0RQ0dpyiRfXjeHq25vT5pKpOi4MHLlPB85C6IaTM6XdSFgekJha1rZOuUsCSjSl2SXTA3w2SA0RlHWhxLHrwhiivyr3fSnjdAOGNzHp1o3lreTE9WGiX2DseuT%2BKPsNkJowZQ%2F9vOHVSufFqkgBL%2BD4tLcwMTGcpVtYNr4bOKXukssZBQhZWrY0RA%2F%2BHjRfL1dU6C%2Bh866oxmPdHRS5NU0wt6e6S5611FdZcR7H3kCtOzwiOQoeVDBn5XOj%2BGPFAXloUMd%2B9RDe5QeRLoB9l1qHs1qYNZXsN38m1u974D%2BRR4F2JCAJdevY1q%2FB2qJgTbW3pb5glxg8XxI70mdKW784pmB87V%2FnUK9ZOMLrD4skGOqUBvazRHFZULYJ2JTcSit3ZJsmAcLiMwU2is8D%2FTUgS4fjyZB%2BvM8pj0kikh0AZvlg6mUf8atNNbyBurEYM3m3eTm6wqMyjd6veYaBkPMYsGAs7kun4Ty4iX4yWD48Kf5g%2BjxUshe%2BRPZIhzGpsBibUEKWOLKImEvljeT%2BH3os6YjUraUgxsli0OOahebLQZWVK0zjJK4cJdCSPn6B2OiEO4VCbjQOi&X-Amz-Signature=c30d707d817da096beb039337da67ff63d06d6f98b9b40d82b1653c04cbc7381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

