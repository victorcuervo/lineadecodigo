---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GM4R54A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXzkMrv50xN798SQ%2FfEDxe6LTxbEGcu62MFixZr7CRagIgY0tSw7iqhXPIkZo05KWgNDtD4iuSjAUj4hAGrPTSNlIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNnnyZKsojzQcBSslCrcA1kAR3t4wPmOZ2hX%2BIfXgdqbEKHePEQgAfxg8R6El9brNI1Jh%2BoOz30JiE0LYdVbAHo8BfuxCafXcP5esC%2FmhitUOltTr1P00KqgmNtkL6A8r2gxLPwH59Fp4ae0GyoVOlXDNerCjMlqKXxTZhWb%2Bx4B14qZpUYUl3VSzib3PbQgkh9FOdXEhky6YzrKhn%2FJWoK7CsgmEZBGFH8hhYQst1vj%2FxNpDTO4A2jP%2FWWHvyN3G4pQYXe%2FxujxZ7GqilLHzatKNqd3ARlA93jpK%2FG5WwVSjaH9Bb58oddaAQekuz3CNsIJFJ%2Fdn75wX6arSw8FC0zPdTzm%2F5tJTr2KA%2BvdF4QM19RF4xY%2Bx5l0T2cFmYIt79zCzIGvEIfj7oU%2BgCy6316Tl73B%2BDqgbsThD1oJaaVs66W50xA6vk5YTwR6b%2FFSD9z46pqwa5yabfdb1jMdOvN01QoFOYJiGrl%2Frwwh5lXuJdFJbpL9VjY1s6a5k1ffe%2BBgyLUP7taGVCytAlzz1%2BUBFrJjG%2Bc7Ay1JU%2B2s8U9e8k1lvovcPEoeRTScZvclaF37TKibPZmBfE8tflKJoK9X2S%2FrXxEJPB7qKpZGo3MwnuEWAk5HOpf8JXoZAinY8MQJ20WmEocECzsgMM%2B8z8kGOqUBZ6QQLCkFdNLjGFU9qD5ms%2BTzM4ToTEmLXyix15n5uuytiwspXRZAnxIupPbbYgWbVoV7xde7r6fEjPeSPk8P3biakiu2ENVS21w9VZDLMSuyaUriAEFFbu3prONu%2B9gdG5%2BkAKzqHDk8CB7NiB4AX59vK79%2F80nvpEJSL5XOXfxEQlr2MRM%2FmCZt0gQcJ7NSbx9QGBP2407p74qZiTgKKjYIIZ9k&X-Amz-Signature=c1707621a0d6b59123e9f4487de964ee53fd8bf1f89edbefdd9a4396ba386492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GM4R54A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXzkMrv50xN798SQ%2FfEDxe6LTxbEGcu62MFixZr7CRagIgY0tSw7iqhXPIkZo05KWgNDtD4iuSjAUj4hAGrPTSNlIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNnnyZKsojzQcBSslCrcA1kAR3t4wPmOZ2hX%2BIfXgdqbEKHePEQgAfxg8R6El9brNI1Jh%2BoOz30JiE0LYdVbAHo8BfuxCafXcP5esC%2FmhitUOltTr1P00KqgmNtkL6A8r2gxLPwH59Fp4ae0GyoVOlXDNerCjMlqKXxTZhWb%2Bx4B14qZpUYUl3VSzib3PbQgkh9FOdXEhky6YzrKhn%2FJWoK7CsgmEZBGFH8hhYQst1vj%2FxNpDTO4A2jP%2FWWHvyN3G4pQYXe%2FxujxZ7GqilLHzatKNqd3ARlA93jpK%2FG5WwVSjaH9Bb58oddaAQekuz3CNsIJFJ%2Fdn75wX6arSw8FC0zPdTzm%2F5tJTr2KA%2BvdF4QM19RF4xY%2Bx5l0T2cFmYIt79zCzIGvEIfj7oU%2BgCy6316Tl73B%2BDqgbsThD1oJaaVs66W50xA6vk5YTwR6b%2FFSD9z46pqwa5yabfdb1jMdOvN01QoFOYJiGrl%2Frwwh5lXuJdFJbpL9VjY1s6a5k1ffe%2BBgyLUP7taGVCytAlzz1%2BUBFrJjG%2Bc7Ay1JU%2B2s8U9e8k1lvovcPEoeRTScZvclaF37TKibPZmBfE8tflKJoK9X2S%2FrXxEJPB7qKpZGo3MwnuEWAk5HOpf8JXoZAinY8MQJ20WmEocECzsgMM%2B8z8kGOqUBZ6QQLCkFdNLjGFU9qD5ms%2BTzM4ToTEmLXyix15n5uuytiwspXRZAnxIupPbbYgWbVoV7xde7r6fEjPeSPk8P3biakiu2ENVS21w9VZDLMSuyaUriAEFFbu3prONu%2B9gdG5%2BkAKzqHDk8CB7NiB4AX59vK79%2F80nvpEJSL5XOXfxEQlr2MRM%2FmCZt0gQcJ7NSbx9QGBP2407p74qZiTgKKjYIIZ9k&X-Amz-Signature=c338c821a5fe188bf041297ac04636c15bb90bc7cbf94091324880878ddb8d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

