---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVXUG3XF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU6nwWWOl0D9j8XV81y4eq5C%2Fvv5zt6c%2BdxoMp41B84QIgdICrifGFQTujVYpDWiVlNU1dPwD6HNBxggIuiiYXva8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPpnZCE36tJ27zpZ%2BCrcA3s2eMfqP0SDYMFHw9D23Eg0%2Fzrqgo7EHK93TEQ%2BL%2Bqc7%2F1yXgXNGZoXalG4HXkvHk0VOhzS7jUD1O59FNJpSzC%2F7NBtUw4PjIWEOBGFdrU9aqj4LFzVTJGp3w66cxivwCQJgIiCSqnbZUMtUKl%2BEJfddHrCkA6%2Fl5nHNW7%2BXTMgIyO7yp32S2teBOo%2BY10Aa8dIF1HoS36JgYix0fv18kPjCGNHAWN6OeDSyRGBSMfK6VGpB3LfZYCF873FTLGQSNOvvxV19mn0H8rZZIxpSTJOr9yEjLzL2cEJowPN3Rs8e0B08OaMw0BlPn97P2i2vvVPhanBTL%2BRNZwMzgIBdDdK5g%2BY1yWcFx1MzAyxokNFjoFL5XErvCCGGA%2Fy6FH36SOIfnV%2F7bVWsiHQtVxvrZxFQSeTe9V4CAOP7krM6J0Lksf%2FUipHWXjnjXQPiFa2D6XX54x%2BU%2Fkw37D2UhN%2FaWTwL%2FaDcS5GWlD%2BKrAag5SWa0LM3ZWXONPS5MX7xsrW8tUy9PrFbs%2Bsun5i2YwDwEeWc4YTuIvL5y5StkvH3x10lmJ%2F6lrYqsPmeWJyVyp%2BsPbebW2F%2ByCgNdn27OxVB0Ijf9jr9hR4RklVm6ZNZM%2BHpubRcJd7pGFq6rgcMIzzy8kGOqUBbIoPciOgbjgIe2Y7EBFeYDtFXr%2FzaCoPdcL91Od2GDwFMnnZcPYOcgPxcW4vd5wSXdvDpPidt0lPxvmHYKprx9osVUgHRXCxDSd34p7IIILq%2FmaORCzjdlW6uJPAwkkwIRLwBXrxrzruXZXdisOYN%2FlDwy8PaJUGR9Pd8bvP1kB2k5kpwpvTgnaBohUHSFLYwoTBm0y1uBeXySbKVGJhCj%2BLXAOn&X-Amz-Signature=6f2e5dce8ce773c49cc6ab7d27fc468d5153ac269c9e93eaf2c2d33a07145b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVXUG3XF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU6nwWWOl0D9j8XV81y4eq5C%2Fvv5zt6c%2BdxoMp41B84QIgdICrifGFQTujVYpDWiVlNU1dPwD6HNBxggIuiiYXva8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPpnZCE36tJ27zpZ%2BCrcA3s2eMfqP0SDYMFHw9D23Eg0%2Fzrqgo7EHK93TEQ%2BL%2Bqc7%2F1yXgXNGZoXalG4HXkvHk0VOhzS7jUD1O59FNJpSzC%2F7NBtUw4PjIWEOBGFdrU9aqj4LFzVTJGp3w66cxivwCQJgIiCSqnbZUMtUKl%2BEJfddHrCkA6%2Fl5nHNW7%2BXTMgIyO7yp32S2teBOo%2BY10Aa8dIF1HoS36JgYix0fv18kPjCGNHAWN6OeDSyRGBSMfK6VGpB3LfZYCF873FTLGQSNOvvxV19mn0H8rZZIxpSTJOr9yEjLzL2cEJowPN3Rs8e0B08OaMw0BlPn97P2i2vvVPhanBTL%2BRNZwMzgIBdDdK5g%2BY1yWcFx1MzAyxokNFjoFL5XErvCCGGA%2Fy6FH36SOIfnV%2F7bVWsiHQtVxvrZxFQSeTe9V4CAOP7krM6J0Lksf%2FUipHWXjnjXQPiFa2D6XX54x%2BU%2Fkw37D2UhN%2FaWTwL%2FaDcS5GWlD%2BKrAag5SWa0LM3ZWXONPS5MX7xsrW8tUy9PrFbs%2Bsun5i2YwDwEeWc4YTuIvL5y5StkvH3x10lmJ%2F6lrYqsPmeWJyVyp%2BsPbebW2F%2ByCgNdn27OxVB0Ijf9jr9hR4RklVm6ZNZM%2BHpubRcJd7pGFq6rgcMIzzy8kGOqUBbIoPciOgbjgIe2Y7EBFeYDtFXr%2FzaCoPdcL91Od2GDwFMnnZcPYOcgPxcW4vd5wSXdvDpPidt0lPxvmHYKprx9osVUgHRXCxDSd34p7IIILq%2FmaORCzjdlW6uJPAwkkwIRLwBXrxrzruXZXdisOYN%2FlDwy8PaJUGR9Pd8bvP1kB2k5kpwpvTgnaBohUHSFLYwoTBm0y1uBeXySbKVGJhCj%2BLXAOn&X-Amz-Signature=5c39f0a41231114e5eb1bf3899cc0372c4c69b8d09cd810729084ffff2a60189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

