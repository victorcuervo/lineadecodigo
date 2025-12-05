---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEGHSGUT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRJnEsuRMRUs4YN3Nid0WE5MaLN17VHogNEY%2BBSf8mkAIgKN6bsjts1%2FHAP1BPR6H8mLFH%2FjDQgYQI1VIpQrEnYJ4q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKT78UUcS%2FgkAlacgircA%2BWJW3zrQflMyxows%2BFfrgNVzP9Cq9SO1mV3TqLDOt5dJwuSp22FI0yS0jJ2vR2SBf5Fu7QgkM299b2%2F5NOmHCXoeQA6wGRPnobyvMlD%2BOX3koAtmZpyVYyYiVCm5oIuqNRYU6PR2at50ajr%2Fwlik8JTzKCPa82X8XUp4ITEtal8OMN6l0Amw8WjuOBFoVSbN8eq%2FWtHnWa2ig27xsN1CkmO%2FyguTBI3VGIP6jxv%2BAu1lbeplRTMGAswkTITVBq4lPHN4Cw87n23JRtejCoW9%2Bi9AhWh0Vb0cWNVePuA4QD7KFpXGJtcJ0KdRg9saPpswQFZwud7kcPuIJFBUpj4fNWgfH8x9CMURX0KeHvYDG2ZYwg%2BlPsUf3CEaoci0u1ecqqBUW39PfygR4F6yOVnPSow1qZoLJ4DY%2B7Y7no2Qrs2HuaByKo8uVEdYMgGwdL%2FuWf0AmsSWaFTm4bdaB0YGfWGcdQkGrNzcNUnbWzpmbjqIW4QgDHXnOahtfSzchvEusL2Kusyi35HACheQZxTlBbwmEJ%2FZZrKBmLK7EXAa36iSbn1F4dSkqljXG2fu4yKdD1QThtOIYam3FrI9aNZiFkc%2B%2F1lirEr9f4h0MFRLcU09VH4mNqsk0i6CH0jMMDOyskGOqUB2iS3I2rsyiyldWuDSR4uVcl5fyPXm8r8klKrXg7n0l6xru0yUMCzHQwxWiQPR4tPh%2Bq1PSB330G3AgnsHRRI5VJi9js7S4IEfZYIBfQfUVmgnOxz%2BTxr1drF23mKJtM7M5S8W0gNiD3PYTHRC6qyT0OR%2F376EfU%2Fesaum2QEB6QdfN4SLHEgjBaupWuaJCWDejqoVQvhculoIsFff%2FZAk0O26ZKQ&X-Amz-Signature=9dbbd02f2e0f82838995ecf2048dfd7c513cfc23d7b186100050ddfaed9e0f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEGHSGUT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRJnEsuRMRUs4YN3Nid0WE5MaLN17VHogNEY%2BBSf8mkAIgKN6bsjts1%2FHAP1BPR6H8mLFH%2FjDQgYQI1VIpQrEnYJ4q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKT78UUcS%2FgkAlacgircA%2BWJW3zrQflMyxows%2BFfrgNVzP9Cq9SO1mV3TqLDOt5dJwuSp22FI0yS0jJ2vR2SBf5Fu7QgkM299b2%2F5NOmHCXoeQA6wGRPnobyvMlD%2BOX3koAtmZpyVYyYiVCm5oIuqNRYU6PR2at50ajr%2Fwlik8JTzKCPa82X8XUp4ITEtal8OMN6l0Amw8WjuOBFoVSbN8eq%2FWtHnWa2ig27xsN1CkmO%2FyguTBI3VGIP6jxv%2BAu1lbeplRTMGAswkTITVBq4lPHN4Cw87n23JRtejCoW9%2Bi9AhWh0Vb0cWNVePuA4QD7KFpXGJtcJ0KdRg9saPpswQFZwud7kcPuIJFBUpj4fNWgfH8x9CMURX0KeHvYDG2ZYwg%2BlPsUf3CEaoci0u1ecqqBUW39PfygR4F6yOVnPSow1qZoLJ4DY%2B7Y7no2Qrs2HuaByKo8uVEdYMgGwdL%2FuWf0AmsSWaFTm4bdaB0YGfWGcdQkGrNzcNUnbWzpmbjqIW4QgDHXnOahtfSzchvEusL2Kusyi35HACheQZxTlBbwmEJ%2FZZrKBmLK7EXAa36iSbn1F4dSkqljXG2fu4yKdD1QThtOIYam3FrI9aNZiFkc%2B%2F1lirEr9f4h0MFRLcU09VH4mNqsk0i6CH0jMMDOyskGOqUB2iS3I2rsyiyldWuDSR4uVcl5fyPXm8r8klKrXg7n0l6xru0yUMCzHQwxWiQPR4tPh%2Bq1PSB330G3AgnsHRRI5VJi9js7S4IEfZYIBfQfUVmgnOxz%2BTxr1drF23mKJtM7M5S8W0gNiD3PYTHRC6qyT0OR%2F376EfU%2Fesaum2QEB6QdfN4SLHEgjBaupWuaJCWDejqoVQvhculoIsFff%2FZAk0O26ZKQ&X-Amz-Signature=a69b4d05c239d37452522ff58ed75b5c40fe7f35d8a9b3d85d1596db17ecce49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

