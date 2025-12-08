---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKJ3OYG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDCEU8rye5GBaIVCMLUgDwvxS4H%2FPAnvrrAgzvchT6gAIhAOrw6cR%2Fxbe%2B7kWek2EkKAQ7E92O791KfZRImbxaNsytKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRGLybPoaHTfOKZ%2B8q3ANxSPjzcgKIwGRYWqh8aitI5QwJRKtQqPIZl9bBnh1KelcAA0DyfmrYG%2Fiz3fB99bxuGHMki0Dfr1FUuWKehl4b%2BEaNvJc5F%2FK3ELSKtiOcpfNX5U9Qhn99yAdRnlcdLbwmzuoqR4O18zdx4sPF3UstAY%2BbMMpjSY3WfMxBsEzwI0%2FYqMN0CjZgLRJ%2BOTXf3pMvf1yu4pWw4ETI0wkRrSSObb2%2FffOy8lTPGFgpHHwiMI%2Bihye0x%2B6v4%2FN2T00fsdymm3vTpRE57gFOMTI41cK4cCOjuf5TzhJNucbSnWPMynBna%2Bgj7332dF1VLGSh6X%2B%2Bp104ztPNIzVZPU8znN%2BtA4p8LBKfZWVqRcPkSS075xkmV1PIqyHFUyKGgwQB4m9vfg1xl4R8WDc7%2B1fPyxWbiFKfTM1XNON0zbp8EX9fXuKDyHBGeYxS9Iob%2BIlybhnJxTqrLF%2Fer%2BoglyWJBNXVqxwkGyXbA9zhcj2suuRjPDq2fiVzDqYepG%2Fr8o329mSsIliA799g2ycfplMG70zlfTAF0tOTUugZqFKxs3kQJQxEPOkwDHi8Mpgn9Y%2FiApPSVUzPRRMIQF0Wz1bMiCxcPgXkG5uo25USEc2JWqOsGWvrlTiBFHdUD0F1SzC%2FhtzJBjqkAcxduu%2BIqEFfiYqX0693V6JiCBUzoiOE%2BrRCBeduOiORzw2dHRU6DWdrL0XJnjaLu17Bb7pcUAiRPS0mqM8OkE2W97Rx9T9qcyfnJSFo4TSZgGQ9MbedxSU788T0gapRyhD5zE2sTnuZ1CMXD1bK22DiR0aLR2iO2exyO%2BkSXD%2FXdLzASsiI75Iw8ZYkWzyJ%2BUNnidY7iZeK8x0hWkrMGN5N4IMt&X-Amz-Signature=4ffb440eb62976c236b0c85badd1331692a8c49efd68cd60e9dd27e9ea0fe848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MKJ3OYG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDCEU8rye5GBaIVCMLUgDwvxS4H%2FPAnvrrAgzvchT6gAIhAOrw6cR%2Fxbe%2B7kWek2EkKAQ7E92O791KfZRImbxaNsytKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRGLybPoaHTfOKZ%2B8q3ANxSPjzcgKIwGRYWqh8aitI5QwJRKtQqPIZl9bBnh1KelcAA0DyfmrYG%2Fiz3fB99bxuGHMki0Dfr1FUuWKehl4b%2BEaNvJc5F%2FK3ELSKtiOcpfNX5U9Qhn99yAdRnlcdLbwmzuoqR4O18zdx4sPF3UstAY%2BbMMpjSY3WfMxBsEzwI0%2FYqMN0CjZgLRJ%2BOTXf3pMvf1yu4pWw4ETI0wkRrSSObb2%2FffOy8lTPGFgpHHwiMI%2Bihye0x%2B6v4%2FN2T00fsdymm3vTpRE57gFOMTI41cK4cCOjuf5TzhJNucbSnWPMynBna%2Bgj7332dF1VLGSh6X%2B%2Bp104ztPNIzVZPU8znN%2BtA4p8LBKfZWVqRcPkSS075xkmV1PIqyHFUyKGgwQB4m9vfg1xl4R8WDc7%2B1fPyxWbiFKfTM1XNON0zbp8EX9fXuKDyHBGeYxS9Iob%2BIlybhnJxTqrLF%2Fer%2BoglyWJBNXVqxwkGyXbA9zhcj2suuRjPDq2fiVzDqYepG%2Fr8o329mSsIliA799g2ycfplMG70zlfTAF0tOTUugZqFKxs3kQJQxEPOkwDHi8Mpgn9Y%2FiApPSVUzPRRMIQF0Wz1bMiCxcPgXkG5uo25USEc2JWqOsGWvrlTiBFHdUD0F1SzC%2FhtzJBjqkAcxduu%2BIqEFfiYqX0693V6JiCBUzoiOE%2BrRCBeduOiORzw2dHRU6DWdrL0XJnjaLu17Bb7pcUAiRPS0mqM8OkE2W97Rx9T9qcyfnJSFo4TSZgGQ9MbedxSU788T0gapRyhD5zE2sTnuZ1CMXD1bK22DiR0aLR2iO2exyO%2BkSXD%2FXdLzASsiI75Iw8ZYkWzyJ%2BUNnidY7iZeK8x0hWkrMGN5N4IMt&X-Amz-Signature=c08cbe5ea317b5bb885b512ede90a00c3a4c1cd8ac98efc5cac65da0ef30e5d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

