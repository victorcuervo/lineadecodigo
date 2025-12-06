---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC44SQWP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZLY8eTgzsYs766mBMLCq%2FGVYCO%2FjfxURkKBfsC50MEAiEAvz1TuAtHviQdFDQZ85lKTt3IP6jzTaOkeRwFWRyCJLsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDA6xR%2FyyPPJ9exVtyrcA8Q3BVjZa9MHda63kU0zWyP6lKn98ARZcUyx1sbBnXgsEI12Rg1bwbupP45Og0SoPrjE3WPG6hQ7mI1BTrWCoA%2Fr2mZIh5uPF%2FU004mJcAYzsedqAK2HNBcIQMv%2F9BMYUlBtdshECzOFcrSt5IbZ238HwvOQEU2sVzqPcXJ0uKbjCJUgN15XyVj8T%2BiEnzn7qFhpDFw0Hd%2FCPYA3YkDAoAB41WAtBPSDonW2e8npfwgPZ64uIP9O9XgMtgArRGjnl9WCLR%2BrW%2BAvn0b0SlHQ8qcQx8dRzwAk7NUAFGRf3qlR1coUjzqcVxBfPqrwbf%2F9TTBSaFglqvJjfsxiCW6E%2FPLRnk2O1nW3iX5wPnYdEeQbBSbmJzLBo1eGBjHn0nrpolwtlOiHkwQv5XGjk3VESoiWIWQ5dhruC8uUrBIkI%2B%2FukS3LdWQcsn04YgyH9Fmb2s5pu1ThsWz50P3RpV%2FExgzR8qzRUGNsQC6U9Ifeg4yM0rVNUxWGczmMGRbPtz%2B841l%2BlBtZX5jGmg%2F3aAcAPwo889KF5jj7S5XyBImBmvzODdJqeX3pMW%2BcPnXouMKlyLU7L%2BuHnO4ZBY0nvwzbWACqI%2BN9WQjddlz6OE6aFbs%2BgDDPD1GjQkcb6CxoMIHG0ckGOqUBVTzJxKL7OXUSYHzM5enzX4nUNWGMoHRJNymoIS%2F5%2FrC6MfFkyx7bi0E0336ljGmNLwzUdAZhYKzhp04hZkD3GW%2BWzHLeFF3wCsNed50YeTbqcwV5IBWpzqHdQg142Kymqk6QmMZkULOXoolbKIRAlrqlcU2BEuEO2fgJpmzgpoU2FFc%2BHeEMhFvtMdcnT1SCQV3MPwxnJ8qfKUCbya1KGKettlMr&X-Amz-Signature=d866a37dbd11df54ddee49ad423f0eabb62236b08bce846502cafdbd1f259251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC44SQWP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZLY8eTgzsYs766mBMLCq%2FGVYCO%2FjfxURkKBfsC50MEAiEAvz1TuAtHviQdFDQZ85lKTt3IP6jzTaOkeRwFWRyCJLsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDA6xR%2FyyPPJ9exVtyrcA8Q3BVjZa9MHda63kU0zWyP6lKn98ARZcUyx1sbBnXgsEI12Rg1bwbupP45Og0SoPrjE3WPG6hQ7mI1BTrWCoA%2Fr2mZIh5uPF%2FU004mJcAYzsedqAK2HNBcIQMv%2F9BMYUlBtdshECzOFcrSt5IbZ238HwvOQEU2sVzqPcXJ0uKbjCJUgN15XyVj8T%2BiEnzn7qFhpDFw0Hd%2FCPYA3YkDAoAB41WAtBPSDonW2e8npfwgPZ64uIP9O9XgMtgArRGjnl9WCLR%2BrW%2BAvn0b0SlHQ8qcQx8dRzwAk7NUAFGRf3qlR1coUjzqcVxBfPqrwbf%2F9TTBSaFglqvJjfsxiCW6E%2FPLRnk2O1nW3iX5wPnYdEeQbBSbmJzLBo1eGBjHn0nrpolwtlOiHkwQv5XGjk3VESoiWIWQ5dhruC8uUrBIkI%2B%2FukS3LdWQcsn04YgyH9Fmb2s5pu1ThsWz50P3RpV%2FExgzR8qzRUGNsQC6U9Ifeg4yM0rVNUxWGczmMGRbPtz%2B841l%2BlBtZX5jGmg%2F3aAcAPwo889KF5jj7S5XyBImBmvzODdJqeX3pMW%2BcPnXouMKlyLU7L%2BuHnO4ZBY0nvwzbWACqI%2BN9WQjddlz6OE6aFbs%2BgDDPD1GjQkcb6CxoMIHG0ckGOqUBVTzJxKL7OXUSYHzM5enzX4nUNWGMoHRJNymoIS%2F5%2FrC6MfFkyx7bi0E0336ljGmNLwzUdAZhYKzhp04hZkD3GW%2BWzHLeFF3wCsNed50YeTbqcwV5IBWpzqHdQg142Kymqk6QmMZkULOXoolbKIRAlrqlcU2BEuEO2fgJpmzgpoU2FFc%2BHeEMhFvtMdcnT1SCQV3MPwxnJ8qfKUCbya1KGKettlMr&X-Amz-Signature=fef4ede12efb4f99fec0d569d73b3ed628b0f02b4bf9f33670920dc77a39b860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

