---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M5HNUWB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpbbFZWbM4X0zi6X%2BBqN8YB6NrRE03Qhr6Ds8T9kXnEwIhAK%2Fk4bjPqFLY5MV4R%2FOc5sJIldrj5%2FHi4J5BcjnHfGULKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuBwciSpQBhrySwlQq3ANYXw%2FJkpVvYKQRoRnSQWjWliZwXa5on8K3HVeR9fjZ2UQRcdn3k%2Bdvtj8fgMvVtBUvN2bquycrxNai2YD%2BJ7ZjycmuMgJpAa8TRiwT%2BHEDO%2Fuiuz81HsR0A5noO1ag8EFGn%2F9jqB0W4JfkJLkq8egYGFGvvARWFvHrLny8ZpBvSC5iq8foXWn%2BG2dPtRTAazCxUfce73yH2ebLmYf49Mj1JPfFy0NNYOyEDsPygZW47GDNAGUUrYnobpO9Sm3rOCAZCdx4nsljxYG40RYUn8J%2FEhpYE75Nb3XueOIN2DDIZCiakuBc6lURUMXLTTI%2BGPWoLA1%2FW5p0lvfC6c9UBPew5jODX0R0dfvLXqa%2Fxc0QVzoJVF3tFKSdCNOtYV9MYr1zYmWVILgOl2ziXGHyWpvf1h%2F3GUw%2FkxkeNwrD5UkLQPBS5tEQymWxBCzidl9bu5zU%2BFJ53kKQyAUqvE41k9T4%2BQI35kXoq9T1t0mkA%2FlDq%2BeV0cS530EzKyqfkofx5jCBrXlVwqmlVSjfhrxM%2BxOeKRL0xW85UcxyznD509HqmhrTJwM3w8nziqc%2BicOKmxIG6%2Br7AZuMGRZPgJANWHe3v%2FdKhAHuOgMOzAwUaOWuauxnnaGcsJo2nB9RIDDTmdXJBjqkAfBhlFJUNOUj9I0PTj0T8yw%2FiNZ7n57gD2FUJFUjAOxzyJGvW78tt5BmCGXAbjqEC8q08eX60mjyrUlHyrGJBJU%2B335WqmlV%2BEhBVZh7j4qx22ZVxqO6SAkcp61kTWs76cHRYocximntbbAkFiTj%2BYG6Js0YGV1Z4RRaX4LuPNWaSBIQcTHOOqYUKkvZcEg6m8qKv70VzQ5ceHVopoDGOz6SUmlH&X-Amz-Signature=66f6f0a4027930463d68fa7b217fdd0559ce13e77c84de3cd05c06c6b2622107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M5HNUWB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpbbFZWbM4X0zi6X%2BBqN8YB6NrRE03Qhr6Ds8T9kXnEwIhAK%2Fk4bjPqFLY5MV4R%2FOc5sJIldrj5%2FHi4J5BcjnHfGULKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuBwciSpQBhrySwlQq3ANYXw%2FJkpVvYKQRoRnSQWjWliZwXa5on8K3HVeR9fjZ2UQRcdn3k%2Bdvtj8fgMvVtBUvN2bquycrxNai2YD%2BJ7ZjycmuMgJpAa8TRiwT%2BHEDO%2Fuiuz81HsR0A5noO1ag8EFGn%2F9jqB0W4JfkJLkq8egYGFGvvARWFvHrLny8ZpBvSC5iq8foXWn%2BG2dPtRTAazCxUfce73yH2ebLmYf49Mj1JPfFy0NNYOyEDsPygZW47GDNAGUUrYnobpO9Sm3rOCAZCdx4nsljxYG40RYUn8J%2FEhpYE75Nb3XueOIN2DDIZCiakuBc6lURUMXLTTI%2BGPWoLA1%2FW5p0lvfC6c9UBPew5jODX0R0dfvLXqa%2Fxc0QVzoJVF3tFKSdCNOtYV9MYr1zYmWVILgOl2ziXGHyWpvf1h%2F3GUw%2FkxkeNwrD5UkLQPBS5tEQymWxBCzidl9bu5zU%2BFJ53kKQyAUqvE41k9T4%2BQI35kXoq9T1t0mkA%2FlDq%2BeV0cS530EzKyqfkofx5jCBrXlVwqmlVSjfhrxM%2BxOeKRL0xW85UcxyznD509HqmhrTJwM3w8nziqc%2BicOKmxIG6%2Br7AZuMGRZPgJANWHe3v%2FdKhAHuOgMOzAwUaOWuauxnnaGcsJo2nB9RIDDTmdXJBjqkAfBhlFJUNOUj9I0PTj0T8yw%2FiNZ7n57gD2FUJFUjAOxzyJGvW78tt5BmCGXAbjqEC8q08eX60mjyrUlHyrGJBJU%2B335WqmlV%2BEhBVZh7j4qx22ZVxqO6SAkcp61kTWs76cHRYocximntbbAkFiTj%2BYG6Js0YGV1Z4RRaX4LuPNWaSBIQcTHOOqYUKkvZcEg6m8qKv70VzQ5ceHVopoDGOz6SUmlH&X-Amz-Signature=09569384c4d8c6fc84331b763aee44e48a8bb862af95aee09da92cad070b86bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

