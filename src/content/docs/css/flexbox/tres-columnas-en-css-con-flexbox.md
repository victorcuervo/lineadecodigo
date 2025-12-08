---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2LAI7QF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfaaG7lqyoRbpbOZNMos36wzrCpFOIa29yKgMWWAsHVAiBm16uMAf4KYaGOaDpkRBMA%2FMxYY%2FdOZB8DlS6cZtMWQCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvsEHiEYzkYIZiRIxKtwDel4hf8KhJiXLD3E9E0SDY7fZMDbvAPUoEEVWWAU%2BAyXlXY83%2FaDFWuRvrzjf3HTh5X42fKkxE9yiLCpGQRRepxssh%2BpHDbu%2F%2FXBN0FRZ0GLZj530b20storjgsR%2BOQa%2F3Dy7nPAtHf8zrnyDc6TpfQ4091JNkN6CJKWszPPhjU%2F7Mqs72k%2BzF5RhmYtt1EBWt2hK7mE7xF2qwTGXjvhUskB2tSbqTvNrp%2FFkqg8bB4rAeLywlVzVIT0torrNOz%2FUBkxVxYcJ23cOT%2B%2BSC%2FWD6%2FB8NC8eotXRgTWUc%2F%2FCQt9DLaWDEzrutCR%2Bbwyb1C1D2VAaDlnX9j6G%2F2hJwu18T3gjmsUoOcQny3RsVtn1pyaoL2FhB0BtMW%2FclCHlSzoH8gD9geuNVFemn2pBoiUp61DMgHEiexcn3cqsffb%2F9chmTFPFRzYx6kuK%2FJBw92kx4aXZuQ9G%2BjHy5AcrVR1EjT0xTkFi3%2FOcfoO983%2FgIwxOkCMYbnDNB4M1FrUBSgRFcCYB%2BVzbMau897Kg7vfzod6aIO3ntZf6zLKomYxKqBzz16KJ0QJWGv3NV2N1z8KgPKkgwfk8Q7ijnMof%2FGGzF05DPmVKNVjpoGRDSbgHvOu5Nfjgqw2GYCqLauAw5O3ZyQY6pgE6w1W7iXmDR%2BWnqEe%2BTfmIVSV6juRTQBxRmt%2FgdMYwx5BbEacDdtn3wXRvkU6BbGU7zUucTJ8x6x95Yktb3DuOJg8Z3AUZ8AvBknjJVpHU6DWNaDyCYIaSTl6bZ3VVh6ZeU7R1h2FW5arWymnGCBNPLPxN9Zc7Ymk68Rq%2FRbUGJ9Ih6x0qTpuGL%2FF3q3J7dfN9F4SWShUUDQ1g0L70e97esrhCKiFC&X-Amz-Signature=c9196cf65a5ca3dffd8cd28d3edcdbe8a57067e7dbd3a78e05d8bba02a473060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2LAI7QF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfaaG7lqyoRbpbOZNMos36wzrCpFOIa29yKgMWWAsHVAiBm16uMAf4KYaGOaDpkRBMA%2FMxYY%2FdOZB8DlS6cZtMWQCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvsEHiEYzkYIZiRIxKtwDel4hf8KhJiXLD3E9E0SDY7fZMDbvAPUoEEVWWAU%2BAyXlXY83%2FaDFWuRvrzjf3HTh5X42fKkxE9yiLCpGQRRepxssh%2BpHDbu%2F%2FXBN0FRZ0GLZj530b20storjgsR%2BOQa%2F3Dy7nPAtHf8zrnyDc6TpfQ4091JNkN6CJKWszPPhjU%2F7Mqs72k%2BzF5RhmYtt1EBWt2hK7mE7xF2qwTGXjvhUskB2tSbqTvNrp%2FFkqg8bB4rAeLywlVzVIT0torrNOz%2FUBkxVxYcJ23cOT%2B%2BSC%2FWD6%2FB8NC8eotXRgTWUc%2F%2FCQt9DLaWDEzrutCR%2Bbwyb1C1D2VAaDlnX9j6G%2F2hJwu18T3gjmsUoOcQny3RsVtn1pyaoL2FhB0BtMW%2FclCHlSzoH8gD9geuNVFemn2pBoiUp61DMgHEiexcn3cqsffb%2F9chmTFPFRzYx6kuK%2FJBw92kx4aXZuQ9G%2BjHy5AcrVR1EjT0xTkFi3%2FOcfoO983%2FgIwxOkCMYbnDNB4M1FrUBSgRFcCYB%2BVzbMau897Kg7vfzod6aIO3ntZf6zLKomYxKqBzz16KJ0QJWGv3NV2N1z8KgPKkgwfk8Q7ijnMof%2FGGzF05DPmVKNVjpoGRDSbgHvOu5Nfjgqw2GYCqLauAw5O3ZyQY6pgE6w1W7iXmDR%2BWnqEe%2BTfmIVSV6juRTQBxRmt%2FgdMYwx5BbEacDdtn3wXRvkU6BbGU7zUucTJ8x6x95Yktb3DuOJg8Z3AUZ8AvBknjJVpHU6DWNaDyCYIaSTl6bZ3VVh6ZeU7R1h2FW5arWymnGCBNPLPxN9Zc7Ymk68Rq%2FRbUGJ9Ih6x0qTpuGL%2FF3q3J7dfN9F4SWShUUDQ1g0L70e97esrhCKiFC&X-Amz-Signature=81a3e0c698306a6084943475c06ce30d3537cf22414f91e52b3e5c7a392b686f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

