---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FLN43AH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvIsX0CB6H4W%2ByUArS%2F1CutEd55qF63ZyyZ0TW6RfyGgIgKKhy2wWnVbC548eMWQWtdK%2Fmna2mgMbt%2BJuPCGt0rbcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLzL%2FSQgKOanjWcjNSrcA0qgiiAGSpqEoHWZ4dAOfEtnSB3rG6nDzMCZGSNwWgsVFkfZfrVz3ERTzAE5NrCxHtTNKwwAdAnAKOtJyO2lz0c2j4%2BOA1Q7AdQaBxBqtJvbOalu4Q4ApX7Fx9HnNR%2Feuo%2FE3fyoM%2Bohszj0JYuzWoDwL0Mi9779XGMTvPVeP8HJ4d6XkW1OB1U%2FpSCa25XqYwZthonUDD4nmgIDn2RnmjyfZ4gKyl1OhfjdvQi6MVqQ7G4iRZzH8Y5QGai804AkredBRibu5b4WvGned%2BtbQmmHS8mmAQdwkb05EABG9AWP5oq7E4c%2BqvaYfRf%2BqlcTsygKaRN%2B%2FtGcWz0Ou55I2ezJsm4LP6UvlNxTZy1HWqcy2v8WDV9gvBVDrJLQtcyfRJGEe1vXgLnEUCY8rIp8MHAP7ljnfvMvwg3hOx%2Bi47sNjVABjv3rBorcEhi47aX7KVjkO7HaflJb4SD1b8ycMVgDNU%2BQHzoDIUx8tUswnFA%2F3fo5ntrLrBO9CcQgMY2KJehMCJTONdL%2FijGhzBqS2TfiYigcLTxGCjcEVia7YBamdM6q%2Bk6hpiQ1JPY2giwO%2BSNnUUUgIooiRRUhGjPhHkXXzkA2FB5l7NEjaPaS0u42Jq4Yn0FGjUo%2FRiozMOrGyskGOqUBH0k%2BP2nwhqSGsff28MKEb%2BOzqRd2yst354UNwbwy8qbkFTszPEHPIVEbZ6mLCA0fM3mVoeWkEdoJFBZazQzLXHbpKbNSKgxxWlK8zBYzUH2tFwbYrTkblFfA6XMfagbxQAE4GGNZp2UWgtqBE%2FN2%2FrEMGQ%2BgtRuQMWIfSR2nzOeD4C%2FBNaYxh3ySNedQ67EXF93I8oqoYw0XeUqamncZXs%2FJY3Qu&X-Amz-Signature=b0da9cd8d3bdfc4f5e54c5e8943b30afd7083d8ae24968158669c6c96523acbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FLN43AH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvIsX0CB6H4W%2ByUArS%2F1CutEd55qF63ZyyZ0TW6RfyGgIgKKhy2wWnVbC548eMWQWtdK%2Fmna2mgMbt%2BJuPCGt0rbcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLzL%2FSQgKOanjWcjNSrcA0qgiiAGSpqEoHWZ4dAOfEtnSB3rG6nDzMCZGSNwWgsVFkfZfrVz3ERTzAE5NrCxHtTNKwwAdAnAKOtJyO2lz0c2j4%2BOA1Q7AdQaBxBqtJvbOalu4Q4ApX7Fx9HnNR%2Feuo%2FE3fyoM%2Bohszj0JYuzWoDwL0Mi9779XGMTvPVeP8HJ4d6XkW1OB1U%2FpSCa25XqYwZthonUDD4nmgIDn2RnmjyfZ4gKyl1OhfjdvQi6MVqQ7G4iRZzH8Y5QGai804AkredBRibu5b4WvGned%2BtbQmmHS8mmAQdwkb05EABG9AWP5oq7E4c%2BqvaYfRf%2BqlcTsygKaRN%2B%2FtGcWz0Ou55I2ezJsm4LP6UvlNxTZy1HWqcy2v8WDV9gvBVDrJLQtcyfRJGEe1vXgLnEUCY8rIp8MHAP7ljnfvMvwg3hOx%2Bi47sNjVABjv3rBorcEhi47aX7KVjkO7HaflJb4SD1b8ycMVgDNU%2BQHzoDIUx8tUswnFA%2F3fo5ntrLrBO9CcQgMY2KJehMCJTONdL%2FijGhzBqS2TfiYigcLTxGCjcEVia7YBamdM6q%2Bk6hpiQ1JPY2giwO%2BSNnUUUgIooiRRUhGjPhHkXXzkA2FB5l7NEjaPaS0u42Jq4Yn0FGjUo%2FRiozMOrGyskGOqUBH0k%2BP2nwhqSGsff28MKEb%2BOzqRd2yst354UNwbwy8qbkFTszPEHPIVEbZ6mLCA0fM3mVoeWkEdoJFBZazQzLXHbpKbNSKgxxWlK8zBYzUH2tFwbYrTkblFfA6XMfagbxQAE4GGNZp2UWgtqBE%2FN2%2FrEMGQ%2BgtRuQMWIfSR2nzOeD4C%2FBNaYxh3ySNedQ67EXF93I8oqoYw0XeUqamncZXs%2FJY3Qu&X-Amz-Signature=d804b509884d9ce2bf1a4b8aacdfdaa7f7a148d644f0135022fc9943fc85aae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

