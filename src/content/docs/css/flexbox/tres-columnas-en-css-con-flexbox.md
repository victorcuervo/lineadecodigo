---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WGT5YBY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFK1%2FEURRSSqFZw%2FGjPHQP7arN5k4jlV%2BCwVWPOEX0HuAiAbVzInlefbOV5GxEJAxG0wHUvXHyUDFCLx7sSztuQiZSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMsFz8LMYkdT1DRESkKtwDIKBdVr016v9jjqOOAadXyq9LFInAUwDW5IgrcVn%2B%2BG4fywIvAaKYvFe6shzfASqIS66XZtgFqoaDILWOyPhS06EnqifpTygUEs3Pggm1QiHpXxq0pyUrRFLlDmb7GXmZgFkT6Ky6mGvVlDye%2FAMQmBRmqq9E%2BJ507kGNJma%2BG98FjxVH4a2SAF45tBvE7eUOxkPrahShI7k9oEE1bJ9XbmLGiqv2pUc3w5z83MCgJBOP%2F8LknV6rzVr8sS71kznGlT2beCOwlathwgeNhR1cdyOz9VcDJEYdwPVrqTMOlo2VbO%2F31gC11WWSQoxXuguFg4I3Q2C%2BF3U8mEVDdJ2lCCh7X4Kyj%2Bdjd%2Fgo31gLv0%2Ff64gDR5heDY0YTZo7a0RwF6LZeXJClLIWrzM1zjcIGM%2F92HnSm41eePjibJD8Hdjgbj6AUmEDgO4ZMpV3%2FwhMMocyH6sYBp0ZyeWE8QBZ4nXKcpJTnIJdBIsCj%2BLcnXstYVXXdd65Rsxx8cWL9c9o6J5d7lQI1CxJrt6aPL9XuIFqarH%2FAm4GY%2FQmZSO4CDa86%2B37GNDMUI8MsmZoIcnA2i2BdMxuoC7GSCgjseI%2BBNLrqZu17pZvUpJhLp5Yw4NkdDtrVRvwx5jqNcUwssbNyQY6pgFeyOIEEvPRRQB07W2AShr8OS4OlIiMPPoZK%2FGG4In7BcRBAm%2FOOF9N7JEfsLFy06LSIt2aJ3cb0Gf%2BQBfqna6lN%2B9cmNi40JuZlLwOz4BHRnogKAYTWiKcCR7ryeskzuX8A7yF1UWEgF0epk9NyzFSwfMCzgKes1YRT3MLLGCB8v149%2FRcx2SpGv46FS11mcBQYVH1QXBowR3%2FQkVb7E8XmyiO3PyV&X-Amz-Signature=75a49e3fa4bdd3136767e4c814fb43e6c2ff7de7f81623b450f5fa55d875a028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WGT5YBY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFK1%2FEURRSSqFZw%2FGjPHQP7arN5k4jlV%2BCwVWPOEX0HuAiAbVzInlefbOV5GxEJAxG0wHUvXHyUDFCLx7sSztuQiZSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMsFz8LMYkdT1DRESkKtwDIKBdVr016v9jjqOOAadXyq9LFInAUwDW5IgrcVn%2B%2BG4fywIvAaKYvFe6shzfASqIS66XZtgFqoaDILWOyPhS06EnqifpTygUEs3Pggm1QiHpXxq0pyUrRFLlDmb7GXmZgFkT6Ky6mGvVlDye%2FAMQmBRmqq9E%2BJ507kGNJma%2BG98FjxVH4a2SAF45tBvE7eUOxkPrahShI7k9oEE1bJ9XbmLGiqv2pUc3w5z83MCgJBOP%2F8LknV6rzVr8sS71kznGlT2beCOwlathwgeNhR1cdyOz9VcDJEYdwPVrqTMOlo2VbO%2F31gC11WWSQoxXuguFg4I3Q2C%2BF3U8mEVDdJ2lCCh7X4Kyj%2Bdjd%2Fgo31gLv0%2Ff64gDR5heDY0YTZo7a0RwF6LZeXJClLIWrzM1zjcIGM%2F92HnSm41eePjibJD8Hdjgbj6AUmEDgO4ZMpV3%2FwhMMocyH6sYBp0ZyeWE8QBZ4nXKcpJTnIJdBIsCj%2BLcnXstYVXXdd65Rsxx8cWL9c9o6J5d7lQI1CxJrt6aPL9XuIFqarH%2FAm4GY%2FQmZSO4CDa86%2B37GNDMUI8MsmZoIcnA2i2BdMxuoC7GSCgjseI%2BBNLrqZu17pZvUpJhLp5Yw4NkdDtrVRvwx5jqNcUwssbNyQY6pgFeyOIEEvPRRQB07W2AShr8OS4OlIiMPPoZK%2FGG4In7BcRBAm%2FOOF9N7JEfsLFy06LSIt2aJ3cb0Gf%2BQBfqna6lN%2B9cmNi40JuZlLwOz4BHRnogKAYTWiKcCR7ryeskzuX8A7yF1UWEgF0epk9NyzFSwfMCzgKes1YRT3MLLGCB8v149%2FRcx2SpGv46FS11mcBQYVH1QXBowR3%2FQkVb7E8XmyiO3PyV&X-Amz-Signature=235dd7c96be4ff57be5fba82af4805b0006c27e8d419e649d14c26e3747ecd79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

