---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNC7YWG6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDB%2BE73IKsmGWYtf92byIN00saMKch9WVgWrCvXLyeBIwIhAN9Mpvt4YpNmZLApL1mi%2BW7xzMBjPBinuwMT0ipJUNDLKv8DCDwQABoMNjM3NDIzMTgzODA1IgzBs3lI%2BrxV9p8qyo0q3ANWkM7e%2BW2pFlBd%2BuC9ObUY0%2BBtn1JxzQUw0me9plSOeDhYtl6L0%2FOk2vy6Xy1DQHNJ485N9X5%2BPGBgwbJ26bdV76EKDGOqdY7F%2F%2FdXAiOE2cc9yFt88puNU%2FDiC13xI9Hik8Ap7TvRQlSGTx79AwiW9LfhwnLjW5P8OFaXZKrMEEk5ghY495u7InmBF646BeORlqP9TklPjTGLvC8w%2Fu9Cv3v7RKtZ7hOKjSCK4Qw3U6BuG%2BhUHADnRTrb8KM2HhTxBhjyX77kXS%2FHDB1nFxq0CsDdo8u54d2isoFsa1PAJYEe3sHIu8UTyLKHk80nL33bsUD7OmK%2Bwyz9YLbiBhRrSEu8YnLc0IFFf4fWLMxqotow6ZPAdfvHhxdHLNKHMvzW1Z8KSrIVR8CD0IdVnb%2FShcD6bkD7cQz2jgi3YvGVkjfn5Ch268YXmbFRNvaDOIau4F%2F6bhJYGStbJ6l9XAqNQ8DvudUkBSpRjGd1LpEerGEHpSYjK%2FwQdh4eYDhN7pX7zquVuNqdBXKHDtNTNRGKOOV0bZHDnBm6Ev90OrNXdae5CP%2F4hNqpaJENTC5R4vm39kE%2Fc7G4nUstv83u5FB7RmQqNBYoDKZr5nBozl98ES7fo1yZXjRpzbH%2FLjDc8sPJBjqkAWc6QxWCfkzg%2Bk66ExZ0nherHmW%2BMqKh9hq6gyZIyzLrwnAe%2B3WbGtnk2P%2Fb5dZmiF2jLi5xeZinvgK5GTB7L6L0KbbWRJVJJ27Eu4JmZXOat2xwp%2BtT88DCbJfol56CKKh9hPFTEk6pMRXEnCIpq3FQGNLuGBMtOLHvob0dOaXBZdT98ayGtqSI72wQKiehr7R7KZhxaRem7w%2FBdk76hxbFKt%2Bu&X-Amz-Signature=9d32f50569b744836843328701210688e862d000577fc59b1061ababa84ad983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNC7YWG6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDB%2BE73IKsmGWYtf92byIN00saMKch9WVgWrCvXLyeBIwIhAN9Mpvt4YpNmZLApL1mi%2BW7xzMBjPBinuwMT0ipJUNDLKv8DCDwQABoMNjM3NDIzMTgzODA1IgzBs3lI%2BrxV9p8qyo0q3ANWkM7e%2BW2pFlBd%2BuC9ObUY0%2BBtn1JxzQUw0me9plSOeDhYtl6L0%2FOk2vy6Xy1DQHNJ485N9X5%2BPGBgwbJ26bdV76EKDGOqdY7F%2F%2FdXAiOE2cc9yFt88puNU%2FDiC13xI9Hik8Ap7TvRQlSGTx79AwiW9LfhwnLjW5P8OFaXZKrMEEk5ghY495u7InmBF646BeORlqP9TklPjTGLvC8w%2Fu9Cv3v7RKtZ7hOKjSCK4Qw3U6BuG%2BhUHADnRTrb8KM2HhTxBhjyX77kXS%2FHDB1nFxq0CsDdo8u54d2isoFsa1PAJYEe3sHIu8UTyLKHk80nL33bsUD7OmK%2Bwyz9YLbiBhRrSEu8YnLc0IFFf4fWLMxqotow6ZPAdfvHhxdHLNKHMvzW1Z8KSrIVR8CD0IdVnb%2FShcD6bkD7cQz2jgi3YvGVkjfn5Ch268YXmbFRNvaDOIau4F%2F6bhJYGStbJ6l9XAqNQ8DvudUkBSpRjGd1LpEerGEHpSYjK%2FwQdh4eYDhN7pX7zquVuNqdBXKHDtNTNRGKOOV0bZHDnBm6Ev90OrNXdae5CP%2F4hNqpaJENTC5R4vm39kE%2Fc7G4nUstv83u5FB7RmQqNBYoDKZr5nBozl98ES7fo1yZXjRpzbH%2FLjDc8sPJBjqkAWc6QxWCfkzg%2Bk66ExZ0nherHmW%2BMqKh9hq6gyZIyzLrwnAe%2B3WbGtnk2P%2Fb5dZmiF2jLi5xeZinvgK5GTB7L6L0KbbWRJVJJ27Eu4JmZXOat2xwp%2BtT88DCbJfol56CKKh9hPFTEk6pMRXEnCIpq3FQGNLuGBMtOLHvob0dOaXBZdT98ayGtqSI72wQKiehr7R7KZhxaRem7w%2FBdk76hxbFKt%2Bu&X-Amz-Signature=fb22f0a85babd801b5859018efa48170e43d2345ada0a0a6bf9079608b647a75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

