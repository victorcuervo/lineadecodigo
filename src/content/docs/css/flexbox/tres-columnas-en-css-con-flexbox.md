---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UECPITOA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATE3hDipRL16ExL4goKtdrxlv4vVzTMqncaGAcAtLanAiEA0wTncbXTyFERxpIfrr2uIo2%2BsPbAivGyrvg9jMIlqZUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDGEpO0gKzflpwcBhCrcA83GhD7k536vS3pi7Vlw8pnYV4rMzldNP7gLS1VtZkVk%2B7pVhhrUhwTsp8LPQUMjU5woqVDzd%2FmeC8FRq%2BsORq9NjoSBq7miv9JJ82JWLl5vUoMbW41HkYX3R3DQDuour5DFjj8TH%2BDOXH7bccvbLkeec4qVTGMdeQMQiiirZYfRuLSAIjRXVOgcLCZVBFbcDz6Q%2FwSTrMPWYRN4Vm30JrUbnq9auCEBklLgGNb8VYGizpFO1vzk1L%2B4S2U40Q9ZL3BUED5AlcxYk%2F5IkkEw1Ml1GuGy8sdwVpYQBHNcXrbaQ37qdajjprONWEOzhlf8lzDMxxhO9ME5Rz1GjvNbd%2BT4hM6juBIJM9GWG2F%2FRbAj8foPiQxU4SHZobF42fMeLthICA77C%2BMF8XIab2RMrSUYoBXlzQIQtHJDWsIIq%2F1eOfLabLrc%2FGj%2BObu3XdUsCYYIP3Ky9pVbuqtw0thMVrb3guvN%2F6E8Ufg43sq%2FnbYVo%2FjkzhTNW3FT2Nk2kKgz5ZqdszZMUtbFHY9KA%2F%2BCzmB%2Frq2AnshbFfP6jYOlEzjxvUfYtcGkknR24dKAhmYvsWeneDnto%2Bq%2BlyBGVdoHBxk37P2xKINZBx1Hh%2BLIX1G%2Bl6gOkgMjpbAN8upNMMak38kGOqUB3y6EdH%2Bapj5AyxcabeFQ2rqNAnxi0nB4z9zCSfcaitKnp%2F7oC12kPDRI%2F5OskJY3LOsDu6kSZUu1yvbz0inCkdZ0O4%2F7UhPInuSyJhUTsM4rnfy4AmT%2BZFrhVwKX9XUsAG%2BoqpcC2lwesUwdJElKGAaOMmApV2n4%2BkprZWCxKP2t%2FaO5V1he6V6Ug%2BlgZha0llArdE4aN3aQK%2B7f2qZ4zTQWCWLP&X-Amz-Signature=7eedfbf0e269df04780f24fa9168a7a19970b333adf60d8519e0b796553ef679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UECPITOA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATE3hDipRL16ExL4goKtdrxlv4vVzTMqncaGAcAtLanAiEA0wTncbXTyFERxpIfrr2uIo2%2BsPbAivGyrvg9jMIlqZUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDGEpO0gKzflpwcBhCrcA83GhD7k536vS3pi7Vlw8pnYV4rMzldNP7gLS1VtZkVk%2B7pVhhrUhwTsp8LPQUMjU5woqVDzd%2FmeC8FRq%2BsORq9NjoSBq7miv9JJ82JWLl5vUoMbW41HkYX3R3DQDuour5DFjj8TH%2BDOXH7bccvbLkeec4qVTGMdeQMQiiirZYfRuLSAIjRXVOgcLCZVBFbcDz6Q%2FwSTrMPWYRN4Vm30JrUbnq9auCEBklLgGNb8VYGizpFO1vzk1L%2B4S2U40Q9ZL3BUED5AlcxYk%2F5IkkEw1Ml1GuGy8sdwVpYQBHNcXrbaQ37qdajjprONWEOzhlf8lzDMxxhO9ME5Rz1GjvNbd%2BT4hM6juBIJM9GWG2F%2FRbAj8foPiQxU4SHZobF42fMeLthICA77C%2BMF8XIab2RMrSUYoBXlzQIQtHJDWsIIq%2F1eOfLabLrc%2FGj%2BObu3XdUsCYYIP3Ky9pVbuqtw0thMVrb3guvN%2F6E8Ufg43sq%2FnbYVo%2FjkzhTNW3FT2Nk2kKgz5ZqdszZMUtbFHY9KA%2F%2BCzmB%2Frq2AnshbFfP6jYOlEzjxvUfYtcGkknR24dKAhmYvsWeneDnto%2Bq%2BlyBGVdoHBxk37P2xKINZBx1Hh%2BLIX1G%2Bl6gOkgMjpbAN8upNMMak38kGOqUB3y6EdH%2Bapj5AyxcabeFQ2rqNAnxi0nB4z9zCSfcaitKnp%2F7oC12kPDRI%2F5OskJY3LOsDu6kSZUu1yvbz0inCkdZ0O4%2F7UhPInuSyJhUTsM4rnfy4AmT%2BZFrhVwKX9XUsAG%2BoqpcC2lwesUwdJElKGAaOMmApV2n4%2BkprZWCxKP2t%2FaO5V1he6V6Ug%2BlgZha0llArdE4aN3aQK%2B7f2qZ4zTQWCWLP&X-Amz-Signature=ed5bc0d2ce7389ab369d33c501e13e1853797a3a6ce2a345f62521fc3fe03b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

