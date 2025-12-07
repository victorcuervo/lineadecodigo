---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FESBRN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEYdMx0DEt16TjYXW398v41OnVLpYBGKsKaB4eusINLQIhALiXXRn3kg16XFQBEc0qbQErYqPWk3Ac9%2FvA0fZkI2muKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBtVt555IDvf4JtDcq3AN5jxSXqtpR%2F%2F6jSq6mG5wuf9ri9oeKPYnPAccxgEYkcmDRrqCVYXgafg16nOP8iK5UW%2BwLMXv%2FWj7D20kk8JQmw0rwqph5p%2BNZj5kaIOSfCehFp3RD9gTgSWuVJaEkIM5LezDOaclF8LXlEZOVvd2NJhzZ8TuSBlwKkXizWfXvbEmWcdPWGOVpY4rpCA1ryCjnkLzfyppA%2B0R5EcDwEvt2BkbFH8u8D1sqhUSv1CDPZjfvwrtFkgvrYlfTBRjwrR%2FKYUXPtYCKyPGgRwuMhFdPc8LJWHQHB7XaCwp%2B4BLv18AM0EvWgkaLe%2FBT7VLvJmucXDw%2BV72l4v5zfxZgU5ZzLei3RAhj5jmovFZRGLeGh5Bq6CXZ%2FaxVEvwesjcdhwhtxH3c7KRlsJD%2F0jdgLOoJINg38PGdE6thEYOZu6IXx1PnC1Oy31To4wMTR4xfdfEsT8iTaGAXJs2Uaiq6gWN4V%2Bva3h2agBGtCeQ2ERjViwMkNWa5JLZsZ3dqzLzU0DWgkv%2B9WhDnua3ZlPiR6vpuhOU9Fq5TUJDW%2FPl8V7bfayibHeDJI0YaJqISDPCUXqab1YhEyPSBeSkHRCsnc4ktlDR51%2BULTEdsTjk3GHJZYMidJEAjlHiygrLHbTCShdjJBjqkAUWm5Z%2BpvRGKmdI3JcaW29e411G3cFHMeLgwrq%2BYNt39DzWJOFq2aQpTafXhEwyPUlAhKFRopOa8LFxD0ZsGVL1kWHhZJbV5mtza8QXcSOrEBzSPMSWi7DWr%2Fusxck1xgwTpWw76zkYd75Z%2BeSnx3PpDgkInWCyrKR4g0BonZx%2Fd3MpHOFzA7JycOgmkaL9AVK2dTq6wQm3kOtWfMh0yMX8BB917&X-Amz-Signature=a20f951cba9f986b8eae6655afcd2fdbc4776be5530d20247e5e5b8131a743a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FESBRN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEYdMx0DEt16TjYXW398v41OnVLpYBGKsKaB4eusINLQIhALiXXRn3kg16XFQBEc0qbQErYqPWk3Ac9%2FvA0fZkI2muKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBtVt555IDvf4JtDcq3AN5jxSXqtpR%2F%2F6jSq6mG5wuf9ri9oeKPYnPAccxgEYkcmDRrqCVYXgafg16nOP8iK5UW%2BwLMXv%2FWj7D20kk8JQmw0rwqph5p%2BNZj5kaIOSfCehFp3RD9gTgSWuVJaEkIM5LezDOaclF8LXlEZOVvd2NJhzZ8TuSBlwKkXizWfXvbEmWcdPWGOVpY4rpCA1ryCjnkLzfyppA%2B0R5EcDwEvt2BkbFH8u8D1sqhUSv1CDPZjfvwrtFkgvrYlfTBRjwrR%2FKYUXPtYCKyPGgRwuMhFdPc8LJWHQHB7XaCwp%2B4BLv18AM0EvWgkaLe%2FBT7VLvJmucXDw%2BV72l4v5zfxZgU5ZzLei3RAhj5jmovFZRGLeGh5Bq6CXZ%2FaxVEvwesjcdhwhtxH3c7KRlsJD%2F0jdgLOoJINg38PGdE6thEYOZu6IXx1PnC1Oy31To4wMTR4xfdfEsT8iTaGAXJs2Uaiq6gWN4V%2Bva3h2agBGtCeQ2ERjViwMkNWa5JLZsZ3dqzLzU0DWgkv%2B9WhDnua3ZlPiR6vpuhOU9Fq5TUJDW%2FPl8V7bfayibHeDJI0YaJqISDPCUXqab1YhEyPSBeSkHRCsnc4ktlDR51%2BULTEdsTjk3GHJZYMidJEAjlHiygrLHbTCShdjJBjqkAUWm5Z%2BpvRGKmdI3JcaW29e411G3cFHMeLgwrq%2BYNt39DzWJOFq2aQpTafXhEwyPUlAhKFRopOa8LFxD0ZsGVL1kWHhZJbV5mtza8QXcSOrEBzSPMSWi7DWr%2Fusxck1xgwTpWw76zkYd75Z%2BeSnx3PpDgkInWCyrKR4g0BonZx%2Fd3MpHOFzA7JycOgmkaL9AVK2dTq6wQm3kOtWfMh0yMX8BB917&X-Amz-Signature=ca4daea8e34b31855b59f87cb1b4a50f1ae7513d66c86497d924ff0f8e91f9eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

