---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXPRNIN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyVuPvmskLjqJVyBf9Sgp0g1Mfi6cPXHaeYQZP0AXNoQIgDDVu3v1AXcHy66UgveZRlb5ohnhf8PjKe3gqbTeBNFYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrXqVzQUk1%2F6UdexSrcA3GqPFhqgKKfSALuqjnOug9C5G7VktQ56%2FnjMy%2Be5%2FE%2FjxmHUbqL2ts6j2AjemrOFu%2FM%2BwVjUy%2FcVyom5RcRg0DZSaFPpmaYIP1Uwe2lgM7cekmowYqERco7ie97USwCIm%2BoyIgDt%2Bbvd8%2FP1TgyQ0mY7spSrG7byYZBoSvolHZsm0uLd55RXrp4bGxOTVvfnB9DgXBVvIjqkF33F9OrVSbDAAE%2BydN%2FqxGa2LTgZRJJqC6p%2BSXIGTQh6eMQloeQCyAhoDMoL7SO3wESGtW4YX030FrbKysqQvrMgMDSYGCuutVT3ijHPa67qh9%2B0iVPm6YZEaQmyP9vvQIY6R%2B6ijnj5M5N1OWExGklfAKMYBHEJ3FPzCUVbbGz2NbYiSFdynZDp8Yqq0b10LasF2yzMLCwiAIPLSpX1e00CoKgQ%2F687cT0BT0WHiZ9GqIblFhvLjsXBq4qwxIIilln%2B3WyLjWagpA2s4SMjBNZ1GGkplqjlGQjBzx34D7wwjZ2EM5zKJame7Pw9N8WOwqM70x3Y3XL6rOaSFZmEiJ%2BUnc5GvDOVzGviwOnqrZr%2F6X4%2FQ5qoT1kLsfE13c85CdRGzWqC9lKrUgeptpASKhJ4Ggp9o5f0TuzlG8%2BrqaLESIFMLH%2B0skGOqUBNsnwA56XemIzkUDJY6d706eWvK4Gb09CymoMenlOPyDCwe79u8SHNCuVJOv3uDLRQyNC%2FfQFpSqMlfXxGEB3zCHbbi3YXUmyB9ie42ZYB2FUKdXPJu4%2B9CeSkHOuY1NGD061piJb8f4cGnqVfnx5C7cyRFVbVPK2Oqd%2Fryb2DJKW7flxxWO30ehMgi%2B%2B8lD%2BI%2FIRD99Tf0DvIVN%2FaAn2RSS4P1Fo&X-Amz-Signature=1bf5ebd8c2fb35108c8b26d264b7a4c463c599ebbcf4d57b0441e5ee2155d47e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXPRNIN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyVuPvmskLjqJVyBf9Sgp0g1Mfi6cPXHaeYQZP0AXNoQIgDDVu3v1AXcHy66UgveZRlb5ohnhf8PjKe3gqbTeBNFYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrXqVzQUk1%2F6UdexSrcA3GqPFhqgKKfSALuqjnOug9C5G7VktQ56%2FnjMy%2Be5%2FE%2FjxmHUbqL2ts6j2AjemrOFu%2FM%2BwVjUy%2FcVyom5RcRg0DZSaFPpmaYIP1Uwe2lgM7cekmowYqERco7ie97USwCIm%2BoyIgDt%2Bbvd8%2FP1TgyQ0mY7spSrG7byYZBoSvolHZsm0uLd55RXrp4bGxOTVvfnB9DgXBVvIjqkF33F9OrVSbDAAE%2BydN%2FqxGa2LTgZRJJqC6p%2BSXIGTQh6eMQloeQCyAhoDMoL7SO3wESGtW4YX030FrbKysqQvrMgMDSYGCuutVT3ijHPa67qh9%2B0iVPm6YZEaQmyP9vvQIY6R%2B6ijnj5M5N1OWExGklfAKMYBHEJ3FPzCUVbbGz2NbYiSFdynZDp8Yqq0b10LasF2yzMLCwiAIPLSpX1e00CoKgQ%2F687cT0BT0WHiZ9GqIblFhvLjsXBq4qwxIIilln%2B3WyLjWagpA2s4SMjBNZ1GGkplqjlGQjBzx34D7wwjZ2EM5zKJame7Pw9N8WOwqM70x3Y3XL6rOaSFZmEiJ%2BUnc5GvDOVzGviwOnqrZr%2F6X4%2FQ5qoT1kLsfE13c85CdRGzWqC9lKrUgeptpASKhJ4Ggp9o5f0TuzlG8%2BrqaLESIFMLH%2B0skGOqUBNsnwA56XemIzkUDJY6d706eWvK4Gb09CymoMenlOPyDCwe79u8SHNCuVJOv3uDLRQyNC%2FfQFpSqMlfXxGEB3zCHbbi3YXUmyB9ie42ZYB2FUKdXPJu4%2B9CeSkHOuY1NGD061piJb8f4cGnqVfnx5C7cyRFVbVPK2Oqd%2Fryb2DJKW7flxxWO30ehMgi%2B%2B8lD%2BI%2FIRD99Tf0DvIVN%2FaAn2RSS4P1Fo&X-Amz-Signature=6240337bb355079cb21fd0bdf6d5fcd48f4e5b852265867b78dedac29030b1c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

