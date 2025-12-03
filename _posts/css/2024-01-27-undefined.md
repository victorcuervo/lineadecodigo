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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGPEGC7V%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAWdHsOxqqx8Y9Apr0QO6Khr0tlFZLPY99EV1zVZn6l3AiEA%2F9MTBg8CNFQvJPVi2ScREnWDomJBMX06LlblK52acigq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDL%2BQorZ4qDi7YTdD%2FCrcA98LwGkS2ps%2BmRCXMfQt02ef%2F1qedAVHubEqZKKiIy8s32NsxL%2B%2B00s7ZVYyHpSyHmscZkqDORVeFBjeTUIxkuzvRrWe%2FKb6R7bHPUa65R36dL5jY%2F6DRpESMu%2F3p%2FM5yr6dhWiWxPePMgJKzHw4yA61%2FyrhVxSlBgr9ZzUK4waw%2Fko2beWjcidUehat3HRPlMglEgaPMDJ6Z8GqWgoFq0wapASdcGkaRhGh%2FR90Ew8w80GwIZvj3SjjFmWebedeFc9o6Ta6vOR%2B92W9CYhUFgCLU2XcXDqlBp4C7XyX9lNmrpgk2xv1kGCx8laXeFkarkMula8A9d5wMio1S8vn%2Fys0RQI6JIBE5e66%2B%2FFzduvX2lFvgeVNQprEIXdI6cnM%2BAJG%2FMvSW9SGz6kHyRF%2Bc8wY0EKTpaKGnJcKvzclfBkF4YA7d5%2BWaqeGn%2FmAcczLkHOh1JclTF9DTYSrjeskzFQYBk5F%2B1cqt%2FeB5MR7o9DhQJ3M%2FjYp%2Bb4k44OBOcTrzm6K77LW9Tz5UyPVH1tl7J35OiJyD7BQ%2BXsVlmRlAcvq7TFDTX5jx8yngxkGkE4omb6D1cPEUy9s0YSoDXEmUVAr8s4%2F8lY3hnHaJpkSopigUexfsbZvNUZKHCjsMK%2BWvskGOqUBnX%2F5KbJyqyvLYGL6RtHXOUGgZixkxIwq1Ezww2VCieT59fxFLKiq94ZrRbbUjWI7Rg4Z2GnGz3n1M33rU4oSD3yrWmK6ZlxcM%2BxIsGeLmQMK3ceWLHKSZFAOtuSZIP7LgPqUjmVa%2FpK%2F6Pi1BoehTU7CJ%2FhpXD%2B%2BYMYmj%2Fj3MSl8Ln1cgjuwMH%2F0rOBPzCkjX9pYbOS15qx5FfqR7mhOCwjzOY2c&X-Amz-Signature=fa70ff2e468dd31a4b5ca701104f2c00b78e80a36eca67d7377e9d3dbba4b1d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGPEGC7V%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAWdHsOxqqx8Y9Apr0QO6Khr0tlFZLPY99EV1zVZn6l3AiEA%2F9MTBg8CNFQvJPVi2ScREnWDomJBMX06LlblK52acigq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDL%2BQorZ4qDi7YTdD%2FCrcA98LwGkS2ps%2BmRCXMfQt02ef%2F1qedAVHubEqZKKiIy8s32NsxL%2B%2B00s7ZVYyHpSyHmscZkqDORVeFBjeTUIxkuzvRrWe%2FKb6R7bHPUa65R36dL5jY%2F6DRpESMu%2F3p%2FM5yr6dhWiWxPePMgJKzHw4yA61%2FyrhVxSlBgr9ZzUK4waw%2Fko2beWjcidUehat3HRPlMglEgaPMDJ6Z8GqWgoFq0wapASdcGkaRhGh%2FR90Ew8w80GwIZvj3SjjFmWebedeFc9o6Ta6vOR%2B92W9CYhUFgCLU2XcXDqlBp4C7XyX9lNmrpgk2xv1kGCx8laXeFkarkMula8A9d5wMio1S8vn%2Fys0RQI6JIBE5e66%2B%2FFzduvX2lFvgeVNQprEIXdI6cnM%2BAJG%2FMvSW9SGz6kHyRF%2Bc8wY0EKTpaKGnJcKvzclfBkF4YA7d5%2BWaqeGn%2FmAcczLkHOh1JclTF9DTYSrjeskzFQYBk5F%2B1cqt%2FeB5MR7o9DhQJ3M%2FjYp%2Bb4k44OBOcTrzm6K77LW9Tz5UyPVH1tl7J35OiJyD7BQ%2BXsVlmRlAcvq7TFDTX5jx8yngxkGkE4omb6D1cPEUy9s0YSoDXEmUVAr8s4%2F8lY3hnHaJpkSopigUexfsbZvNUZKHCjsMK%2BWvskGOqUBnX%2F5KbJyqyvLYGL6RtHXOUGgZixkxIwq1Ezww2VCieT59fxFLKiq94ZrRbbUjWI7Rg4Z2GnGz3n1M33rU4oSD3yrWmK6ZlxcM%2BxIsGeLmQMK3ceWLHKSZFAOtuSZIP7LgPqUjmVa%2FpK%2F6Pi1BoehTU7CJ%2FhpXD%2B%2BYMYmj%2Fj3MSl8Ln1cgjuwMH%2F0rOBPzCkjX9pYbOS15qx5FfqR7mhOCwjzOY2c&X-Amz-Signature=5b2e745551c0fc74e1f35de3162a9eee3d98b5bbf7e91014991848d3e017378e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

