---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM2SXZRG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDlmTkiD2uA5kzOkSmJgjulwU%2BABvl8cKY9S%2BEAM%2FodPwIgHpP9%2F0%2BkRkrxJqQNxE5liCX%2FxOGTCh%2FKdAcV%2FvkK19Eq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDHqpPwXdZou%2BcS8vFCrcA3VsTTUPyYADtJgxd1QQbzHmAQgoqCHf7jKvrR4e3US2WZZ6WS8xT5OLkZu36yXd%2BC%2FwjgqHaLFcc88cRCpnljSFn%2FWFGOpbZItcI59%2B978JzyFTvXU%2FK5BeX%2B92syrNlU4QwO5cPDkVlQ7n1KaidI5Mip5BDQP1CQaWoKzID1PPs7i279U1y4X726%2BpGcW5nQ%2F9tRzOdZO4iCiVu69etHZJmWYNmfZybAOU65Oc1apuczDx98ZptW7PVmpewQ1jORxTjYRF7n1bEmfK3%2BD1ZVSa0%2FHoQjb4QkwnnGyMWiY5WcnBKEj%2F14Te3BbQeLmXtR3aVADHmDqvMBLMIs6KphJ8QJJe%2BZbaIDEgD1arlTOYN4G313XoPzF3sKyojwX4akOj7oVSrhwn5sXrSjiykjyTwanihweqyWE0ApKWWICpJG%2Fhm%2FggrbN6JcBUDybbp3Phj%2FT3pnXZ68oObRjYdEu0plyPlYwGb2yWt8%2BlTsZoh6oe8pQpnRUnPThXtva4rIgdCSgCCFuRfjLTay%2FcXCSHRgoLfl5nuyGwy4Tb0heA30VCSGquVmaLGJUikJSFNM2tmO0hO%2BECI2aRi0pUMf4B7H8i%2BucKrVlwj6PlFg4wz5JBoj30dMNA2Q7MMK%2B9wskGOqUBFAwsIXqOpw4XlOatOhDfkgrh38tv3BipBMk0lk31UH%2BWoNFqOOq6fxU21Lu606TtEpumCh2tNOhOj8jYHflnf2GFiGD%2FIGBwIGmGXSjb0EDc9AfydgK7iFhOm1Y5LxD97m8eWJh3OkoquscSulVsjKzS0qS49waAO7JTx47OuAE7R6SUPFjCK%2BUSg1hdzBC4uge2P%2Ffzeo5zDq0C6dMM0Xs%2FQGrz&X-Amz-Signature=49a36648fc918db4d31994c9f53856e9a2ad9d55543484d347413137d4b9c099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM2SXZRG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDlmTkiD2uA5kzOkSmJgjulwU%2BABvl8cKY9S%2BEAM%2FodPwIgHpP9%2F0%2BkRkrxJqQNxE5liCX%2FxOGTCh%2FKdAcV%2FvkK19Eq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDHqpPwXdZou%2BcS8vFCrcA3VsTTUPyYADtJgxd1QQbzHmAQgoqCHf7jKvrR4e3US2WZZ6WS8xT5OLkZu36yXd%2BC%2FwjgqHaLFcc88cRCpnljSFn%2FWFGOpbZItcI59%2B978JzyFTvXU%2FK5BeX%2B92syrNlU4QwO5cPDkVlQ7n1KaidI5Mip5BDQP1CQaWoKzID1PPs7i279U1y4X726%2BpGcW5nQ%2F9tRzOdZO4iCiVu69etHZJmWYNmfZybAOU65Oc1apuczDx98ZptW7PVmpewQ1jORxTjYRF7n1bEmfK3%2BD1ZVSa0%2FHoQjb4QkwnnGyMWiY5WcnBKEj%2F14Te3BbQeLmXtR3aVADHmDqvMBLMIs6KphJ8QJJe%2BZbaIDEgD1arlTOYN4G313XoPzF3sKyojwX4akOj7oVSrhwn5sXrSjiykjyTwanihweqyWE0ApKWWICpJG%2Fhm%2FggrbN6JcBUDybbp3Phj%2FT3pnXZ68oObRjYdEu0plyPlYwGb2yWt8%2BlTsZoh6oe8pQpnRUnPThXtva4rIgdCSgCCFuRfjLTay%2FcXCSHRgoLfl5nuyGwy4Tb0heA30VCSGquVmaLGJUikJSFNM2tmO0hO%2BECI2aRi0pUMf4B7H8i%2BucKrVlwj6PlFg4wz5JBoj30dMNA2Q7MMK%2B9wskGOqUBFAwsIXqOpw4XlOatOhDfkgrh38tv3BipBMk0lk31UH%2BWoNFqOOq6fxU21Lu606TtEpumCh2tNOhOj8jYHflnf2GFiGD%2FIGBwIGmGXSjb0EDc9AfydgK7iFhOm1Y5LxD97m8eWJh3OkoquscSulVsjKzS0qS49waAO7JTx47OuAE7R6SUPFjCK%2BUSg1hdzBC4uge2P%2Ffzeo5zDq0C6dMM0Xs%2FQGrz&X-Amz-Signature=43f521027d7e153294593edb686ecfaa2c1cb95de3e6a3c5b986ef1f91569bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

