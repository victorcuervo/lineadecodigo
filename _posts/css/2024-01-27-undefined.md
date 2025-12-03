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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIXPW6ZX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T090527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHN7E9TpkRVlcHyuRZPKDTP0IlFHUebv4chszw759rl9AiA6YtqwVQ%2FaQU1FoCrnJhMlGIaoSTZiWYQhPZ1xsyCIUSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMDgGkKTIZjuG73ji4KtwDMxOjluNZnWTuPLTThq41KYnueHekmlcF7OWhtv20JzYXdzgh0mXIrA%2F3FO7GWm7cGW3lHNEcqZnHDkoGGJWb3rs9w5el%2Fzyn7ULEeq2v8wW39ufRqh20VFbqylMqQIy2XSdhaxrNSQQ8OX0B1FfYCkv0z%2BBMIK3Y96e8t74Rcw3nwwt9SXB0P%2FBNaxUTu2taNbT7GMWz8YtcgKTvstYAAW7o36hWupRyYiJjbL1dn%2FAhVaAUkV2zwa8YFK0ewvnC0hUR%2FenCgIk8AajtTCFmkC5ZiFfNr%2B88%2BtH46Lq1HeMt78nLvljK%2B6sSAcrgQ1po01EgEPH%2BEMZ98s6aUEDNVpG6YYtCO6kgipJ5NAkkcZtygQ%2BW5eMYoKcLUy1wK8GHHn16Nr9m8Q1kEPdY7e%2FkdLB%2FQgSKLQqRNhfCf7F6CB8LM3IRyABTyKGIQvb1iUgnWafHeD%2FnBWppqh5f0rUe0nQ7q4yANY8IassKtRBBeUMheBDB45HcXDjUF5j3wPvOsjj5kH%2F3hvCzlfoHyKW8AWkUYdnc9kLSHIakXw0nQ%2F%2Fo8bQm39T4tbNOOXOg%2BHpbHkbWeqiBJvNHpzKhlSw%2FmOhwn65bL4FZxj%2FRK5OMjYfKEL%2FHx0Y00K1MIIgw0PW%2FyQY6pgGroQ1SzsxaJm3%2F%2B9pV7dUSQypJ49LEhLNtIqeq4jn7D6Bn8%2F9LYbfalNDnnQCIIAfoeS4P1UN%2FAyb2bx3orZ5zclf%2BXH8Zc3JTdIb7IzxpozTJoVg%2BmElAuJEBz363uXfiIdrK17pWMJtNYyzUYADv1aPTZNS1ZfPRZXxOsdVeYo4r6sm9kCN0dJ%2FCHuICN4PetNROfqIb6hbhG6H7XjLXKbuhJ4Jn&X-Amz-Signature=e4f9174fa06fd91b276d9f0fab6d1c72fd346f2094fb7f832751caf62f8ca8cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIXPW6ZX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T090527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHN7E9TpkRVlcHyuRZPKDTP0IlFHUebv4chszw759rl9AiA6YtqwVQ%2FaQU1FoCrnJhMlGIaoSTZiWYQhPZ1xsyCIUSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMDgGkKTIZjuG73ji4KtwDMxOjluNZnWTuPLTThq41KYnueHekmlcF7OWhtv20JzYXdzgh0mXIrA%2F3FO7GWm7cGW3lHNEcqZnHDkoGGJWb3rs9w5el%2Fzyn7ULEeq2v8wW39ufRqh20VFbqylMqQIy2XSdhaxrNSQQ8OX0B1FfYCkv0z%2BBMIK3Y96e8t74Rcw3nwwt9SXB0P%2FBNaxUTu2taNbT7GMWz8YtcgKTvstYAAW7o36hWupRyYiJjbL1dn%2FAhVaAUkV2zwa8YFK0ewvnC0hUR%2FenCgIk8AajtTCFmkC5ZiFfNr%2B88%2BtH46Lq1HeMt78nLvljK%2B6sSAcrgQ1po01EgEPH%2BEMZ98s6aUEDNVpG6YYtCO6kgipJ5NAkkcZtygQ%2BW5eMYoKcLUy1wK8GHHn16Nr9m8Q1kEPdY7e%2FkdLB%2FQgSKLQqRNhfCf7F6CB8LM3IRyABTyKGIQvb1iUgnWafHeD%2FnBWppqh5f0rUe0nQ7q4yANY8IassKtRBBeUMheBDB45HcXDjUF5j3wPvOsjj5kH%2F3hvCzlfoHyKW8AWkUYdnc9kLSHIakXw0nQ%2F%2Fo8bQm39T4tbNOOXOg%2BHpbHkbWeqiBJvNHpzKhlSw%2FmOhwn65bL4FZxj%2FRK5OMjYfKEL%2FHx0Y00K1MIIgw0PW%2FyQY6pgGroQ1SzsxaJm3%2F%2B9pV7dUSQypJ49LEhLNtIqeq4jn7D6Bn8%2F9LYbfalNDnnQCIIAfoeS4P1UN%2FAyb2bx3orZ5zclf%2BXH8Zc3JTdIb7IzxpozTJoVg%2BmElAuJEBz363uXfiIdrK17pWMJtNYyzUYADv1aPTZNS1ZfPRZXxOsdVeYo4r6sm9kCN0dJ%2FCHuICN4PetNROfqIb6hbhG6H7XjLXKbuhJ4Jn&X-Amz-Signature=18cb78130ab4e80ee984d58ee310a2c1ea19b939fc79634f12f19d767ff2ce4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

