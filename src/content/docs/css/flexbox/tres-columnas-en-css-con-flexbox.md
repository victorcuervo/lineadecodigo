---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5U2V5MH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCYqvi051GFhnhSPvk%2F7FJL4RTrgS%2FhPPX4Lc%2BgwHli%2FQIgaUMtFNFO7J4%2FFI2dDLKZjTo3cI%2FbZWAkWBG7nUuS49Yq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDAXbhPxHYeOqwj0j5yrcA4Ke%2BO%2BLoXKaIjimp0jo70OAQmBKH4yjXHBa7KsdiWVCJSYSt9GWj%2BUjUzva7nra43ZDsYuomtqLhchep68fnU1tuKlueYOFjhzhgnUO3zCd4xMCAAjXcQ48K7hRXcHJEsGFoG0Uz0RX7HVsO%2Bv%2BmpgViZfdK8oqD1Mu8lGtAHb84O9O98oQDtc1dRKcgmKBCVCw29nx4EVCCpOO%2Fb2xffv3pBDlxrt0hOUUF0FwR4QDWVSx8Y0rgZkVj0tms8%2B%2FCJa584BH%2BGGZydKpux%2FMcMtuoe0gfXhoB2vlqKye3%2BxAKasvaFL7i3puNlXZYGPUcfQHm7QNsDondjhskJBXktiFX4SGuJPVla7PSt24Xl39XHrDuIx9%2B1eQLEGu1C%2FRBHXe2YhZsjWhaghwucrH8Cr7PbBc4JkCCAKkvj2VNnoh8dtN6cRgcDwMQGUUgXvk%2FkZ1B83CR8XmaV4xqBapRbJamdn0WUnIaRd3pGfK5h7TsPe4MiMqO6%2FKCQG307Qas%2Bahbff%2BzYbtyPaCwttTM2a0WiQko6WQR9Ti5%2BaHYOCGG4PxGAzC0CBDXDxogRUC%2BRdjAnGXdq4vDf%2BoBTe6c%2BW%2BE5bB3l3hWHtasqq%2Fkh0FrBjp2NEmzWLxQI%2FYMJaDxskGOqUBC%2FRxvJh%2FUXkuZ27Xoc5f7%2FL0CJscMust6RG2ZohdlHZ%2FzItfE8lvXp5c%2FaaWp33oOTiQwAMYRFuMR8%2FHzyEOuLipmzRgwpz0bwiLImTUuMO3nPBWuq8tqr55qs4XzfuudjVb6uCDqhT1YzZRO1GcBS6iaEczgZn%2F9UyBg%2FKPUOw77PZxJvxe%2FXedcyupBYgQwwfSJtM8YcQydy%2FqfzCvcLj5FK6I&X-Amz-Signature=884ed0828627bf5e77eaf0704396bc51e106ea8ab3bdae1d3fa684286d33f15d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5U2V5MH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCYqvi051GFhnhSPvk%2F7FJL4RTrgS%2FhPPX4Lc%2BgwHli%2FQIgaUMtFNFO7J4%2FFI2dDLKZjTo3cI%2FbZWAkWBG7nUuS49Yq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDAXbhPxHYeOqwj0j5yrcA4Ke%2BO%2BLoXKaIjimp0jo70OAQmBKH4yjXHBa7KsdiWVCJSYSt9GWj%2BUjUzva7nra43ZDsYuomtqLhchep68fnU1tuKlueYOFjhzhgnUO3zCd4xMCAAjXcQ48K7hRXcHJEsGFoG0Uz0RX7HVsO%2Bv%2BmpgViZfdK8oqD1Mu8lGtAHb84O9O98oQDtc1dRKcgmKBCVCw29nx4EVCCpOO%2Fb2xffv3pBDlxrt0hOUUF0FwR4QDWVSx8Y0rgZkVj0tms8%2B%2FCJa584BH%2BGGZydKpux%2FMcMtuoe0gfXhoB2vlqKye3%2BxAKasvaFL7i3puNlXZYGPUcfQHm7QNsDondjhskJBXktiFX4SGuJPVla7PSt24Xl39XHrDuIx9%2B1eQLEGu1C%2FRBHXe2YhZsjWhaghwucrH8Cr7PbBc4JkCCAKkvj2VNnoh8dtN6cRgcDwMQGUUgXvk%2FkZ1B83CR8XmaV4xqBapRbJamdn0WUnIaRd3pGfK5h7TsPe4MiMqO6%2FKCQG307Qas%2Bahbff%2BzYbtyPaCwttTM2a0WiQko6WQR9Ti5%2BaHYOCGG4PxGAzC0CBDXDxogRUC%2BRdjAnGXdq4vDf%2BoBTe6c%2BW%2BE5bB3l3hWHtasqq%2Fkh0FrBjp2NEmzWLxQI%2FYMJaDxskGOqUBC%2FRxvJh%2FUXkuZ27Xoc5f7%2FL0CJscMust6RG2ZohdlHZ%2FzItfE8lvXp5c%2FaaWp33oOTiQwAMYRFuMR8%2FHzyEOuLipmzRgwpz0bwiLImTUuMO3nPBWuq8tqr55qs4XzfuudjVb6uCDqhT1YzZRO1GcBS6iaEczgZn%2F9UyBg%2FKPUOw77PZxJvxe%2FXedcyupBYgQwwfSJtM8YcQydy%2FqfzCvcLj5FK6I&X-Amz-Signature=80d8ac4207f91e2613ed0fd91a06b260bf1c43570dff303c2b22a162e4828f24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

