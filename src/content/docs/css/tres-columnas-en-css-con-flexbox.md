---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPRA3THK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIH%2F9BPl8PN3cF4DsmJgNbkkRluoEQe7NtXNiN7N29XugAiB44FMm7wmFwvAgCRorEFLKagwzyU12kORCkRdpegIJPCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMBnL23Y9K0ATi48cSKtwDOBDx8%2FaWX%2Bodg89uvN7juMGZALJffwPDI8EDqvwU46z5r20JOeq9N7y8hQ9GfE0s0pT5cYdoECHH8ce0WNJ%2BMiNOZqO3GD62JF0bNlwvDT6JY3CltjsUo5Uj%2F1o2YXowjqHHns9r%2B7YUqdvOq7k%2BR%2FkvWp3ppGuKF9P0517uHmFJRZSUrniipxZJoTjrt86yotP3zmv6UP6TYvn5F0%2FczBr0bLLrBcpeO4D11vh3MptIIptmOfPzDcjU6Oyy%2B33bOBjRFb4c7rGBG0Y00m4yKnNo4PhAQvqNBbva34yuGSbnEWVGJsp0lHRlNvpg03GDXDhhNWkKJau7ltKqzmFhpNvpeX8AV0LKvI%2BUXgWgwxzW9cHNK358vTjWUpjDoiuF%2FMp5LSMBKhot4oC6QKnd3w337BZlU9DmNJMKRib3I94RSQCeLgScQHA673j%2Bs05bRKqFa45zO65AMSqKhLZCIyuMDdX%2BCfVst%2BFEZK%2B1GUY5D8Sg%2FuW6secujtFettxdci8dl4UWjrc4KCkzQNk4V3Y1IVi1L3xas8wuOwyeHvff7KTv44O%2F21a7Mw1ax0xOvx28hDTekh5Md9IIfrRVtv096reQMoCg3O9j2%2B%2BrGPsn68j%2BTeglbrjr5uAwqvjCyQY6pgGBgBQBkSZeqN0psit8neGZa0H2OhYxckIy3HH6uVtmEQt7FTuQEIVcnQi0Mr3MD240A34ov3xln742VAqY3s81gBGoajS5npHJHAiBMthKHhilJetlpEVdrF6WbPds6EfMSR1EaarHPukBIBoCM%2FvDJmf%2F5hZ6WNvK2wzbKkvW2lSXaNq%2F6Fnk78hGy5eFglJ6w038rqr1CY02TElY91jeDnPY30Zy&X-Amz-Signature=18e72c9eda6342ed7fa65857a50eb2d94a8b349959479b92d555e2190c0a92d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPRA3THK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIH%2F9BPl8PN3cF4DsmJgNbkkRluoEQe7NtXNiN7N29XugAiB44FMm7wmFwvAgCRorEFLKagwzyU12kORCkRdpegIJPCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMBnL23Y9K0ATi48cSKtwDOBDx8%2FaWX%2Bodg89uvN7juMGZALJffwPDI8EDqvwU46z5r20JOeq9N7y8hQ9GfE0s0pT5cYdoECHH8ce0WNJ%2BMiNOZqO3GD62JF0bNlwvDT6JY3CltjsUo5Uj%2F1o2YXowjqHHns9r%2B7YUqdvOq7k%2BR%2FkvWp3ppGuKF9P0517uHmFJRZSUrniipxZJoTjrt86yotP3zmv6UP6TYvn5F0%2FczBr0bLLrBcpeO4D11vh3MptIIptmOfPzDcjU6Oyy%2B33bOBjRFb4c7rGBG0Y00m4yKnNo4PhAQvqNBbva34yuGSbnEWVGJsp0lHRlNvpg03GDXDhhNWkKJau7ltKqzmFhpNvpeX8AV0LKvI%2BUXgWgwxzW9cHNK358vTjWUpjDoiuF%2FMp5LSMBKhot4oC6QKnd3w337BZlU9DmNJMKRib3I94RSQCeLgScQHA673j%2Bs05bRKqFa45zO65AMSqKhLZCIyuMDdX%2BCfVst%2BFEZK%2B1GUY5D8Sg%2FuW6secujtFettxdci8dl4UWjrc4KCkzQNk4V3Y1IVi1L3xas8wuOwyeHvff7KTv44O%2F21a7Mw1ax0xOvx28hDTekh5Md9IIfrRVtv096reQMoCg3O9j2%2B%2BrGPsn68j%2BTeglbrjr5uAwqvjCyQY6pgGBgBQBkSZeqN0psit8neGZa0H2OhYxckIy3HH6uVtmEQt7FTuQEIVcnQi0Mr3MD240A34ov3xln742VAqY3s81gBGoajS5npHJHAiBMthKHhilJetlpEVdrF6WbPds6EfMSR1EaarHPukBIBoCM%2FvDJmf%2F5hZ6WNvK2wzbKkvW2lSXaNq%2F6Fnk78hGy5eFglJ6w038rqr1CY02TElY91jeDnPY30Zy&X-Amz-Signature=3dedcfaf06daccec42a505ac19fb009ed708657d17d7e00928308786651ff088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

