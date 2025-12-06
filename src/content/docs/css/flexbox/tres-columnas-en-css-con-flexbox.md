---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCODB7EM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BaxW1CGprkQ9NYDBlYARuI61SPGoc10%2B8LDoZoH%2BhRwIgM%2FL3GaFljtrIhbcRs3mYqIX74cFFnt5X93canPGWXt4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDByTjxONSSd9t%2Fiq8CrcA0v6t7HB4k3Zy%2Fha1i3AMQ%2FAgVtmJrrmp3ZY%2FzeW%2Fr59K1Ud7Yxgi%2BXpCRtFtBdfnnEVetbtkb2oN1tIupGlR7ihWIh%2Fcxe19%2Fc6yL%2FAyghafvVgBZ7W5g%2BCkK2mUwjeNwC4jY0G%2FigEdYUy7sGEbMvSNfo%2Fc%2FMESYbC0qH8W0TRV3T4EVpFRMLOiP74TRToWd0M2UMPdZKHho7TbepWbSpLNz261xQ5yidEGlkHNCcIOoWXxkxV1NvL2N5x26wxPh0OuMuUaL%2Bh7%2F8Bvkbvgxndx6A6Y75shnt2Ylyt94rA7bop%2FoWe2e%2BgLtbuViaE6Jd1NsuiBj%2BJ2CGYiePU5jqb8PIx3OoGoP23nsqyaxocxv%2BKiZL5KUDJt1uzAQDauepdx38YrG7lGs9UncjhmQ2tQTC9maJS%2BndycltxWk%2FhlDEPOPBvkT8Db5zFMHccjO1qc6zoVj9bOV%2F%2BV2vHp608MeTi12oUIR7vQWk8VTKAJmAToqDVjTlX19yilTkuGdnTlYfc8Z8i5U1aVrblR43SMkXFmxeZuugPeqxOSKDTzhNGiS6qADKh3iwG%2BGWfd9OzVj4h%2BGM2MzrSVeEYbbfQl5BxZwGYVYADB0rqAp03fDrzZyPn6hSIF%2FiCMILezskGOqUBe81NmUsutyPqSaxpX9VWC7py3Pi%2FYbur%2FdXkj3P6cG%2Fz6WlfOyYbLA066Lblysx%2BZdSZa20cJ3HCRRNhUYl6NQpmaSaOUlNCTBqgivGRwskGnZELlFrIzotZvMWedwztyLD34ifnaaIS%2BDYXWRgRQtd1%2BOOjsovi6dHssZUFRgH7Et%2BLSzjDzhGPzUzeksQ6yeNw2jBzTpy8ngf7pM%2Feh5DMiqf2&X-Amz-Signature=d62218c4dabde9599db5ca0f20797835b3be2ba4a9919faf27fbe13c173a85a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCODB7EM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BaxW1CGprkQ9NYDBlYARuI61SPGoc10%2B8LDoZoH%2BhRwIgM%2FL3GaFljtrIhbcRs3mYqIX74cFFnt5X93canPGWXt4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDByTjxONSSd9t%2Fiq8CrcA0v6t7HB4k3Zy%2Fha1i3AMQ%2FAgVtmJrrmp3ZY%2FzeW%2Fr59K1Ud7Yxgi%2BXpCRtFtBdfnnEVetbtkb2oN1tIupGlR7ihWIh%2Fcxe19%2Fc6yL%2FAyghafvVgBZ7W5g%2BCkK2mUwjeNwC4jY0G%2FigEdYUy7sGEbMvSNfo%2Fc%2FMESYbC0qH8W0TRV3T4EVpFRMLOiP74TRToWd0M2UMPdZKHho7TbepWbSpLNz261xQ5yidEGlkHNCcIOoWXxkxV1NvL2N5x26wxPh0OuMuUaL%2Bh7%2F8Bvkbvgxndx6A6Y75shnt2Ylyt94rA7bop%2FoWe2e%2BgLtbuViaE6Jd1NsuiBj%2BJ2CGYiePU5jqb8PIx3OoGoP23nsqyaxocxv%2BKiZL5KUDJt1uzAQDauepdx38YrG7lGs9UncjhmQ2tQTC9maJS%2BndycltxWk%2FhlDEPOPBvkT8Db5zFMHccjO1qc6zoVj9bOV%2F%2BV2vHp608MeTi12oUIR7vQWk8VTKAJmAToqDVjTlX19yilTkuGdnTlYfc8Z8i5U1aVrblR43SMkXFmxeZuugPeqxOSKDTzhNGiS6qADKh3iwG%2BGWfd9OzVj4h%2BGM2MzrSVeEYbbfQl5BxZwGYVYADB0rqAp03fDrzZyPn6hSIF%2FiCMILezskGOqUBe81NmUsutyPqSaxpX9VWC7py3Pi%2FYbur%2FdXkj3P6cG%2Fz6WlfOyYbLA066Lblysx%2BZdSZa20cJ3HCRRNhUYl6NQpmaSaOUlNCTBqgivGRwskGnZELlFrIzotZvMWedwztyLD34ifnaaIS%2BDYXWRgRQtd1%2BOOjsovi6dHssZUFRgH7Et%2BLSzjDzhGPzUzeksQ6yeNw2jBzTpy8ngf7pM%2Feh5DMiqf2&X-Amz-Signature=88488668870c88264da4979059dbb3f712c38c5d19430c23a07f20e7d661fcf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

