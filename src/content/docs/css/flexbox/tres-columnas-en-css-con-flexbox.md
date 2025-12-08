---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NXJVGGW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7eUFiTHqxyupeASUJnh5JlWBNIWAZCcnyB7xwJG63zAIgHh%2BXHdkd19QUK6hGey0ZG%2FogSEuCme63cDrq3M7MbGsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEk1hAnN9ZUKgJRJCrcAxBLnIPyCkVJMnRijpqlIRPCDaPcMEuY6Jb%2F9F09GHqYbpoGkix%2Fn2%2BKN0wIIlcQe%2FYPDeAUHF5GrFS7w7whFp0Omf7GQbgd0e%2B9MDIaqD2Pz1V%2FljEeNIwzFoN8sCpRYt2SA99NhyVjfc65HydlpPbrFYA1JsImRRU4XhXUMPd1xthpzPPDuc7mqlzu7Yzk%2BJkN2SKuSBn6AHbLifx75jtLutQmN3M1pOQUsHG%2FKIJyHNR3wq%2B9XQWUnzzVclVROBQ4QI3Ovjdf7hQwCRStl5jyEdSMU0W0uwztwHjLEe6dY61UYOKUAFfWz45Njkyu9MCfgzPceVsBGst7hYI1uBNXH3UZXQEf5VQI1iHxOI4qX4rpXAwy%2BkEsMQmb0gRGTjwcixCXk2f6CsYSDs27rg%2B4pmBeoFEtFbTXwpvOuTocKMDXgt8O3Z8okNHLs7VclZyu8XPDuTBYrqmBm1rGC1WVr0pBzsquM8M9WJ0FJKtRym5N2LNGDhk3dbky4BQluDJ9SQ6nxIoSxULuckoZCzqjtH5bkLUTba9SVk2JotRUmpxtePgHBss7ZsaQhqgqmEg0PpsEJA3ejqdRSKey%2F%2BMF0KztrKDjpNR4QFDk7YYwJWZL0bVAYfVgG2nGMLWz3MkGOqUBeypm7Q38Cqyk5JLRYz8RZA7uK4ix4vUWob%2FUz9Kqtmlv8iy3ioEaHgDcPyyd5bh3SGvGOcKVHxBrR1045au42MQBni9X2%2F2WOBFJ4z04DkuIz2JPfKS4Au0cbFxC501ctSfuqYutPV3XoJsa%2BxifYCzRwL65Io%2BIrK1nNIvWHhWDSMaf1p2K8xFhjFdtHnPzDvf2l%2BRnV2q7wZprgkwBMuATR910&X-Amz-Signature=97af8a65a214ab770cdd101683b8f22898d7e851a54b79afa1148fe9cb642308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NXJVGGW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7eUFiTHqxyupeASUJnh5JlWBNIWAZCcnyB7xwJG63zAIgHh%2BXHdkd19QUK6hGey0ZG%2FogSEuCme63cDrq3M7MbGsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEk1hAnN9ZUKgJRJCrcAxBLnIPyCkVJMnRijpqlIRPCDaPcMEuY6Jb%2F9F09GHqYbpoGkix%2Fn2%2BKN0wIIlcQe%2FYPDeAUHF5GrFS7w7whFp0Omf7GQbgd0e%2B9MDIaqD2Pz1V%2FljEeNIwzFoN8sCpRYt2SA99NhyVjfc65HydlpPbrFYA1JsImRRU4XhXUMPd1xthpzPPDuc7mqlzu7Yzk%2BJkN2SKuSBn6AHbLifx75jtLutQmN3M1pOQUsHG%2FKIJyHNR3wq%2B9XQWUnzzVclVROBQ4QI3Ovjdf7hQwCRStl5jyEdSMU0W0uwztwHjLEe6dY61UYOKUAFfWz45Njkyu9MCfgzPceVsBGst7hYI1uBNXH3UZXQEf5VQI1iHxOI4qX4rpXAwy%2BkEsMQmb0gRGTjwcixCXk2f6CsYSDs27rg%2B4pmBeoFEtFbTXwpvOuTocKMDXgt8O3Z8okNHLs7VclZyu8XPDuTBYrqmBm1rGC1WVr0pBzsquM8M9WJ0FJKtRym5N2LNGDhk3dbky4BQluDJ9SQ6nxIoSxULuckoZCzqjtH5bkLUTba9SVk2JotRUmpxtePgHBss7ZsaQhqgqmEg0PpsEJA3ejqdRSKey%2F%2BMF0KztrKDjpNR4QFDk7YYwJWZL0bVAYfVgG2nGMLWz3MkGOqUBeypm7Q38Cqyk5JLRYz8RZA7uK4ix4vUWob%2FUz9Kqtmlv8iy3ioEaHgDcPyyd5bh3SGvGOcKVHxBrR1045au42MQBni9X2%2F2WOBFJ4z04DkuIz2JPfKS4Au0cbFxC501ctSfuqYutPV3XoJsa%2BxifYCzRwL65Io%2BIrK1nNIvWHhWDSMaf1p2K8xFhjFdtHnPzDvf2l%2BRnV2q7wZprgkwBMuATR910&X-Amz-Signature=cc2e1ccb1d005884f093b12597434a46b7d1bc49c176c902cda68118a49f4424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

