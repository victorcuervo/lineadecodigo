---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664URRRLAF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ReTf2FhlR%2FdDlZY4gv%2F6MlZm6Vp%2FiFJINn5d7jxmAAIhAK5Ibnx9HXrvb9DPMO49weAn1T7b6wwVIB7abeWd6mDJKv8DCE8QABoMNjM3NDIzMTgzODA1IgwN8YI9inlzg7zpmKAq3APtCvWT5WOIY0%2BtmP8btwubEAGPlEtPXSk5VVrXwmm%2BTPbaXExbUZOmwz2Y2ChOC7gnI7uS8N7cgupUFv6CYx5TTwwd0xtpdXELISZGIkc2qUih%2Fr2PP5bcBUm2LCHd%2BCPHqGhgZSXEIlxGq8HNyafEOujfqbtik1H3kiXBKxznlfStD2YdYb4%2FhRHrAqjJX4J3%2FH7sfpdNmgK%2BtDXQZvBAdmZOmbQ0tw63nyYa5yR4BW6vCng3AV5DNFbjCx1Okf2Yl2dnlcg%2FsIPWNxenqOCUwiobytJSsIDMVk7PXcW73P%2BQWDBjxzGXw%2BQZI5zRcVqBMK4%2FS4aKQ9XsI9rgbwOqM2Z%2FWXxZN7Srt9643SHo8Wf4DiSdUpm6Kiu9gzhHsQy8HizNU7tbFM5vUfYTkDETrAw106J3QFz0wJ%2BcT0lHeyHDnriO8GI1FxyKc3483fwvNq1JCelhi%2FmXIeiMQ4w86WpB%2B2ETSTA9RrJw4qF9Bggw2ipoOLZtf7J5sAzMhNsOkME67hdFc9jixpgkXY0yAXMtd4TCXDc9UUYm6br29enzKEB3%2FhU%2FXQ9uvoCOfiH4JbTuy3%2BCFbwtcbjlzOfe85nlzse9RmCP23egYSR98IA%2BpzxN33dQIqHiDDCHjMjJBjqkAd4dC5QwWOFUYaqDiIVoQoc8q2SkWyZ5ypCoOza76ov9XdEkt%2FdnR%2FQH%2B4GOVI7NixqbYzfwrRqB96mWSocurIrRMQcCN0HBz4QuMd%2FQsIDaK0Kbqt7dNjNpITTYjiVgHuKonEvSJzwH16oj37UuZKXIc4cVJ3WblL3WfkPIkTxUGYxcBSudImhI4ac%2FFp3Olu45Kf59o39W44OF3yn0QfFj%2FTiq&X-Amz-Signature=494717ae420e9b2d975d7bf34317587216323470e50b800109d39bf280cbf239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664URRRLAF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ReTf2FhlR%2FdDlZY4gv%2F6MlZm6Vp%2FiFJINn5d7jxmAAIhAK5Ibnx9HXrvb9DPMO49weAn1T7b6wwVIB7abeWd6mDJKv8DCE8QABoMNjM3NDIzMTgzODA1IgwN8YI9inlzg7zpmKAq3APtCvWT5WOIY0%2BtmP8btwubEAGPlEtPXSk5VVrXwmm%2BTPbaXExbUZOmwz2Y2ChOC7gnI7uS8N7cgupUFv6CYx5TTwwd0xtpdXELISZGIkc2qUih%2Fr2PP5bcBUm2LCHd%2BCPHqGhgZSXEIlxGq8HNyafEOujfqbtik1H3kiXBKxznlfStD2YdYb4%2FhRHrAqjJX4J3%2FH7sfpdNmgK%2BtDXQZvBAdmZOmbQ0tw63nyYa5yR4BW6vCng3AV5DNFbjCx1Okf2Yl2dnlcg%2FsIPWNxenqOCUwiobytJSsIDMVk7PXcW73P%2BQWDBjxzGXw%2BQZI5zRcVqBMK4%2FS4aKQ9XsI9rgbwOqM2Z%2FWXxZN7Srt9643SHo8Wf4DiSdUpm6Kiu9gzhHsQy8HizNU7tbFM5vUfYTkDETrAw106J3QFz0wJ%2BcT0lHeyHDnriO8GI1FxyKc3483fwvNq1JCelhi%2FmXIeiMQ4w86WpB%2B2ETSTA9RrJw4qF9Bggw2ipoOLZtf7J5sAzMhNsOkME67hdFc9jixpgkXY0yAXMtd4TCXDc9UUYm6br29enzKEB3%2FhU%2FXQ9uvoCOfiH4JbTuy3%2BCFbwtcbjlzOfe85nlzse9RmCP23egYSR98IA%2BpzxN33dQIqHiDDCHjMjJBjqkAd4dC5QwWOFUYaqDiIVoQoc8q2SkWyZ5ypCoOza76ov9XdEkt%2FdnR%2FQH%2B4GOVI7NixqbYzfwrRqB96mWSocurIrRMQcCN0HBz4QuMd%2FQsIDaK0Kbqt7dNjNpITTYjiVgHuKonEvSJzwH16oj37UuZKXIc4cVJ3WblL3WfkPIkTxUGYxcBSudImhI4ac%2FFp3Olu45Kf59o39W44OF3yn0QfFj%2FTiq&X-Amz-Signature=bad0ebdc70964480b5cc87176f1bb8c8a06b42de9c0ed2e7aeb2e1b6f0c6dadd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

