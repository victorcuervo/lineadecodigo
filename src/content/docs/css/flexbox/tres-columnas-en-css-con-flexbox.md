---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRNQHEKQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEoqAb2S01Vshih43nhA5XJskFkfSKygZBRjqa4EMJawIgaPKclZgY6oip6PTWtC%2BtgNiSZpMkcjfG%2BDkko%2F3iON0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRT8IwawibwJy7%2BUircAzxxcKCio9CYZU8atTphLPQ3fpzeHlLQRww0fZI5%2B3F87MI0uU%2Fc4DpWKUqAkiFYVS3K51ZV%2BQg9e%2F2ywlFGtGm%2FX8youbXC12BxEm6jSlE8HxtpNjTKc0FDzepeTOxazYjlaDfx4kiqvMEqIiNFMLK3qoIfTPo6Dbz3ixjjKeVqy%2BpA%2BRlM3k%2B2elJwHUM1fC6cegCoiGAIPBVB4oHUWM%2BWDCo98%2BG15ihuw4sMP3YqRWHT010VmKtjBze1l3jggkZufVXNUbeWjVUewDdP%2BQIG9t6NP7mrynn%2B88BQCDwUhG4dyKsQD9QYrWgCbjZYcCQI%2FM9Cgyd61BDnV9C%2BVUOGcy1XrrM0zJi%2ByC74ZatKp8N27QK7diPpEn0T18fZbNTIvjskn03gDFGDfWBChxIzoTXhqOP6uODPEamQ2JAVd607y3TfBWlvJ0VTyoXwHVj4efUFyri%2FxfvTwyFf7irAv5yHuSS2TyJVQTdzMejfnSc3yB5SQQfbBqZ8jBKTxaR3vYapZGmq3o0oSjClvJLheJkHg3vNHiPNBKoWndUkxTPBR3LpeFyWnK6oPxz%2Bj4LWHx%2FyDBgYZiyTZpO7EG4XkOXNBrou5heH212arHm8CRz7YBt2bCVv5WjuMNKZ1ckGOqUBGUL7rxoXwdrriiYsi%2BbkWeDEGY%2BpIb%2FqU%2FQZjQdhYwHGU3762gwhngKzYsNq8kguIcojiZFZ4HK4NhMoR3ZTR74L32luy0%2BTUNvzQsWuQsF6vhbFHYcyPbBtFNo2rHYXilUgM1y0IlyiqKaNCTzO62wIcewXCjJm%2BjAgreLIfxTT9bFE3BQmmepA2FifeyQnFFtCg8KFJa5e6hNDLxCO4RDUDnmR&X-Amz-Signature=860131849a164daa901ad34b812f2f49e944a04a96ec1f3689a81f76491b2016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRNQHEKQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEoqAb2S01Vshih43nhA5XJskFkfSKygZBRjqa4EMJawIgaPKclZgY6oip6PTWtC%2BtgNiSZpMkcjfG%2BDkko%2F3iON0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRT8IwawibwJy7%2BUircAzxxcKCio9CYZU8atTphLPQ3fpzeHlLQRww0fZI5%2B3F87MI0uU%2Fc4DpWKUqAkiFYVS3K51ZV%2BQg9e%2F2ywlFGtGm%2FX8youbXC12BxEm6jSlE8HxtpNjTKc0FDzepeTOxazYjlaDfx4kiqvMEqIiNFMLK3qoIfTPo6Dbz3ixjjKeVqy%2BpA%2BRlM3k%2B2elJwHUM1fC6cegCoiGAIPBVB4oHUWM%2BWDCo98%2BG15ihuw4sMP3YqRWHT010VmKtjBze1l3jggkZufVXNUbeWjVUewDdP%2BQIG9t6NP7mrynn%2B88BQCDwUhG4dyKsQD9QYrWgCbjZYcCQI%2FM9Cgyd61BDnV9C%2BVUOGcy1XrrM0zJi%2ByC74ZatKp8N27QK7diPpEn0T18fZbNTIvjskn03gDFGDfWBChxIzoTXhqOP6uODPEamQ2JAVd607y3TfBWlvJ0VTyoXwHVj4efUFyri%2FxfvTwyFf7irAv5yHuSS2TyJVQTdzMejfnSc3yB5SQQfbBqZ8jBKTxaR3vYapZGmq3o0oSjClvJLheJkHg3vNHiPNBKoWndUkxTPBR3LpeFyWnK6oPxz%2Bj4LWHx%2FyDBgYZiyTZpO7EG4XkOXNBrou5heH212arHm8CRz7YBt2bCVv5WjuMNKZ1ckGOqUBGUL7rxoXwdrriiYsi%2BbkWeDEGY%2BpIb%2FqU%2FQZjQdhYwHGU3762gwhngKzYsNq8kguIcojiZFZ4HK4NhMoR3ZTR74L32luy0%2BTUNvzQsWuQsF6vhbFHYcyPbBtFNo2rHYXilUgM1y0IlyiqKaNCTzO62wIcewXCjJm%2BjAgreLIfxTT9bFE3BQmmepA2FifeyQnFFtCg8KFJa5e6hNDLxCO4RDUDnmR&X-Amz-Signature=e44729c8397470e17cc82e9435d1b0148901c65a8ea36e6567a823f553e77586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

