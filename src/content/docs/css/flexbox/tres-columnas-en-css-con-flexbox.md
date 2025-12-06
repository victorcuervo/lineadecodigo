---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQIXV43H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9woIyLzWO7gWH1IHc9PNWUnu94xBQy0qrmFFtfiKRmAIhANckhCfn%2BTng0QPSZOyv8Jfs%2B6wnlkbtkGDRgNpizb%2FiKv8DCH8QABoMNjM3NDIzMTgzODA1IgyMlFJaREKvzpGn3poq3AOyrK9pTcYzKjUy3oO1dzzK99VvL8docRGEF7ykBU%2FZ1TnQVldiVWoejssFJmjEA045oLAn1mPfuJPTsSLCPgvIA3knYJbWxg3CQPrVkfojaI2csYoArji%2FvcWJzexh2ycMoiq5oAjugsJfxT4feF2cXO7si0t5P7C0jlziQDt2YIxfd3nV3RB2AI9TFuzq4T%2FGJ4BmqYlJyGLNaCThaZWFc2SNzxQzJMt65vy1SYsjyDwGIdVIg6MagR9VwKV0Lmn3hp%2F329CEqePLTS30MfzfWVsYZ9Mq7763A31dx7M8vbiISC7%2B2ScKj1364Xc6M9MJsdFm3vjaFYEx6RETtgVWJypqGo%2BX4evfd9Izgk6%2FmmHyGAlvyemRacMWZXfKpUDCE3Z2cg8yjR95HqfhxI02X%2FTNe%2FF3FRlzup10WjAebkCpqvxfxfeBgrt3XDxWrbD0sCzyPx2Io1OlNUC94EOIlAoWYZ4bMU32zjLIl7re6Eod6Kr6HxVCXIN6NqMsOzCzua%2BldiInsiLfENoUn8w%2BUiZ0WfdfJRY%2BpcRZnF%2FKCiAzBIby93TvbQDLtaYQ82Te2qrKpAv44ykiojgjcf4jn3LjqG0Qce2wNQpn0c4gHs9OrhTwmRzaAex%2FaTDU09LJBjqkAdY%2F6y7rJxRKk6BKIVQFrAhjtqMAP7hUgPSRR8rp7co5vbmxilnEWE8%2FQR%2F%2FEgcXHxmH4hkq4OWhnGZFWT1Q%2BN7xoc7A0kapfk%2BjREhW2wNCRKvUwU4CbMoQmFYz8P1WUIkAX0FLKmpnQ8hiYApgIJ4%2BZqd2Irf6YBjWP2KT7bCKhwcA%2BR%2FDFNDgdYW4kCoOYMb61Db4GcDudBYGE5cwQPua1Zct&X-Amz-Signature=9082bb56c5a84ec8e567455fc8c1420ea1f55cb320524f6b94790d0b0339ec9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQIXV43H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9woIyLzWO7gWH1IHc9PNWUnu94xBQy0qrmFFtfiKRmAIhANckhCfn%2BTng0QPSZOyv8Jfs%2B6wnlkbtkGDRgNpizb%2FiKv8DCH8QABoMNjM3NDIzMTgzODA1IgyMlFJaREKvzpGn3poq3AOyrK9pTcYzKjUy3oO1dzzK99VvL8docRGEF7ykBU%2FZ1TnQVldiVWoejssFJmjEA045oLAn1mPfuJPTsSLCPgvIA3knYJbWxg3CQPrVkfojaI2csYoArji%2FvcWJzexh2ycMoiq5oAjugsJfxT4feF2cXO7si0t5P7C0jlziQDt2YIxfd3nV3RB2AI9TFuzq4T%2FGJ4BmqYlJyGLNaCThaZWFc2SNzxQzJMt65vy1SYsjyDwGIdVIg6MagR9VwKV0Lmn3hp%2F329CEqePLTS30MfzfWVsYZ9Mq7763A31dx7M8vbiISC7%2B2ScKj1364Xc6M9MJsdFm3vjaFYEx6RETtgVWJypqGo%2BX4evfd9Izgk6%2FmmHyGAlvyemRacMWZXfKpUDCE3Z2cg8yjR95HqfhxI02X%2FTNe%2FF3FRlzup10WjAebkCpqvxfxfeBgrt3XDxWrbD0sCzyPx2Io1OlNUC94EOIlAoWYZ4bMU32zjLIl7re6Eod6Kr6HxVCXIN6NqMsOzCzua%2BldiInsiLfENoUn8w%2BUiZ0WfdfJRY%2BpcRZnF%2FKCiAzBIby93TvbQDLtaYQ82Te2qrKpAv44ykiojgjcf4jn3LjqG0Qce2wNQpn0c4gHs9OrhTwmRzaAex%2FaTDU09LJBjqkAdY%2F6y7rJxRKk6BKIVQFrAhjtqMAP7hUgPSRR8rp7co5vbmxilnEWE8%2FQR%2F%2FEgcXHxmH4hkq4OWhnGZFWT1Q%2BN7xoc7A0kapfk%2BjREhW2wNCRKvUwU4CbMoQmFYz8P1WUIkAX0FLKmpnQ8hiYApgIJ4%2BZqd2Irf6YBjWP2KT7bCKhwcA%2BR%2FDFNDgdYW4kCoOYMb61Db4GcDudBYGE5cwQPua1Zct&X-Amz-Signature=6f44a743fc38ac8158ab236a7f142cdfd1fb915a36d3dc3509c0868e9c1fd256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

