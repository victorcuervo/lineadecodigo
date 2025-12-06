---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAW25IL2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE96dTV3LDVw70CkmQSv%2BEnXOrZ1BoaUYIH5tH0%2Fx0KOAiEA68I2nl9N8f00YQsaTfXeaAnA9d3zf4QExx5x2AsZn3Mq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAvryMDH%2BjT2p3lMoyrcA0yKoRsm4kqBC62WHnj6WLKzi791QE6q0FfFI3nsXSaOSAi3W5o0xi%2FcaoA7kJZpI%2B6AzhUHumjq5HlNvw2pEhmyGtOXzLUsnOJ%2F8xtCOEbCYOtEQzzOpNZ2vt6s1CdUK5jGTRy46OJTnWt%2BP0%2BHHO0ynKKznVdRfJy%2FpOfpCOwM5PHSX4UoXVK5WvYk5t2xgSC20GVPP70bFwjOC0%2BzKnfOqz8Ld1z47O6v5pIrTn5nF5Rj4dw66IJIDBPsSaqwmOc%2BgJBnPfJY9vp0zto9163x%2Bvkyn1XCbOwe6z58ARIkLQb2rjABxXPD5EZAwL1%2BZMeAQPSyCgUVfYD4cV%2FOWDEVSZFBB1%2Bx0ZcZrM%2Bz9xknSVm%2Fh9UJe9BIDXsQmLjFFgRrAFEddxK8%2BYxMGwpMB8HY37sFfD625uD3BC0yIiMTo2SP%2BupU6vmhl1IHT24IetQ%2FvlAfjh6OzXGsYBsxAKAlsqS3u7w1N8g6w9ARRIHDw3cXkt7GuPSM9ue1fxqHVVSk8U96ZCRDPotxMmRIq2VSEjsXxxNnthdFpHTmd%2FpYo6o%2FYVQuqQXa0E%2BLhSkEYbOJwjXgvWNbEwEgm99KLs5hdoqhfhy5uOeyGgnBtjx%2By8i3koKiusKm12S6MIjF0ckGOqUBwMswfaq4I%2BGiuUxvk0zYAe3xiJqpjWHcLt%2BOZ5kh7M1jXCVR1%2F1S5LcB0JOa%2BtkcxMVmfUp0DcdwsRMLytga7aBEeUvYL%2B5Kn2fzrEJPfWWqdrxkKmPo5FgoNb%2F7bFCQYMByRiwuHasisg3er10N6BExIzkvnV70y3au1ePmq22JfZuCX%2BJKSvxkyylUnqpBmRFWsuYniQFZWIlDjwRi01NWjK9G&X-Amz-Signature=253c07d549ad03655a94e1d624a76bcc6919e6214f64506e0aeef279f3373bec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAW25IL2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE96dTV3LDVw70CkmQSv%2BEnXOrZ1BoaUYIH5tH0%2Fx0KOAiEA68I2nl9N8f00YQsaTfXeaAnA9d3zf4QExx5x2AsZn3Mq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAvryMDH%2BjT2p3lMoyrcA0yKoRsm4kqBC62WHnj6WLKzi791QE6q0FfFI3nsXSaOSAi3W5o0xi%2FcaoA7kJZpI%2B6AzhUHumjq5HlNvw2pEhmyGtOXzLUsnOJ%2F8xtCOEbCYOtEQzzOpNZ2vt6s1CdUK5jGTRy46OJTnWt%2BP0%2BHHO0ynKKznVdRfJy%2FpOfpCOwM5PHSX4UoXVK5WvYk5t2xgSC20GVPP70bFwjOC0%2BzKnfOqz8Ld1z47O6v5pIrTn5nF5Rj4dw66IJIDBPsSaqwmOc%2BgJBnPfJY9vp0zto9163x%2Bvkyn1XCbOwe6z58ARIkLQb2rjABxXPD5EZAwL1%2BZMeAQPSyCgUVfYD4cV%2FOWDEVSZFBB1%2Bx0ZcZrM%2Bz9xknSVm%2Fh9UJe9BIDXsQmLjFFgRrAFEddxK8%2BYxMGwpMB8HY37sFfD625uD3BC0yIiMTo2SP%2BupU6vmhl1IHT24IetQ%2FvlAfjh6OzXGsYBsxAKAlsqS3u7w1N8g6w9ARRIHDw3cXkt7GuPSM9ue1fxqHVVSk8U96ZCRDPotxMmRIq2VSEjsXxxNnthdFpHTmd%2FpYo6o%2FYVQuqQXa0E%2BLhSkEYbOJwjXgvWNbEwEgm99KLs5hdoqhfhy5uOeyGgnBtjx%2By8i3koKiusKm12S6MIjF0ckGOqUBwMswfaq4I%2BGiuUxvk0zYAe3xiJqpjWHcLt%2BOZ5kh7M1jXCVR1%2F1S5LcB0JOa%2BtkcxMVmfUp0DcdwsRMLytga7aBEeUvYL%2B5Kn2fzrEJPfWWqdrxkKmPo5FgoNb%2F7bFCQYMByRiwuHasisg3er10N6BExIzkvnV70y3au1ePmq22JfZuCX%2BJKSvxkyylUnqpBmRFWsuYniQFZWIlDjwRi01NWjK9G&X-Amz-Signature=3d1a7017f0ac828b7f76272d52da2e3b7d1a4bb04c6d8a25e1c87b45f5916768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

