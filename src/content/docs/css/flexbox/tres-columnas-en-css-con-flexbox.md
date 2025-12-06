---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMYWZFHJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWLxXZDHDLf1zV0hksb4Z6vy1gcs3hzuNJIfuWcxQalgIhAOP3%2BKdXNTok3WjLxtPLc9cef1upTowCKC2zJXZouZrMKv8DCGwQABoMNjM3NDIzMTgzODA1IgwfH7PnsZ4mogD59cEq3AMG3MfI4HykP50Xfj94KjZEAQMUTwBOXVMPHc%2Bd4Cqw8FOj%2BwDfGOZxvLDSROWc%2FjRORKb0R1nYh9WNT37jsBNHLquqs80%2FbYOqaZpUhsJtFzMQtOSZjBfw%2BL1kUaIxo4PyWT4ybddfNX8M5JbY4s3dRlfBMks5ZQRqVjOFVJCpPeZ4jOdG83pZzKWY3M5xVOV%2B5ygEVqKdJqJwrvTHjOatxUgoD9aThqurYrH8JcRN%2FpfnWnVlBs8Pk2Y%2BCQR8tZzPtqMbc0hOyleKSMkwhY5Y6%2F64zIG3cs8A63Uq%2BgWWShEAq%2BfOqLgmfGI3%2FBZTmwR6tJtHrfbE%2BpSKe2yjv61fKis7FtrzjVTW6riec8M5ugoeQjrSz9E4NVURbULHsRUqe529u1OuDlk5wH4gBP7XkxisyFrAMDG91gsC2oIgC2V7BB5L%2BS3OaPT6oCQsJ4E7SV3%2FLnYcyylgLleOYdb5NQq%2BRlXDJakbDeji1XXKVO%2Fghqp7KQC0uRN9tENrp46gPL9HmNm9jtTaGkSDpGZ2D%2F0%2Blh%2Fb4QEIyOJUuujmziK47mOXbEUig97gJBGQlbRXpMHhAC7oLrm1hb%2F2C2SP7cPT8IWlR%2B2qz8smYDXafv%2FjVMsIFd9hq58JXjCBqM7JBjqkASXhZ%2F%2F7PYPMazbREWNUvJqKpb73oLjdSKouTGkh1v5aqGuM93WRCuSPa8qdU1oqnf%2Fu0V9zX4zoC58LecbwFqMjSvPdhjXGm9TsX8b3o1Oo8rnSBClRm9CYpNqd8ZDqw2kLp7gH3qLmnHE7zVaJu0WYWMovHOORabM0aTixNr%2FsC5sY%2FvOQl1g49zogWalns2nnxXHNTrg9t1An88Jt4o0GAm8y&X-Amz-Signature=22c631750e3ea0c503e06607acd977d4a12acf20bc78119776c325182ff8df6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMYWZFHJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWLxXZDHDLf1zV0hksb4Z6vy1gcs3hzuNJIfuWcxQalgIhAOP3%2BKdXNTok3WjLxtPLc9cef1upTowCKC2zJXZouZrMKv8DCGwQABoMNjM3NDIzMTgzODA1IgwfH7PnsZ4mogD59cEq3AMG3MfI4HykP50Xfj94KjZEAQMUTwBOXVMPHc%2Bd4Cqw8FOj%2BwDfGOZxvLDSROWc%2FjRORKb0R1nYh9WNT37jsBNHLquqs80%2FbYOqaZpUhsJtFzMQtOSZjBfw%2BL1kUaIxo4PyWT4ybddfNX8M5JbY4s3dRlfBMks5ZQRqVjOFVJCpPeZ4jOdG83pZzKWY3M5xVOV%2B5ygEVqKdJqJwrvTHjOatxUgoD9aThqurYrH8JcRN%2FpfnWnVlBs8Pk2Y%2BCQR8tZzPtqMbc0hOyleKSMkwhY5Y6%2F64zIG3cs8A63Uq%2BgWWShEAq%2BfOqLgmfGI3%2FBZTmwR6tJtHrfbE%2BpSKe2yjv61fKis7FtrzjVTW6riec8M5ugoeQjrSz9E4NVURbULHsRUqe529u1OuDlk5wH4gBP7XkxisyFrAMDG91gsC2oIgC2V7BB5L%2BS3OaPT6oCQsJ4E7SV3%2FLnYcyylgLleOYdb5NQq%2BRlXDJakbDeji1XXKVO%2Fghqp7KQC0uRN9tENrp46gPL9HmNm9jtTaGkSDpGZ2D%2F0%2Blh%2Fb4QEIyOJUuujmziK47mOXbEUig97gJBGQlbRXpMHhAC7oLrm1hb%2F2C2SP7cPT8IWlR%2B2qz8smYDXafv%2FjVMsIFd9hq58JXjCBqM7JBjqkASXhZ%2F%2F7PYPMazbREWNUvJqKpb73oLjdSKouTGkh1v5aqGuM93WRCuSPa8qdU1oqnf%2Fu0V9zX4zoC58LecbwFqMjSvPdhjXGm9TsX8b3o1Oo8rnSBClRm9CYpNqd8ZDqw2kLp7gH3qLmnHE7zVaJu0WYWMovHOORabM0aTixNr%2FsC5sY%2FvOQl1g49zogWalns2nnxXHNTrg9t1An88Jt4o0GAm8y&X-Amz-Signature=49e36be109481d8f9713cbccaf755f7ab1e71df3c15a13fe19e68f437a4e74db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

