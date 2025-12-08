---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ZDTINZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T110054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg9ns0HITyvkqi4ZqQvGAOHncU9AnNMkM71hoDaaRVaAIhALiWneciiAt52brrgpvw8e7Y20el6lZdj4xVlJaDQCpnKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXPfCw%2BiOb%2FtU4%2F4Iq3AOUeP%2FXkrWzEbTUBh6Zl7uRhma2UOTX1ZwEaRbwjBh2bOa6KiSq5ecC9X%2B5M1pEzi5x2mkA8XOkjDJ2%2Fs1AQIthvKlfXDYj%2FRpK%2BEOqWxjb45I80ItjAdoGUw0wlpLgPBlYEQ3mR%2Ft8G9hE%2B63J376Vsh9XIfzGjCuCbcnN%2FQpheI11ZI%2BXBAtHPV%2BIyfxTpArwM%2BTmeEGrZgOqu8WW1MNTWAtxbOXJZAwHNxEOFgb1yKfrCyuMIJN%2ButjfxqcwscCxYq7J%2BG8b293mXG2b7EfdyKtHxq33hszAt6AlJWraPBTNHnw6cHWIEbdy9YCkLr43DTixlqjURsbGV7LsuNWLIa81HezVKVFybEO1r7GwwLpOlGftcX11TrTwLHnv0c%2FQSiXjLl%2FqUftn0OaptBw4BeqReZyxDEo5%2BAvmnFuyPozcD%2BYI3fTqsJfn7dVlEoBFty6BUSI3NzP2UIqcZPbDTiLAcy%2FOV15P%2BztsJPyZ%2BPN77pp6XVpg%2BdMI1xzGMpNcHFClhA7W1blrnfObm0QiXTA2%2F7%2Fmxb5Ibfo4jJsqSydXfazU4LKnm7bSNQCD9%2BaDZRAjUt3ZqGQ5nWKhgvZRnGx0MPwhoQC%2BgPA65uFPg5IF72RBHE7PvPzYhDD17dnJBjqkAWQmqF1wUCBcOCR4NKMgODYk%2Bh%2F8Kp2zYHtOOCXmXXaUlZt72O7zsAoWhbhuX2jZ12G%2FMcK2SNEyjzmpx2JMKbt9Qrt6hxlihbkuCAsEuXwI1%2FHegFvzMd2tKXY7ShYoPNetr%2BwBeUoD0mi1aIWFoaZLSFe39xoF8gZX4p7E7sEWmnOizJGbQIfRTGktD1u2NsRP9nBGxFxwQLWPmv9A3GXosxUW&X-Amz-Signature=015fc54495d0f7f4e7eb9700582c3d739edf9d0b761cb37c7bdf4940259b7b45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ZDTINZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T110054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg9ns0HITyvkqi4ZqQvGAOHncU9AnNMkM71hoDaaRVaAIhALiWneciiAt52brrgpvw8e7Y20el6lZdj4xVlJaDQCpnKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXPfCw%2BiOb%2FtU4%2F4Iq3AOUeP%2FXkrWzEbTUBh6Zl7uRhma2UOTX1ZwEaRbwjBh2bOa6KiSq5ecC9X%2B5M1pEzi5x2mkA8XOkjDJ2%2Fs1AQIthvKlfXDYj%2FRpK%2BEOqWxjb45I80ItjAdoGUw0wlpLgPBlYEQ3mR%2Ft8G9hE%2B63J376Vsh9XIfzGjCuCbcnN%2FQpheI11ZI%2BXBAtHPV%2BIyfxTpArwM%2BTmeEGrZgOqu8WW1MNTWAtxbOXJZAwHNxEOFgb1yKfrCyuMIJN%2ButjfxqcwscCxYq7J%2BG8b293mXG2b7EfdyKtHxq33hszAt6AlJWraPBTNHnw6cHWIEbdy9YCkLr43DTixlqjURsbGV7LsuNWLIa81HezVKVFybEO1r7GwwLpOlGftcX11TrTwLHnv0c%2FQSiXjLl%2FqUftn0OaptBw4BeqReZyxDEo5%2BAvmnFuyPozcD%2BYI3fTqsJfn7dVlEoBFty6BUSI3NzP2UIqcZPbDTiLAcy%2FOV15P%2BztsJPyZ%2BPN77pp6XVpg%2BdMI1xzGMpNcHFClhA7W1blrnfObm0QiXTA2%2F7%2Fmxb5Ibfo4jJsqSydXfazU4LKnm7bSNQCD9%2BaDZRAjUt3ZqGQ5nWKhgvZRnGx0MPwhoQC%2BgPA65uFPg5IF72RBHE7PvPzYhDD17dnJBjqkAWQmqF1wUCBcOCR4NKMgODYk%2Bh%2F8Kp2zYHtOOCXmXXaUlZt72O7zsAoWhbhuX2jZ12G%2FMcK2SNEyjzmpx2JMKbt9Qrt6hxlihbkuCAsEuXwI1%2FHegFvzMd2tKXY7ShYoPNetr%2BwBeUoD0mi1aIWFoaZLSFe39xoF8gZX4p7E7sEWmnOizJGbQIfRTGktD1u2NsRP9nBGxFxwQLWPmv9A3GXosxUW&X-Amz-Signature=b8d8defb4e5c675f688f0fcc3555be38005c7d3fbdba69eb48a61272c3e80a80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

