---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVNO4NN3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCheOtwIoApF81cYMGzOcwdPIues79J%2Fk2vjXdIeclrJgIgYxw%2BmzVZ09x37nKyv417z0pUtB6%2B95cKJtEk6AXWwjkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMlXgzehqC%2BKafWn0ircA83wvybqdRWWwncOndnFwZjUPbLWG645XD19Ds9RDCKyaVzk8adxbZE%2BAEtWgV5Su8Dx%2BJd3IGtKFrR4OCDwTNXFmP%2F9kNpNlVtetWf5DL%2BBA5JWwQ0D9S705ANvjkX8VdvT3sx9d5mO9CrVoEMMRNwx%2BoTab2ogpFgKGjqE20MV%2BH0hgr8S%2Byc%2FZVUCpQTeKGEIxCx24RQ82PCJgYdCQeOuiGe361hFBLXsRGwL%2F0IV9oP0WjMiwSYrrLfYTuZFIqkFZCD5ingWnn%2BaHglBW%2B4OsrRMGaore5tTueBTqFsAgD0zCwwBh4XVhzVVa8ly8C9eaowy5ThppUW15ghgDiO%2BH4ZWoK%2F%2F4DGtt7DWkKRtWpQjbeTKAx1OxkDSnQEihHOnRNWRrJCvfp1g0pofXhCB80p1ezLiNEgKZY4ABpS1jVbTPOh47xoMNJH%2F1rNXe7y8%2Fs2A7UaiqI3wsHHAdgxnA2viv3ZNhLJjVCPzfDN66iHZfhDUqQlyJM37c2A55OAxLztD6KlTI7zUEyvviGEtoSGJBSYLj1es945KbuiJoRt0%2BG6CCxtUySSSo9xnLrlNvLPIj9eZg9z8wGj4AJT1423vuwvJQCa9%2BEbxFw%2B7aeBc2HZmowg7wSxkMLq%2BxskGOqUBVXXFGg571ThpvcZ0pXaSAnSpA%2BOpobpFw8KRk0MqaZ%2BIh%2FKWnfZ5VBZpcdlR8VCGInZgbVs01eRsxtWoVxOFRtfqLUCidX6L1Hx6l%2FjJBqZbu0eGSsMIX6JwzHGufOc40ZLo1lZeBcpLcv%2F9eKdMD9a7Yg%2FFZ2f3%2FLCytm4KxHa9MW%2Fc7unPhhNtZHoTHJXK6qRck5lku0b9zuYaordybDhWBAZk&X-Amz-Signature=f73336041be2411624eb793f172ae8668f7791c9b2562e683e2538e08e7443c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVNO4NN3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCheOtwIoApF81cYMGzOcwdPIues79J%2Fk2vjXdIeclrJgIgYxw%2BmzVZ09x37nKyv417z0pUtB6%2B95cKJtEk6AXWwjkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMlXgzehqC%2BKafWn0ircA83wvybqdRWWwncOndnFwZjUPbLWG645XD19Ds9RDCKyaVzk8adxbZE%2BAEtWgV5Su8Dx%2BJd3IGtKFrR4OCDwTNXFmP%2F9kNpNlVtetWf5DL%2BBA5JWwQ0D9S705ANvjkX8VdvT3sx9d5mO9CrVoEMMRNwx%2BoTab2ogpFgKGjqE20MV%2BH0hgr8S%2Byc%2FZVUCpQTeKGEIxCx24RQ82PCJgYdCQeOuiGe361hFBLXsRGwL%2F0IV9oP0WjMiwSYrrLfYTuZFIqkFZCD5ingWnn%2BaHglBW%2B4OsrRMGaore5tTueBTqFsAgD0zCwwBh4XVhzVVa8ly8C9eaowy5ThppUW15ghgDiO%2BH4ZWoK%2F%2F4DGtt7DWkKRtWpQjbeTKAx1OxkDSnQEihHOnRNWRrJCvfp1g0pofXhCB80p1ezLiNEgKZY4ABpS1jVbTPOh47xoMNJH%2F1rNXe7y8%2Fs2A7UaiqI3wsHHAdgxnA2viv3ZNhLJjVCPzfDN66iHZfhDUqQlyJM37c2A55OAxLztD6KlTI7zUEyvviGEtoSGJBSYLj1es945KbuiJoRt0%2BG6CCxtUySSSo9xnLrlNvLPIj9eZg9z8wGj4AJT1423vuwvJQCa9%2BEbxFw%2B7aeBc2HZmowg7wSxkMLq%2BxskGOqUBVXXFGg571ThpvcZ0pXaSAnSpA%2BOpobpFw8KRk0MqaZ%2BIh%2FKWnfZ5VBZpcdlR8VCGInZgbVs01eRsxtWoVxOFRtfqLUCidX6L1Hx6l%2FjJBqZbu0eGSsMIX6JwzHGufOc40ZLo1lZeBcpLcv%2F9eKdMD9a7Yg%2FFZ2f3%2FLCytm4KxHa9MW%2Fc7unPhhNtZHoTHJXK6qRck5lku0b9zuYaordybDhWBAZk&X-Amz-Signature=e437d8e619f45eb1632e542e067b6e1e0f59c89bddfd4349c6d171bf47ee1094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

