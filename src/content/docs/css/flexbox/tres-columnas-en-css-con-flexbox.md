---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVAYMKO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPv1m4MpagDG7%2Be5j0%2Fl2KlF3nxCcujb63XpTjdbsh3AiB4NniXe2ATdw5TCFAuH%2FoTbETK1cds9VCjDSxybyf1JSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM80pqgCLxQouu8PS6KtwDR%2BiKwswUK7Tu62dW4XyoySTPkUXM5juOA%2BU%2F3stpWMMY5%2FMaIrrUQvlfvtwtL%2Bvqe2JTd5skEY4V4jxbB4hHgKr%2B2KdhLd42OQHU3bPedCXIyePpUk7HNczq%2BoOuraESE%2BqlYsPGu00AJajyt%2FgxTkZWXU00%2FiORtI6k3mNO9pjfPxDut51xr1jo%2ByKVAvblHMe5d6TJydvZ92sONfpinhTVRiZ%2Ff%2BP3xUDWSwbGF%2BkELvTaY4X1ljmv2WgPIJJcgQ75KPrgxu7byYhGvRZFgVlPm%2BLkiwl%2FZNypBNDWrgcydkVUCgTzNPDGN0dZEYzpIS0%2F8aky5BQG52a9xHglfe6EAAuKflStJZcHJBJQDzpwnkhFDzK%2B2IWvtRDhbmsz4auyyyMUzNl4vwlXniSQLsjFmWj%2B9%2Ff87B%2FCBnjGAPHPV8sz3NObaJJ0M9wInuMmsB3qFjf4e0RvsLnn7uH7Fi%2FRakiOTtXtcpHLy%2BzLtFKa7muCJkIOIL8G529AsYW%2FnxRjBlxb54xSMJPTUuBEwD%2BC%2BzH%2FCp2k50t8EXo7KjnWn8%2FMZqGczGDoVqxLtBafuAMDfG6o6TIaav95wNYpbKc20hCHAb2qXAk6Mg6ybWQ6WaK2xdF2O0aYMHYwl%2FjLyQY6pgGnsqHqlAYC26tztoJ4X2GjfXfZAEU8J8ha2lq195nJL8eMGp5oC4gQAYXsYW2FTGr99DGVVXIXHyX88xq6UM%2F1b7r7clsgCXl21JapCsT6Q634rf59zaen3g8a%2BItLCKinuoEC6TtgXwGE4vCHEFk8MOaflZriVAoe1MFT3jb5wTxTANYNEqh44P2zsTnLYFakA6fYWWIjsnEHELWq4dHj9OA2dnc3&X-Amz-Signature=e5bfd035d85a949bc1505cb312eb021f8bf11fc5bd990ef1f307286b5dfa38b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVAYMKO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPv1m4MpagDG7%2Be5j0%2Fl2KlF3nxCcujb63XpTjdbsh3AiB4NniXe2ATdw5TCFAuH%2FoTbETK1cds9VCjDSxybyf1JSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM80pqgCLxQouu8PS6KtwDR%2BiKwswUK7Tu62dW4XyoySTPkUXM5juOA%2BU%2F3stpWMMY5%2FMaIrrUQvlfvtwtL%2Bvqe2JTd5skEY4V4jxbB4hHgKr%2B2KdhLd42OQHU3bPedCXIyePpUk7HNczq%2BoOuraESE%2BqlYsPGu00AJajyt%2FgxTkZWXU00%2FiORtI6k3mNO9pjfPxDut51xr1jo%2ByKVAvblHMe5d6TJydvZ92sONfpinhTVRiZ%2Ff%2BP3xUDWSwbGF%2BkELvTaY4X1ljmv2WgPIJJcgQ75KPrgxu7byYhGvRZFgVlPm%2BLkiwl%2FZNypBNDWrgcydkVUCgTzNPDGN0dZEYzpIS0%2F8aky5BQG52a9xHglfe6EAAuKflStJZcHJBJQDzpwnkhFDzK%2B2IWvtRDhbmsz4auyyyMUzNl4vwlXniSQLsjFmWj%2B9%2Ff87B%2FCBnjGAPHPV8sz3NObaJJ0M9wInuMmsB3qFjf4e0RvsLnn7uH7Fi%2FRakiOTtXtcpHLy%2BzLtFKa7muCJkIOIL8G529AsYW%2FnxRjBlxb54xSMJPTUuBEwD%2BC%2BzH%2FCp2k50t8EXo7KjnWn8%2FMZqGczGDoVqxLtBafuAMDfG6o6TIaav95wNYpbKc20hCHAb2qXAk6Mg6ybWQ6WaK2xdF2O0aYMHYwl%2FjLyQY6pgGnsqHqlAYC26tztoJ4X2GjfXfZAEU8J8ha2lq195nJL8eMGp5oC4gQAYXsYW2FTGr99DGVVXIXHyX88xq6UM%2F1b7r7clsgCXl21JapCsT6Q634rf59zaen3g8a%2BItLCKinuoEC6TtgXwGE4vCHEFk8MOaflZriVAoe1MFT3jb5wTxTANYNEqh44P2zsTnLYFakA6fYWWIjsnEHELWq4dHj9OA2dnc3&X-Amz-Signature=a2ba289854e32dfcd3aefa60877feb1daf21d75c118d2af0c043939c6d50da27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

