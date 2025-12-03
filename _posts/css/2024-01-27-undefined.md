---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSBTN36N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDdtX2KcS8l2uqnh7caxQVLucIruq9VFo7vw8iPxWUD4gIgcLSGyuK5SJRwntJ4AUR%2Fwe%2B8QMvDso7DM0b3qMBzGRUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLh3UoYLHWMchlPDgCrcAwXGQvkHuua7jqTYFecqIqjoM%2F58elRsoLxlH2NIa%2FS0O8AEnWbF3yfgCGc%2FoQSzSpLubQNvYI%2FLm4mmdBdDruA66llOQPSdoO32kkS5ZME3mhe46MllN059rGoeiPoG9Q6efFLIfGc2AFVTVbNjBiwpvFu4a6RNloIFZZ0DeUWtCI%2FmZiD%2BuFk7vsXr3hkRvpWGuqLg4ZJFpQXGYo4bsZO0Ffdj5rDbPmw%2BrfbN7gHkAivvvXaG%2FehY%2B1zCIYA9PoTAh3rz7dCe692fe%2F1YE%2FerLSJHEKKee6dhgIwYO85FjQyLgLVXnKoWFo%2FTwfsAb8seYyy5K5fG3mNWTIMPKK10C%2B6%2Frbe79JGLLJz4bqO3XQ1IiNPSONbOwBDizH%2B4Ls1HH2yPrL3mLdef86vyjOhhh0Z58smqf8CwBry7rwu5MA71z7pJK4Lh1rnyx8RthREqBreFKfrd4lksSzofXw8ZZikSnZ%2BQ%2F5a7ozAfYsXCnqBd5ueHYB4wcMNX70ukUB4P5iXLTBbGH%2Foc1GQa7gMMjLeV3RPghZ6E8NETcJrOKMF32PppAcI2XJnXlVvShfyh2tnBESO8UumkaNj4I0DSrytpviBLXnCGOoW18MQB0Cs%2BQOvuNvkTtTp6MLSBvskGOqUBzVJENXxtZpLBY499xGY4XGsteTDD2HHNRyBqnlExEyqLjORuskpnoPsa2ifq2VtDqvQdxTBKS8JQs0sDxCtaqxFhHt19J3%2FtLjz0rTU8DSBqFWv0gwdJt69vhFcg8ieiUIyARUOPw6QpRUlZ3a5aUFcP25zs%2Bazpr0hoIiKfQPgl2HOlJPuFSd0QUuHQLxrKYXbuwwttY1K1WbTJZAZ1jlkow0k1&X-Amz-Signature=879bdf7e7b84f08804b8ffef5fdba611335471238e967dcd4edc34237dc0c60d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSBTN36N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDdtX2KcS8l2uqnh7caxQVLucIruq9VFo7vw8iPxWUD4gIgcLSGyuK5SJRwntJ4AUR%2Fwe%2B8QMvDso7DM0b3qMBzGRUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLh3UoYLHWMchlPDgCrcAwXGQvkHuua7jqTYFecqIqjoM%2F58elRsoLxlH2NIa%2FS0O8AEnWbF3yfgCGc%2FoQSzSpLubQNvYI%2FLm4mmdBdDruA66llOQPSdoO32kkS5ZME3mhe46MllN059rGoeiPoG9Q6efFLIfGc2AFVTVbNjBiwpvFu4a6RNloIFZZ0DeUWtCI%2FmZiD%2BuFk7vsXr3hkRvpWGuqLg4ZJFpQXGYo4bsZO0Ffdj5rDbPmw%2BrfbN7gHkAivvvXaG%2FehY%2B1zCIYA9PoTAh3rz7dCe692fe%2F1YE%2FerLSJHEKKee6dhgIwYO85FjQyLgLVXnKoWFo%2FTwfsAb8seYyy5K5fG3mNWTIMPKK10C%2B6%2Frbe79JGLLJz4bqO3XQ1IiNPSONbOwBDizH%2B4Ls1HH2yPrL3mLdef86vyjOhhh0Z58smqf8CwBry7rwu5MA71z7pJK4Lh1rnyx8RthREqBreFKfrd4lksSzofXw8ZZikSnZ%2BQ%2F5a7ozAfYsXCnqBd5ueHYB4wcMNX70ukUB4P5iXLTBbGH%2Foc1GQa7gMMjLeV3RPghZ6E8NETcJrOKMF32PppAcI2XJnXlVvShfyh2tnBESO8UumkaNj4I0DSrytpviBLXnCGOoW18MQB0Cs%2BQOvuNvkTtTp6MLSBvskGOqUBzVJENXxtZpLBY499xGY4XGsteTDD2HHNRyBqnlExEyqLjORuskpnoPsa2ifq2VtDqvQdxTBKS8JQs0sDxCtaqxFhHt19J3%2FtLjz0rTU8DSBqFWv0gwdJt69vhFcg8ieiUIyARUOPw6QpRUlZ3a5aUFcP25zs%2Bazpr0hoIiKfQPgl2HOlJPuFSd0QUuHQLxrKYXbuwwttY1K1WbTJZAZ1jlkow0k1&X-Amz-Signature=d2604bef10b0bdcf65fb781236bbf5c62d76cc39761ad8a5d85e8b808cea6fec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

