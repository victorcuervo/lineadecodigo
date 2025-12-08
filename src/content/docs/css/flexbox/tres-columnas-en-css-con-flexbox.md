---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SJE43CV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T105718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNgg4BbK8RIh0CvGxB4lZFqGk2QiZfQEsvSK0YNAHJ%2FgIhALj1Uo8dCP1VeApI9XTLWYcxujD46UWkleb5WWYZR1dhKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfGay7W6yap1K18S8q3AOB3y%2BC4OxW4s5Pr5IG6K%2BgFHR6QsrSFgRPT6x7nrx%2BYRazTpMW3kBRzSCBNfATqku3aOIhlMp0wHt57En1SWJpVrfUcdhsjAFa9N6CA9aNBQgX%2BVyWi6AjxVo3lpcSFy0C%2Bofh1KwAyZXG01wQ0S2IOUXrOvQUHBJIly%2FxtEYfhhbFagYNaj2E3xd1hj9p2Wx%2FKgotnFCCiphXaqxAI8%2FOHY4BRkk7CwSzGXRlI0DVd%2BTqkaxT6JS8gXzmT6gh3TMDzaR%2B5vMdTlYYhInWanoZFMf5f83f1xdFVY23qwaymk3jf%2B4aMbgcLzIXWVb7Zq63EtkQ2a4P9sat52nM1Y7mDkaRMy8nuZNLBbwvh28kyyYrKORASlO2kjBw4XQkNz%2FPXmz9kbHdEFnFuQGIAR2VnkmhkGW9%2FjNQ8KHnTXfQDihDzjteQcx3n5FuRtWLsiFQgYBymJmbzqIp0Dj893O1ElOwTPvuG3TpdIGprfzqrpxZC%2Fw1Ax3SHtzAknnRaFqrBR7l0jqScGnVw1AAGN5Gy5YLDZNzdeSYlNMiS48LjooIAY4PA3vZZHJJ2Keblnt2U%2BXRFesLwHXxelymiYOT1JwlQYquoqrLuEA16%2FyBuoQbYnylQbL6yUbuejDr7dnJBjqkASBeLIGr%2Fe7TMadIFaLZaVoPJhyYmBZj2KCV%2F3dqO1odnmN9q9PR0HGO4Yqy5WRHFqLqopUaPbAHkuCkSJhN8j%2Fi%2BeRafxXk1bamipueiYyQ87TWcuPPNt345a6%2FJxzJd%2FNM5%2BRtcQg8y6u2xP68EqirLsAAgoIVnVDRseF2dMEqLKadrIY%2B8RPfQsH9HPBo%2FUk3%2FJ09BEM5nZIjj6Hn%2BUKNeLVs&X-Amz-Signature=8bdc41a3b89fcee3abfed4ecb19ae11e6e0bd580720dcdc4d19ea17e16fbe639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SJE43CV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T105718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNgg4BbK8RIh0CvGxB4lZFqGk2QiZfQEsvSK0YNAHJ%2FgIhALj1Uo8dCP1VeApI9XTLWYcxujD46UWkleb5WWYZR1dhKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfGay7W6yap1K18S8q3AOB3y%2BC4OxW4s5Pr5IG6K%2BgFHR6QsrSFgRPT6x7nrx%2BYRazTpMW3kBRzSCBNfATqku3aOIhlMp0wHt57En1SWJpVrfUcdhsjAFa9N6CA9aNBQgX%2BVyWi6AjxVo3lpcSFy0C%2Bofh1KwAyZXG01wQ0S2IOUXrOvQUHBJIly%2FxtEYfhhbFagYNaj2E3xd1hj9p2Wx%2FKgotnFCCiphXaqxAI8%2FOHY4BRkk7CwSzGXRlI0DVd%2BTqkaxT6JS8gXzmT6gh3TMDzaR%2B5vMdTlYYhInWanoZFMf5f83f1xdFVY23qwaymk3jf%2B4aMbgcLzIXWVb7Zq63EtkQ2a4P9sat52nM1Y7mDkaRMy8nuZNLBbwvh28kyyYrKORASlO2kjBw4XQkNz%2FPXmz9kbHdEFnFuQGIAR2VnkmhkGW9%2FjNQ8KHnTXfQDihDzjteQcx3n5FuRtWLsiFQgYBymJmbzqIp0Dj893O1ElOwTPvuG3TpdIGprfzqrpxZC%2Fw1Ax3SHtzAknnRaFqrBR7l0jqScGnVw1AAGN5Gy5YLDZNzdeSYlNMiS48LjooIAY4PA3vZZHJJ2Keblnt2U%2BXRFesLwHXxelymiYOT1JwlQYquoqrLuEA16%2FyBuoQbYnylQbL6yUbuejDr7dnJBjqkASBeLIGr%2Fe7TMadIFaLZaVoPJhyYmBZj2KCV%2F3dqO1odnmN9q9PR0HGO4Yqy5WRHFqLqopUaPbAHkuCkSJhN8j%2Fi%2BeRafxXk1bamipueiYyQ87TWcuPPNt345a6%2FJxzJd%2FNM5%2BRtcQg8y6u2xP68EqirLsAAgoIVnVDRseF2dMEqLKadrIY%2B8RPfQsH9HPBo%2FUk3%2FJ09BEM5nZIjj6Hn%2BUKNeLVs&X-Amz-Signature=1d476d628c4400c5509e8ed5baf5744f5330c629c70f1bba043839ea7771ef53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

