---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HENF7ST%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3Uvf9Fxf9aIvBhR6SkdUAjbOVxcEQFW2mmd%2FYvEQ0pAiAMx19C9ofluJ3NbhWFXrxm%2FUcJs7BAMXbx%2BOo86611WSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Kj6j%2FJ0oQENuiWJKtwDl9AM9Dos%2FxJ8TuITR7zs1nBJk%2FTSGYDvGuAuz7sKX%2FKbE%2BfIzxuYU8EQnDvVCeuazhINGa6ObugMIFZo2KQm%2BFP3ZYxi7Ac%2FaH8c48FpkjHn2W0OXeacxEOrMUKwbSyCXCoaLubVWadD6bnVz04Q4NvHVGnXUTZUukveeRyC3MdwR9NYvsW2AcSOAf%2F2yH6q72iocyOV8BzcSz2asaNasn6QUy9LZvzQflfqpebkRGiIRi3RqNrZAfitZis3UuVy5dc126we1KZ9FpSJZyhQ6m3EdAdjCG9BAm3y58jLy%2FKy8PWwqBG%2BiD90d0ZMdP97D%2BRW25yU%2B2QTjefpIpbDZKKQjK8aUJ67%2FrG6moVU2MLbtQCCXAEz42aDLxXRQ45bsnKR6MFribk9Upl9RlVRqRe3F%2FwitW9W1u56coA%2Ffaji7J%2F4q76V28DtTGl6M%2F0ZbIrz%2BZUfNXeXpFq7YPM12%2BvKkXyDKHxifvzU4YRKz2hi9%2FkUCcbZ7YDkLCF%2Bl%2BnatHVxXYPzyp3%2FUaF%2Bfk8g2Mm6Pkju%2BDKb47PLDrUY0XOYUGwV1bd2EPDaoB8n%2FAiILLWSw05b51%2BQxAoUwG9dukFBieELz6CHo2vVBmjPqI8DAafo1RdJcwDzpaEwq6LdyQY6pgFIdps18JB8UCzGXppzs08P%2BTcFmSav%2B0AtqkBWh%2BD7ikm3SzeF5%2F12hDJeRFruyemdV7tthFgmLt4oOBE3E7DyIKIWT7iJw8SeJ8d9R9n4z5jnxEWu6i81ij27SbNKp2Ngu2fVPf8Yc0OkG2f%2By1r1xSSpoC11dY%2BkoTPAFoOI%2FgWAWrnh1HPQ3vOeVf%2FB%2BNFvS72P1nDoQSk6oDogPN68y%2BulLhsx&X-Amz-Signature=a8edc4ad83342d574fdd2506da93bcd48899b529c4a4ce88049336d1077feb1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HENF7ST%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3Uvf9Fxf9aIvBhR6SkdUAjbOVxcEQFW2mmd%2FYvEQ0pAiAMx19C9ofluJ3NbhWFXrxm%2FUcJs7BAMXbx%2BOo86611WSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Kj6j%2FJ0oQENuiWJKtwDl9AM9Dos%2FxJ8TuITR7zs1nBJk%2FTSGYDvGuAuz7sKX%2FKbE%2BfIzxuYU8EQnDvVCeuazhINGa6ObugMIFZo2KQm%2BFP3ZYxi7Ac%2FaH8c48FpkjHn2W0OXeacxEOrMUKwbSyCXCoaLubVWadD6bnVz04Q4NvHVGnXUTZUukveeRyC3MdwR9NYvsW2AcSOAf%2F2yH6q72iocyOV8BzcSz2asaNasn6QUy9LZvzQflfqpebkRGiIRi3RqNrZAfitZis3UuVy5dc126we1KZ9FpSJZyhQ6m3EdAdjCG9BAm3y58jLy%2FKy8PWwqBG%2BiD90d0ZMdP97D%2BRW25yU%2B2QTjefpIpbDZKKQjK8aUJ67%2FrG6moVU2MLbtQCCXAEz42aDLxXRQ45bsnKR6MFribk9Upl9RlVRqRe3F%2FwitW9W1u56coA%2Ffaji7J%2F4q76V28DtTGl6M%2F0ZbIrz%2BZUfNXeXpFq7YPM12%2BvKkXyDKHxifvzU4YRKz2hi9%2FkUCcbZ7YDkLCF%2Bl%2BnatHVxXYPzyp3%2FUaF%2Bfk8g2Mm6Pkju%2BDKb47PLDrUY0XOYUGwV1bd2EPDaoB8n%2FAiILLWSw05b51%2BQxAoUwG9dukFBieELz6CHo2vVBmjPqI8DAafo1RdJcwDzpaEwq6LdyQY6pgFIdps18JB8UCzGXppzs08P%2BTcFmSav%2B0AtqkBWh%2BD7ikm3SzeF5%2F12hDJeRFruyemdV7tthFgmLt4oOBE3E7DyIKIWT7iJw8SeJ8d9R9n4z5jnxEWu6i81ij27SbNKp2Ngu2fVPf8Yc0OkG2f%2By1r1xSSpoC11dY%2BkoTPAFoOI%2FgWAWrnh1HPQ3vOeVf%2FB%2BNFvS72P1nDoQSk6oDogPN68y%2BulLhsx&X-Amz-Signature=c71cc990fe13bea0e5d65deb6518e5970422e0a7d52bf80fbe5e2827749efdda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

