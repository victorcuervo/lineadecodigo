---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VZJTP2D%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAaYbQs1Piw9uRR4wLHWP0iuPIsaRQDfBhTMZ17%2Fa%2F3gIgXaCQL2%2BnLtG7OJ1sezEsxxhf32UU6QNhu8ifvUkk6CgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8KIj4fi6CTA3WQMCrcAx7WPfmr6bzpqspYT4MDLx7T7lFgyTyn8yA3GQnjSxYEF%2BRshyjgdsyz%2FwbyHNyGFk9Yc%2FZhy8r%2FDPqyuE9wvVGKIKZTlQsJ4bsROCo%2FJH%2BWu7%2FFzXK53OrosEKOjM%2BvGNvTX8pP3e6RpWCtO8y0TQcNKv5DWlCKgIsxcxuYKnANcznv2W8Fe6tCRTmOCaAQEu8WOFA431wXw2ArAb2zUl9wtJ2FOVxHtjTKETlXp4iytwu1Z%2FB1t6ODfe2ntNgUWFa0GmP9ywutvwmS%2FQDU12QRt4ILVWHZhcCLfiTpEFYF4p1FK5D%2FOLN6RBtdCb3b2slSGi6yJ3R2YrDXnFB4Kx0I%2B%2BCMvR8qoj5pP1gv9nuo78suTNhKZA1DDHwI8%2BiYE%2FZ7cqOkKZcGfUZTXqinmYWc07Gkb1tMrr4OqJVtGnr8AQpCwbnLhTOmKN4xRgOD%2FPRmx6IOzvfmTkzNJ6nFiwzN%2FZMjO3La%2BKCEtNbi4wLpPwHTHkx%2FbY3NKQDZJdHUOJ%2F%2BNKUvxWYjf6Rbj27MZiNqlWXeAc2baSPvYKcBJuHZdiQn%2FXMBNW4KyO89jhrRE2oQHeY%2F%2F7VxBbpKlv1jT9eGQJ1c5k9bjTdWduz1Pyd61PbWT%2BSdd%2FK71jUBMOjt2ckGOqUBVg9EzQQZIjJGosbI5Dc03Ndu0Yhv6NrMxiGNHVfbHJTbuD9Xt3clQ9nTQOpzxDyAjnlF7otzN3pCH0XpRYnV2wRtB8xFgPBi7IJ%2B6%2BVo2h3sueZkMSW40nF4VZ6UOJUBhQa%2BIKOKMUI4nHwieTkzk6knErzV0Z2SokF5%2BUQbPJdf76Vmk8YI%2F2bd8pR3sx26DXBimUDefFdCLsATPMKrJ7iDl1Oj&X-Amz-Signature=f7ad3c6e3215c125a98e0257484bd56a101cc7b3f0a3c7027707258c8b2c1f34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VZJTP2D%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAaYbQs1Piw9uRR4wLHWP0iuPIsaRQDfBhTMZ17%2Fa%2F3gIgXaCQL2%2BnLtG7OJ1sezEsxxhf32UU6QNhu8ifvUkk6CgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8KIj4fi6CTA3WQMCrcAx7WPfmr6bzpqspYT4MDLx7T7lFgyTyn8yA3GQnjSxYEF%2BRshyjgdsyz%2FwbyHNyGFk9Yc%2FZhy8r%2FDPqyuE9wvVGKIKZTlQsJ4bsROCo%2FJH%2BWu7%2FFzXK53OrosEKOjM%2BvGNvTX8pP3e6RpWCtO8y0TQcNKv5DWlCKgIsxcxuYKnANcznv2W8Fe6tCRTmOCaAQEu8WOFA431wXw2ArAb2zUl9wtJ2FOVxHtjTKETlXp4iytwu1Z%2FB1t6ODfe2ntNgUWFa0GmP9ywutvwmS%2FQDU12QRt4ILVWHZhcCLfiTpEFYF4p1FK5D%2FOLN6RBtdCb3b2slSGi6yJ3R2YrDXnFB4Kx0I%2B%2BCMvR8qoj5pP1gv9nuo78suTNhKZA1DDHwI8%2BiYE%2FZ7cqOkKZcGfUZTXqinmYWc07Gkb1tMrr4OqJVtGnr8AQpCwbnLhTOmKN4xRgOD%2FPRmx6IOzvfmTkzNJ6nFiwzN%2FZMjO3La%2BKCEtNbi4wLpPwHTHkx%2FbY3NKQDZJdHUOJ%2F%2BNKUvxWYjf6Rbj27MZiNqlWXeAc2baSPvYKcBJuHZdiQn%2FXMBNW4KyO89jhrRE2oQHeY%2F%2F7VxBbpKlv1jT9eGQJ1c5k9bjTdWduz1Pyd61PbWT%2BSdd%2FK71jUBMOjt2ckGOqUBVg9EzQQZIjJGosbI5Dc03Ndu0Yhv6NrMxiGNHVfbHJTbuD9Xt3clQ9nTQOpzxDyAjnlF7otzN3pCH0XpRYnV2wRtB8xFgPBi7IJ%2B6%2BVo2h3sueZkMSW40nF4VZ6UOJUBhQa%2BIKOKMUI4nHwieTkzk6knErzV0Z2SokF5%2BUQbPJdf76Vmk8YI%2F2bd8pR3sx26DXBimUDefFdCLsATPMKrJ7iDl1Oj&X-Amz-Signature=9edc62a2a23b34fa98dac18cc9e9a0ebf80a066be101263cb0afc81dffd45b9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

