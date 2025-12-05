---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF6GTEMC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BQOduNdUvJOrRwVq4dihaSMWJ2WzBr54XUItlIQn8nQIgHJR6xu57M6oYFaRbFC%2Ba8hVTip8%2B6CHdMtk%2BRyvfRGoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCpeGfM6Tsheq77OSircA2dPnvH1D4yN7OziIt%2BjXoHp%2BGYU0rZdxUBF3KxB9b5HStYjwbqJOGf3qJ9FSDk9H2wYHo26wgI1vhKn5Yn%2BYR9pkbgDC92HIjkiOOsmar0Uaa%2BmT8ME1FJyBrAgDp4VnQrhJ4ca6nvDB9MsWRcZWGFDtH31w7XqdcdvktnVZY741hADLluNBymoBs%2BCEZe%2FL79%2B770Cuxg%2BUJXNiAJnwX45N%2Btph6VvmqWB2S%2FDDEaSCnV0yvTq3ANG1%2BwPUre9SCTEKMneRryzQNVOJ9n2fTFaU4fU0A%2BIG24bXqdZcRBozdvnhyo8B4tkM2yp81opm7zpPv%2BB%2BlRK3%2FphDMlSygJtaJF1RXsow8VaJzKCLONR6S0%2Bh4t5IFCgtrzYQklkj4FwU%2FVgWldNbKm5WZKx%2FHy%2FRFoM2EDblgPMWh4uMV2PUHS%2FyAT%2F1r%2FR51T5b2LnVCXXYy8A9kIq0p4z5idFUaLx%2B8vE65YVIAMsUXsrI%2Fk2fEg35RBG27kC1lZsI8I6p4LfDgPR1Lvjo1Y4Cq3VWI3a%2FFRwwnBTUYZIKcEIJC1Y0L8xkiBdHeIA037Sg0Y%2FMmcja5myd%2BhoArFsoeDHeKenpp9piaCJtkW%2FG9gb%2FxZB%2FDCVbshXSzSu8%2B5uMLPOyskGOqUB%2BWajPQiju%2F8v5A3mV%2Fl5IhlalDkCQLzvHr0c1irl6STBzp29hZQbEefF%2Bzrq%2BrOGYccnF94e6EEon%2BYfy5BaR%2FppgXhNztOYdi4fLfMSi8pt0W2J%2Ftn%2F8c7SNldUt0%2FYiHw8z0BxwKxwm9lF6xoqDB0D%2BjgjtMwvQeM6%2Bp1IcaC%2BuLyd%2BWV8O34FFb55jo29mV1CwYAgvpgdauRBw8ng6txj3%2BRN&X-Amz-Signature=c6f60f2076317d0aa1aaf4130562f20b5a9a937333d56a6c709cd6a37e9eecf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF6GTEMC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BQOduNdUvJOrRwVq4dihaSMWJ2WzBr54XUItlIQn8nQIgHJR6xu57M6oYFaRbFC%2Ba8hVTip8%2B6CHdMtk%2BRyvfRGoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCpeGfM6Tsheq77OSircA2dPnvH1D4yN7OziIt%2BjXoHp%2BGYU0rZdxUBF3KxB9b5HStYjwbqJOGf3qJ9FSDk9H2wYHo26wgI1vhKn5Yn%2BYR9pkbgDC92HIjkiOOsmar0Uaa%2BmT8ME1FJyBrAgDp4VnQrhJ4ca6nvDB9MsWRcZWGFDtH31w7XqdcdvktnVZY741hADLluNBymoBs%2BCEZe%2FL79%2B770Cuxg%2BUJXNiAJnwX45N%2Btph6VvmqWB2S%2FDDEaSCnV0yvTq3ANG1%2BwPUre9SCTEKMneRryzQNVOJ9n2fTFaU4fU0A%2BIG24bXqdZcRBozdvnhyo8B4tkM2yp81opm7zpPv%2BB%2BlRK3%2FphDMlSygJtaJF1RXsow8VaJzKCLONR6S0%2Bh4t5IFCgtrzYQklkj4FwU%2FVgWldNbKm5WZKx%2FHy%2FRFoM2EDblgPMWh4uMV2PUHS%2FyAT%2F1r%2FR51T5b2LnVCXXYy8A9kIq0p4z5idFUaLx%2B8vE65YVIAMsUXsrI%2Fk2fEg35RBG27kC1lZsI8I6p4LfDgPR1Lvjo1Y4Cq3VWI3a%2FFRwwnBTUYZIKcEIJC1Y0L8xkiBdHeIA037Sg0Y%2FMmcja5myd%2BhoArFsoeDHeKenpp9piaCJtkW%2FG9gb%2FxZB%2FDCVbshXSzSu8%2B5uMLPOyskGOqUB%2BWajPQiju%2F8v5A3mV%2Fl5IhlalDkCQLzvHr0c1irl6STBzp29hZQbEefF%2Bzrq%2BrOGYccnF94e6EEon%2BYfy5BaR%2FppgXhNztOYdi4fLfMSi8pt0W2J%2Ftn%2F8c7SNldUt0%2FYiHw8z0BxwKxwm9lF6xoqDB0D%2BjgjtMwvQeM6%2Bp1IcaC%2BuLyd%2BWV8O34FFb55jo29mV1CwYAgvpgdauRBw8ng6txj3%2BRN&X-Amz-Signature=383572c9567f2e0ea8ace62184ed63ae8682a39959287dbd8fdffa8e1ee3ede0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

