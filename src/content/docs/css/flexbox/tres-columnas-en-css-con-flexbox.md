---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6O5JPJT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIC0KUNCMcWeDL4euiYMvYqbpvSD2XydiB5Pbohmp7Jj4AiATXDOnNWuvOSUR7TTgQdMxFO5PSUPb4wSRU98RCSh%2BBir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMK7nfdbgC8tyJ26cnKtwDYRrMkQAkHMT51lyWm3Gm4y2FKwkobPJMCMKwgidM0U4%2FN9qUwePtIdKpU8e6Yx3qXCcjEPAbsvGPXFNGPblNLks10%2FdCh1pGNxYLNMzcVCdUdJY26ai%2FyEKZ9UUfPDTRuWre3cgWBU%2FggNaJy%2BXm2dcp3cK92xYrAa%2BWOukif%2BXvTioHjl%2FJixpbO2Do7lABZfx9bbQs1cfN8UXfj0%2BWGrQwOYccxEM%2BQT7Dzw7ynJdTpI4a9QBRzbJpx1h6xij345%2Ba28LNaWaehRUrDZJ%2BQOWbeZecTLBXN0H3R1N0cJ9Hzwu4pHQzFCbst6jEjeAKVwcN8aX2b9GbsSmE1h0n7xCE7zwer9YlfTQuVYoAQsGfS89uLyQgRTKHHssVUAN1xKZ6H7cFven3HooENam0Y40QCl%2BdMAqfnUYDTpin9uNi7dAd%2Fi51WSQKaLq0B6IFwma1CSqgHxw2T2KrO8qKun1sgxq7J3xm77vHNtAlBnCDtJPz5u3eMgkRDO3Mme8K9VvML%2BwogBiZJQ7gYjA9uga6Kl2P4r0R08attV8PGNHRj%2BLXQNkbMVJPUSFpe5jCNG0W2q0sHKvQlqYuhDyi7XO6hCk%2F1U2BlJhfbzEZ6kQOagZ4ze86olLzSsgw%2BsrEyQY6pgGm0DZgavohLDLyzwmqhxkbadGIvDJEdLpTxjKi0xsdGyfNAwM8BEFUtmyTNKl9covvUc23y23b2KRNzGWXj579PiDhSxu10mUhDnUWZV%2FH8V0Olv9You7krKey7c046zXNOCjEnx4embfxUrsQsrGoH%2BLFTOnWNjGpOFae87pYVEE6xWH8ooDmGyKNmDkGr0pkvRuT6kUr6fVcy1yPq6Bi3GKziDIp&X-Amz-Signature=7d3ebb11ac5f3337dfeab0b0de1d344b6f22ed9b7b5a348a475b535756be7b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6O5JPJT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIC0KUNCMcWeDL4euiYMvYqbpvSD2XydiB5Pbohmp7Jj4AiATXDOnNWuvOSUR7TTgQdMxFO5PSUPb4wSRU98RCSh%2BBir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMK7nfdbgC8tyJ26cnKtwDYRrMkQAkHMT51lyWm3Gm4y2FKwkobPJMCMKwgidM0U4%2FN9qUwePtIdKpU8e6Yx3qXCcjEPAbsvGPXFNGPblNLks10%2FdCh1pGNxYLNMzcVCdUdJY26ai%2FyEKZ9UUfPDTRuWre3cgWBU%2FggNaJy%2BXm2dcp3cK92xYrAa%2BWOukif%2BXvTioHjl%2FJixpbO2Do7lABZfx9bbQs1cfN8UXfj0%2BWGrQwOYccxEM%2BQT7Dzw7ynJdTpI4a9QBRzbJpx1h6xij345%2Ba28LNaWaehRUrDZJ%2BQOWbeZecTLBXN0H3R1N0cJ9Hzwu4pHQzFCbst6jEjeAKVwcN8aX2b9GbsSmE1h0n7xCE7zwer9YlfTQuVYoAQsGfS89uLyQgRTKHHssVUAN1xKZ6H7cFven3HooENam0Y40QCl%2BdMAqfnUYDTpin9uNi7dAd%2Fi51WSQKaLq0B6IFwma1CSqgHxw2T2KrO8qKun1sgxq7J3xm77vHNtAlBnCDtJPz5u3eMgkRDO3Mme8K9VvML%2BwogBiZJQ7gYjA9uga6Kl2P4r0R08attV8PGNHRj%2BLXQNkbMVJPUSFpe5jCNG0W2q0sHKvQlqYuhDyi7XO6hCk%2F1U2BlJhfbzEZ6kQOagZ4ze86olLzSsgw%2BsrEyQY6pgGm0DZgavohLDLyzwmqhxkbadGIvDJEdLpTxjKi0xsdGyfNAwM8BEFUtmyTNKl9covvUc23y23b2KRNzGWXj579PiDhSxu10mUhDnUWZV%2FH8V0Olv9You7krKey7c046zXNOCjEnx4embfxUrsQsrGoH%2BLFTOnWNjGpOFae87pYVEE6xWH8ooDmGyKNmDkGr0pkvRuT6kUr6fVcy1yPq6Bi3GKziDIp&X-Amz-Signature=2a0e716bda4493a6562e56a0e6afcdc1630083e939300e823a7e175a88caa835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

