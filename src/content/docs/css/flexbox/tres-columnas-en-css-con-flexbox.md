---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V75BHDNA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHZ1bVHR2XkLoX7L5RSsodpuOKnVnkAzvD4gVlnWiSNVAiBulUw7elw%2F5%2FhYc9g36K3nKfKsveLyusTF7uvEa0Vcfyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM7%2B3Yl5qHXonzinv2KtwDICa8ZjZYDd3G1YTCifl9j%2FK7Jv6LGqG68i55fOjMphr%2FXZGEf33PrPZT%2FzlQhom0RRDNuk1eJVVgTuq6ZiIh4Dg6y%2BmQcGlEGLiY4yUOMIFydVcwxIwWbcFWoK%2BeaRzcZYt82zH4V1ZNHoJFLMoXBvUWQCRi9Dj7bPFo2eCeMdVrFi9H%2FsV0bJDdzdXPqIr7qTEmQQXKjYMiBS9MZPAcpb%2BMa%2B%2FfkRzqbSUxWDVVqz36FU8WsEKkqmPZGinpV1j%2FYO8ozLjFrv%2BawUCREv%2FFS%2BOLySIlRU6r90CLuA0UhBJHdLLWCJ2giIOWfnzsKwe8KplmgQbAiRfdJLbUyPK0RCTei946S9Adxqn7WW23mjDKojGLqfsvnTgohIJBV5Dx%2Bj3FCCSSucyqPEDT5S9ayB8a3tLHmZs3Z97VnVb7VIRxpu7kXlY%2B2i2RqV2N1uhA5d24mFue%2Fm5jEUT5r%2F1%2BX0cA%2FimEfI%2FoGbPXz6TAn1NtCzQLsZR1tHQmNjN%2FVYnM2GZPirekX5gfh3605aaC9ON8EZQp4hSYR3rNin9LLMjmMgx%2F6fIZTFN8jb13hrjjgcBf%2FWejpUbytbQrIaRZs6ziZQPgwNtAbg8h4%2FTByBNiJUHcEnXrqZXw0sYw%2F9TDyQY6pgGSNOq6BrNMtyBnA0dGEtvWaXtwMuJb%2BsOck5zpX830ZWKB9sQ8hVinTNedMhJvnfAxe5NH8uMe%2BBrN4Pv81NUaccA6H2w9DwyDlcY4KbOwYnAAM1S19wq1hDCkeyunGh82qLxyyTsLfDzByBzyiFwEPalELU5Wo3Z4PGDedp2P6NysDBefGbKSZkEG6bDtHfRfRyFy%2BOn%2FiAio%2BEfuN3c446SMb8ic&X-Amz-Signature=0cfe4798e81ec36192ae446cf0424a4eab01ccdbc19a66b939fb50ac3edb6489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V75BHDNA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHZ1bVHR2XkLoX7L5RSsodpuOKnVnkAzvD4gVlnWiSNVAiBulUw7elw%2F5%2FhYc9g36K3nKfKsveLyusTF7uvEa0Vcfyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM7%2B3Yl5qHXonzinv2KtwDICa8ZjZYDd3G1YTCifl9j%2FK7Jv6LGqG68i55fOjMphr%2FXZGEf33PrPZT%2FzlQhom0RRDNuk1eJVVgTuq6ZiIh4Dg6y%2BmQcGlEGLiY4yUOMIFydVcwxIwWbcFWoK%2BeaRzcZYt82zH4V1ZNHoJFLMoXBvUWQCRi9Dj7bPFo2eCeMdVrFi9H%2FsV0bJDdzdXPqIr7qTEmQQXKjYMiBS9MZPAcpb%2BMa%2B%2FfkRzqbSUxWDVVqz36FU8WsEKkqmPZGinpV1j%2FYO8ozLjFrv%2BawUCREv%2FFS%2BOLySIlRU6r90CLuA0UhBJHdLLWCJ2giIOWfnzsKwe8KplmgQbAiRfdJLbUyPK0RCTei946S9Adxqn7WW23mjDKojGLqfsvnTgohIJBV5Dx%2Bj3FCCSSucyqPEDT5S9ayB8a3tLHmZs3Z97VnVb7VIRxpu7kXlY%2B2i2RqV2N1uhA5d24mFue%2Fm5jEUT5r%2F1%2BX0cA%2FimEfI%2FoGbPXz6TAn1NtCzQLsZR1tHQmNjN%2FVYnM2GZPirekX5gfh3605aaC9ON8EZQp4hSYR3rNin9LLMjmMgx%2F6fIZTFN8jb13hrjjgcBf%2FWejpUbytbQrIaRZs6ziZQPgwNtAbg8h4%2FTByBNiJUHcEnXrqZXw0sYw%2F9TDyQY6pgGSNOq6BrNMtyBnA0dGEtvWaXtwMuJb%2BsOck5zpX830ZWKB9sQ8hVinTNedMhJvnfAxe5NH8uMe%2BBrN4Pv81NUaccA6H2w9DwyDlcY4KbOwYnAAM1S19wq1hDCkeyunGh82qLxyyTsLfDzByBzyiFwEPalELU5Wo3Z4PGDedp2P6NysDBefGbKSZkEG6bDtHfRfRyFy%2BOn%2FiAio%2BEfuN3c446SMb8ic&X-Amz-Signature=eef00f6eadf95c300e2fb3eed8ffb0fbd4ba5281b12c79384ae9b5243c5ca3bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

