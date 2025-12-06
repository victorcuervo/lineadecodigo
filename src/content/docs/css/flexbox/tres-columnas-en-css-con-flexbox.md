---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHLCD6OU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgkSibjuwNTRCVy8dTFrl%2FnqNUha0oHqwyKdtKNWoDyAiAxCidD28QFpdkCMnHliioDpHmaRsjETPzrv5kgtWV39Sr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMEYB%2BPYlDhl09oMfUKtwDtb4vwYJeTUsyR9UwfdcmzFRFVJExl8gd1oBflD4i2c3pnwRXhOZBuejVy%2F8ttCqwMC1H15h4JWMVi4vYTzpd77mXxoeTlQ3fhZ%2BItTPQdxmohGLHyhP31jjPgOKWQIO7qQkk9xEkibVocZ85fyVklJz%2F7VtUnamTbABxdJ1U9R7DfUkhzUcCD1h3HZaP1RwbSl0Ye7hVnAax8WkdJG1KPahzcHrBD9pfW97SEk3i2eUb0aH6abePeKg8o5sqs6paTyVlhmom%2Fdd%2B055xQgk35tcXet5H1KW%2BOU7xIO%2BnFGUfNUwDW109QoclNMhIYWKOdZ9LgS3TOpvuJprSBRHYUNbzmkvnkTdhMDZUxI4%2BFFbEnLBKBVsAOcwBkDFjg%2FsOWS%2B844SY1pKTznB%2BBkL%2F6t3al8gQlKYsveY3N%2B3PWVarzMD3lMtelU7rr0WBdgc%2FpOkZJYyuMGLSNyM5tKP8kV3htDesNEs%2BngaJrd8FsUfi%2FmGzFjkkMJo8qZWxxt6xj9oPa8%2BqxkfoFZxADs6ezV5oUfn9S8B2gEthGuBu0bJX6X2Ev8kLt6n84H0QAMCDbe0BMUrL7N6fkS%2BEUdQpLwuqNKkTwcZ9jxP5D%2BiY%2FIxDjd8M7F1nchVJSaYwkZ%2FPyQY6pgGyDV6U60zTqOTHS%2BqOsDMLBMdcqV1LhoTvXochY89DmkF5LrbWkf2msKI%2BdypMjwkyPlYbcpFimjpZVPVn4qymcBx%2BFFYgKeU5bKvRIC6czhpFBeyCOKXXM44XMz3wEP5wzIc5hbT0LtsA45eUZhFM4p5B2Tgj5uRQj%2FZSUsFmJn0RSNO4U5GWmG9Vz5QxpKiqw44ysG6dZ88T7NM9TeJmJJfz4PFn&X-Amz-Signature=e432abc586659f103c31af9525708eb2f16c34fa70caa996fe2c952d69586bb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHLCD6OU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgkSibjuwNTRCVy8dTFrl%2FnqNUha0oHqwyKdtKNWoDyAiAxCidD28QFpdkCMnHliioDpHmaRsjETPzrv5kgtWV39Sr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMEYB%2BPYlDhl09oMfUKtwDtb4vwYJeTUsyR9UwfdcmzFRFVJExl8gd1oBflD4i2c3pnwRXhOZBuejVy%2F8ttCqwMC1H15h4JWMVi4vYTzpd77mXxoeTlQ3fhZ%2BItTPQdxmohGLHyhP31jjPgOKWQIO7qQkk9xEkibVocZ85fyVklJz%2F7VtUnamTbABxdJ1U9R7DfUkhzUcCD1h3HZaP1RwbSl0Ye7hVnAax8WkdJG1KPahzcHrBD9pfW97SEk3i2eUb0aH6abePeKg8o5sqs6paTyVlhmom%2Fdd%2B055xQgk35tcXet5H1KW%2BOU7xIO%2BnFGUfNUwDW109QoclNMhIYWKOdZ9LgS3TOpvuJprSBRHYUNbzmkvnkTdhMDZUxI4%2BFFbEnLBKBVsAOcwBkDFjg%2FsOWS%2B844SY1pKTznB%2BBkL%2F6t3al8gQlKYsveY3N%2B3PWVarzMD3lMtelU7rr0WBdgc%2FpOkZJYyuMGLSNyM5tKP8kV3htDesNEs%2BngaJrd8FsUfi%2FmGzFjkkMJo8qZWxxt6xj9oPa8%2BqxkfoFZxADs6ezV5oUfn9S8B2gEthGuBu0bJX6X2Ev8kLt6n84H0QAMCDbe0BMUrL7N6fkS%2BEUdQpLwuqNKkTwcZ9jxP5D%2BiY%2FIxDjd8M7F1nchVJSaYwkZ%2FPyQY6pgGyDV6U60zTqOTHS%2BqOsDMLBMdcqV1LhoTvXochY89DmkF5LrbWkf2msKI%2BdypMjwkyPlYbcpFimjpZVPVn4qymcBx%2BFFYgKeU5bKvRIC6czhpFBeyCOKXXM44XMz3wEP5wzIc5hbT0LtsA45eUZhFM4p5B2Tgj5uRQj%2FZSUsFmJn0RSNO4U5GWmG9Vz5QxpKiqw44ysG6dZ88T7NM9TeJmJJfz4PFn&X-Amz-Signature=186033caaafdd5c5ecdd9d47587131c88d451e61a0491300c551aa736a3fa73d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

