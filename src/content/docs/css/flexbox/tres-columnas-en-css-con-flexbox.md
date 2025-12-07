---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE57SQWY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT0G87rTgs1h0OuAFnG0o0jGWATgeqTbBbVLBrpLykaAIhAISS%2BS6muBwvgx10h%2FKEwpQ0kir4unwM%2FQHDoKON45xSKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjHstKlhZD3pc7Sh4q3AODssb8ORMc%2Fbk57FP4Sv%2BcOfKDWtpZs3dTArRQguyaZgJvhR9v%2BvNqcK02auoFnwBHqCuUoV86IkkwnaSyLQp0G0k039eX5SPjsPzSKHF4COltRod00vFkQFclcb%2FVciWhuaMSiWEK2OlzS3FOVRgDk8tKiagdEtpfi3g%2FVhY91EkdumJHrk4PywjE0nZMdGRgyGybdehchfQGtoXJQEgZWse0575%2BifGa4OGy6tApsJwLaS3ZcXNHlbDRVCF4%2BPm2Q%2B6CyhwlWyREaGabv1CgfVJlRDAVh5jmiLHl2wygh%2FjGePaxn%2FHlcrREG6%2FfolTMw84iCjaVdlJcpacF354f%2Fvzl1oRhYHOPwf2xG0Oq%2Bh0hbKGf8i0lrBc%2Ft%2BoZSPNQEtX6YLjHjekaq8ueWVBECMhaoY31cDmU8i27dTxaCKwI58RJBF8oyljCVEzZcmvp21zMK6piwtsJ0a1s%2By5Ma59B4QyoTWTbQi6sYcfq7XmLYi28z%2BUNDQZaPes0TAXs5oKJJmjGD%2B3LsSsL35abUBNfYVPuWSJorkY%2B1QYrYAux3o1fR7iPtiSYjnOnuorKMEXlfqv1vfE%2B6ua1F6dyOGhhAk4Pk3MmKz4ekKEvKpLBQERIYk1WvXoEkDDz%2FdLJBjqkAbQF%2BRoWsUxxjya2lBhErDWUOVN9Bc8elWwSPvKobjDSkU1cTz11j86UPnL2dUPvVyuXXnYBMhz8F73mM8v5nUqxZqHUGxRetbWsq5yaoNySYshCVuw44%2BbMl1nlz%2FzkN7iKBbSrKAX0Gwp9Hksx5sA44LJfKOpjLzdXC0Dkjbvs9%2ByV54NDmxSYjdZ6Wk45nK19RJNo1hlPZ7a%2BxjTEYQvVT%2Bug&X-Amz-Signature=eac1ccefe97caa3be5b81b41aa612a08ea169302db4fed4da6e2260a65c870aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE57SQWY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT0G87rTgs1h0OuAFnG0o0jGWATgeqTbBbVLBrpLykaAIhAISS%2BS6muBwvgx10h%2FKEwpQ0kir4unwM%2FQHDoKON45xSKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjHstKlhZD3pc7Sh4q3AODssb8ORMc%2Fbk57FP4Sv%2BcOfKDWtpZs3dTArRQguyaZgJvhR9v%2BvNqcK02auoFnwBHqCuUoV86IkkwnaSyLQp0G0k039eX5SPjsPzSKHF4COltRod00vFkQFclcb%2FVciWhuaMSiWEK2OlzS3FOVRgDk8tKiagdEtpfi3g%2FVhY91EkdumJHrk4PywjE0nZMdGRgyGybdehchfQGtoXJQEgZWse0575%2BifGa4OGy6tApsJwLaS3ZcXNHlbDRVCF4%2BPm2Q%2B6CyhwlWyREaGabv1CgfVJlRDAVh5jmiLHl2wygh%2FjGePaxn%2FHlcrREG6%2FfolTMw84iCjaVdlJcpacF354f%2Fvzl1oRhYHOPwf2xG0Oq%2Bh0hbKGf8i0lrBc%2Ft%2BoZSPNQEtX6YLjHjekaq8ueWVBECMhaoY31cDmU8i27dTxaCKwI58RJBF8oyljCVEzZcmvp21zMK6piwtsJ0a1s%2By5Ma59B4QyoTWTbQi6sYcfq7XmLYi28z%2BUNDQZaPes0TAXs5oKJJmjGD%2B3LsSsL35abUBNfYVPuWSJorkY%2B1QYrYAux3o1fR7iPtiSYjnOnuorKMEXlfqv1vfE%2B6ua1F6dyOGhhAk4Pk3MmKz4ekKEvKpLBQERIYk1WvXoEkDDz%2FdLJBjqkAbQF%2BRoWsUxxjya2lBhErDWUOVN9Bc8elWwSPvKobjDSkU1cTz11j86UPnL2dUPvVyuXXnYBMhz8F73mM8v5nUqxZqHUGxRetbWsq5yaoNySYshCVuw44%2BbMl1nlz%2FzkN7iKBbSrKAX0Gwp9Hksx5sA44LJfKOpjLzdXC0Dkjbvs9%2ByV54NDmxSYjdZ6Wk45nK19RJNo1hlPZ7a%2BxjTEYQvVT%2Bug&X-Amz-Signature=278230758a6f916fdc9d2e5f80146f0f4f95d7ee46080cd585d6772551a1bb61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

