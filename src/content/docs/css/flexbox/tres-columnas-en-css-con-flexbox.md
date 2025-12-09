---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZCWHNOC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeNMhgOnsYIeI0uOWSharOGB%2FshJiZWx4wktTKOfgWdgIgSSPA%2FKfR2IOw6Fl273%2B%2FCld8Ind4405U97ba01Dim1QqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2Bu6Ip5XJ5Gc6gmvSrcAzoLbjm9tmoEHI4RcTdub8MfIqamY0tUykLJkoAu6Ijf5HCCtk9C3VaZupKd%2BnOmATXWzT9yYb8fQZCi6RhNVsdq6n4QfbqbAQzCVQFm1rFFt3FqJqR0XTsFQ0BJjN98usWw1IfKoUx0PfuRBCSkgp7TKU3Ccj9HbGQcs5Vczcio84Xfd1aEoaCs6tu7ouypIpHHjReNW8%2FTMZJuIchPo9tMO3CElqvjK6SyCYboMexnVoh1vUgzPIKqEpxn007R3V7%2FMDXIZ5M4xvHpiYA%2B0vyQjY1cbGrbeZnGQP5uLEritA68cUCkXR755oSk4EqkVLpsjTQJ5QfO5cEoxRTKUuGb7pRPjpMVrsvmQA9v1gqQb4F2yAZUm%2F16X3LQthnZjzy4Hbw3HZtIMEHraJ18Q574%2FUu49A9wXYS3vCK5SulPS5HUhwnrEIEiln%2FY4udC51nOkdIv4DqJQF%2FX4B9FWB8eQ9YF55QcNRNhSy5JoImGJxNVSRBE670eiv7IZ1dUTY%2BZ91pcLIWROW%2FH6rtip5pphz8Xz9Zh3N9LtbUMLC5aTnoWnIH5lGiIjC4As1LnZ0M%2FEAd%2Ba4YsM5ErIVx8pg2r5n%2BQV4GGTXAiveu22lW6eSaA%2FU7qJDTPpLcrMNWl38kGOqUB5oCM6%2FWt3EPInf8rxZG%2FKtvyRmLHBQoBeVojRMSdQTMWKFF06nANdHZW020%2FTvX%2BjqNjHQ%2BBckT4Lo9pOgg%2FowFmxfoGJlyU5yI50bbIhWwXLVeeCqP%2Fy1Ey%2F8Tnb6LpGiq0aTqfnZQyYpzzOnJoLpofw6iFvaE34FJGQsL%2F3G7uhlKhbZNobxHnIekCjhFyO6RI1%2Fy7RNfaqbYyF9qnwooXxVzs&X-Amz-Signature=5e10de2d3a689985966d63b5b551dafab387320c9e0e01fc3f8b68127505b8e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZCWHNOC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeNMhgOnsYIeI0uOWSharOGB%2FshJiZWx4wktTKOfgWdgIgSSPA%2FKfR2IOw6Fl273%2B%2FCld8Ind4405U97ba01Dim1QqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2Bu6Ip5XJ5Gc6gmvSrcAzoLbjm9tmoEHI4RcTdub8MfIqamY0tUykLJkoAu6Ijf5HCCtk9C3VaZupKd%2BnOmATXWzT9yYb8fQZCi6RhNVsdq6n4QfbqbAQzCVQFm1rFFt3FqJqR0XTsFQ0BJjN98usWw1IfKoUx0PfuRBCSkgp7TKU3Ccj9HbGQcs5Vczcio84Xfd1aEoaCs6tu7ouypIpHHjReNW8%2FTMZJuIchPo9tMO3CElqvjK6SyCYboMexnVoh1vUgzPIKqEpxn007R3V7%2FMDXIZ5M4xvHpiYA%2B0vyQjY1cbGrbeZnGQP5uLEritA68cUCkXR755oSk4EqkVLpsjTQJ5QfO5cEoxRTKUuGb7pRPjpMVrsvmQA9v1gqQb4F2yAZUm%2F16X3LQthnZjzy4Hbw3HZtIMEHraJ18Q574%2FUu49A9wXYS3vCK5SulPS5HUhwnrEIEiln%2FY4udC51nOkdIv4DqJQF%2FX4B9FWB8eQ9YF55QcNRNhSy5JoImGJxNVSRBE670eiv7IZ1dUTY%2BZ91pcLIWROW%2FH6rtip5pphz8Xz9Zh3N9LtbUMLC5aTnoWnIH5lGiIjC4As1LnZ0M%2FEAd%2Ba4YsM5ErIVx8pg2r5n%2BQV4GGTXAiveu22lW6eSaA%2FU7qJDTPpLcrMNWl38kGOqUB5oCM6%2FWt3EPInf8rxZG%2FKtvyRmLHBQoBeVojRMSdQTMWKFF06nANdHZW020%2FTvX%2BjqNjHQ%2BBckT4Lo9pOgg%2FowFmxfoGJlyU5yI50bbIhWwXLVeeCqP%2Fy1Ey%2F8Tnb6LpGiq0aTqfnZQyYpzzOnJoLpofw6iFvaE34FJGQsL%2F3G7uhlKhbZNobxHnIekCjhFyO6RI1%2Fy7RNfaqbYyF9qnwooXxVzs&X-Amz-Signature=ca0b92a443a9dd1664326f42fc13ce68720f13635fa31906259333cae09c406a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

