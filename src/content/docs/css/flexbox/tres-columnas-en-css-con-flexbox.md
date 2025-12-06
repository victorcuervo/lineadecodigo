---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAMEB2LU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFxfW14%2BaxqIfLJIJ0JCKxQ%2BRt95cNKlVPBas8dM4W6QIhALHEGrNI0CjEfQnHMFjh7jZ8mPBJRrfPy%2B8kkJetHASqKv8DCHUQABoMNjM3NDIzMTgzODA1IgxWWZhfU8GL8ZXYHWoq3ANUFtY8Sj51hTigbYVO7OSz7oeAsLMJwLhFWfrnM%2BwgYDIpz%2BlqPL5sr%2FDbKklQevVizklA9TTsZMnPp%2Ba2IT0v68lCSjy4BX80UJP%2FBtCDsOnwGdLE1OyGfcYT9utF9l6QbPfgpw4qf44GghKDNyxSnPJ9Cie%2FLH6N2PmJFdi1DaUjB43xhyppKR1M%2FuJF6vbuiYzCgAmKNjn%2F9%2Fj8iLX2l85vMJ2jkx5rvX%2FYLYeJa6fTb6Yb1tm1j1y0Wua3OS63NmybMjw%2F6LBHN%2B10ztmJn6BIKHKv5a0%2FeiYFN3RKj3UEG2YENhIwhftPe8PBWQ642jYK5ZMVmOr41kOXZQIa8SsW8lFDCxiSWrXQgWTOe8UXskGudmeTWNupB3DSbtSW1elB8O70JeEHKwmbbxBwJ5uIgmUCNScnfNC8gufKj9R2jzjbGa1DfhBlBdPkf9ZvU%2F4xTLWgyj4pLOM3mM8SisDbzebnHEJmv0phlB2SK2wjikqLyXPgBxDBeUtXvJtg%2BIxAcp3YomP9oRgpgHOawLHSLS6mnVbrFVbIFBANbjotzFnJik%2B3BEHugquYLqDHbB7nplCmyCnrPAEkq36iHTZdyEj15uRplPFyVMqJGqB5wTBG0nPzQyQtnTDqptDJBjqkAd3hD950rxX%2FMVwU1QZLJ9m%2FFfdGuJeI%2BR48wYKRI4ukEsZPwBXMc%2B5acePpwz06Bmw8mcl%2BOHkEkMp5rKcWny17MrYqrgf6rX5n0sJqjY2oMd1E3yK8xVSbHLvNbjPN2FQ3ldoilJDXfM2zDpK8na6%2F39mHkzl3nW7wSeKDmzN%2FAWdGbg9tCbVxKHNDu24pLY3IQrI6ZOFw8iSDNMA5yazSw61A&X-Amz-Signature=7f92da76d87cc8231994c6ba5a1fe6558f249c91fbe349f2ccc20c2878d14ec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAMEB2LU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFxfW14%2BaxqIfLJIJ0JCKxQ%2BRt95cNKlVPBas8dM4W6QIhALHEGrNI0CjEfQnHMFjh7jZ8mPBJRrfPy%2B8kkJetHASqKv8DCHUQABoMNjM3NDIzMTgzODA1IgxWWZhfU8GL8ZXYHWoq3ANUFtY8Sj51hTigbYVO7OSz7oeAsLMJwLhFWfrnM%2BwgYDIpz%2BlqPL5sr%2FDbKklQevVizklA9TTsZMnPp%2Ba2IT0v68lCSjy4BX80UJP%2FBtCDsOnwGdLE1OyGfcYT9utF9l6QbPfgpw4qf44GghKDNyxSnPJ9Cie%2FLH6N2PmJFdi1DaUjB43xhyppKR1M%2FuJF6vbuiYzCgAmKNjn%2F9%2Fj8iLX2l85vMJ2jkx5rvX%2FYLYeJa6fTb6Yb1tm1j1y0Wua3OS63NmybMjw%2F6LBHN%2B10ztmJn6BIKHKv5a0%2FeiYFN3RKj3UEG2YENhIwhftPe8PBWQ642jYK5ZMVmOr41kOXZQIa8SsW8lFDCxiSWrXQgWTOe8UXskGudmeTWNupB3DSbtSW1elB8O70JeEHKwmbbxBwJ5uIgmUCNScnfNC8gufKj9R2jzjbGa1DfhBlBdPkf9ZvU%2F4xTLWgyj4pLOM3mM8SisDbzebnHEJmv0phlB2SK2wjikqLyXPgBxDBeUtXvJtg%2BIxAcp3YomP9oRgpgHOawLHSLS6mnVbrFVbIFBANbjotzFnJik%2B3BEHugquYLqDHbB7nplCmyCnrPAEkq36iHTZdyEj15uRplPFyVMqJGqB5wTBG0nPzQyQtnTDqptDJBjqkAd3hD950rxX%2FMVwU1QZLJ9m%2FFfdGuJeI%2BR48wYKRI4ukEsZPwBXMc%2B5acePpwz06Bmw8mcl%2BOHkEkMp5rKcWny17MrYqrgf6rX5n0sJqjY2oMd1E3yK8xVSbHLvNbjPN2FQ3ldoilJDXfM2zDpK8na6%2F39mHkzl3nW7wSeKDmzN%2FAWdGbg9tCbVxKHNDu24pLY3IQrI6ZOFw8iSDNMA5yazSw61A&X-Amz-Signature=f365b63c994272fc4b8795f83325ee12971628ca38b263205155a3478cea277e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

