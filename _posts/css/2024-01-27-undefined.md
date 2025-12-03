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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6RKFWB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T044943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCSBDUvg%2FVK820vN89PikSWksK2KKRgMo2Lfjfgxo4sVwIgd0RoGq2VN9UFzKqa%2FPTRRVwC2HXqlkFhBQ7QSwgdYcYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFgEao9GRSa4mm5QqCrcA5hVzgToiFa7w601Kuc9wzqXU%2BgSdo4g3qlwRsivLP21DDEWlApnocx6Yuf1KhT%2BprK34e1QVIv4%2FqyM94FoLDisohhqTJJYdPDD1ob4t2tfGxksPuz5sYpBZ4hAzJor572LBkyw5QWm0hBmFTfPjiK%2B0YaBENKkszU3y6sd9zmLU4alWR3isH75JyyFih5Hb%2BNn4VUZu1Vs1egdpghHE0pIIysCi9HwGcILGtSryyoMWOrhPddkCO73%2F3XuJ3qzkXHnjFz%2BhPZzrotx2gCCbk1U6u5KIqoGjv6Zsxdy2dxiURPWnVn%2B57qLO9jRl%2FzHAR8n1EYDvNj5KhXvYXQOPeDnNjVOVg8CjGziHU6EeQHB6fq%2BA22Z6ysp5cCebvzR6iCN0%2FfpRgLnKnJdgLIBML9A4OQF%2Fpbb4Wj3H3dZsx0kD6BpAhU7DjAxxKm%2FxVTZUDvcFO05ZG7oXT3YwH2d6OtddU%2B8mV2GsY3PxUS3SQ58HSh27vQDbQ4YDoIwm%2BpjL49gGcoUwmWqaNxaHfI%2F76ZKBAUDP48bQPVib3nkAvJYyGzq%2F0Ge6NpO1wMd90NEXWOYTdeeGuPVJVvkJpMrW1DnyJrHG5T4PBWshIXymAeHGd5irpnRWTfvoHteMNGUvskGOqUBi7j4%2Bm7HEWieXqOS478PJez1tw2ylbSqF7UW4ZZvEQAKdnZVxBtc4Oioob58lJBTEHns5%2BJXYSyP3sbas33ERqbN96%2BUqU07IsHAu1vmQ3%2F78yHp2D2E3Dp%2BgYoraqxljP%2FwSVPN0ubj58LvxhPCaD2yN3Is0QYc3ggSzDJKMTk94dmvcyNYbs7MqFbiH7AbYjU0lMXB3%2BMWeiywHYhm23eseIN%2B&X-Amz-Signature=f87d046b7fcba44621abe1ad561c95e47f396b6138a37cfcd3561602fa9269d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6RKFWB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T044943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCSBDUvg%2FVK820vN89PikSWksK2KKRgMo2Lfjfgxo4sVwIgd0RoGq2VN9UFzKqa%2FPTRRVwC2HXqlkFhBQ7QSwgdYcYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFgEao9GRSa4mm5QqCrcA5hVzgToiFa7w601Kuc9wzqXU%2BgSdo4g3qlwRsivLP21DDEWlApnocx6Yuf1KhT%2BprK34e1QVIv4%2FqyM94FoLDisohhqTJJYdPDD1ob4t2tfGxksPuz5sYpBZ4hAzJor572LBkyw5QWm0hBmFTfPjiK%2B0YaBENKkszU3y6sd9zmLU4alWR3isH75JyyFih5Hb%2BNn4VUZu1Vs1egdpghHE0pIIysCi9HwGcILGtSryyoMWOrhPddkCO73%2F3XuJ3qzkXHnjFz%2BhPZzrotx2gCCbk1U6u5KIqoGjv6Zsxdy2dxiURPWnVn%2B57qLO9jRl%2FzHAR8n1EYDvNj5KhXvYXQOPeDnNjVOVg8CjGziHU6EeQHB6fq%2BA22Z6ysp5cCebvzR6iCN0%2FfpRgLnKnJdgLIBML9A4OQF%2Fpbb4Wj3H3dZsx0kD6BpAhU7DjAxxKm%2FxVTZUDvcFO05ZG7oXT3YwH2d6OtddU%2B8mV2GsY3PxUS3SQ58HSh27vQDbQ4YDoIwm%2BpjL49gGcoUwmWqaNxaHfI%2F76ZKBAUDP48bQPVib3nkAvJYyGzq%2F0Ge6NpO1wMd90NEXWOYTdeeGuPVJVvkJpMrW1DnyJrHG5T4PBWshIXymAeHGd5irpnRWTfvoHteMNGUvskGOqUBi7j4%2Bm7HEWieXqOS478PJez1tw2ylbSqF7UW4ZZvEQAKdnZVxBtc4Oioob58lJBTEHns5%2BJXYSyP3sbas33ERqbN96%2BUqU07IsHAu1vmQ3%2F78yHp2D2E3Dp%2BgYoraqxljP%2FwSVPN0ubj58LvxhPCaD2yN3Is0QYc3ggSzDJKMTk94dmvcyNYbs7MqFbiH7AbYjU0lMXB3%2BMWeiywHYhm23eseIN%2B&X-Amz-Signature=7a3923a1efe25f645605988f1111e4c7bebe40ac2d7a04390cda32231a1bbdd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

