---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466547WNF6P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdGkfZzjPRfa2eGTV%2Fnw4h9NgMRdjVM0XGIY8x%2FLqOcAiBXX0RGpAi%2FsV96Co01eaFpQuUEwTxC62dEFt9JZX%2BLhir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMbsVofQR%2FiGlv%2Fd9HKtwDlk3OwUturZSMQwpJ6V9H70LK3zij4G3j3f8RWSZPLMOEzIqzGh2I1opd6g2IbyqMNe%2FZkKWx5OGSR01dlyJLoo7KoiUk0P8k6lSoat3WA0GEfLsEBTL0EY7TiIxRr8kC3mIKJlKdBCXXW5LSD%2FEpjHT29kMKXMUmNPP9SdBmmalAi0joiDtkO5MxQuUWhlyTaPDd9WiLCh%2FlgbfmlCCgAJ16pZRTfB4xql5QXuN2X4k7bNk8a7Qr%2F5SXrX%2BTEH8PYHnEit9uRTgtSNkNu4%2BRjW8eIkkRw2%2Bpfd4D2whN4tEUcu8yYJ9%2Bl7q2zUPkqPgVSkxO57Tlyse6%2FcmPiz4QkSiZEoQFugahaVAHoXVo6NiujTveHm0KRwgRGqsaQ1Z2ypCdNX%2FITqREVvp%2FLflGLHH3WmnHdpBhKRu%2FkR30QjDFaX%2B9Rxsb%2BWTHGNrZK4uTyV%2F%2FmNMWNF%2BWDFt7S0%2Bj0egUjFe0PBGXCQZNOZgyhk9aL9FE14b4cnp3MTmCGMZ8fAruqw65ST4N9FC6zJG0N38cE3SjoE2ReXfzulZdIaQmPu5sqPhq7EyJF9uv4w34EyeyAvgjJme%2Fy0t4zvaNNgVa3F15o0ExdZ%2BlUHmD7Mr%2FJYUIHwW7Xrlx%2FJMwoqbQyQY6pgGhL5dngX0XStXWpSLxZhwdaMBrbjzKb4YLLCZIFp1Vaxl8ecxpes1RAZY5eq4SjZ8zZtD8eMm%2FRSCQ6Y43ErrIcPVsmRsnyOMtipqYHvhnpxFbbHHuwqWfnk7%2BsxRXyBv9pXYOWxLv1IhPn6BYR05%2BaBAocOFJmEsXNyQsaQ9%2BcMoyfJYZvejywpAnABMhasxuXeyakz54oRGBS3Vnk17fRloT6t6W&X-Amz-Signature=77d5c9d10dce147b8cd5a9b5958be7bed1e9337377cfaa53a12b51ec37bfb53f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466547WNF6P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdGkfZzjPRfa2eGTV%2Fnw4h9NgMRdjVM0XGIY8x%2FLqOcAiBXX0RGpAi%2FsV96Co01eaFpQuUEwTxC62dEFt9JZX%2BLhir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMbsVofQR%2FiGlv%2Fd9HKtwDlk3OwUturZSMQwpJ6V9H70LK3zij4G3j3f8RWSZPLMOEzIqzGh2I1opd6g2IbyqMNe%2FZkKWx5OGSR01dlyJLoo7KoiUk0P8k6lSoat3WA0GEfLsEBTL0EY7TiIxRr8kC3mIKJlKdBCXXW5LSD%2FEpjHT29kMKXMUmNPP9SdBmmalAi0joiDtkO5MxQuUWhlyTaPDd9WiLCh%2FlgbfmlCCgAJ16pZRTfB4xql5QXuN2X4k7bNk8a7Qr%2F5SXrX%2BTEH8PYHnEit9uRTgtSNkNu4%2BRjW8eIkkRw2%2Bpfd4D2whN4tEUcu8yYJ9%2Bl7q2zUPkqPgVSkxO57Tlyse6%2FcmPiz4QkSiZEoQFugahaVAHoXVo6NiujTveHm0KRwgRGqsaQ1Z2ypCdNX%2FITqREVvp%2FLflGLHH3WmnHdpBhKRu%2FkR30QjDFaX%2B9Rxsb%2BWTHGNrZK4uTyV%2F%2FmNMWNF%2BWDFt7S0%2Bj0egUjFe0PBGXCQZNOZgyhk9aL9FE14b4cnp3MTmCGMZ8fAruqw65ST4N9FC6zJG0N38cE3SjoE2ReXfzulZdIaQmPu5sqPhq7EyJF9uv4w34EyeyAvgjJme%2Fy0t4zvaNNgVa3F15o0ExdZ%2BlUHmD7Mr%2FJYUIHwW7Xrlx%2FJMwoqbQyQY6pgGhL5dngX0XStXWpSLxZhwdaMBrbjzKb4YLLCZIFp1Vaxl8ecxpes1RAZY5eq4SjZ8zZtD8eMm%2FRSCQ6Y43ErrIcPVsmRsnyOMtipqYHvhnpxFbbHHuwqWfnk7%2BsxRXyBv9pXYOWxLv1IhPn6BYR05%2BaBAocOFJmEsXNyQsaQ9%2BcMoyfJYZvejywpAnABMhasxuXeyakz54oRGBS3Vnk17fRloT6t6W&X-Amz-Signature=96f1a6495b9da4523264ed5c046557c57627943f9e47715a193668c8f74a4738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

