---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JUJ3RQX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy6u3ugq8gZccZ7APyoqeE0a8IrUBnbHfKyrXncDDErQIhAKu2YkcLG8J9rGj%2F%2BWiZpJafTZThoNmqoTzWg8qcJlHfKv8DCF8QABoMNjM3NDIzMTgzODA1IgymGvVmHebzaFRl%2Bf4q3APOXxbpE9JoB6cXVCZukcgA0SppNGU3E9%2FRl9ZbUOJUPFVYeR3V944NuZU7gBCJK%2B49ef9MisH%2BpXtE%2BsNpeiHqeVEYcp4mvRALqx5Ypzde9CeiK%2BFXFvWcZdxiUptWbieVn%2FMFvWt0YkihQ4hmcnWCVrSsDmT7sW2%2FHtwJP5M8wW2mAJIWt7zZEb8ftxiBnk4%2F2OKfc5J6v%2B6R91dB6hj26vY5cfbRNeNsa6t10G%2BFGWVP25xDxJXBNT%2BZuuHNPw96VqWLulYmrokBNpzUo6d8I%2FA0ELkAnUWzbTQrcHhwRR%2FnfuSWPukoHAHHuLsOWkQ%2FxTDqh8mjWN0%2F8vbhXGGNkXNCfs%2BFH7b0hl8G5QVyOdtzOqG1kWvsi8AXY9sflSV6KcPrjVtWfj8JITEx5iahQc8ta4GfHw2UMc9rBLQuBOQUGKAlItyumpqjRoTvJfIuyG9McBSsnnS2zjpvSgPCV8714TcgvSSg4o9nSkNV3yMlIeerXTDOP7654DuM38RN%2FMw1MWS93k%2FsJnlrpgaKWC0q8xLmYV2FtmbXHftQjpdajoHkNKa7YUW7RywvgTHl9HCgt%2FCKabLZq0dhjYZoRSg8U4dpAzl6ttO7bgZolr0Gk1vGmIzn%2BUNMYDCLysvJBjqkAfcrhlFkjju74lESyn4%2F%2BEoGPruAQbQ99gwOa4WLs6kUZkWulYU1HcXr79Y6HYbKchTO%2B7dOLpgHxdBl0%2FDqzlgsnfSxvN6MZihMWt0y78DvWAWcMak6Zj05YeApnCtYdMXSBgzRQMYZ8qnT60po9HyLCcTg83y9GDFJ5UCJ5%2FWBfZd0irZS4ikNL015qhQ50vjvmlnxsYPQ2%2BEzNDXHOwuSdBSm&X-Amz-Signature=da5f519249a05942d63d7723b5be8c46744130da266adb379607662b46b4555f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JUJ3RQX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy6u3ugq8gZccZ7APyoqeE0a8IrUBnbHfKyrXncDDErQIhAKu2YkcLG8J9rGj%2F%2BWiZpJafTZThoNmqoTzWg8qcJlHfKv8DCF8QABoMNjM3NDIzMTgzODA1IgymGvVmHebzaFRl%2Bf4q3APOXxbpE9JoB6cXVCZukcgA0SppNGU3E9%2FRl9ZbUOJUPFVYeR3V944NuZU7gBCJK%2B49ef9MisH%2BpXtE%2BsNpeiHqeVEYcp4mvRALqx5Ypzde9CeiK%2BFXFvWcZdxiUptWbieVn%2FMFvWt0YkihQ4hmcnWCVrSsDmT7sW2%2FHtwJP5M8wW2mAJIWt7zZEb8ftxiBnk4%2F2OKfc5J6v%2B6R91dB6hj26vY5cfbRNeNsa6t10G%2BFGWVP25xDxJXBNT%2BZuuHNPw96VqWLulYmrokBNpzUo6d8I%2FA0ELkAnUWzbTQrcHhwRR%2FnfuSWPukoHAHHuLsOWkQ%2FxTDqh8mjWN0%2F8vbhXGGNkXNCfs%2BFH7b0hl8G5QVyOdtzOqG1kWvsi8AXY9sflSV6KcPrjVtWfj8JITEx5iahQc8ta4GfHw2UMc9rBLQuBOQUGKAlItyumpqjRoTvJfIuyG9McBSsnnS2zjpvSgPCV8714TcgvSSg4o9nSkNV3yMlIeerXTDOP7654DuM38RN%2FMw1MWS93k%2FsJnlrpgaKWC0q8xLmYV2FtmbXHftQjpdajoHkNKa7YUW7RywvgTHl9HCgt%2FCKabLZq0dhjYZoRSg8U4dpAzl6ttO7bgZolr0Gk1vGmIzn%2BUNMYDCLysvJBjqkAfcrhlFkjju74lESyn4%2F%2BEoGPruAQbQ99gwOa4WLs6kUZkWulYU1HcXr79Y6HYbKchTO%2B7dOLpgHxdBl0%2FDqzlgsnfSxvN6MZihMWt0y78DvWAWcMak6Zj05YeApnCtYdMXSBgzRQMYZ8qnT60po9HyLCcTg83y9GDFJ5UCJ5%2FWBfZd0irZS4ikNL015qhQ50vjvmlnxsYPQ2%2BEzNDXHOwuSdBSm&X-Amz-Signature=db0f31107896df92a132e0325fbea25c041ad8215d47bdb387bee01354637d62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

