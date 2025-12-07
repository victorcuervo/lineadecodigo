---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF4FWVHY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsDwFlEkrNiP2xKg58ABlHmfsf9dQfQOQESbUd5LapMgIgDQzRJShGI7wyjwSasMq%2FQMXCkX3b8VNnC%2B%2FlqSwgj1EqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3%2FzfsovB2pwKTE9SrcA98idLVZGB8iIAdwqyvsNAZ71M7q6Fk%2FInJfL9cN61U7Egg1bR7iJ1eGAtrq%2BZfQmae42yNmAQYKpvrs3tc6pu9vm7l4Aej56K0O3HOk5M2uUJ%2F7kL7t5s3FgE1kFMv7ivFsRlb2VvKTrgGhg8GxUEKBrgdjdlDbz4vIF3cAlg%2BQjT%2FuaAwpZtezhdra4w7K41QxZFGrgbOjN3oH2h0JM91QOecHfPwuVrN4NBEeemf43Z21GQGEOHaiaAJR3dN86JdKFlJiw7gc7CWFLLfkqSZm%2FkQshBiJ%2FYafrGSY8RsPjoigpgGFxbFfVJ3lmwYOOszdrPdZV3UH6rHFiAY4HHkPk7q9ehQvko3G9tjVj0kSzafkV2yeyJhy4wILekIQ4AvwDrlyzhpBRTW8arnkuaG34RmwsYaJA%2BCS2SI2iYnLySwysqO%2FZQkb5%2FwGwLoXrwf4nLdDzHsyGc1XVWCtUbPA7%2BAtL6e5WNI416yltnQPtBb8vA3UthWyNooLxN0J9%2Fbk9wP61vQYubv4H7BhOL8oulnLBRxaTarSWD3O576mjVE%2FpT0hZ1M3bk4jx4Kn6R962D%2Fk1rH73olaird337pTJcPMeX0EE3%2Bd%2Fv0Z4xvup%2BIk18dj1FGH7lNTMPid1MkGOqUBtlOwsuwcmQ3f4i%2FDfk6DZpkVIN%2BRn9MnjSy521msbNOKbp%2FKlHg9gGb%2BmlgjhoGpsyWnp8tab2h9g5S2FIx%2BuR9AK8VDKaECHGldTQHJakqBl64DYvIGx3V5G%2FhmoxuGLEWHLw%2FitDDafNAS%2FjfwXYCoea0bxa4hD5ted9RN0fTGQnHysmmXIz3%2Ft0JIvx9M03wE14cwN6Agz6plbkZj1PZKSQVk&X-Amz-Signature=df2f9a6c716e0a3f8fd4a41af1e6c96fa5afad7c90adbd57c5cc8eb84b87387b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF4FWVHY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsDwFlEkrNiP2xKg58ABlHmfsf9dQfQOQESbUd5LapMgIgDQzRJShGI7wyjwSasMq%2FQMXCkX3b8VNnC%2B%2FlqSwgj1EqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3%2FzfsovB2pwKTE9SrcA98idLVZGB8iIAdwqyvsNAZ71M7q6Fk%2FInJfL9cN61U7Egg1bR7iJ1eGAtrq%2BZfQmae42yNmAQYKpvrs3tc6pu9vm7l4Aej56K0O3HOk5M2uUJ%2F7kL7t5s3FgE1kFMv7ivFsRlb2VvKTrgGhg8GxUEKBrgdjdlDbz4vIF3cAlg%2BQjT%2FuaAwpZtezhdra4w7K41QxZFGrgbOjN3oH2h0JM91QOecHfPwuVrN4NBEeemf43Z21GQGEOHaiaAJR3dN86JdKFlJiw7gc7CWFLLfkqSZm%2FkQshBiJ%2FYafrGSY8RsPjoigpgGFxbFfVJ3lmwYOOszdrPdZV3UH6rHFiAY4HHkPk7q9ehQvko3G9tjVj0kSzafkV2yeyJhy4wILekIQ4AvwDrlyzhpBRTW8arnkuaG34RmwsYaJA%2BCS2SI2iYnLySwysqO%2FZQkb5%2FwGwLoXrwf4nLdDzHsyGc1XVWCtUbPA7%2BAtL6e5WNI416yltnQPtBb8vA3UthWyNooLxN0J9%2Fbk9wP61vQYubv4H7BhOL8oulnLBRxaTarSWD3O576mjVE%2FpT0hZ1M3bk4jx4Kn6R962D%2Fk1rH73olaird337pTJcPMeX0EE3%2Bd%2Fv0Z4xvup%2BIk18dj1FGH7lNTMPid1MkGOqUBtlOwsuwcmQ3f4i%2FDfk6DZpkVIN%2BRn9MnjSy521msbNOKbp%2FKlHg9gGb%2BmlgjhoGpsyWnp8tab2h9g5S2FIx%2BuR9AK8VDKaECHGldTQHJakqBl64DYvIGx3V5G%2FhmoxuGLEWHLw%2FitDDafNAS%2FjfwXYCoea0bxa4hD5ted9RN0fTGQnHysmmXIz3%2Ft0JIvx9M03wE14cwN6Agz6plbkZj1PZKSQVk&X-Amz-Signature=6fff5d64b3e60a9991a24f5dc9e0b6c2dfee5ceec246ef67b5e5191e8b5c23f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

