---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTDWC2IP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FeKe3s7b4ZY8vlhIk1Mt4E%2FwMY1%2F0%2BLLi805FpNPpDAiEAj9%2F1bhReaCNPf5TBibS9yBSXHSMwTGuDUYNTEZGDolMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8igfx%2FfXlcVXzgOSrcA%2F3lZ2wxI8QAFon7lhp2IdzYv%2FSdNy1ktxXxNpX57HMOTuCTFjkUD4U19ClsSDB5xxfpcdV8GmelcPLw8PqiQU%2FBJczyoXVqscx6Ic4UAk3Y%2BBIDu3nUAMWpXIrRBIUsK6SsKHs60L6hRv06njfA%2FBUXNGBPbCuiRoB5godQWnmjgCIs4Gkuq2Gcgq0Iv613Mfxf7SLmWnjEVFSMx%2FSsMKkFL8fkGsUJHxedoVrx6HzFEx4WNtSihwp%2FmRhC8HcfUfomhuWZ7gTmvC%2BMvPkWACH59H6V0iGZtYZcv%2FfltAz4IJ78vf2a971HhIENAzoKb08oEiI26n8l3nIuRLM41BMeeEBz7bojtFVy3%2BgDFR5tZmkGoEsFWFowJjcVdzuGwe738GO%2BtBgcoDaldY0OHxWhq9uiw7DQeIUCC%2FL5LyOG13CxuVJq6r24IceIDQy8Be2HPbzqRVWh3f4QYUdI66inuAKJYxgh2W%2Bq2c0dlQQ3agqFiIlliDezRjIq3oED0vH0y3ET2fP%2BocB3u0TmXEB6ZXQgkgh%2FvoS9YnUsENKCPj8tVgRWjYaTCG8CRCBjgjCTsDSgpMIE5E2UhlTO7rWi%2FbpejDobsFWq%2FVGMSiVU4cNKIRNUlLtoabWoMLHA1skGOqUBxgd0bgWX7tu0UzB44IYLGkgS3pwInozlKh8HUzUQ3AQ2A%2Ff4z9QWRj1Mz9azAb0TO088AsH4PEqXwagTV1UtdWA6SDMLs%2BDt598Swew2kdaSpbfs209x0MP%2FPzoIn%2FbJLNIraWHzSC%2FINP478U%2BMV3ZwpcuuSeBz9uWTKeZkPMlALinfGun6wL3IHoA9mXAlKQUphmpWEkBhHJkHShTkOx2wSnwq&X-Amz-Signature=ba110d968e763b7c359e5f4b03b33439a954f22969b390c295a011dfae04551d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTDWC2IP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T181037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FeKe3s7b4ZY8vlhIk1Mt4E%2FwMY1%2F0%2BLLi805FpNPpDAiEAj9%2F1bhReaCNPf5TBibS9yBSXHSMwTGuDUYNTEZGDolMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8igfx%2FfXlcVXzgOSrcA%2F3lZ2wxI8QAFon7lhp2IdzYv%2FSdNy1ktxXxNpX57HMOTuCTFjkUD4U19ClsSDB5xxfpcdV8GmelcPLw8PqiQU%2FBJczyoXVqscx6Ic4UAk3Y%2BBIDu3nUAMWpXIrRBIUsK6SsKHs60L6hRv06njfA%2FBUXNGBPbCuiRoB5godQWnmjgCIs4Gkuq2Gcgq0Iv613Mfxf7SLmWnjEVFSMx%2FSsMKkFL8fkGsUJHxedoVrx6HzFEx4WNtSihwp%2FmRhC8HcfUfomhuWZ7gTmvC%2BMvPkWACH59H6V0iGZtYZcv%2FfltAz4IJ78vf2a971HhIENAzoKb08oEiI26n8l3nIuRLM41BMeeEBz7bojtFVy3%2BgDFR5tZmkGoEsFWFowJjcVdzuGwe738GO%2BtBgcoDaldY0OHxWhq9uiw7DQeIUCC%2FL5LyOG13CxuVJq6r24IceIDQy8Be2HPbzqRVWh3f4QYUdI66inuAKJYxgh2W%2Bq2c0dlQQ3agqFiIlliDezRjIq3oED0vH0y3ET2fP%2BocB3u0TmXEB6ZXQgkgh%2FvoS9YnUsENKCPj8tVgRWjYaTCG8CRCBjgjCTsDSgpMIE5E2UhlTO7rWi%2FbpejDobsFWq%2FVGMSiVU4cNKIRNUlLtoabWoMLHA1skGOqUBxgd0bgWX7tu0UzB44IYLGkgS3pwInozlKh8HUzUQ3AQ2A%2Ff4z9QWRj1Mz9azAb0TO088AsH4PEqXwagTV1UtdWA6SDMLs%2BDt598Swew2kdaSpbfs209x0MP%2FPzoIn%2FbJLNIraWHzSC%2FINP478U%2BMV3ZwpcuuSeBz9uWTKeZkPMlALinfGun6wL3IHoA9mXAlKQUphmpWEkBhHJkHShTkOx2wSnwq&X-Amz-Signature=a46f5b1f90dab2e04c1249a4760f50b4c2d812d6c1714855a231c396510b8020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

