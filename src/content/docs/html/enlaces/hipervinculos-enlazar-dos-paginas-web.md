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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCHQG4BH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0xTX2KELYpxuxsURWyMT%2FE8dP%2Fh6aGpSxFv25gHHaFgIgXO2JpLNYlurbMSRpvH5JSmHjVaAuShmuDh9G0csSv74q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDG4EMytFU7iaHd5nPircA6jk0OlDSKJ0Rn2rPoypFC%2B6qB0ggzy0ACEVLgMNAraxvy7OQXN6R8ElCyGK1wxOTTy1V7AGEgfqMSwbjHNQPo75y2Lgtt%2FJWbrS3YxYJqWjNxX4qopWSkyoVLBUHJLGgtiZlHUCkaDbN14GdDQpE4rojHWud51Y5iuQSaIHo3h2idXVTArzo6zv779HJRaGrL56cBGPWQ2zdXMAywSFS%2FVgSdBGhRGm7uLiNItpPdS1biSQQKb0bEXOX7e9%2FH9RkJP4OaYNaT2cMOWd%2Bngyiir%2BmmIDdHV1SJ3CFoRxwRSHchTB8BDXr0kUQ8%2B0e51iTWtQTJj8Vs%2BW1EiIV6MNdDaEE17tN0Fg5D%2Banm1eRu4xSQT4uT6rJI2VswT1TKaa9xygEdgHeVI8KUdYu%2BAmA3BVo5noRXlGpQD2wiAMQdZ%2Bkc%2BLZPXmDIGgJpBpnRIM9ZMvEUrHR%2B8QrbYkkxpmjJ2zcTlrAwlwc50dA3%2FfsHMWzUWf9VvJ9YgKsJ3CpxfkyWRrDosr%2FxuT41QD6FpiH%2Bly4HdJVXkjmza5Tg59HNRkz%2Fl0P4gzg4YZmaUbHn8NqdxiHvGBcQ9AFMbziar50cz9OIZRdfFZ0so0TLvIMOo8DjTPva6WCzkbotylMKbOyskGOqUBwv5d75oos6xkHfYIjtTkkwL91puvYShS7WyxaNiP8fZ0Mu9R4DD63tJIdEu%2B%2BHIWFvWTlmLynIDyCke8AKkd6MyMdOBNn8V%2FOWZMJuVb2d0ub6%2FVGwrDqMd1wRJrsSpBYIy8I3irJHe5XZ3qgwzMYn%2FZFzbkg2pR6hXOGQ3sCUHhgtJjFZFaILnbmvH5fZhMoI%2B3Yxe8MyRZSeGDqXrRoWa%2FfMqu&X-Amz-Signature=692412206c04669780f749dab81e5b8b49120db5bf95a70410e4fd22ae632d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

