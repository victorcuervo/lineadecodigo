---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTGUDWGR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdxaUN7zWpoNIVChEqb9JyMG2CposYi3PjkRvRYoSXGAiEAipGQr5YRkvZPMsGI7oaoshQ8wFwZgt7rop8L%2Bsul5h8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZ%2FB6O9426F9dUD8yrcA%2ByLSgIL%2FwYQZcPNAluRO2gRQwfMVEznSP1h1rBEtINlLMWEQyIFNldIVOxgcLFR%2B%2BHeBF1rUplXYSS%2FVeUhuEhOg%2B6IjOgIlJlJ5JrLdrYR2cqlp1bNf1MmREIHA%2FpLzloVIBtfJ%2FPPV2y15YGgPxOzV4psjdhyd%2BBS6uRn7ilR7PV%2Bfxw0fM3tzkvBvMIx3wPWqwqdUOMFR%2Bgp9UZrblwvyGaWf%2FzjCACaXxo6PcMGUuEtm56%2B6jGQkKueSyb21RJG2SuEiRTni6n5Wpsc1asgYbrIlfnHfUJA3FE%2B96vIbu7dZS76vEX%2BCb5GKrTVN8wxHERSIcs1OjEjC5v610zhIHWGvPF%2BbjccjHLvF1M3CixE%2BhbFmYue44KOvRDmp0ncRn3OEsVLLISKvkYBdSvOrk%2FDmTXDqc0sDy86irRrh8EWIPUiRuxPLKMP99jaGAUamcY%2BWnoq%2BBQ7bF%2BMDgPIb%2FmSwOhFF96lkgLhtVplVagoSS669crlHx9wk4ffhxEhsTlrs4vM%2BzeEYRmw9nu%2BHMZEFkH9Xtqt9Mv%2BA0XQIns8zLF04owAytn3A7G1BD7MaeN5QZlBW0%2F434Uc8xGpQ%2BKHZhwdrwKHrNFqJ1zfYTsXMYSjErRJ2uyXMI6H3MkGOqUBsrDTJu4%2BzyBBnCR7P2TFi8s5t3BbrP8Da1bzzR6NPOOQJWV0wPpAvtJikdx2DBtNofRsj53Ys8GyyFDYAl6lAYYI0B5xBCEgglNZpYDEKPU6JrmDnW44qweVgP4hRRIkJZDd2a%2B%2BLl6C6Ubb9tddoP%2BAun9akAAdk9GmXtsKJENX8R8r3UuAofauPhzEbScZvjVscVcZemvnhrAN0lQw3iN32blV&X-Amz-Signature=7ea519d60342fd04034c399bd55956e4b9d5bf756caa2b8afc67577be12a8575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTGUDWGR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdxaUN7zWpoNIVChEqb9JyMG2CposYi3PjkRvRYoSXGAiEAipGQr5YRkvZPMsGI7oaoshQ8wFwZgt7rop8L%2Bsul5h8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZ%2FB6O9426F9dUD8yrcA%2ByLSgIL%2FwYQZcPNAluRO2gRQwfMVEznSP1h1rBEtINlLMWEQyIFNldIVOxgcLFR%2B%2BHeBF1rUplXYSS%2FVeUhuEhOg%2B6IjOgIlJlJ5JrLdrYR2cqlp1bNf1MmREIHA%2FpLzloVIBtfJ%2FPPV2y15YGgPxOzV4psjdhyd%2BBS6uRn7ilR7PV%2Bfxw0fM3tzkvBvMIx3wPWqwqdUOMFR%2Bgp9UZrblwvyGaWf%2FzjCACaXxo6PcMGUuEtm56%2B6jGQkKueSyb21RJG2SuEiRTni6n5Wpsc1asgYbrIlfnHfUJA3FE%2B96vIbu7dZS76vEX%2BCb5GKrTVN8wxHERSIcs1OjEjC5v610zhIHWGvPF%2BbjccjHLvF1M3CixE%2BhbFmYue44KOvRDmp0ncRn3OEsVLLISKvkYBdSvOrk%2FDmTXDqc0sDy86irRrh8EWIPUiRuxPLKMP99jaGAUamcY%2BWnoq%2BBQ7bF%2BMDgPIb%2FmSwOhFF96lkgLhtVplVagoSS669crlHx9wk4ffhxEhsTlrs4vM%2BzeEYRmw9nu%2BHMZEFkH9Xtqt9Mv%2BA0XQIns8zLF04owAytn3A7G1BD7MaeN5QZlBW0%2F434Uc8xGpQ%2BKHZhwdrwKHrNFqJ1zfYTsXMYSjErRJ2uyXMI6H3MkGOqUBsrDTJu4%2BzyBBnCR7P2TFi8s5t3BbrP8Da1bzzR6NPOOQJWV0wPpAvtJikdx2DBtNofRsj53Ys8GyyFDYAl6lAYYI0B5xBCEgglNZpYDEKPU6JrmDnW44qweVgP4hRRIkJZDd2a%2B%2BLl6C6Ubb9tddoP%2BAun9akAAdk9GmXtsKJENX8R8r3UuAofauPhzEbScZvjVscVcZemvnhrAN0lQw3iN32blV&X-Amz-Signature=5dc561147ea59a9fad7450ae18f28a01d2ec2ec779cfe85e59e025f05248c356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

