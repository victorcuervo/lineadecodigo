---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US6YR3ZX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQC3REhI2jCJ784dgAis2ZAfFTH%2BEk2U80FQMw7DRNSRAgIgH551QXNuR5p6Y%2FB2pwC3Z4TJXoW7h7Z8MEHekGUIjIQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJWLpsP5AU2ODIOaVSrcA3nYfJjE%2FsLDBSNhrL4C2QKkDw6Y1am2iwuzEul86y9b8kqdtwReaqRHRNP4%2F8jUycfLLWBYB%2Fj5AGRsJJGgw4cBatjjjrAPtHyOcQSOjq1JULUzL%2Fdm7NJ8013nTsaoXxV3n3FDOfVaziX8JP2Wchp%2FnDKWnEqL5KLuuFuYlLmFdPsWJT5UeOrh7be4v9qn72J889BKHOcrGJETtR6bc6KXRsoBhTZZReYA8SKnHxLzT85MEyBuiKJcrbm8XH%2F%2BfUotHZFVPYaitQ3%2FrRSN7KYLru7KnHbU8PJkomBeBp9uPHBsZayKvk%2FZ%2F5ZvJcqUY8ui2QlRoT%2FOBoVznNSsISupN62Nc2nNPtdrtjCH9W9tGJgxCJwClzsCL0F%2BgskKvxoiT7FhqJOn1UkvBY0CfWq3tsjgaydsT64Dq1vihRSbV%2Ftn%2FILME81lZ%2FCTCoZNXFlobEPm73aMj53yhuS5UeLrpq6M7%2BzGpB0Wfp3M5T263LAtTOjzm0wuxpRIo7J8%2F6yfP8vZ70R75JHiIjalbb9I1eGYGJypvM5cuIEBrAsHu3tChmLkw7eKd%2Fb9CRumcoQkbIIKXzx3GKDhkHjePmsIIHy72yn5sRfyvsRZUWGdAHoqnUNYj2zCqi3LMLjdwskGOqUBxKr%2Bxu6WuNk5pPHIFfVyQYpqU9PQo77bNGWLKQcLCBRj94urzX3W89Y5blUr0trzIqadjnm1KXUBEXwdbJDm3WLAEeBoFFahussdLnWmvs00aZaKDsMDfHGkmJ%2FACfc2Qt88OjcYItVdMUNs3QRv%2Bt1v4wnni7tVeowtDV6cmFsAUsYuN9PYXfPBJyvx0B8gKRT8ZNJ8diNBxSzzeR1oPDt9cOZ6&X-Amz-Signature=2514babd6f39671e5b08d6df92039cd1aa920a4ff15cdc8be7008ec52add3af7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US6YR3ZX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQC3REhI2jCJ784dgAis2ZAfFTH%2BEk2U80FQMw7DRNSRAgIgH551QXNuR5p6Y%2FB2pwC3Z4TJXoW7h7Z8MEHekGUIjIQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJWLpsP5AU2ODIOaVSrcA3nYfJjE%2FsLDBSNhrL4C2QKkDw6Y1am2iwuzEul86y9b8kqdtwReaqRHRNP4%2F8jUycfLLWBYB%2Fj5AGRsJJGgw4cBatjjjrAPtHyOcQSOjq1JULUzL%2Fdm7NJ8013nTsaoXxV3n3FDOfVaziX8JP2Wchp%2FnDKWnEqL5KLuuFuYlLmFdPsWJT5UeOrh7be4v9qn72J889BKHOcrGJETtR6bc6KXRsoBhTZZReYA8SKnHxLzT85MEyBuiKJcrbm8XH%2F%2BfUotHZFVPYaitQ3%2FrRSN7KYLru7KnHbU8PJkomBeBp9uPHBsZayKvk%2FZ%2F5ZvJcqUY8ui2QlRoT%2FOBoVznNSsISupN62Nc2nNPtdrtjCH9W9tGJgxCJwClzsCL0F%2BgskKvxoiT7FhqJOn1UkvBY0CfWq3tsjgaydsT64Dq1vihRSbV%2Ftn%2FILME81lZ%2FCTCoZNXFlobEPm73aMj53yhuS5UeLrpq6M7%2BzGpB0Wfp3M5T263LAtTOjzm0wuxpRIo7J8%2F6yfP8vZ70R75JHiIjalbb9I1eGYGJypvM5cuIEBrAsHu3tChmLkw7eKd%2Fb9CRumcoQkbIIKXzx3GKDhkHjePmsIIHy72yn5sRfyvsRZUWGdAHoqnUNYj2zCqi3LMLjdwskGOqUBxKr%2Bxu6WuNk5pPHIFfVyQYpqU9PQo77bNGWLKQcLCBRj94urzX3W89Y5blUr0trzIqadjnm1KXUBEXwdbJDm3WLAEeBoFFahussdLnWmvs00aZaKDsMDfHGkmJ%2FACfc2Qt88OjcYItVdMUNs3QRv%2Bt1v4wnni7tVeowtDV6cmFsAUsYuN9PYXfPBJyvx0B8gKRT8ZNJ8diNBxSzzeR1oPDt9cOZ6&X-Amz-Signature=db2c621bd1f2210280d8ac4128990b15657fdce7e9a5d5149b485bff6975d66f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

