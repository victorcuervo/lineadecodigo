---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52ECZJK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICst41XL69tzw3IY%2FdncqqDhIHP%2BJ4h%2FJPKHsMn%2BEUvxAiBldTeTng7P%2FYEd53o0PbKEs974KnLOww87rBLt9R67BSqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Fu6am4yaF0SNaNsKtwDlnxcVshMxWxdyh87NRYVm6o3RdDcqUEuUgiIVdrm2gH4du3F6bkKwuxlT0seXZgwUGSTt0%2BtjFX5fRXQBpTlwu3Z8SQxCuLiPlPyfNSe%2F9XrX9z1he8c85vUmA5Qzx%2FaKUxyWWulYuLe6aM2rQ9bUdeYXxZ%2B%2BrLJKqQt5Ka7oH3irjup4to1xVZx%2FHrEBbxZRBodVMdWJPUZNdsj6BjnsAwVcGoZKPVBEYPVecPYN5Ybp8UyOnFEkk88myLepK%2BguHePjRMK8Dt6KikqsNLz%2FAPyqAdhmiKwNwGMsue3okP0n%2BjNvWV7FbK4LypyvXOVvyhur8YnHOHzqhvnICxdEEF59pYisrqSZtj%2Brz9pBOaKCo46kVCSItFLNmZjpAt7%2BNGyR8MiyYt6R9fr%2BX7IW2XfXm35vHDex6wf28zzZyjXH7kGoDwFottVGMp34HmLVFoK6lhtg%2FngBUAk5lLzsj0IWy8pR5ZBJ9f%2B01yiwnroYGqisHHlNCJsXNu1Dleua4mI0LFUXul2wmTb1a3zkaTDxVIwKn%2BzEpuuVUe8Nm%2Bk4BbkWk2JL%2FDfuaI88%2BCLRlBROkrWGAip%2Fbk2NIBRzpB4AmMPiA0eDN18pcAA1yXB%2FiWUfa5Ni23LY7YwrIXYyQY6pgF%2BFRsx2PfVv25tEGqmYqQkzJDGQJmytrhObtUGwiCrFt45Yl7Id6ZIMkHOb8oxhXbr9hHiichQvT3w0Y9DjKIa6IgFqv5E9nZU6IhlelX90TOA1P1XN79RfBYkNT2AkdzQf0TqCBTotj1iVSx0W3HP%2FedIrRb1g1PnEkQ2JtNj97LZTNVw9i4IJp7BMVej3U01u5CgILjtbgG4N%2FYlgbW5g%2BrfguGE&X-Amz-Signature=7c5617745b3812510403b7492000edc6274258fa08f9c414368b8932474588fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52ECZJK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICst41XL69tzw3IY%2FdncqqDhIHP%2BJ4h%2FJPKHsMn%2BEUvxAiBldTeTng7P%2FYEd53o0PbKEs974KnLOww87rBLt9R67BSqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Fu6am4yaF0SNaNsKtwDlnxcVshMxWxdyh87NRYVm6o3RdDcqUEuUgiIVdrm2gH4du3F6bkKwuxlT0seXZgwUGSTt0%2BtjFX5fRXQBpTlwu3Z8SQxCuLiPlPyfNSe%2F9XrX9z1he8c85vUmA5Qzx%2FaKUxyWWulYuLe6aM2rQ9bUdeYXxZ%2B%2BrLJKqQt5Ka7oH3irjup4to1xVZx%2FHrEBbxZRBodVMdWJPUZNdsj6BjnsAwVcGoZKPVBEYPVecPYN5Ybp8UyOnFEkk88myLepK%2BguHePjRMK8Dt6KikqsNLz%2FAPyqAdhmiKwNwGMsue3okP0n%2BjNvWV7FbK4LypyvXOVvyhur8YnHOHzqhvnICxdEEF59pYisrqSZtj%2Brz9pBOaKCo46kVCSItFLNmZjpAt7%2BNGyR8MiyYt6R9fr%2BX7IW2XfXm35vHDex6wf28zzZyjXH7kGoDwFottVGMp34HmLVFoK6lhtg%2FngBUAk5lLzsj0IWy8pR5ZBJ9f%2B01yiwnroYGqisHHlNCJsXNu1Dleua4mI0LFUXul2wmTb1a3zkaTDxVIwKn%2BzEpuuVUe8Nm%2Bk4BbkWk2JL%2FDfuaI88%2BCLRlBROkrWGAip%2Fbk2NIBRzpB4AmMPiA0eDN18pcAA1yXB%2FiWUfa5Ni23LY7YwrIXYyQY6pgF%2BFRsx2PfVv25tEGqmYqQkzJDGQJmytrhObtUGwiCrFt45Yl7Id6ZIMkHOb8oxhXbr9hHiichQvT3w0Y9DjKIa6IgFqv5E9nZU6IhlelX90TOA1P1XN79RfBYkNT2AkdzQf0TqCBTotj1iVSx0W3HP%2FedIrRb1g1PnEkQ2JtNj97LZTNVw9i4IJp7BMVej3U01u5CgILjtbgG4N%2FYlgbW5g%2BrfguGE&X-Amz-Signature=de84d3d0ca0b4905c5f3d577e2d0711d2d2ddb2751db28779ad1772a7463424c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

