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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL7ERCUO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T130608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCONDqqWUeul9R89w%2F6lT3t8KvB7viF6IfZDx%2BfHknTUgIgKJ24NYpzurOFz1iZapgZlYVn65afErbxbQDj1L%2FN6q4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDNmQ5ZXyk%2FMOHxM0PSrcAwlT%2Bgo9hXMriT5F1evVH3gy2Nb8v7GuXI4TYA7%2B%2FFq2%2FXDrx9ry9OjjWee73OF4FTS%2FUlhLEwqHcv%2FDdyzhUpy0fWM89nGlomfoq%2BkROV47sKcLhJgcS2mpF0xC7Nu13XoJ2ny4AH%2FiJKAW7Z%2FuloSZE0lztFxEqiQhgZzCgeP0sKA0LDPIOuEf6Y1l74ElZzR%2F7tPezqU3M3E%2BI7PhU2bjKAdXkkPO5NzQCxiL1WmVeLIFq%2FZ%2Fnb5Y0z64Wlx8kQYL3E1WvMN28qmj%2F1ftzjlOZdIidQ0xnPsJGXOow3E3DKfYjvvGt3pXqHdr64218Kv5KNtkLC%2BhmQFqsb3dp3W4InIUgJIB4nAyJtuj%2BY%2BSFlDf0qwjz0uHV1Al%2BwapbFt8kqv2In2giP8AVIuuZcbAm77pO%2FAyPsVvPv9sjgkmcSlW0icNtIVbyK86yL2nYSql7cUrv1Ywiq7hNcoeWftTX7afxSmbboNj0tyaC4y8CcgUmbK0gClH%2FgHOivDeyZod5o16oo86FrAxqiRX%2BtU7mxI2voUTpz6aymVoIhRvA2chqOXv5WaoEXEwdOikVzZXArRLEmu3LoPNigi6BJn8SNYOvk6nH%2FBtNUAINagST1XnMdPjv2W3K5idMNLAyskGOqUBC89MWO0%2ByPDjNGJKc5KjvUJeb815vXgtD8BfjSC5p5bkJcoR0bSGLmYuqFDZFd1q0YeVV8NZ%2FtvN7b9ME7jSyTQgQm7OgCJtNoUqRAd7B65QA1WaqYBhZ4EJCjKHIN2gFxXkemoEikm7KtViUEeb0E17w7y2wOphww61Tqa%2F1pWIKWpEfVaaACtDfxinHGO1A7AwGEP0RBfXP8POS15TM8X1Dpoi&X-Amz-Signature=c50a353d03a23d40300828d8c4f3a4f5c0a87a779ae9b09f8e4ae17613fffabd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

