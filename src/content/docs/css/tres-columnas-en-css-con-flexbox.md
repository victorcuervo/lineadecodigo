---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662OSQCIE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDJU16oiPuNcwlMc%2BsanuDhkT33z0w76KOq6%2BXPGAW9iQIgK5%2FB3KgWp%2FEsE0D1oVjZcM9ySrwNapSfsCvGqEMa4U8q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDMaB6eTyUM8GzbDOeyrcAzLFvaTUJlBf9kEgRAVB99NtjLLWuyUbRx7YYo0EntGh8aItaOsZRnl1hovcQDDsc27zMLdbQypNPwapgge%2Fws4QgpJFq%2F2%2FFpk4BYMYJ6uegSRxxc%2FjI89mStTyw7Kb92x%2B%2FQkjF1xLMfn0MlaEWy07Kq5AnNYhk45UkBTl6jZ82zODhU1LhPXG1P0i4SpSWxM0YhjmjJXKrPcy0cdpOhcOPwVWdpCyet5hWpqCeEhhlV2mVHbr9mi%2F77%2FbnVhyRDOfCT%2Bw%2FdBhP4J%2BuS2dTvUPodySkQGoByf53QJxHIj3e2NDYO%2F4Rw7Mt9p7Xg0VG9QyFSm8qz0k02IxMxFfbedgt4eJZ4me3D%2BGtQxVL4R3USpVCzzL%2B10wiRbDt9%2FUYc1xRPwVsmnF3oPakooOM6SBx8LC4tEifnwyO%2Fjyo6B1GtLSr3q465JR%2FarU5HkLxAWIkAPPTf1Mbdxqx2TZWM1bWlxy7tdPQ%2BJjtXkwdDO%2FV9SF2%2B%2FlYbHgZuqm6wHqHv78el0HBnPtstx5Oj8wpRVfwpPbY6Q5zanDEAU5GE16x40CUByDoYhPM1pq%2FdYUj8rkB27DFQO80GDBLSqbgPTCJCj2JZT%2FFh57Zgos28%2FrbcQYCXDr%2Fo0LV9%2FDMIW%2BwskGOqUBOVHrtchpmxpH%2FHryuRLSVaIYswQRAZ12bM0B1tqHmPQnFLPDWLAITPMOw7YKPYAFzpRFdnsygpmNSj%2FH%2BMJF1D9we0IxkcbNKTcukAQHHiaQX1IDnw85sMOpXCSuhcXI%2BgBKGpy%2FEinz8SkPiCjx4WWVu6hVJ3K8MnwNdhEQd6lGgzp%2FicYaz3ZO3L%2BAsbEbzva1%2BuyFnHM51LmnULzMw2edXEOr&X-Amz-Signature=80ab6658c6eaaca4353a132ce0126bc3d5de28fcfdc4eb3791522635508fa19c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662OSQCIE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDJU16oiPuNcwlMc%2BsanuDhkT33z0w76KOq6%2BXPGAW9iQIgK5%2FB3KgWp%2FEsE0D1oVjZcM9ySrwNapSfsCvGqEMa4U8q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDMaB6eTyUM8GzbDOeyrcAzLFvaTUJlBf9kEgRAVB99NtjLLWuyUbRx7YYo0EntGh8aItaOsZRnl1hovcQDDsc27zMLdbQypNPwapgge%2Fws4QgpJFq%2F2%2FFpk4BYMYJ6uegSRxxc%2FjI89mStTyw7Kb92x%2B%2FQkjF1xLMfn0MlaEWy07Kq5AnNYhk45UkBTl6jZ82zODhU1LhPXG1P0i4SpSWxM0YhjmjJXKrPcy0cdpOhcOPwVWdpCyet5hWpqCeEhhlV2mVHbr9mi%2F77%2FbnVhyRDOfCT%2Bw%2FdBhP4J%2BuS2dTvUPodySkQGoByf53QJxHIj3e2NDYO%2F4Rw7Mt9p7Xg0VG9QyFSm8qz0k02IxMxFfbedgt4eJZ4me3D%2BGtQxVL4R3USpVCzzL%2B10wiRbDt9%2FUYc1xRPwVsmnF3oPakooOM6SBx8LC4tEifnwyO%2Fjyo6B1GtLSr3q465JR%2FarU5HkLxAWIkAPPTf1Mbdxqx2TZWM1bWlxy7tdPQ%2BJjtXkwdDO%2FV9SF2%2B%2FlYbHgZuqm6wHqHv78el0HBnPtstx5Oj8wpRVfwpPbY6Q5zanDEAU5GE16x40CUByDoYhPM1pq%2FdYUj8rkB27DFQO80GDBLSqbgPTCJCj2JZT%2FFh57Zgos28%2FrbcQYCXDr%2Fo0LV9%2FDMIW%2BwskGOqUBOVHrtchpmxpH%2FHryuRLSVaIYswQRAZ12bM0B1tqHmPQnFLPDWLAITPMOw7YKPYAFzpRFdnsygpmNSj%2FH%2BMJF1D9we0IxkcbNKTcukAQHHiaQX1IDnw85sMOpXCSuhcXI%2BgBKGpy%2FEinz8SkPiCjx4WWVu6hVJ3K8MnwNdhEQd6lGgzp%2FicYaz3ZO3L%2BAsbEbzva1%2BuyFnHM51LmnULzMw2edXEOr&X-Amz-Signature=4257748d6f3906e0c9adc99a8cb6a001e2819f6e10ce8551d26d328ee444deb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

