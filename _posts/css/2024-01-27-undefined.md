---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCN3EVM2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T070611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDd183swUZ7N384ZaPEunHyJ3VqmnhDAo5Jqgsp52Z2GAIgMaBSU%2BNOvpy1z3gMRi04z1%2Fjc86bkxa5KC9m3Q5Vn5Qq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIG51ytywaJIrkB7XCrcAxK7AB3XCDS26ew0I2hYXPupNddblWzp1%2F5jdLyb6wPnJ3mhv%2BURxs8%2B%2FHNMN93VtclqgrKq7fbAYaTePnI7fur9G15a2tGyjd%2FiHKWHE4jXultrCCbbdg2kaoE%2B30Kv48B11evzbuWIUcnfvcE2eB5tZqu0w2q5y%2B5UGMnEAiUl6nahLIjXRXEGNidLDl4U2FaRjqkd1ZcqN1Gx4imzWRJUC9zxG5iidXh%2Bif8tGYGbUxeD4EstavhRxVBzHSIBUGb9cIPGHu%2FMspW%2BhENZHE1ck7etri9%2Bw6ZDCgKllTdCrPsea9YDrIrkLHS0dLKa9kIuhnYyvcQKl%2FjAB4OYaJLjhWuyDJyTQwUiuNbn4iqTrVIXEt%2FZvgbMhk3E0mh3dCRhXE2xtpQcsrLvYpZAA1bPcaUwdA8G%2F3%2FzETR078GkJLPDr%2Bb%2BoCGRTa%2F%2FM38eVNWVbUSEziXvAGmIBnHS5eUnCVj7UFPqX%2B2I2e229%2BuI00Rz7SxOqOvcduIj8eATRWklzg5Oev1ensPuU5c6dw4b417bZWDePqWGuQavRxKAY2U3du8b2DVTsg%2FSfTsI6ny9n3PyFt83B2R76yZU%2BfnoBwmq7MLoF2ocegbLGSMVYje56uysOCkU3yX9MIa5v8kGOqUBcWLJ22iTQ61kAcIzJQzsp1NzyPvUUai1LBDy7DMlKr02gAxkkI7EyeMjhyVMW6fTyyDzh%2B9I4uKphq%2FIkzAbXAVlCG%2BFrbC9r83TFfi9YQmsyJgYwAnCOb4sxuZsWYKhdmshsGk254dEj1IFWdo9byl9CoheEytTaUjhhTBmnhhKcDxUiwDUltbCyWneCsYm0KbyH4lJo9mTJMGdz5uXdRkF8g%2F8&X-Amz-Signature=e3e155ada7775167b611ca198133a9e48183d3bb5ae34eefa85af99963b60964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCN3EVM2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T070611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDd183swUZ7N384ZaPEunHyJ3VqmnhDAo5Jqgsp52Z2GAIgMaBSU%2BNOvpy1z3gMRi04z1%2Fjc86bkxa5KC9m3Q5Vn5Qq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIG51ytywaJIrkB7XCrcAxK7AB3XCDS26ew0I2hYXPupNddblWzp1%2F5jdLyb6wPnJ3mhv%2BURxs8%2B%2FHNMN93VtclqgrKq7fbAYaTePnI7fur9G15a2tGyjd%2FiHKWHE4jXultrCCbbdg2kaoE%2B30Kv48B11evzbuWIUcnfvcE2eB5tZqu0w2q5y%2B5UGMnEAiUl6nahLIjXRXEGNidLDl4U2FaRjqkd1ZcqN1Gx4imzWRJUC9zxG5iidXh%2Bif8tGYGbUxeD4EstavhRxVBzHSIBUGb9cIPGHu%2FMspW%2BhENZHE1ck7etri9%2Bw6ZDCgKllTdCrPsea9YDrIrkLHS0dLKa9kIuhnYyvcQKl%2FjAB4OYaJLjhWuyDJyTQwUiuNbn4iqTrVIXEt%2FZvgbMhk3E0mh3dCRhXE2xtpQcsrLvYpZAA1bPcaUwdA8G%2F3%2FzETR078GkJLPDr%2Bb%2BoCGRTa%2F%2FM38eVNWVbUSEziXvAGmIBnHS5eUnCVj7UFPqX%2B2I2e229%2BuI00Rz7SxOqOvcduIj8eATRWklzg5Oev1ensPuU5c6dw4b417bZWDePqWGuQavRxKAY2U3du8b2DVTsg%2FSfTsI6ny9n3PyFt83B2R76yZU%2BfnoBwmq7MLoF2ocegbLGSMVYje56uysOCkU3yX9MIa5v8kGOqUBcWLJ22iTQ61kAcIzJQzsp1NzyPvUUai1LBDy7DMlKr02gAxkkI7EyeMjhyVMW6fTyyDzh%2B9I4uKphq%2FIkzAbXAVlCG%2BFrbC9r83TFfi9YQmsyJgYwAnCOb4sxuZsWYKhdmshsGk254dEj1IFWdo9byl9CoheEytTaUjhhTBmnhhKcDxUiwDUltbCyWneCsYm0KbyH4lJo9mTJMGdz5uXdRkF8g%2F8&X-Amz-Signature=3feb1f3b2d0579a1856b861fd42d79930ef8b613809c7527252a9ce82c653831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

