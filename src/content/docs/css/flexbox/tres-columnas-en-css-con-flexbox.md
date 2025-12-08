---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWTG3OCP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8FhmZ9CQT7stcgRPVIY5gXekXf33ZW3aO1YQ3d5OBUwIgXaFDoZPG7F0mlNCeOGxqZqcbgUS3lkPXJmmKuPikop8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBi126EDIcAiOLprsSrcAzJ0YAq1SmFxTlli%2B3S%2BCAMmTdFFmrHA%2F%2F%2BQmQgHzcjDeWu7E%2FiYLoMIkv%2BmtK3LFEAmHiFgkei4Rq%2BqlPmjJ7dbzoidF1iISHZIOiWbbJHm31B0ZVR04HKi4YBLyBQ5kSJY4ZfevqhOr0lbBA4Zcev3UaFGEGO2JIJzjxh8vjg7qQJBMiBPF5DFnMDvV6xxi7JJO0J%2Bns%2BHLi1TkoDdtOZw1VJo0zmkO9Yk8Ox18W3oNIqGpJdM7T97xLzTe1MGgz%2BSR9YOm7rM4gjdqwt1pCVZDidCHxmNyH8IaF9v6QcJOXvgYHo2%2FShNHCYXag78%2B40vns%2B%2BPVb6%2F8Ua2REhwNP8dR7Ejawqtk%2FXh6iUyBSULNEWdFtDWvX0SrLbT4bIC1WIl0uRDDboQtIClILW4XsriEtr5PyrjVetO7KYCAt2IRKfsyWltsdHHIvqWKXEzDH0TmUjtGNIoZkrnf5QAS9VBR5C9IVc%2BUIVvbgqUDfmVDSw7ZUcAxKq5%2FRhUnXtC46lRh8TIY%2BcwrhhvfIpoMspEFZzZZtVit5noIX%2B6QCV55M%2BUlClZZ%2FhbrbzSyb9bjew2Kc6DyU0yUks%2B%2Bq3UAebgGfQalJNqW5jtMb%2FLOA1h28NKLvaCdkGIHbOMNjD28kGOqUBEB8ZQw4vMKZymAnedHyzUhHd1X405lkUwaqZmo6F%2FfbGN%2BROG9PyKDtNtxbkxuG6LzieOUqnjnffUsmtxtnYVqejoYKof2MIQV8Ag5TF0ahAnEc9vqLwvisB3S1huKEQ4rLdc0UvuHuxRrUe%2FqXsOvs4stwQkFCXuLmCmKOn2fE4VaieuGuubCk%2BKvCOeess4glv8xheGk8w1M7rcbdxVb95Ax1r&X-Amz-Signature=f5acf2c6d75bbe8754ebd7806e45b12e36dc7190410743604a965d101b673c3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWTG3OCP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8FhmZ9CQT7stcgRPVIY5gXekXf33ZW3aO1YQ3d5OBUwIgXaFDoZPG7F0mlNCeOGxqZqcbgUS3lkPXJmmKuPikop8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBi126EDIcAiOLprsSrcAzJ0YAq1SmFxTlli%2B3S%2BCAMmTdFFmrHA%2F%2F%2BQmQgHzcjDeWu7E%2FiYLoMIkv%2BmtK3LFEAmHiFgkei4Rq%2BqlPmjJ7dbzoidF1iISHZIOiWbbJHm31B0ZVR04HKi4YBLyBQ5kSJY4ZfevqhOr0lbBA4Zcev3UaFGEGO2JIJzjxh8vjg7qQJBMiBPF5DFnMDvV6xxi7JJO0J%2Bns%2BHLi1TkoDdtOZw1VJo0zmkO9Yk8Ox18W3oNIqGpJdM7T97xLzTe1MGgz%2BSR9YOm7rM4gjdqwt1pCVZDidCHxmNyH8IaF9v6QcJOXvgYHo2%2FShNHCYXag78%2B40vns%2B%2BPVb6%2F8Ua2REhwNP8dR7Ejawqtk%2FXh6iUyBSULNEWdFtDWvX0SrLbT4bIC1WIl0uRDDboQtIClILW4XsriEtr5PyrjVetO7KYCAt2IRKfsyWltsdHHIvqWKXEzDH0TmUjtGNIoZkrnf5QAS9VBR5C9IVc%2BUIVvbgqUDfmVDSw7ZUcAxKq5%2FRhUnXtC46lRh8TIY%2BcwrhhvfIpoMspEFZzZZtVit5noIX%2B6QCV55M%2BUlClZZ%2FhbrbzSyb9bjew2Kc6DyU0yUks%2B%2Bq3UAebgGfQalJNqW5jtMb%2FLOA1h28NKLvaCdkGIHbOMNjD28kGOqUBEB8ZQw4vMKZymAnedHyzUhHd1X405lkUwaqZmo6F%2FfbGN%2BROG9PyKDtNtxbkxuG6LzieOUqnjnffUsmtxtnYVqejoYKof2MIQV8Ag5TF0ahAnEc9vqLwvisB3S1huKEQ4rLdc0UvuHuxRrUe%2FqXsOvs4stwQkFCXuLmCmKOn2fE4VaieuGuubCk%2BKvCOeess4glv8xheGk8w1M7rcbdxVb95Ax1r&X-Amz-Signature=7a1f595ba2f1fac8c2e4993e3e29db976301b2dc77ba1708f9eaefd03dff99d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

