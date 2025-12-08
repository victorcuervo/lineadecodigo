---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCBR55OZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdag9iijhCizzBRymQBMedjmdhDYq8UNfJ9ZZbI40MQQIgYTVUG%2FZl0dCr%2F8kyj3wbGxRCPQAaZ%2FKV1s47gKFy1ysqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN68OwWWUbMT5vf6SircA2%2B7fU0sqgjCTsMV%2F9frESwAO8iaZNM9ypZgmE1g57X%2Bv5MTH7t0CzbP8JyYMOSaO6tkbt%2FALRnuzLvlcUL85Lbox%2BMEamY6GpoLZo6ZlU8kAxkS9qslaggITD%2Blbwz2P%2F4Ij%2F99nXaDL3Ci6O4y54HAwj%2F7sSFnRcOGp5z%2BL7fqhxZh6x%2B6gDNew89Tm7N0dFRzTz4%2BUaVYOO5oF8MF2UB5SlBxNuV6rqhrglD3n3nEiN%2FN%2FYeHYgLaJYIxJrNYH6zME8I6qGkmQ%2B38YTJmuV%2FF8sbfCmNKxWHSW6rLn8XFwYK2YCL8IN1mbZN%2BAHujyEuEUf7lz7LyzWuhTLabKNE20qQDAbmJpmPx7bFbwP53rUCjiBelAR0OQWiYRK4d2DM8VWEpv0MCmA%2FevjoC%2FTzwbavQ2AZiMWbxHmkjD11DA4H5pBc%2FKoXA8l2mXa%2BmZfa9bypMbh9SspSy2nogIaB5lLCT1C9cfUB4KvKpb%2BtuDbij2EytN1z0cjG%2Bmf%2BnWKnm%2BH5xGp%2BKZZNm7JkRnX2nkipEtBIxo6gU%2F9%2B%2FzEHlukK351Qz3WVCp4JahS%2BrjKLyCBqpNqtaASFY1j57A8lkYTZsRlbktIi9vnm7tLZXh%2FOy03%2FnYuogvcuyMI7B28kGOqUBrEqYxOaMRD1SsoSSl0OUgFW2FuZGzpskrYIW%2BID8APqo9YREkAt84BvKhXnttI47M4ADDHtgag%2Fu%2FgXPBA1ZA8%2B2YAPsNDK2rBkIffHnBP1gcfYoBt1SGti0CEjjFpq3es%2FnngbwaMzHjamdZQX9%2BhhU2vmHf%2BgtUzqYp88uAaIkYme8UbSJmTevbi9%2B0m%2BnctVyXWLY7cqRjXI1PyQYBz7OM5RT&X-Amz-Signature=49fea6df0e486d7a40454cf8be2c0441bde8f32e83ada547b09d6870713fcdf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCBR55OZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdag9iijhCizzBRymQBMedjmdhDYq8UNfJ9ZZbI40MQQIgYTVUG%2FZl0dCr%2F8kyj3wbGxRCPQAaZ%2FKV1s47gKFy1ysqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN68OwWWUbMT5vf6SircA2%2B7fU0sqgjCTsMV%2F9frESwAO8iaZNM9ypZgmE1g57X%2Bv5MTH7t0CzbP8JyYMOSaO6tkbt%2FALRnuzLvlcUL85Lbox%2BMEamY6GpoLZo6ZlU8kAxkS9qslaggITD%2Blbwz2P%2F4Ij%2F99nXaDL3Ci6O4y54HAwj%2F7sSFnRcOGp5z%2BL7fqhxZh6x%2B6gDNew89Tm7N0dFRzTz4%2BUaVYOO5oF8MF2UB5SlBxNuV6rqhrglD3n3nEiN%2FN%2FYeHYgLaJYIxJrNYH6zME8I6qGkmQ%2B38YTJmuV%2FF8sbfCmNKxWHSW6rLn8XFwYK2YCL8IN1mbZN%2BAHujyEuEUf7lz7LyzWuhTLabKNE20qQDAbmJpmPx7bFbwP53rUCjiBelAR0OQWiYRK4d2DM8VWEpv0MCmA%2FevjoC%2FTzwbavQ2AZiMWbxHmkjD11DA4H5pBc%2FKoXA8l2mXa%2BmZfa9bypMbh9SspSy2nogIaB5lLCT1C9cfUB4KvKpb%2BtuDbij2EytN1z0cjG%2Bmf%2BnWKnm%2BH5xGp%2BKZZNm7JkRnX2nkipEtBIxo6gU%2F9%2B%2FzEHlukK351Qz3WVCp4JahS%2BrjKLyCBqpNqtaASFY1j57A8lkYTZsRlbktIi9vnm7tLZXh%2FOy03%2FnYuogvcuyMI7B28kGOqUBrEqYxOaMRD1SsoSSl0OUgFW2FuZGzpskrYIW%2BID8APqo9YREkAt84BvKhXnttI47M4ADDHtgag%2Fu%2FgXPBA1ZA8%2B2YAPsNDK2rBkIffHnBP1gcfYoBt1SGti0CEjjFpq3es%2FnngbwaMzHjamdZQX9%2BhhU2vmHf%2BgtUzqYp88uAaIkYme8UbSJmTevbi9%2B0m%2BnctVyXWLY7cqRjXI1PyQYBz7OM5RT&X-Amz-Signature=972a9d6f92ed4b178cc04384deb1e13fdccc26b81a37d0019e5d14f683c11d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

