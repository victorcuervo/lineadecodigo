---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7EQUIRR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZAWu%2FpXTSg7p7Ye8TuMIpxxO79Ne3NZgneaDhbh9oEwIhAIHRknr3AUpj%2F1NdF7e%2BuQnWBmsUAp%2BHiG8oNbxfHverKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwph72qOMGL5jFaXngq3ANRKjxr00brDNushm%2FSCGj16mPHeweUXQYtitG0FZvnwtn947vlOUyUYwru5VQAXtJ77tLRfqyfaaEqC8d16alS%2BqyUd2PsXwHwedQADIRnQ2mFcuvl9xVvNNDcEb%2BeyFdja9LJDqsatqqGCIJ3jIZVaZdqTm14RJh9Jlvb%2BW%2BoOcKc5eOy%2F23nQ5G%2FDuvFzMHEUdggHuAbRymM5SuNmPz3umG9J%2BQAgNjWjPItuFWtyLkOY7CODEwRmx3miE3rmPJ2cOQFfnZoDBk5JkGLHIIE%2BBm51OiOqXIkQcnS6vBIOcd8WrjPn7CQdPDed9%2FQ6CpCA4eQFDVL6Wz04XCZ%2BQIozaWKuqrAEw1NTepVwj7rzgavX%2BRjrUC2n1A5j%2FDcgaJo92F7J3NZcE0qyB9cYCMDhLyaFeZNpFGgoMsB5EwNeAthR5qcBF618GMMEqvZ04IwnU5FXvpaHiyqRTVzvJo5LcTEirlvTs5ZEm313Bdi5VmcE7iidmuXw2R1H9taMXuL4FYB0m3Wcry26PLll9Hh2Q3M%2FETAiBFEaZFGfo3pjRvVFKakXcDeFP%2Bs4qV4WDOYa19aV8crmIaFPD9oJ4G96h12wqWdP%2BsCGo1tK1D%2FOuQbHBZX4mdsu2TVaDCI7dnJBjqkAYwr%2B6qkjGe0SpxvH3EugdzUFotjXOHxYB7pHmWyK0BBYeoWYkSK5PLAF8JVw%2BCZWBCGbUYTIBUc45X%2FDtkrs1H%2FLhnC0GWQh6ZaUC2pwUmJhZ1xezoVr1XDZhD7FCX5nlQYoOeoqxC3mea7WoTufK%2BqrEgWTNVN0oJEbCVAxL%2BTSRH%2Fo54v%2BpgXOCrMSDqkBpw7TS5VbgLCENBMNKZuUd%2BhkhI5&X-Amz-Signature=23b7c97b9ead22a893806c2e54111f2b93fe91ec3701da37078e7b5ff996f390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7EQUIRR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZAWu%2FpXTSg7p7Ye8TuMIpxxO79Ne3NZgneaDhbh9oEwIhAIHRknr3AUpj%2F1NdF7e%2BuQnWBmsUAp%2BHiG8oNbxfHverKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwph72qOMGL5jFaXngq3ANRKjxr00brDNushm%2FSCGj16mPHeweUXQYtitG0FZvnwtn947vlOUyUYwru5VQAXtJ77tLRfqyfaaEqC8d16alS%2BqyUd2PsXwHwedQADIRnQ2mFcuvl9xVvNNDcEb%2BeyFdja9LJDqsatqqGCIJ3jIZVaZdqTm14RJh9Jlvb%2BW%2BoOcKc5eOy%2F23nQ5G%2FDuvFzMHEUdggHuAbRymM5SuNmPz3umG9J%2BQAgNjWjPItuFWtyLkOY7CODEwRmx3miE3rmPJ2cOQFfnZoDBk5JkGLHIIE%2BBm51OiOqXIkQcnS6vBIOcd8WrjPn7CQdPDed9%2FQ6CpCA4eQFDVL6Wz04XCZ%2BQIozaWKuqrAEw1NTepVwj7rzgavX%2BRjrUC2n1A5j%2FDcgaJo92F7J3NZcE0qyB9cYCMDhLyaFeZNpFGgoMsB5EwNeAthR5qcBF618GMMEqvZ04IwnU5FXvpaHiyqRTVzvJo5LcTEirlvTs5ZEm313Bdi5VmcE7iidmuXw2R1H9taMXuL4FYB0m3Wcry26PLll9Hh2Q3M%2FETAiBFEaZFGfo3pjRvVFKakXcDeFP%2Bs4qV4WDOYa19aV8crmIaFPD9oJ4G96h12wqWdP%2BsCGo1tK1D%2FOuQbHBZX4mdsu2TVaDCI7dnJBjqkAYwr%2B6qkjGe0SpxvH3EugdzUFotjXOHxYB7pHmWyK0BBYeoWYkSK5PLAF8JVw%2BCZWBCGbUYTIBUc45X%2FDtkrs1H%2FLhnC0GWQh6ZaUC2pwUmJhZ1xezoVr1XDZhD7FCX5nlQYoOeoqxC3mea7WoTufK%2BqrEgWTNVN0oJEbCVAxL%2BTSRH%2Fo54v%2BpgXOCrMSDqkBpw7TS5VbgLCENBMNKZuUd%2BhkhI5&X-Amz-Signature=efa99930a685a496490f7c4f030e04c1e4ceb43789cdaff88beda677b7ec1d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

