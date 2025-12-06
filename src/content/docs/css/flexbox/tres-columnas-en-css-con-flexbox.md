---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZVDU2OC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrKqtVj9BIsXDtco%2BQBtOO0oHPrjkfIaI3cPWhoIAReAiEA91GllKqzw2gGrvUXVsTgdQGaAUnOO5ZDaBcWMspC21Eq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJHuT%2Fp5ZFSAnRODOCrcA9nkC%2BInuwqjOYxCaitcjtlLtAwC3j8EJF9ySdB8GFL%2FW312QQZfCKzmwAiq7952c9r30Z4yqG8YKVikiIi92Cu69IC7bhMH34UqMSjuFymH0%2Bv8MhnpjYHHK5bV7enJrpPXiOgRFkBFS2qaN5m33d5hICavoHXa%2B4rqBUPnNqXYdirNWBd%2FQYNP9KcrMzQdu7GYqwZDDyaOhJbjQ4E4hjUsKUs3zH%2B1nVNgEPWXr6rwOXnr%2BAQa8I%2BPNuYihhKFU9b6OVGT8HfQ4iaG%2FIPC%2Fizfkw1O6fa%2FRIy%2Fe4X%2Blo2Xdl0lNch24CTfVvy%2FMur3GTHObxikm8AsIMSld1U2DfEK9tFbWuAm6f8SrULFPfgYFGVtXsvBJktR23JOBp6WTADW7ey2t30xFu5nexBKbXEP39As5doDb4Xk8kr%2FHlRzU8FYzI65Pk1l2ulE5KBNlhpnsb5jwgfnAJ86pinWOilCgHa%2BoLdZgRr0tIebHL%2Fxf6SFdA6o2aA%2BWTwTMdqJImyXtvYwYW%2FuTExG6Z95KseNvHq5Sc3RTQ5mRd%2BSDIu0GWC7P%2BoPYRDFw2ZPLVpqufiZvPI9xmgEpR%2FIFIGSy2e2FHZwUaM8odb9BVsaqof%2BcRz2C9g%2F1r1ey32PMPPK0ckGOqUBctYxcQD%2FlVPtKsifEigZVp6GOMm%2BvfsCFpZz%2BPAV1EVO0sbX6Phva3K7mojp%2B%2BrCVTxWmGjjVtFoJ7p2Uz%2FPFhDXvuXRh643nLP%2FXexxo8nONa9qqtngK%2FHq5T28tETlnr0tJJU%2FDwTFILZWbo7ggQ74r7AM1Pw9drrsuqOcTtaD2WHnQVqFWo52vfCaC1K4vVjiNYq%2FhMdX5oCu4oKKvuyhSHwd&X-Amz-Signature=a295d19ef3986cfec4164e4b56644f9c7ce0792eca294903611278c67f0759fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZVDU2OC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrKqtVj9BIsXDtco%2BQBtOO0oHPrjkfIaI3cPWhoIAReAiEA91GllKqzw2gGrvUXVsTgdQGaAUnOO5ZDaBcWMspC21Eq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJHuT%2Fp5ZFSAnRODOCrcA9nkC%2BInuwqjOYxCaitcjtlLtAwC3j8EJF9ySdB8GFL%2FW312QQZfCKzmwAiq7952c9r30Z4yqG8YKVikiIi92Cu69IC7bhMH34UqMSjuFymH0%2Bv8MhnpjYHHK5bV7enJrpPXiOgRFkBFS2qaN5m33d5hICavoHXa%2B4rqBUPnNqXYdirNWBd%2FQYNP9KcrMzQdu7GYqwZDDyaOhJbjQ4E4hjUsKUs3zH%2B1nVNgEPWXr6rwOXnr%2BAQa8I%2BPNuYihhKFU9b6OVGT8HfQ4iaG%2FIPC%2Fizfkw1O6fa%2FRIy%2Fe4X%2Blo2Xdl0lNch24CTfVvy%2FMur3GTHObxikm8AsIMSld1U2DfEK9tFbWuAm6f8SrULFPfgYFGVtXsvBJktR23JOBp6WTADW7ey2t30xFu5nexBKbXEP39As5doDb4Xk8kr%2FHlRzU8FYzI65Pk1l2ulE5KBNlhpnsb5jwgfnAJ86pinWOilCgHa%2BoLdZgRr0tIebHL%2Fxf6SFdA6o2aA%2BWTwTMdqJImyXtvYwYW%2FuTExG6Z95KseNvHq5Sc3RTQ5mRd%2BSDIu0GWC7P%2BoPYRDFw2ZPLVpqufiZvPI9xmgEpR%2FIFIGSy2e2FHZwUaM8odb9BVsaqof%2BcRz2C9g%2F1r1ey32PMPPK0ckGOqUBctYxcQD%2FlVPtKsifEigZVp6GOMm%2BvfsCFpZz%2BPAV1EVO0sbX6Phva3K7mojp%2B%2BrCVTxWmGjjVtFoJ7p2Uz%2FPFhDXvuXRh643nLP%2FXexxo8nONa9qqtngK%2FHq5T28tETlnr0tJJU%2FDwTFILZWbo7ggQ74r7AM1Pw9drrsuqOcTtaD2WHnQVqFWo52vfCaC1K4vVjiNYq%2FhMdX5oCu4oKKvuyhSHwd&X-Amz-Signature=0943e8e6bc7b7f48c66200d794faf9106fb696dc87ea755ba570f6f6bf82ee2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

