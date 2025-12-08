---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZS3U57N%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDegSu1Qza3Qfea%2BQWIIHaxWHuIz4FMj7xA78TcV57KwIgJKPURdCTDo3w7AmAfaG5eBwEGZKVg791R7ZwXHoWHIcqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMISKiXh%2BYkvCBmMUSrcA7pxcFbxrvtXvTKzLRKRdPY6BOCcNiXPT2CbkkRQXyDAtgMxjjhDA4K0uV6%2BTgNwXjUzBcWO4hoo4g0kWIqzz8YLJom%2F91NvMc1vvgSvJGJwQlhNhgzyJhr8WLmGkwetAmlNEFL1Y3V3SrMC9suGt%2F3Czvo9rAAIIyhjJrZgYcErU6tZvU3i6mO6UaStfVVcC1ek6wU0m%2FJQtGYxX9xAiRxtMb%2BDsa3Z7KQtn0zznzv9Qv5zkZZTPkIhZ52vKT5JDVsw6xMFFl%2F8dPI0NC51eSMoU8QMW0XyIgbmDsP0RZuCCnfd2rd4qSd296m4%2F7j6L2lDId5IyOWE4LwJkKl7JnoIgGMil9wm0a%2BbkYXtEmlGkWURBEyHTwscTET9xLan33d2lniyk0Tlzf4BEp9sYKZtT2IH77F2bWNic6kOX%2F2h4JJksjqVjs1WUFyH9o3OktbHPsTTP7oOTauKMsWhXt4hZiPhfP7vIk%2FkSahOIBGtL3Y6F7pN2Bhm1WHFdTRWlsh4XghVQ6%2FdpMc8AerTKS7GDnLZtGdKFng9bvBGyaLXTEC5J8OVEoej%2B3hMXZpk1s1eMg3cNsYcSuWFn%2BIWMMLY%2Fvw9ggxdQs%2FP6zHpogYDP8kYatvhX%2F0n8hkQMIiH3MkGOqUBe7RVsr2ueobpDlwP0sg8bX18hje0FLahUGUqBmSNcvDJXn3LSO8FwQjd9w7IqLNok%2B8W1J939wL4f%2BMFLQ1k%2BM9TdynVP2Fc%2F2hwrixNexVuT4jyC4Tq58biOt1D4%2Fa%2BB902ST2Q6n4L2GePId2HPw6cJBgH%2Bk6fsgAZY6Gh%2FesNvJefltdj9YwGz1XSN4M3Nj%2FdxJrxuAsNJ7PSJmXn6uzGrE66&X-Amz-Signature=6229651a5ccc74e06bed16951e18b317f4b62c54fe54b741b155e1031835af71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZS3U57N%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDegSu1Qza3Qfea%2BQWIIHaxWHuIz4FMj7xA78TcV57KwIgJKPURdCTDo3w7AmAfaG5eBwEGZKVg791R7ZwXHoWHIcqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMISKiXh%2BYkvCBmMUSrcA7pxcFbxrvtXvTKzLRKRdPY6BOCcNiXPT2CbkkRQXyDAtgMxjjhDA4K0uV6%2BTgNwXjUzBcWO4hoo4g0kWIqzz8YLJom%2F91NvMc1vvgSvJGJwQlhNhgzyJhr8WLmGkwetAmlNEFL1Y3V3SrMC9suGt%2F3Czvo9rAAIIyhjJrZgYcErU6tZvU3i6mO6UaStfVVcC1ek6wU0m%2FJQtGYxX9xAiRxtMb%2BDsa3Z7KQtn0zznzv9Qv5zkZZTPkIhZ52vKT5JDVsw6xMFFl%2F8dPI0NC51eSMoU8QMW0XyIgbmDsP0RZuCCnfd2rd4qSd296m4%2F7j6L2lDId5IyOWE4LwJkKl7JnoIgGMil9wm0a%2BbkYXtEmlGkWURBEyHTwscTET9xLan33d2lniyk0Tlzf4BEp9sYKZtT2IH77F2bWNic6kOX%2F2h4JJksjqVjs1WUFyH9o3OktbHPsTTP7oOTauKMsWhXt4hZiPhfP7vIk%2FkSahOIBGtL3Y6F7pN2Bhm1WHFdTRWlsh4XghVQ6%2FdpMc8AerTKS7GDnLZtGdKFng9bvBGyaLXTEC5J8OVEoej%2B3hMXZpk1s1eMg3cNsYcSuWFn%2BIWMMLY%2Fvw9ggxdQs%2FP6zHpogYDP8kYatvhX%2F0n8hkQMIiH3MkGOqUBe7RVsr2ueobpDlwP0sg8bX18hje0FLahUGUqBmSNcvDJXn3LSO8FwQjd9w7IqLNok%2B8W1J939wL4f%2BMFLQ1k%2BM9TdynVP2Fc%2F2hwrixNexVuT4jyC4Tq58biOt1D4%2Fa%2BB902ST2Q6n4L2GePId2HPw6cJBgH%2Bk6fsgAZY6Gh%2FesNvJefltdj9YwGz1XSN4M3Nj%2FdxJrxuAsNJ7PSJmXn6uzGrE66&X-Amz-Signature=b0f0d7b5f5456a3fb12d962c68d9cab4e34872c69b76cc094cd5c4325bebcfc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

