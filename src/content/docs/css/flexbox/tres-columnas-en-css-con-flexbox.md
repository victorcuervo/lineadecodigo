---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WITIOYC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCglAdQwSh3DE9FdmdSGnBTJcSRCGI3ZT90Fxnaxp9qtwIhALO4EtCpwZ1%2F%2B4%2B8MAZ0VKCa879m9A70mSsM5%2BkmAixJKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvJieebd2VBXgnupMq3AP4Un9jgaMgY6TP4I9TOVwH1ifwsJ%2FVdu3Rm2VG1ucQs7MXwyVgwsPisDNQW4w1667Uz%2F9hLrwC%2BaP69BvrN7%2BkVkZbYkrLGZDAvAkr7w83oeU7kFrdXRykQdbzmOqatNwhhpCjMf3icQI8v%2BwgQdNoDzjwol8wOGeFJUnwQivHKzaox4K3dC5FBxHlziCGFwDd0I6MpZzIc4q09TbDJGfI7eP7xXDm5E%2FGajUUHXJ4lM%2FOUVF1etKab5f%2FztB2I0rY4DPv2kKgXorU4DrsyohOuf2f3FMkPfXxxv06q5OA2PgGpHov%2F0A9sxjeXvsE9aaN5pPs%2Bg7ssy1EnaO72eYSAfTmZE%2F%2BlTzqwaEbrq4KzGSj0s4Nzv6DiimZe0jIEk3%2B%2FOKw5qfuTLs8YqSnw82AXl0J3WKSZhdT%2BOVysi0kuBDH4yZr0Aebh4BbxSwbGQJgI6X16syMYNBMVNbqDUlm1i8rdYJsVE8EyQlFEJmEUztnbO3KLIaFsVmtFg4KZQDJbkuI3UD4sUuvKEtv%2FVTVtUK9IeMwBTj3cwGYW3KKpvwQJkniV2PxKft%2BfEcpllUBKx%2FwmtcCmLa6kZjysP7ju8wGjIEdTGqTsbn0OJtrupjXNPI%2Bkjw6SZ%2BFFzDy%2FdLJBjqkAXgR%2BPZowBFRS10SUVD0HBL%2F7%2BS33DNn4VIhXcqVfgXbgBWVsNo8MayRWV9RK61UeGU%2BZQJ7Zos%2BoQW57lOsHyFhEd7MP8HcBHlE5c6Tz9DgMWY1DnMIHP8ebLLWiF1XLH%2Bsz7ViHnlKNqGJe5XKzqrDhG9Fbi%2Bl6OJq3x4BvZPTCaSg7hmK8yrvLmIDhp0VVbh9LDlefYrx9hUS8ABtTupWkXMZ&X-Amz-Signature=f0958a2ca23830efb428c675baa49ab1d4304bd02af37e9104a3b3aa9b00a1a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WITIOYC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCglAdQwSh3DE9FdmdSGnBTJcSRCGI3ZT90Fxnaxp9qtwIhALO4EtCpwZ1%2F%2B4%2B8MAZ0VKCa879m9A70mSsM5%2BkmAixJKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvJieebd2VBXgnupMq3AP4Un9jgaMgY6TP4I9TOVwH1ifwsJ%2FVdu3Rm2VG1ucQs7MXwyVgwsPisDNQW4w1667Uz%2F9hLrwC%2BaP69BvrN7%2BkVkZbYkrLGZDAvAkr7w83oeU7kFrdXRykQdbzmOqatNwhhpCjMf3icQI8v%2BwgQdNoDzjwol8wOGeFJUnwQivHKzaox4K3dC5FBxHlziCGFwDd0I6MpZzIc4q09TbDJGfI7eP7xXDm5E%2FGajUUHXJ4lM%2FOUVF1etKab5f%2FztB2I0rY4DPv2kKgXorU4DrsyohOuf2f3FMkPfXxxv06q5OA2PgGpHov%2F0A9sxjeXvsE9aaN5pPs%2Bg7ssy1EnaO72eYSAfTmZE%2F%2BlTzqwaEbrq4KzGSj0s4Nzv6DiimZe0jIEk3%2B%2FOKw5qfuTLs8YqSnw82AXl0J3WKSZhdT%2BOVysi0kuBDH4yZr0Aebh4BbxSwbGQJgI6X16syMYNBMVNbqDUlm1i8rdYJsVE8EyQlFEJmEUztnbO3KLIaFsVmtFg4KZQDJbkuI3UD4sUuvKEtv%2FVTVtUK9IeMwBTj3cwGYW3KKpvwQJkniV2PxKft%2BfEcpllUBKx%2FwmtcCmLa6kZjysP7ju8wGjIEdTGqTsbn0OJtrupjXNPI%2Bkjw6SZ%2BFFzDy%2FdLJBjqkAXgR%2BPZowBFRS10SUVD0HBL%2F7%2BS33DNn4VIhXcqVfgXbgBWVsNo8MayRWV9RK61UeGU%2BZQJ7Zos%2BoQW57lOsHyFhEd7MP8HcBHlE5c6Tz9DgMWY1DnMIHP8ebLLWiF1XLH%2Bsz7ViHnlKNqGJe5XKzqrDhG9Fbi%2Bl6OJq3x4BvZPTCaSg7hmK8yrvLmIDhp0VVbh9LDlefYrx9hUS8ABtTupWkXMZ&X-Amz-Signature=9ce825caf67cea62c68479fe413026a049b7e09d8b2b50b57c20ff85cd2a8ae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

