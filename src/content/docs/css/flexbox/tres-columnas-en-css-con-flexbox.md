---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX5RKUZV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTqty1aDch05n0VtXXMc8VluGa2%2FGU8SXkDC8r0rCl6AiEAz2Xj8GnGA2aZvuGUhgjL%2Bn57J1Ga9frBcotPc0ZmirUqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhIR%2FJ0fK8YBl9SDircA7ozuhc2h4FtU1uD88eynEVOsQuj3znyabbERRMA%2BY%2FFEbXcG4Ui9onhCG%2Fd2OxnSi6BHs9t%2FG%2BZR1YJNP%2FWZ3lluh9xzl4ArHm6CmcLKihrL8l33uTV6tC5d5e5gnyvawQFl1QWQBd5GR7MVKWUhinPC3WgoKDV7JM1O%2BMbUP3zOr9wz%2B5xH1WOZ2HF4v18e9887cdPABWDAjy0BW6UCWrF%2BlT5Erw4lWOY56yh%2B0DQhcUmJA1oKNIs%2F3jP1fLDwK4ZXgcffZF1W03b3RtQkFAd5suR5KfpGyKTWxPadmhhPGjgUSYFk%2BMrRelIaHoYu4aU9VbEoBHFBXXjGLmRnx%2FeLCFVm9EelOWh%2FaW5D86IEY10rmr8CMMJ8wfWLjJFdy4qkc8WrtLU9jTjz2xC5OsdBeZ5qgC3gkjM68UZzvJBPuqe0ta%2FdUMAxMLJDsFAldnGO5iQj%2BbNuR%2FiAZUK4ESW5YW2DeCsF1dnxm2%2BTi3PbzKqvb0StmSzFyBiu2CFSTMgXrEGpKbhfdvt3lW4lhJu6oWY9EDJJ%2BoPUrevrYm3XYEwC7gz7GiTchxsxQD1%2FWdtvxA2YK9q9SLos88JcH2bPho0A5g7xJwBR0o1WoySaVhl%2BjyyGjdQq6YNMJ6i3ckGOqUBVtrZH9mOW%2BifJ6f1WAdgF13i6grP1f0U9YayvvlWLJpdu9bKFXiHjsYF8UpYd7BcPhVeznI%2FTbkMxD5QmEMRmGpPDgUJXvpw1EH2uhOywCMmiqJT7I%2F6jKeFYFuosDlY3UrZQQAPvVhenEAx74JYZ%2F1IBCA3gbOWNqS7stpJB5qxjCC4o0xQGAzjvAmuF281Dxsm5fVBJmTngQRHuO%2FUw650xYCn&X-Amz-Signature=5970c986b1aa13a242e0a6fa5ef2aa3ec3ca1b12b47732a0e02b9462d5349144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX5RKUZV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTqty1aDch05n0VtXXMc8VluGa2%2FGU8SXkDC8r0rCl6AiEAz2Xj8GnGA2aZvuGUhgjL%2Bn57J1Ga9frBcotPc0ZmirUqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhIR%2FJ0fK8YBl9SDircA7ozuhc2h4FtU1uD88eynEVOsQuj3znyabbERRMA%2BY%2FFEbXcG4Ui9onhCG%2Fd2OxnSi6BHs9t%2FG%2BZR1YJNP%2FWZ3lluh9xzl4ArHm6CmcLKihrL8l33uTV6tC5d5e5gnyvawQFl1QWQBd5GR7MVKWUhinPC3WgoKDV7JM1O%2BMbUP3zOr9wz%2B5xH1WOZ2HF4v18e9887cdPABWDAjy0BW6UCWrF%2BlT5Erw4lWOY56yh%2B0DQhcUmJA1oKNIs%2F3jP1fLDwK4ZXgcffZF1W03b3RtQkFAd5suR5KfpGyKTWxPadmhhPGjgUSYFk%2BMrRelIaHoYu4aU9VbEoBHFBXXjGLmRnx%2FeLCFVm9EelOWh%2FaW5D86IEY10rmr8CMMJ8wfWLjJFdy4qkc8WrtLU9jTjz2xC5OsdBeZ5qgC3gkjM68UZzvJBPuqe0ta%2FdUMAxMLJDsFAldnGO5iQj%2BbNuR%2FiAZUK4ESW5YW2DeCsF1dnxm2%2BTi3PbzKqvb0StmSzFyBiu2CFSTMgXrEGpKbhfdvt3lW4lhJu6oWY9EDJJ%2BoPUrevrYm3XYEwC7gz7GiTchxsxQD1%2FWdtvxA2YK9q9SLos88JcH2bPho0A5g7xJwBR0o1WoySaVhl%2BjyyGjdQq6YNMJ6i3ckGOqUBVtrZH9mOW%2BifJ6f1WAdgF13i6grP1f0U9YayvvlWLJpdu9bKFXiHjsYF8UpYd7BcPhVeznI%2FTbkMxD5QmEMRmGpPDgUJXvpw1EH2uhOywCMmiqJT7I%2F6jKeFYFuosDlY3UrZQQAPvVhenEAx74JYZ%2F1IBCA3gbOWNqS7stpJB5qxjCC4o0xQGAzjvAmuF281Dxsm5fVBJmTngQRHuO%2FUw650xYCn&X-Amz-Signature=8b6581a581627fbb92ff6eb58ff4d87687cf8133c9502d90157a170561d205c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

