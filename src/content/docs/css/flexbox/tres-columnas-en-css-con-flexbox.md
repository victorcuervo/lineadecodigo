---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ4WFASM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYd1xsvbksXAu40Mi7l8R5tprtRwj2VpwuT4jqP3gU5AiAZdilAmmS9%2BeAOQYfhvLER9pYRxP%2FYZ0Fl43MpopMJdiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0%2FKEZhK58VTNaunWKtwDJ%2Bx6%2BKMK0kWFqphN9abFM0S4Yh9RGr31%2FzSDqelbmXZ%2BlwJRABSG8Mm3S4mX662pXKlUO%2BedceYPvHuo%2Fo%2B1fxaQLzw26BtQDy02im2WT8yOHuN0vesFVaS0DsJv53pXIzd9%2BT0USya77V5Bo1dKRwX97g1%2FRvPsF0uFe3TuvHFTn0nQOLUkyhU2QFuAUDmAygYKxN4wvY4SBmG7I8jKq1HS2zW9%2BlQ4sdObWpfvjZ2VSnathEMYRvZW2CpDrW94mgXDQsNr5HZlYpp1gIwdoycqpDI4xyt0spW9BNjahlX0F5Rcs5JeCPacqA0vndZXOA9gUVGtg2IoOGu3yyx4kzg8prIT2jZQtokld6xxWsPUPTBMjDypKcV28KNBuNVm4VeJityBueGB0WbaknoL13N5ZduzFXV6G2Dmmk9UeiDMAsXsgdtadD3%2F2AdG4G9pTySGNwCYTXmc4RRORLNVSK2PuNby29LFrH0X5EbWdTGEj83doSicuITlVj1iSkRdO%2FA6R1esCV8lB0DAQDh%2Bb%2BfY6hjrY8OR0TZnNbnrNB2ZxlcYC86JzZczxqTNhcIMHY5wmYSiBz4vvz1FErD%2Fs2mH8yry19AugeVVOtoOwcSw3F8PZ11OBPT4gkEw1LzWyQY6pgGNtqI%2Fqg0UFpJToMCB5RgtyJQWF0MVUvYQuWs9P7CiJUF%2FsuOr47JQ9GDmXOcHPhEZQ56ivfq63dPxyOALH2oq1mQWyhreQ6xrQ7Tst%2BxZvIASH81qNDO5F3HD7FGX0LlPTKVqhm6%2FUcsoo%2B%2F8kD4qR7ltYWl95fiuEAf7mkhwwU%2Bz2lruVio3A3fwDOZjL8nZNSzM%2ByGthVt1%2FLm39rpwuCY3Tuhj&X-Amz-Signature=e7dfcfa34695f857f630382e08242b7216adff486d37a71e44a79b05cc20e31f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ4WFASM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYd1xsvbksXAu40Mi7l8R5tprtRwj2VpwuT4jqP3gU5AiAZdilAmmS9%2BeAOQYfhvLER9pYRxP%2FYZ0Fl43MpopMJdiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0%2FKEZhK58VTNaunWKtwDJ%2Bx6%2BKMK0kWFqphN9abFM0S4Yh9RGr31%2FzSDqelbmXZ%2BlwJRABSG8Mm3S4mX662pXKlUO%2BedceYPvHuo%2Fo%2B1fxaQLzw26BtQDy02im2WT8yOHuN0vesFVaS0DsJv53pXIzd9%2BT0USya77V5Bo1dKRwX97g1%2FRvPsF0uFe3TuvHFTn0nQOLUkyhU2QFuAUDmAygYKxN4wvY4SBmG7I8jKq1HS2zW9%2BlQ4sdObWpfvjZ2VSnathEMYRvZW2CpDrW94mgXDQsNr5HZlYpp1gIwdoycqpDI4xyt0spW9BNjahlX0F5Rcs5JeCPacqA0vndZXOA9gUVGtg2IoOGu3yyx4kzg8prIT2jZQtokld6xxWsPUPTBMjDypKcV28KNBuNVm4VeJityBueGB0WbaknoL13N5ZduzFXV6G2Dmmk9UeiDMAsXsgdtadD3%2F2AdG4G9pTySGNwCYTXmc4RRORLNVSK2PuNby29LFrH0X5EbWdTGEj83doSicuITlVj1iSkRdO%2FA6R1esCV8lB0DAQDh%2Bb%2BfY6hjrY8OR0TZnNbnrNB2ZxlcYC86JzZczxqTNhcIMHY5wmYSiBz4vvz1FErD%2Fs2mH8yry19AugeVVOtoOwcSw3F8PZ11OBPT4gkEw1LzWyQY6pgGNtqI%2Fqg0UFpJToMCB5RgtyJQWF0MVUvYQuWs9P7CiJUF%2FsuOr47JQ9GDmXOcHPhEZQ56ivfq63dPxyOALH2oq1mQWyhreQ6xrQ7Tst%2BxZvIASH81qNDO5F3HD7FGX0LlPTKVqhm6%2FUcsoo%2B%2F8kD4qR7ltYWl95fiuEAf7mkhwwU%2Bz2lruVio3A3fwDOZjL8nZNSzM%2ByGthVt1%2FLm39rpwuCY3Tuhj&X-Amz-Signature=c1d457389c7b619e5bafc24ecb80904a87d946dc0d6a9ba67af7a260c50fb4b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

