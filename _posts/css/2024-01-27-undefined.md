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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAPTTKHR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T065453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDEWmE4FEFoKABGPVmRjHnmLIBLpNJd9qg64DbkjWl7wAIgIfdHF1Z8z7Bl8Uu%2BMhBcSImw5geGf7BFwA2u5ZdaNj8q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDD3tH89lw6kebpOywyrcA4ydNlHrtDvGjFZ2sIPLRNsHVI%2FtQjn0j4nDOtCAJHef3II1TnDfwzs421pEi8pFimcAwxMb1yjcHXXiY%2FJadOpuuj%2Bp2rkM11sNmprvHx6LtKQkuNK7GdhvkcgK5sVrBB8Bvwe89%2BH6gst7LjKhRzPBKlz%2F7pD%2FKWWzVToZS3uXIgffpD%2FIPW2RNrjNZULL3E7SWf5r2zNlQvYVb5ZTCfOh4oniWsuqPUtjQBY64yDykUXBO7ealRk%2BtpfoCSk1hawf0vhb8rcvzCu12rG9FSF8oZ5rDSoforzqLsJeQR4c%2F3nIdRo%2Fo%2FOQjp9wKpqnCiQANYt3XLTJZzpcIB6l2uJgM9fHU8SE6vgB27KlECGOzkcPwtDBy9grTxa2akOFPNCRmzDCgPzqpVgcm2bXdMfDPyOcPsnH8KdeMz2%2Fr%2BrG3oc%2Fa4JqxHSVvve73jmRut0%2F%2FJuLS5p6t1dJr2tNgZ09LYBXtPKFRu9mw1UWSagyXRybRXioJntWi2HM5YSnKb37wMFYJB%2FqOaOgaqAsJLR2YrH0Lvt522P%2BL1ydzpuHwppfAs6x3VG1Uur%2FBSclzcLupkNZ%2B0AIBMO3nY5b1EJNvZCwzLRSiGs7%2Ba2YGCCKbZ3niJFv5Md7BrHYMNq5v8kGOqUBRJpCDpDRxfWaWQFdgSXFgV0ltLE2VFQRTnboMmRY7geX8NzGDLSjbbTZOqBqf3XIh7GRxccYQSVd3Y%2FEPRWRb0UY7F3nY1RLxZhwvK5jC157z3qK3F8gNYlBi6m4vN2QFtAixXggSACGHnI63GRA5ZeShl9oPitFnH4DAtMabJ69ViyJKPpBmm8uQoAbrnScAQ6CvE0OkNeJt0G%2BB%2B86ihQD7OdT&X-Amz-Signature=f596cf15e97d7ae6160fe20bd47d86b96ba083fbb36032235783a4a0a08239a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAPTTKHR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T065453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDEWmE4FEFoKABGPVmRjHnmLIBLpNJd9qg64DbkjWl7wAIgIfdHF1Z8z7Bl8Uu%2BMhBcSImw5geGf7BFwA2u5ZdaNj8q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDD3tH89lw6kebpOywyrcA4ydNlHrtDvGjFZ2sIPLRNsHVI%2FtQjn0j4nDOtCAJHef3II1TnDfwzs421pEi8pFimcAwxMb1yjcHXXiY%2FJadOpuuj%2Bp2rkM11sNmprvHx6LtKQkuNK7GdhvkcgK5sVrBB8Bvwe89%2BH6gst7LjKhRzPBKlz%2F7pD%2FKWWzVToZS3uXIgffpD%2FIPW2RNrjNZULL3E7SWf5r2zNlQvYVb5ZTCfOh4oniWsuqPUtjQBY64yDykUXBO7ealRk%2BtpfoCSk1hawf0vhb8rcvzCu12rG9FSF8oZ5rDSoforzqLsJeQR4c%2F3nIdRo%2Fo%2FOQjp9wKpqnCiQANYt3XLTJZzpcIB6l2uJgM9fHU8SE6vgB27KlECGOzkcPwtDBy9grTxa2akOFPNCRmzDCgPzqpVgcm2bXdMfDPyOcPsnH8KdeMz2%2Fr%2BrG3oc%2Fa4JqxHSVvve73jmRut0%2F%2FJuLS5p6t1dJr2tNgZ09LYBXtPKFRu9mw1UWSagyXRybRXioJntWi2HM5YSnKb37wMFYJB%2FqOaOgaqAsJLR2YrH0Lvt522P%2BL1ydzpuHwppfAs6x3VG1Uur%2FBSclzcLupkNZ%2B0AIBMO3nY5b1EJNvZCwzLRSiGs7%2Ba2YGCCKbZ3niJFv5Md7BrHYMNq5v8kGOqUBRJpCDpDRxfWaWQFdgSXFgV0ltLE2VFQRTnboMmRY7geX8NzGDLSjbbTZOqBqf3XIh7GRxccYQSVd3Y%2FEPRWRb0UY7F3nY1RLxZhwvK5jC157z3qK3F8gNYlBi6m4vN2QFtAixXggSACGHnI63GRA5ZeShl9oPitFnH4DAtMabJ69ViyJKPpBmm8uQoAbrnScAQ6CvE0OkNeJt0G%2BB%2B86ihQD7OdT&X-Amz-Signature=ea0229eda826a731d094f030a1c9b2d0f76062f518d4d5d07cf6716465d23e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

