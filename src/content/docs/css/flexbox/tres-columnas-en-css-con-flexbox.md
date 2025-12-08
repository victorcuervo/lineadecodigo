---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TW274G%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T161744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChla9CaxBzxJd2FydwoEUWPLRwFuOzuejySDiIdP1nXAiA%2BeAJhlcUPUXNtMRI5J%2FtCnoxtVKvOb1S0bWNz%2BVpi%2FCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FhwZVvsj1O9%2BSnoRKtwDxUQIanIp1y%2FUh5LvgmelC%2FbSblt3RT3JB1RepKQ5XzZ8RMXnt43Z5qy37%2B7NXggk0tesUbDwFw7v8ERUCBfg2i7qm6G5ijpUD6EtxvsSXJY4g7d8MM1ZSBaN0BbjtLSkhKpbv1xhkc66ZV4m2sAr3zEBEoADEHMJheFmJYWw0OWRpaiqCNdVFaxk1eddYC%2FW3SnHDiRKaQIPMiIQK0d6NX7VKME6qvcguHGdoqZ62lBDqkpPcjaVhAAzIYpN0nJf2A1%2FGFleBPwKrjiQrWG11tbtOtOQHw9LcCqLYxcJIMOv0i32huA2FQir%2B1XwypUXlYBPS5gLe6%2B0USBLc6OjSc8thfBy%2Bj3v3cx%2Fltu3aI04KHAbzKRnNmARLBqNrAdRiJgz30RRAXIDsDI2%2F4nMsfSwbvFJt4es7KG40nC%2FGWrqaBcOR1oYOc8a3OFuOawLLCKsRSRI7D9v5dsVw%2FeKSX2KO4TmFj9TQ1BvZXwt8AzLFiKVYISa2usiui0cLJLd4TblIBu2drQ%2BYiCzcCc7bphblcY0HLx%2BHMzHVeehPxCcqh17TZk4FMuo%2FOA22oQUAJHFhZvTFmrkT7%2Fk4hvDzx%2Bg05pCCuSMR%2FZ%2FwDzQ%2B1RYeEw%2BoEgb8NIQK1Qw0%2BTbyQY6pgEvS8%2BZVnZh39XaH9PvFm82LcHIYEGz3aUMkZCJ7AIVB4sSRd0tLMV8rVbcqHehUODcDM3ZNYPL%2FAIx7nZ8ZAp5iTS2IbXfLtnNkj3z%2BLnx%2Ff3rOzYDSwqjGvBDbhQ1cJFvlos7HfpWM9oCfyQ7YS8zXa5AA7T%2F5NwnfVguFngKfLo0gYU46USv8l0SObj9wzQIha3bNnDXeDGCCnWV1I2vODV49rrs&X-Amz-Signature=aea8e49dca006eb5678009a94b57a7dd341b703847d6a000ebbcdc433a118233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TW274G%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T161744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChla9CaxBzxJd2FydwoEUWPLRwFuOzuejySDiIdP1nXAiA%2BeAJhlcUPUXNtMRI5J%2FtCnoxtVKvOb1S0bWNz%2BVpi%2FCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FhwZVvsj1O9%2BSnoRKtwDxUQIanIp1y%2FUh5LvgmelC%2FbSblt3RT3JB1RepKQ5XzZ8RMXnt43Z5qy37%2B7NXggk0tesUbDwFw7v8ERUCBfg2i7qm6G5ijpUD6EtxvsSXJY4g7d8MM1ZSBaN0BbjtLSkhKpbv1xhkc66ZV4m2sAr3zEBEoADEHMJheFmJYWw0OWRpaiqCNdVFaxk1eddYC%2FW3SnHDiRKaQIPMiIQK0d6NX7VKME6qvcguHGdoqZ62lBDqkpPcjaVhAAzIYpN0nJf2A1%2FGFleBPwKrjiQrWG11tbtOtOQHw9LcCqLYxcJIMOv0i32huA2FQir%2B1XwypUXlYBPS5gLe6%2B0USBLc6OjSc8thfBy%2Bj3v3cx%2Fltu3aI04KHAbzKRnNmARLBqNrAdRiJgz30RRAXIDsDI2%2F4nMsfSwbvFJt4es7KG40nC%2FGWrqaBcOR1oYOc8a3OFuOawLLCKsRSRI7D9v5dsVw%2FeKSX2KO4TmFj9TQ1BvZXwt8AzLFiKVYISa2usiui0cLJLd4TblIBu2drQ%2BYiCzcCc7bphblcY0HLx%2BHMzHVeehPxCcqh17TZk4FMuo%2FOA22oQUAJHFhZvTFmrkT7%2Fk4hvDzx%2Bg05pCCuSMR%2FZ%2FwDzQ%2B1RYeEw%2BoEgb8NIQK1Qw0%2BTbyQY6pgEvS8%2BZVnZh39XaH9PvFm82LcHIYEGz3aUMkZCJ7AIVB4sSRd0tLMV8rVbcqHehUODcDM3ZNYPL%2FAIx7nZ8ZAp5iTS2IbXfLtnNkj3z%2BLnx%2Ff3rOzYDSwqjGvBDbhQ1cJFvlos7HfpWM9oCfyQ7YS8zXa5AA7T%2F5NwnfVguFngKfLo0gYU46USv8l0SObj9wzQIha3bNnDXeDGCCnWV1I2vODV49rrs&X-Amz-Signature=98b8ca8a61c402b1e651173a83dee4424a0b2094c27e39da7c5834e4db27edd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

