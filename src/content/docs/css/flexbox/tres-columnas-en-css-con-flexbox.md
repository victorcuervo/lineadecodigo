---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666USK6HWO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T060648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByXJuJbNZluvGnShnUxlmQcqZI8EvEnH3JXJ%2FycINq9AiEA4GTRv1rNUZ6tTIwt%2BxU35idiHfgpadUu0gi9kXiBZ0cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtJ%2B3MLJB4TxHIobyrcAx4G%2BhRtUEgWUtu8zofgoqgcG%2FhRdcIJN2%2BG%2FSGUMO4tocQnqzr0v3UzdFz38MG1YM%2BKHIcANiwk6x7ltAqTQUOeZgncMgI2vsv5fgR3djyT2%2FE1L3m39dTS29J%2FG9l7YhQrcujkDf8jIsCi34NUXSm0Wm80DVHKc%2FwPu5df884gr3%2F0VbxJ9Iv%2B98T87F0f3luY5LcBxCDT4jiHY9ew8sF%2FuGZNMyrJW8pxKfa0unqsiO4BZdXoMHOrt%2Buulbg%2FlrKXZaMazdLagErdOE9PD7aZKZjqMsvKxtxkR%2FhSzap0mqVI0x57EKB4kARh7mhBa34%2BWjLYVuXDsBvabGFb3CeiLct1qweUDfQEFvRYnPoSmxoxECdWoBZ29pByBi5SJcs9J6wMOzX3rSaKdtuA8sgBBrCUHDO9ZtkWxLkWqv6ClfxCQyjpSj%2FCko4TfqiWCyIaXBBnoVsKCb7k8tYFX5Pjdv0sWT0g0a9tKzZcoEHkEKa6S4lo15fxQIKDkrwN%2BkeowQq9WW8C9D%2Fm4Db2%2FfeaDBkl4IGorjGCZ6vTgi81bLZTlIHaytRm8v2XXRn%2FjIkVwTYv4L78B9HIinRsbVOONcWx6A99GBTNMTZ5Hw0%2BpdG%2FqNtK%2FGP4RM2MMJPR2ckGOqUBOTxS69tFcIfaD31yPXUYCZMqPaMoNsp5M8Nd7RUdhJf5SiaeCmuaXPRCsepfO9CG6MS%2B4zHTx1lce8ckCDMAGoEH7fHrVWto8hf5G%2B4YyVxTxLmqiZBYos3ZthdTn6PvJSfzFu5zpJ%2BwFIMCr%2FmAOOfzpqZF3YELSlUQbhL0nl7ne%2BvpzukEvLMihFKxQx9hW%2F7kZ37movSfiKvXWyFUCTu16J6O&X-Amz-Signature=0e63b44982339deec559afe1ecc14510ec4d3fef4dee246435cf78046caa447c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666USK6HWO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T060648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByXJuJbNZluvGnShnUxlmQcqZI8EvEnH3JXJ%2FycINq9AiEA4GTRv1rNUZ6tTIwt%2BxU35idiHfgpadUu0gi9kXiBZ0cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtJ%2B3MLJB4TxHIobyrcAx4G%2BhRtUEgWUtu8zofgoqgcG%2FhRdcIJN2%2BG%2FSGUMO4tocQnqzr0v3UzdFz38MG1YM%2BKHIcANiwk6x7ltAqTQUOeZgncMgI2vsv5fgR3djyT2%2FE1L3m39dTS29J%2FG9l7YhQrcujkDf8jIsCi34NUXSm0Wm80DVHKc%2FwPu5df884gr3%2F0VbxJ9Iv%2B98T87F0f3luY5LcBxCDT4jiHY9ew8sF%2FuGZNMyrJW8pxKfa0unqsiO4BZdXoMHOrt%2Buulbg%2FlrKXZaMazdLagErdOE9PD7aZKZjqMsvKxtxkR%2FhSzap0mqVI0x57EKB4kARh7mhBa34%2BWjLYVuXDsBvabGFb3CeiLct1qweUDfQEFvRYnPoSmxoxECdWoBZ29pByBi5SJcs9J6wMOzX3rSaKdtuA8sgBBrCUHDO9ZtkWxLkWqv6ClfxCQyjpSj%2FCko4TfqiWCyIaXBBnoVsKCb7k8tYFX5Pjdv0sWT0g0a9tKzZcoEHkEKa6S4lo15fxQIKDkrwN%2BkeowQq9WW8C9D%2Fm4Db2%2FfeaDBkl4IGorjGCZ6vTgi81bLZTlIHaytRm8v2XXRn%2FjIkVwTYv4L78B9HIinRsbVOONcWx6A99GBTNMTZ5Hw0%2BpdG%2FqNtK%2FGP4RM2MMJPR2ckGOqUBOTxS69tFcIfaD31yPXUYCZMqPaMoNsp5M8Nd7RUdhJf5SiaeCmuaXPRCsepfO9CG6MS%2B4zHTx1lce8ckCDMAGoEH7fHrVWto8hf5G%2B4YyVxTxLmqiZBYos3ZthdTn6PvJSfzFu5zpJ%2BwFIMCr%2FmAOOfzpqZF3YELSlUQbhL0nl7ne%2BvpzukEvLMihFKxQx9hW%2F7kZ37movSfiKvXWyFUCTu16J6O&X-Amz-Signature=7b607834f3e718ff02b13b8e92295fd359104f71bdfd1cbc64f09d38b5dd779e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

