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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7PBSC6U%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwEJVYyIgXqh89JUqh6symHPWaxZegxE9tn%2B09YBI%2BJAiBvqNpp41TRlCwnb4%2FoE4jGCfEdIs2n1JRSdBt9Lyho1CqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsUwgPANgTVIShhJ2KtwDB6Ugpcx0Ze68dfTMYKsBO2Pow9smdhW8iNc3fHaptBrl88x6fwJ0CMt2lClj2OZLtGXQoiFLcWAMvaZPYskH%2FKgedMZ4k95xvFz1bWUVJ1qdkWp8RYg3syKzWTsa%2BOjhQGWWQEVs8zq7AONvcxd9NE56zwIp2p7fxNz7qwa3rIk7AUH1Glvdl6DmSQkT4sZ4tO2sWdsjJgypJc2Kjxw6ciNHTatCNZliMx%2FbAD8IJfvOIBM7nI3da0NNlPwaNppy%2FgfOxUsDuXlQnKR68yh4f6xuxwLSFNv%2BuTXScFUVDs1dbyFT1QAB7e5WRa4Wqketw9gNKwWv1Hh3AD4%2FtdrhiF69ilsER2KHjlXjbs3aaiBjsG3btBPIEfN%2F40wRJjEHptmNRzn%2BA3Q2%2BtiiOZa82en%2FzmRRf%2BmJ0epfi9mlExEDfWn%2FpJBmOHnhE28kC2lCrVuyMpIr2NBm8gKNXtuTPfmyBbVXb2LZoN%2F3svdtJhrX4oqZdnodicl4K6DR766CZo5iQraom8iYYskkSHMutr7sO2tbaLe0F21kotihX1G%2BUL8WRLKaNEqVGR2lv5W29n79iB5o9WbaNjVl%2Fk7JrXS5vQ1sq5Uqm%2FpXwJDtYxiXl6jdU5BPelJNzbswh8PdyQY6pgG4Uu7rRJxF4lA%2F9SocRxt7RKa78vOtvfTnn74Ta0OJka7jRPUCLIdqoBMYyDiBvN2KEEXb6l6jvvlkZqOH0XVD5bvZo2dhxSiFjrnrxF9u9oameoaNzLCu23kcGSZ7rDqsL2WLDrNyXbYUSr33D2RMcIJJImOcBhCm4EFXdluI%2Fo%2BZ5FisHCgtWmcq3ABRIYySqJvMYzNM6VhOT%2FAsiSREGlAthvuC&X-Amz-Signature=80c30c119d83413b834ce8b8d4608dd40e1f1e8fb7ea97b02ea7d0c948fa689c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

