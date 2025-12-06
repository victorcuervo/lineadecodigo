---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EBSNZSJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQsgBQILST7jEDDJRn8VWifn2sdxOSCXHYkg7aLtJ%2FawIhALacgMbySeSL1bSG7xk8V5chOyIJOoXYmZsrOIQJRgM6Kv8DCHoQABoMNjM3NDIzMTgzODA1IgxDPPEJeNcCWdRqC90q3ANxAUhnf6dnnguAQvuCZ8qMVnddgpV3A%2BbtG9yUSZ6ZcKjGH9oIzsoHVnJEko%2FSesm8%2B8PIUTO9%2BvTliojZnPD5aALxpTmfyqM2vJQBoZTQ1nukWoTxa13SB50tt1Irm%2BKR6YR92eNSaVyQQJQKxqv053N%2FXgRoORwz7DDjRb9gwroVc%2BfQnhTjRXae5tTf4lwLd1zin3CIzflhCOmFYdzO3navdHDQ%2BU1KlAt%2Bh9ZtLZAAXxZmJuDSTQ6tG2rYe%2FOsspEReE4j2b%2BlrFn1bPrhuVyMWZpjyLyfti0Zq%2Bragpu1sSpbLrxPkU4SQbqGUz6tpt6bzihw2p59WGm9k5bwqjDc%2Bv0AaOWUMnB2DcKChy3wV9gNiBikOwDTcPXZ9LN3WB84MNkd%2BcRQZfOljJFnAlldMC4qVsEcEV5frkHEunNw%2F7b4EqxELmh2rTQ19PR9itygfwomGDG2bPlzFYOtT53x0ChXtdsf5UMLyuu8uGYLbdJmTv1Rr1YGJA%2Fpwy%2B6ksp5gFuyl77nZK0T5u5poiiIKbcVTzbRngWJQmEHk05CMLRy4Gfr7QatFGlJB%2Bi2LPwoSraOvoydUdND6F3R18pwyARS11gjhBwvKUjG7rRM7lDEVSH4RbTFeDDRy9HJBjqkATIKHmKnupoac4MT7liTk8HzQ9yH4XK4og5Oj2hHKlPxMqPWv5ep%2FlWgoFPDkzVQcUvPxtVDo5zAW9p9xP7AgFm72IxF0m2PvIRGiiX0zmVnxmov5scUv80unMN6iMONB%2BF3%2Ft%2B8%2BoQWEwRMy%2FzO%2BlaWp0sGFZUW1ECsGR5vo23LWHRP8jWxw1CGR40CIopNZpuJ0tqsvi4LbGR%2BU2jJQT0%2BwOAo&X-Amz-Signature=1c6beec27a66289257166ee5318411ca0f77b75d922b40739d9bf4069c031402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EBSNZSJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQsgBQILST7jEDDJRn8VWifn2sdxOSCXHYkg7aLtJ%2FawIhALacgMbySeSL1bSG7xk8V5chOyIJOoXYmZsrOIQJRgM6Kv8DCHoQABoMNjM3NDIzMTgzODA1IgxDPPEJeNcCWdRqC90q3ANxAUhnf6dnnguAQvuCZ8qMVnddgpV3A%2BbtG9yUSZ6ZcKjGH9oIzsoHVnJEko%2FSesm8%2B8PIUTO9%2BvTliojZnPD5aALxpTmfyqM2vJQBoZTQ1nukWoTxa13SB50tt1Irm%2BKR6YR92eNSaVyQQJQKxqv053N%2FXgRoORwz7DDjRb9gwroVc%2BfQnhTjRXae5tTf4lwLd1zin3CIzflhCOmFYdzO3navdHDQ%2BU1KlAt%2Bh9ZtLZAAXxZmJuDSTQ6tG2rYe%2FOsspEReE4j2b%2BlrFn1bPrhuVyMWZpjyLyfti0Zq%2Bragpu1sSpbLrxPkU4SQbqGUz6tpt6bzihw2p59WGm9k5bwqjDc%2Bv0AaOWUMnB2DcKChy3wV9gNiBikOwDTcPXZ9LN3WB84MNkd%2BcRQZfOljJFnAlldMC4qVsEcEV5frkHEunNw%2F7b4EqxELmh2rTQ19PR9itygfwomGDG2bPlzFYOtT53x0ChXtdsf5UMLyuu8uGYLbdJmTv1Rr1YGJA%2Fpwy%2B6ksp5gFuyl77nZK0T5u5poiiIKbcVTzbRngWJQmEHk05CMLRy4Gfr7QatFGlJB%2Bi2LPwoSraOvoydUdND6F3R18pwyARS11gjhBwvKUjG7rRM7lDEVSH4RbTFeDDRy9HJBjqkATIKHmKnupoac4MT7liTk8HzQ9yH4XK4og5Oj2hHKlPxMqPWv5ep%2FlWgoFPDkzVQcUvPxtVDo5zAW9p9xP7AgFm72IxF0m2PvIRGiiX0zmVnxmov5scUv80unMN6iMONB%2BF3%2Ft%2B8%2BoQWEwRMy%2FzO%2BlaWp0sGFZUW1ECsGR5vo23LWHRP8jWxw1CGR40CIopNZpuJ0tqsvi4LbGR%2BU2jJQT0%2BwOAo&X-Amz-Signature=546de8b04b7447f2e87f49da4329bc7fefaa218157ed8c1dd1a815beb9db5f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

