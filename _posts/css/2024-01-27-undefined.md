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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFG2TY54%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T041256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIESVX6tGR13ofwXoQ5S0ZOdyp2lBB7KgmlEYcHltv6zSAiEA7HWHvKlziPFvkT89D0%2BCF9fa8QqDD6%2FULO5aEguxnDQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOwIm1cMTUntW0QIoCrcA1Ifni5tMPGIKkcLhTcBXol4ZdIwkSJ3LCJRDBj2j2nmq6eB%2BczYtadwizOvjN0HT6b9h%2FPJ5MGqtBy4aT6Z5YeVeQB9xlbma5lznwPT2pws4H1WAM6sbWpCq%2Fu%2BD8lSiBk0Y5fEjjgBn7pdanDGD6WQsviZ2l%2B05t0tCS2YWmlOpYGLmQqTQqeu5AoFipdg%2F0kI%2B5eHjU9AGsniOAJ7XtiiAnA3rGpN0k%2F3ry4hK2l6%2B8vSBFAXfPJw4obh3Zbm56yMkZVt2JT%2B6oWrsoibIfDo%2Bmk2iKvaqt7XvM3QrlKhlwLuDWxaH2GazFNOk8S7badNoB56ywtR8%2FZtFAGgtBg9T1uJOaId98RgibOtW3VlYXVk3%2B8yCnd8bDePXIpruBfDaoQS9becLvg8MfRI6d37td%2BX7vfCrS3or0WIDca%2BKoH8zkFVKD1cfSD%2Fr3w46Bhn%2FQ3Av9RzyaMXoH97xsWvHrCfCqzDmj1SQ3oOK2QqsgLvX4DQDO1YsWmcVhbv4rH%2F3cluNIdZlZThlcBfWsJ1Uw3WBxGytbRF3gbd7ehb0CyKlSMHDlVBJ4pHQ3h7UViDHapNxL7GUck1a5WPexxSbpMcifGkcuMspKEUTaN9bog2j10AvfKA6qRbMJGcvskGOqUB%2FwDualvPlD4rVuG%2FzB04t1fEvGxBd4iBY7rzxmTc2sRMfo7hb6REBe5BmkUiDAy5LP9vJ5Y7ArVHtkJb0CrewmBNi28zk7jM8uDkC3sYy4mN%2BGIiRmD9Z%2F7HVRhAWHD6p4yrTp0LU4g5CLLkNRGjLLjgOg%2BkyTq0O1XKruAEeq6xnF6ndhOIMv6fWV2W0UjAYzpom0%2Bdlis1ujD7nDMmFqZo2tUs&X-Amz-Signature=543f81a46f2d853ffa44b515fd297783cc5a095cfe6eb42ff3662f2f97aa2954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFG2TY54%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T041256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIESVX6tGR13ofwXoQ5S0ZOdyp2lBB7KgmlEYcHltv6zSAiEA7HWHvKlziPFvkT89D0%2BCF9fa8QqDD6%2FULO5aEguxnDQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOwIm1cMTUntW0QIoCrcA1Ifni5tMPGIKkcLhTcBXol4ZdIwkSJ3LCJRDBj2j2nmq6eB%2BczYtadwizOvjN0HT6b9h%2FPJ5MGqtBy4aT6Z5YeVeQB9xlbma5lznwPT2pws4H1WAM6sbWpCq%2Fu%2BD8lSiBk0Y5fEjjgBn7pdanDGD6WQsviZ2l%2B05t0tCS2YWmlOpYGLmQqTQqeu5AoFipdg%2F0kI%2B5eHjU9AGsniOAJ7XtiiAnA3rGpN0k%2F3ry4hK2l6%2B8vSBFAXfPJw4obh3Zbm56yMkZVt2JT%2B6oWrsoibIfDo%2Bmk2iKvaqt7XvM3QrlKhlwLuDWxaH2GazFNOk8S7badNoB56ywtR8%2FZtFAGgtBg9T1uJOaId98RgibOtW3VlYXVk3%2B8yCnd8bDePXIpruBfDaoQS9becLvg8MfRI6d37td%2BX7vfCrS3or0WIDca%2BKoH8zkFVKD1cfSD%2Fr3w46Bhn%2FQ3Av9RzyaMXoH97xsWvHrCfCqzDmj1SQ3oOK2QqsgLvX4DQDO1YsWmcVhbv4rH%2F3cluNIdZlZThlcBfWsJ1Uw3WBxGytbRF3gbd7ehb0CyKlSMHDlVBJ4pHQ3h7UViDHapNxL7GUck1a5WPexxSbpMcifGkcuMspKEUTaN9bog2j10AvfKA6qRbMJGcvskGOqUB%2FwDualvPlD4rVuG%2FzB04t1fEvGxBd4iBY7rzxmTc2sRMfo7hb6REBe5BmkUiDAy5LP9vJ5Y7ArVHtkJb0CrewmBNi28zk7jM8uDkC3sYy4mN%2BGIiRmD9Z%2F7HVRhAWHD6p4yrTp0LU4g5CLLkNRGjLLjgOg%2BkyTq0O1XKruAEeq6xnF6ndhOIMv6fWV2W0UjAYzpom0%2Bdlis1ujD7nDMmFqZo2tUs&X-Amz-Signature=211bb4344c6a4f83bffe578b365e2e98b6e770020c64c6e89a6c78d36e0382b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

