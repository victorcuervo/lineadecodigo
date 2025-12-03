---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZLWDUBP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFQ1rRzyvuhDInlfRv9EK73fsS7A1BVFsGaYoreYc%2BbYAiEA4gXmH3vP9IAhkZDXeGdvYT6763iuO5A8%2FW73Xx1jEPkq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPSXCEiFzR%2FOPfeb0CrcAxmZbjiOcf3UvGx3Lbs0TKZ%2FLKBOzPnsyG7%2FdeX8u%2B4F0Fdu1ITYRA%2B0dvX%2B9NEueX1lN5H7VMS1CNdoU2iaphDvO3mbyHTKVjAoiEu7%2FKgYmCVFe7tLAgaaBpcupOzCHebRLDl9oAF4xefE2jj%2B81hzvKmWX84LXRxGLGuVNPW1TbzPEgHi1gU40by6JaCwYAlb5of3R8x3z7NSEhexp7Qd0HY5jCSbV%2BXbWj1bhzaqbSsiZimKtFQLsh%2FjUQxPBzkMmydQXZaoLPq60SefcfsOiHi6ZmxQELWI3Fy5IpeRuVCdMlgw9zwgoviQ7FJtb0qHR4D4v3uTBTrcL3rj97tOeQV09yjWHSzwisyHBoja0t2flslms%2B8GO6qk4Vnqy9WJ3UcJnTAfvYtlozXGOk%2FVWWVXwn2GxPabMszKUmnd%2F6tPKNWBoHLN6KN8NqNUDD6L3JRhEYyPBS3b%2BKKXKOqIINQ86tKq0IhvRCynGd%2BG8OOBm1gI6idmLC0RCimcl8j7mRW2zJyfE2%2ByRvwlyzghMwI8xMf%2B46UQp0HMvyzsSy1xopBn8F9ojk%2BR1fssqTh0PF%2B8g5irqwvyNwH%2BS5xD%2BlxwnHNPqiIrhkgAFrnxDWgT7utZAGTgG1GuML%2BuwMkGOqUBzwFzMD0ZAD4OIrmr%2F1loWb8CmjyFi5nCqCZlpJIfkH5DUvZo4zLMCbhJc9ItE%2FLMqdUr%2FXkYFbQsD%2B4KdIkkCigVuwpZ%2BgKCGd%2BJKm65%2FPDIQu1XRVnyXem2%2Fb1caNGyJXSOrbi2uUmIaC1cfkRNke7RMo6v0CSya8RCE8K6sHoeq%2BoCLykYpnNvvKg6eu7QhQetJlrDkE%2BoyizYAY2uZ1GidX1y&X-Amz-Signature=ff6ba373c4e5000ed1445720b6b7aa4274f1f2b3c4fcbd4767240f9492354111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZLWDUBP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFQ1rRzyvuhDInlfRv9EK73fsS7A1BVFsGaYoreYc%2BbYAiEA4gXmH3vP9IAhkZDXeGdvYT6763iuO5A8%2FW73Xx1jEPkq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPSXCEiFzR%2FOPfeb0CrcAxmZbjiOcf3UvGx3Lbs0TKZ%2FLKBOzPnsyG7%2FdeX8u%2B4F0Fdu1ITYRA%2B0dvX%2B9NEueX1lN5H7VMS1CNdoU2iaphDvO3mbyHTKVjAoiEu7%2FKgYmCVFe7tLAgaaBpcupOzCHebRLDl9oAF4xefE2jj%2B81hzvKmWX84LXRxGLGuVNPW1TbzPEgHi1gU40by6JaCwYAlb5of3R8x3z7NSEhexp7Qd0HY5jCSbV%2BXbWj1bhzaqbSsiZimKtFQLsh%2FjUQxPBzkMmydQXZaoLPq60SefcfsOiHi6ZmxQELWI3Fy5IpeRuVCdMlgw9zwgoviQ7FJtb0qHR4D4v3uTBTrcL3rj97tOeQV09yjWHSzwisyHBoja0t2flslms%2B8GO6qk4Vnqy9WJ3UcJnTAfvYtlozXGOk%2FVWWVXwn2GxPabMszKUmnd%2F6tPKNWBoHLN6KN8NqNUDD6L3JRhEYyPBS3b%2BKKXKOqIINQ86tKq0IhvRCynGd%2BG8OOBm1gI6idmLC0RCimcl8j7mRW2zJyfE2%2ByRvwlyzghMwI8xMf%2B46UQp0HMvyzsSy1xopBn8F9ojk%2BR1fssqTh0PF%2B8g5irqwvyNwH%2BS5xD%2BlxwnHNPqiIrhkgAFrnxDWgT7utZAGTgG1GuML%2BuwMkGOqUBzwFzMD0ZAD4OIrmr%2F1loWb8CmjyFi5nCqCZlpJIfkH5DUvZo4zLMCbhJc9ItE%2FLMqdUr%2FXkYFbQsD%2B4KdIkkCigVuwpZ%2BgKCGd%2BJKm65%2FPDIQu1XRVnyXem2%2Fb1caNGyJXSOrbi2uUmIaC1cfkRNke7RMo6v0CSya8RCE8K6sHoeq%2BoCLykYpnNvvKg6eu7QhQetJlrDkE%2BoyizYAY2uZ1GidX1y&X-Amz-Signature=5110cfa77150710c94a5b4fd5b3fcfb9c7119231afa203add2c4b8b1d141fb08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

