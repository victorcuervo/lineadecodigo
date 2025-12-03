---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDPMGTID%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCQ015%2BeuzEHSYo9rczyBE7ijvHyuobA%2FWvSaI7GEJF%2FgIhAMcU1x8T48Q6W7cHgPAk%2FVMCpwvAqxltLFLGAbXXsrN4Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwnIhsrsD9UvY4wqVYq3AOJqmg2OeLwBsST%2BYE0c95wPzGp27wzNiBg0k1dWaZWiO%2BPbHG3gHrHaCToLWlLpCdRoePTgMI6jwxSRFchovCHmoHkxHdpasIh3K1Gs7mzojgu7S%2F4105a8XaOKQ3Q4DSk1yRRDyJRZR6fdJlwZoB3fH7TDPOMqoA8t4cAAjROre5%2BlzG%2FQzUy7YuyEXuwoyleuJQpMaqilfsGok7FdDrU299FLRRVlFM0mZMFBlJcGQYFrUBlrJqkwztxAmRJr4%2BkcQYPQVhTKjnttPc2P8re9BV9v8XG0wPLuoTKOylW7oW6bqLf7pVvd%2B75XPe4fCFiD%2BSVf%2F0gtX%2FxENWryx9wdsQtZUUpYKjMcsQBoJFwsB1QLBOZ7k%2FDGJBHiG%2Fb9ZJ4VO6AdGdNH5gJK%2B8MFse%2FPA95QLH%2B01UWFVYLT2ggdpL%2BBGqcvbdy0diDbS5F53dN2z4bkFksjBTh3WFv0E64KSBFgLbdpRT1Wdrqo6xrNRMaYukyUXJhTy6gMMjEC3G7zyqpEmuFG6RTKjevbAu9Uy9C9TejeP83TWOizrApeBtZM9%2BjqAMDxRNNkGbwXEvPboiXqrAVLTtgCUzEEaDOmPSOd%2B5%2BNqcVSHmguoo9YlNt3TkmKGkcJqq2KjDZ3MLJBjqkASTup7oc1NSG26twQnwIhW1OB3bXvzHnZKSMcCn%2BAZVxAz5Rym2BRK7Rq3Zlc21yFqowhgrxZlDt1JEW%2FFaCnkpFS%2FCu9seHNHdsuFTsNEFMPzHrJslME6A1Gfbk0K1GxLB50e68VBGWaPHBs2sdrIabqlJbfMyxL3PqHszgEyRuBYf6%2BYKU7fjYNWSjNYYB7q4M4OlAYxh6qVWMzFmNdIFt1XKU&X-Amz-Signature=a352acd9e8dc037527018b2030d9fe4c096020c47ee0ac6b298e19a9831053e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDPMGTID%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCQ015%2BeuzEHSYo9rczyBE7ijvHyuobA%2FWvSaI7GEJF%2FgIhAMcU1x8T48Q6W7cHgPAk%2FVMCpwvAqxltLFLGAbXXsrN4Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwnIhsrsD9UvY4wqVYq3AOJqmg2OeLwBsST%2BYE0c95wPzGp27wzNiBg0k1dWaZWiO%2BPbHG3gHrHaCToLWlLpCdRoePTgMI6jwxSRFchovCHmoHkxHdpasIh3K1Gs7mzojgu7S%2F4105a8XaOKQ3Q4DSk1yRRDyJRZR6fdJlwZoB3fH7TDPOMqoA8t4cAAjROre5%2BlzG%2FQzUy7YuyEXuwoyleuJQpMaqilfsGok7FdDrU299FLRRVlFM0mZMFBlJcGQYFrUBlrJqkwztxAmRJr4%2BkcQYPQVhTKjnttPc2P8re9BV9v8XG0wPLuoTKOylW7oW6bqLf7pVvd%2B75XPe4fCFiD%2BSVf%2F0gtX%2FxENWryx9wdsQtZUUpYKjMcsQBoJFwsB1QLBOZ7k%2FDGJBHiG%2Fb9ZJ4VO6AdGdNH5gJK%2B8MFse%2FPA95QLH%2B01UWFVYLT2ggdpL%2BBGqcvbdy0diDbS5F53dN2z4bkFksjBTh3WFv0E64KSBFgLbdpRT1Wdrqo6xrNRMaYukyUXJhTy6gMMjEC3G7zyqpEmuFG6RTKjevbAu9Uy9C9TejeP83TWOizrApeBtZM9%2BjqAMDxRNNkGbwXEvPboiXqrAVLTtgCUzEEaDOmPSOd%2B5%2BNqcVSHmguoo9YlNt3TkmKGkcJqq2KjDZ3MLJBjqkASTup7oc1NSG26twQnwIhW1OB3bXvzHnZKSMcCn%2BAZVxAz5Rym2BRK7Rq3Zlc21yFqowhgrxZlDt1JEW%2FFaCnkpFS%2FCu9seHNHdsuFTsNEFMPzHrJslME6A1Gfbk0K1GxLB50e68VBGWaPHBs2sdrIabqlJbfMyxL3PqHszgEyRuBYf6%2BYKU7fjYNWSjNYYB7q4M4OlAYxh6qVWMzFmNdIFt1XKU&X-Amz-Signature=0f4fc4b2ab92b06a26dbcfaded345f80772cef4780ae5c656708bbcbd3b032cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

