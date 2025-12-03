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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZGKLDQ5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCKXx0EEq6B%2BHn0CCz8yyOa8msIBlFMDcqEQrGoeauifgIgLaSNE8iVNSBb5I3T7T6gKycSLjhRTswTF3dcS6m5X5Qq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGznMOewq%2BP2aILNxyrcA6dJUkjdSF6z3xHav%2BbGTo8KNcpUvXs56Cpg7b16x4B84SVZZ9byzFx5STt95RiY9JlSWQ4itbB8X5fobaTA9D14F5sI6dlSzQDR2LGQ5yCsc9jDlTTp8C3CCu6CtkH9ql4Rpa%2FYbf7TCkWl5iHW5oxe1tdnAz4fuX%2BT5R4cMWEpNMBmm%2FLa7os2Zrxupeq2FRmcR4HQImJgsVe2Y7So1g37iAHYm6%2BKtl51ZhSxcMDGhtdFRunGtrWgq%2BUsipBWQjNPFjOWhgzQ%2BkDYdfSvsOfzXBj1UWXYQaDS6lkaPA5grFY7gnqi%2FTjKkiGt%2BiZ9o2rpF5HdXqYnLtUOzTumfRUa7sbyxkkdNCSRYg%2BP78jWvkcMEnZZS7nG%2BAuCHZ5uGz%2FzKEdpGa0tSriKdSq3q2xuI2g7Z8Yh%2FTk5JexdSIzcPZL7a9zkgxSTnlKDkhRKldZu903RaTnIH4powt%2F3LsYnemWqqyskMUlpJMx9jU3o4RhMOxBux0aKmImqzm0EeIjgugntOL1VfusR89TmfbdiK99z2Zzj%2FnQDJLZWhRgepVMe5fd1d17gqTfNEEZ%2FINjahkISEueyDU4WbBv0sUF48BWd8gvgeK6bDLlu51N0qLKVmb8YHBvOcHnyMNn%2BvckGOqUB6%2BA6yBTJDHmDhWmgBplwmXSk72myHgWsmimsaenL6RxEihLK9F%2FaszOUIE0%2FT%2BQoLXIW3GH2cgoESs3xp1wz23eGM1feG%2BnuYSZZn6jYYqySd2gEZ008GTky%2FegGui%2BbZuAPzOUoxYq5IduJ4mgKz8WybD%2FcJOc3IknqUtdRwtPaaZuMfKdsQAuttwuJfb%2FzJI%2BTfyAsGIFBEJ6c%2FtPohpRANpye&X-Amz-Signature=b9e252af58985e2064a5e416830a767e7a1202e30670e1df5c7025307980d2b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZGKLDQ5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCKXx0EEq6B%2BHn0CCz8yyOa8msIBlFMDcqEQrGoeauifgIgLaSNE8iVNSBb5I3T7T6gKycSLjhRTswTF3dcS6m5X5Qq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGznMOewq%2BP2aILNxyrcA6dJUkjdSF6z3xHav%2BbGTo8KNcpUvXs56Cpg7b16x4B84SVZZ9byzFx5STt95RiY9JlSWQ4itbB8X5fobaTA9D14F5sI6dlSzQDR2LGQ5yCsc9jDlTTp8C3CCu6CtkH9ql4Rpa%2FYbf7TCkWl5iHW5oxe1tdnAz4fuX%2BT5R4cMWEpNMBmm%2FLa7os2Zrxupeq2FRmcR4HQImJgsVe2Y7So1g37iAHYm6%2BKtl51ZhSxcMDGhtdFRunGtrWgq%2BUsipBWQjNPFjOWhgzQ%2BkDYdfSvsOfzXBj1UWXYQaDS6lkaPA5grFY7gnqi%2FTjKkiGt%2BiZ9o2rpF5HdXqYnLtUOzTumfRUa7sbyxkkdNCSRYg%2BP78jWvkcMEnZZS7nG%2BAuCHZ5uGz%2FzKEdpGa0tSriKdSq3q2xuI2g7Z8Yh%2FTk5JexdSIzcPZL7a9zkgxSTnlKDkhRKldZu903RaTnIH4powt%2F3LsYnemWqqyskMUlpJMx9jU3o4RhMOxBux0aKmImqzm0EeIjgugntOL1VfusR89TmfbdiK99z2Zzj%2FnQDJLZWhRgepVMe5fd1d17gqTfNEEZ%2FINjahkISEueyDU4WbBv0sUF48BWd8gvgeK6bDLlu51N0qLKVmb8YHBvOcHnyMNn%2BvckGOqUB6%2BA6yBTJDHmDhWmgBplwmXSk72myHgWsmimsaenL6RxEihLK9F%2FaszOUIE0%2FT%2BQoLXIW3GH2cgoESs3xp1wz23eGM1feG%2BnuYSZZn6jYYqySd2gEZ008GTky%2FegGui%2BbZuAPzOUoxYq5IduJ4mgKz8WybD%2FcJOc3IknqUtdRwtPaaZuMfKdsQAuttwuJfb%2FzJI%2BTfyAsGIFBEJ6c%2FtPohpRANpye&X-Amz-Signature=687f120b16872031ff3a32b70e227976540ea9a1b791257b4610baf6536b92e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

