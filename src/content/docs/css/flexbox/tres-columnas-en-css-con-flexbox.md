---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6IDUYTB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0ijLygxZ2HkNKn5WA3May8McFXI7fwdRWtAIoqO16ZAiEA6ytzNz3uW2qgZhlYSQI4IkQM8Hwrn4qfk8WQEhzFO88q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDh4fFFEYk%2Fl4gx9KyrcA7VhbloNcRmePQiwZ4JTWjvNpCklAFpBoTNLfGRxELozkBveBTGJxTArS0kyMJGaGbmRb9SsJsMniu11ES80yIX1htX%2BPJ8xr0%2Fse3E2sBoHINaneLiR%2Bh27r6Izvb6h%2F%2B0M6aK6ltw%2B7qcP5yj45N9MR5Ht8D2rwGrZoqk4s1lD9JI6CdZvJ9OIqIZhmp7pRBUYYaNeFUgDZkpZcTn1al4afxSV1Sm%2F1ekc641jH4AqX0GV5m9How51OxAMkRAH5uU4qWQDsG2C%2BattnR1xtLnKFC87eD4kr3h9xdR%2FdSkvHCQON9TiCr8KjtBEyNyEPPAQ6PTiGT7xHQWR7%2FgQA4FKCABKgyA0e0B8KcCytC451dHWsAR2fz50BpEYoiMl%2FFkKmWZSJv3D0Cv5h9HDSd65shLCakBsDuVfv5t6SwG0si7ka%2Fnk1xrebpcm6aIQV0NEvrcs8cdadlaHGosIwf%2BHb3GjcNHyc%2F2%2FitryEFL3iBpuXNf%2BwKHWVR1hkkn%2F82U3GXAVp2hAcx%2BOfgl5oiUOWmyHPb7dQQqIx%2B7OVKO5lUKnpeIqTe81IBJdN3pn1NPP1HymYUQEuzl%2Bi8J0B%2BV8CfkxtrFsLMo8Rhb9zTlmgAiG5%2FHYtgNwgYqNMOnFzckGOqUByCVhYA02ItBeoV55M%2B7SMaSP3xF2Qp6zyLJ7k0Lw4UvNx6FwTJ%2BmwQ%2F0LRm6RZYPJzPuz68yYfXk0mkJhU3FzOISDq%2BmBIFoWQkDcaUKew04LMyiMh42SDQEhjUJaYBaDwcq%2FGPp36xYIBa5eq1ZhFrJ4l%2BI2HAj3Yg6z4N3wySu3VlNp%2B0B%2FyTTf9Jg7MeDZFDYSD4AUNe834y14K5Wnp6ybMw5&X-Amz-Signature=c94e2a8c66c9bbea406681aaba8f193e51cd4377d4aeb94e0702002453ab8672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6IDUYTB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0ijLygxZ2HkNKn5WA3May8McFXI7fwdRWtAIoqO16ZAiEA6ytzNz3uW2qgZhlYSQI4IkQM8Hwrn4qfk8WQEhzFO88q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDh4fFFEYk%2Fl4gx9KyrcA7VhbloNcRmePQiwZ4JTWjvNpCklAFpBoTNLfGRxELozkBveBTGJxTArS0kyMJGaGbmRb9SsJsMniu11ES80yIX1htX%2BPJ8xr0%2Fse3E2sBoHINaneLiR%2Bh27r6Izvb6h%2F%2B0M6aK6ltw%2B7qcP5yj45N9MR5Ht8D2rwGrZoqk4s1lD9JI6CdZvJ9OIqIZhmp7pRBUYYaNeFUgDZkpZcTn1al4afxSV1Sm%2F1ekc641jH4AqX0GV5m9How51OxAMkRAH5uU4qWQDsG2C%2BattnR1xtLnKFC87eD4kr3h9xdR%2FdSkvHCQON9TiCr8KjtBEyNyEPPAQ6PTiGT7xHQWR7%2FgQA4FKCABKgyA0e0B8KcCytC451dHWsAR2fz50BpEYoiMl%2FFkKmWZSJv3D0Cv5h9HDSd65shLCakBsDuVfv5t6SwG0si7ka%2Fnk1xrebpcm6aIQV0NEvrcs8cdadlaHGosIwf%2BHb3GjcNHyc%2F2%2FitryEFL3iBpuXNf%2BwKHWVR1hkkn%2F82U3GXAVp2hAcx%2BOfgl5oiUOWmyHPb7dQQqIx%2B7OVKO5lUKnpeIqTe81IBJdN3pn1NPP1HymYUQEuzl%2Bi8J0B%2BV8CfkxtrFsLMo8Rhb9zTlmgAiG5%2FHYtgNwgYqNMOnFzckGOqUByCVhYA02ItBeoV55M%2B7SMaSP3xF2Qp6zyLJ7k0Lw4UvNx6FwTJ%2BmwQ%2F0LRm6RZYPJzPuz68yYfXk0mkJhU3FzOISDq%2BmBIFoWQkDcaUKew04LMyiMh42SDQEhjUJaYBaDwcq%2FGPp36xYIBa5eq1ZhFrJ4l%2BI2HAj3Yg6z4N3wySu3VlNp%2B0B%2FyTTf9Jg7MeDZFDYSD4AUNe834y14K5Wnp6ybMw5&X-Amz-Signature=d704cdc44d3f6928fcef8f8295e49624e96d8df284b264481492eb4202ba2bea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

