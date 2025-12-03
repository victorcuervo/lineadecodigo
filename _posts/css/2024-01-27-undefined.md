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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2VJ7J6V%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGJWU%2F9pbIlLvceIHUpUass1phxGedCT28K2oKOlT70uAiEAxOfoym6yCUnl7JuYpyQv0BVdawG6Tl9QMhpNllKLrXEq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDHvMjHscbJSckVEVlircA6%2F3ppKZWw1N0EgvaIWYmJd3QweIs8BDe6GYMaVSsmUQbQFMOwmDWnq%2Be21I3%2F58tCrOqzH2ncJwj2thEiOlKK72XPdRFGivXAu1xcbTWnG9JyejsRbTpU4XpVpzUZmrCQVr6JDar6tK2sp%2BJmjdSc4KgX18vXmXdOkflwCSEXnVXyQrDKYpp6OYKkjZXFX6hlHwiaY9BHZaaSF3JigRIFEuFb3nN44IPyZk7j6ApOwlYD%2BjnjW9xyrWQjMeP%2BR1MR1U%2FFccZmuoqDAdTuMa7fffNHkIsR%2B32f7KrVGtMuS5dnZGAoa6syTvzMo%2BqHMPyfWYCiulWVRPaPUEG0baOA3eFdKWyuEBAQiPWVYqUABMaVR3aJ1CfyDMOhYYKo1oK3BzYu%2BRWS%2B3hp1UYh0UEy5xyqKf6BFHsJXe%2BxaRFvEHuu%2F3ttTYwmpXpw%2F5P3c%2Fyvp0Z5GVfrgZF0ZE9kB3DzwngfR2rkDPd3%2B%2BAOc7nO4A%2B%2BX0Olr8daD2myD%2BYuCFk60Bq2lPsCyHHwzP%2BUzE%2FMyD1cUJmmAIT2Qfyto%2F4yF%2B8DmMfglAxY0PK21YfsgjhYXdlODxR%2Fie%2F%2FqsSGVbC035IhWqbdsijDFWPQii5HD6RIM4zomIF2mdfeEVMIL%2FvckGOqUBMTgh2mDGXl3xQeJipcWBjOwZY15Jhd4lLYxlV44niot9Od%2FZpoEi0C554Be5KsjSG0nS9nHfoQH0K5uN8ZXbtOksG8SUcLUEuqYMj9yBOSTTcTRk%2BZeVv0USG3xvWBza6m4yex6osbSX%2B9q7pToH1m2l2iWw03ky%2FwlZ0Eo7oMvwH8lllF%2BOrab4Fbfi2U9bLBh3L47xVdB4eWN6Acic2k8gRI6E&X-Amz-Signature=e2c23246fffa20b1e0a1e8699ddc97c1ea7af74e1bb07406424b1f164814388a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2VJ7J6V%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGJWU%2F9pbIlLvceIHUpUass1phxGedCT28K2oKOlT70uAiEAxOfoym6yCUnl7JuYpyQv0BVdawG6Tl9QMhpNllKLrXEq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDHvMjHscbJSckVEVlircA6%2F3ppKZWw1N0EgvaIWYmJd3QweIs8BDe6GYMaVSsmUQbQFMOwmDWnq%2Be21I3%2F58tCrOqzH2ncJwj2thEiOlKK72XPdRFGivXAu1xcbTWnG9JyejsRbTpU4XpVpzUZmrCQVr6JDar6tK2sp%2BJmjdSc4KgX18vXmXdOkflwCSEXnVXyQrDKYpp6OYKkjZXFX6hlHwiaY9BHZaaSF3JigRIFEuFb3nN44IPyZk7j6ApOwlYD%2BjnjW9xyrWQjMeP%2BR1MR1U%2FFccZmuoqDAdTuMa7fffNHkIsR%2B32f7KrVGtMuS5dnZGAoa6syTvzMo%2BqHMPyfWYCiulWVRPaPUEG0baOA3eFdKWyuEBAQiPWVYqUABMaVR3aJ1CfyDMOhYYKo1oK3BzYu%2BRWS%2B3hp1UYh0UEy5xyqKf6BFHsJXe%2BxaRFvEHuu%2F3ttTYwmpXpw%2F5P3c%2Fyvp0Z5GVfrgZF0ZE9kB3DzwngfR2rkDPd3%2B%2BAOc7nO4A%2B%2BX0Olr8daD2myD%2BYuCFk60Bq2lPsCyHHwzP%2BUzE%2FMyD1cUJmmAIT2Qfyto%2F4yF%2B8DmMfglAxY0PK21YfsgjhYXdlODxR%2Fie%2F%2FqsSGVbC035IhWqbdsijDFWPQii5HD6RIM4zomIF2mdfeEVMIL%2FvckGOqUBMTgh2mDGXl3xQeJipcWBjOwZY15Jhd4lLYxlV44niot9Od%2FZpoEi0C554Be5KsjSG0nS9nHfoQH0K5uN8ZXbtOksG8SUcLUEuqYMj9yBOSTTcTRk%2BZeVv0USG3xvWBza6m4yex6osbSX%2B9q7pToH1m2l2iWw03ky%2FwlZ0Eo7oMvwH8lllF%2BOrab4Fbfi2U9bLBh3L47xVdB4eWN6Acic2k8gRI6E&X-Amz-Signature=ed98a70383c6b181d510d547d22d1234c2b63dbf3e667cae79b091af6db57517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

