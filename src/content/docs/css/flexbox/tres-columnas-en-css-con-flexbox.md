---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JK64MIH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCADJ3aQNom3lFj3AyriWggWwezj%2FMOYhukCBO5sJIH%2FwIhAKcDrQ4EYJt26AlRi8h9gxtG6AxojUzXQUSNawoYQkruKv8DCE8QABoMNjM3NDIzMTgzODA1IgwRRkCGg2hEoPrH9L8q3AOD20w9gtRr%2B23VyTvvgFqVkVQoaZ6BAnPXmanuUUXGKIrYGJ%2BhJs3MvVmWye%2BRQ0IfuPZdq93ebOmTN43Y6%2FhJQktX5lSiWmoBaYkzVIib8zCDuyhZsb5Rjde%2FejIq6AUM%2FTFzTqcXS1xYLTs%2FeIER69B8rmK6csXUutX1cF2%2BQdmA%2B1SgrU63SltcvekdQC%2BAInkv0pp4fSc3SoOhLee%2B9zjcLCURPS56AfmVYFsNCgylTCsbcBmCCoDF2xqb09xVrwjaLrcng1XuS8PViRHMTKt89bRF8Jrf7chpEJd04dK1APhMTs5%2B7I%2BuX9EBTP2WZa4HeUQ8U5KhHb3AsPz3BwCKtKII2hlysPb836p4aIZiu1FDCbAhfs%2B53dwvWyCNlhLoYCLCFd5cXPhRcVL3mpkZWpIraX%2BL1YSw2j4BXq9UpNitrWJv%2FO3fnk13BGjacAhXU0mD%2Bo%2FrZD21ADuIvSPZhp6QMXR7JF75cu9E1OAK5GeZjhLyBgAITnq2q2MzhXE4cyILpaSZVFY9ee4wLUcem%2F8cNtVPMTNTpsTAor%2FrP4lBTnkmQvmUdxcIQZvHPw3TMl18fTDIjkODNSn%2Bl7wubtGTHEj5RJral82r25tnJOdKGGAUnmNtNDDNjMjJBjqkAQDCJbx07pk%2Be08OvxY2N%2B%2FHG3CkOaSHHPXwWzGMvKzK%2Bu43zZ7fxbCv96wjweCoY40%2FY%2BUqp8GuGU8MHhO9OjqYDaLeJJ974XVfFcd4XVWd1zicSUTr9LHZ4pFBZDlOG5anjJEcj2jDLAAR%2FMafZILJKHhi78hZbGQ%2Bxr3o5P1FfmekDa4KeUb9zaMApix13b1voNxCg%2B2xX5%2B%2BiT5W8VQwwtRU&X-Amz-Signature=4d4b01a84bb76079d38ed2b88fb5ae402e3a59747b24a2cfc2a09adafb3e31c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JK64MIH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCADJ3aQNom3lFj3AyriWggWwezj%2FMOYhukCBO5sJIH%2FwIhAKcDrQ4EYJt26AlRi8h9gxtG6AxojUzXQUSNawoYQkruKv8DCE8QABoMNjM3NDIzMTgzODA1IgwRRkCGg2hEoPrH9L8q3AOD20w9gtRr%2B23VyTvvgFqVkVQoaZ6BAnPXmanuUUXGKIrYGJ%2BhJs3MvVmWye%2BRQ0IfuPZdq93ebOmTN43Y6%2FhJQktX5lSiWmoBaYkzVIib8zCDuyhZsb5Rjde%2FejIq6AUM%2FTFzTqcXS1xYLTs%2FeIER69B8rmK6csXUutX1cF2%2BQdmA%2B1SgrU63SltcvekdQC%2BAInkv0pp4fSc3SoOhLee%2B9zjcLCURPS56AfmVYFsNCgylTCsbcBmCCoDF2xqb09xVrwjaLrcng1XuS8PViRHMTKt89bRF8Jrf7chpEJd04dK1APhMTs5%2B7I%2BuX9EBTP2WZa4HeUQ8U5KhHb3AsPz3BwCKtKII2hlysPb836p4aIZiu1FDCbAhfs%2B53dwvWyCNlhLoYCLCFd5cXPhRcVL3mpkZWpIraX%2BL1YSw2j4BXq9UpNitrWJv%2FO3fnk13BGjacAhXU0mD%2Bo%2FrZD21ADuIvSPZhp6QMXR7JF75cu9E1OAK5GeZjhLyBgAITnq2q2MzhXE4cyILpaSZVFY9ee4wLUcem%2F8cNtVPMTNTpsTAor%2FrP4lBTnkmQvmUdxcIQZvHPw3TMl18fTDIjkODNSn%2Bl7wubtGTHEj5RJral82r25tnJOdKGGAUnmNtNDDNjMjJBjqkAQDCJbx07pk%2Be08OvxY2N%2B%2FHG3CkOaSHHPXwWzGMvKzK%2Bu43zZ7fxbCv96wjweCoY40%2FY%2BUqp8GuGU8MHhO9OjqYDaLeJJ974XVfFcd4XVWd1zicSUTr9LHZ4pFBZDlOG5anjJEcj2jDLAAR%2FMafZILJKHhi78hZbGQ%2Bxr3o5P1FfmekDa4KeUb9zaMApix13b1voNxCg%2B2xX5%2B%2BiT5W8VQwwtRU&X-Amz-Signature=b0a881d86ce11e292f44ffd1350a8699dbba96ae6188bd82aa23b12ac15ca790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

