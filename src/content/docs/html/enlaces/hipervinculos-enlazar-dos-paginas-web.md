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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVKITSUA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTrlryp9BxWdd2IqFnAUw8UBYZJOw6W7yMCU4G9Nx1pQIgCiSC9XO6JG%2Faj3vN%2FfA%2FXpE3RH53Awl6MuXSECmZ2fUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDALFIrwbr8LtKREFoSrcA0v2LkfwHwYZnYUXaKI6R%2BnNeS5MPrT5EaXjhooG2uq6zdJxDbhrgr9BzIJ0zXTyy43bw3hSOnO0jTEZGWSwVjPLBE%2B0rUwxrQFnniaPuhaLW5IYV%2F6reKQyJZk%2FydZonD5BkFsr5qlkJ9GpyCDUriZ95DnUlyTiWOXO6DYXK%2FVJKyh5aZKzcK%2FZV76e9Sk04iv9SZnCRauFO4b9v56mkGOzocbRyWvmIK2xoPnMH1Benve8u4V0YLg3JQbULa%2FnoC90rR0sCQ8sQjissqYGAQk75yY1TETf0EtVW1mjXN2K0XJ6iNwUBsJ%2BQlLcUg2sMnIOVci7%2BE6spbR1v%2F7Y4snkuqF2DkJK1WFy2MZkwvCvE87bD2mAs3a5DTMdS7t0sKTFyHuP0HTujPHoffDZyoanIC083vuXs%2BMRKqOk1KleiZl8F%2B4ftomTGkzuWTYLaAuppwopRxfbAYLYIwJYKEqS1EQHgDllZrinhTfSTNIK9YhQYwOidNaZRfgKU9bVaSvRec4AKS2yTP6JEVmdItO4lgEY1sH0XVBJn0cHYfqW2jVJ1nckrv6QAuz2GTjA%2FKpZ4jmWUpvKXKMqBzXJ68i3Etx3VDxE9Du1MuIDlEjgMzPpUOp9SsWaiiBNMIDezskGOqUB0fMB%2FhAOy5SC0Pf4lTYD8B%2FC%2BsnjKZlo7jOJuE9NY9TnIBHjJxTF%2Fyd3D5BjbnwF1ZrQmv7A0zQmwHDnd8caa%2Bmek3wsSh2s5yOw4mU82fg7jk6RWgEie7LgXxMTty2XCdAYi5URr%2FL1pPEAbj3RaXyzK96mLQLS12IC1ZnWVauy6ttbGggGcyUIeKCeb8G2FR4K2bN7s%2FsgUXWymwturLX2Vmv2&X-Amz-Signature=e8fb244b05cc985ea6c2a94bfaf641ef1626f9b106b2a3cec8ee840d302fa290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

