---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U52N6YNV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T211018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYsQuk6uDNIId0INJDFItnzH%2F%2BRmqZnDr%2B51fV%2FmuucgIgG0N%2FRfAlROc7e9RiWw3z0K1cBpyWjGB4bxAd8%2FBEuk8qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2F05gpoJgv40hxsJCrcA%2BPik%2FPpqc86EGtGBlZmGEyrmgIIxmYNCaid%2BdSxVqJESjiP%2BeUj3TvRN7SFK01BHeLn5jfzTmQNAvLof51rr2Hyxn7NRkYKGmpI2pBEKJYe0UELmn%2F%2FXYBkW%2F%2FcsM57%2FJkBaxOHtdzx%2B%2BWEl5dVLb36BG1Gbww%2FOwNnO%2BIejvgTE7s%2FaM%2BHloS5ZrBKBNIhzhVG41C8gwI2zk9yQlh2TvEAqE55GYcaui6YNHKR28jFO84d7Z8gsWnWjyqumiVBocjgtlC18avPc740acpv4N3CdFnl5yEjWoYMqGbI1Ts6e9z0Y8Yfa%2BBuBUKrH5iff8l26JsSFCJ7pT1A0jCFYaSQYa6GyrzM4fFd1QyQ9VHqJD5bezLp4D1%2BVgzH%2FoGMpCtddtSntG4XEDObEYFT9ZAtYfNsbHZnQGDCGoUHGWU9Z0mouAwcQThUJ4zkgu%2Fis4ZLPLdeKjT6ABcsO0gd%2B%2FQoR9n86wViUniYvpX3pfWk1r29AH9HfdRk%2FeYAYPWgxSG4YPsQCXMCNNJPhsidQOReWUwJ1DpHGbu6s8GokFbS%2B1cke%2F66Yedz55z5BVinXlrzoaHX84KtrDOasH1gxcHpPZvYXHG6F86fcoeHRB7bK6qRewoYwxETstLQMObc3MkGOqUBkrPtEKkdCrJZD6S8rhVIEz%2FkB9a5rOvaBsXaHmb9Sj3qPTkzUQZrkWkKLupsvhjaozHKM5xnY9tJInSi4dXQVC1oQXxrOrjXEOiIofOTBDFDPJPZm%2Fy8bdgxHRdXnqyUQIZcb87ULt9G5a8TL2GNI8p8SP92CkLeZ%2Bq6nesjKCGz2FXJEkadkJRxMjRXS%2FA7R6PVNu6HMrtSM4GIxc5m5AtLWTtk&X-Amz-Signature=767fcd9b3a382306b5ffe1178bf8816fa733c3df882540602d7abad5d8dd979f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U52N6YNV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T211018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYsQuk6uDNIId0INJDFItnzH%2F%2BRmqZnDr%2B51fV%2FmuucgIgG0N%2FRfAlROc7e9RiWw3z0K1cBpyWjGB4bxAd8%2FBEuk8qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2F05gpoJgv40hxsJCrcA%2BPik%2FPpqc86EGtGBlZmGEyrmgIIxmYNCaid%2BdSxVqJESjiP%2BeUj3TvRN7SFK01BHeLn5jfzTmQNAvLof51rr2Hyxn7NRkYKGmpI2pBEKJYe0UELmn%2F%2FXYBkW%2F%2FcsM57%2FJkBaxOHtdzx%2B%2BWEl5dVLb36BG1Gbww%2FOwNnO%2BIejvgTE7s%2FaM%2BHloS5ZrBKBNIhzhVG41C8gwI2zk9yQlh2TvEAqE55GYcaui6YNHKR28jFO84d7Z8gsWnWjyqumiVBocjgtlC18avPc740acpv4N3CdFnl5yEjWoYMqGbI1Ts6e9z0Y8Yfa%2BBuBUKrH5iff8l26JsSFCJ7pT1A0jCFYaSQYa6GyrzM4fFd1QyQ9VHqJD5bezLp4D1%2BVgzH%2FoGMpCtddtSntG4XEDObEYFT9ZAtYfNsbHZnQGDCGoUHGWU9Z0mouAwcQThUJ4zkgu%2Fis4ZLPLdeKjT6ABcsO0gd%2B%2FQoR9n86wViUniYvpX3pfWk1r29AH9HfdRk%2FeYAYPWgxSG4YPsQCXMCNNJPhsidQOReWUwJ1DpHGbu6s8GokFbS%2B1cke%2F66Yedz55z5BVinXlrzoaHX84KtrDOasH1gxcHpPZvYXHG6F86fcoeHRB7bK6qRewoYwxETstLQMObc3MkGOqUBkrPtEKkdCrJZD6S8rhVIEz%2FkB9a5rOvaBsXaHmb9Sj3qPTkzUQZrkWkKLupsvhjaozHKM5xnY9tJInSi4dXQVC1oQXxrOrjXEOiIofOTBDFDPJPZm%2Fy8bdgxHRdXnqyUQIZcb87ULt9G5a8TL2GNI8p8SP92CkLeZ%2Bq6nesjKCGz2FXJEkadkJRxMjRXS%2FA7R6PVNu6HMrtSM4GIxc5m5AtLWTtk&X-Amz-Signature=711bbde9cfcaf9e1b90b31129b2299f3418cc56595c0a4591a97eaa3aa4490e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

