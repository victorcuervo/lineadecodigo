---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQDQQL57%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAI92ujxZI9%2FrvVRmpzPm0j4aRF4LewZ8LjGLEoYHFKwAiEApKAbII0SV7Ui4S%2B95rGn%2BJxExgfw8sF1iE83P9hgjUQq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDOrAC9ibXlJ%2Bo2cL%2BircA41wUuCgDOJwRl6oWqBegT8xaDLgZFLXLbaKZ5Kg2mfYP6S3GjMmQqf5HqJ1m77jDdzWuri5dp4L7YSvC9h2hF0KjUafX%2F385DYj179QYLzJys4nwoKkBFc%2BD6rL86aDRSarNucruXI4yIHrKygCqsVloO9D7kl6%2B5A6zCytb%2BI5eoAmqcXcVw3fO6bTyqQUjVXNfukfZpzmkNsbKklAkJeYymmYGijIbQ7g5HqKwFf1QslfOGbXW%2FYcempJ3nc1kNjG2GKK%2Fs8RX4IRjM7fZgDbQ%2FJyBwrKwTIrojylbff1yxbDYlbjEneUbYZGVExnQWdwdioSyn5hG3QYTpg4YTvR6%2Fb3m4TWTGssvA5qeP08zNpmi2cdnjPX%2B3ZoQrKGdxfXsJNAYdhmyyi0GFBmavSqNjH6pD1%2B8sSx241qzdgsC4tN0HRyV%2BWWF66Kq4cbpiefmRkOPqIUQNBurkD8BBPJOv8qUO75Jf6TemtwPzj1DoGkoNUXZJclp4CZisnjJNtmDLCFRCQRS9KZPV9Y0P5gjTFf6q%2BeLCDN3%2Bd4IqQNrkIt1wVbE3baWGUR%2BJMs9rS8RoNDLy6u%2BeIo0TCqRhLl0%2BDiRlIhtuKexYG0MzVpsLpnyBWwJWXYZBm2MKHozckGOqUBDlD2x9OMXJTvsVwqciqPoEfBVE4ySDK3IWHMcPvh7IX6GUIT1bGwNYQB0AZBMoYIaC8UOegsXqQAYn0kop%2Bk0vrq1qf4lGG36wkK8ztJ9uMeOmBUWo8EbVH5HI3Q2Fo9hzwtKoqPiFPit12mscFrA%2FevwtMw8hWzpc4DsY2Y4EqchQQeLiOcTIy%2FeE7JqU3NrJx5edpnYH%2Bjz32hZEvCki%2B7EtiC&X-Amz-Signature=8417bb8dcd85005de094a72a67b918a0db9fe480e3f9bcf1d897e0a4048eb9a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQDQQL57%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAI92ujxZI9%2FrvVRmpzPm0j4aRF4LewZ8LjGLEoYHFKwAiEApKAbII0SV7Ui4S%2B95rGn%2BJxExgfw8sF1iE83P9hgjUQq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDOrAC9ibXlJ%2Bo2cL%2BircA41wUuCgDOJwRl6oWqBegT8xaDLgZFLXLbaKZ5Kg2mfYP6S3GjMmQqf5HqJ1m77jDdzWuri5dp4L7YSvC9h2hF0KjUafX%2F385DYj179QYLzJys4nwoKkBFc%2BD6rL86aDRSarNucruXI4yIHrKygCqsVloO9D7kl6%2B5A6zCytb%2BI5eoAmqcXcVw3fO6bTyqQUjVXNfukfZpzmkNsbKklAkJeYymmYGijIbQ7g5HqKwFf1QslfOGbXW%2FYcempJ3nc1kNjG2GKK%2Fs8RX4IRjM7fZgDbQ%2FJyBwrKwTIrojylbff1yxbDYlbjEneUbYZGVExnQWdwdioSyn5hG3QYTpg4YTvR6%2Fb3m4TWTGssvA5qeP08zNpmi2cdnjPX%2B3ZoQrKGdxfXsJNAYdhmyyi0GFBmavSqNjH6pD1%2B8sSx241qzdgsC4tN0HRyV%2BWWF66Kq4cbpiefmRkOPqIUQNBurkD8BBPJOv8qUO75Jf6TemtwPzj1DoGkoNUXZJclp4CZisnjJNtmDLCFRCQRS9KZPV9Y0P5gjTFf6q%2BeLCDN3%2Bd4IqQNrkIt1wVbE3baWGUR%2BJMs9rS8RoNDLy6u%2BeIo0TCqRhLl0%2BDiRlIhtuKexYG0MzVpsLpnyBWwJWXYZBm2MKHozckGOqUBDlD2x9OMXJTvsVwqciqPoEfBVE4ySDK3IWHMcPvh7IX6GUIT1bGwNYQB0AZBMoYIaC8UOegsXqQAYn0kop%2Bk0vrq1qf4lGG36wkK8ztJ9uMeOmBUWo8EbVH5HI3Q2Fo9hzwtKoqPiFPit12mscFrA%2FevwtMw8hWzpc4DsY2Y4EqchQQeLiOcTIy%2FeE7JqU3NrJx5edpnYH%2Bjz32hZEvCki%2B7EtiC&X-Amz-Signature=e4f6b5ccdb9f791a46dd7800704f21f6ae3260756c2f0946f1520d0d62b07d4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

