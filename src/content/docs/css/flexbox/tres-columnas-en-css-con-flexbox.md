---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUPLLCR4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T002751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5UNCjzT6%2Fk%2BM8IXq7dVD5RaCC2NxMLLL%2F%2BtM2c2BHOgIgaKPHEPwN8O9LsdKKCMLOwPHU5EFQBFjDeb4jHnS89Ccq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHWt5lH3Cp8y7EqJ1SrcA6nlWzgmWUoyDAV%2B%2FzR9WIc2thZ0AhXCvK%2FlKp9K7VfwrkNNRVfKbtouA0jfOEJKIX5YeU75Q2HcotL8bbMwt7Izs9tSDqlkdWlmlnQ9H5EDnQeLBOYyK5slhYh8p9BUHP9N85fEYeFN1Eo4h0njX0j%2FKWzM6noTYQH%2BqeF3%2B7z6Nn5ekuA%2FUXSkGCB0DR4j1Ctn%2FslYGRyo4gQJcsFo38K6ns4oAHiNFkIIHJ%2BbEeaE6MJ6X9BJUV8l8%2BplptcCI0jF%2BIp1bDkPJzTJ9KXYKmMXzd0cc%2BN4AvFi6MVuUdtBRo5kVTuUCYb7kMbIpUE4CNkYDxcunaq0ojk0mgq36VK6q85nNVcLBLQnhWAGZ9APxOb4MVSxau0iclSnv5kv2wrZqyT5atHlbzSfYaaTYuN6u3TuIFOUwC%2FPKDJpOaEtjp3NST36nEksF0YAZi8JYZBZhHMmg%2B2MlSRedWB2AJXqcJtywhG%2BuFVFKCyYuVdG%2FXCw7gZ8gnOvAveqB896vVF7onf1CHQ6SuPClxjZ32xBUk27GPxVdig6aEy%2Fyya5mBR5ZLWT4WqhN3jaOjwco8DccSuLWsFHOyYYH%2BmJTrDMXsgoorNEgf9Yv0cYLF%2BgKiC6AYjiZO7AdOH2MLyMyMkGOqUB9kmPh%2F4WZIR%2F06GHQqTKbBvrj7MgkfrH6wHCM7ig2aprMg7RmkQSf1GsW8%2BSjobooarpbKqJfC1ei7NCaP1pC0SOdWIjMatfIhXYMYwT%2FFXY8sDzCrutBVhSki%2BCkFg18eskgOdpXMtx7J%2Bldz123lNMxg%2Bf3B1Be6i67ENVWBsc9FeNsT1TAdtG8A4lPVb4RwFfl6o8gr0I4v4%2FH0aKOqR%2BG8KO&X-Amz-Signature=b9661d8dfc50dbf4ed4b9b33ae4372c7da7eafea1f1d28d378dabb8ba07db2c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUPLLCR4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T002751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5UNCjzT6%2Fk%2BM8IXq7dVD5RaCC2NxMLLL%2F%2BtM2c2BHOgIgaKPHEPwN8O9LsdKKCMLOwPHU5EFQBFjDeb4jHnS89Ccq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHWt5lH3Cp8y7EqJ1SrcA6nlWzgmWUoyDAV%2B%2FzR9WIc2thZ0AhXCvK%2FlKp9K7VfwrkNNRVfKbtouA0jfOEJKIX5YeU75Q2HcotL8bbMwt7Izs9tSDqlkdWlmlnQ9H5EDnQeLBOYyK5slhYh8p9BUHP9N85fEYeFN1Eo4h0njX0j%2FKWzM6noTYQH%2BqeF3%2B7z6Nn5ekuA%2FUXSkGCB0DR4j1Ctn%2FslYGRyo4gQJcsFo38K6ns4oAHiNFkIIHJ%2BbEeaE6MJ6X9BJUV8l8%2BplptcCI0jF%2BIp1bDkPJzTJ9KXYKmMXzd0cc%2BN4AvFi6MVuUdtBRo5kVTuUCYb7kMbIpUE4CNkYDxcunaq0ojk0mgq36VK6q85nNVcLBLQnhWAGZ9APxOb4MVSxau0iclSnv5kv2wrZqyT5atHlbzSfYaaTYuN6u3TuIFOUwC%2FPKDJpOaEtjp3NST36nEksF0YAZi8JYZBZhHMmg%2B2MlSRedWB2AJXqcJtywhG%2BuFVFKCyYuVdG%2FXCw7gZ8gnOvAveqB896vVF7onf1CHQ6SuPClxjZ32xBUk27GPxVdig6aEy%2Fyya5mBR5ZLWT4WqhN3jaOjwco8DccSuLWsFHOyYYH%2BmJTrDMXsgoorNEgf9Yv0cYLF%2BgKiC6AYjiZO7AdOH2MLyMyMkGOqUB9kmPh%2F4WZIR%2F06GHQqTKbBvrj7MgkfrH6wHCM7ig2aprMg7RmkQSf1GsW8%2BSjobooarpbKqJfC1ei7NCaP1pC0SOdWIjMatfIhXYMYwT%2FFXY8sDzCrutBVhSki%2BCkFg18eskgOdpXMtx7J%2Bldz123lNMxg%2Bf3B1Be6i67ENVWBsc9FeNsT1TAdtG8A4lPVb4RwFfl6o8gr0I4v4%2FH0aKOqR%2BG8KO&X-Amz-Signature=0d7a88d6e5a7327390d5216d20f773dc34f617eea5b79e229ecd48eeff50b95b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

