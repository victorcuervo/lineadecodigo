---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AUIHCSS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6DQhoNawmO%2B9jzPnjMu2VrUp%2FC%2FN8h0YT9beNbIP7vwIhAMapjL1iWsxZDCcRqrBEIQAJCzRrY02%2FcWWmxDOhgs8JKv8DCHMQABoMNjM3NDIzMTgzODA1IgzsbEi%2Ftt80vGdhK6cq3AOC4NGXzMBy1sOVMFLP2uLEXe5aXhHLoIyOph5iNTqOGCkGUeD5R6AAoshlvnx3LoCdM6Kcz9pJvGnCh2iUDbOUKClqLjZVi3y%2B8TWNtZA2xJjAgwBWCGbnGL0zOz1SCT4GaLn704cbK6WJYw7Cl22vCBPC%2Bs0aWvjNJcfOxPhWMmZS2HeU0SOrh9zVI5N%2FzUEdCVhYH8A0GkM3zM1rfEIzxpKg92pADSE3QloJw7OMS6qdATQViIWBBZ9p3o%2BAQ3998hLlzKxIPFiKKJV1XuoVZKwZ15y5qtPOcMIoC6fnToSANI5EyorDXfTygY4cTzkdC82U9EZ7nlzePieNr%2F7f3zwmPQPzICTtuj%2F4NGmp3MpEAYISybWT06nTjn1lelyouQtCUtp%2B%2BrFKDir%2Fzmdxe3tLltGbV1hT%2FM3C%2FcZEXNWqPd%2BCs44cNlW47ZrsNXpa%2B6Ez9NY1EeM8UZx4cE8fFWfKTFogQVVoBYuriV23dosdyKPtZ3VTv2HRI5Ck1HFEw%2F94aLmLkDgIBOqzykp81cT4%2BQ%2FWpSzIGecq7H8qx1sYy%2B1AsaT4eGSuhMCeBSdfKNl9arspTj1949oQoVmDr7C3xYiRSiZyYuDgIIrK3cGb7wA3MhzoZ6i4tTD168%2FJBjqkARCsBhKIt%2Bzv8kX%2Bek2SWnK2XFYK9mKruYGBeF7zMvNnKP8VO9NfDojmuPhr95aL8eVHONlrC26RL4dGFCaXRhsuE0EtZBRfrl9ECDl5eRt%2BzduVyju3Ia1BrfT2TTRPjvAtyKZ%2FtG4QVBLhwha98ARTRdC7lkRfDrNBdPPZDoUsQO%2F4G82rAKpzruqPFIDSaVEdTGSEQFZT%2BVmQKwZuwmItckCF&X-Amz-Signature=59483d97da8ff6c2a72fc5213a54fbf04d275d6f4002c4a69a8190289075dbb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AUIHCSS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6DQhoNawmO%2B9jzPnjMu2VrUp%2FC%2FN8h0YT9beNbIP7vwIhAMapjL1iWsxZDCcRqrBEIQAJCzRrY02%2FcWWmxDOhgs8JKv8DCHMQABoMNjM3NDIzMTgzODA1IgzsbEi%2Ftt80vGdhK6cq3AOC4NGXzMBy1sOVMFLP2uLEXe5aXhHLoIyOph5iNTqOGCkGUeD5R6AAoshlvnx3LoCdM6Kcz9pJvGnCh2iUDbOUKClqLjZVi3y%2B8TWNtZA2xJjAgwBWCGbnGL0zOz1SCT4GaLn704cbK6WJYw7Cl22vCBPC%2Bs0aWvjNJcfOxPhWMmZS2HeU0SOrh9zVI5N%2FzUEdCVhYH8A0GkM3zM1rfEIzxpKg92pADSE3QloJw7OMS6qdATQViIWBBZ9p3o%2BAQ3998hLlzKxIPFiKKJV1XuoVZKwZ15y5qtPOcMIoC6fnToSANI5EyorDXfTygY4cTzkdC82U9EZ7nlzePieNr%2F7f3zwmPQPzICTtuj%2F4NGmp3MpEAYISybWT06nTjn1lelyouQtCUtp%2B%2BrFKDir%2Fzmdxe3tLltGbV1hT%2FM3C%2FcZEXNWqPd%2BCs44cNlW47ZrsNXpa%2B6Ez9NY1EeM8UZx4cE8fFWfKTFogQVVoBYuriV23dosdyKPtZ3VTv2HRI5Ck1HFEw%2F94aLmLkDgIBOqzykp81cT4%2BQ%2FWpSzIGecq7H8qx1sYy%2B1AsaT4eGSuhMCeBSdfKNl9arspTj1949oQoVmDr7C3xYiRSiZyYuDgIIrK3cGb7wA3MhzoZ6i4tTD168%2FJBjqkARCsBhKIt%2Bzv8kX%2Bek2SWnK2XFYK9mKruYGBeF7zMvNnKP8VO9NfDojmuPhr95aL8eVHONlrC26RL4dGFCaXRhsuE0EtZBRfrl9ECDl5eRt%2BzduVyju3Ia1BrfT2TTRPjvAtyKZ%2FtG4QVBLhwha98ARTRdC7lkRfDrNBdPPZDoUsQO%2F4G82rAKpzruqPFIDSaVEdTGSEQFZT%2BVmQKwZuwmItckCF&X-Amz-Signature=247e6cf8a577530f56d3206ac9e897428b914c31e6a7f85f96cafb59fa1020e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

