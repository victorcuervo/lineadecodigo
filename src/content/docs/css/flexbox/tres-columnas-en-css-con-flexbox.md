---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TRRN35V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKepXqZiLXAEhHqS5DWzyqpYBSgEq8abmaQjw%2Byk3CjAiEAm8qwr18eGc2j%2BXcO3zfcpyEyd03cVHZmYp6wCXfzy%2FoqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOioqLqp7j8FNpgTYCrcA5cwBgx1eZ9b5FfdoN7fkjWvie%2FU%2Fif3Y%2FSLC1GXFiUtHsaKUxmKj%2FRMpkWnUrf5VwFNYviVfUpqZXpmZSmYFyoAyUwctC3k9JVwj%2B8izA5IwSp1n2serHUmANYNcmdeMU34y633wuL0ZjeFfysSTPultLsLL3RmAOw15HI2BYna0mg08hW%2FLkCZc3o%2B2lsaRbrwoJrjJntMw0dyKhqY5Q6qisBVh0UDEcX0f7rtsCQcoFw5Hj4x42Q0dEa4x4Xm3cDx5x6XJJ6Ho%2FbPauKYvrndypADslEH1Yeic81P5qyEEfhIJWnTPLcnffHEus0yTulw8tN2bFFBI32fw0AvnYUc%2BSZt%2FajvvIHXNKL1CFKZYjqcMqOhyfeudroS7%2BtrV%2BbW2eX49MkV8t7sZeHYLOd5IcRhfeY%2FUrgeQc5EI%2FNprJYOdQGm4uh3W2AFizOXJ9UsFgal5WkIUh3wvE3nuEGXbEG36SSwEJnpyFpjxENwLLqLIZPphGqeFr5Y1KJMLrcd6gvXknIRaRkamovsr2xt2y%2BLyxcq6JoCsNJmb99txoKnSsKcHs5WyzEbg2spMG498ivKXye156M9Z28c4Hznq9R5PoIKr8K4VSj52YwJbMFTzUFDzzIUxTasMIi%2F1skGOqUBHOXFHJvtDbIuZv0vptPWk0HLwB0azEKEUA%2BJid8RjFoFUlB8XS4hMsLE%2FB%2BGWU14BgQ0pHhS3H8K%2BWJjLR%2FUb5zNXazIEvCT66LkUkHoVy4cOUyMaNICxdpYka9bANzu7wYG2gnc7mv%2BKkJbEiJVRt%2Fk9bMz898GlGSR4lWOdupDlzaj9gAGxKaA1XPSkkw7iSnHACPR3J04szfADzgarLoxqUle&X-Amz-Signature=a574f8c34045c791b81266395864b9b907f00c4cef2309c82c0b6a79b455f9dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TRRN35V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKepXqZiLXAEhHqS5DWzyqpYBSgEq8abmaQjw%2Byk3CjAiEAm8qwr18eGc2j%2BXcO3zfcpyEyd03cVHZmYp6wCXfzy%2FoqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOioqLqp7j8FNpgTYCrcA5cwBgx1eZ9b5FfdoN7fkjWvie%2FU%2Fif3Y%2FSLC1GXFiUtHsaKUxmKj%2FRMpkWnUrf5VwFNYviVfUpqZXpmZSmYFyoAyUwctC3k9JVwj%2B8izA5IwSp1n2serHUmANYNcmdeMU34y633wuL0ZjeFfysSTPultLsLL3RmAOw15HI2BYna0mg08hW%2FLkCZc3o%2B2lsaRbrwoJrjJntMw0dyKhqY5Q6qisBVh0UDEcX0f7rtsCQcoFw5Hj4x42Q0dEa4x4Xm3cDx5x6XJJ6Ho%2FbPauKYvrndypADslEH1Yeic81P5qyEEfhIJWnTPLcnffHEus0yTulw8tN2bFFBI32fw0AvnYUc%2BSZt%2FajvvIHXNKL1CFKZYjqcMqOhyfeudroS7%2BtrV%2BbW2eX49MkV8t7sZeHYLOd5IcRhfeY%2FUrgeQc5EI%2FNprJYOdQGm4uh3W2AFizOXJ9UsFgal5WkIUh3wvE3nuEGXbEG36SSwEJnpyFpjxENwLLqLIZPphGqeFr5Y1KJMLrcd6gvXknIRaRkamovsr2xt2y%2BLyxcq6JoCsNJmb99txoKnSsKcHs5WyzEbg2spMG498ivKXye156M9Z28c4Hznq9R5PoIKr8K4VSj52YwJbMFTzUFDzzIUxTasMIi%2F1skGOqUBHOXFHJvtDbIuZv0vptPWk0HLwB0azEKEUA%2BJid8RjFoFUlB8XS4hMsLE%2FB%2BGWU14BgQ0pHhS3H8K%2BWJjLR%2FUb5zNXazIEvCT66LkUkHoVy4cOUyMaNICxdpYka9bANzu7wYG2gnc7mv%2BKkJbEiJVRt%2Fk9bMz898GlGSR4lWOdupDlzaj9gAGxKaA1XPSkkw7iSnHACPR3J04szfADzgarLoxqUle&X-Amz-Signature=918aa2eff290f4c5b126eeeaae444b1270f40dab11b23021cc70ca2c8b30fd58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

