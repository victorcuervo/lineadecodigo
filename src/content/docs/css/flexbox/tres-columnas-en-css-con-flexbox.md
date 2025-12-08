---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHPXTACW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7NsvYyQgC6n2zJgIzpoPC3q9J8UGoVhwo5BOcZF%2BXNAIgMnl34c9hsNsKp0KpJw%2Fz3vFsyMAJK8d9AUeDg9ykxrYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxcgMiX9gdSLaQjjSrcA26t2wJESmcxiUUhdY8OGMnQXyqtDyDG3YOWhhL%2BPgxapolhgrazvlBnCVrklYL5ifKvrG9HuAuR36D%2BIkjfbZGQfzlLGgRhsJ3p2KZrzQr3J6lJrq%2B2Jy7wH3I02kjihSbD25Ri9g4ftt15T5nPpy%2BJytzXKk8VP%2BnKvpkH6zBgiFhoo6IFgLaqi%2Fy%2BcKxUSwM%2FtieMJ%2Fla7GjAJasAuDVLLKujdgkqFyC5r2QgQrZ0l1kfz9%2FojM3Kj6QMzYmdnfAo64hm7k3buKzMMThIg7x2TxOXSGmAWTjynMiAawY%2B9MI8uqWEjKgdgXvbgLkk5UUAachL6nKSu5el%2Bju0txxoalE5BffOb9RM9LxGAvCiHWA%2B1Ifmx7WB%2FWfNNRsAKYSGzNGmCYClQfsFjTGStsMwlRjI%2BuGdbLsTW%2BR493fm3uvG3ZE67ic%2FC0SLNkFchF6Nm2ZeOQBepKa8ltE5xw2BDJLKC6dcWvM9zloGWkQZxDRb%2FIi8vsPphCZc892UdV5qxfDpX5wPxqXzlZ0FWLlJHuDNceCNStaIZoCgf9Zzd3hjgL4dRsfRhrks7Gl3QD%2F6z%2BXEzsez2Pz703mSSLTdLjrey%2F6R7etm8k925rool2%2BeaaA77CmPW%2FMtMLDk28kGOqUBNVuIlrt7molYd1tIquPzu4eX2X%2FBiegbv4h0x1i0RpRFHI5XQjhBye1iBqwuoRgLBkUw%2Bd1eWYr23M%2F8eZ4TzEtHD4TSlVeH5Wa%2BXoY5WTvp9zZhy8dSuYtBmvhqIjtnuXUrzxDra21i4BJyQSAKH9%2FkX4EW%2FUlho8gvsyGrPfWkYLiZYiWj7DDrf47TfKqW%2Bd3h5Ak0UFF1ej8mWVR8y9jawrDP&X-Amz-Signature=68bb4aaac3d3b8c3ff409093b9b661739485e2cea57d9f88f95db52985e0dded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHPXTACW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7NsvYyQgC6n2zJgIzpoPC3q9J8UGoVhwo5BOcZF%2BXNAIgMnl34c9hsNsKp0KpJw%2Fz3vFsyMAJK8d9AUeDg9ykxrYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxcgMiX9gdSLaQjjSrcA26t2wJESmcxiUUhdY8OGMnQXyqtDyDG3YOWhhL%2BPgxapolhgrazvlBnCVrklYL5ifKvrG9HuAuR36D%2BIkjfbZGQfzlLGgRhsJ3p2KZrzQr3J6lJrq%2B2Jy7wH3I02kjihSbD25Ri9g4ftt15T5nPpy%2BJytzXKk8VP%2BnKvpkH6zBgiFhoo6IFgLaqi%2Fy%2BcKxUSwM%2FtieMJ%2Fla7GjAJasAuDVLLKujdgkqFyC5r2QgQrZ0l1kfz9%2FojM3Kj6QMzYmdnfAo64hm7k3buKzMMThIg7x2TxOXSGmAWTjynMiAawY%2B9MI8uqWEjKgdgXvbgLkk5UUAachL6nKSu5el%2Bju0txxoalE5BffOb9RM9LxGAvCiHWA%2B1Ifmx7WB%2FWfNNRsAKYSGzNGmCYClQfsFjTGStsMwlRjI%2BuGdbLsTW%2BR493fm3uvG3ZE67ic%2FC0SLNkFchF6Nm2ZeOQBepKa8ltE5xw2BDJLKC6dcWvM9zloGWkQZxDRb%2FIi8vsPphCZc892UdV5qxfDpX5wPxqXzlZ0FWLlJHuDNceCNStaIZoCgf9Zzd3hjgL4dRsfRhrks7Gl3QD%2F6z%2BXEzsez2Pz703mSSLTdLjrey%2F6R7etm8k925rool2%2BeaaA77CmPW%2FMtMLDk28kGOqUBNVuIlrt7molYd1tIquPzu4eX2X%2FBiegbv4h0x1i0RpRFHI5XQjhBye1iBqwuoRgLBkUw%2Bd1eWYr23M%2F8eZ4TzEtHD4TSlVeH5Wa%2BXoY5WTvp9zZhy8dSuYtBmvhqIjtnuXUrzxDra21i4BJyQSAKH9%2FkX4EW%2FUlho8gvsyGrPfWkYLiZYiWj7DDrf47TfKqW%2Bd3h5Ak0UFF1ej8mWVR8y9jawrDP&X-Amz-Signature=6a8db48fe13fda07cf2f0bbaf50e7d4cea192a35ec0eb34ccfb479bda4150731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

