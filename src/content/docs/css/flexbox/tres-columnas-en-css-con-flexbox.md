---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637TE3BLY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8RTvEyV%2B3kSj5a7XseWmRjkPuMOhrIz9EB9RMwHllzgIgbE3uRzRF0NHG%2B07qSzM2hDuexT50g7LqePmVhtDCYxsqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjaQTAIaxxOw1CpZSrcAyrQf21%2BBuiWtREtpVUNi7QPgvbqk8DmUsc5%2FACR7kaY3eXom19y79QNSgd3EM9ErPX26h4t4cFcwCffV29naxFPjYt3ZliX8EbGSj%2F0V56LK%2B5S0uCDD2bjumA2emMFsvxEoGilr8n6Z6ymU3rKLY8%2FogI8vUc9FX5xprSLiqGUhTnfnOqyyxBg2zE0PHdxcwi%2BCYsNEeUFteIarw%2BhwKPkYn5LqBxSYAFpcG1HPkOXOp0AeG6etKusxNnvsizh9z2KUiWHOq4O6m5egGy%2BhXYKyT5P6h2hFc2w3m3cROvTCe6Zl30pZ3BsA8JbO8oT6UuMtqbnecU2becTLmzYhL597t%2FJnW5clgwt5GHyF9k1L9Vm9T6var1g4LlWWvaPj6uf9oxmnCwDCp3%2B1RDaOx5AyjxX7KZmjnDf%2BfxLxxM2cHYhddbhDMjiWfg42h%2Fnk1WAgyvqq10EizsVr33wm6VH6shxEu3swg3d0VfZUNOiT812fAgtahbyWS3D2n9rOuEnbHRs1DC6cmw2OKCr6zRXlzVAPbOWSurTiwMe7BahzZaN33QbOGN81MQm%2B7oRkLWvTP0%2FNkYH4mYjXd3MhPv2ybfELYSD%2BGUGtA3GjO0AVWNJZ3%2F0htu40MGqMIaH3MkGOqUB%2FDEKdhlTYJP6i8A7fCX5w68r%2FgE7A1dnSsOnkMz0r81Jao4si0pM1fOU6V4em%2BK2DktLDtpQTXLhGF9TjPEm2P%2FmXK4%2FJLJhYQzdFIIIER9Mp95P%2FqNCRnpbUjcfuMa8Ou%2FQWFagu4W6Q8v5jpNcFxJXd8%2BnG9kZZElR%2Fjyu6EJ2sf0%2F%2FsLUsAmucK3AD5dKzRWgYTaZlGDJvHTyU7s1YaoHnNKD&X-Amz-Signature=2afdc1af77c95e70eae762f83047f63e249e518b31b115e3abb4a47cd23178e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637TE3BLY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8RTvEyV%2B3kSj5a7XseWmRjkPuMOhrIz9EB9RMwHllzgIgbE3uRzRF0NHG%2B07qSzM2hDuexT50g7LqePmVhtDCYxsqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjaQTAIaxxOw1CpZSrcAyrQf21%2BBuiWtREtpVUNi7QPgvbqk8DmUsc5%2FACR7kaY3eXom19y79QNSgd3EM9ErPX26h4t4cFcwCffV29naxFPjYt3ZliX8EbGSj%2F0V56LK%2B5S0uCDD2bjumA2emMFsvxEoGilr8n6Z6ymU3rKLY8%2FogI8vUc9FX5xprSLiqGUhTnfnOqyyxBg2zE0PHdxcwi%2BCYsNEeUFteIarw%2BhwKPkYn5LqBxSYAFpcG1HPkOXOp0AeG6etKusxNnvsizh9z2KUiWHOq4O6m5egGy%2BhXYKyT5P6h2hFc2w3m3cROvTCe6Zl30pZ3BsA8JbO8oT6UuMtqbnecU2becTLmzYhL597t%2FJnW5clgwt5GHyF9k1L9Vm9T6var1g4LlWWvaPj6uf9oxmnCwDCp3%2B1RDaOx5AyjxX7KZmjnDf%2BfxLxxM2cHYhddbhDMjiWfg42h%2Fnk1WAgyvqq10EizsVr33wm6VH6shxEu3swg3d0VfZUNOiT812fAgtahbyWS3D2n9rOuEnbHRs1DC6cmw2OKCr6zRXlzVAPbOWSurTiwMe7BahzZaN33QbOGN81MQm%2B7oRkLWvTP0%2FNkYH4mYjXd3MhPv2ybfELYSD%2BGUGtA3GjO0AVWNJZ3%2F0htu40MGqMIaH3MkGOqUB%2FDEKdhlTYJP6i8A7fCX5w68r%2FgE7A1dnSsOnkMz0r81Jao4si0pM1fOU6V4em%2BK2DktLDtpQTXLhGF9TjPEm2P%2FmXK4%2FJLJhYQzdFIIIER9Mp95P%2FqNCRnpbUjcfuMa8Ou%2FQWFagu4W6Q8v5jpNcFxJXd8%2BnG9kZZElR%2Fjyu6EJ2sf0%2F%2FsLUsAmucK3AD5dKzRWgYTaZlGDJvHTyU7s1YaoHnNKD&X-Amz-Signature=c38c4d18e2239517a8d61706f684b3e7c07fc11715a1c0c0dac1309d685db34a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

